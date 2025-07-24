import Link from "next/link";

export default function InformationPage() {
  const info = [
    {
      images: "/informasi/1.jpeg",
      title: "Tahun Ajaran Baru 2024/2025",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      images: "/informasi/2.jpg",
      title: "Materi Olimpiade IPA 2025",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      images: "/informasi/3.jpg",
      title: "Ekstrakurikuler Pramuka di Sekolah Xyz",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <div className="pt-28 px-6">
      <h1 className="text-3xl font-bold text-center text-[#0E1A35] mb-10">
        Informasi Sekolah
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {info.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded overflow-hidden group transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={item.images}
              alt={`Info ${index + 1}`}
              className="w-full h-68 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 text-[#0E1A35]">
              <h2 className="text-lg font-bold mb-2">{item.title}</h2>
              <p className="text-sm text-justify text-gray-700 line-clamp-3">
                {item.caption}
              </p>

              <Link
                href={"/InfoDetail"}
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
