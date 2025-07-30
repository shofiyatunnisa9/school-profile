import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET ALL
export async function GET() {
  const infos = await prisma.information.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({
    code: 200,
    status: "succes",
    message: "succes get all datas",
    data: infos,
  });
}

// POST CREATE
export async function POST(req: NextRequest) {
  const body = await req.json();
  const info = await prisma.information.create({
    data: {
      title: body.title,
      content: body.content,
      image: body.image || "",
    },
  });
  return NextResponse.json({
    code: 201,
    status: "succes",
    message: "Succes Create datas",
    data: info,
  });
}
