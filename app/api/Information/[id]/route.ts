import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  const info = await prisma.information.findUnique({ where: { id } });

  if (!info) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({
    code: 200,
    status: "Success",
    message: "Get detail data",
    data: info,
  });
}

// PUT EDIT
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await req.json();

  const updated = await prisma.information.update({
    where: { id },
    data: {
      title: body.title,
      content: body.content,
      image: body.image || "",
    },
  });

  return NextResponse.json({
    code: 200,
    status: "Success",
    message: "Update successful",
    data: updated,
  });
}

// DELETE
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  await prisma.information.delete({ where: { id } });

  return NextResponse.json({
    code: 200,
    status: "Success",
    message: "Deleted",
  });
}
