import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Be_Vietnam_Pro } from "next/font/google";

import { cn } from "@acme/ui";

import { env } from "~/env";

import "~/app/styles.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://tuyensinh.hvtc.edu.vn"
      : "http://localhost:3000",
  ),
  title: "Tuyển Sinh Học viện Tài chính - Academy of Finance",
  description:
    "Tuyển Sinh Học viện Tài chính. Học viện Tài chính được thành lập ngày 17 tháng 8 năm 2001 theo Quyết định số 120/2001/QĐ-TTg của Thủ tướng Chính phủ. Học viện trực thuộc Bộ Tài chính.",
  openGraph: {
    title: "Tuyển Sinh Học viện Tài chính - Academy of Finance",
    description:
      "Tuyển Sinh Học viện Tài chính. Học viện Tài chính được thành lập ngày 17 tháng 8 năm 2001 theo Quyết định số 120/2001/QĐ-TTg của Thủ tướng Chính phủ. Học viện trực thuộc Bộ Tài chính.",
    url: "https://tuyensinh.hvtc.edu.vn",
    siteName: "Học Viện Tài Chính",
    images: [
      {
        url: "/banner_home.jpg",
        width: 2158,
        height: 729,
        alt: "Tuyển sinh Học viện Tài chính - Academy of Finance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuyển Sinh Học viện Tài chính - Academy of Finance",
    description:
      "Tuyển Sinh Học viện Tài chính. Học viện Tài chính được thành lập ngày 17 tháng 8 năm 2001 theo Quyết định số 120/2001/QĐ-TTg của Thủ tướng Chính phủ. Học viện trực thuộc Bộ Tài chính.",
    images: ["/banner_home.jpg"],
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

const googleSans = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-google-sans",
});

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body
        className={cn(
          "min-h-screen bg-white font-sans text-gray-900 antialiased",
          googleSans.variable,
        )}
      >
        {props.children}
      </body>
    </html>
  );
}
