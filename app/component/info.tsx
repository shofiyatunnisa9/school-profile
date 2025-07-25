import Link from "next/link";

export default function InfoHome() {
  return (
    <section className="bg-white py-10 px-6 md:px-20">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-[#0E1A35] mb-6 border-l-5 border-[#FAA41A] pl-3">
          Informasi Terbaru
        </h2>
        <Link href={"/information"}>
          <p className="bg-[#0E1A35] text-white px-3 py-2 rounded-md text-sm hover:bg-[#1e2c4f]">
            Semua Informasi
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            image: "/informasi/1.jpeg",
            title: "Tahun Ajaran Baru Dimulai",
            caption:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            slug: "tahun-ajaran-baru",
          },
          {
            image: "/informasi/2.jpg",
            title: "Lomba HUT RI Ke-80",
            caption:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            slug: "lomba-hut-ri",
          },
          {
            image: "/informasi/3.jpg",
            title: "Kunjungan dari Dinas Pendidikan",
            caption:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            slug: "kunjungan-dinas",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded shadow overflow-hidden hover:scale-[1.02] transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-45 object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-bold text-[#0E1A35]">{item.title}</h3>
              <p className="text-xs text-[#0E1A35] text-justify">
                {item.caption}
              </p>
              <Link
                href={`/informasi/${item.slug}`}
                className="text-xs text-yellow-600 hover:underline mt-2 inline-block"
              >
                Baca Selengkapnya....
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
