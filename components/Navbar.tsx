"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Instagram, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import "../styles/global.scss";
import { navItems } from "@/data";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between items-center navbar gap-8 px-4 text-black overflow-hidden lg:px-32 xl:px-72 py-8 z-30">
      <div className="flex gap-8 items-center w-1/3">
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

      <div className="flex justify-center items-center gap-6 w-1/3">
        {navItems.map((item, idx) => (
          <Link
            href={item.href}
            key={idx}
            className={cn(
              "relative dark:text-slate-50 items-center hidden lg:flex space-x-1 text-slate-950 font-semibold text-base"
            )}
            aria-label="navigation link"
          >
            {item.title}
          </Link>
        ))}
        <Button className="h-[45px] w-[160px] text-base bg-blue-500">Request a call</Button>
      </div>

      {/* <div className="flex gap-8 items-center w-1/3 justify-end">
        <Link
          href="mailto:trishane@figmentstudios.ca"
          className={cn(
            "relative dark:text-slate-50 items-center hidden lg:flex space-x-1 text-slate-950 tracking-widest text-sm"
          )}
          aria-label="email us link"
        >
          CONTACT US
        </Link>
      </div> */}

      {/* <nav className="lg:hidden bg-transparent">
      <input type="checkbox" id="sidebar-active" />
      <label htmlFor="sidebar-active" className="open-sidebar-button text-gray-500 mt-9 flex justify-center items-center rounded-lg border-[1px] border-gray-500 p-2 bg-[#1a1a1a]">
        <Menu  size={20}/>
      </label>
      <label id="overlay" htmlFor="sidebar-active"></label>
      <div className="links-container ">
        <label htmlFor="sidebar-active" className="close-sidebar-button relative left-56 text-gray-500 mt-9 flex justify-center items-center rounded-lg border-[1px] border-gray-500 p-2 bg-[#1a1a1a]">
          <X size={20}/>
        
        </label>
        <div className="flex flex-col gap-2">
          <Link href="/" className="text-slate-50 text-base tracking-widest" aria-label="navigation link">HOME</Link> 
          <Link href="/work" className="text-slate-50 text-base -mt-4 tracking-widest" aria-label="navigation link">GALLERY</Link>
          <Link href="/pricing" className="text-slate-50 text-base -mt-4 tracking-widest" aria-label="navigation link">PRICING</Link>
          <Link href="/contact" aria-label="navigation link">
            <Button className="w-[210px] h-[50px] bg-slate-50 text-slate-950 text-sm tracking-widest">GET A FREE REDESIGN</Button>
          </Link>
        </div>

      </div>
    </nav> */}
    </div>
  );
};

export default Navbar;
