"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type InfoHome = {
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
};

type ApiRes = {
  code: number;
  data: InfoHome[];
};

export default function InfoHome() {
  const [info, setInfo] = useState<InfoHome[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("api/Information");
      const result: ApiRes = await res.json();
      if (res.ok) setInfo(result.data);
    };
    fetchData();
  }, []);

  return (
    <section className="bg-white py-10 px-6 md:px-20">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-[#0E1A35] mb-6 border-l-5 border-[#FAA41A] pl-3">
          Informasi Terbaru
        </h2>
        <Link href={"/information"}>
          <p className="bg-[#0E1A35] text-white px-3 py-2 rounded-md text-sm hover:bg-[#1e2c4f]">
            Semua Informasi
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {info.slice(0, 3).map((item) => (
          <Link key={item.id} href={`information/${item.id}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              {item.image && (
                <Image
                  width={300}
                  height={300}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {item.content}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
