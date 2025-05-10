import { CalendarRange } from "lucide-react";
import React from "react";
import WavyCircle from "./WavyCircle";

const Steps = () => {
  return (
    <div className="flex flex-col text-black text-center mt-12 lg:mt-28">
      <section className="flex flex-col items-center justify-center gap-4">
      <p className="text-base font-light mt-6">
            - STEPS - 
          </p>
        <p className="text-5xl w-1/3 font-semibold">
          Book your service in 3 easy steps
        </p>
        <p className="text-lg text-slate-600 w-1/3">
          Easy Steps to Get Started" section simplifies the process of booking
          and receiving plumbing services.
        </p>
      </section>

      <section className="flex justify-center items-center gap-6 mt-12">
        <div className="flex flex-col justify-center items-center  w-[25%]">
          <WavyCircle>
            <div className="flex justify-center items-center p-6 bg-white rounded-full text-blue-600">
              <CalendarRange size={40} />
            </div>
          </WavyCircle>
          <p className="font-semibold text-xl">1. Choose Plumbing Service</p>
          <p className="w-full mt-2">
            Browse our range of plumbing services tailored to address various
            issues in your home or business. Select the service that fits your
            needs.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-[25%]">
          <WavyCircle>
            <div className="flex justify-center items-center p-6 bg-white rounded-full text-blue-600">
              <CalendarRange size={40} />
            </div>
          </WavyCircle>
          <p className="font-semibold text-xl">1. Choose Plumbing Service</p>
          <p className="w-full mt-2">
            Browse our range of plumbing services tailored to address various
            issues in your home or business. Select the service that fits your
            needs.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-[25%]">
          <WavyCircle>
            <div className="flex justify-center items-center p-6 bg-white rounded-full text-blue-600">
              <CalendarRange size={40} />
            </div>
          </WavyCircle>
          <p className="font-semibold text-xl">1. Choose Plumbing Service</p>
          <p className="w-full mt-2">
            Browse our range of plumbing services tailored to address various
            issues in your home or business. Select the service that fits your
            needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Steps;
