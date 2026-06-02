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
    open: { rotate: ["0deg", "0deg", "-45deg"], opacity: 0 },
    closed: { rotate: ["-45deg", "0deg", "0deg"], opacity: 1 },
  },
  bottom: {
    open: { rotate: ["0deg", "0deg", "-45deg"], bottom: ["35%", "50%", "50%"], left: "50%" },
    closed: { rotate: ["-45deg", "0deg", "0deg"], bottom: ["50%", "50%", "35%"], left: "calc(50% + 10px)" },
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
  const hamburgerColor = isOpen ? 'bg-gray-900' : (scrolled ? 'bg-gray-900' : 'bg-white');
  return (
    <MotionConfig transition={{ duration: 0.4, ease: "easeInOut" }}>
      <motion.button
        initial={false}
        animate={isOpen ? "open" : "closed"}
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="relative z-[110] h-12 w-12 rounded-full flex items-center justify-center transition-colors hover:bg-black/5"
      >
        <div className="relative h-6 w-8">
          <motion.span variants={VARIANTS.top} className={`absolute h-1 w-8 ${hamburgerColor} rounded-full`} style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }} />
          <motion.span variants={VARIANTS.middle} className={`absolute h-1 w-8 ${hamburgerColor} rounded-full`} style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }} />
          <motion.span variants={VARIANTS.bottom} className={`absolute h-1 w-4 ${hamburgerColor} rounded-full`} style={{ x: "-50%", y: "50%", bottom: "35%", left: "calc(50% + 10px)" }} />
        </div>
      </motion.button>
    </MotionConfig>
  );
};

const SideBar = ({ isOpen, setIsOpen, navLinks }) => {
  const pathname = usePathname();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-[85%] max-w-sm h-full bg-white text-gray-900 z-[105] shadow-2xl flex flex-col"
          >
            {/* Header / Branding */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <Image src="/jlp.webp" fill alt="JLP Logo" className="object-contain" />
                </div>
                <span className="font-bold text-lg tracking-tight">J&L Powertools</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <motion.div whileTap={{ scale: 0.9 }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.div>
              </button>
            </div>

            {/* Scrollable body wrapper */}
            <div className="flex-1 overflow-y-auto flex flex-col justify-between">
              {/* Nav Links */}
              <div className="py-6 px-4 space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all ${
                        isActive
                          ? "bg-[#FACC15] text-gray-900 font-bold shadow-sm"
                          : "text-gray-600 hover:bg-gray-50 active:scale-[0.98]"
                      }`}
                    >
                      <span className={isActive ? "text-gray-900" : "text-gray-400"}>
                        {link.icon}
                      </span>
                      <span className="text-lg">{link.name}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Footer / CTAs */}
              <div className="p-6 bg-gray-50 space-y-3 mt-auto shrink-0">
                <div className="grid grid-cols-2 gap-3 mb-2">
                  <a
                    href="tel:+2348035717860"
                    className="flex flex-col items-center justify-center gap-2 bg-white border border-gray-200 p-3 rounded-2xl hover:border-[#FACC15] transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#FACC15]" />
                    <span className="text-xs font-semibold">Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/2348035717860"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-2 bg-white border border-gray-200 p-3 rounded-2xl hover:border-green-500 transition-colors"
                  >
                    <FaWhatsapp className="w-5 h-5 text-green-500" />
                    <span className="text-xs font-semibold">WhatsApp</span>
                  </a>
                </div>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 bg-gray-900 text-white w-full py-4 rounded-2xl font-bold shadow-lg hover:bg-black transition-all active:scale-[0.98]"
                >
                  Request a Quote
                </Link>

                <Link
                  href="https://maps.app.goo.gl/mKRjzvTuGq9cpZHU9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#FACC15] text-gray-900 w-full py-4 rounded-2xl font-bold shadow-md hover:bg-[#eab308] transition-all active:scale-[0.98]"
                >
                  <FaMapMarkedAlt className="w-5 h-5" />
                  Visit Showroom
                </Link>

                <div className="pt-4 text-center">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
                    Professional Industrial Solutions
                  </p>
                </div>
              </div>
            </div>
          </motion.nav>

        </>
      )}
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
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
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
      className={`px-6 md:px-8 py-4 flex justify-between items-center fixed top-0 left-0 w-full transition-all duration-500 ${
        isSidebarOpen ? "z-[200]" : "z-50"
      } ${
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

      <div className="md:hidden">
        <HamburgerButton toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} scrolled={scrolled} />
      </div>

      <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} toggleSidebar={toggleSidebar} navLinks={navLinks} />
    </nav>
  );
}