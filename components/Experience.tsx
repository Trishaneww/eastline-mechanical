import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Experience = () => {
  return (
    <div className="flex w-full h-[50vh] px-12 bg-slate-900 gap-12 py-12">
        <section className="w-1/2 flex justify-end">
            <Image
                src="/images/image1.png" 
                width={400}
                height={400}
                alt="plumber installing fountain"
            />
        </section>

        <section className="flex flex-col w-1/2">
            <p>Our Experience</p>
            <p>We're committed to guaranteeing customer satisfaction and excellence</p>

            <ul className="flex flex-col">
                <li className="">
                    <Check />
                    <p className="">10+ years experience</p>
                </li>
            </ul>

            <Button className="h-[50px] w-[200px] bg-white">Get a quote</Button>
        </section>
    </div>
  )
}

export default Experience