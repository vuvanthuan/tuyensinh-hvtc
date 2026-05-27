import Image from "next/image";

export function DegreeNote() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="page-container">
        <p className="section-label text-center">Mẫu văn bằng</p>
        <h2 className="section-title mt-3 text-center">
          Không ghi hình thức đào tạo trên bằng tốt nghiệp
        </h2>
        <div className="mx-auto mt-5 mb-7 h-1 w-16 rounded-full bg-[#1a5c3a]" />

        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 shadow-sm md:p-4">
            <div className="overflow-hidden rounded-lg bg-white shadow-inner">
              <Image
                src="/aof-degree-sample.jpg"
                alt="Mẫu văn bằng tốt nghiệp Học Viện Tài Chính"
                width={800}
                height={574}
                className="h-auto w-full object-contain"
                sizes="(min-width: 768px) 448px, calc(100vw - 48px)"
              />
            </div>
            <p className="mt-3 text-center text-xs leading-5 text-gray-500">
              Ảnh mẫu văn bằng tham khảo từ nguồn công khai của AOF.
            </p>
          </div>

          <div className="text-sm leading-7 text-gray-700">
            <p>
              Theo quy định tại Thông tư 27/2019/TT-BGDĐT, văn bằng giáo dục đại
              học không ghi hình thức đào tạo. Người học chương trình Vừa làm
              vừa học sau khi tốt nghiệp được cấp bằng cử nhân có giá trị sử
              dụng theo quy định, phục vụ nhu cầu học tiếp, thi tuyển, xét nâng
              ngạch và phát triển nghề nghiệp.
            </p>
            <p className="mt-4 font-semibold text-[#1a5c3a]">
              Bằng tốt nghiệp được Bộ GD&ĐT công nhận trên toàn quốc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
