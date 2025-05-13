"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import "../styles/global.scss";
import { navItems } from "@/data";

const Navbar = () => {
  return (
    <div className="flex w-[95%] lg:w-[60%] justify-between items-center navbar gap-8 px-4 text-black overflow-hidden py-2 z-30 bg-[#FFFF] rounded-2xl mt-6">
      <div className="flex gap-8 items-center w-full lg:w-1/3">
        <Link
          href="/"
          className={cn(
            "relative dark:text-slate-50 items-center flex space-x-1 text-slate-950"
          )}
          aria-label="homepage link"
        >
          <p className="text-lg lg:text-xl font-extrabold">
            EASTLINE MECHANICAL
          </p>
        </Link>
      </div>

      <div className="hidden lg:flex justify-center items-center gap-6 w-1/3">
        {navItems.map((item, idx) => (
          <Link
            href={item.href}
            key={idx}
            className={cn(
              "relative dark:text-slate-50 items-center hidden lg:flex space-x-1 text-slate-950 font-semibold text-base lg:text-lg"
            )}
            aria-label="navigation link"
          >
            {item.title}
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex gap-8 items-center lg:w-1/3 justify-end">
        <Link
          href="mailto:trishane@figmentstudios.ca">
          <Button className="h-[45px] w-[160px] text-base bg-blue-500">Request a call</Button>
        </Link>
      </div>

<nav className="lg:hidden bg-transparent">
      <input type="checkbox" id="sidebar-active" />
      <label htmlFor="sidebar-active" className="open-sidebar-button text-gray-500 flex justify-center items-center rounded-lg border-[1px] border-gray-500 p-2 bg-white">
        <Menu  size={20}/>
      </label>
      <label id="overlay" htmlFor="sidebar-active"></label>
      <div className="links-container ">
        <label htmlFor="sidebar-active" className="close-sidebar-button relative left-80 text-gray-500 mt-9 flex justify-center items-center rounded-lg border-[1px] border-gray-500 p-2 bg-white">
          <X size={20}/>
        
        </label>
        <div className="flex flex-col gap-2 w-full text-center font-semibold mt-12">
          <Link href="/" className="text-black w-full text-lg" aria-label="navigation link">About</Link> 
          <Link href="/work" className="text-black -mt-4 w-full text-lg" aria-label="navigation link">Services</Link>
          <Link href="/pricing" className="text-black -mt-4 w-full text-lg" aria-label="navigation link">Contact Us</Link>
          <Link href="/contact" aria-label="navigation link w-full text-lg">
            <Button className="w-full h-[50px] bg-blue-500 text-white text-sm">GET A FREE REDESIGN</Button>
          </Link>
        </div>

      </div>
    </nav>
    </div>
  );
};

export default Navbar;
