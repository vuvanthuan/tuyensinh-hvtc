import { NextResponse } from "next/server";

import type { HoSoDangKyInput } from "~/lib/googleSheets";
import { uploadFileToDrive } from "~/lib/googleDrive";
import { appendToSheet } from "~/lib/googleSheets";

const fileFields = [
  { name: "anhThe", label: "anh-the" },
  { name: "anhCccdTruoc", label: "anh-cccd-truoc" },
  { name: "anhCccdSau", label: "anh-cccd-sau" },
  { name: "minhChungBangTotNghiep", label: "bang-tot-nghiep" },
  { name: "minhChungBangDiem", label: "bang-diem" },
  { name: "minhChungGiayKhaiSinh", label: "giay-khai-sinh" },
  { name: "minhChungUuTien", label: "giay-to-uu-tien" },
] as const;

const parseFormData = async (request: Request) => {
  const formData = await request.formData();
  const data: Record<string, string> = {};

  formData.forEach((value, key) => {
    if (typeof value === "string") data[key] = value;
  });

  return { formData, data };
};

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    const maHoSo = `VLVH${Date.now()}`;

    if (contentType.includes("multipart/form-data")) {
      const { formData, data } = await parseFormData(request);
      const fileUrls: Record<string, string> = {};

      await Promise.all(
        fileFields.map(async ({ name, label }) => {
          const value = formData.get(name);

          if (!(value instanceof File) || value.size === 0) return;

          const uploadedFile = await uploadFileToDrive({
            file: value,
            maHoSo,
            label,
          });

          fileUrls[name] = uploadedFile.url;
        }),
      );

      await appendToSheet({
        ...(data as unknown as HoSoDangKyInput),
        maHoSo,
        fileUrls,
      });

      return NextResponse.json({
        success: true,
        maHoSo,
        message: "Hồ sơ đã được ghi nhận!",
      });
    }

    const body = (await request.json()) as HoSoDangKyInput;
    await appendToSheet({ ...body, maHoSo });

    return NextResponse.json({
      success: true,
      maHoSo,
      message: "Hồ sơ đã được ghi nhận!",
    });
  } catch (error) {
    console.error("submit-hoso error", error);

    return NextResponse.json(
      {
        success: false,
        message: "Có lỗi xảy ra",
      },
      { status: 500 },
    );
  }
}
