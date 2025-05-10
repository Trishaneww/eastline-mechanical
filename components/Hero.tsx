"use client"
import Image from 'next/image'
import React from 'react'
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { Input } from './ui/input'
import { Button } from './ui/button'
import { toast } from "sonner"

const Hero = () => {
    const [emailError, setEmailError] = useState("")
    const [nameError, setNameError] = useState("")

    const sendEmail = (e:any) => {
      e.preventDefault();
  
      try {
        console.log("hi")
        if (e.target.email.value === "" || e.target.full_name.value === "") {
  
            if (e.target.email.value === "") {
              setEmailError("Email is required")
              if (e.target.full_name.value === "") {
                setNameError("Fullname is required")
              }
            } 
   
        } else {
            emailjs.sendForm('service_luvg8op', 'template_sx6i957' , e.target , '1MxDwCSvQF6Leln4f');
             e.target.reset()
             setEmailError("")
             setNameError("")
  
            toast(
                "Email Sent", {
                description: "We will get back to you shortly",
            })
        }
      } catch (err) {
      }
    }
  return (
    <div className="flex flex-col h-[100vh] text-black justify-start items-center text-center gap-4 mt-12 lg:mt-28">
        <p className="font-bold text-6xl w-1/2">Eastline Mechanical - Fast & Reliable Plumbing Services</p>
        <p className="w-1/2 mt-4 text-lg">Your trusted partner for fast, reliable, and professional plumbing and rooter services. Whether it's a clogged drain, emergency plumbing, or a full pipe replacement, SwiftRooter has you covered 24/7.</p>

        <section className="flex justify-center items-center">
            <Image 
                src="/images/image2.png"
                width={200}
                height={200}
                alt="testimonial images"
            />
            <div className="flex flex-col items-start justify-center">
                <p className="text-xl font-bold">100+ Clients</p>
                <p>Loved our services</p>
            </div>
        </section>

        <form onSubmit={sendEmail} className="w-full max-w-[1100px] lg:max-h-[440px] flex flex-col gap-2 rounded-xl px-4 lg:px-10 py-6 pt-6 border-[1px] border-gray-200 bg-white text-black mt-28"> 
            <section className="flex gap-2">
            <div className="flex gap-4 items-end">
                <div className="flex flex-col items-start gap-1">
                    <p>Full Name</p>
                    <Input type="text" placeholder='Name' name="full_name" className="w-full h-[50px] p-2 placeholder:texgray-50050 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-300 bg-gray-50"/>
                </div>

                <div className="flex flex-col items-start gap-1">
                    <p>Email</p>
                    <Input type="text" placeholder='Email' name="email" className="w-full h-[50px] p-2 placeholder:text-sgray-500placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-300 bg-gray-50"/>
                </div>

                <div className="flex flex-col items-start gap-1">
                    <p>Website Url</p>
                    <Input type="text" placeholder='Name' name="website" className="w-full h-[50px] p-2 placeholder:text-gray-500 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-300 bg-gray-50"/>
                </div>

                <div className="flex flex-col items-start gap-1">
                    <p>Website Url</p>
                    <Input type="text" placeholder='Name' name="website" className="w-full h-[50px] p-2 placeholder:text-gray-500 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-300 bg-gray-50"/>
                </div>
                <Button type="submit" className="max-w-[300px] h-[50px] bg-slate-950 text-white text-base">Request a free quote</Button>

                {/* <div className="flex flex-col items-start gap-1">
                    <p>Message</p>
                    <textarea placeholder="Tell us more about your project" name="phone" className="w-full h-[115px] p-2 placeholder:text-slate-50 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-500 bg-[#242424]" />
                </div> */}
            </div>
            </section> 
            <p className="text-left">By submitting your contact details, you agree to receive automated SMS/MMS messages from Eastline Mechanical. Message & data rates may apply.</p>
            
            
        </form>
    </div>
  )
}

export default Hero