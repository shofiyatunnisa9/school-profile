"use client";

import { useEffect, useState } from "react";
import { notFound, useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

type InformationProps = {
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  updateAt: string;
};

type Response = {
  code: number;
  status: string;
  message: string;
  data: InformationProps;
};

export default function InfoDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [info, setInfo] = useState<InformationProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { id } = await params;
        const response = await fetch(`/api/Information/${id}`);
        const result: Response = await response.json();

        if (result.code === 200) {
          setInfo(result.data);
        } else {
          setError("Informasi tidak ditemukan");
        }
      } catch (error) {
        setError("Terjadi kesalahan saat memuat data");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  if (loading) {
    return (
      <div className="pt-28 px-6">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Memuat informasi...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !info) {
    return notFound();
  }

  return (
    <div className="pt-28 px-6 pb-16 max-w-4xl mx-auto text-[#0E1A35]">
      <button
        onClick={() => router.back()}
        className="flex items-center mb-4 gap-2 cursor-pointer hover:text-[#06070a]"
      >
        <FaArrowLeft /> Kembali
      </button>
      <h1 className="text-3xl font-bold mb-4 text-center">{info.title}</h1>
      {info.image && (
        <Image
          src={info.image}
          alt={info.title}
          className="w-full h-full object-cover rounded-lg mb-6"
        />
      )}
      <div className="mb-4 text-sm text-gray-500">
        <p>
          Dipublikasikan pada:{" "}
          {new Date(info.createdAt).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
      <div className="text-justify text-sm leading-relaxed text-gray-800 whitespace-pre-wrap">
        {info.content}
      </div>
    </div>
  );
}
