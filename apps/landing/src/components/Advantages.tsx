import { CheckCircle2, GraduationCap, House, MonitorCog } from "lucide-react";

const advantages = [
  {
    Icon: CheckCircle2,
    title: "Không thi đầu vào",
    body: "Xét tuyển hồ sơ nhanh gọn, phù hợp người đi làm và học viên ở xa.",
  },
  {
    Icon: House,
    title: "Vừa đi làm, vừa có bằng đại học",
    body: "Học tập linh hoạt (onl/off), chủ động về mặt thời gian mà vẫn theo sát lộ trình đào tạo.",
  },
  {
    Icon: MonitorCog,
    title: "Công nghệ tiên tiến",
    body: "Nền tảng học tập hiện đại, hỗ trợ học liệu số và tương tác hiệu quả với giảng viên.",
  },
  {
    Icon: GraduationCap,
    title: "Giảng viên kinh nghiệm",
    body: "Đội ngũ hỗ trợ học tập đồng hành trong suốt chương trình.",
  },
];

export function Advantages() {
  return (
    <section className="section-block bg-gray-50">
      <div className="page-container">
        <h2 className="section-title text-center">
          Ưu điểm của hệ đào tạo vừa làm vừa học
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {advantages.map((advantage) => (
            <article className="flex gap-4" key={advantage.title}>
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#1a5c3a] text-xl font-black text-white shadow-md">
                <advantage.Icon
                  aria-hidden="true"
                  className="h-6 w-6"
                  strokeWidth={2.4}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {advantage.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {advantage.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
