import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { services } from "@/data";

const Footer = () => {
  return (
    <div className="flex flex-col text-black w-full px-2 lg:px-40 xl:px-60 bg-[#d0e3ff] py-16">
      <section className="flex flex-wrap justify-between w-full border-b-[1px] border-gray-300 pb-12 px-6">
        <p className="text-lg lg:text-2xl font-semibold w-full lg:max-w-[250px]">
          East Line <span className="text-blue-500">Mechanical</span>
        </p>

        <div className="flex flex-col mt-8 lg:mt-0">
          <p className="font-semibold mb-4">Services</p>
          <ul className="flex flex-col gap-2">
            {services.map((service, idx) => (
              <li key={idx}>
                <Link href={`${service.link}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col mt-8 lg:mt-0">
          <p className="font-semibold mb-4">Areas of service</p>
          <ul className="flex flex-col gap-2">
            <li>Mississauga</li>
            <li>Oakville</li>
            <li>Burlington</li>
            <li>Etobicoke</li>
            <li>Hamilton</li>
            <li>Toronto</li>
            <li>Milton</li>
          </ul>
        </div>

        <div className="flex flex-col mt-8 lg:mt-0">
          <p className="font-semibold mb-4">Contact</p>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="tel:416-995-4979">(416) 995-4979</Link>
            </li>
            <li>
              <Link href="mailto:eastlinemechanical@gmail.com">
                eastlinemechanical@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="flex mt-6 gap-6 px-6">
        <p className="">@2025 East Line Mechanical. All rights reserved</p>
        {/* <div className="flex items-center gap-2 text-blue-500">
          <Link href="/">
            <Instagram />
          </Link>
          <Link href="/">
            <Facebook />
          </Link>
          <Link href="/">
            <Twitter />
          </Link>
        </div> */}
      </section>
    </div>
  );
};

export default Footer;
