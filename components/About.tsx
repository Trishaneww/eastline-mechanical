import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { CircleCheck } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row px-6 lg:px-60 xl:px-80 mt-32">
      <section className="flex flex-col w-full lg:w-1/2 gap-4">
      <p className="text-blue-500 mt-8 text-sm lg:text-base">- ABOUT EASTLINE MECHANICAL -</p>
        <p className="text-3xl lg:text-4xl font-semibold text-left">
          Serving the Local Community for Over 23 Years
        </p>
        <p className="text-base">
          Serving the Local Community for Over 23 Years: Charnwood Plumbing has
          been proudly serving our local community for more than two decades,
          delivering reliable and trusted plumbing services that have stood the
          test of time.
        </p>
        <ul className="flex flex-col gap-2">
          <li className="flex items-start justify-start gap-2">
            <CircleCheck size={40} className="min-h-[30px] min-w-[30px] text-blue-500" />
            <p>
              Expert Plumbers: Our team of highly skilled and experienced
              plumbers are equipped with the knowledge and expertise to handle
              any plumbing issue, ensuring precise and efficient solutions.
            </p>
          </li>
          <li className="flex items-start justify-start gap-2">
            <CircleCheck size={40} className="min-h-[30px] min-w-[30px] text-blue-500" />
            <p>
              Comprehensive Services: From routine maintenance and repairs to
              complex installations and renovations, we offer a wide range of
              plumbing services to address all your needs, no matter the scale
              or complexity.
            </p>
          </li>
          <li className="flex items-start justify-start gap-2">
            <CircleCheck size={40} className="min-h-[30px] min-w-[30px] text-blue-500" />
            <p>
              Quality Workmanship: With a strong focus on delivering exceptional
              workmanship, we take pride in our attention to detail and
              commitment to using top-quality materials, ensuring long-lasting
              and reliable plumbing solutions.
            </p>
          </li>
          <li className="flex items-start justify-start gap-2">
            <CircleCheck size={40} className="min-h-[30px] min-w-[30px] text-blue-500" />
            <p>
              Customer Satisfaction: Our dedication to customer satisfaction is
              at the core of our business. We strive to exceed expectations by
              providing prompt, friendly, and reliable service, ensuring our
              customers feel valued and confident in their choice of Charnwood
              Plumbing.
            </p>
          </li>
        </ul>
        <Button className="h-[50px] w-[200px] border-[1px] border-white text-base bg-blue-500">
          Get a quote
        </Button>
      </section>

      <section className="w-full lg:w-1/2 flex justify-end mt-8 lg:mt-16">
        <Image
          width={1000}
          height={1000}
          src="/images/about.png"
          alt="about us photo"
          className="rounded-lg lg:max-w-[500px]"
        />
      </section>
    </div>
  );
};

export default About;
