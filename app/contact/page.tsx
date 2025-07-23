import { FaClock, FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <>
      <section className="pt-28 px-6 pb-16 bg-[#f4f4f4] min-h-screen">
        <h1 className="text-3xl font-bold text-center text-[#0E1A35] mb-8">
          Hubungi Kami
        </h1>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Informasi Kontak */}
          <div className="bg-white p-6 rounded shadow-md space-y-4">
            <h2 className="text-xl font-semibold text-[#0E1A35] border-l-5 border-[#FAA41A] pl-3 mb-3">
              Kontak Sekolah
            </h2>
            <div className="pt-10 space-y-5">
              <div className="flex items-center gap-2">
                <FaLocationDot />
                <p>Jl. Pendidikan No. 01, Kec. Singkarak</p>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail />
                <p>info@sekolahxyz.sch.id</p>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneSquareAlt />
                <p>(0221) 123456</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaClock />
                <p>Senin - Jumat, 07.00 - 15.00</p>
              </div>
            </div>
          </div>

          {/* Form Kontak */}
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold text-[#0E1A35] mb-4 border-l-5 border-[#FAA41A] pl-3">
              Kirim Pesan
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nama"
                className="w-full px-4 py-2 border rounded text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded text-sm"
              />
              <textarea
                placeholder="Pesan"
                rows={4}
                className="w-full px-4 py-2 border rounded text-sm"
              ></textarea>
              <button
                type="submit"
                className="bg-[#0E1A35] text-white px-4 py-2 rounded hover:bg-[#1f2e50] text-sm justify-end"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
        {/* Denah Lokasi */}
        <div className="bg-white p-6 rounded shadow-md mt-8">
          <h2 className="text-xl font-semibold text-[#0E1A35] mb-4 border-l-5 border-[#FAA41A] pl-3">
            Denah Lokasi
          </h2>
          <div className="w-full h-90 rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.557539125655!2d100.6024369743575!3d-0.655090935260719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4d520d1f13e7f%3A0xea1fcd1eaf836fb4!2sLERENG%20GREEN%20VIEW!5e0!3m2!1sid!2sid!4v1753289541038!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
