import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white" id="top">
      <Image
        src="/banner.jpg"
        alt="Tuyển sinh hệ đại học 2026 Học Viện Tài Chính"
        width={2158}
        height={729}
        className="h-auto w-full select-none"
        priority
        sizes="100vw"
      />

      <div className="pointer-events-none absolute inset-0 z-10">
        <Link
          className="pointer-events-auto absolute top-[57%] left-[29%] inline-flex h-[52px] -translate-y-1/2 items-center justify-center gap-2 rounded-xl bg-[#005f55] px-10 text-sm font-bold tracking-wide text-white uppercase shadow-[0_18px_38px_rgba(0,63,56,0.36)] ring-1 ring-[#003f38]/15 transition hover:-translate-y-[calc(50%+2px)] hover:bg-[#003f38] focus:ring-2 focus:ring-[#F5A623] focus:ring-offset-2 focus:outline-none max-lg:left-[32%] max-md:top-[60%] max-md:left-[50%] max-md:-translate-x-1/2 max-md:px-6"
          href="/tuyen-sinh"
        >
          Gửi thông tin
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
