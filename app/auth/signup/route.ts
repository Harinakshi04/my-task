import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { Candidate } from "@/models/candidate";
import { Recruiter } from "@/models/recruiter";

export async function POST(req: Request) {
  try {
    const { email, mobile, password, gender, role } = await req.json();

    if (!email || !mobile || !password || !gender || !role) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (role === "candidate") {
      const existingUser = await Candidate.findOne({ where: { email } });

      if (existingUser) {
        return NextResponse.json(
          { message: "Candidate email already registered" },
          { status: 409 }
        );
      }

      await Candidate.create({
        email,
        mobile,
        password: hashedPassword,
        gender,
      });
    }

    if (role === "recruiter") {
      const existingUser = await Recruiter.findOne({ where: { email } });

      if (existingUser) {
        return NextResponse.json(
          { message: "Recruiter email already registered" },
          { status: 409 }
        );
      }

      await Recruiter.create({
        email,
        mobile,
        password: hashedPassword,
        gender,
      });
    }

    return NextResponse.json(
      { message: "" },
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