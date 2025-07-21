import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"/home"}>Home</Link>

      <Link href={"/products"}>Profile</Link>
    </>
  );
}
