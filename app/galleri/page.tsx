import TopHeader from "@/components/topHeader";
import Navbar from "../component/navbar";

export default function GalleriesPage() {
  const galleries = [
    {
      images: "/galleri/3.jpg",
      caption:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      images: "/galleri/lomba.jpg",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      images: "/galleri/olim.jpg",
      caption:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
      images: "/galleri/2.png",
      caption:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      images: "/galleri/olim.jpg",
      caption:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
  ];

  return (
    <div>
      <TopHeader />
      <Navbar />
      <div className="p-5 relative z-0">
        <h1 className="text-3xl font-bold text-[#0E1A35] mb-8 text-center pt-28">
          Galleri Sekolah Xyz
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 relative z-0">
          {galleries.map((item, idx) => (
            <div
              key={idx}
              className="shadow overflow-hidden relative hover:scale-105 transition-transform duration-300 bg-white"
            >
              <img
                src={item.images}
                alt={`Foto ${idx + 1}`}
                className="overflow-hidden w-full h-60 object-cover"
              />
              <div className="p-2 text-sm text-justify  text-[#0E1A35]">
                {item.caption}
              </div>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
