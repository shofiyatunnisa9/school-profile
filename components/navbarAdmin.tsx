"use client";

import { useLogout } from "@/app/hook/useAuth";
import Link from "next/link";
import { useState } from "react";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { LuLogOut } from "react-icons/lu";

export default function AdminNavbar() {
  const { logout } = useLogout();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Dashboard", icon: <FaHome />, href: "/admin/dashboard" },
    {
      label: "Information",
      icon: <FaInfoCircle />,
      href: "/admin/information",
    },
  ];

  return (
    <>
      {/* Navbar Top */}
      <nav className="fixed w-full bg-[#0E1A35] text-white px-6 py-4 flex justify-between items-center shadow z-50">
        <div className="flex items-center gap-2">
          <img src="/logo1.png" alt="Logo" className="w-10 h-10" />
          <h1 className="font-bold text-lg">Admin Sekolah Xyz</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="flex items-center gap-1 hover:underline"
            >
              {link.icon}
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
          <li>
            <button
              onClick={logout}
              className="hover:text-[#ffd500] cursor-pointer flex items-center gap-2"
            >
              <LuLogOut />
              Logout
            </button>
          </li>
        </ul>

        {/* Hamburger Menu (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiX className="h-6 w-6 text-white" />
            ) : (
              <HiMenu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Sidebar Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-[#0E1A35]">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <HiX className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4 text-[#0E1A35] font-medium">
          {navLinks.map((link) => (
            <li key={link.href} className="flex items-center gap-2">
              {link.icon}
              <Link href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="hover:text-[#ffd500] cursor-pointer flex items-center gap-2"
            >
              <LuLogOut />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
