"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function GuruListHome() {
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
    <section className="bg-white py-10 px-6 md:px-20 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#0E1A35] border-l-4 border-[#FAA41A] pl-3">
          Guru dan Staff
        </h2>
        <Link href={"/guru"}>
          <p className="bg-[#0E1A35] text-white px-3 py-2 rounded-md text-sm hover:bg-[#1e2c4f]">
            Semua Guru dan Staff
          </p>
        </Link>
      </div>

      {/* Tombol Scroll */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
      >
        <FaChevronRight />
      </button>

      {/* Card Scroll Area */}
      <div
        ref={scrollRef}
        className="flex overflow-hidden gap-5 scroll-smooth scrollbar-hide px-2"
      >
        {[
          {
            image: "/guru/10.jpg",
            name: "Didit Waluyono, S.Pd",
            subject: "Kepala Sekolah",
          },
          {
            image: "/guru/10.jpg",
            name: "Riska Lalala, S.Pd",
            subject: "Guru Kelas",
          },
          {
            image: "/guru/10.jpg",
            name: "Siti Purnaningsih, S.Pd",
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
            subject: "Guru Agama",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="min-w-[270px] max-w-[250px] bg-white rounded-lg overflow-hidden shadow-md flex flex-col gap-3 group"
          >
            <Image
              src={item.image}
              alt={item.name}
              className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-3 text-center">
              <h3 className="text-[#0E1A35] font-bold text-sm">{item.name}</h3>
              <p className="text-[#f59e0b] text-sm font-medium mt-1">
                {item.subject}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
