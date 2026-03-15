import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Candidate } from "@/models/candidate";
import { Recruiter } from "@/models/recruiter";
import { dbInit } from "@/lib/db";

export async function POST(req: Request) {
  try {
    await dbInit();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password required" },
        { status: 400 }
      );
    }

    // check candidate first
    let user: any = await Candidate.findOne({ where: { email } });
    let role = "candidate";

    // if not candidate → check recruiter
    if (!user) {
      user = await Recruiter.findOne({ where: { email } });
      role = "recruiter";
    }

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );
    }

    // create token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: role,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );

    return NextResponse.json({
      message: "",
      token,
      role,
      redirect:
        role === "candidate"
          ? "/candidate/dashboard"
          : "/recruiter/dashboard",
    });

  } catch (error) {
    console.error("Login error:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}