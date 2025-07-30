"use client";

import Image from "next/image";
import Link from "next/link";

export default function GalleryListHome() {
  return (
    <section className="bg-white py-10 px-6 md:px-20">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-[#0E1A35] mb-6 border-l-5 border-[#FAA41A] pl-3">
          Galleri
        </h2>
        <Link href={"/galleri"}>
          <p className="bg-[#0E1A35] text-white px-3 py-2 rounded-md text-sm hover:bg-[#1e2c4f]">
            Semua Galleri
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            image: "/galleri/3.jpg",
            caption: "Tahun Ajaran Baru",
          },
          {
            image: "/galleri/2.png",
            caption: "Proses Pembelajaran",
          },
          {
            image: "/galleri/lomba.jpg",
            caption: "Tujuh Belasan",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-sm shadow-md"
          >
            <Image
              src={item.image}
              alt={item.caption}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
              <p className="text-white text-lg text-center font-bold">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
