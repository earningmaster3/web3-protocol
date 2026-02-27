import React from 'react'
import roadmapImg from '../assets/Roadmap.svg'

const Roadmap = () => {
  return (
<div className="relative w-full min-h-screen bg-black flex flex-col px-6 py-16 overflow-hidden">
  {/* Background Grid */}
  <div
    className="absolute inset-0 w-full h-full pointer-events-none"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(255,105,180,0.2) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,105,180,0.2) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
      maskImage:
        "radial-gradient(ellipse 60% 60% at 60% 50%, white 50%, transparent 100%)",
      WebkitMaskImage:
        "radial-gradient(ellipse 60% 45% at 60% 50%, white 70%, transparent 100%)",
    }}
  ></div>

  {/* Image Layer */}
  <div className="scroll-fade-up absolute inset-0 w-full h-full overflow-hidden mask-[linear-gradient(to_top,_transparent,_black_30%,_black_50%,_transparent)]">
    <img
      src={roadmapImg}
      alt="Roadmap"
      className="scroll-fade-up w-full h-full object-contain opacity-80"
    />
    <div className="absolute inset-0 "></div>
  </div>

  
</div>



  )
}

export default Roadmap
