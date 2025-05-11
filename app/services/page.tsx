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
    <div className="flex flex-col">
      <Navbar />
      <section className="flex flex-col md:items-center justify-center gap-4 text-left md:text-center px-6">
        <p className="text-3xl md:text-5xl md:w-1/2 xl:w-1/3 font-semibold mt-20 lg:mt-32">
          Plumbing solutions tailored for you
        </p>
        <p className="text-base md:text-lg text-slate-600 md:w-1/2 xl:w-1/3">
          Individually tailored plumbing solutions designed with your unique
          needs and preferences in mind, ensuring the perfect fit for your home
          or business.
        </p>
      </section>

      <section className="flex flex-wrap justify-center items-center gap-6 mt-12 lg:px-32">
              {services.map((service, idx) => (
                  <div className="flex flex-col border-[1px] border-gray-300 rounded-lg w-full max-w-[360px] md:max-w-[320px] overflow-hidden" key={idx}>
                      <div className="relative overflow-hidden h-[220px]">
                          <Image
                              width={1000}
                              height={1000}
                              src={service.src}
                              alt="service image"
                              className="h-[380px] hover:scale-110 duration-500 transition-transform"
                          />
                      </div>
      
                      <div className="flex flex-col px-4 py-4 items-start text-center">
                          <p className="font-semibold text-lg w-full">{service.title}</p>
                          <p className="mt-2 text-base">{service.description}</p>
                          <Link href='/' className="w-full text-blue-500 font-semibold text-base mt-12">View service</Link>
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
