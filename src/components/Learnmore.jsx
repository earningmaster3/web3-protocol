import React from 'react'
import barImg from '../assets/bar.svg'
import whitepaper from '../assets/whitepaper.svg'
import document from '../assets/document.svg'
import roadmapImg from '../assets/Roadmap1.svg'
import videoImg from '../assets/video.svg'

const learnmore = () => {
    return (
        <div className="flex flex-col items-center justify-center container text-center gap-5 min-h-screen ">

            <div className="mask-[linear-gradient(to_right,_transparent,_black_50%,_black_50%,_transparent)] w-full">
                <img src={barImg} alt="" className="w-full" />
            </div>

            <div className="scroll-fade-up cover text-white text-xl font-thin ">
                Benifits
            </div>
            <div className="scroll-fade-up text-2xl md:text-4xl font-semibold" >Learn <span className="bg-gradient-to-r from-[#AC6AFF] to-[#FC5201] bg-clip-text text-transparent ">More </span></div>
            <div className="scroll-fade-up font-thin max-w-3xl text-gray-400 text-base md:text-lg px-5">Why leading Web3 teams choose us as their growth partner.
            </div>
            {/* Grids goes here */}
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl w-full px-10 ">

                {/* <!-- Card 1 --> */}

                <div class="scroll-fade-up flex flex-col items-start gap-6 border p-5 rounded-3xl hover:scale-110 hover:transition-transform duration-500 group-hover:translate-x-1 cursor-pointer">
                    <div className="flex gap-4 items-center">
                        <img src={whitepaper} alt="" className="" />
                        <h3 class="text-2.5rem lg:text-xl font-semibold ">Protocol-Aligned Growth</h3>
                    </div>

                    <p class="text-start text-gray-400 leading-relaxed">
                        We don’t run generic campaigns. Every strategy is aligned with your tokenomics, roadmap, and long-term ecosystem vision.
                    </p>


                </div>



                {/* <!-- Card 2 --> */}

                <div class="scroll-fade-up flex flex-col items-start gap-6 border p-5 rounded-3xl hover:scale-110 hover:transition-transform duration-500 group-hover:translate-x-1 cursor-pointer">
                    <div className="flex gap-4 items-center ">
                        <img src={document} alt="" className="" />
                        <h3 class="text-2.5rem lg:text-xl font-semibold text-start ">Faster Go-To-Market</h3>
                    </div>

                    <p class="text-start text-gray-400 leading-relaxed">
                        Launch campaigns in days, not months — with pre-built frameworks for PR, KOLs, community, and distribution.
                    </p>



                </div>


                {/* <!-- Card 3 --> */}

                <div class="scroll-fade-up flex flex-col items-start gap-6 border p-5 rounded-3xl hover:scale-110 hover:transition-transform duration-500 group-hover:translate-x-1 cursor-pointer">
                    <div className="flex gap-4 items-center">
                        <img src={roadmapImg} alt="" className="" />
                        <h3 class="text-2.5rem lg:text-xl font-semibold text-start">Real Users, Real Liquidity</h3>
                    </div>

                    <p class="text-start text-gray-400 leading-relaxed">
                        We focus on genuine users, contributors, and sustainable volume — not bots or artificial hype.                    </p>


                </div>

                {/* <!-- Card 4 --> */}

                <div class="scroll-fade-up flex flex-col items-start gap-6 border p-5 rounded-3xl hover:scale-110 hover:transition-transform duration-500 group-hover:translate-x-1 cursor-pointer">
                    <div className="flex gap-4 items-center">
                        <img src={videoImg} alt="" className="" />
                        <h3 class="text-2.5rem lg:text-xl font-semibold text-start ">Transparent Execution</h3>
                    </div>

                    <p class="text-start text-gray-400 leading-relaxed">
                        Weekly reports, clear KPIs, and full visibility into performance across every channel.                    </p>

                </div>

            </div>
            <div className="mask-[linear-gradient(to_right,_transparent,_black_50%,_black_50%,_transparent)] w-full">
                <img src={barImg} alt="" className="w-full " />
            </div>
        </div>
    )
}
export default learnmore
