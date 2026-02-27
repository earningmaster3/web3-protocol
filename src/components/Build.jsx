

const Build = () => {
    return (
        <div className="flex flex-col items-center justify-center container text-center gap-10 py-15 px-5 bg-black">

            <div className="scroll-fade-up font-semibold text-2xl md:text-4xl " >Ready to scale  <span className="bg-gradient-to-r from-[#AC6AFF] to-[#FC5201] bg-clip-text text-transparent ">your protocol ?</span></div>
            <div className="scroll-fade-up font-thin text-sm max-w-3xl text-gray-500 md:text-base">Turn your product into a thriving ecosystem with a growth partner that understands Web3 at its core.
            </div>
            <a href="https://github.com/nbc111" className="">
                <button
                    className="relative inline-block p-px font-semibold leading-6 text-white bg-gradient-to-r from-[#AC6AFF] to-[#FC5201] shadow-2xl cursor-pointer rounded-xl shadow-pink-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                >
                    <span
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    ></span>

                    <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950" >
                        <div className="relative z-10 flex items-center space-x-2">
                            <span className="transition-all duration-500 group-hover:translate-x-1" >Let's get started</span>
                            <svg
                                className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1 "
                                data-slot="icon"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"

                            >
                                <path
                                    clipRule="evenodd"
                                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                    fillRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </span>
                </button>
            </a>
            <div className="cursor-pointer text-sm text-gray-500 hover:text-white hover:scale-110 hover:transition-transform duration-500 group-hover:translate-x-1">Project? Want growth</div>
        </div>
    )
};

export default Build
