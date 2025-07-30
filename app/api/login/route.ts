import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password } = body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json({
      code: "404",
      status: "Failed",
      message: "Email tidak ditemukan",
    });
  }
  const isPassValid = await bcrypt.compare(password, user.password);

  if (!isPassValid) {
    return NextResponse.json({
      code: "401",
      status: "Failed",
      message: "Password salah",
    });
  }

  const token = jwt.sign(
    {
      userId: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "1d" }
  );

  return NextResponse.json({
    code: "200",
    status: "Succes",
    message: "Login Berhasil",
    token,
    user: {
      id: user.id,
      email: user.email,
    },
  });
}
