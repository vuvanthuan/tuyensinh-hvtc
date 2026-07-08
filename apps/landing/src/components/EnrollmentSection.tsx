import Image from "next/image";
import { Check } from "lucide-react";

import { RegisterForm } from "~/components/RegisterForm";

const audiences = [
  "Sinh viên đang theo học tại các trường ĐH, CĐ",
  "Cán bộ, công chức đã có bằng THPT",
  "Người đã tốt nghiệp THPT hoặc tương đương",
];

export function EnrollmentSection() {
  return (
    <section
      className="section-block relative overflow-hidden bg-[#005f55] text-white"
      id="lich-khai-giang"
    >
      <div className="absolute inset-0 bg-[url('/enrollment-bg-overlay.png')] bg-cover bg-center opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#003f38]/30 via-[#005f55]/10 to-[#003f38]/38" />
      <Image
        src="/trong-dong.png"
        alt=""
        width={500}
        height={500}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 object-contain opacity-20 md:h-[500px] md:w-[500px]"
      />

      <div className="page-container relative z-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="inline-flex items-end gap-3 rounded-r-xl bg-white/12 px-6 py-3 text-white shadow-md ring-1 ring-white/15 backdrop-blur">
            <span className="text-2xl font-bold">Thông tin</span>
            <span className="text-xl font-bold text-[#F5A623] italic">
              Tuyển sinh
            </span>
          </div>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="mb-5 text-xl font-bold text-white">
                Thời gian và thủ tục đăng ký
              </h3>
              <div className="text-sm leading-[1.6] text-white/86">
                <p className="mb-2.5 flex gap-2">
                  <Check
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 flex-shrink-0 text-[#F5A623]"
                    strokeWidth={3}
                  />
                  <span>Mở đăng ký trực tiếp từ ngày 25/05 - 25/07/2026.</span>
                </p>
                <p className="mb-2.5 flex gap-2">
                  <Check
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 flex-shrink-0 text-[#F5A623]"
                    strokeWidth={3}
                  />
                  <span>
                    Cách đăng ký: nộp hồ sơ xét tuyển và nhận tư vấn lộ trình từ
                    HVTC.
                  </span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-xl font-bold text-white">
                Đối tượng tuyển sinh
              </h3>
              <ul className="text-sm leading-[1.6] text-white/86">
                {audiences.map((audience) => (
                  <li className="mb-2.5 flex gap-3" key={audience}>
                    <Check
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 flex-shrink-0 text-[#F5A623]"
                      strokeWidth={3}
                    />
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="border-b-4 border-[#F5A623] bg-[#005f55] px-6 py-5 text-center text-white">
              <h3 className="text-lg font-bold">
                Đăng ký nhận tư vấn hướng dẫn
              </h3>
              <p className="mt-1 text-[13px] text-white/85">
                Ưu tiên hỗ trợ hồ sơ đăng ký trước
              </p>
            </div>
            <div className="p-4 md:p-6">
              <RegisterForm
                accentColor="#005f55"
                accentHoverColor="#007565"
                buttonLabel="Giữ suất tư vấn"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
