import { NextResponse } from "next/server";

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({
      message: "DB sync disabled in production"
    });
  }

  const { sequelize } = await import("@/lib/db");

  await sequelize.sync({ alter: true });

  return NextResponse.json({
    message: "Database synced successfully"
  });
}