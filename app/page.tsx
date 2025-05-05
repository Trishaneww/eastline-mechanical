import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Steps from '@/components/Steps'
import React from 'react'



const page = () => {
  return (
    <div className="flex flex-col text-slate-50 overflow-hidden">
        <Navbar />
        <Hero />
        <Steps />
        <Experience />
        <Footer />
    </div>
  )
}

export default page