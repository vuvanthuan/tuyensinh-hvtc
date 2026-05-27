import {
  IconCertificate,
  IconSchool,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react";
import { CheckCircle2 } from "lucide-react";

const values = [
  {
    title: "Kiến thức chuyên môn",
    body: "Củng cố nền tảng tài chính, kế toán, quản trị và marketing theo hướng ứng dụng.",
    detail: "Phù hợp nhu cầu nâng chuẩn năng lực khi đang làm việc.",
    Icon: IconSchool,
  },
  {
    title: "Bằng cử nhân",
    body: "Văn bằng giáo dục đại học không ghi hình thức đào tạo theo quy định hiện hành.",
    detail: "Có thể sử dụng cho học tiếp, thi tuyển và phát triển nghề nghiệp.",
    Icon: IconCertificate,
  },
  {
    title: "Cơ hội thăng tiến",
    body: "Bổ sung điều kiện bằng cấp và kiến thức để mở rộng vị trí trong công việc.",
    detail:
      "Đặc biệt phù hợp nhóm ngành tài chính, ngân hàng, kế toán, quản trị.",
    Icon: IconTrendingUp,
  },
  {
    title: "Đồng hành học tập",
    body: "Học viên được tư vấn lộ trình, hỗ trợ hồ sơ và theo sát kế hoạch học.",
    detail: "Giảm áp lực cho người vừa đi làm vừa học.",
    Icon: IconUsers,
  },
];

const assurances = [
  "Xét tuyển hồ sơ theo từng nhóm đối tượng",
  "Lịch học linh hoạt cho người đi làm",
  "Ngành học gắn với nhu cầu nghề nghiệp thực tế",
];

export function ValuesSection() {
  return (
    <section className="section-block relative overflow-hidden bg-[#005f55] text-white">
      <div className="absolute inset-0 bg-[url('/enrollment-bg-overlay.png')] bg-cover bg-center opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#003f38]/70 via-[#005f55]/68 to-[#003f38]/84" />

      <div className="page-container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-[#F5A623] uppercase">
              Giá trị nhận được
            </p>
            <h2 className="mt-3 max-w-[42rem] text-3xl leading-tight font-bold md:text-4xl">
              Không chỉ là một văn bằng, mà là lộ trình nâng chuẩn nghề nghiệp
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/82 md:text-base">
              Chương trình hệ tại chức vừa học vừa làm phù hợp với học viên cần
              cân bằng giữa công việc, thời gian cá nhân và mục tiêu hoàn thiện
              bằng đại học.
            </p>

            <div className="mt-7 grid gap-3">
              {assurances.map((item) => (
                <div
                  className="flex items-start gap-3 rounded-lg bg-white/10 px-4 py-3 ring-1 ring-white/12 backdrop-blur"
                  key={item}
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#F5A623]"
                    strokeWidth={2.4}
                  />
                  <span className="text-sm leading-6 text-white/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value, index) => (
              <article
                className="rounded-xl bg-white px-5 py-6 text-[#22313f] shadow-[0_16px_38px_rgba(0,0,0,0.14)] ring-1 ring-white/20"
                key={value.title}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#e8f5e9] text-[#1a5c3a]">
                    <value.Icon
                      aria-hidden="true"
                      className="h-7 w-7"
                      stroke={2}
                    />
                  </div>
                  <span className="text-sm font-bold text-[#F5A623]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#1a5c3a]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {value.body}
                </p>
                <p className="mt-4 border-t border-gray-100 pt-4 text-sm leading-6 font-medium text-gray-700">
                  {value.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
