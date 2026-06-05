"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="relative hidden h-8 overflow-hidden bg-[#005f55] md:block">
        <div className="absolute inset-0 bg-gradient-to-r from-[#003f38]/30 via-[#005f55]/10 to-[#003f38]/38" />
      </div>

      <nav className="h-20 border-b border-gray-100 bg-white md:h-24">
        <div className="page-container flex h-full items-center justify-between gap-8">
          <button
            className="relative h-14 w-64 flex-shrink-0 md:h-20 md:w-80"
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

          <div className="hidden h-full min-w-0 flex-1 items-center justify-end gap-10 md:flex">
            {mainLinks.map((link) => {
              const isActive = activeId === link.id;

              return (
                <button
                  className={`flex h-full items-center border-b-2 text-sm font-semibold transition ${
                    isActive
                      ? "border-green-700 text-green-700"
                      : "border-transparent text-gray-700 hover:border-green-700 hover:text-green-700"
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

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-green-800 md:hidden"
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
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-gray-100 bg-white px-4 py-4 shadow-sm md:hidden">
          <div className="page-container flex flex-col gap-2">
            {mainLinks.map((link) => (
              <button
                className="rounded-lg px-3 py-2 text-left text-sm font-bold text-gray-800 hover:bg-gray-50 hover:text-green-800"
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
