import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { Recruiter } from "@/models/recruiter";
import { dbInit } from "@/lib/db";

export async function POST(req: Request) {
  try {

    await dbInit();

    const { firstName, lastName, companyName, email, password, phone } = await req.json();

    if (!firstName || !lastName || !companyName || !email || !password || !phone) {
      return NextResponse.json(
        { message: "All fields required" },
        { status: 400 }
      );
    }

    const existing = await Recruiter.findOne({
      where: { email }
    });

    if (existing) {
      return NextResponse.json(
        { message: "Recruiter already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const recruiter = await Recruiter.create({
      firstName,
      lastName,
      companyName,
      email,
      password: hashedPassword,
      phone
    });

    return NextResponse.json({
      message: " ",
      recruiter
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { message: "Signup failed" },
      { status: 500 }
    );
  }
}