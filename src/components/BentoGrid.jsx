import React from 'react'

const BentoGrid = () => {
  return (
    <section id="showcase" className="container flex flex-col gap-5 mx-auto px-4 py-16 max-w-7xl bg-black min-h-screen scroll-mt-28">
      {/* Section Header */}
      <div className="text-center mb-16 flex flex-col items-center gap-2 sm:gap-3">
        <h2 className="scroll-fade-up text-2xl md:text-4xl font-semibold mb-6 py-2">
          Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">Showcase</span>
        </h2>
        <p className="scroll-fade-up text-gray-400 text-base md:text-lg max-w-3xl mx-auto text-center py-5 ">
          Explore our core services powering high-growth Web3 protocols.        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[minmax(200px,auto)]">

        {/* Card 1 - Large Card */}
        <div className="scroll-fade-up md:col-span-2 lg:col-span-1 lg:row-span-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-[1px] rounded-3xl">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 h-full flex flex-col gap-3 justify-between">
            <div className='flex flex-col items-start gap-3'>
              <h3 className="text-2xl md:text-3xl font-bold mb-4"> Token Growth & User Acquisition</h3>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                Design and execute token-centric growth strategies focused on real users, on-chain activity, and ecosystem participation.
              </p>
              <div className="flex items-center gap-2 text-purple-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Active state</span>
              </div>
            </div>
            <div className="mt-8 flex justify-center ">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="scroll-fade-up bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-[1px] rounded-3xl">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 h-full flex flex-col gap-3">
            <h3 className="text-xl font-bold mb-3">KOL & Influencer Campaigns</h3>
            <p className="text-gray-400 text-sm md:text-base mb-4 flex-grow ">
              Access vetted creators and opinion leaders aligned with your protocol’s niche and audience.            </p>
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="scroll-fade-up bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-[1px] rounded-3xl">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 h-full flex flex-col gap-3">
            <h3 className="text-xl font-bold mb-3">Market Making & Liquidity</h3>
            <p className="text-gray-400 text-sm md:text-base mb-4 flex-grow">
              Volume generation, exchange coordination, and liquidity optimization — built for sustainability, not manipulation.
            </p>
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="scroll-fade-up bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-[1px] rounded-3xl">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 h-full flex flex-col gap-3">
            <h3 className="text-xl font-bold mb-3">Community & DAO Management</h3>
            <p className="text-gray-400  text-sm md:text-base mb-4 flex-grow">
              From zero to governance-ready — we build and manage high-signal Web3 communities.
            </p>
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5 - Wide Card */}
        <div className="scroll-fade-up md:col-span-2 lg:col-span-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-[1px] rounded-3xl">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 h-full flex flex-col md:flex-row items-center gap-4">
            <div className="flex-grow ">
              <h3 className="text-2xl font-bold mb-3">Launch & Go-To-Market</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Full-stack launch execution including messaging, landing pages, campaigns, and analytics.              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default BentoGrid
