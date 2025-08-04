"use client";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import AdminNavbar from "../../../../../components/navbarAdmin";
import { FaCheck } from "react-icons/fa";
import { GoX } from "react-icons/go";
import Image from "next/image";

export default function EditPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { id } = useParams();

  // Load existing data
  useEffect(() => {
    if (id) {
      fetch(`/api/Information/${id}`)
        .then((res) => res.json())
        .then((data) => {
          const info = data.data;
          setTitle(info.title);
          setContent(info.content);
          setImage(info.image || "");
        });
    }
  }, [id]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validasi tipe file
      if (!file.type.startsWith("image/")) {
        toast.error("File harus berupa gambar!");
        return;
      }

      // Validasi ukuran file (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Ukuran file maksimal 5MB!");
        return;
      }

      setImageFile(file);
      setImage(""); // Reset URL input
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let imageUrl = image; // Gunakan URL yang ada

      // Jika ada file yang diupload
      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);

        // Upload file ke API
        const uploadResponse = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (uploadResponse.ok) {
          const uploadResult = await uploadResponse.json();
          imageUrl = uploadResult.url;
        } else {
          toast.error("Gagal upload gambar");
          setIsLoading(false);
          return;
        }
      }

      // Update data informasi
      const response = await fetch(`/api/Information/${id}`, {
        method: "PUT",
        body: JSON.stringify({ title, content, image: imageUrl }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        toast.success("Informasi berhasil diupdate!");
        router.push("/admin/information");
      } else {
        toast.error("Gagal mengupdate informasi");
      }
    } catch {
      toast.error("Terjadi kesalahan");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="p-6 pt-20">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#14213D] mb-2 text-center">
              Edit Informasi
            </h1>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Judul Informasi
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Edit judul informasi"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Upload Informasi
                </label>
                <div className="space-y-3">
                  {/* File Upload */}
                  <div>
                    <label
                      htmlFor="imageFile"
                      className="block text-sm text-gray-600 mb-2"
                    >
                      Upload Gambar
                    </label>
                    <input
                      id="imageFile"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Keterangan Informasi
                </label>
                <textarea
                  id="content"
                  placeholder="Masukkan keterangan informasi"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent resize-none"
                />
              </div>

              {/* Preview Image */}
              {(image || imageFile) && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preview Gambar
                  </label>
                  <div className="w-32 h-24 bg-gray-100 rounded-lg overflow-hidden border">
                    {imageFile ? (
                      <Image
                        width={300}
                        height={300}
                        src={URL.createObjectURL(imageFile)}
                        alt="Preview"
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <Image
                        width={300}
                        height={300}
                        src={image}
                        alt="Preview"
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          const errorDiv = e.currentTarget
                            .nextElementSibling as HTMLElement;
                          if (errorDiv) {
                            errorDiv.style.display = "flex";
                          }
                        }}
                      />
                    )}
                    <div className="hidden w-full h-full items-center justify-center text-gray-400 text-xs">
                      Invalid URL
                    </div>
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#14213D] hover:bg-[#7597e0] disabled:bg-[#131a2afe] text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <FaCheck />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                      Menyimpan...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Update Informasi
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => router.push("/admin/information")}
                  className="flex items-center gap-1  bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors cursor-pointer"
                >
                  <GoX />
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
