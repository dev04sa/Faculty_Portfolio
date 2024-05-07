"use client";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Tabs from "./Components/Tabs";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Tabs />
    </div>
  );
}
