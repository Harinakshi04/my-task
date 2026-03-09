import { NextResponse } from "next/server";
import { sequelize } from "lib/sequelize";

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ message: "DB sync disabled in production" });
  }

  await sequelize.sync({ alter: true });

  return NextResponse.json({ message: "Database synced successfully" });
}