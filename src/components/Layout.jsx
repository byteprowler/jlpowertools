import Footer from './Footer';
import Navbar from './Navbar';
import React from 'react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { Inter } from 'next/font/google'
import FloatingWhatsApp from './FloatingWhatsApp';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function MainLayout({children}) {    
  return (
    <>
    <main className={`${inter.variable} font-sans flex flex-col min-h-screen`}>
      <Navbar />
      <div className="flex-grow">
        {children}
        <SpeedInsights />
        <Analytics />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
    </>
  )
}
