import Sambutan from "./component/kataSambutan";
import GuruListHome from "./component/guru";
import InfoHome from "./component/info";
import GalleryListHome from "./component/galleriHome";
import ContactHome from "./component/contactHome";

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
        <InfoHome />
        <GuruListHome />
        <GalleryListHome />
        <ContactHome />
      </main>
    </>
  );
}
