import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { BicepsFlexed, CircleCheck, Handshake, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdPlumbing } from "react-icons/md";

const About = () => {
  return (
    <div className="flex flex-col items-center bg-[#FAFAFA]">
      <Navbar />
      <section className="flex flex-col md:items-center justify-center gap-4 text-left md:text-center px-6 w-full">
        <p className="text-base text-blue-500  mt-32 lg:mt-56">- ABOUT US -</p>
        <p className="text-3xl md:text-5xl md:w-1/2 xl:w-1/3 font-semibold">
          Over 15 years plumbing experience
        </p>
        <p className="text-base md:text-lg text-slate-600 md:w-1/2 xl:w-1/3">
          With an impressive history of over fifteen years in the plumbing
          industry, our team has cultivated unparalleled expertise.
        </p>
        <Link href="/contact">
          <Button className="h-[50px] w-full lg:w-[220px] bg-blue-500 text-white font-semibold text-base">
            Get a free quote
          </Button>
        </Link>
      </section>
      <div className="relative w-[90%] lg:w-[70%] lg:h-[500px] overflow-hidden rounded-xl my-12">
        <Image
          height={1000}
          width={1000}
          src="/images/drainage.avif"
          alt="drainage main image"
          className="object-cover w-full"
        />
      </div>

      <div className="flex flex-col justify-center items-center px-6 lg:px-60 xl:px-80">
        <p className="text-sm lg:text-base mt-6 text-blue-500">
          - OUR VALUES -
        </p>
        <p className="text-3xl lg:text-4xl font-semibold">
          The values that drive us
        </p>

        <section className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-6 lg:mt-10">
          <div className="flex flex-col bg-white px-6 py-8 shadow-lg rounded-lg gap-2">
            <Handshake className="text-blue-500 mb-2" />
            <p className="font-semibold text-lg">Trust</p>
            <p>Built through honest work and clear communication.</p>
          </div>
          <div className="flex flex-col bg-white px-6 py-8 shadow-lg rounded-lg gap-2">
            <MdPlumbing className="text-blue-500 mb-2" size={25}/>
            <p className="font-semibold text-lg">Quality</p>
            <p>Professional results at a fair and affordable price.</p>
          </div>
          <div className="flex flex-col bg-white px-6 py-8 shadow-lg rounded-lg gap-2">
            <BicepsFlexed className="text-blue-500 mb-2" />
            <p className="font-semibold text-lg">Reliability</p>
            <p>We show up on time and get the job done right.</p>
          </div>
          <div className="flex flex-col bg-white px-6 py-8 shadow-lg rounded-lg gap-2">
            <Heart className="text-blue-500 mb-2" />
            <p className="font-semibold text-lg">Care</p>
            <p>We treat your home or business like it’s our own.</p>
          </div>
        </section>
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-stretch px-6 lg:w-[1200px] mt-32">
      <section className="flex flex-col w-full gap-4 lg:min-w-[600px]">
      <p className="text-blue-500 mt-8 text-sm lg:text-base">- OUR MISSION -</p>
        <p className="text-3xl lg:text-4xl font-semibold text-left">
        Provide dependable solutions for numerous pipe networks
        </p>
        <p className="text-base">
        A dependable plumber specialises in diverse pipe network solutions, delivering reliable services tailored to varied needs and ensuring long-term performance and customer satisfaction
        </p>
        <ul className="flex flex-col gap-2">
          <li className="flex items-start justify-start gap-2">
            <CircleCheck size={20} className="min-h-[25px] min-w-[25px] text-blue-500" />
            <p>
              Customer-centric excellence
            </p>
          </li>
          <li className="flex items-start justify-start gap-2">
            <CircleCheck size={20} className="min-h-[25px] min-w-[25px] text-blue-500" />
            <p>
            Customer-centric excellence
            </p>
          </li>
          <li className="flex items-start justify-start gap-2">
            <CircleCheck size={20} className="min-h-[25px] min-w-[25px] text-blue-500" />
            <p>
            Customer-centric excellence
            </p>
          </li>
        </ul>
        <Link href="/contact"><Button className="h-[50px] w-[200px] border-[1px] border-white text-base bg-blue-500 mt-6">
          Contact us
        </Button>
        </Link>
        
      </section>

      <section className="w-full lg:min-w-[600px] flex justify-start mt-8 lg:-mt-6">
        <Image
          width={1000}
          height={1000}
          src="/images/about2.png"
          alt="about us photo"
          className="rounded-lg lg:max-w-[450px]"
        />
      </section>
    </div>

    <div className="flex flex-col lg:flex-row items-stretch px-6 lg:w-[1200px] mt-32">
      <section className="flex flex-col w-full gap-4 lg:min-w-[600px]">
      <p className="text-blue-500 mt-8 text-sm lg:text-base">— OUR GOALS -</p>
        <p className="text-3xl lg:text-4xl font-semibold text-left">
        Provide exceptional plumbing solutions exceeding client expectations
        </p>
        <p className="text-base">
        Our commitment to delivering unmatched plumbing solutions tailored specifically to exceed your needs and anticipations.
        </p>
        <Link href="/contact"><Button className="h-[50px] w-[200px] border-[1px] border-white text-base bg-blue-500 mt-6">
          Get a free quote
        </Button>
        </Link>
        
      </section>

      <section className="w-full lg:min-w-[600px] flex justify-end mt-8 lg:-mt-6">
        <Image
          width={1000}
          height={1000}
          src="/images/about4.png"
          alt="about us photo"
          className="rounded-lg lg:max-w-[450px]"
        />
      </section>
    </div>

      <CTA />
      <Footer />
    </div>
  );
};

export default About;
