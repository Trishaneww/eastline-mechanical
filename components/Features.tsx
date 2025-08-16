import React from "react";
import WavyCircle from "./WavyCircle";
import { CalendarRange, Clock, PiggyBank } from "lucide-react";
import { BiMoney } from "react-icons/bi";
import { CiMoneyBill } from "react-icons/ci";
import { MdPlumbing } from "react-icons/md";

const Features = () => {
  return (
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mt-12 px-6 lg:px-60 xl:px-80">
        <div className="flex flex-col justify-center items-center lg:w-1/3">
          <WavyCircle>
            <div className="flex justify-center items-center p-6 bg-white rounded-full text-blue-600">
              <Clock size={40} />
            </div>
          </WavyCircle>
          <p className="font-semibold text-xl">Reliable, Fast-Response Service</p>
          <p className="w-full mt-2 text-center lg:text-lg">
          Plumbing issues can’t wait. We show up on time, fully prepared to get the job done—no delays, no excuses.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center lg:w-1/3">
          <WavyCircle>
            <div className="flex justify-center items-center p-6 bg-white rounded-full text-blue-600">
              <MdPlumbing size={40} />
            </div>
          </WavyCircle>
          <p className="font-semibold text-xl">Expert Workmanship, Every Time</p>
          <p className="w-full mt-2 text-center lg:text-lg">
          With years of experience across all plumbing sectors, we deliver high-quality results you can trust.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center lg:w-1/3">
          <WavyCircle>
            <div className="flex justify-center items-center p-6 bg-white rounded-full text-blue-600">
              <PiggyBank size={40} />
            </div>
          </WavyCircle>
          <p className="font-semibold text-xl">Honest Quotes & Transparent Pricing</p>
          <p className="w-full mt-2 text-center lg:text-lg">
          No hidden fees or surprise costs—just clear, upfront pricing and honest recommendations you can rely on.
          </p>
        </div>
      </div>
  );
};

export default Features;
