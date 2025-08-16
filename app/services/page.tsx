import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { services } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col items-center bg-[#FAFAFA]">
      <Navbar />
      <section className="flex flex-col md:items-center justify-center gap-4 text-left md:text-center px-6 w-full">
        <p className="text-3xl md:text-5xl md:w-1/2 xl:w-1/3 font-semibold mt-32 lg:mt-56">
          Plumbing solutions tailored for you
        </p>
        <p className="text-base md:text-xl text-slate-600 md:w-1/2 xl:w-1/3">
          Individually tailored plumbing solutions designed with your unique
          needs and preferences in mind, ensuring the perfect fit for your home
          or business.
        </p>
      </section>

      <section className="flex flex-wrap justify-center items-center gap-6 mt-12 lg:px-32">
        {services.map((service, idx) => (
          <div
            className="flex flex-col border-[1px] border-gray-300 rounded-lg w-full h-[460px] max-w-[360px] md:max-w-[320px] overflow-hidden"
            key={idx}
          >
            <div className="relative overflow-hidden h-[380px]">
              <Image
                width={1000}
                height={1000}
                src={service.src}
                alt="service image"
                className="hover:scale-110 duration-500 transition-transform  h-full w-full"
              />
            </div>

            <div className="flex flex-col justify-between px-4 py-4 items-start text-center h-full">
              <div className="flex flex-col">
                <p className="font-semibold text-lg w-full">{service.title}</p>
                <p className="mt-2 text-base">{service.description}</p>
              </div>
              <Link
                href={`${service.link}`}
                className="w-full text-blue-500 font-semibold text-base mt-12"
              >
                View service
              </Link>
            </div>
          </div>
        ))}
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Services;
