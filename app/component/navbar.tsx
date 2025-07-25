import { IoHome } from "react-icons/io5";
import { FaSchoolFlag } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdPhotoLibrary } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";
import { FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Navbar() {
  return (
    <>
      <nav className="fixed top-9 left-0 right-0 z-50 bg-[#E5E5E5] shadow px-4 py-3 flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <img src="/logo1.png" alt="Logo" className="w-10 h-10" />
          <h1 className="text-[#0E1A35] font-bold text-lg">Sekolah Xyz</h1>
        </div>
        <ul className="hidden md:flex gap-6 text-[#0E1A35] font-medium">
          <p className="flex gap-1  items-center">
            <IoHome />
            <Link href={"/"}>Home</Link>
          </p>

          <p className="flex gap-1 items-center">
            <TbTargetArrow />
            <Link href={"/profile"}>Profile</Link>
          </p>

          <li className="flex gap-1 items-center">
            <FaStar />
            <Link href={"/guru"}> Guru & Staff</Link>
          </li>
          <li className="flex gap-1 items-center">
            <FaSchoolFlag />
            <Link href={"/fasilitas"}>Fasilitas</Link>
          </li>
          <li className="flex gap-1 items-center">
            <MdPhotoLibrary />
            <Link href={"/galleri"}>Galleri</Link>
          </li>
          <li className="flex gap-1 items-center">
            <FaInfoCircle />
            <Link href={"/information"}>Informasi</Link>
          </li>
          <li className="flex gap-1 items-center">
            <RiContactsBook2Fill />
            <Link href={"/contact"}>Kontak</Link>
          </li>
        </ul>

        <Link
          href={"/login"}
          className="bg-[#0E1A35] text-white px-4 py-2 rounded hover:bg-[#1f2e50] text-sm"
        >
          Login
        </Link>
        {/* <Button className="bg-[#14213D] text-[#E5E5E5] cursor-pointer">
          Login
        </Button> */}
      </nav>
    </>
  );
}
