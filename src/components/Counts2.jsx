import React from 'react'
import CountUp from "react-countup";
const Counts2 = () => {
    return (
        <div className="container sm:flex justify-between items-center gap:6 md:gap-12 max-w-4xl mx-auto">
            <div className="scroll-fade-up p-5 head-1 text-center">
                <div className="statnumber text-4xl py-3"><CountUp
          start={5000000}
          end={10000000}
          duration={60}
          separator=","
          decimals={0}
        /></div>
                <div className="stat font-light text-gray-500">TPS Processing Power</div>
            </div>
            <div className="scroll-fade-up p-5 head-2 text-center">
                <div className="statnumber text-4xl py-3"> 0.6 Sec</div>
                <div className="stat font-light text-gray-500">Block Time</div>
            </div>
            <div className="scroll-fade-up p-5 head-3 text-center">
                <div className="statnumber text-4xl py-3">80% fair </div>
                <div className="stat font-light text-gray-500">public mining</div>
            </div>
            <div className="scroll-fade-up p-5 head-3 text-center">
                <div className="statnumber text-4xl py-3"> 0.00001 NBC</div>
                <div className="stat font-light text-gray-500">Ultra-low gas fee</div>
            </div>
        </div>
    )
}

export default Counts2
