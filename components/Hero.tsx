"use client";
import Image from "next/image";
import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";

const Hero = () => {
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");

  const sendEmail = (e: any) => {
    e.preventDefault();

    try {
      console.log("hi");
      if (e.target.email.value === "" || e.target.full_name.value === "") {
        if (e.target.email.value === "") {
          setEmailError("Email is required");
          if (e.target.full_name.value === "") {
            setNameError("Fullname is required");
          }
        }
      } else {
        emailjs.sendForm(
          "service_luvg8op",
          "template_sx6i957",
          e.target,
          "1MxDwCSvQF6Leln4f"
        );
        e.target.reset();
        setEmailError("");
        setNameError("");

        toast("Email Sent", {
          description: "We will get back to you shortly",
        });
      }
    } catch (err) {}
  };
  return (
    <div className="flex flex-col text-black justify-start items-center text-center gap-4 mt-32 lg:mt-52 z-20 px-6 lg:h-[100vh]">
      <p className="font-bold text-4xl lg:text-6xl lg:w-[55%]">
        Eastline <span className="text-blue-500">Mechanical</span> - Fast &
        Reliable Plumbing Services
      </p>
      <p className="lg:w-1/2 mt-4 text-base lg:text-lg">
      Your trusted plumbing experts serving the GTA with fast, reliable, and professional service. From emergency repairs to new builds, Eastline Mechanical gets the job done right.
      </p>

      <section className="flex justify-center items-center">
        <Image
          src="/images/image2.png"
          width={200}
          height={200}
          alt="testimonial images"
          className="max-w-[160px] lg:max-w-[180px]"
        />
        <div className="flex flex-col items-start justify-center text-left">
          <p className="text-base lg:text-xl font-bold">100+ Customers</p>
          <p>Rated our service 5 stars on google</p>
        </div>
      </section>

      <form
        onSubmit={sendEmail}
        className="w-full max-w-[1200px] flex flex-col gap-2 rounded-xl px-4 lg:px-10 py-4 pt-6 border-[1px] border-gray-200 bg-white text-black lg:mt-44 xl:mt-72"
      >
        <div className="flex flex-col lg:flex-row gap-4 items-end">
          <div className="flex flex-col items-start gap-1 w-full">
            <p>Full Name</p>
            <Input
              type="text"
              placeholder="Jacob Johns"
              name="full_name"
              className="w-full h-[50px] p-2 placeholder:text-gray-500 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200 bg-gray-50"
            />
          </div>

          <div className="flex flex-col items-start gap-1 w-full">
            <p>Email</p>
            <Input
              type="text"
              placeholder="johndoe@gmail.com"
              name="email"
              className="w-full h-[50px] p-2 placeholder:text-gray-500 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200 bg-gray-50"
            />
          </div>

          <div className="flex flex-col items-start gap-1 w-full">
            <p>Phone Number</p>
            <Input
              type="text"
              placeholder="(111) 111 1111"
              name="website"
              className="w-full h-[50px] p-2 placeholder:text-gray-500 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200 bg-gray-50"
            />
          </div>

          <div className="flex flex-col items-start gap-1 w-full">
            <p>Postal Code</p>
            <Input
              type="text"
              placeholder="Postal Code"
              name="website"
              className="w-full h-[50px] p-2 placeholder:text-gray-500 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200 bg-gray-50"
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
          By submitting your contact details, you agree to receive automated
          SMS/MMS messages from Eastline Mechanical. Message & data rates may
          apply.
        </p>
      </form>
    </div>
  );
};

export default Hero;
