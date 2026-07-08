"use client";

import Image from "next/image";
import { Phone } from "lucide-react";

import { cn } from "@acme/ui";

const buttons = [
  {
    href: "https://zalo.me/",
    label: "Zalo",
    tooltip: "Zalo",
    className: "bg-transparent overflow-hidden",
    imageSrc: "/zalo.png",
  },
  {
    href: "https://m.me/",
    label: "Messenger",
    tooltip: "Chat với tư vấn viên",
    className: "bg-transparent overflow-hidden",
    imageSrc: "/facebook.png",
  },
  {
    href: "tel:1900000000",
    label: "Điện thoại",
    tooltip: "Gọi ngay",
    className: "bg-green-500 hover:bg-green-600",
    Icon: Phone,
  },
];

export function FloatingButtons() {
  return (
    <div className="fixed right-5 bottom-7 z-[1000] flex flex-col gap-3">
      {buttons.map((button) => (
        <a
          aria-label={button.label}
          data-label={button.tooltip}
          className={cn(
            "relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-sm font-black text-white shadow-[0_3px_10px_rgba(0,0,0,0.22),0_1px_3px_rgba(0,0,0,0.12)] transition-[transform,box-shadow] duration-150 ease-[ease] before:pointer-events-none before:absolute before:right-[58px] before:rounded-md before:bg-[#1a1a1a] before:px-2.5 before:py-1 before:text-xs before:font-medium before:whitespace-nowrap before:text-white before:opacity-0 before:transition-opacity before:duration-200 before:content-[attr(data-label)] hover:scale-110 hover:shadow-[0_6px_16px_rgba(0,0,0,0.25)] hover:before:opacity-100",
            button.className,
          )}
          href={button.href}
          key={button.label}
          rel="noreferrer"
          target={button.href.startsWith("http") ? "_blank" : undefined}
        >
          {button.imageSrc ? (
            <Image
              src={button.imageSrc}
              alt={button.label}
              width={48}
              height={48}
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            button.Icon && (
              <button.Icon
                aria-hidden="true"
                className="h-5 w-5"
                strokeWidth={2.5}
              />
            )
          )}
        </a>
      ))}
    </div>
  );
}
