import Image from "next/image";

const advisors = [
  {
    name: "NGƯT.PGS.TS Nguyễn Đào Tùng",
    title: "Giám đốc Học viện",
    imageUrl: "https://cms.hvtc.edu.vn/Upload/BanGiamDoc/gd.webp",
  },
  {
    name: "TS Nguyễn Văn Bình",
    title: "Phó Giám đốc Học viện",
    imageUrl: "https://cms.hvtc.edu.vn/Upload/BanGiamDoc/pgd.webp",
  },
  {
    name: "PGS.TS Nguyễn Mạnh Thiều",
    title: "Phó Giám đốc Học viện",
    imageUrl: "https://cms.hvtc.edu.vn/Upload/BanGiamDoc/PGD2.webp",
  },
  {
    name: "TS Lê Tuấn Hiệp",
    title: "Phó Giám đốc Học viện",
    imageUrl:
      "https://hvtc.edu.vn/images/6c0af152-564b-4fe9-aea6-ab6e3c22674d.png",
  },
];

export function AdvisorSection() {
  return (
    <section className="section-block bg-[#f7f7fb]">
      <div className="page-container">
        <h2 className="text-center text-[28px] leading-tight font-bold text-[#1f174c] md:text-[30px]">
          Ban lãnh đạo Học viện
        </h2>
        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#f5a623]" />

        <p className="mx-auto mt-8 w-full max-w-[1040px] text-center text-[16px] leading-8 font-medium text-[#5f5a78] md:text-[18px] md:leading-9">
          Được dẫn dắt bởi đội ngũ lãnh đạo giàu kinh nghiệm và uy tín trong
          lĩnh vực giáo dục đại học, Học viện Tài chính luôn chú trọng đổi mới
          chương trình đào tạo, nâng cao chất lượng giảng dạy và tạo môi trường
          học tập giúp sinh viên phát triển toàn diện, sẵn sàng hội nhập và
          thành công trong sự nghiệp.
        </p>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {advisors.map((advisor) => (
            <article
              className="flex min-h-[300px] flex-col items-center text-center"
              key={advisor.name}
            >
              <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-[#fff7e6] p-2 shadow-[10px_10px_0_rgba(245,166,35,0.22)] md:h-48 md:w-48">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-white ring-4 ring-white">
                  <Image
                    src={advisor.imageUrl}
                    alt={advisor.name}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 192px, 160px"
                  />
                </div>
              </div>

              <div className="mt-7 flex flex-1 flex-col items-center">
                <h3 className="min-h-[56px] max-w-[15rem] text-[18px] leading-7 font-extrabold text-[#005f55] md:text-[20px]">
                  {advisor.name}
                </h3>
                <p className="mt-3 max-w-[14rem] text-[15px] leading-6 font-semibold text-[#7a5a00] md:text-[16px]">
                  {advisor.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
