import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";

import { cn } from "@acme/ui";

import { env } from "~/env";

import "~/app/styles.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://tuyensinh.hvtc.edu.vn"
      : "http://localhost:3000",
  ),
  title: "Tuyển sinh HVTC Vừa làm vừa học",
  description:
    "Trang đăng ký tư vấn tuyển sinh hệ đại học vừa làm vừa học Học Viện Tài Chính.",
  openGraph: {
    title: "Tuyển sinh HVTC Vừa làm vừa học",
    description:
      "Đăng ký tư vấn chương trình đại học vừa làm vừa học của Học Viện Tài Chính.",
    url: "https://tuyensinh.hvtc.edu.vn",
    siteName: "Học Viện Tài Chính",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [{ url: "/hvtc-logo-mark.png", type: "image/png" }],
    apple: [{ url: "/hvtc-logo-mark.png", type: "image/png" }],
    shortcut: [{ url: "/hvtc-logo-mark.png", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1a5c3a" },
    { media: "(prefers-color-scheme: dark)", color: "#1a5c3a" },
  ],
};

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body
        className={cn(
          "min-h-screen bg-white font-sans text-gray-900 antialiased",
          inter.variable,
        )}
      >
        {props.children}
      </body>
    </html>
  );
}
