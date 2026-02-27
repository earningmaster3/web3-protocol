import peoplesImg from '../assets/peoples.svg'
import signinImg from '../assets/Signin.svg'
import Typewriter from "typewriter-effect";

const Hero = () => {


  return (
    <div className="relative flex flex-col items-center justify-start md:justify-center h-auto md:min-h-screen overflow-hidden bg-black text-white px-4 py-20 sm:py-22 ">
      {/* Grid Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, white 50%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 45% at 50% 50%, white 70%, transparent 100%)",
        }}
      ></div>



      {/* Hero Content */}
      <div className=" relative z-10 text-center px-6 max-w-4xl mx-auto space-y-6">
        <div className="scroll-fade-up flex items-center justify-center gap-4 py-15 ">
          <div className="relative wrapper flex p-3 items-center justify-center gap-2 sm:gap-4 cursor-pointer bg-gradient-to-b from-[#3a3a3a] to-[#0f0f0f] hover:animate-pulse rounded-full">
            {/* <!-- top thin highlight --> */}
            <div class="absolute inset-0 rounded-full border-t border-white/25"></div>

            {/* <!-- bottom thicker glow --> */}
            <div class="absolute inset-0 rounded-full border-b-[2px] border-white/10"></div>

            {/* <!-- optional subtle inner gloss --> */}
            <div class="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent"></div>
            <img src={peoplesImg} alt="" className="peoples w-20" />
            <div className="h-2 w-2 bg-green-300 rounded-full shadow  animate-pulse "></div>

            <h3 className="text-sm md:text-lg font-light text-gray-300 whitespace-nowrap ">
              Join with 100+ peoples
            </h3>
          </div>

        </div>

        <div className="relative">
          <h1 className="scroll-fade-up text-3xl md:text-5xl font-extrabold leading-tight">
            <Typewriter
              options={{
                strings: ["SUPERIOR GROWTH", "SCALABLE PROTOCOL", "WEB3 MARKETING"],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40,
              }}
            />
            <span className="inline-block bg-gradient-to-r from-[#AC6AFF] to-[#FC5201] bg-clip-text text-transparent">
              SCALABLE ENTERPRISE-GRADE
            </span>{" "}


            BLOCKCHAIN INFRASTRUCTURE
          </h1>

        </div>

        <p className="scroll-fade-up text-gray-400 text-base md:text-lg py-10">
          Launch, scale, and dominate your project and protocol with data-driven growth, high-impact narratives, and liquidity-aware marketing — built for founders, DAOs, and on-chain ecosystems.
        </p>

        <div className="scroll-fade-up relative buttons flex items-center justify-center gap-6">
          <a
            href="https://t.me/dariusbro3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={signinImg}
              href="https://t.me/dariusbro3"
              alt=""
              className="cursor-pointer hover:scale-110 transition-transform duration-500 group-hover:translate-x-1 "
            />
          </a>
          <div className="learn-more cursor-pointer hover:scale-110 transition-transform duration-500 group-hover:translate-x-1"><a
            href="https://x.com/Web3_Protocol"
            target="_blank"
            rel="noopener noreferrer"
          >Learn More </a></div>
        </div>



      </div>
    </div>


  );
};

export default Hero;
