import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { Candidate } from "@/models/candidate";
import { dbInit } from "@/lib/db";

export async function POST(req: Request) {
  try {
    await dbInit();

    const { email, mobile, password, gender } = await req.json();

    if (!email || !mobile || !password) {
      return NextResponse.json({ message: "Please fill all required fields" }, { status: 400 });
    }

    const existingUser = await Candidate.findOne({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Candidate.create({
      email,
      mobile,
      password: hashedPassword,
      gender,
    });

    return NextResponse.json({ message: " ", user: newUser });
  } catch (error: any) {
    console.error("Candidate Signup Error:", error);
    return NextResponse.json({ message: error.message || "Something went wrong" }, { status: 500 });
  }
}