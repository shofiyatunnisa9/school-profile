import TopHeader from "@/components/topHeader";
import Navbar from "../component/navbar";

export default function GalleriesPage() {
  const galleries = [
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
    {
      image: "/galleri/olim.jpg",
      caption: "Olimpiade",
    },
    {
      image: "/galleri/olim.jpg",
      caption: "Olimpiade",
    },
  ];

  return (
    <div>
      <div className="p-5 relative z-0">
        <h1 className="text-3xl font-bold text-[#0E1A35] mb-8 text-center pt-28">
          Galleri Sekolah Xyz
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 relative z-0">
          {galleries.map((item, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-sm shadow-md"
            >
              <img
                src={item.image}
                alt={`Foto ${idx + 1}`}
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
      </div>
    </div>
  );
}
