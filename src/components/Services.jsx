import { useState } from "react";

const servicesData = {
    growth: [
        "Exchange Listing",
        "CoinMarketCap Listing",
        "CoinGecko Listing",
        "Airdrops Marketing",
        "AMAs & Community Events"
    ],
    marketing: [
        "Social Media Marketing",
        "Influencer Marketing",
        "Crypto Influencers Campaigns",
        "Community Marketing",
        "Targeted Promotion"
    ],
    paid: [
        "PPC Marketing",
        "BscScan Ads",
        "Etherscan Ads"
    ],
    pr: [
        "Press Releases",
        "Media Coverage",
        "Website Content",
        "Whitepaper Creation"
    ]
};

export default function ServicesSection() {
    const [active, setActive] = useState("growth");

    return (
        <section id="services" className="w-full flex justify-center py-28 px-6 scroll-mt-28">
            <div className="w-full max-w-5xl flex flex-col gap-10">
                {/* HEADER */}
                <div className="text-center mb-14 scroll-fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-white py-5">
                        Our <span className="bg-gradient-to-r from-[#AC6AFF] to-[#FC5201] bg-clip-text text-transparent">
                            services
                        </span>
                    </h2>
                    <p className="mt-3 text-gray-400">
                        Scalable marketing and growth solutions tailored for Web3 projects.
                    </p>
                </div>

                {/* BUTTONS */}
                <div className="flex flex-wrap justify-center gap-4 mb-14 scroll-fade-up">
                    {[
                        { id: "growth", label: "Listings & Growth" },
                        { id: "marketing", label: "Marketing" },
                        { id: "paid", label: "Paid Ads" },
                        { id: "pr", label: "PR & Content" }
                    ].map((btn) => (
                        <button
                            key={btn.id}
                            onClick={() => setActive(btn.id)}
                            className={`px-6 py-2 rounded-full border transition-all ${active === btn.id
                                ? "bg-white text-black border-white"
                                : "border-gray-600 text-gray-300 hover:border-white"
                                }`}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>

                {/* SERVICES GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 scroll-fade-up">
                    {servicesData[active].map((service, i) => (
                        <div
                            key={i}
                            className="border border-gray-700 rounded-xl p-6 bg-black/40 backdrop-blur text-center hover:border-white transition"
                        >
                            <p className="text-white font-medium">
                                {service}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
