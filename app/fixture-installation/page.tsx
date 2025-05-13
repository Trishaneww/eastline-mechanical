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
import { toast } from "sonner";
import Link from "next/link";
import { services } from "@/data";

const Fixtureinstallation = () => {
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
    <div className="flex flex-col items-center bg-[#FAFAFA]">
      <Navbar />

      <div className="flex flex-col px-6 lg:px-60 xl:px-[22rem] w-full mt-20 gap-2">
        <Link className="flex gap-1 items-center" href="/services">
          <ChevronLeft size={20} />
          <p className="text-base lg:text-lg">All services</p>
        </Link>

        <p className="text-3xl lg:text-4xl font-semibold mt-2">
          Fixture Installation (Faucets, Sinks, Showers)
        </p>

        <div className="relative w-full lg:h-[500px] overflow-hidden rounded-xl my-12">
          <Image
            height={1000}
            width={1000}
            src="/images/drainage.avif"
            alt="drainage main image"
            className="object-cover w-full"
          />
        </div>

        <section className="flex flex-col lg:flex-row gap-2">
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <div className="flex flex-col text-left lg:w-[85%]">
              <p className="text-[17px] font-semibold">
                Elevate Your Space with Modern Fixtures
              </p>
              <p className="text-[17px]">
                New faucets, sinks, and showers can refresh the look of your
                kitchen or bathroom while improving performance and water
                efficiency. At Eastline Mechanical, we offer professional
                fixture installation services that combine clean aesthetics with
                reliable plumbing performance—whether you're renovating a space
                or replacing old, worn-out hardware.
              </p>
            </div>

            <div className="flex flex-col text-left lg:w-[85%]">
              <p className="text-[17px] font-semibold">
                Get it Done Right the First Time
              </p>
              <p className="text-[17px]">
                Improperly installed fixtures can lead to slow leaks, water
                damage, and poor water pressure. Our experienced plumbers ensure
                your new installations are properly sealed, aligned, and fully
                functional from day one. We work with all brands and styles and
                offer recommendations suited to your home or business design.
              </p>
            </div>

            <div className="flex flex-col text-left lg:w-[85%]">
              <p className="text-[17px] font-semibold">
                Upgrade for Efficiency and Value
              </p>
              <p className="text-[17px]">
                Modern plumbing fixtures can help lower water consumption,
                reduce monthly bills, and enhance daily convenience. With
                Eastline Mechanical, you’ll enjoy a smooth installation process
                and long-term peace of mind.
                <span className="text-blue-500">
                  <Link href="/contact">Book your fixture upgrade today</Link>
                </span>{" "}
                and bring both style and efficiency to your home or commercial
                space.
              </p>
            </div>
          </div>

          <form
            onSubmit={sendEmail}
            className="w-full lg:w-1/3 flex flex-col gap-2 rounded-xl px-4 lg:px-10 py-4 pt-6 border-[1px] border-gray-300 bg-white text-black mt-6 lg:mt-0"
          >
            <Mail className="text-blue-500" size={40} />
            <p className="text-left text-xl font-semibold">Contact us</p>
            <p>Reach out for a quote or any queries.</p>
            <div className="flex flex-col gap-4 items-end mt-4">
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
                className="w-full h-[50px] bg-blue-500 text-white text-base"
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
              SMS/MMS messages from Eastline Mechanical. Message & data rates
              may apply.
            </p>
          </form>
        </section>

        <div className="flex flex-col gap-2 mt-20">
          <p className="text-3xl lg:text-4xl font-semibold">
            View other services
          </p>

          <section className="flex flex-wrap justify-between gap-4 lg:gap-0 items-center mt-10">
            {services.slice(0, 3).map((service, idx) => (
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
    </div>
  );
};

export default Fixtureinstallation;
