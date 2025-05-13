"use client";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
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
    <div className="flex flex-col items-center">
      <Navbar />

      <div className="flex flex-col lg:flex-row gap-16 justify-center mt-20 lg:mt-36 px-6">
        <section className="flex flex-col lg:w-1/4 gap-2">
          <p className="font-semibold text-3xl lg:text-4xl">Contact us</p>
          <p className="text-left">
            Need plumbing assistance? Reach out to us via the form below or call
            us directly for fast service. We're here to help!
          </p>

          <div className="flex flex-col gap-6 mt-4">
            <div className="flex gap-2 items-center">
              <div className="h-[50px] w-[50px] rounded-full bg-blue-500 p-4 flex items-center justify-center text-white">
                <Mail />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold">Email us</p>
                <Link
                  href="mailto:eastlinemechanical@gmail.com"
                  className="underline"
                >
                  eastlinemechanical@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <div className="h-[50px] w-[50px] rounded-full bg-blue-500 p-4 flex items-center justify-center text-white">
                <Phone />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold">Call us</p>
                <Link
                  href="mailto:eastlinemechanical@gmail.com"
                  className="underline"
                >
                  (111) 111 1111
                </Link>
              </div>
            </div>
          </div>
        </section>

        <form
          onSubmit={sendEmail}
          className="w-full lg:w-[30%] flex flex-col gap-2 rounded-xl px-4 lg:px-10 py-4 pt-6 border-[1px] border-gray-300 bg-white text-black mt-6 lg:mt-0"
        >
          {/* <Mail className="text-blue-500" size={40} /> */}
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
              <p>Message</p>
              <Textarea
                placeholder="Your message"
                name="website"
                className="w-full h-[100px] p-2 placeholder:text-gray-500 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200 bg-gray-50"
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
            SMS/MMS messages from Eastline Mechanical. Message & data rates may
            apply.
          </p>
        </form>
      </div>

      <CTA />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Contact;
