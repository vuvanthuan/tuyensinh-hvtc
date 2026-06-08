import { Readable } from "node:stream";
import { google } from "googleapis";

import { env } from "~/env";

export interface DriveUploadInput {
  file: File;
  maHoSo: string;
  label: string;
}

const createDriveAuth = () => {
  return new google.auth.JWT({
    email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/drive"],
  });
};

const safeFileName = (value: string) =>
  value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w.-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export async function uploadFileToDrive({
  file,
  maHoSo,
  label,
}: DriveUploadInput) {
  const auth = createDriveAuth();
  const drive = google.drive({ version: "v3", auth });
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const name = `${maHoSo}-${safeFileName(label)}-${safeFileName(file.name)}`;

  const createdFile = await drive.files.create({
    requestBody: {
      name,
      parents: env.GOOGLE_DRIVE_FOLDER_ID
        ? [env.GOOGLE_DRIVE_FOLDER_ID]
        : undefined,
    },
    media: {
      mimeType: file.type || "application/octet-stream",
      body: Readable.from(buffer),
    },
    fields: "id,name,webViewLink,webContentLink",
  });

  const fileId = createdFile.data.id;

  if (fileId) {
    try {
      await drive.permissions.create({
        fileId,
        requestBody: {
          role: "reader",
          type: "anyone",
        },
      });
    } catch (error) {
      console.warn("google-drive public permission error", error);
    }
  }

  return {
    id: fileId ?? "",
    name: createdFile.data.name ?? name,
    url:
      createdFile.data.webViewLink ??
      (fileId ? `https://drive.google.com/file/d/${fileId}/view` : ""),
  };
}
