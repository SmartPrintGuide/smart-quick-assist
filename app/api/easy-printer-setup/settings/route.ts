import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/db";
import PrinterSetupSettings from "@/lib/models/PrinterSetupSettings";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey12345";

function verifyAdmin(request: Request) {
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) return false;

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { username?: string };
    return decoded.username === "admin";
  } catch {
    return false;
  }
}

export async function GET() {
  try {
    await connectDB();
    const settings = await PrinterSetupSettings.findById("global").lean();

    return NextResponse.json({
      allowStartNow: settings?.allowStartNow ?? true,
    });
  } catch (error) {
    console.error("Easy printer settings GET error:", error);
    return NextResponse.json({ allowStartNow: true });
  }
}

export async function POST(request: Request) {
  try {
    if (!verifyAdmin(request)) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const body = await request.json();
    const allowStartNow = typeof body.allowStartNow === "boolean" ? body.allowStartNow : true;

    await PrinterSetupSettings.updateOne(
      { _id: "global" },
      { $set: { allowStartNow } },
      { upsert: true }
    );

    return NextResponse.json({ success: true, allowStartNow });
  } catch (error) {
    console.error("Easy printer settings POST error:", error);
    return NextResponse.json({ success: false, error: "Failed to update settings." }, { status: 500 });
  }
}
