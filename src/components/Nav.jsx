import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import nbcoin from "../assets/Logo2.svg";
import connect from "../assets/connect.svg";
import { useEffect } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // user scrolling down → hide
        setIsVisible(false);
      } else {
        // scrolling up → show again
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`container items-center fixed left-1/2 -translate-x-1/2 z-15 px-5 overflow-hidden ${isVisible
        ? "translate-y-0 bg-black/60 backdrop-blur-md shadow-lg"
        : "-translate-y-[150%]"
        }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" aria-label="Web3 Protocol home" className="inline-flex">
          <img src={nbcoin} alt="Web3 Protocol logo" className="w-52 cursor-pointer" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6 text-gray-200 font-thin">
          {[
            { name: "Services", href: "#services" },
            { name: "AMAs", href: "#amas" },
            { name: "Video", href: "#video" },
            { name: "Benifits", href: "#benifits" },
            { name: "Showcase", href: "#showcase" },
            { name: "FAQs", href: "#faq" },
            { name: "Blog", href: "/blog" },
          ].map((link) => (
            link.href.startsWith('/') ? (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-white hover:scale-110 transition-transform duration-300"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                target={link.href && link.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="hover:text-white hover:scale-110 transition-transform duration-300"
              >
                {link.name}
              </a>
            )
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Language (desktop only) */}
          <a
            href="#"
            className="hidden lg:flex text-gray-300 hover:text-white hover:scale-110 transition-transform duration-300"
          >
            Language
          </a>

          {/* Connect Button (desktop only) */}
          <a
            href="https://t.me/dariusbro3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={connect}
              alt="connect"
              className="hidden lg:flex cursor-pointer hover:scale-110 transition-transform duration-300"
            />
          </a>

          {/* Hamburger Icon (mobile only) */}
          <button
            className="lg:hidden text-white p-2 rounded-md border border-gray-600 hover:border-white hover:bg-gray-800/40 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden flex flex-col items-center gap-5 text-gray-200 font-thin transition-all duration-500 ease-in-out ${isOpen
          ? "opacity-100 max-h-[600px] pt-8"
          : "opacity-0 max-h-0 overflow-hidden pt-0"
          }`}
      >
        {[
          { name: "Services", href: "#services" },
          { name: "AMAs", href: "#amas" },
          { name: "Video", href: "#video" },
          { name: "Benifits", href: "#benifits" },
          { name: "Showcase", href: "#showcase" },
          { name: "FAQs", href: "#faq" },
          { name: "Blog", href: "/blog" },
        ].map((link) => (
          link.href.startsWith('/') ? (
            <Link
              key={link.name}
              to={link.href}
              className="hover:text-white hover:scale-105 transition-transform duration-300"
            >
              {link.name}
            </Link>
          ) : (
            <a
              key={link.name}
              href={link.href}
              target={link.href && link.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-105 transition-transform duration-300"
            >
              {link.name}
            </a>
          )
        ))}

        {/* Language (mobile) */}
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-transform duration-300"
        >
          Language
        </a>

        {/* Connect Button (inside hamburger) */}
        <a
          href="https://t.me/dariusbro3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={connect}
            alt="connect"
            className="cursor-pointer hover:scale-110 transition-transform duration-300"
          />
        </a>
      </div>
    </nav>
  );

};

export default Navbar;
