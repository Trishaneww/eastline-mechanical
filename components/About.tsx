import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const About = () => {
  return (
    <div className="flex">
      <section className="flex flex-col w-1/2">
      <p className="text-4xl font-semibold text-left w-2/3 mt-8">Let our experts install, repair & maintain your home.</p>
        <p className="text-base">
        At Vita Plumbing, we are committed to providing exceptional service for every project with every service. Whether it’s a small repair or a major installation, we strive for excellence in everything we do.
        </p>
        <p>Our plumbers have the right tools to do the job. We work quickly to diagnose the problem and give effective repair solutions, explaining all the work that needs to be completed. We are fully licensed, insured and registered with WSIB.</p>
        <Button className="h-[50px] w-[200px] border-[1px] border-white text-lg">
          Get a quote
        </Button>
      </section>

      <section className="w-1/2 flex justify-end">
        <Image
          width={500}
          height={500}
          src="/images/about.png"
          alt="about us photo"
        />
      </section>
    </div>
  );
};

export default About;
