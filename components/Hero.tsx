"use client";
import Image from "next/image";
import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";

const Hero = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();
    try {
      emailjs.sendForm(
        "service_luvg8op",
        "template_oirz684",
        e.target,
        "1MxDwCSvQF6Leln4f"
      );
      e.target.reset();
      toast("Email Sent", {
        description: "We will get back to you shortly",
      });
    } catch (err) {}
  };
  return (
    <div className="hero-background flex flex-col text-white justify-start items-center text-center gap-4 pt-32 pb-20 lg:pt-52 z-20 px-6">
      <p className="font-bold text-4xl md:text-6xl md:w-[70%] lg:w-[55%]">
        East Line <span className="text-blue-500">Mechanical</span> - Fast &
        Reliable Plumbing Services
      </p>
      <p className="md:w-1/2 mt-4 text-base md:text-xl">
        Your trusted plumbing experts serving the GTA with fast, reliable, and
        professional service. From emergency repairs to new builds, Eastline
        Mechanical gets the job done right.
      </p>

      <section className="flex justify-center items-center gap-2">
        <Image
          src="/images/image2.png"
          width={150}
          height={150}
          alt="testimonial images"
          className="max-w-[160px] lg:max-w-[180px]"
        />
        <div className="flex flex-col items-start justify-center text-left">
          <p className="text-base lg:text-xl font-bold">
            100+ Clients rated our services 5 stars
          </p>
        </div>
      </section>

      <form
        onSubmit={sendEmail}
        className="w-full max-w-[1200px] flex flex-col gap-2 rounded-xl px-4 lg:px-10 py-4 pt-6 border-[1px] border-gray-200 bg-white text-black lg:mt-44 xl:mt-60"
      >
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex flex-col items-start gap-1 w-full">
            <p>Full Name</p>
            <Input
              type="text"
              placeholder="Your first name"
              name="name"
              className="w-full h-[50px] p-2 placeholder:text-gray-500 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200 bg-gray-50"
              required
            />
          </div>

          <div className="flex flex-col items-start gap-1 w-full">
            <p>Email</p>
            <Input
              type="email"
              placeholder="Your email"
              name="email"
              className="w-full h-[50px] p-2 placeholder:text-gray-500 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200 bg-gray-50"
              required
            />
          </div>

          <div className="flex flex-col items-start gap-1 w-full">
            <p>Phone Number</p>
            <Input
              type="text"
              placeholder="Your phone number"
              name="phone"
              className="w-full h-[50px] p-2 placeholder:text-gray-500 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200 bg-gray-50"
              required
            />
          </div>

          <div className="flex flex-col items-start gap-1 w-full">
            <p>Postal Code</p>
            <Input
              type="text"
              placeholder="Postal Code"
              name="postal"
              className="w-full h-[50px] p-2 placeholder:text-gray-500 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200 bg-gray-50"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full lg:max-w-[300px] h-[45px] lg:h-[50px] bg-slate-950 text-white text-base"
          >
            Request a free quote
          </Button>

          {/* <div className="flex flex-col items-start gap-1">
                    <p>Message</p>
                    <textarea placeholder="Tell us more about your project" name="phone" className="w-full h-[115px] p-2 placeholder:text-slate-50 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-500 bg-[#242424]" />
                </div> */}
        </div>
        <p className="text-left text-sm text-gray-500">
          We respect your privacy. Your information will only be used to respond
          to your inquiry.
        </p>
      </form>
    </div>
  );
};

export default Hero;
