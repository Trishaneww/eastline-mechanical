import { CalendarRange } from "lucide-react";
import React from "react";
import WavyCircle from "./WavyCircle";
import { services } from "@/data";
import Image from "next/image";

const Services = () => {
  return (
    <div className="flex flex-col text-black text-center w-full mt-12 lg:mt-28">
      <section className="flex flex-col items-center justify-center gap-4">
      <p className="text-base font-light mt-6">
            - SERVICES - 
          </p>
        <p className="text-5xl w-1/3 font-semibold">
        Plumbing solutions tailored for you
        </p>
        <p className="text-lg text-slate-600 w-1/3">
        Individually tailored plumbing solutions designed with your unique needs and preferences in mind, ensuring the perfect fit for your home or business.
        </p>
      </section>

      <section className="flex flex-wrap justify-center items-center gap-6 mt-12 lg:px-32">
        {services.map((service, idx) => (
            <div className="flex flex-col border-[1px] border-gray-300 rounded-lg max-w-[320px] overflow-hidden" key={idx}>
                <div className="relative overflow-hidden h-[220px]">
                    <Image
                        width={1000}
                        height={1000}
                        src={service.src}
                        alt="service image"
                        className="h-[380px] hover:scale-110 duration-500 transition-transform"
                    />
                </div>

                <div className="flex flex-col px-4 py-4 items-start text-left">
                    <p className="font-semibold text-lg">{service.title}</p>
                    <p className="mt-2 text-sm">{service.description}</p>
                </div>
            </div>
        ))}
        
      </section>
    </div>
  );
};

export default Services;