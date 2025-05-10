"use client";
import { services, testimonials } from "@/data";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/global.scss";
import { IoIosStar } from "react-icons/io";

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleCards = 3; // Number of visible cards at a time

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? services.length - visibleCards : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === services.length - visibleCards ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="flex flex-col mt-12 lg:mt-32 mb-20 items-center gap-12 w-full">
      <div className="flex flex-col items-center gap-2 w-full px-6">
        <section className="flex flex-col text-center items-center text-black">
          <p className="text-base font-light mt-6">
            - TESTIMONIALS - 
          </p>
          <p className="text-3xl lg:text-5xl font-black mt-4">
          What our customers say
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:hidden mt-6">
          {services.slice(0, 8).map((service, idx) => (
            <div
              className="bg-white slate border-[1px] border-gray-200 flex flex-col max-w-[400px] h-[420px] xl:h-[540px] lg:w-[370px] shadow-lg"
              key={idx}
            >
              <div className="overflow-hidden">
                <Image
                  src={service.src}
                  width={1000}
                  height={1000}
                  alt="logo image"
                  className="h-[340px] hover:scale-110 duration-500 transition-transform"
                />
              </div>

              <div className="flex flex-col p-2 px-6 py-4">
                <p className="text-lg font-semibold">{service.title}</p>
                <p className="text-base font-light">{service.description}</p>
              </div>
            </div>
          ))}
        </section>

        <div className="relative xl:max-w-[1300px] max-h-full mx-auto mt-12 w-full">
          <div className="w-full ">
            <div
              className="hidden lg:flex w-full transition-transform duration-500 gap-4 -ml-80"
              style={{
                transform: `translateX(-${
                  (activeIndex * 100) / visibleCards
                }%)`,
              }}
            >
              {testimonials.map((testimonial, idx) => (
                <div
                  className="bg-white border-[1px] text-black border-gray-200 rounded-lg flex flex-col h-[320px] xl:h-[380px] min-w-[calc(100%/1)] lg:min-w-[calc(100%/4.1)]"
                  key={idx}
                >
                  <div className="flex flex-col p-2 px-6 py-4">

                    <p className="text-base font-light">
                        {testimonial.review}
                    </p>
                  </div>

                  <div className="flex flex-col items-start px-6 mt-12">
                    <div className="flex items-center">
                        <p className="">{testimonial.name}</p>
                    </div>    
                    <div className="flex items-center text-yellow-500">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="hidden lg:flex absolute top-1/2 left-0 transform -translate-x-[120%] -translate-y-1/2 rounded-full p-2 text-white bg-[#25252530]"
          >
            <ChevronLeft size={25} />
          </button>

          <button
            onClick={handlePrev}
            className="hidden lg:flex absolute top-1/2 right-0 transform translate-x-[120%] -translate-y-1/2 rounded-full p-2 text-white bg-[#25252530]"
          >
            <ChevronRight size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
