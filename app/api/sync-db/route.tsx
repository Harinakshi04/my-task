import { NextResponse } from "next/server";
import { sequelize } from "@/lib/db";

export async function GET() {
  if (process.env.NODE_ENV === "development") {
    await sequelize.sync();
  }

  return NextResponse.json({ message: "DB synced" });
}