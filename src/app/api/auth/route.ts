import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const sitePassword = process.env.SITE_PASSWORD;

  if (!sitePassword) {
    return NextResponse.json({ ok: true });
  }

  if (password !== sitePassword) {
    return NextResponse.json(
      { ok: false, error: "Contraseña incorrecta" },
      { status: 401 }
    );
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("site_access", "granted", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}

export async function GET(req: NextRequest) {
  const sitePassword = process.env.SITE_PASSWORD;
  if (!sitePassword) {
    return NextResponse.json({ status: "open" });
  }

  const cookie = req.cookies.get("site_access")?.value;
  if (cookie === "granted") {
    return NextResponse.json({ status: "granted" });
  }

  return NextResponse.json({ status: "locked" });
}
