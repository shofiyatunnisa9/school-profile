"use client";

import { IoHome } from "react-icons/io5";
import { FaSchoolFlag } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdPhotoLibrary } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";
import { FaInfoCircle } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLink = [
    { label: "Home", icon: <IoHome />, href: "/" },
    { label: "Profile", icon: <TbTargetArrow />, href: "/profile" },
    { label: "Guru & Staff", icon: <FaStar />, href: "/guru" },
    { label: "Fasilitas", icon: <FaSchoolFlag />, href: "/fasilitas" },
    { label: "Galleri", icon: <MdPhotoLibrary />, href: "/galleri" },
    { label: "Informasi", icon: <FaInfoCircle />, href: "/information" },
    { label: "Kontak", icon: <RiContactsBook2Fill />, href: "/contact" },
  ];
  return (
    <>
      <nav className="fixed top-9 left-0 right-0 z-50 bg-[#E5E5E5] shadow px-4 py-3 flex justify-between items-center ">
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <img src="/logo1.png" alt="Logo" className="w-10 h-10" />
            <h1 className="text-[#0E1A35] font-bold text-lg">Sekolah Xyz</h1>
          </div>
        </Link>
        <ul className="hidden md:flex gap-6 text-[#0E1A35] font-medium">
          {navLink.map((link) => (
            <li key={link.href} className="flex items-center gap-1">
              {link.icon}
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <Link
          href={"/login"}
          className="hidden md:block bg-[#0E1A35] text-white px-4 py-2 rounded hover:bg-[#1f2e50] text-sm"
        >
          Login
        </Link>
        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiX className="h-6 w-6 text-[#0E1A35]" />
            ) : (
              <HiMenu className="h-6 w-6 text-[#0E1A35]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile sidebar */}
      <div
        className={`fixed pt-25 left-0 w-64 h-full bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold text-[#0E1A35]">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <HiX className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4 text-[#0E1A35] font-medium">
          {navLink.map((link) => (
            <li key={link.href} className="flex items-center gap-2">
              {link.icon}
              <Link href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <Link
            href={"/login"}
            onClick={() => setIsOpen(false)}
            className=" mt-4 bg-[#0E1A35] text-white px-4 py-2 rounded text-sm text-center"
          >
            Login
          </Link>
        </ul>
      </div>

      {/* Padding bawah navbar */}
      <div className="h-[64px] md:h-[72px]" />
    </>
  );
}
