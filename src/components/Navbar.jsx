'use client'

import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FaWhatsapp, FaBlog } from 'react-icons/fa';
import Image from 'next/image';
import { Home, Info, Phone, Package } from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
}

const HamburgerButton = ({ isOpen, toggleSidebar, scrolled }) => {
  const hamburgerColor = isOpen ? 'bg-black' : (scrolled ? 'bg-black' : 'bg-gray-500');

  return(
    <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
    <motion.button
      initial={false}
      animate={isOpen ? "open" : "closed"}
      onClick={toggleSidebar}
      className="relative z-[60] h-11 w-10 rounded-full transition-colors"
    >
      <motion.span
        variants={VARIANTS.top}
        className={`absolute h-1 w-8 ${hamburgerColor}`}
        style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
      />
      <motion.span
        variants={VARIANTS.middle}
        className={`absolute h-1 w-8 ${hamburgerColor}`}
        style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
      />
      <motion.span
        variants={VARIANTS.bottom}
        className={`absolute h-1 w-4 ${hamburgerColor}`}
        style={{
          x: "-50%",
          y: "50%",
          bottom: "35%",
          left: "calc(50% + 10px)",
        }}
      />
    </motion.button>
  </MotionConfig>
)}



const SideBar = ({ isOpen,setIsOpen, toggleSidebar, navLinks }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <>
      {isOpen && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40"
        onClick={() => setIsOpen(false)} />
      )}
      {isOpen && (
        <motion.nav
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            backgroundColor: "rgba(255, 255, 255, 1)",
            backdropFilter: "blur(10px)",
          }}
          className="fixed top-0 right-0 w-4/5 h-full p-6 bg-white text-black z-50 shadow-xl flex flex-col"
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

            <div className='pb-8'>
              <div className='flex justify-center space-x-6 mb-6'>
                {/* <a 
                  href="href://facebook.com/jlpowertools"
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 text-xl'
                  aria-label='Facebook'
                >
                  <FaFacebook />
                </a> */}
              <Link
                href={'https://maps.app.goo.gl/mKRjzvTuGq9cpZHU9?g_st=com.google.maps.preview.copy'}
                target='_blank'
                rel='noopener noreferrer' 
                className='text-red-600 text-xl'
                aria-label='Location'>
                <FaMapMarkedAlt />
              </Link>
              <Link
                href="https://wa.me/2348035717860"
                target='_blank'
                rel='noopener noreferrer' 
                className='text-green-500 text-xl'
                aria-label='Whatsapp'>
                <FaWhatsapp />
              </Link>
              </div>
            <Link
              href="tel:+2348135717860"
              className="flex items-center justify-center bg-black text-white py-3 px-6 rounded-lg font-medium">
                <Phone className='mr-2 w-4 h-4' />
                Call Now
              </Link>
              <motion.div
              className="text-center text-xs text-gray-400 mt-4 pt-4 border-t border-gray-800">
                <p className="text-[15px]">Designed by <Link href="https://byteprowler.vercel.app" target='_blank' rel="noopener" className='text-[#FACC15] hover:underline'>ByteProwler</Link></p>
              </motion.div>
            </div>
        </motion.nav>
      )}
      </>
    </AnimatePresence>
  )
}

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isSidebarOpen])

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero', 'product','insights')
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight
        setScrolled(window.scrollY > heroHeight - 80)
      } else {
        setScrolled(window.scrollY > 50)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
    { name: "Product", href: "/products", icon: <Package className="w-5 h-5" /> },
    { name: "Insights", href: "/insights", icon: <FaBlog className="w-5 h-5" /> },
    { name: "About", href: "/about", icon: <Info className="w-5 h-5" /> },
    { name: "Contact", href: "/contact", icon: <Phone className="w-5 h-5" /> },
  ]

  if (!mounted) return null

  return (
    <nav
      className={`px-8 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow text-gray-800" : "bg-inherit text-gray-600"
      }`}
    >
      <Link href={'/'} className="text-xl font-bold">
        <Image src='/jlp.webp' 
        width={70} 
        height={150} 
        alt='J & L Powertools Logo' 
        className='overflow-hidden rounded-sm'
        priority />
        </Link>

      <div className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} 
          className={`font-medium transition-colors ${
            pathname === link.href 
              ? 'text-[#FACC15] hover:text-[#FACC15]'
              : ' hover:text-[#FACC15]'
          }`}>
            {link.name}
          </Link>
        ))}
      </div>

      <div className="md:hidden z-[60]">
        <HamburgerButton toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} scrolled={scrolled} />
      </div>

      <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} toggleSidebar={toggleSidebar} navLinks={navLinks} />
    </nav>
  )
}