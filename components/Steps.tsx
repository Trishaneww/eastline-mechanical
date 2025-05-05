import { CalendarRange } from 'lucide-react'
import React from 'react'

const Steps = () => {
  return (
    <div className="flex flex-col text-black">
        <p>Book your service in 3 easy steps</p>
        <p>Easy Steps to Get Started" section simplifies the process of booking and receiving plumbing services.</p>

        <section className="flex justify-center items-center gap-8">
            <div className="flex flex-col items-center justify-center">
                <section className="bg-blue-300 flex flex-col items-center justify-center">
                    <div className="flex justify-center items-center bg-white">
                        <CalendarRange />
                    </div>
                </section>
                <p>Choose Plumbing Service</p>
                <p>Browse our range of plumbing services tailored to address various issues in your home or business. Select the service that fits your needs.</p>
            </div>
        </section>

    </div>
  )
}

export default Steps