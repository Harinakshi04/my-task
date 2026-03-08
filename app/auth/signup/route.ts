import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { Candidate } from "@/models/candidate";

export async function POST(req: Request) {
  try {
    const { email, mobile, password, gender } = await req.json();

    if (!email || !mobile || !password || !gender) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const existingUser = await Candidate.findOne({ where: { email } });

    if (existingUser) {
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

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
    console.error("Signup Error:", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}