

const Technical = () => {
    return (
        <div className='container flex  sm:flex justify-between items-center gap:6 md:gap-12 max-w-4xl mx-auto px-10'>
            {/* Text Layer */}
            <div className="relative z-10 max-w-5xl mx-auto text-left flex flex-col gap-6">
                <h2 className="text-2xl md:text-4xl font-semibold text-white scroll-fade-up ">
                    Growth{" "}
                    <span className="bg-gradient-to-r from-[#AC6AFF] to-[#FC5201] bg-clip-text text-transparent">
                        Architecture
                    </span>
                </h2>
                <p className="text-gray-400 scroll-fade-up text-base md:text-lg">
                    A layered, data-driven growth system designed to balance awareness, adoption, and liquidity at every stage of your protocol.                </p>
            </div>
        </div>
    )
}

export default Technical
