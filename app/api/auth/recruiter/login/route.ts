import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { Recruiter } from "@/models/recruiter";
import { dbInit } from "@/lib/db";

export async function POST(req: Request) {
  try {
    // Initialize DB & models
    await dbInit();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    // Find recruiter by email
    const user = await Recruiter.findOne({ where: { email } });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 400 }
      );
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.getDataValue("password"));
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 400 }
      );
    }

    // Exclude password from response
    const { password: _, ...userData } = user.toJSON();

    return NextResponse.json({
      message: " ",
      user: userData,
    });
  } catch (error: any) {
    console.error("Recruiter Login Error:", error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}