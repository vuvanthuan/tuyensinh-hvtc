import { google } from "googleapis";

import type { EnrollmentLeadInput } from "@acme/validators";

import { env } from "~/env";

export interface HoSoDangKyInput {
  hoDem?: string;
  ten?: string;
  hoVaTen?: string;
  ngaySinh: string;
  noiSinh: string;
  gioiTinh: string;
  danToc: string;
  tonGiao?: string;
  email: string;
  soDienThoai: string;
  cccd: string;
  ngayCapCccd: string;
  noiCapCccd: string;
  tinhThuongTru: string;
  xaThuongTru: string;
  diaChiThuongTru: string;
  tinhHienNay?: string;
  xaHienNay?: string;
  diaChiHienNay?: string;
  ngheNghiep?: string;
  noiLamViec?: string;
  bangTotNghiep: string;
  namTotNghiep: string | number;
  noiHocTruocDay: string;
  doiTuongUuTien?: string;
  heDangKy: string;
  nganhDangKy: string;
  chuyenNganh: string;
  diemTbcht: string | number;
  maHoSo?: string;
  fileUrls?: Record<string, string>;
}

const splitFullName = (fullName: string) => {
  const parts = fullName.trim().split(/\s+/);
  const ten = parts.pop() ?? "";

  return {
    hoDem: parts.join(" "),
    ten,
  };
};

const createSheetsClient = () => {
  const clientEmail = env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
};

export async function appendToSheet(data: HoSoDangKyInput) {
  const spreadsheetId = env.GOOGLE_SHEET_ID;
  const sheets = createSheetsClient();
  const maHoSo = data.maHoSo ?? `VLVH${Date.now()}`;
  const hoVaTen = (data.hoVaTen ?? "").trim();
  const nameParts = hoVaTen ? splitFullName(hoVaTen) : null;
  const hoDem = data.hoDem ?? nameParts?.hoDem ?? "";
  const ten = data.ten ?? nameParts?.ten ?? "";

  const existingRows = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "A:A",
  });
  const stt = existingRows.data.values?.length ?? 1;

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "A:AM",
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [
        [
          stt,
          maHoSo,
          hoDem,
          ten,
          hoVaTen || `${hoDem} ${ten}`.trim(),
          data.ngaySinh,
          data.noiSinh,
          data.gioiTinh,
          data.danToc,
          data.tonGiao ?? "",
          data.email,
          data.soDienThoai,
          data.cccd,
          data.ngayCapCccd,
          data.noiCapCccd,
          data.tinhThuongTru,
          data.xaThuongTru,
          data.diaChiThuongTru,
          data.tinhHienNay ?? "",
          data.xaHienNay ?? "",
          data.diaChiHienNay ?? "",
          data.ngheNghiep ?? "",
          data.noiLamViec ?? "",
          data.bangTotNghiep,
          data.namTotNghiep,
          data.noiHocTruocDay,
          data.doiTuongUuTien ?? "",
          data.heDangKy,
          data.nganhDangKy,
          data.chuyenNganh,
          data.diemTbcht,
          data.fileUrls?.anhThe ?? "",
          data.fileUrls?.anhCccdTruoc ?? "",
          data.fileUrls?.anhCccdSau ?? "",
          data.fileUrls?.minhChungBangTotNghiep ?? "",
          data.fileUrls?.minhChungBangDiem ?? "",
          data.fileUrls?.minhChungGiayKhaiSinh ?? "",
          data.fileUrls?.minhChungUuTien ?? "",
        ],
      ],
    },
  });

  return maHoSo;
}

const enrollmentLeadSheetTitle = "TuVan";

const ensureEnrollmentLeadSheet = async (
  sheets: ReturnType<typeof createSheetsClient>,
  spreadsheetId: string,
) => {
  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId,
    fields: "sheets.properties.title",
  });

  const sheetExists = spreadsheet.data.sheets?.some(
    (sheet) => sheet.properties?.title === enrollmentLeadSheetTitle,
  );

  if (sheetExists) return;

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        {
          addSheet: {
            properties: {
              title: enrollmentLeadSheetTitle,
            },
          },
        },
      ],
    },
  });

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `${enrollmentLeadSheetTitle}!A1:F1`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          "Thời gian",
          "Họ và tên",
          "Số điện thoại",
          "Email",
          "Ngành học",
          "Nguồn",
        ],
      ],
    },
  });
};

export async function appendEnrollmentLeadToSheet(data: EnrollmentLeadInput) {
  const spreadsheetId = env.GOOGLE_SHEET_ID;
  const sheets = createSheetsClient();

  await ensureEnrollmentLeadSheet(sheets, spreadsheetId);

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${enrollmentLeadSheetTitle}!A:F`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [
        [
          new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }),
          data.fullName,
          data.phone,
          data.email ?? "",
          data.major,
          "Landing - Giữ suất tư vấn",
        ],
      ],
    },
  });
}
