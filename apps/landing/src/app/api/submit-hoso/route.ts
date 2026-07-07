import { NextResponse } from "next/server";
import { z } from "zod";

import type { HoSoDangKyInput } from "~/lib/googleSheets";
import { uploadFileToDrive } from "~/lib/googleDrive";
import { appendToSheet } from "~/lib/googleSheets";

export const runtime = "nodejs";

const fileFields = [
  { name: "anhThe", label: "anh-the" },
  { name: "anhCccdTruoc", label: "anh-cccd-truoc" },
  { name: "anhCccdSau", label: "anh-cccd-sau" },
  { name: "minhChungBangTotNghiep", label: "bang-tot-nghiep" },
  { name: "minhChungBangDiem", label: "bang-diem" },
  { name: "minhChungGiayKhaiSinh", label: "giay-khai-sinh" },
  { name: "minhChungUuTien", label: "giay-to-uu-tien" },
] as const;

const dateStringSchema = z.string().trim().min(1);

const hoSoDangKySchema = z.object({
  hoDem: z.string().optional(),
  ten: z.string().optional(),
  hoVaTen: z.string().trim().min(1, "Vui lòng nhập họ và tên"),
  ngaySinh: dateStringSchema,
  noiSinh: z.string().trim().min(1, "Vui lòng nhập nơi sinh"),
  gioiTinh: z.string().trim().min(1, "Vui lòng chọn giới tính"),
  danToc: z.string().trim().min(1, "Vui lòng chọn dân tộc"),
  tonGiao: z.string().optional(),
  email: z.string().trim().email("Email chưa đúng định dạng"),
  soDienThoai: z
    .string()
    .trim()
    .regex(/^0\d{9}$/, "Số điện thoại phải gồm 10 số và bắt đầu bằng 0"),
  cccd: z
    .string()
    .trim()
    .regex(/^\d{12}$/, "CCCD phải gồm đúng 12 số"),
  ngayCapCccd: dateStringSchema,
  noiCapCccd: z.string().trim().min(1, "Vui lòng nhập nơi cấp CCCD"),
  tinhThuongTru: z.string().trim().min(1, "Vui lòng chọn tỉnh/thành phố"),
  xaThuongTru: z.string().trim().min(1, "Vui lòng nhập xã/phường"),
  diaChiThuongTru: z.string().trim().min(1, "Vui lòng nhập địa chỉ"),
  tinhHienNay: z.string().optional(),
  xaHienNay: z.string().optional(),
  diaChiHienNay: z.string().optional(),
  ngheNghiep: z.string().optional(),
  noiLamViec: z.string().optional(),
  bangTotNghiep: z.string().trim().min(1, "Vui lòng chọn bằng tốt nghiệp"),
  namTotNghiep: z
    .string()
    .trim()
    .regex(/^\d{4}$/),
  noiHocTruocDay: z.string().trim().min(1, "Vui lòng nhập nơi học trước đây"),
  doiTuongUuTien: z.string().optional(),
  heDangKy: z.string().trim().min(1, "Vui lòng chọn hệ đăng ký"),
  nganhDangKy: z.string().trim().min(1, "Vui lòng chọn ngành đăng ký"),
  chuyenNganh: z.string().trim().min(1, "Vui lòng chọn chuyên ngành"),
  diemTbcht: z.string().trim().min(1, "Vui lòng nhập điểm TBC học tập"),
});

const parseFormData = async (request: Request) => {
  const formData = await request.formData();
  const data: Record<string, string> = {};

  formData.forEach((value, key) => {
    if (typeof value === "string") data[key] = value;
  });

  return { formData, data };
};

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error && error.message) return error.message;

  return "Vui lòng kiểm tra cấu hình Google API.";
};

const getGoogleSetupHint = (message: string) => {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("permission") || lowerMessage.includes("403")) {
    return "Hãy kiểm tra Google Sheet/Drive folder đã share quyền Editor cho service account.";
  }

  if (lowerMessage.includes("not found") || lowerMessage.includes("404")) {
    return "Hãy kiểm tra GOOGLE_SHEET_ID hoặc GOOGLE_DRIVE_FOLDER_ID có đúng không.";
  }

  return "Vui lòng kiểm tra cấu hình Google API.";
};

const parseHoSoInput = (data: unknown) => {
  const result = hoSoDangKySchema.safeParse(data);

  if (result.success) return result.data;

  return NextResponse.json(
    {
      success: false,
      message:
        result.error.issues[0]?.message ??
        "Thông tin hồ sơ chưa hợp lệ. Vui lòng kiểm tra lại.",
    },
    { status: 400 },
  );
};

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    const maHoSo = `VLVH${Date.now()}`;

    if (contentType.includes("multipart/form-data")) {
      const { formData, data } = await parseFormData(request);
      const input = parseHoSoInput(data);

      if (input instanceof NextResponse) return input;

      const fileUrls: Record<string, string> = {};
      const uploadErrors: string[] = [];

      await Promise.all(
        fileFields.map(async ({ name, label }) => {
          try {
            const value = formData.get(name);

            if (!(value instanceof File) || value.size === 0) return;

            const uploadedFile = await uploadFileToDrive({
              file: value,
              maHoSo,
              label,
            });

            fileUrls[name] = uploadedFile.url;
          } catch (error) {
            const message = getErrorMessage(error);

            console.error(`submit-hoso drive upload error: ${name}`, error);
            uploadErrors.push(`${label}: ${message}`);
            fileUrls[name] = `Upload lỗi: ${message}`;
          }
        }),
      );

      try {
        await appendToSheet({
          ...(input as HoSoDangKyInput),
          maHoSo,
          fileUrls,
        });
      } catch (error) {
        console.error("submit-hoso sheet append error", error);
        const message = getErrorMessage(error);

        return NextResponse.json(
          {
            success: false,
            message: `Không thể lưu hồ sơ vào Google Sheet. ${message} ${getGoogleSetupHint(message)}`,
          },
          { status: 500 },
        );
      }

      return NextResponse.json({
        success: true,
        maHoSo,
        message:
          uploadErrors.length > 0
            ? "Hồ sơ đã được ghi nhận, nhưng một số file chưa upload được lên Google Drive."
            : "Hồ sơ đã được ghi nhận!",
        uploadErrors,
      });
    }

    const input = parseHoSoInput(await request.json());

    if (input instanceof NextResponse) return input;

    try {
      await appendToSheet({ ...(input as HoSoDangKyInput), maHoSo });
    } catch (error) {
      console.error("submit-hoso sheet append error", error);
      const message = getErrorMessage(error);

      return NextResponse.json(
        {
          success: false,
          message: `Không thể lưu hồ sơ vào Google Sheet. ${message} ${getGoogleSetupHint(message)}`,
        },
        { status: 500 },
      );
    }

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
