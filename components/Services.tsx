import { CalendarRange } from "lucide-react";
import React from "react";
import WavyCircle from "./WavyCircle";
import { services } from "@/data";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Services = () => {
  return (
    <div className="flex flex-col text-black text-left lg:text-center w-full mt-12 lg:mt-32 px-6">
      <section className="flex flex-col lg:items-center justify-center gap-4">
      <p className="text-sm lg:text-base mt-6 text-blue-500">
            - OUR SERVICES - 
          </p>
        <p className="text-3xl lg:text-5xl lg:w-1/2 xl:w-1/3 font-semibold">
        Plumbing solutions tailored for you
        </p>
        <p className="text-base lg:text-lg text-slate-600 lg:w-1/2 xl:w-1/3">
        Individually tailored plumbing solutions designed with your unique needs and preferences in mind, ensuring the perfect fit for your home or business.
        </p>

        <Link href="/services"><Button className="h-[50px] w-full lg:w-[220px] bg-blue-500 text-white font-semibold text-base">View services</Button></Link>

       
      </section>

      <section className="flex flex-wrap justify-center items-center gap-6 mt-12 lg:px-32">
        {services.map((service, idx) => (
            <div className="flex flex-col border-[1px] border-gray-300 rounded-lg w-full h-[440px] max-w-[360px] md:max-w-[320px] overflow-hidden" key={idx}>
                <div className="relative overflow-hidden h-[220px]">
                    <Image
                        width={1000}
                        height={1000}
                        src={service.src}
                        alt="service image"
                        className="hover:scale-110 duration-500 transition-transform h-full w-full"
                    />
                </div>

                <div className="flex flex-col px-4 py-4 items-start text-left">
                    <p className="font-semibold text-lg">{service.title}</p>
                    <p className="mt-2 text-base">{service.description}</p>
                </div>
            </div>
        ))}
        
      </section>
    </div>
  );
};

export default Services;