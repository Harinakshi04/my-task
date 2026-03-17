import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Candidate } from "@/models/candidate";
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

    const user = await Candidate.findOne({ where: { email } });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 400 }
      );
    }

    // IMPORTANT: use getDataValue
    const hashedPassword = user.getDataValue("password");

    if (!hashedPassword) {
      return NextResponse.json(
        { message: "Password not found in database" },
        { status: 500 }
      );
    }

    const isMatch = await bcrypt.compare(password, hashedPassword);

    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 400 }
      );
    }

    const { password: _, ...userData } = user.toJSON();

    const token = jwt.sign(
      {
        id: userData.id,
        email: userData.email,
        role: "candidate",
      },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );

    return NextResponse.json({
      message: "",
      token,
      user: userData,
    });
  } catch (error: any) {
    console.error("Candidate Login Error:", error);
    return NextResponse.json(
      { message: "Login failed" },
      { status: 500 }
    );
  }
}