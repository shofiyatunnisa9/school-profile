import Image from "next/image";

export default function Sambutan() {
  return (
    <section className="py-12 px-10 bg-white">
      <div className="max-w-4xl mx-auto bg-[#e5e5e5] rounded-xl overflow-hidden flex flex-col md:flex-row shadow">
        {/* Foto kepala sekolah */}
        <div className="md:w-1/3 flex items-center justify-center p-4">
          <Image
            src="/kepala_sekolah.jpg"
            alt="Kepala Sekolah"
            className="w-44 h-60 object-cover border-2 border-[#0E1A35] rounded-md"
            unoptimized
          />
        </div>

        {/* Sambutan */}
        <div className="md:w-2/3 p-7">
          <h2 className="text-2xl font-bold text-[#0E1A35] mb-3">
            Sambutan Kepala Sekolah
          </h2>

          <p className="italic text-sm text-justify text-gray-700 mb-2">
            Assalamu’alaikum warahmatullahi wabarakatuh.
          </p>

          <p className="text-gray-700 text-sm leading-relaxed text-justify mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            iusto corrupti ipsam, pariatur maxime, sed quasi impedit velit ipsum
            libero eum numquam alias reprehenderit voluptate vel esse odit
            asperiores fugiat doloremque, exercitationem dicta dolorem odio ea
            in! Fugit aperiam itaque cupiditate autem impedit harum quasi error
            ratione eius hic quibusdam tempora quam sequi omnis ipsum recusandae
            laudantium dolor debitis, rem eveniet libero labore blanditiis
            corrupti! Modi quae neque facere rem corrupti fuga soluta debitis.
            Aspernatur hic, aliquam perspiciatis corrupti voluptates sint eius
            adipisci quos, nam porro fuga non sequi dolores alias repudiandae
            reiciendis quisquam quod ipsam aperiam sit quas cumque.
          </p>

          <p className="italic text-sm text-justify text-gray-700">
            Wassalamu’alaikum warahmatullahi wabarakatuh.
          </p>

          <div className="mt-6">
            <p className="font-semibold text-[#0E1A35]">Bapak , S.Pd</p>
            <p className="text-sm text-gray-500">Kepala Sekolah</p>
            <p className="text-xs text-gray-500 italic">NIP. 0010001000101</p>
          </div>
        </div>
      </div>
    </section>
  );
}
