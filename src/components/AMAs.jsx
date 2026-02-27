import AMA1 from "../assets/AMA1.png";
import AMA2 from "../assets/AMA2.jpg";
import AMA4 from "../assets/AMA4.jpg";
import AMA5 from "../assets/AMA5.jpg";
import AMA6 from "../assets/AMA6.jpg";
import AMA7 from "../assets/AMA7.jpg";

const amas = [
    {
        id: 1,
        title: "AMA: Project Alpha",
        img: AMA1,
        url: "https://x.com/web3_protocol/status/1968314709817348421?s=46"
    },
    {
        id: 2,
        title: "AMA: Beta DAO",
        img: AMA2,
        url: "https://x.com/web3_protocol/status/1789602416981160104?s=46"
    },
    {
        id: 3,
        title: "AMA: Token Launch",
        img: AMA4,
        url: "https://x.com/web3_protocol/status/1954108518694359527?s=46"
    },
    {
        id: 4,
        title: "AMA: NFTs & Utility",
        img: AMA5,
        url: "https://x.com/coinwofficial/status/1791006528495145277?s=46"
    },
    {
        id: 5,
        title: "AMA: DeFi Strategy",
        img: AMA6,
        url: "https://x.com/Web3_Protocol/status/1913197575487762607?t=JdON5Ub2VtFkWpnqIPbD1g&s=19"
    },
    {
        id: 6,
        title: "AMA: Community Growth",
        img: AMA7,
        url: "https://x.com/web3_protocol/status/1826646647637750129?s=46"
    }
];

export default function AMAsSection() {
    return (
        <section id="amas" className="w-full flex justify-center py-28 px-6 bg-black scroll-mt-28 scroll-fade-up">
            {/* CENTERED WRAPPER */}
            <div className="w-full max-w-6xl">
                {/* HEADER */}
                <div className="text-center mb-14 flex flex-col gap-3 py-7">
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                        Live AMAs
                    </h3>
                    <p className="mt-3 text-gray-400">
                        Join live discussions, launches, and community events.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {amas.map((a) => (
                        <a
                            key={a.id}
                            href={a.url}
                            title={`Join ${a.title}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative rounded-xl overflow-hidden border border-gray-700 bg-black/40 backdrop-blur hover:border-white transition"
                            aria-label={`Open AMA page for ${a.title} in a new tab`}
                        >
                            {/* IMAGE */}
                            <div
                                className="w-full aspect-video bg-center bg-cover transition-transform duration-300 group-hover:scale-105"
                                style={{ backgroundImage: `url(${a.img})` }}
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                <span className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium">
                                    Join AMA
                                </span>
                            </div>

                            {/* TITLE */}
                            <div className="p-4">
                                <h4 className="text-white font-medium">
                                    {a.title}
                                </h4>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
