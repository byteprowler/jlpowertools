import { useRouter } from 'next/router';
import Footer from './Footer';
import Navbar from './Navbar';
import React from 'react'


export default function MainLayout({children}) {
    const router = useRouter();
    
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
      {children}
      </div>
      <Footer />
    </div>
    </>
  )
}
