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
      <div className="flex flex-col-reverse lg:flex-row justify-center w-full px-6 gap-12 lg:gap-20 pt-20 text-white z-20">
        <section className="flex flex-col items-center justify-center w-full lg:w-1/3 bg-blue-500 text-white rounded-tr-2xl rounded-tl-2xl text-center gap-4 px-2 lg:px-12 py-6">
          <p className="font-semibold text-3xl lg:text-4xl">
            Start Your Plumbing Project with Confidence
          </p>
          <p className="md:text-lg">
          Plumbing issues don’t have to be stressful. With the right team on your side, they become opportunities to improve comfort, efficiency, and peace of mind. Take the first step today—Eastline Mechanical is ready to deliver solutions you can trust.
          </p>
        </section>

        <section className="flex flex-col w-full lg:w-1/3">
          <p className="text-sm lg:text-base">- OUR APPROACH -</p>
          <p className="text-3xl lg:text-4xl font-semibold text-left mt-4">
            What You Can Expect From Eastline
          </p>

          <p className="text-base md:text-lg text-left mt-4">
            At Eastline Mechanical, we take pride in our customer-first
            approach—delivering high-quality plumbing solutions with care and
            precision. Our skilled team is committed to clear communication,
            reliable service, and expert workmanship on every job. You can
            expect professionalism, attention to detail, and results that are
            built to last.
          </p>

          <ul className="grid grid-cols-1 lg:grid-cols-2 place-content-center gap-2 mt-6">
            <li className="flex items-center gap-2">
              <CircleCheck size={18} />
              <p className="text-base md:text-lg">Timely Service</p>
            </li>

            <li className="flex items-center gap-2">
              <CircleCheck size={18} />
              <p className="text-base md:text-lg">Customer Satisfaction</p>
            </li>

            <li className="flex items-center gap-2">
              <CircleCheck size={18} />
              <p className="text-base md:text-lg">Upfront Pricing</p>
            </li>

            <li className="flex items-center gap-2">
              <CircleCheck size={18} />
              <p className="text-base md:text-lg">Skilled Team</p>
            </li>

            <li className="flex items-center gap-2">
              <CircleCheck size={18} />
              <p className="text-base md:text-lg">Attention to Detail</p>
            </li>

            <li className="flex items-center gap-2">
              <CircleCheck size={18} />
              <p className="text-base md:text-lg">Trusted Reputation</p>
            </li>

            <li className="flex items-center gap-2">
              <CircleCheck size={18} />
              <p className="text-base md:text-lg">Tailored Solutions</p>
            </li>

            <li className="flex items-center gap-2">
              <CircleCheck size={18} />
              <p className="text-base md:text-lg">Transparent Communication</p>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Experience;
