import React from 'react'
import technicalImg from '../assets/technical.svg'

const Note = () => {
    return (
        <div className="relative w-full h-[300px] sm:h-[700px] bg-black flex  flex-col px-6  overflow-hidden">
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
            <div className="scroll-fade-up h-full inset-0 w-full overflow-hidden ">
                <img
                    src={technicalImg}
                    alt="Roadmap"
                    className="scroll-fade-up w-full h-auto sm:h-full object-contain opacity-80"
                />
                
            </div>



        </div>

    )
}

export default Note
