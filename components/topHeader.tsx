"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function TopHeader() {
  return (
    <div className="fixed top-0 z-50 bg-[#0E1A35] text-[#E5E5E5] text-sm py-2 px-4">
      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        <div className="flex gap-6 items-center">
          <ContactItem icon={<FaPhoneAlt />} text="0221-00000" />
          <ContactItem icon={<MdEmail />} text="example01@gmail.com" />
          <ContactItem
            icon={<FaLocationDot />}
            text="Jln. 001 Kecamatan X Koto Singkarak"
          />

          <ContactItem icon={<FaPhoneAlt />} text="0221-00000" />
          <ContactItem icon={<MdEmail />} text="example01@gmail.com" />
        </div>
      </Marquee>
    </div>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="flex items-center gap-2 min-w-max">
      {icon}
      {text}
    </span>
  );
}
