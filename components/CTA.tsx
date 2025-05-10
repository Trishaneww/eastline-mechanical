import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const CTA = () => {
  return (
    <div className="flex gap-2 justify-center items-center w-full pt-20 text-white bg-blue-500 mt-12 lg:mt-28">
        <section className="flex flex-col items-start text-left gap-4 w-1/2">
            <p className="font-semibold text-4xl w-1/2">Have a plumbing issue?
            Leave it to us!</p>
            <p className="w-1/2">Experiencing a plumbing issue? Don't wait - our expert team is here to provide immediate assistance and resolve your plumbing problems swiftly and effectively!</p>
            <Button className="h-[50px] w-[170px] bg-blue-500 border-[1px] border-white mt-6">Contact Us</Button>
        </section>


        <section className="flex items-end h-full">
            <Image
                height={380}
                width={380}
                src="/images/image1.png" 
                alt="call to action image"
            />
        </section>


        


        

    </div>
  )
}

export default CTA