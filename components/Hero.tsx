import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col h-[100vh] text-black justify-start items-center pt-20 text-center gap-4">
        <p className="font-bold text-6xl w-1/2">SwiftRooter - Fast & Reliable Plumbing Services</p>
        <p className="w-1/2 mt-4 text-lg">Your trusted partner for fast, reliable, and professional plumbing and rooter services. Whether it's a clogged drain, emergency plumbing, or a full pipe replacement, SwiftRooter has you covered 24/7.</p>

        <section className="flex justify-center">
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
    </div>
  )
}

export default Hero