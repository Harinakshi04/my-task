import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Candidate } from "@/models/candidate";
import { dbInit } from "@/lib/db";

export async function POST(req: Request) {
  try {

    await dbInit();

    const { email, password } = await req.json();

    const user = await Candidate.findOne({
      where: { email }
    });

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    const isMatch = await bcrypt.compare(
      password,
      user.getDataValue("password")
    );

    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      {
        id: user.getDataValue("id"),
        email: user.getDataValue("email")
      },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );

    const response = NextResponse.json({
      message: "Login successful" 
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24
    });

    return response;

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Login failed" },
      { status: 500 }
    );
  }
}