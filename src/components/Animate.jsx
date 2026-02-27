import { motion } from "framer-motion"

const Animate = () => {
    // base set of images (can be replaced with real asset imports)
    const baseImages = [
        "/flux.svg",
        "/TOKEN 2049.svg",
        "/Collably.svg",
        "/Taskon.svg",
        "/Newbit.svg",
        "/aionet.svg",
    ]

    // duplicate lists to create a seamless loop (translate -50% moves one copy)
    const upperImages = [...baseImages, ...baseImages ,...baseImages,...baseImages]


    return (
        <div className="container max-w-6xl mx-auto " >
            <div className="flex flex-col gap-6 md:gap-8"> 
                <div className="h-20 md:h-24 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                    <motion.div
                        className="flex filter grayscale gap-3"
                        initial={{ x: "0%" }}
                        animate={{ x: "-100%" }}
                        transition={{
                            duration: 50,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {upperImages.map((image, index) => (
                            <img
                                src={image}
                                key={index}
                                className="w-35 md:w-42 md:h-24  p-3 flex-shrink-0"
                                alt="coin"
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>

    )
}

export default Animate
