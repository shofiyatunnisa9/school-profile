import TopHeader from "@/components/topHeader";
import Navbar from "../component/navbar";

export default function Guru() {
  const teachers = [
    {
      image: "/guru/1.jpg",
      caption: "Kepala Sekolah",
    },
    {
      image: "/guru/2.jpg",
      caption: "Guru Kelas",
    },
    {
      image: "/guru/3.jpg",
      caption: "Guru Kelas",
    },
    {
      image: "/guru/4.jpg",
      caption: "Guru Kelas",
    },
    {
      image: "/guru/5.jpg",
      caption: "Guru Kelas",
    },
    {
      image: "/guru/6.jpg",
      caption: "Guru Kelas",
    },
    {
      image: "/guru/7.jpg",
      caption: "Guru Kelas",
    },
    {
      image: "/guru/8.jpg",
      caption: "Guru Agama",
    },
    {
      image: "/guru/9.jpg",
      caption: "Penjaga Sekolah",
    },
  ];

  return (
    <>
      <TopHeader />
      <Navbar />
      <div className="p-5 relative z-0">
        <h1 className="text-3xl font-bold text-[#0E1A35] mb-8 text-center pt-28">
          Guru dan Staff Sekolah Xyz
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 relative z-0 ">
          {teachers.map((item, idx) => (
            <div
              key={idx}
              className="shadow overflow-hidden relative hover:scale-105 transition-transform duration-300 bg-white"
            >
              <img
                src={item.image}
                alt={`Foto ${idx + 1}`}
                className="overflow-hidden w-full h-50 object-contain"
              />
              <div className="text-md font-semibold text-[#0E1A35] text-center">
                <p>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
