import { CheckCircle2, Quote } from "lucide-react";

const testimonials = [
  {
    initials: "NL",
    name: "Nguyễn Thị Lan",
    job: "Nhân viên ngân hàng",
    program: "Tài chính - Ngân hàng",
    context: "Vừa học vừa duy trì công việc tại chi nhánh ngân hàng",
    quote:
      "Lịch học linh hoạt giúp tôi chủ động sắp xếp sau giờ làm. Điều quan trọng nhất là tôi vẫn theo được lộ trình học mà không phải tạm dừng công việc.",
  },
  {
    initials: "MK",
    name: "Trần Minh Khoa",
    job: "Kế toán trưởng",
    program: "Kế toán",
    context: "Bổ sung bằng đại học để hoàn thiện hồ sơ thăng tiến",
    quote:
      "Chương trình phù hợp với người đã đi làm lâu năm. Nội dung học giúp tôi hệ thống lại nghiệp vụ kế toán, thuế và báo cáo tài chính một cách bài bản hơn.",
  },
  {
    initials: "HN",
    name: "Phạm Hồng Nhung",
    job: "Chuyên viên tài chính",
    program: "Quản trị kinh doanh",
    context: "Học thêm kiến thức quản trị để mở rộng vai trò công việc",
    quote:
      "Tôi chọn hệ vừa học vừa làm vì cần một lộ trình thực tế. Phần tư vấn hồ sơ và hỗ trợ học tập giúp tôi yên tâm hơn khi quay lại việc học.",
  },
] as const;

export function Testimonials() {
  const [featured, ...remaining] = testimonials;

  return (
    <section className="section-block bg-[#f7fbf8]">
      <div className="page-container">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="section-label">Cảm nhận học viên</p>
            <h2 className="section-title mt-3">
              Những câu chuyện học tập từ người đang đi làm
            </h2>
          </div>
          <p className="text-sm leading-7 text-gray-600 md:text-base">
            Mỗi học viên có một hoàn cảnh khác nhau: cần bổ sung bằng cấp, nâng
            chuẩn chuyên môn hoặc mở rộng cơ hội nghề nghiệp. Điểm chung là họ
            cần một chương trình đủ linh hoạt để theo học song song với công
            việc.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="relative overflow-hidden rounded-2xl bg-[#005f55] p-7 text-white shadow-[0_18px_44px_rgba(0,95,85,0.18)] md:p-8">
            <div className="absolute inset-0 bg-[url('/enrollment-bg-overlay.png')] bg-cover bg-center opacity-35" />
            <div className="relative">
              <div className="flex items-start justify-between gap-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-lg font-bold text-[#005f55]">
                    {featured.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{featured.name}</h3>
                    <p className="mt-1 text-sm text-white/78">{featured.job}</p>
                  </div>
                </div>
                <Quote
                  aria-hidden="true"
                  className="h-9 w-9 flex-shrink-0 text-[#F5A623]"
                />
              </div>

              <p className="mt-8 text-xl leading-9 font-semibold">
                “{featured.quote}”
              </p>

              <div className="mt-8 grid gap-3 border-t border-white/16 pt-6 sm:grid-cols-2">
                <InfoPill label="Ngành học" value={featured.program} />
                <InfoPill label="Bối cảnh" value={featured.context} />
              </div>
            </div>
          </article>

          <div className="grid gap-4">
            {remaining.map((testimonial) => (
              <article
                className="rounded-2xl border border-[#dfe9e3] bg-white p-6 shadow-sm"
                key={testimonial.name}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#e8f5e9] font-bold text-[#1a5c3a]">
                    {testimonial.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#1a5c3a]">
                      {testimonial.job}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-gray-600">
                  “{testimonial.quote}”
                </p>

                <div className="mt-5 grid gap-2 text-sm text-gray-700">
                  <MetaLine label="Ngành" value={testimonial.program} />
                  <MetaLine label="Lý do học" value={testimonial.context} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/12 px-4 py-3 ring-1 ring-white/14 backdrop-blur">
      <p className="text-xs font-semibold tracking-wide text-[#F5A623] uppercase">
        {label}
      </p>
      <p className="mt-1 text-sm leading-6 text-white/90">{value}</p>
    </div>
  );
}

function MetaLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle2
        aria-hidden="true"
        className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1a5c3a]"
        strokeWidth={2.4}
      />
      <span>
        <span className="font-semibold text-gray-900">{label}: </span>
        {value}
      </span>
    </div>
  );
}
