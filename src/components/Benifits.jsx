import React from 'react'
import soundImg from '../assets/sound.svg'
import rocketImg from '../assets/rocket.svg'
import fireImg from '../assets/fire.svg'
import lockImg from '../assets/lock.svg'
import funnelImg from '../assets/funnel.svg'
import discordImg from '../assets/discord.svg'
import barImg from '../assets/bar.svg'

const Benifits = () => {
    return (
        <section id="benifits" className="flex flex-col items-center justify-center container text-center py-15 gap-10 bg-black min-h-screen scroll-mt-28">
            <div className="flex flex-col px-5 gap-5">
                <div className="scroll-fade-up cover text-white text-xl font-thin ">
                    Benifits
                </div>
                <div className="scroll-fade-up text-2xl md:text-4xl font-semibold " >Why Choose <span className="bg-gradient-to-r from-[#AC6AFF] to-[#FC5201] bg-clip-text text-transparent ">Web3 Protocol ? </span></div>
                <div className="scroll-fade-up font-thin text-base md:text-lg max-w-3xl text-gray-500">We help protocols go from zero to sustained traction by combining narrative engineering, distribution, and liquidity-aware growth systems.
                </div>
            </div>
            {/* Grids goes here */}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-10 ">

                {/* <!-- Card 1 --> */}

                <div class="flex flex-col items-start gap-6 scroll-fade-up">
                    <div className="flex gap-4 items-center ">
                        <img src={soundImg} alt="" className="" />
                        <h3 class="text-xl font-semibold">Sustainable Growth</h3>
                    </div>

                    <p class="text-start text-gray-400 leading-relaxed">
                        We focus on long-term users, contributors, and TVL — not short-term hype or fake engagement.
                    </p>

                </div>



                {/* <!-- Card 2 --> */}

                <div class="flex flex-col items-start gap-6 scroll-fade-up">
                    <div className="flex gap-4 items-center ">
                        <img src={rocketImg} alt="" className="" />
                        <h3 class="text-xl font-semibold">High-Impact Execution</h3>
                    </div>

                    <p class="text-start text-gray-400 leading-relaxed">
                        Data-backed campaigns optimized for reach, conversion, and retention across Web3-native channels.
                    </p>

                </div>


                {/* <!-- Card 3 --> */}

                <div class="flex flex-col items-start gap-6 scroll-fade-up">
                    <div className="flex gap-4 items-center">
                        <img src={fireImg} alt="" className="" />
                        <h3 class="text-xl font-semibold">Scalable Systems</h3>
                    </div>

                    <p class="text-start text-gray-400 leading-relaxed">
                        Our growth frameworks scale from early-stage launches to enterprise-grade ecosystems.
                    </p>

                </div>

                {/* <!-- Card 4 --> */}

                <div class="flex flex-col items-start gap-6 scroll-fade-up">
                    <div className="flex gap-4 items-center ">
                        <img src={lockImg} alt="" className="" />
                        <h3 class="text-xl font-semibold">Security & Reputation First</h3>
                    </div>

                    <p class="text-start text-gray-400 leading-relaxed">
                        We protect your brand with compliant messaging, risk-aware PR, and reputation management.
                    </p>

                </div>

                {/* <!-- Card 5 --> */}

                <div class="flex flex-col items-start gap-6 scroll-fade-up">
                    <div className="flex gap-4 items-center ">
                        <img src={funnelImg} alt="" className="" />
                        <h3 class="text-xl font-semibold">Modular Services</h3>
                    </div>

                    <p class="text-start text-gray-400 leading-relaxed">
                        Choose exactly what you need — token growth, PR, KOLs, market making, or full-stack growth.
                    </p>

                </div>

                {/* <!-- Card 6 --> */}

                <div class="flex flex-col items-start gap-6 scroll-fade-up">
                    <div className="flex gap-4 items-center ">
                        <img src={discordImg} alt="" className="" />
                        <h3 class="text-xl font-semibold text-start">Ecosystem Compatibility</h3>
                    </div>

                    <p class="text-start text-gray-400 leading-relaxed">
                        We work seamlessly with DeFi, Infra, L2s, AI x Crypto, RWA, and Gaming ecosystems.
                    </p>

                </div>


            </div>
            <div className="mask-[linear-gradient(to_right,_transparent,_black_50%,_black_50%,_transparent)] w-full">
                <img src={barImg} alt="" className="w-full" />
            </div>
        </section>
    )
}

export default Benifits
