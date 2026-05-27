"use client";

import { useState } from "react";
import Image from "next/image";
import { FileText, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#majors", label: "Ngành đào tạo" },
  { href: "#enrollment", label: "Thông tin tuyển sinh" },
  { href: "#schedule", label: "Lịch khai giảng" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white shadow-sm">
      <nav className="page-container flex h-16 items-center justify-between gap-4">
        <a
          className="flex min-w-0 items-center gap-3"
          href="#top"
          aria-label="HVTC"
        >
          <span className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full shadow-sm ring-1 ring-[#1a5c3a]/10 sm:hidden">
            <Image
              src="/hvtc-logo-mark.png"
              alt="Học Viện Tài Chính"
              fill
              className="object-contain"
              sizes="44px"
              priority
            />
          </span>
          <span className="relative hidden h-12 w-52 flex-shrink-0 sm:block lg:w-60">
            <Image
              src="/hvtc-logo-full.png"
              alt="Học Viện Tài Chính - Academy of Finance"
              fill
              className="object-contain object-left"
              sizes="224px"
              priority
            />
          </span>
          <span className="truncate text-sm font-bold text-[#0A2240] sm:hidden">
            Học Viện Tài Chính
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              className="text-sm font-semibold text-gray-700 transition hover:text-[#1a5c3a]"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          className="hidden items-center gap-2 rounded-full bg-[#F5A623] px-5 py-2.5 text-sm font-black text-[#1a5c3a] shadow-sm transition hover:bg-[#ee9d2b] lg:flex"
          href="#register"
        >
          <FileText aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} />
          Tải lộ trình học
        </a>

        <button
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 text-[#1a5c3a] md:hidden"
          type="button"
          aria-label="Mở menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? (
            <X aria-hidden="true" className="h-5 w-5" strokeWidth={2.5} />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" strokeWidth={2.5} />
          )}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-gray-100 bg-white px-4 py-4 shadow-sm md:hidden">
          <div className="page-container flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#1a5c3a]"
                href={link.href}
                key={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="rounded-lg bg-[#F5A623] px-3 py-3 text-center text-sm font-black text-[#1a5c3a]"
              href="#register"
              onClick={() => setIsOpen(false)}
            >
              Tải lộ trình học
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
