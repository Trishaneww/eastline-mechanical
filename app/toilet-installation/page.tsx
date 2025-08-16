"use client";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Mail } from "lucide-react";
import Image from "next/image";
import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import Link from "next/link";
import { services } from "@/data";
import { Textarea } from "@/components/ui/textarea";

const Toiletinstallation = () => {
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
    <div className="flex flex-col items-center bg-[#FAFAFA]">
      <Navbar />

      <div className="flex flex-col px-6 lg:px-60 xl:px-[22rem] w-full mt-32 lg:mt-56 gap-2">
        <Link className="flex gap-1 items-center" href="/services">
          <ChevronLeft size={20} />
          <p className="text-base lg:text-lg">All services</p>
        </Link>

        <p className="text-3xl lg:text-4xl font-semibold mt-2">
          Toilet Installation & Repair
        </p>

        <div className="relative w-full lg:h-[500px] overflow-hidden rounded-xl my-12">
          <Image
            height={1000}
            width={1000}
            src="/images/toilet-installation.png"
            alt="drainage main image"
            className="h-full w-full"
          />
        </div>

        <section className="flex flex-col lg:flex-row gap-2">
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <div className="flex flex-col text-left lg:w-[85%]">
              <p className="text-[17px] font-semibold">
                Ensure Comfort and Efficiency in Your Bathroom
              </p>
              <p className="text-[17px]">
                A properly functioning toilet is essential in every home and
                business. At Eastline Mechanical, we provide expert toilet
                installation and repair services to keep your bathroom running
                smoothly. Whether you're dealing with a constant clog, a running
                toilet, or planning to upgrade to a more efficient model, our
                team ensures every installation is precise and every repair
                long-lasting.
              </p>
            </div>

            <div className="flex flex-col text-left lg:w-[85%]">
              <p className="text-[17px] font-semibold">
                Avoid Wasted Water and Frustration
              </p>
              <p className="text-[17px]">
                Issues like leaks, weak flushes, or phantom flushing don’t just
                waste water—they can increase your utility bills and disrupt
                your daily routine. Our skilled plumbers diagnose the problem
                quickly and provide efficient repairs using quality parts. For
                new installs, we’ll help you choose a reliable, high-efficiency
                toilet that matches your bathroom layout and budget.
              </p>
            </div>

            <div className="flex flex-col text-left lg:w-[85%]">
              <p className="text-[17px] font-semibold">
                Professional Results with Lasting Peace of Mind
              </p>
              <p className="text-[17px]">
                Toilet work may seem simple, but poor installation can lead to
                leaks, wobbling, and long-term water damage. With Eastline
                Mechanical, you’ll get expert service backed by years of
                experience and a commitment to getting it right the first time.{" "}
                <span className="text-blue-500">
                  <Link href="/contact">Schedule your repair</Link>
                </span>{" "}
                or new installation today and make sure your toilet system is
                both efficient and dependable.
              </p>
            </div>
          </div>

          <form
            onSubmit={sendEmail}
            className="w-full lg:w-1/3 flex flex-col gap-2 rounded-xl px-4 lg:px-10 py-4 pt-6 border-[1px] border-gray-300 bg-white text-black mt-6 lg:mt-0"
          >
            <Mail className="text-blue-500" size={40} />
            <p className="text-left text-xl font-semibold">Contact us</p>
            <p>Reach out for a quote or any inquiries.</p>
            <div className="flex flex-col gap-4 items-end mt-4">
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
                <p>Message</p>
                <Textarea
                  placeholder="Your message"
                  name="message"
                  className="w-full h-[150px] p-2 placeholder:text-gray-500 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200 bg-gray-50"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-[50px] bg-blue-500 text-white text-base"
              >
                Request a free quote
              </Button>
            </div>
          </form>
        </section>

        <div className="flex flex-col gap-2 mt-20">
          <p className="text-3xl lg:text-4xl font-semibold">
            View other services
          </p>

          <section className="flex flex-wrap justify-between gap-4 lg:gap-0 items-center mt-4 lg:mt-10">
            {services.slice(3, 6).map((service, idx) => (
              <div
                className="flex flex-col border-[1px] border-gray-300 rounded-lg w-full h-[460px] max-w-[360px] lg:w-[32%] overflow-hidden"
                key={idx}
              >
                <div className="relative overflow-hidden h-[380px]">
                  <Image
                    width={1000}
                    height={1000}
                    src={service.src}
                    alt="service image"
                    className="h-[380px] hover:scale-110 duration-500 transition-transform"
                  />
                </div>

                <div className="flex flex-col justify-between px-4 py-4 items-start text-center h-full">
                  <div className="flex flex-col">
                    <p className="font-semibold text-lg w-full">
                      {service.title}
                    </p>
                    <p className="mt-2 text-base">{service.description}</p>
                  </div>
                  <Link
                    href={`${service.link}`}
                    className="w-full text-blue-500 font-semibold text-base mt-12"
                  >
                    View service
                  </Link>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

      <CTA />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Toiletinstallation;
