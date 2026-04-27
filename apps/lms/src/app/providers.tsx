"use client";

import type * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { lmsPersistor, lmsStore } from "@acme/store";
import { SidebarProvider, ThemeProvider, Toaster } from "@acme/ui";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (typeof window === "undefined") {
    return makeQueryClient();
  } else {
    browserQueryClient ??= makeQueryClient();
    return browserQueryClient;
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <ReduxProvider store={lmsStore}>
      <PersistGate loading={null} persistor={lmsPersistor}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <SidebarProvider defaultOpen={true}>
              <NuqsAdapter>
                {children}
                <Toaster />
              </NuqsAdapter>
            </SidebarProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
