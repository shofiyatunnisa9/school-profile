import TopHeader from "@/components/topHeader";
import Navbar from "../component/navbar";

export default function ProfilePage() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <main className="pt-30 min-h-screen px-6 md:px-16 py-10 bg-[#f9f9f9] text-gray-800">
        <h1 className="text-3xl font-bold text-[#0E1A35] mb-8 text-center">
          Profile Sekolah
        </h1>

        {/* Sejarah Sekolah */}
        <section className="mb-10">
          <h2 className="text-xl font-bold border-l-5 border-[#FAA41A] pl-3 mb-3">
            Sejarah Sekolah
          </h2>
          <p className="text-justify leading-relaxed text-md text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas nemo
            rerum pariatur aliquid neque, doloribus excepturi accusamus! Quam
            blanditiis natus maiores ipsa consequuntur cumque tempora pariatur
            veniam doloremque vel, culpa voluptate est accusamus eaque,
            architecto fugit voluptatibus. Expedita minima nisi quaerat
            adipisci? In, ipsa veniam labore modi quisquam qui adipisci quis
            unde sequi quas a illo provident rerum doloribus eaque tempore
            explicabo, voluptates quidem iusto alias quasi eligendi. Fugiat
            autem dolorum necessitatibus repellat debitis. Accusantium
            perferendis, nesciunt est atque rem ex adipisci sapiente eos
            mollitia nemo soluta odit iure ipsum suscipit laborum, possimus
            inventore facilis. Nulla molestiae vitae culpa pariatur!
          </p>
        </section>

        {/* Visi Misi */}
        <section className="mb-10">
          <h2 className="text-xl font-bold border-l-5 border-[#FAA41A] pl-3 mb-3">
            Visi
          </h2>
          <p className="italic text-gray-700 text-md">
            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            tempora alias perspiciatis veniam iusto ut ex modi. Labore, odio
            fugiat.”
          </p>

          <h2 className="text-xl font-bold mt-6 border-l-5 border-[#FAA41A] pl-3 mb-3">
            Misi
          </h2>
          <ul className="list-disc list-inside space-y-2 text-md text-gray-700">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, mollitia.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
              consequuntur illum maxime hic, provident magnam.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              blanditiis?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              fugit dicta officia consequatur explicabo!{" "}
            </li>
          </ul>
        </section>

        {/* Struktur Organisasi */}
        <section className="mb-10">
          <h2 className="text-xl font-bold border-l-5 border-[#FAA41A] pl-3 mb-4">
            Struktur Organisasi
          </h2>
          <p className="text-gray-700 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur commodi fugit repellat iure reprehenderit aliquam harum,
            labore adipisci eum non quis exercitationem quidem necessitatibus
            soluta cupiditate mollitia iusto aspernatur eaque. Consequuntur in
            non voluptates optio totam reprehenderit! Distinctio, expedita
            ducimus odio excepturi labore deserunt, quas iste eos, dolores
            sapiente non!
          </p>
          <img
            src="/struktur-organisasi.png"
            alt="Struktur Organisasi"
            className="mt-4 w-full max-w-4xl mx-auto rounded-md border"
          />
        </section>
      </main>
    </>
  );
}
