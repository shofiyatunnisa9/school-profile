"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { toast } from "sonner";
import AdminNavbar from "../../../components/navbarAdmin";
import Image from "next/image";

type InformationProps = {
  id: string;
  title: string;
  content: string;
  image: string | null;
  createdAt: string;
  updateAt: string;
};

export default function AdminInfoPage() {
  const [infos, setInfos] = useState<InformationProps[]>([]);

  useEffect(() => {
    fetch("/api/Information")
      .then((res) => res.json())
      .then((data) => setInfos(data.data));
  }, []);

  const handleDelete = async (id: string) => {
    toast.promise(
      (async () => {
        const response = await fetch(`/api/Information/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          // Refresh data setelah delete berhasil
          const updatedResponse = await fetch("/api/Information");
          const updatedData = await updatedResponse.json();
          setInfos(updatedData.data);
          return "Informasi berhasil dihapus";
        } else {
          throw new Error("Gagal menghapus informasi");
        }
      })(),
      {
        loading: "Menghapus informasi...",
        success: (message) => message,
        error: (error) => error.message || "Terjadi kesalahan saat menghapus",
      }
    );
  };

  return (
    <>
      <AdminNavbar />
      <div className="p-6 pt-28">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Informasi Sekolah
          </h1>
          <Link
            href="/admin/information/create"
            className="w-full md:w-auto bg-[#FAA41A] hover:bg-[#f77f00] text-white px-4 py-2 rounded-lg flex items-center justify-center md:justify-start gap-2 transition-colors"
          >
            <FaPlus />
            Tambah Informasi
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm border">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="py-4 px-6 text-center text-xs font-bold text-gray-600 tracking-wider">
                    GAMBAR
                  </th>
                  <th className="py-4 px-6 text-center text-xs font-bold text-gray-600 tracking-wider">
                    TITLE
                  </th>
                  <th className="py-4 px-6 text-center text-xs font-bold text-gray-600 tracking-wider">
                    CONTENT
                  </th>
                  <th className="py-4 px-6 text-center text-xs font-bold text-gray-600  tracking-wider">
                    AKSI
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {infos.map((info: InformationProps) => (
                  <tr
                    key={info.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    {/* Gambar */}
                    <td className="py-4 px-6">
                      <div className="w-20 h-14 bg-gray-100 rounded-lg overflow-hidden border">
                        {info.image ? (
                          <Image
                            width={300}
                            height={300}
                            src={info.image}
                            alt={info.title}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                            No Image
                          </div>
                        )}
                      </div>
                    </td>
                    {/* Title */}
                    <td className="py-4 px-6">
                      <div className="font-medium text-gray-900 max-w-xs truncate">
                        {info.title}
                      </div>
                    </td>
                    {/* Content */}
                    <td className="py-4 px-6">
                      <div className="text-gray-600 max-w-md truncate">
                        {info.content}
                      </div>
                    </td>
                    {/* Aksi */}
                    <td className="py-4 px-6">
                      <div className="flex gap-3">
                        <Link
                          href={`/admin/information/${info.id}/edit`}
                          className="text-[#0E1A35] hover:text-[#3b4a6e] font-medium text-sm flex items-center gap-1 transition-colors"
                        >
                          <FaRegEdit />
                          Edit
                        </Link>
                        <button
                          className="text-[#e36414] hover:text-[#FAA41A] font-medium text-sm flex items-center gap-1 transition-colors cursor-pointer"
                          onClick={() => handleDelete(info.id)}
                        >
                          <FaRegTrashAlt />
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
