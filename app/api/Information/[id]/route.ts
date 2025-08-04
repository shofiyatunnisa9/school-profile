// import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// type RouteParams = {
//   params: {
//     id: string;
//   };
// };

// // GET Detail
// export async function GET(
//   request: NextRequest,
//   { params }: RouteParams
// ): Promise<NextResponse> {
//   try {
//     const { id } = params;

//     const info = await prisma.information.findUnique({ where: { id } });

//     if (!info) {
//       return NextResponse.json(
//         { error: "Data tidak ditemukan" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({
//       code: 200,
//       status: "Sukses",
//       message: "Berhasil mendapatkan detail data",
//       data: info,
//     });
//   } catch (error) {
//     console.error("Error saat mengambil data:", error);
//     return NextResponse.json(
//       { error: "Kesalahan Server Internal" },
//       { status: 500 }
//     );
//   }
// }

// // PUT Edit
// export async function PUT(
//   request: NextRequest,
//   { params }: RouteParams
// ): Promise<NextResponse> {
//   try {
//     const { id } = params;
//     const body = await request.json();

//     const updated = await prisma.information.update({
//       where: { id },
//       data: {
//         title: body.title,
//         content: body.content,
//         image: body.image || "",
//       },
//     });

//     return NextResponse.json({
//       code: 200,
//       status: "Sukses",
//       message: "Update berhasil",
//       data: updated,
//     });
//   } catch (error) {
//     console.error("Error saat update data:", error);
//     return NextResponse.json(
//       { error: "Kesalahan Server Internal" },
//       { status: 500 }
//     );
//   }
// }

// // DELETE
// export async function DELETE(
//   request: NextRequest,
//   { params }: RouteParams
// ): Promise<NextResponse> {
//   try {
//     const { id } = params;

//     await prisma.information.delete({ where: { id } });

//     return NextResponse.json({
//       code: 200,
//       status: "Sukses",
//       message: "Data berhasil dihapus",
//     });
//   } catch (error) {
//     console.error("Error saat menghapus data:", error);
//     return NextResponse.json(
//       { error: "Kesalahan Server Internal" },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET Detail
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const { id } = await params;

    const info = await prisma.information.findUnique({ where: { id } });

    if (!info) {
      return NextResponse.json(
        { error: "Data tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      code: 200,
      status: "Sukses",
      message: "Berhasil mendapatkan detail data",
      data: info,
    });
  } catch (error) {
    console.error("Error saat mengambil data:", error);
    return NextResponse.json(
      { error: "Kesalahan Server Internal" },
      { status: 500 }
    );
  }
}

// PUT Edit
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const { id } = params;
    const body = await request.json();

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
      status: "Sukses",
      message: "Update berhasil",
      data: updated,
    });
  } catch (error) {
    console.error("Error saat update data:", error);
    return NextResponse.json(
      { error: "Kesalahan Server Internal" },
      { status: 500 }
    );
  }
}

// DELETE
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const { id } = params;

    await prisma.information.delete({ where: { id } });

    return NextResponse.json({
      code: 200,
      status: "Sukses",
      message: "Data berhasil dihapus",
    });
  } catch (error) {
    console.error("Error saat menghapus data:", error);
    return NextResponse.json(
      { error: "Kesalahan Server Internal" },
      { status: 500 }
    );
  }
}
