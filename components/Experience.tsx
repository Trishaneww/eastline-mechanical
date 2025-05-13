"use client";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import "../styles/global.scss";

const Experience = () => {
  return (
    <section className="flex relative lg:h-[60vh] overflow-hidden w-full mt-12 lg:mt-32">
      <div className="backgroundImage brightness-[30%]" />
      <div className="flex flex-col-reverse lg:flex-row justify-center w-full px-6 gap-12 lg:gap-20 pt-20 text-white z-30">
        <section className="flex flex-col items-center justify-center w-full lg:w-1/3 bg-blue-500 text-white rounded-tr-2xl rounded-tl-2xl text-center gap-4 px-2 lg:px-12 py-6">
          <p className="font-semibold text-2xl lg:text-3xl">
            Take the First Step to Your Plumbing Solutions
          </p>
          <p>
            Plumbing problems may seem like obstacles, but with the right
            expertise and solutions, they become opportunities for improvement.
            Take the first step today and let us turn your plumbing challenges
            into smooth-running systems and peace of mind.
          </p>
        </section>

        <section className="flex flex-col w-full lg:w-1/3">
          <p className="text-sm lg:text-base">- OUR APPROACH -</p>
          <p className="text-3xl lg:text-4xl font-semibold text-left mt-4">
            We're committed to guaranteeing customer satisfaction and excellence
          </p>

          <p className="text-base text-left mt-4">
          At Charnwood Plumbing, we take a customer-centric approach, focusing on delivering exceptional service and exceeding expectations. With our highly skilled team of plumbers, we prioritize quality workmanship, attention to detail, and transparent communication to ensure your complete satisfaction. You can expect professionalism, reliability, and a commitment to providing reliable and efficient plumbing solutions tailored to your specific needs.
          </p>

          <ul className="grid grid-cols-1 lg:grid-cols-2 place-content-center gap-2 mt-6">
            <li className="flex items-center gap-2">
              <CircleCheck size={18}/>
              <p className="text-base">10+ years experience</p>
            </li>

            <li className="flex items-center gap-2">
              <CircleCheck size={18}/>
              <p className="text-base">10+ years experience</p>
            </li>

            <li className="flex items-center gap-2">
              <CircleCheck size={18}/>
              <p className="text-base">10+ years experience</p>
            </li>

            <li className="flex items-center gap-2">
              <CircleCheck size={18}/>
              <p className="text-base">10+ years experience</p>
            </li>

            <li className="flex items-center gap-2">
              <CircleCheck size={18}/>
              <p className="text-base">10+ years experience</p>
            </li>

            <li className="flex items-center gap-2">
              <CircleCheck size={18}/>
              <p className="text-base">10+ years experience</p>
            </li>

            <li className="flex items-center gap-2">
              <CircleCheck size={18}/>
              <p className="text-base">10+ years experience</p>
            </li>

            <li className="flex items-center gap-2">
              <CircleCheck size={18}/>
              <p className="text-base">10+ years experience</p>
            </li>
          </ul>

         
        </section>
      </div>
    </section>
  );
};

export default Experience;
