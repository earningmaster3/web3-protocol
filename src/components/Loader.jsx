
import { useEffect, useState } from "react";
const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <img
        src="/Logo2.svg"
        alt="Company Logo"
        className="w-32 h-32 animate-pulse"
      />
    </div>
    )
}

export default Loader
