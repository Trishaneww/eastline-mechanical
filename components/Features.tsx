import React from "react";
import WavyCircle from "./WavyCircle";
import { CalendarRange } from "lucide-react";

const Features = () => {
  return (
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mt-12 lg:-mt-20 px-6 lg:px-60 xl:px-80">
        <div className="flex flex-col justify-center items-center lg:w-1/3">
          <WavyCircle>
            <div className="flex justify-center items-center p-6 bg-white rounded-full text-blue-600">
              <CalendarRange size={40} />
            </div>
          </WavyCircle>
          <p className="font-semibold text-xl">Choose Plumbing Service</p>
          <p className="w-full mt-2 text-center">
            Browse our range of plumbing services tailored to address various
            issues in your home or business. Select the service that fits your
            needs.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center lg:w-1/3">
          <WavyCircle>
            <div className="flex justify-center items-center p-6 bg-white rounded-full text-blue-600">
              <CalendarRange size={40} />
            </div>
          </WavyCircle>
          <p className="font-semibold text-xl">Choose Plumbing Service</p>
          <p className="w-full mt-2 text-center">
            Browse our range of plumbing services tailored to address various
            issues in your home or business. Select the service that fits your
            needs.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center lg:w-1/3">
          <WavyCircle>
            <div className="flex justify-center items-center p-6 bg-white rounded-full text-blue-600">
              <CalendarRange size={40} />
            </div>
          </WavyCircle>
          <p className="font-semibold text-xl">Choose Plumbing Service</p>
          <p className="w-full mt-2 text-center">
            Browse our range of plumbing services tailored to address various
            issues in your home or business. Select the service that fits your
            needs.
          </p>
        </div>
      </div>
  );
};

export default Features;
