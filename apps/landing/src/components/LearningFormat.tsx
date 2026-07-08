import {
  ArrowRight,
  CheckCircle2,
  FileText,
  GraduationCap,
} from "lucide-react";

const programs = [
  {
    title: "Tốt nghiệp THPT",
    description:
      "Dành cho học sinh đã tốt nghiệp THPT hoặc tương đương, muốn theo học đại học theo lộ trình linh hoạt.",
    notes: ["Xét tuyển hồ sơ", "Lộ trình đại học", "Phù hợp người mới bắt đầu"],
  },
  {
    title: "Liên thông Cao đẳng lên Đại học",
    description:
      "Dành cho người đã có bằng Cao đẳng, cần hoàn thiện văn bằng đại học để phát triển công việc.",
    notes: [
      "Kế thừa nền tảng đã học",
      "Tối ưu thời gian học",
      "Phù hợp người đi làm",
    ],
  },
  {
    title: "Văn bằng 2",
    description:
      "Dành cho người đã có bằng đại học và muốn bổ sung ngành học mới trong khối kinh tế, tài chính, quản trị.",
    notes: [
      "Mở rộng chuyên môn",
      "Bổ sung lợi thế nghề nghiệp",
      "Học theo kế hoạch cá nhân",
    ],
  },
];

export function LearningFormat() {
  return (
    <section className="section-block bg-white" id="thong-tin-tuyen-sinh">
      <div className="page-container">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="section-label">Chương trình học</p>
            <h2 className="section-title mt-3 text-[28px] font-bold text-[#1f174c] md:text-[30px]">
              3 chương trình tuyển sinh
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              Mỗi nhóm học viên có các tiêu chí khác nhau. Chương trình được
              chia rõ theo hồ sơ đầu vào để tư vấn đúng ngành và tiết kiệm thời
              gian chuẩn bị.
            </p>

            <div className="mt-7 rounded-xl border border-[#dfe9e3] bg-[#f7fbf8] p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#1a5c3a] text-white">
                  <FileText aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a5c3a]">
                    Tư vấn theo hồ sơ thực tế
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Học viên được hướng dẫn chuẩn bị hồ sơ xét tuyển và lựa chọn
                    ngành phù hợp với mục tiêu nghề nghiệp.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {programs.map((program, index) => (
              <article
                className="group relative overflow-hidden rounded-xl border border-[#dfe9e3] bg-white p-6 shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-[#1a5c3a]/35 hover:shadow-[0_14px_34px_rgba(0,95,85,0.08)]"
                key={program.title}
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-[#1a5c3a]" />
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#e8f5e9] text-[#1a5c3a]">
                    <GraduationCap aria-hidden="true" className="h-7 w-7" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[#fff7e6] px-3 py-1 text-xs font-semibold text-[#9a6400]">
                        Chương trình {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold text-[#1a5c3a]">
                      {program.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {program.description}
                    </p>

                    <ul className="mt-5 grid gap-2 text-sm text-gray-700 sm:grid-cols-3">
                      {program.notes.map((note) => (
                        <li className="flex items-start gap-2" key={note}>
                          <CheckCircle2
                            aria-hidden="true"
                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1a5c3a]"
                            strokeWidth={2.4}
                          />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    className="inline-flex h-10 flex-shrink-0 items-center justify-center gap-2 rounded-lg bg-[#1a5c3a] px-4 text-sm font-semibold text-white transition hover:bg-[#007565] sm:self-center"
                    href="#lich-khai-giang"
                  >
                    Tư vấn
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
