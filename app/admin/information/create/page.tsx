"use client";
import AdminNavbar from "@/components/navbarAdmin";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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
      let imageUrl = image; // Gunakan URL jika ada

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

      // Kirim data informasi
      const response = await fetch("/api/Information", {
        method: "POST",
        body: JSON.stringify({ title, content, image: imageUrl }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        toast.success("Informasi berhasil dibuat!");
        router.push("/admin/information");
      } else {
        toast.error("Gagal membuat informasi");
      }
    } catch (error) {
      toast.error("Terjadi kesalahan");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="p-6 pt-28">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
              Tambah Informasi Baru
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
                  Judul Informasi *
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Masukkan judul informasi"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Gambar Informasi
                </label>
                <div className="space-y-3">
                  {/* File Upload */}
                  <div>
                    <label
                      htmlFor="imageFile"
                      className="block text-sm text-gray-600 mb-2"
                    >
                      Upload dari device:
                    </label>
                    <input
                      id="imageFile"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Format: JPG, PNG, GIF. Maksimal 5MB
                    </p>
                  </div>

                  {/* URL Input */}
                  <div>
                    <label
                      htmlFor="imageUrl"
                      className="block text-sm text-gray-600 mb-2"
                    >
                      Atau masukkan URL gambar:
                    </label>
                    <input
                      id="imageUrl"
                      type="url"
                      placeholder="https://example.com/image.jpg"
                      value={image}
                      onChange={(e) => {
                        setImage(e.target.value);
                        setImageFile(null); // Reset file input
                      }}
                      disabled={!!imageFile}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
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
                  Konten Informasi *
                </label>
                <textarea
                  id="content"
                  placeholder="Masukkan konten informasi"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
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
                        src={URL.createObjectURL(imageFile)}
                        alt="Preview"
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <Image
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
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
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
                      Simpan Informasi
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => router.push("/admin/information")}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors"
                >
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
