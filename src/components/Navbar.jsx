import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { FaMapMarkedAlt, FaWhatsapp, FaBlog } from 'react-icons/fa';
import Image from 'next/image';
import { Home, Info, Phone, Package } from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const VARIANTS = {
  top: {
    open: { rotate: ["0deg", "0deg", "45deg"], top: ["35%", "50%", "50%"] },
    closed: { rotate: ["45deg", "0deg", "0deg"], top: ["50%", "50%", "35%"] },
  },
  middle: {
    open: { rotate: ["0deg", "0deg", "-45deg"] },
    closed: { rotate: ["-45deg", "0deg", "0deg"] },
  },
  bottom: {
    open: { rotate: ["0deg", "0deg", "45deg"], bottom: ["35%", "50%", "50%"], left: "50%" },
    closed: { rotate: ["45deg", "0deg", "0deg"], bottom: ["50%", "50%", "35%"], left: "calc(50% + 10px)" },
  },
};

const getSeasonalDecoration = () => {
  const month = new Date().getMonth() + 1;
  if (month === 12) return "/decorations/santa-hat.png";
  if (month === 1) return "/decorations/fireworks.png";
  if (month === 2) return "/decorations/hearts.png";
  if (month === 4) return "/decorations/crescent.png";
  if (month === 10) return "/decorations/green-flag.png";
  return null;
};

const HamburgerButton = ({ isOpen, toggleSidebar, scrolled }) => {
  const hamburgerColor = isOpen ? 'bg-black' : (scrolled ? 'bg-black' : 'bg-gray-500');
  return (
    <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
      <motion.button
        initial={false}
        animate={isOpen ? "open" : "closed"}
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="relative z-[60] h-11 w-10 rounded-full transition-colors"
      >
        <motion.span variants={VARIANTS.top} className={`absolute h-1 w-8 ${hamburgerColor}`} style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }} />
        <motion.span variants={VARIANTS.middle} className={`absolute h-1 w-8 ${hamburgerColor}`} style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }} />
        <motion.span variants={VARIANTS.bottom} className={`absolute h-1 w-4 ${hamburgerColor}`} style={{ x: "-50%", y: "50%", bottom: "35%", left: "calc(50% + 10px)" }} />
      </motion.button>
    </MotionConfig>
  );
};

const SideBar = ({ isOpen, setIsOpen, navLinks }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
        {isOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-4/5 h-full p-6 bg-white text-black z-50 shadow-2xl flex flex-col"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Menu</h2>

            <div className="flex-1 space-y-0 pt-16">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center text-lg p-3 rounded-lg transition-colors ${
                    pathname === link.href
                      ? "bg-[#FACC15] text-black font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  <span className="ml-3">{link.name}</span>
                </Link>
              ))}
            </div>

            <div className="pb-8 space-y-4">
              <div className="flex justify-center space-x-6">
                <Link
                  href="https://maps.app.goo.gl/mKRjzvTuGq9cpZHU9?g_st=com.google.maps.preview.copy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 text-xl"
                  aria-label="Get directions to our showroom"
                >
                  <FaMapMarkedAlt />
                </Link>
                <Link
                  href="https://wa.me/2348035717860"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 text-xl"
                  aria-label="WhatsApp J & L Powertools"
                >
                  <FaWhatsapp />
                </Link>
              </div>

              <a
                href="tel:+2348035717860"
                className="flex items-center justify-center bg-[#FACC15] text-gray-900 py-3 px-6 rounded-full font-bold"
              >
                <Phone className="mr-2 w-4 h-4" />
                +234 803 571 7860
              </a>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center bg-gray-900 text-white py-3 px-6 rounded-full font-semibold"
              >
                Request a Quote
              </Link>

              <p className="text-center text-xs text-gray-400 pt-4 border-t border-gray-200">
                Designed by{' '}
                <Link href="https://byteprowler.vercel.app" target="_blank" rel="noopener" className="text-[#FACC15] hover:underline">
                  ByteProwler
                </Link>
              </p>
            </div>
          </motion.nav>
        )}
      </>
    </AnimatePresence>
  );
};

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  useEffect(() => { setMounted(true) }, []);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto" };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        setScrolled(window.scrollY > heroSection.offsetHeight - 80);
      } else {
        setScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
    { name: "Products", href: "/products", icon: <Package className="w-5 h-5" /> },
    { name: "Insights", href: "/insights", icon: <FaBlog className="w-5 h-5" /> },
    { name: "About", href: "/about", icon: <Info className="w-5 h-5" /> },
    { name: "Contact", href: "/contact", icon: <Phone className="w-5 h-5" /> },
  ];

  if (!mounted) return null;

  return (
    <nav
      className={`px-6 md:px-8 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm text-gray-800"
          : "bg-transparent text-white"
      }`}
    >
      {/* Logo */}
      <div className="relative w-[70px] h-[50px]">
        <Link href="/" aria-label="J & L Powertools Home">
          <Image
            src="/jlp.webp"
            width={70}
            height={50}
            alt="J & L Powertools LTD Logo"
            className="rounded-sm object-contain"
            priority
          />
        </Link>
        {getSeasonalDecoration() && (
          <Image
            src={getSeasonalDecoration()}
            width={40}
            height={40}
            alt="Seasonal decoration"
            className="absolute -top-2 -right-2"
          />
        )}
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`font-medium transition-colors relative group ${
              pathname === link.href
                ? 'text-[#FACC15]'
                : scrolled
                ? 'text-gray-700 hover:text-[#FACC15]'
                : 'text-white/90 hover:text-white'
            }`}
          >
            {link.name}
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#FACC15] transition-all duration-300 ${
              pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
            }`} />
          </Link>
        ))}

        {/* Get a Quote CTA */}
        <Link
          href="/contact"
          className="ml-2 inline-flex items-center gap-1.5 bg-[#FACC15] hover:bg-[#eab308] text-gray-900 font-semibold px-5 py-2 rounded-full transition-colors shadow-sm text-sm"
        >
          Get a Quote
        </Link>
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden z-[60]">
        <HamburgerButton toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} scrolled={scrolled} />
      </div>

      <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} toggleSidebar={toggleSidebar} navLinks={navLinks} />
    </nav>
  );
}