import React from 'react'
import CountUp from "react-countup";

const Counts = () => {
  return (
    <div className="container sm:flex justify-between items-center gap:6 md:gap-12 max-w-4xl mx-auto">
      <div className="scroll-fade-up p-5 head-1 text-center">
        <div className="statnumber text-4xl py-3"><CountUp
          start={1}
          end={102}
          duration={15}
          separator=","
          decimals={0}
        /></div>
        <div className="stat font-light text-gray-400">Helped Web3 Projects</div>
      </div>
      <div className="scroll-fade-up p-5 head-2 text-center">
        <div className="statnumber text-4xl py-3">Open Source</div>
        <div className="stat font-light text-gray-400">Transparent & Trustworthy</div>
      </div>
      <div className="scroll-fade-up p-5 head-3 text-center">
        <div className="statnumber text-4xl py-3">Conversation</div>
        <div className="stat font-light text-gray-400">Live discussion</div>
      </div>
    </div>
  )
}

export default Counts
