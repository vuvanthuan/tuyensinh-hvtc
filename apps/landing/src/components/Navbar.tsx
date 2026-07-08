"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const mainLinks = [
  { id: "nganh-dao-tao", label: "Ngành đào tạo" },
  { id: "thong-tin-tuyen-sinh", label: "Thông tin tuyển sinh" },
  { id: "lich-khai-giang", label: "Lịch khai giảng" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);

  if (!el) return;

  const headerHeight =
    document.querySelector("header")?.getBoundingClientRect().height ?? 112;
  const offset =
    el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
  window.scrollTo({ top: offset, behavior: "smooth" });
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("top");

  useEffect(() => {
    const observedIds = [
      "nganh-dao-tao",
      "thong-tin-tuyen-sinh",
      "lich-khai-giang",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) setActiveId(visibleEntry.target.id);
      },
      {
        rootMargin: "-96px 0px -62% 0px",
        threshold: 0.12,
      },
    );

    observedIds.forEach((id) => {
      const element = document.getElementById(id);

      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_4px_18px_rgba(15,23,42,0.08)]">
      <div className="relative hidden h-[5px] overflow-hidden bg-[#005f55] md:block">
        <div className="absolute inset-0 bg-gradient-to-r from-[#003f38]/30 via-[#005f55]/10 to-[#003f38]/38" />
      </div>

      <nav className="h-[72px] border-b border-gray-100 bg-white md:h-[88px]">
        <div className="page-container flex h-full items-center justify-between gap-4 md:gap-8">
          <button
            className="relative h-12 w-56 flex-shrink-0 cursor-pointer md:h-16 md:w-72"
            type="button"
            aria-label="Học Viện Tài Chính"
            onClick={() => scrollToSection("top")}
          >
            <Image
              src="/hvtc-logo-full.png"
              alt="Học Viện Tài Chính - Academy of Finance"
              fill
              className="object-contain object-left"
              sizes="320px"
              priority
            />
          </button>

          <div className="hidden h-full min-w-0 flex-1 items-center justify-end gap-10 md:flex lg:gap-12">
            {mainLinks.map((link) => {
              const isActive = activeId === link.id;

              return (
                <button
                  className={`relative flex cursor-pointer items-center py-2 text-[16px] leading-none font-bold transition after:absolute after:right-0 after:-bottom-2 after:left-0 after:h-[2px] after:rounded-full after:transition ${
                    isActive
                      ? "text-green-700 after:bg-green-700"
                      : "text-gray-700 after:bg-transparent hover:text-green-700 hover:after:bg-green-700"
                  }`}
                  key={`${link.label}-${link.id}`}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-shrink-0 items-center gap-3">
            <Link
              className="inline-flex h-11 cursor-pointer items-center justify-center rounded-lg bg-[#005f55] px-4 text-[15px] font-bold text-white shadow-[0_10px_22px_rgba(0,95,85,0.24)] transition hover:bg-[#003f38] focus:ring-2 focus:ring-[#F5A623] focus:ring-offset-2 focus:outline-none md:h-[52px] md:px-6 md:text-[16px]"
              href="/tuyen-sinh"
            >
              Đăng ký ngay
            </Link>

            <button
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-200 text-green-800 md:hidden"
              type="button"
              aria-label="Mở menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((value) => !value)}
            >
              {isOpen ? (
                <X aria-hidden="true" className="h-5 w-5" strokeWidth={2.5} />
              ) : (
                <Menu
                  aria-hidden="true"
                  className="h-5 w-5"
                  strokeWidth={2.5}
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-gray-100 bg-white px-4 py-4 shadow-sm md:hidden">
          <div className="page-container flex flex-col gap-2">
            {mainLinks.map((link) => (
              <button
                className="cursor-pointer rounded-lg px-3 py-2 text-left text-[16px] font-bold text-gray-800 hover:bg-gray-50 hover:text-green-800"
                key={`${link.label}-${link.id}`}
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  scrollToSection(link.id);
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
