import {
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  Landmark,
  Megaphone,
} from "lucide-react";

const majors = [
  {
    name: "Tài chính - Ngân hàng",
    code: "01",
    description:
      "Trang bị nền tảng về tài chính doanh nghiệp, ngân hàng, đầu tư và quản trị dòng tiền.",
    highlights: [
      "Tài chính doanh nghiệp",
      "Ngân hàng thương mại",
      "Phân tích đầu tư",
    ],
    Icon: Landmark,
  },
  {
    name: "Kế toán",
    code: "02",
    description:
      "Phù hợp người muốn phát triển nghiệp vụ kế toán, kiểm toán, thuế và báo cáo tài chính.",
    highlights: ["Kế toán tài chính", "Thuế và kiểm toán", "Báo cáo quản trị"],
    Icon: Calculator,
  },
  {
    name: "Quản trị kinh doanh",
    code: "03",
    description:
      "Tập trung vào vận hành, chiến lược, nhân sự, bán hàng và quản trị hiệu quả doanh nghiệp.",
    highlights: [
      "Quản trị vận hành",
      "Chiến lược kinh doanh",
      "Quản trị nhân sự",
    ],
    Icon: BriefcaseBusiness,
  },
  {
    name: "Marketing",
    code: "04",
    description:
      "Cung cấp tư duy thị trường, thương hiệu, truyền thông và triển khai hoạt động marketing.",
    highlights: [
      "Nghiên cứu thị trường",
      "Truyền thông thương hiệu",
      "Digital marketing",
    ],
    Icon: Megaphone,
  },
];

const summary = [
  "04 ngành tuyển sinh",
  "Bằng cử nhân",
  "Lịch học linh hoạt",
  "Tư vấn lộ trình hồ sơ",
];

export function MajorsSection() {
  return (
    <section
      className="section-block relative overflow-hidden bg-[#f5faf7]"
      id="majors"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-56 bg-[linear-gradient(180deg,rgba(232,245,233,0.75),rgba(245,250,247,0))]"
      />
      <div className="page-container relative">
        <div className="mx-auto max-w-[48rem] text-center">
          <p className="section-label">Các ngành đào tạo</p>
          <h2 className="section-title mt-3">
            Đào tạo hệ vừa làm vừa học các ngành
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-600 md:text-base">
            Chương trình tập trung vào các nhóm ngành có nhu cầu tuyển dụng cao,
            phù hợp học viên đang đi làm hoặc muốn bổ sung bằng đại học.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl bg-[#005f55] shadow-[0_16px_38px_rgba(0,95,85,0.18)] ring-1 ring-[#1a5c3a]/10">
          <div
            className="relative min-h-[180px] bg-cover bg-center"
            style={{ backgroundImage: "url('/aof-branch-banner.png')" }}
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/16 to-black/42" />
            <div className="relative ml-auto flex min-h-[180px] max-w-[35rem] flex-col justify-center px-6 py-8 text-white md:px-10">
              <span className="text-xs font-semibold tracking-[0.18em] text-[#ffd56a] uppercase drop-shadow">
                Học Viện Tài Chính Phân hiệu TP.HCM
              </span>
              <p className="mt-3 text-2xl leading-tight font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] md:text-3xl">
                Chọn ngành phù hợp với mục tiêu nghề nghiệp
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {summary.map((item) => (
                  <span
                    className="rounded-full bg-black/24 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {majors.map((major) => (
            <article
              className="group relative overflow-hidden rounded-xl bg-white p-6 text-left shadow-sm ring-1 ring-[#dfe9e3] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(0,95,85,0.1)]"
              key={major.name}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 right-0 h-28 w-36 rounded-bl-[64px] bg-[#f7fbf8] opacity-90"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-6 bottom-5 h-20 w-28 bg-[url('/aof-brand-card.png')] bg-cover bg-center opacity-[0.035]"
              />
              <div className="absolute inset-y-0 left-0 w-1 bg-[#1a5c3a]" />
              <div className="relative flex min-h-16 items-start justify-between gap-5">
                <div className="grid min-w-0 grid-cols-[4rem_1fr] items-center gap-4">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-[#e8f5e9] text-[#1a5c3a] ring-1 ring-[#1a5c3a]/8">
                    <major.Icon
                      aria-hidden="true"
                      className="h-8 w-8"
                      strokeWidth={2.2}
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-semibold tracking-wide text-[#1a5c3a]/70 uppercase">
                      Ngành {major.code}
                    </span>
                    <h3 className="mt-1 text-xl leading-tight font-bold text-[#1a5c3a]">
                      {major.name}
                    </h3>
                  </div>
                </div>
                <span className="rounded-full bg-[#fff7e6] px-3 py-1 text-xs font-semibold whitespace-nowrap text-[#9a6400]">
                  Cử nhân
                </span>
              </div>

              <p className="relative mt-5 text-sm leading-6 text-gray-600">
                {major.description}
              </p>

              <ul className="relative mt-5 grid gap-2 text-sm text-gray-700 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                {major.highlights.map((highlight) => (
                  <li className="flex items-start gap-2" key={highlight}>
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1a5c3a]"
                      strokeWidth={2.4}
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <a
                className="relative mt-6 inline-flex text-sm font-semibold text-[#1a5c3a] transition hover:underline"
                href="#enrollment"
              >
                Xem chi tiết →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
