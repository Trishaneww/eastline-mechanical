import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const CTA = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-20 justify-center items-center w-full pt-20 text-white bg-blue-500 mt-12 lg:mt-28 px-6">
        <section className="flex flex-col items-start md:items-center lg:items-start text-left md:text-center lg:text-left gap-4 lg:w-1/3 lg:min-w-[500px] lg:pl-30 mb-12">
            <p className="font-semibold text-3xl lg:text-5xl w-full">Have a plumbing issue?
            Leave it to us!</p>
            <p className="md:w-2/3 lg:w-full text-base">Experiencing a plumbing issue? Don't wait - our expert team is here to provide immediate assistance and resolve your plumbing problems swiftly and effectively!</p>
            <Button className="h-[50px] w-full md:w-[220px] lg:w-[170px] bg-blue-500 border-[1px] border-white mt-6 font-semibold text-base">Contact Us</Button>
        </section>


        <section className="flex items-end h-full">
            <Image
                height={380}
                width={380}
                src="/images/image1.png" 
                alt="call to action image"
                className="rounded-tl-xl rounded-tr-xl mt-4 lg:mt-0"
            />
        </section>


        


        

    </div>
  )
}

export default CTA