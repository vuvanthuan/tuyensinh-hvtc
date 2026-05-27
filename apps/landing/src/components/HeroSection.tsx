import Image from "next/image";
import { Check } from "lucide-react";

import { CountdownTimer } from "~/components/CountdownTimer";
import { RegisterForm } from "~/components/RegisterForm";

const checklist = [
  "Không thi đầu vào - Xét tuyển hồ sơ",
  "Tiết kiệm thời gian chi phí",
  "Học online/offline, thời gian linh hoạt",
  "Hướng dẫn đăng ký học nhanh chóng",
  "Bằng cử nhân được Bộ GD&ĐT công nhận",
];

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#005f55] text-white"
      id="top"
    >
      <div className="absolute inset-0 bg-[url('/hvtc-hero-bg.png')] bg-cover bg-center opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#00483f]/94 via-[#006b60]/82 to-[#003f38]/95" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#00483f] to-transparent" />
      <div className="page-container relative z-10 flex min-h-[calc(100vh-4rem)] flex-col items-stretch py-12 md:py-[72px]">
        <div className="grid content-start items-start gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div
            className="relative min-w-0 overflow-hidden rounded-2xl bg-white px-7 pt-8 pb-8 text-gray-900 shadow-[0_4px_24px_rgba(0,0,0,0.12)] ring-1 ring-white/40"
            id="register"
          >
            <h1 className="mb-1.5 text-xl font-bold text-[#1a5c3a] uppercase">
              Đăng ký tư vấn
            </h1>
            <p className="mb-6 text-[13px] leading-6 break-words text-[#666]">
              Trước khi thời gian kết thúc hoặc số lượng học viên đạt giới hạn
            </p>
            <RegisterForm />
          </div>

          <div className="relative min-w-0 overflow-visible">
            <div className="flex min-w-0 items-center gap-4">
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full bg-white shadow-lg ring-2 ring-[#F5A623]/50">
                <Image
                  src="/hvtc-logo-mark.png"
                  alt="Logo Academy of Finance"
                  fill
                  className="object-contain p-1"
                  sizes="80px"
                  priority
                />
              </div>
              <div className="min-w-0">
                <p className="text-2xl leading-tight font-black uppercase sm:text-3xl">
                  Học Viện Tài Chính Phân Hiệu Thành Phố Hồ Chí Minh
                </p>
                <p className="text-2xl font-bold text-[#F5A623] italic">
                  Tuyển sinh
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-3xl leading-tight font-black uppercase sm:text-5xl">
                Hệ đại vừa làm vừa học
              </p>
              <div className="mt-5 flex max-w-full flex-wrap rounded-lg bg-[#F5A623] px-4 py-2 text-xs leading-5 font-black whitespace-normal text-[#1a5c3a] uppercase shadow-md sm:inline-flex sm:text-sm">
                Học trực tuyến · Chủ động thời gian · Tiết kiệm chi phí
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
              <ul className="space-y-3">
                {checklist.map((item) => (
                  <li
                    className="flex items-start gap-3 text-sm font-semibold"
                    key={item}
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#2e8b57] text-white">
                      <Check
                        aria-hidden="true"
                        className="h-4 w-4"
                        strokeWidth={3}
                      />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="animate-soft-float min-h-72 rounded-2xl bg-gradient-to-br from-[#007565]/85 via-[#005f55]/95 to-[#0A2240] p-4 shadow-[0_18px_42px_rgba(0,0,0,0.22)] md:p-6">
                <div className="flex h-full flex-col items-center justify-center rounded-xl bg-white/92 p-4 text-center shadow-inner md:p-6">
                  <div className="relative h-32 w-72 max-w-full">
                    <Image
                      src="/hvtc-logo-full.png"
                      alt="Học Viện Tài Chính - Academy of Finance"
                      fill
                      className="object-contain"
                      sizes="288px"
                    />
                  </div>
                  <div className="mt-6 h-1 w-24 rounded-full bg-[#F5A623]" />
                  <p className="mt-4 text-sm font-semibold text-[#1a5c3a]">
                    Chương trình vừa làm vừa học chính thức
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 w-full max-w-[720px]">
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
}
