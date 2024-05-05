import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Faqs from "./Components/Faqs/Faqs";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Faqs />
    </div>
  );
}
