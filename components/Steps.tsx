import { BookCheck, CalendarRange, CircleCheckBig } from "lucide-react";
import React from "react";
import WavyCircle from "./WavyCircle";

const Steps = () => {
  return (
    <div className="flex flex-col text-black text-left lg:text-center mt-12 lg:mt-28 px-6 lg:px-60 xl:px-80">
      <section className="flex flex-col lg:items-center justify-center gap-4">
        <p className="text-sm lg:text-base mt-6 text-blue-500">- STEPS -</p>
        <p className="text-3xl lg:text-5xl lg:w-1/2 font-semibold">
          Book your service in 3 easy steps
        </p>
        <p className="text-base lg:text-lg text-slate-600  lg:w-1/2">
          We make it easy to get trusted plumbing help—efficient, reliable, and
          stress-free.
        </p>
      </section>

      <section className="flex flex-col lg:flex-row justify-center items-center gap-6 mt-8">
        <div className="flex flex-col justify-center items-center lg:w-1/3">
          <WavyCircle>
            <div className="flex justify-center items-center p-6 bg-white rounded-full text-blue-600">
              <BookCheck size={40} />
            </div>
          </WavyCircle>
          <p className="font-semibold text-xl">1. Choose Plumbing Service</p>
          <p className="w-full mt-2 text-center">
            Explore our wide range of residential and commercial plumbing
            solutions and select the service that best fits your needs.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center lg:w-1/3">
          <WavyCircle>
            <div className="flex justify-center items-center p-6 bg-white rounded-full text-blue-600">
              <CalendarRange size={40} />
            </div>
          </WavyCircle>
          <p className="font-semibold text-xl">2. Quickly Schedule Service</p>
          <p className="w-full mt-2 text-center">
            Book a time that works for you through a quick call or our easy
            online form—we work around your schedule.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center lg:w-1/3">
          <WavyCircle>
            <div className="flex justify-center items-center p-6 bg-white rounded-full text-blue-600">
              <CircleCheckBig size={40} />
            </div>
          </WavyCircle>
          <p className="font-semibold text-xl">
            3. Job Completion Satisfaction
          </p>
          <p className="w-full mt-2 text-center">
            Our licensed team completes the work with care and precision,
            ensuring everything is done right—and you’re 100% satisfied.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Steps;
