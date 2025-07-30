"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Information = {
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
};

type ApiResponse = {
  code: number;
  data: Information[];
};

export default function InformationPage() {
  const [informations, setInformations] = useState<Information[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/Information");
      const result: ApiResponse = await res.json();
      if (res.ok) setInformations(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="pt-28 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#0E1A35] text-center">
        Informasi Sekolah
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {informations.map((info) => (
          <Link key={info.id} href={`/information/${info.id}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              {info.image && (
                <img
                  src={info.image}
                  alt={info.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{info.title}</h2>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {info.content}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
