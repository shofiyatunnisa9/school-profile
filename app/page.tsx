import Sambutan from "./component/kataSambutan";
import GuruListHome from "./component/guru";
import InfoHome from "./component/info";
import GalleryListHome from "./component/galleriHome";
import ContactHome from "./component/contactHome";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="font-sans pt-5">
        <p className="w-full">
          <Image
            width={500}
            height={500}
            src="/school.jpg"
            alt="Gedung Sekolah"
            className="w-full object-cover"
          />
        </p>
        <Sambutan />
        <InfoHome />
        <GuruListHome />
        <GalleryListHome />
        <ContactHome />
      </main>
    </>
  );
}
