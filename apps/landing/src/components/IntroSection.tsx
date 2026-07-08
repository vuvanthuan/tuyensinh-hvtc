import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function IntroSection() {
  return (
    <section className="section-block bg-[#fbfbff]">
      <div className="page-container grid items-start gap-10 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:gap-16">
        <div>
          <h2 className="max-w-2xl text-[28px] leading-[1.28] font-bold text-[#1f174c] md:text-[30px]">
            Học viện Tài chính - Phân hiệu TP. Hồ Chí Minh. Nền tảng vững chắc -
            sẵn sàng cho sự nghiệp tương lai
          </h2>
          <div className="mt-7 h-1 w-20 rounded-full bg-[#f5a623]" />

          <p className="mt-8 max-w-2xl text-[16px] leading-8 font-medium text-[#5f5a78]">
            Với chương trình đào tạo được xây dựng theo định hướng ứng dụng, đội
            ngũ giảng viên giàu kinh nghiệm cùng môi trường học tập hiện đại,
            sinh viên được trang bị kiến thức chuyên môn vững vàng và kỹ năng
            thực tiễn để tự tin phát triển trong lĩnh vực tài chính, kế toán,
            kiểm toán, ngân hàng, quản trị kinh doanh và kinh tế.
          </p>

          <Link
            className="mt-9 inline-flex h-[52px] items-center justify-center gap-3 rounded-lg bg-[#005f55] px-7 text-[15px] font-black tracking-wide text-white uppercase shadow-[0_14px_28px_rgba(0,95,85,0.2)] transition hover:bg-[#003f38] focus:ring-2 focus:ring-[#F5A623] focus:ring-offset-2 focus:outline-none md:px-9 md:text-[16px]"
            href="/tuyen-sinh"
          >
            Đăng ký tư vấn tuyển sinh miễn phí
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </Link>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-xl bg-white shadow-[0_22px_54px_rgba(31,23,76,0.12)] ring-1 ring-black/5 lg:mx-0 lg:ml-auto">
          <Image
            src="/aof-brand.png"
            alt="Giới thiệu Học viện Tài chính"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 520px, calc(100vw - 48px)"
          />
        </div>
      </div>
    </section>
  );
}
