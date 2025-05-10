import About from '@/components/About'
import CTA from '@/components/CTA'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Steps from '@/components/Steps'
import Testimonials from '@/components/Testimonials'
import React from 'react'
import { Toaster } from 'sonner'



const page = () => {
  return (
    <div className="flex flex-col overflow-hidden items-center">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Steps />
        <Experience />
        <Testimonials />
        <CTA />
        <Footer />
        <Toaster />
    </div>
  )
}

export default page