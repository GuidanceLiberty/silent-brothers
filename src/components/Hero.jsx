/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import HardBook from '../assets/hardbook.jpeg'
import Brothers from '../assets/brothers.jpeg'

const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-[#08081a] flex items-center justify-center overflow-hidden">
      
      {/* Background Glows - Purple/Blue Mix */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Container - Fixed height to prevent "jumpy" transitions */}
      <div className="relative w-full max-w-[1200px] h-[85vh] flex items-center justify-center">
        
        {/* Book Card */}
        <div className="relative h-full aspect-[3/4] md:aspect-[2/3] lg:aspect-[4/5] shadow-[0_0_80px_rgba(0,0,0,0.8)] rounded-lg overflow-hidden border border-white/5">
          <img 
            src={HardBook} 
            alt="Hardcover" 
            className="w-full h-full object-cover brightness-75 contrast-125"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-between py-16 px-8 z-20">
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tighter uppercase text-center drop-shadow-2xl">
              Silent With <br /> <span className="text-white/80">My Brother</span>
            </h1>

            <div className="relative w-64 h-64 lg:w-[400px] lg:h-[400px]">
              <img 
                src={Brothers} 
                alt="Brothers" 
                className="w-full h-full object-cover rounded-full"
                style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 80%)' }}
              />
              <div className="absolute inset-0 bg-orange-600 rounded-full blur-[80px] opacity-20 animate-pulse"></div>
            </div>

            <p className="text-yellow-100/40 text-xl tracking-[0.5em] font-light uppercase italic">Brothers</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Link to="/postscript" className="absolute bottom-10 right-10 group flex items-center gap-4 text-white">
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">Next Page</span>
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">→</div>
      </Link>
    </div>
  )
}

export default Hero