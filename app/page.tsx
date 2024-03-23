import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="px-[20px] lg:container  mx-auto ">
          <Features />
        </div>
      </main>
    </>
  );
}
