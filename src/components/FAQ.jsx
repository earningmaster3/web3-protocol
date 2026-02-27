import { useState } from "react";

const faqs = [
    {
        q: "What services does your Web3 agency provide?",
        a: "We offer tokenomics design, smart contract development, NFT strategy, dApp UX, on-chain integrations, and community growth solutions."
    },
    {
        q: "How do you ensure smart contract security?",
        a: "We follow secure-by-design principles, conduct internal audits, and collaborate with third-party auditors before any mainnet deployment."
    },
    {
        q: "Can you help with token launches and listings?",
        a: "Yes. We support token launch strategy, liquidity planning, exchange coordination, and market-making partnerships."
    },
    {
        q: "How do you approach NFT collections and utility?",
        a: "We combine storytelling, rarity design, mint UX, and on-chain utility to ensure long-term value and engagement."
    },
    {
        q: "What industries do you specialize in?",
        a: "We work across DeFi, NFTs, gaming, DAOs, and blockchain infrastructure projects."
    }
];

export default function FAQ() {
    const [open, setOpen] = useState(null);

    return (
        <section id="faq" className="w-full flex justify-center py-24 px-6 scroll-mt-28">
            {/* CENTERED CONTAINER */}
            <div className="w-full max-w-4xl ">
                {/* HEADER */}
                <div className="text-center mb-14 gap-6 flex flex-col">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Frequently asked questions
                    </h2>
                    <p className="mt-3 text-gray-400">
                        Answers to common questions about working with our Web3 agency.
                    </p>
                </div>

                {/* FAQ LIST */}
                <div className="flex flex-col gap-4 py-10 ">
                    {faqs.map((item, i) => (
                        <div
                            key={i}
                            className="border border-gray-700 rounded-xl bg-black/40 backdrop-blur"
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between px-6 py-5 text-left"
                            >
                                <span className="text-white text-lg font-medium">
                                    {item.q}
                                </span>

                                <svg
                                    className={`w-5 h-5 text-gray-400 transition-transform ${open === i ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {/* ANSWER */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-40 px-6 pb-5" : "max-h-0 px-6"
                                    }`}
                            >
                                <p className="text-gray-400 leading-relaxed">
                                    {item.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
