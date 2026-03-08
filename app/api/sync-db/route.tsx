import { NextResponse } from "next/server";
import { sequelize } from "@/lib/db";

export async function GET() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });

    return NextResponse.json({ message: "Tables created" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Sync failed" }, { status: 500 });
  }
}