import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { Candidate } from "@/models/candidate";
import { dbInit } from "@/lib/db";

export async function POST(req: Request) {
  try {

    // ✅ initialize database
    await dbInit();

    const { email, mobile, password, gender } = await req.json();

    if (!email || !mobile || !password || !gender) {
      return NextResponse.json(
        { message: "All fields required" },
        { status: 400 }
      );
    }

    // ✅ check existing user
    const existingUser = await Candidate.findOne({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 409 }
      );
    }

    // ✅ hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ create candidate
    await Candidate.create({
      email,
      mobile,
      password: hashedPassword,
      gender,
    });

    return NextResponse.json(
      { message: "Signup successful" },
      { status: 201 }
    );

  } catch (error) {
    console.error("Signup error:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}