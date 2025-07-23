import TopHeader from "@/components/topHeader";
import Sambutan from "./component/kataSambutan";
import Navbar from "./component/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="font-sans pt-25">
        <section className="w-full">
          <img
            src="/school.jpg"
            alt="Gedung Sekolah"
            className="w-full object-cover"
          />
        </section>
        <Sambutan />
      </main>
    </>
  );
}
