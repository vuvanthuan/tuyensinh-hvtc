import Image from "next/image";

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
    </section>
  );
}
