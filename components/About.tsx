import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { CircleCheck } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row px-6 lg:px-60 xl:px-80 mt-32">
      <section className="flex flex-col w-full lg:w-1/2 gap-4 lg:min-w-[600px]">
      <p className="text-blue-500 mt-8 text-sm lg:text-base">- OUR COMMITMENT TO YOU -</p>
        <p className="text-3xl lg:text-4xl font-semibold text-left">
          Serving the Local Community for Over 15 Years
        </p>
        <p className="text-base">
          Serving the Local Community for Over 15 Years: Eastline Mechanical has
          been proudly serving our local community for nearly 2 decades,
          delivering reliable and trusted plumbing services that have stood the
          test of time.
        </p>
        <ul className="flex flex-col gap-2">
          <li className="flex items-start justify-start gap-2">
            <CircleCheck size={20} className="min-h-[25px] min-w-[25px] text-blue-500" />
            <p>
              <span className="font-semibold">Expert Plumbers: </span>
               Our team of highly skilled and experienced
              plumbers are equipped with the knowledge and expertise to handle
              any plumbing issue, ensuring precise and efficient solutions.
            </p>
          </li>
          <li className="flex items-start justify-start gap-2">
            <CircleCheck size={20} className="min-h-[25px] min-w-[25px] text-blue-500" />
            <p>
            <span className="font-semibold">Comprehensive Services: </span>
              From routine maintenance and repairs to
              complex installations and renovations, we offer a wide range of
              plumbing services to address all your needs, no matter the scale
              or complexity.
            </p>
          </li>
          <li className="flex items-start justify-start gap-2">
            <CircleCheck size={20} className="min-h-[25px] min-w-[25px] text-blue-500" />
            <p>
            <span className="font-semibold">Quality Workmanship: </span>
               With a strong focus on delivering exceptional
              workmanship, we take pride in our attention to detail and
              commitment to using top-quality materials, ensuring long-lasting
              and reliable plumbing solutions.
            </p>
          </li>
          <li className="flex items-start justify-start gap-2">
            <CircleCheck size={20} className="min-h-[25px] min-w-[25px] text-blue-500" />
            <p>
            <span className="font-semibold">Customer Satisfaction:</span>
               Our dedication to customer satisfaction is
              at the core of our business. We strive to exceed expectations by
              providing prompt, friendly, and reliable service, ensuring our
              customers feel valued and confident in their choice of Eastline mechanical
            </p>
          </li>
        </ul>
        <Link href="/contact"><Button className="h-[50px] w-[200px] border-[1px] border-white text-base bg-blue-500 mt-6">
          Get a free quote
        </Button>
        </Link>
        
      </section>

      <section className="w-full lg:w-1/2 lg:min-w-[600px] flex justify-end mt-8 lg:mt-16">
        <Image
          width={1000}
          height={1000}
          src="/images/about2.png"
          alt="about us photo"
          className="rounded-lg lg:max-w-[500px]"
        />
      </section>
    </div>
  );
};

export default About;
