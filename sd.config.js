import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rawTokens = JSON.parse(
  fs.readFileSync(path.join(__dirname, "design-tokens.fixed.json"), "utf8"),
);

const referenceAliases = {
  colors: "variables.colors",
  variables: "variables",
  "_primitive colors": "color.color",
  "primitive colors": "color.color",
};

const skipGroups = [
  "grays",
  "reds",
  "greens",
  "blues",
  "yellows",
  "purples",
  "pinks",
  "oranges",
  "teals",
  "cyans",
];

function getValueByPath(pathStr, tokens) {
  let finalPath = pathStr;
  for (const [alias, actualPath] of Object.entries(referenceAliases)) {
    if (pathStr === alias || pathStr.startsWith(`${alias}.`)) {
      const remaining = pathStr.slice(alias.length).replace(/^\./, "");
      finalPath = actualPath + (remaining ? "." + remaining : "");
      break;
    }
  }

  const parts = finalPath.split(".");
  let current = tokens;
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (current && typeof current === "object") {
      if (current[part] !== undefined) {
        current = current[part];
      } else if (skipGroups.includes(part)) {
        continue;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
  return current;
}

function resolveReference(ref, depth = 0) {
  if (depth > 10) return ref;
  const pathStr = ref.slice(1, -1);

  let finalPath = pathStr;
  for (const [alias, actualPath] of Object.entries(referenceAliases)) {
    if (pathStr === alias || pathStr.startsWith(`${alias}.`)) {
      const remaining = pathStr.slice(alias.length).replace(/^\./, "");
      finalPath = actualPath + (remaining ? "." + remaining : "");
      break;
    }
  }

  const parts = finalPath.split(".");
  const { key } = cleanKey(parts);

  return `var(--${key})`;
}

function transformValue(token, allTokens, depth = 0) {
  const { type, value } = token;
  if (
    typeof value === "string" &&
    value.startsWith("{") &&
    value.endsWith("}")
  ) {
    return resolveReference(value, allTokens, depth);
  }
  if (typeof value === "object" && value !== null) {
    const resolvedValue = Array.isArray(value) ? [...value] : { ...value };
    if (Array.isArray(resolvedValue)) {
      return resolvedValue.map((item) => {
        if (typeof item === "object" && item !== null) {
          const newItem = { ...item };
          for (const k in newItem) {
            if (typeof newItem[k] === "string" && newItem[k].startsWith("{")) {
              newItem[k] = resolveReference(newItem[k], allTokens, depth);
            }
          }
          return newItem;
        }
        return item;
      });
    }
    for (const k in resolvedValue) {
      if (
        typeof resolvedValue[k] === "string" &&
        resolvedValue[k].startsWith("{")
      ) {
        resolvedValue[k] = resolveReference(resolvedValue[k], allTokens, depth);
      }
    }
    if (type === "custom-shadow") {
      const { radius, color, offsetX, offsetY, spread, shadowType } =
        resolvedValue;
      const val = `${offsetX}px ${offsetY}px ${radius}px ${spread}px ${color}`;
      return shadowType === "innerShadow" ? `inset ${val}` : val;
    }
    if (type === "custom-gradient") {
      const { gradientType, rotation, stops } = resolvedValue;
      const stopsStr = stops
        .map((s) => `${s.color} ${s.position * 100}%`)
        .join(", ");
      return `${gradientType}-gradient(${rotation}deg, ${stopsStr})`;
    }
    return resolvedValue;
  }
  if (type === "dimension") {
    return typeof value === "number" ? `${value}px` : value;
  }
  return value;
}

const primitives = {};
const themeTokens = {};

function normalizePart(p) {
  return p
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/\./g, "-")
    .replace(/-+/g, "-");
}

function deduplicateSegments(key) {
  const words = key.split("-");
  let result = [...words];
  let changed = true;
  while (changed) {
    changed = false;
    const r = result;
    for (let len = Math.floor(r.length / 2); len >= 1; len--) {
      for (let i = 0; i <= r.length - len * 2; i++) {
        const a = r.slice(i, i + len).join("-");
        const b = r.slice(i + len, i + len * 2).join("-");
        if (a === b) {
          result = [...r.slice(0, i + len), ...r.slice(i + len * 2)];
          changed = true;
          break;
        }
      }
      if (changed) break;
    }
  }
  return result.join("-");
}

const categoryShortcuts = [
  [/^typography-fontsize-/, "font-size-"],
  [/^typography-fontweight-/, "font-weight-"],
  [/^typography-letterspacing-/, "letter-spacing-"],
  [/^typography-lineheight-/, "line-height-"],
  [/^typography-fontfamily-/, "font-family-"],
  [/^colors-context-/, ""],
  [/^gradient-gradients-/, "gradient-"],
  [/^effect-focus-ring-/, "focus-ring-"],
  [/^effect-shadow-/, "shadow-"],
  [/^effect-modal-overlay/, "overlay"],
  [/^effect-blur-/, "blur-"],
];

function applyAllShortcuts(key) {
  for (const [pattern, replacement] of categoryShortcuts) {
    key = key.replace(pattern, replacement);
  }
  return key;
}

function cleanKey(pathArr) {
  let parts = [...pathArr];
  const isVariable = parts[0] === "variables";

  if (parts[0] === "variables" || parts[0] === "color") parts.shift();
  parts = parts.map((p) => p.replace(/^\d+\./, ""));
  if (parts[0] === "color") parts.shift();

  const lastRaw = normalizePart(parts[parts.length - 1] ?? "");
  const stateMatch = lastRaw.match(/_(active|hover|disabled|subtle|focus)$/);
  const stateSuffix = stateMatch ? `_${stateMatch[1]}` : "";

  if (stateSuffix) {
    parts[parts.length - 1] = parts[parts.length - 1].replace(/_\w+$/, "");
  }

  let key = parts.map(normalizePart).join("-");

  key = key.replace(/\bbackground\b/g, "bg");

  key = applyAllShortcuts(key);
  key = deduplicateSegments(key);

  key = applyAllShortcuts(key);
  key = deduplicateSegments(key);

  key = key + stateSuffix;
  key = key.replace(/-+/g, "-").replace(/^-|-$/g, "");

  return { key, isVariable };
}

function walk(obj, pathArr = []) {
  if (obj && obj.value !== undefined && obj.type !== undefined) {
    const { key, isVariable } = cleanKey(pathArr);
    const value = transformValue(obj, rawTokens);

    if (value === null || value === undefined) return;

    if (typeof value === "object" && obj.type === "custom-fontStyle") {
      for (const [prop, propVal] of Object.entries(value)) {
        const cssProp = prop.replace(/([A-Z])/g, "-$1").toLowerCase();
        const val =
          typeof propVal === "number" && !["fontWeight"].includes(prop)
            ? `${propVal}px`
            : propVal;
        const subKey = `${key}-${cssProp}`;
        if (isVariable) themeTokens[subKey] = val;
        else primitives[subKey] = val;
      }
    } else if (!Array.isArray(value) && typeof value !== "object") {
      if (isVariable) themeTokens[key] = value;
      else primitives[key] = value;
    }
    return;
  }

  if (obj && typeof obj === "object") {
    for (const [key, value] of Object.entries(obj)) {
      walk(value, [...pathArr, key]);
    }
  }
}

// Walk through all tokens
const topKeys = ["color", "gradient", "grid", "font", "effect", "variables"];
topKeys.forEach((key) => {
  if (rawTokens[key]) walk(rawTokens[key], [key]);
});

function toThemeKey(key) {
  let themeKey = key
    .replace(/^bg-/, "background-color-")
    .replace(/^text-/, "color-")
    .replace(/^border-/, "border-color-")
    .replace(/^shadow-/, "box-shadow-")
    .replace(/^gradient-/, "background-image-")
    .replace(/^font-size-/, "font-size-")
    .replace(/^font-family-/, "font-family-")
    .replace(/^font-weight-/, "font-weight-")
    .replace(/^line-height-/, "line-height-")
    .replace(/^letter-spacing-/, "letter-spacing-")
    .replace(/^spacing-/, "spacing-")
    .replace(/^radius-/, "border-radius-")
    .replace(/^focus-ring-/, "ring-offset-")
    .replace(/^overlay/, "box-shadow-");

  return themeKey;
}

const themeColors = {};
const themeSpacing = {};
const themeBorderRadius = {};
const themeFontFamily = {};
const themeFontSize = {};
const themeFontWeight = {};
const themeLineHeight = {};
const themeLetterSpacing = {};
const themeBoxShadow = {};
const themeBackgroundImage = {};

Object.entries(themeTokens).forEach(([key, value]) => {
  const varValue = `var(--${key})`;

  if (
    key.startsWith("bg-") ||
    key.startsWith("text-") ||
    key.startsWith("border-")
  ) {
    let colorKey;
    if (key.startsWith("bg-")) colorKey = key.replace(/^bg-/, "");
    else if (key.startsWith("text-")) colorKey = key.replace(/^text-/, "");
    else if (key.startsWith("border-")) colorKey = key.replace(/^border-/, "");
    else colorKey = key;

    themeColors[colorKey] = varValue;
  } else if (key.startsWith("spacing-")) {
    const spacingKey = key.replace(/^spacing-/, "");
    themeSpacing[spacingKey] = varValue;
  } else if (key.startsWith("radius-")) {
    const radiusKey = key.replace(/^radius-/, "");
    themeBorderRadius[radiusKey] = varValue;
  } else if (key.startsWith("font-family-")) {
    const fontKey = key.replace(/^font-family-/, "");
    themeFontFamily[fontKey] = varValue;
  } else if (key.startsWith("font-size-")) {
    const sizeKey = key.replace(/^font-size-/, "");
    themeFontSize[sizeKey] = varValue;
  } else if (key.startsWith("font-weight-")) {
    const weightKey = key.replace(/^font-weight-/, "");
    themeFontWeight[weightKey] = varValue;
  } else if (key.startsWith("line-height-")) {
    const lineKey = key.replace(/^line-height-/, "");
    themeLineHeight[lineKey] = varValue;
  } else if (key.startsWith("letter-spacing-")) {
    const letterKey = key.replace(/^letter-spacing-/, "");
    themeLetterSpacing[letterKey] = varValue;
  } else if (key.startsWith("shadow-")) {
    const shadowKey = key.replace(/^shadow-/, "");
    themeBoxShadow[shadowKey] = varValue;
  } else if (key.startsWith("gradient-")) {
    const gradientKey = key.replace(/^gradient-/, "");
    themeBackgroundImage[gradientKey] = varValue;
  }
});

function formatThemeBlock(entries, prefix = "") {
  if (Object.keys(entries).length === 0) return "";

  const lines = [];
  for (const [key, value] of Object.entries(entries).sort()) {
    const fullKey = prefix ? `${prefix}-${key}` : key;
    lines.push(`  --${fullKey}: ${value};`);
  }
  return lines.join("\n");
}

const cssContent = `/**
 * Do not edit directly, this file was auto-generated.
 */

:root {
${Object.entries(primitives)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([key, value]) => `  --${key}: ${value};`)
  .join("\n")}

${Object.entries(themeTokens)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([key, value]) => `  --${key}: ${value};`)
  .join("\n")}
}

@theme {
  /* Colors */
${formatThemeBlock(themeColors, "color")}

  /* Spacing */
${formatThemeBlock(themeSpacing, "spacing")}

  /* Border Radius */
${formatThemeBlock(themeBorderRadius, "radius")}

  /* Font Family */
${formatThemeBlock(themeFontFamily, "font-family")}

  /* Font Size */
${formatThemeBlock(themeFontSize, "font-size")}

  /* Font Weight */
${formatThemeBlock(themeFontWeight, "font-weight")}

  /* Line Height */
${formatThemeBlock(themeLineHeight, "line-height")}

  /* Letter Spacing */
${formatThemeBlock(themeLetterSpacing, "letter-spacing")}

  /* Box Shadow */
${formatThemeBlock(themeBoxShadow, "shadow")}

  /* Gradients */
${formatThemeBlock(themeBackgroundImage, "gradient")}
}
`;

const outputDir = path.join(__dirname, "tooling/tailwind");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, "tokens.css"), cssContent);
console.log(`✅ Generated tokens.css with :root and @theme blocks`);

const scssVars = `/**
 * Do not edit directly, this file was auto-generated.
 */

${Object.entries({ ...primitives, ...themeTokens })
  .filter(([, value]) => typeof value === "string" && !value.includes("{"))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([key, value]) => `$${key.replace(/-/g, "_")}: ${value};`)
  .join("\n")}
`;

fs.writeFileSync(path.join(outputDir, "_tokens.scss"), scssVars);
console.log("✅ SCSS file generated");

const filesToDelete = [
  path.join(outputDir, "tokens.json"),
  path.join(__dirname, "design-tokens.fixed.json"),
  path.join(__dirname, "design-tokens.flat.json"),
];

for (const filePath of filesToDelete) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`🗑️  Deleted: ${path.relative(__dirname, filePath)}`);
  }
}

console.log("\n✨ Done! Generated files:");
console.log(`   - ${path.join(outputDir, "tokens.css")}`);
console.log(`   - ${path.join(outputDir, "_tokens.scss")}`);
