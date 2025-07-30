"use client";

import { useLogout } from "@/app/hook/useAuth";

import Link from "next/link";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

export default function AdminNavbar() {
  const { logout } = useLogout();
  return (
    <nav className="fixed w-full bg-[#0E1A35] text-white px-6 py-4 flex justify-between items-center shadow">
      <div className="flex items-center gap-2">
        <img src="/logo1.png" alt="Logo" className="w-10 h-10" />
        <h1 className=" font-bold text-lg">Admin Sekolah Xyz</h1>
      </div>

      <ul className="flex gap-6">
        <li>
          <Link
            href="/admin/dashboard"
            className="hover:text-[#ffd500] flex items-center gap-2 "
          >
            <FaHome />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/admin/information"
            className="hover:text-[#ffd500] flex items-center gap-2 "
          >
            <FaInfoCircle /> Informasi
          </Link>
        </li>
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
    </nav>
  );
}
