import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center bg-[#FAFAFA]">
      <Navbar />
      <section className="flex flex-col md:items-center justify-center gap-4 text-left md:text-center px-6 w-full">
        <p className="text-base text-blue-500 mt-20 lg:mt-32">- ABOUT US -</p>
        <p className="text-3xl md:text-5xl md:w-1/2 xl:w-1/3 font-semibold">
          Over 10 years plumbing experience
        </p>
        <p className="text-base md:text-lg text-slate-600 md:w-1/2 xl:w-1/3">
          With an impressive history of over thirty years in the plumbing
          industry, our team has cultivated unparalleled expertise.
        </p>
        <Button className="h-[50px] w-full lg:w-[220px] bg-blue-500 text-white font-semibold text-base">
          Get a quote
        </Button>
      </section>
      <div className="relative w-[90%] lg:w-[70%] lg:h-[500px] overflow-hidden rounded-xl my-12">
        <Image
          height={1000}
          width={1000}
          src="/images/drainage.avif"
          alt="drainage main image"
          className="object-cover w-full"
        />
      </div>

      <div className="flex flex-col justify-center items-center px-6 lg:px-60 xl:px-80">
        <p className="text-sm lg:text-base mt-6 text-blue-500">
          - OUR VALUES -
        </p>
        <p className="text-3xl lg:text-4xl font-semibold">
          The values that drive us
        </p>

        <section className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-6 lg:mt-10">
          <div className="flex flex-col bg-white px-6 py-4 shadow-lg rounded-lg gap-2">
            <Handshake className="text-blue-500" />
            <p className="font-semibold text-lg">Trust</p>
            <p>Quality you can afford, reliability you can count on.</p>
          </div>
          <div className="flex flex-col bg-white px-6 py-4 shadow-lg rounded-lg gap-2">
            <Handshake className="text-blue-500" />
            <p className="font-semibold text-lg">Trust</p>
            <p>Quality you can afford, reliability you can count on.</p>
          </div>
          <div className="flex flex-col bg-white px-6 py-4 shadow-lg rounded-lg gap-2">
            <Handshake className="text-blue-500" />
            <p className="font-semibold text-lg">Trust</p>
            <p>Quality you can afford, reliability you can count on.</p>
          </div>
          <div className="flex flex-col bg-white px-6 py-4 shadow-lg rounded-lg gap-2">
            <Handshake className="text-blue-500" />
            <p className="font-semibold text-lg">Trust</p>
            <p>Quality you can afford, reliability you can count on.</p>
          </div>
        </section>
      </div>

      <CTA />
      <Footer />
    </div>
  );
};

export default About;
