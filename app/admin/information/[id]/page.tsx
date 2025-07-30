"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AdminNavbar from "@/components/navbarAdmin";

interface Info {
  title: string;
  content: string;
  image?: string;
}

export default function InfoDetailPage() {
  const { id } = useParams();
  const [info, setInfo] = useState<Info | null>(null);

  useEffect(() => {
    fetch(`/api/Information/${id}`)
      .then((res) => res.json())
      .then((data) => setInfo(data.data));
  }, [id]);

  if (!info) return <p className="text-center pt-28">Memuat detail...</p>;

  return (
    <>
      <AdminNavbar />
      <div className="max-w-4xl mx-auto pt-28 p-6">
        <h1 className="text-2xl font-bold mb-4 text-[#0E1A35]">{info.title}</h1>
        {info.image && (
          <img
            src={info.image}
            className="mb-4 w-full max-h-[400px] object-cover"
            alt={info.title}
          />
        )}
        <p className="text-justify text-gray-800">{info.content}</p>
      </div>
    </>
  );
}
