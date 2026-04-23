# syntax=docker/dockerfile:1.7

FROM node:22-bookworm-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="${PNPM_HOME}:${PATH}"
ENV NEXT_TELEMETRY_DISABLED=1

RUN corepack enable

FROM base AS pruner

WORKDIR /repo

COPY . .

# CHANGE ME: update the scope only if the frontend package name changes.
ARG APP_PACKAGE=@acme/web

RUN pnpm dlx turbo@2.5.8 prune --scope="${APP_PACKAGE}" --docker

FROM base AS installer

WORKDIR /repo

COPY --from=pruner /repo/out/json/ .
# Use the root lockfile instead of the pruned one.
# `turbo prune --docker` currently drops the full `nuqs` snapshot in this repo,
# which breaks `pnpm install --frozen-lockfile` inside CI builds.
COPY --from=pruner /repo/pnpm-lock.yaml ./pnpm-lock.yaml

# The root postinstall runs workspace lint tooling and is not needed in the image build.
RUN node -e "const fs=require('fs');const p=require('./package.json');if(p.scripts?.postinstall){delete p.scripts.postinstall;fs.writeFileSync('package.json', JSON.stringify(p, null, 2)+'\\n');}"

RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile

COPY --from=pruner /repo/out/full/ .

# `apps/web/src/env.ts` skips strict env validation when `CI=true`.
# This lets GitHub Actions build the image without copying private `.env` files into the image.
ENV CI=true

# CHANGE ME: update the filter only if the frontend package name changes.
RUN pnpm turbo run build --filter=@acme/web

FROM node:22-bookworm-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN groupadd --system --gid 1001 nodejs \
 && useradd --system --uid 1001 --gid nodejs nextjs

# In a monorepo standalone build, `server.js` is emitted under `apps/web/server.js`.
COPY --from=installer --chown=nextjs:nodejs /repo/apps/web/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /repo/apps/web/.next/static ./apps/web/.next/static
COPY --from=installer --chown=nextjs:nodejs /repo/apps/web/public ./apps/web/public

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=5 \
  CMD node -e "fetch('http://127.0.0.1:3000/favicon.ico').then((res)=>process.exit(res.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "apps/web/server.js"]
