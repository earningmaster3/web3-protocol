

import tradepageImg from '../assets/tradepage.svg'
import robinImg from '../assets/robin.svg'
import maintainImg from '../assets/maintain1.svg'
import horizonImg from '../assets/horizon.svg'

const Features = () => {
    return (
        <section className=" relative container flex flex-col gap-10 mx-auto px-4 py-16 max-w-7xl bg-black min-h-screen">
            {/* Background Grid with Radial Mask */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                    backgroundImage: `
      linear-gradient(to right, rgba(255,105,180,0.2) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,105,180,0.2) 1px, transparent 1px)
    `,
                    backgroundSize: "80px 80px",
                    maskImage:
                        "radial-gradient(ellipse 60% 60% at 50% 50%, white 50%, transparent 100%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 60% 60% at 60% 50%, white 50%, transparent 100%)",
                }}
            ></div>



            {/* Heading */}
            <div className="flex flex-col items-start gap-4 max-w-3xl mx-auto scroll-fade-up">
                <div className="font-bold text-3xl ">
                    Core{" "}
                    <span className="bg-gradient-to-r from-[#AC6AFF] to-[#FC5201] bg-clip-text text-transparent">
                        Capabilities
                    </span>
                </div>
                <div className="text-start text-gray-400 text-base md:text-lg">
                    A protocol-first Web3 marketing agency built to drive adoption, liquidity, and long-term ecosystem growth for crypto-native products.
                </div>
            </div>


            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                {/* Left Large Box */}
                <div className="scroll-fade-left relative flex flex-col justify-between rounded-3xl p-6 sm:row-span-2 border border-gray-500 overflow-hidden min-h-[350px] hover:scale-110 hover:transition-transform duration-500 group-hover:translate-x-1 cursor-pointer">
                    <div className="font-medium text-xl text-shadow-white z-10">
                        Protocol-Native Strategy
                    </div>
                    <div className="absolute bottom-0 right-0 w-[250px] sm:w-[320px] opacity-90">
                        <img
                            src={tradepageImg}
                            alt="Trade illustration"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>

                {/* Top Right Box 1 */}
                <div className="scroll-fade-right relative flex flex-col gap-5 rounded-3xl bg-gradient-to-b from-[#1e1e2f] to-[#0a0a1a] p-6 overflow-hidden min-h-[250px] hover:scale-110 hover:transition-transform duration-500 group-hover:translate-x-1 cursor-pointer">
                    <h3 className="mb-2 text-2xl font-bold">Community-Driven Growth</h3>
                    <p className="mb-4 text-sm text-gray-300 ">
                        We build, activate, and scale communities across X, Discord, Telegram, and forums — turning users into contributors, advocates, and long-term holders.
                    </p>
                    <div className="absolute inset-x-0 bottom-0">
                        <img
                            src={robinImg}
                            alt="Community Illustration"
                            className="w-full h-auto object-contain opacity-90"
                        />
                    </div>
                </div>

                {/* Top Right Box 2 */}
                <div className="scroll-fade-right relative flex flex-col gap-5 rounded-3xl bg-gradient-to-b from-[#1e1e2f] to-[#0a0a1a] p-6 overflow-hidden min-h-[250px] hover:scale-110 hover:transition-transform duration-500 group-hover:translate-x-1 cursor-pointer">
                    <h3 className="text-2xl font-extrabold">Easy Execution & Scaling</h3>
                    <p className="text-sm text-gray-300 ">
                        From campaign setup to reporting, we manage everything end-to-end with transparent workflows, analytics, and performance tracking.
                    </p>
                    <div className="absolute inset-x-0 top-15">
                        <img
                            src={maintainImg}
                            alt="Community Illustration"
                            className="w-full h-auto object-contain opacity-90"
                        />
                    </div>
                </div>

                {/* Bottom Right Wide Box */}
                <div className="scroll-fade-right relative flex flex-col gap-4 rounded-3xl bg-gradient-to-b from-[#1e1e2f] to-[#0a0a1a] p-6 md:col-span-2 overflow-hidden hover:scale-110 hover:transition-transform duration-500 group-hover:translate-x-1 cursor-pointer">
                    <h3 className=" text-2xl font-extrabold">Multi-Channel Expansion</h3>
                    <p className=" text-sm text-gray-300 max-w-[300px] ">
                        We scale horizontally across KOLs, PR, paid ads, partnerships, quests, and on-chain activations — dynamically adjusting based on performance.
                    </p>
                    <div className=" absolute gap-3 right-0 buttom-0 inset-y-0">
                        <img src={horizonImg} alt="" className="" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features
