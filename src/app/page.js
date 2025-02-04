import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="grid h-dvh font-text text-purple">
      <main className="grid md:grid-cols-2 h-[90dvh]">
        {/* left side */}
        <div className="grid place-content-center bg-pink">
          <div className="grid grid-cols-1 justify-items-center">
            <Image src={"/fridge.png"} height={300} width={180} />
            <div className="font-title text-6xl">Fridge Logger</div>
            <div className="font-text text-2xl text-lilac">the simple way to peek into your fridge!</div>
          </div>
        </div>
        {/* right side */}
        <div className="place-items-center">
          there
        </div>
      </main>
      {/* end main content */}
      <Footer />
    </div>
  );
}
