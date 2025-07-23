"use client";

import TopHeader from "@/components/topHeader";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Navbar from "../component/navbar";
import Footer from "@/components/footer";

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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="relative px-8 py-16 bg-[#f7f7f7] pt-28">
        <h1 className="text-3xl font-bold text-[#0E1A35] mb-8 text-center">
          Guru dan Staff
        </h1>

        {/* scroll horizontal*/}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
        >
          <FaChevronLeft className="cursor-pointer" />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-hidden px-4 scroll-smooth gap-5 relative z-0"
        >
          {teachers.map((teacher, idx) => (
            <div
              key={idx}
              className="relative group min-w-[310px] max-w-[250px] bg-white rounded-lg overflow-hidden shadow-md flex flex-col  gap-5"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
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

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
        >
          <FaChevronRight className="cursor-pointer" />
        </button>
      </div>
    </>
  );
}
