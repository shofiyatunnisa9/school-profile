import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET DETAIL
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const info = await prisma.information.findUnique({
    where: { id: params.id },
  });
  if (!info) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({
    code: 200,
    status: "Succes",
    message: "Get detail datas",
    data: info,
  });
}

// PUT EDIT
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const updated = await prisma.information.update({
    where: { id: params.id },
    data: {
      title: body.title,
      content: body.content,
      image: body.image || "",
    },
  });
  return NextResponse.json({
    code: 200,
    status: "Succes",
    message: "Get Update datas",
    data: updated,
  });
}

// DELETE
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.information.delete({ where: { id: params.id } });
  return NextResponse.json({ code: 200, status: "Succes", message: "Deleted" });
}
