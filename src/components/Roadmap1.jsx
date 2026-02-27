import React from 'react'

const Roadmap1 = () => {
  return (
    <div className='container sm:flex justify-between items-center gap:6 md:gap-12 max-w-4xl mx-auto px-10'>
      {/* Text Layer */}
      <div className="relative z-10 max-w-5xl mx-auto text-left flex flex-col gap-6">
        <h2 className="font-bold text-4xl text-white scroll-fade-up">
          Growth{" "}
          <span className="bg-gradient-to-r from-[#AC6AFF] to-[#FC5201] bg-clip-text text-transparent">
            Roadmap
          </span>
        </h2>
        <p className="text-gray-500 text-lg scroll-fade-up">
          A proven step-by-step framework to take your Web3 project from idea to ecosystem.        </p>
      </div>
    </div>
  )
}

export default Roadmap1
