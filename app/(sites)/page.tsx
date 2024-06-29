import Image from "next/image";
import Hero from "../pages/Landing/Hero";
import About from "../pages/Landing/About";
import Works from "../pages/Landing/Works";

export default function Home() {
  return (
   <div className="">
    <Hero/>
    <About/>
    <Works/>
   </div>
  );
}
