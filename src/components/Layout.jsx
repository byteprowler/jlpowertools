import Footer from './Footer';
import Navbar from './Navbar';
import React from 'react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter, Open_Sans } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['400', '700'],
});

export default function MainLayout({children}) {    
  return (
    <>
    <main className={`${inter.variable} ${openSans.variable} flex flex-col min-h-screen`}>
      <Navbar />
      <div className="flex-grow">
      {children}
      <SpeedInsights />
      </div>
      <Footer />
    </main>
    </>
  )
}
