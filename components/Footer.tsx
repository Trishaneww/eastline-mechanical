import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="flex flex-col text-black w-full px-2 lg:px-40 bg-indigo-100 py-16">
      <section className="flex flex-wrap justify-between w-full border-b-[1px] border-gray-300 pb-12 px-6">
        <p className="text-lg lg:text-2xl font-semibold w-full lg:max-w-[300px]">
          EASTLINE MECHANICAL
        </p>

        <div className="flex flex-col mt-8 lg:mt-0">
          <p className="font-semibold mb-4">Menu</p>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mt-8 lg:mt-0">
          <p className="font-semibold mb-4">Areas of service</p>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/">Mississauga</Link>
            </li>
            <li>
              <Link href="/">Oakville</Link>
            </li>
            <li>
              <Link href="/">Burlington</Link>
            </li>
            <li>
              <Link href="/">Etobicoke</Link>
            </li>
            <li>
              <Link href="/">Burlington</Link>
            </li>
            <li>
              <Link href="/">Etobicoke</Link>
            </li>
            <li>
              <Link href="/">Burlington</Link>
            </li>
            <li>
              <Link href="/">Etobicoke</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mt-8 lg:mt-0">
          <p className="font-semibold mb-4">Contact</p>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/">(416) 995-4979</Link>
            </li>
            <li>
              <Link href="/">eastlinemechanical@gmail.com</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mt-8 lg:mt-0">
          <p className="font-semibold mb-4">Subscribe</p>
          <p>
            Join our newsletter to stay up to date on features and releases.
          </p>
          <form className="flex flex-col lg:flex-row items-start justify-center mt-2 gap-4">
            <Input
              placeholder="name@gmail.com"
              className="h-[50px] w-full bg-white"
            />
            <Button className="h-[50px] w-full lg:w-[160px] text-base bg-blue-500">Subscribe</Button>
          </form>
        </div>
      </section>

      <section className="flex mt-6 gap-6 px-6">
        <p className="">@2025 Eastline Mechanical</p>
        <div className="flex items-center gap-2">
          <Link href="/">
            <Instagram />
          </Link>
          <Link href="/">
            <Facebook />
          </Link>
          <Link href="/">
            <Twitter />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Footer;
