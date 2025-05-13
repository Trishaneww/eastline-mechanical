"use client";
import { services, testimonials } from "@/data";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/global.scss";
import { IoIosStar } from "react-icons/io";
import { Button } from "./ui/button";

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleCards = 1; // Number of visible cards at a time

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
    <div className="flex flex-col mt-12 lg:mt-32 mb-20 text-left lg:text-center items-center gap-12 w-full">
      <div className="flex flex-col lg:items-center gap-2 w-full px-6">
        <section className="flex flex-col lg:items-center justify-center gap-4">
          <p className="text-sm lg:text-base mt-6 text-blue-500">
            - TESTIMONIALS -
          </p>
          <p className="text-3xl lg:text-5xl lg:w-1/2  font-semibold">
            What our customers say
          </p>
          <p className="text-base lg:text-lg text-slate-600 lg:w-1/2">
            Individually tailored plumbing solutions designed with your unique
            needs and preferences in mind, ensuring the perfect fit for your
            home or business.
          </p>
        </section>

        <div className="lg:hidden relative xl:max-w-[1300px] max-h-full mx-auto mt-12 w-full">
          <div className="w-full ">
            <div
              className="flex w-full transition-transform duration-500 gap-4 lg:-ml-48"
              style={{
                transform: `translateX(-${
                  (activeIndex * 100) / visibleCards
                }%)`,
              }}
            >
              {testimonials.map((testimonial, idx) => (
                <div
                  className="bg-red-200 border-[1px] text-black border-gray-200 rounded-lg flex flex-col items-stretch justify-between h-[480px] min-w-[calc(100%/1)] lg:min-w-[calc(100%/4.1)]"
                  key={idx}
                >
                  <div className="flex flex-col p-2 px-6 py-4">
                    <p className="text-base font-light">{testimonial.review}</p>
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
            className="flex absolute top-1/2 left-0 transform lg:-translate-x-[120%] -translate-y-1/2 rounded-full p-2 text-white bg-[#25252530]"
          >
            <ChevronLeft size={25} />
          </button>

          <button
            onClick={handleNext}
            className="flex absolute top-1/2 right-0 transform lg:translate-x-[120%] -translate-y-1/2 rounded-full p-2 text-white bg-[#25252530]"
          >
            <ChevronRight size={25} />
          </button>
        </div>



        <div className="hidden lg:flex relative xl:max-w-[1300px] max-h-full mx-auto mt-12 w-full">
          <div className="w-full ">
            <div
              className="flex w-full transition-transform duration-500 gap-4 lg:-ml-48"
              style={{
                transform: `translateX(-${
                  (activeIndex * 100) / 3
                }%)`,
              }}
            >
              {testimonials.map((testimonial, idx) => (
                <div
                  className="bg-white border-[1px] text-black border-gray-200 rounded-lg flex flex-col h-[320px] xl:h-[380px] min-w-[calc(100%/1)] lg:min-w-[calc(100%/4.1)]"
                  key={idx}
                >
                  <div className="flex flex-col p-2 px-6 py-4">
                    <p className="text-base font-light">{testimonial.review}</p>
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
            className="flex absolute top-1/2 left-0 transform lg:-translate-x-[120%] -translate-y-1/2 rounded-full p-2 text-white bg-[#25252530]"
          >
            <ChevronLeft size={25} />
          </button>

          <button
            onClick={handleNext}
            className="flex absolute top-1/2 right-0 transform lg:translate-x-[120%] -translate-y-1/2 rounded-full p-2 text-white bg-[#25252530]"
          >
            <ChevronRight size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
