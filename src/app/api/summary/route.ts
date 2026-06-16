import { NextResponse } from "next/server";
import { getSummary } from "@/lib/data";

export function GET() {
  return NextResponse.json({ data: getSummary() });
}
