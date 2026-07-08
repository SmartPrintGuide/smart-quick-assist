import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey12345";
const ADMIN_USERNAME = process.env.EASY_PRINTER_SETUP_ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.EASY_PRINTER_SETUP_ADMIN_PASSWORD || "Password123";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body || {};

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      const token = jwt.sign({ username: ADMIN_USERNAME }, JWT_SECRET, { expiresIn: "8h" });
      return NextResponse.json({ success: true, token });
    }

    return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    console.error("Easy printer admin login error:", error);
    return NextResponse.json({ success: false, error: "Failed to sign in" }, { status: 500 });
  }
}
