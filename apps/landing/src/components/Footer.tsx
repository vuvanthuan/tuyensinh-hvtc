import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const contacts = [
  {
    Icon: MapPin,
    text: "ĐỊA CHỈ: Phân hiệu Học viện Tài Chính TP.HCM, B2/1A, Đ. Số 385, Tăng Nhơn Phú, Hồ Chí Minh 70000, Việt Nam",
  },
  {
    Icon: Phone,
    text: "Điện thoại: 0934272956 - Mr.Phúc",
  },
];

const emails = [
  {
    label: "Email tuyển sinh",
    value: "tuyensinh@hvtc.edu.vn",
  },
  {
    label: "Email GV hỗ trợ",
    value: "buihongphuc2901@gmail.com",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#00483f] py-12 text-white">
      <div className="absolute inset-0 bg-[url('/hvtc-footer-bg.png')] bg-cover bg-center opacity-95" />
      <div className="absolute inset-0 bg-[#00483f]/35" />
      <div className="page-container relative z-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full bg-white shadow-md">
                <Image
                  src="/hvtc-logo-mark.png"
                  alt="Logo Học Viện Tài Chính"
                  fill
                  className="object-contain p-1"
                  sizes="56px"
                />
              </span>
              <div>
                <h2 className="font-bold">Học Viện Tài Chính</h2>
                <p className="text-sm text-white/70">
                  Academy of Finance - Vừa làm vừa học
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-[28rem] text-sm leading-6 text-white/75">
              Chương trình đào tạo đại học vừa làm vừa học giúp học viên chủ
              động học tập, nâng cao năng lực chuyên môn và phát triển sự nghiệp
              bền vững.
            </p>
          </div>

          <div className="md:justify-self-end">
            <h3 className="font-bold text-[#F5A623]">Liên hệ</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {contacts.map((contact) => (
                <li className="flex items-center gap-2" key={contact.text}>
                  <contact.Icon
                    aria-hidden="true"
                    className="h-4 w-4 flex-shrink-0 text-[#F5A623]"
                    strokeWidth={2.4}
                  />
                  <span>{contact.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 md:max-w-[30rem]">
              {emails.map((email) => (
                <a
                  className="group rounded-xl border border-white/15 bg-white/10 p-4 text-sm text-white shadow-sm backdrop-blur transition hover:border-[#F5A623]/70 hover:bg-white/15"
                  href={`mailto:${email.value}`}
                  key={email.value}
                >
                  <span className="mb-2 flex items-center gap-2 font-bold text-[#F5A623]">
                    <Mail
                      aria-hidden="true"
                      className="h-4 w-4 flex-shrink-0"
                      strokeWidth={2.4}
                    />
                    {email.label}
                  </span>
                  <span className="block leading-6 break-all text-white/86 group-hover:text-white">
                    {email.value}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center text-xs text-white/60">
          © 2026 Học Viện Tài Chính. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
