"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import images from "@/public/informasi/1.jpeg";

type InformationProps = {
  title: string;
  content: string;
  image: string;
  createdAt: string;
};

type Response = {
  status: number;
  message: string;
  data: InformationProps[];
};
export default function InformationPage() {
  const [data, setData] = useState<Response>();

  useEffect(() => {
    axios
      .get("https://apifaker.up.railway.app/api/v1/fakeAPI?count=5", {
        headers: {
          type: JSON.stringify({
            title: "sentence",
            content: "paragraf",
            image: "landscape",
            createdAt: "timestamp",
          }),
        },
      })
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);
  if (!data) return <p>Loading...</p>;
  return (
    <div className="pt-28 px-6">
      <h1 className="text-3xl font-bold text-center text-[#0E1A35] mb-10">
        Informasi Sekolah
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded overflow-hidden group transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={item.image}
              alt={`Info ${index + 1}`}
              className="w-full h-68 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 text-[#0E1A35]">
              <h2 className="text-lg font-bold mb-2">{item.title}</h2>
              <p className="text-sm text-justify text-gray-700 line-clamp-3">
                {item.content}
              </p>

              <Link
                href={`/information/${item.title}`}
                className="inline-block mt-4 text-sm font-semibold text-[#FAA41A] hover:underline"
              >
                Baca Selengkapnya...
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
