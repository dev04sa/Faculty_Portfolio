"use client";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Faqs from "./Components/Faqs/Faqs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Faqs />
    </div>
  );
}
