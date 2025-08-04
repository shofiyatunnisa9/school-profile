import Image from "next/image";

export default function FasilityPage() {
  const fasility = [
    {
      images: "/fasilitas/gedung.png",
      caption: "Gedung Sekolah",
    },
    {
      images: "/fasilitas/chair.png",
      caption: "Ruang Belajar",
    },
    {
      images: "/fasilitas/toilet.png",
      caption: "Kamar Mandi",
    },
    {
      images: "/fasilitas/gedung.png",
      caption: "Gedung Sekolah",
    },
  ];

  return (
    <div>
      <div className="p-5 relative z-0">
        <h1 className="text-3xl font-bold text-[#0E1A35] mb-8 text-center pt-5">
          Fasilitas Sekolah Xyz
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 relative z-0">
          {fasility.map((item, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-sm shadow-md"
            >
              <Image
                width={300}
                height={300}
                src={item.images}
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
