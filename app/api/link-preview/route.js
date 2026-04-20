import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = false;

export function GET() {
  return NextResponse.json(
    { error: "Disabled in static export build." },
    { status: 410 }
  );
}
