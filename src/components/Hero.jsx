/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import HardBook from '../assets/hardbook.jpeg'
import Brothers from '../assets/brothers.jpeg'

const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-[#08081a] flex items-center justify-center overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Front Cover Container */}
      <div className="relative w-full max-w-[1200px] h-[85vh] flex items-center justify-center z-20 px-4">
        
        {/* Book Card - Front Cover */}
        <div className="relative h-full aspect-[3/4] md:aspect-[2/3] lg:aspect-[4/5] shadow-[0_0_100px_rgba(0,0,0,0.9)] rounded-sm overflow-hidden border border-white/10 group">
          
          {/* Base Background Image */}
          <img 
            src={HardBook} 
            alt="Hardcover Texture" 
            className="w-full h-full object-cover brightness-[0.4] contrast-125"
          />

          {/* Front Cover Layout */}
          <div className="absolute inset-0 flex flex-col items-center justify-between py-12 md:py-20 px-8 z-20">
            
            {/* Top Branding / Series */}
            <div className="text-center">
              <p className="text-orange-500 font-bold tracking-[0.6em] text-[10px] uppercase mb-2">A Psychological Power Fable</p>
              <div className="w-12 h-[1px] bg-white/20 mx-auto"></div>
            </div>

            {/* Title Block */}
            <div className="space-y-2">
               <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tighter uppercase text-center drop-shadow-[0_10px_10px_rgba(0,0,0,1)]">
                Silent With <br /> 
                <span className="text-white/70 italic block mt-2">My Brother</span>
              </h1>
            </div>

            {/* Central Art Element */}
            <div className="relative w-56 h-56 lg:w-[380px] lg:h-[380px]">
              <img 
                src={Brothers} 
                alt="Brothers Visualization" 
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-1000"
                style={{ 
                  maskImage: 'radial-gradient(circle, black 45%, transparent 85%)', 
                  WebkitMaskImage: 'radial-gradient(circle, black 45%, transparent 85%)' 
                }}
              />
              <div className="absolute inset-0 bg-orange-600 rounded-full blur-[90px] opacity-10 animate-pulse"></div>
            </div>

            {/* Author Credit */}
            <div className="text-center space-y-3">
              <p className="text-white/40 text-[10px] tracking-[0.8em] font-light uppercase">Author</p>
              <h3 className="text-white text-2xl font-serif tracking-widest font-light text-center">ROLANDO AY</h3>
            </div>
          </div>

          {/* Spine Highlight Effect */}
          <div className="absolute inset-y-0 left-0 w-[2px] bg-white/10 shadow-[2px_0_10px_rgba(255,255,255,0.05)]"></div>
        </div>
      </div>

      {/* SINGLE NAVIGATION BUTTON - Matched exactly to Chapter One style */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] z-[100] px-10 py-8 flex justify-end items-center">
        <Link 
          to="/postscript" 
          className="group flex items-center gap-3 bg-[#2a2a2a] text-[#fdfdfd] p-2 pl-5 rounded-full transition-all hover:scale-105 shadow-xl border border-white/5"
        >
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Next</span>
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-lg">→</span>
          </div>
        </Link>
      </div>
      
    </div>
  )
}

export default Hero;