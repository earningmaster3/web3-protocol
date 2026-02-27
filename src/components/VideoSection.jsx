import { useState } from "react";

export default function CenteredVideoSection() {
    const [playing, setPlaying] = useState(false);
    const [error, setError] = useState('')

    // Video file placed in the public folder (public/discus.MP4)
    const videoSrc = "/discus.MP4";
    const poster =
        "https://img.freepik.com/premium-photo/discussion-meeting-business-people-planning-brainstorming-staff-collaboration-ideas-group-listening-speaking-strategy-black-man-employees-teamwork-workflow-talking_590464-194060.jpg?semt=ais_hybrid";

    return (
        <section id="video" className="w-full flex justify-center py-10 px-6 bg-black scroll-mt-28 scroll-fade-up">
            {/* CENTERED WRAPPER */}
            <div className="w-full max-w-4xl">
                {/* HEADER */}
                <div className="text-center mb-10 py-10">
                    <h3 className="text-3xl font-bold text-white py-5">
                        Watch Our <span className="bg-gradient-to-r from-[#AC6AFF] to-[#FC5201] bg-clip-text text-transparent">
                            Discussion Session
                        </span>
                    </h3>
                    <p className="mt-3 text-gray-400">
                        A quick glance of how we can help you to onboard you and your protocol.
                    </p>
                </div>

                {/* VIDEO CARD */}
                <div className="relative rounded-2xl overflow-hidden border border-gray-700 bg-black/40 backdrop-blur shadow-lg">
                    {!playing ? (
                        <button
                            onClick={() => setPlaying(true)}
                            aria-label="Play video"
                            className="relative w-full aspect-video bg-center bg-cover flex items-center justify-center"
                            style={{ backgroundImage: `url(${poster})` }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40" />

                            {/* Play Button */}
                            <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-white/90 hover:scale-105 transition">
                                <svg
                                    className="w-8 h-8 text-black ml-1"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </button>
                    ) : (
                        error ? (
                            <div className="w-full aspect-video flex items-center justify-center bg-gray-900 text-center p-6">
                                <div>
                                    <p className="text-gray-300 mb-3">{error}</p>
                                    <div className="flex items-center justify-center gap-3">
                                        <a href={videoSrc} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-black rounded">Open file</a>
                                        <button onClick={() => { setError(''); setPlaying(false) }} className="px-4 py-2 border border-gray-600 text-gray-200 rounded">Back</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <video
                                className="w-full aspect-video"
                                src={videoSrc}
                                controls
                                autoPlay
                                playsInline
                                onError={() => setError('Video failed to load. Put discus.mp4 into the project\'s public/ folder (public/discus.mp4).')}
                                muted={false}
                            />
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
