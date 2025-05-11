import { CircleCheck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Experience = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-full px-6 bg-blue-950 gap-12 py-20 mt-12 lg:mt-28 text-white">
        <section className="w-full lg:w-1/2 flex justify-start lg:justify-end">
            <Image
                src="/images/image1.png" 
                width={500}
                height={500}
                alt="plumber installing fountain"
            />
        </section>
        {/* <Image
                src="/images/image1.png" 
                width={1000}
                height={1000}
                alt="plumber installing fountain"
            /> */}

        <section className="flex flex-col w-full lg:w-1/2">
            <p>- OUR EXPERIENCE -</p>
            <p className="text-3xl lg:text-4xl font-semibold text-left lg:w-2/3 mt-8">We're committed to guaranteeing customer satisfaction and excellence</p>

            <ul className="flex flex-col gap-2 my-8">
                <li className="flex items-center gap-2">
                    <CircleCheck />
                    <p className="text-lg">10+ years experience</p>
                </li>

                <li className="flex items-center gap-2">
                    <CircleCheck />
                    <p className="text-lg">10+ years experience</p>
                </li>

                <li className="flex items-center gap-2">
                    <CircleCheck />
                    <p className="text-lg">10+ years experience</p>
                </li>
            </ul>

            <Button className="h-[50px] w-[200px] border-[1px] border-white text-lg">Get a quote</Button>
        </section>
    </div>
  )
}

export default Experience