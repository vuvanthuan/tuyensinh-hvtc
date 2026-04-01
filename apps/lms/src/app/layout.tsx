import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { cn, SidebarInset } from "@acme/ui";

import { AppHeader } from "~/components/layout/app-header";
import { AppSidebar } from "~/components/layout/app-sidebar";
import { env } from "~/env";
import { Providers } from "./providers";

import "~/app/styles.css";
import "~/lib/api"; // Initialize API and mocks

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://turbo.t3.gg"
      : "http://localhost:3000",
  ),
  title: "CMS Studio — Learning Platform",
  description: "A modern CMS for managing your learning content.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background max-h-screen font-sans antialiased",
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <Providers>
          <AppSidebar />
          <SidebarInset>
            <AppHeader />
            <main className="mx-auto flex max-h-[calc(100vh-60px)] w-full max-w-[1400px] flex-1 flex-col gap-6 overflow-scroll p-6 pt-4">
              {props.children}
            </main>
          </SidebarInset>
        </Providers>
      </body>
    </html>
  );
}
