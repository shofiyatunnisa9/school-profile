import { infoList } from "@/lib/infoLIst";
import { notFound } from "next/navigation";

export default function InfoDetail({ params }: { params: { slug: string } }) {
  const info = infoList.find((item) => item.slug === params.slug);
  if (!info) return notFound();

  return (
    <>
      <div className="pt-28 px-6 pb-16 max-w-4xl mx-auto text-[#0E1A35]">
        <h1 className="text-3xl font-bold mb-4 text-center">{info.title} </h1>
        <img
          src={info.images}
          alt={info.title}
          className="w-full h-full object-cover rounded-lg mb-6"
        />
        <p className="text-justify text-sm leading-relaxed text-gray-800">
          {info.caption}
        </p>
      </div>
    </>
  );
}
