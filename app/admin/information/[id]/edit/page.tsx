"use client";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import AdminNavbar from "@/components/navbarAdmin";

export default function EditPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`/api/Information/${id}`, {
        method: "PUT",
        body: JSON.stringify({ title, content, image }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        router.push("/admin/information");
      } else {
        alert("Gagal mengupdate informasi");
      }
    } catch (error) {
      alert("Terjadi kesalahan");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="p-6 pt-25">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
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

              {/* Image URL */}
              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  URL Gambar
                </label>
                <input
                  id="image"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Kosongkan jika tidak ada gambar
                </p>
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
              {image && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preview Gambar
                  </label>
                  <div className="w-32 h-24 bg-gray-100 rounded-lg overflow-hidden border">
                    <img
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
                      Update Informasi
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
