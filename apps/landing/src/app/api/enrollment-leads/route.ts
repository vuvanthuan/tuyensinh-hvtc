import { NextResponse } from "next/server";

import { enrollmentLeadSchema } from "@acme/validators";

import { appendEnrollmentLeadToSheet } from "~/lib/googleSheets";

export const runtime = "nodejs";

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error && error.message) return error.message;

  return "Không thể lưu thông tin tư vấn.";
};

export async function POST(request: Request) {
  try {
    const result = enrollmentLeadSchema.safeParse(await request.json());

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message:
            result.error.issues[0]?.message ??
            "Thông tin tư vấn chưa hợp lệ. Vui lòng kiểm tra lại.",
        },
        { status: 400 },
      );
    }

    await appendEnrollmentLeadToSheet(result.data);

    return NextResponse.json({
      success: true,
      message: "Thông tin tư vấn đã được ghi nhận.",
    });
  } catch (error) {
    console.error("enrollment-leads submit error", error);

    return NextResponse.json(
      {
        success: false,
        message: getErrorMessage(error),
      },
      { status: 500 },
    );
  }
}
