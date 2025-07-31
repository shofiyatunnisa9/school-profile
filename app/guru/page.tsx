"use client";

const teachers = [
  {
    image: "/guru/10.jpg",
    name: "Didit Waluyono, S.Pd",
    subject: "Kepala Sekolah",
  },
  {
    image: "/guru/10.jpg",
    name: "Riska lalala, S.Pd",
    subject: "Guru Kelas",
  },
  {
    image: "/guru/10.jpg",
    name: "Siti Purnanigsih, S.pd",
    subject: "Guru Kelas",
  },
  {
    image: "/guru/10.jpg",
    name: "Ridwan, S.Pd",
    subject: "Guru Kelas",
  },
  {
    image: "/guru/10.jpg",
    name: "Wawan, S.Pd",
    subject: "Guru Kelas",
  },
  {
    image: "/guru/10.jpg",
    name: "Nori Susila, S.Pd",
    subject: "Guru Kelas",
  },
  {
    image: "/guru/10.jpg",
    name: "Dadar Beredar, S.Pd",
    subject: "Guru Kelas",
  },
  {
    image: "/guru/10.jpg",
    name: "Ying, S.Pd",
    subject: "Guru Kelas",
  },
];

export default function GuruList() {
  return (
    <>
      <div className="relative px-8 py-16 bg-[#f7f7f7]">
        <h1 className="text-3xl font-bold text-[#0E1A35] mb-8 text-center">
          Guru dan Staff
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded overflow-hidden group transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-68 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-3 text-center">
                <h3 className="text-[#0E1A35] font-bold text-sm">
                  {teacher.name}
                </h3>
                <p className="text-[#f59e0b] text-sm font-medium mt-1">
                  {teacher.subject}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
