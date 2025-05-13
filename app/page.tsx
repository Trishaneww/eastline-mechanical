import About from "@/components/About";
import CTA from "@/components/CTA";
import Experience from "@/components/Experience";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import React from "react";
import { Toaster } from "sonner";
import '../styles/global.scss'


const page = () => {
  return (
    <div className="flex flex-col overflow-hidden items-center bg-[#FAFAFA] scroll">
      <Navbar />
      <div className="h-[130vh] md:h-[100vh] w-full absolute z-10">
        <Image
          src="/images/hero.png"
          width={1000}
          height={1000}
          alt="testimonial images"
          className="object-cover h-full w-full relative brightness-110"
        />
      </div>
      <Hero />
      <Features />
      <About />
      <Services />
      <Steps />
      <Experience />
      <div id="testimonials"></div>
      <Testimonials />
      <CTA />
      <Footer />
      <Toaster />
    </div>
  );
};

export default page;
