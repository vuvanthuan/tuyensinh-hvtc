import { google } from "googleapis";

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

export async function appendToSheet(data: HoSoDangKyInput) {
  const clientEmail = env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");
  const spreadsheetId = env.GOOGLE_SHEET_ID;

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
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
