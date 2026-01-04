/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const BackCover = () => {
  return (
    <div className="relative h-screen w-full bg-[#08081a] flex items-center justify-center overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[#08081a]/60 z-10 pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-[1200px] h-[85vh] flex items-center justify-center z-20 px-4">
        
        {/* The Back Cover Card */}
        <div className="relative h-full aspect-[3/4] md:aspect-[2/3] lg:aspect-[4/5] bg-[#0c0c24] shadow-[0_0_100px_rgba(0,0,0,1)] border border-white/10 rounded-sm flex flex-col p-8 md:p-14 overflow-y-auto no-scrollbar">
          
          {/* Subtle Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

          {/* Tagline */}
          <div className="mb-8 text-center relative z-10">
            <p className="text-white text-lg md:text-xl font-serif italic leading-relaxed tracking-wide">
              "Power does not announce itself. <br />
              It repeats itself—until someone stops believing the repetition."
            </p>
          </div>

          {/* Synopsis Body */}
          <div className="relative z-10 space-y-4 text-white/80 font-serif leading-relaxed text-sm md:text-base tracking-wide text-center px-2 md:px-6">
            
            <div className="flex items-center justify-center gap-4 mb-4">
               <div className="h-[1px] w-8 bg-orange-500/30"></div>
               <p className="text-orange-500/80 font-bold uppercase tracking-[0.3em] text-[10px]">Synopsis</p>
               <div className="h-[1px] w-8 bg-orange-500/30"></div>
            </div>
            
            <p>
              <span className="text-white font-bold">Silent With My Brother</span> is a psychological power fable about fear, crowds, and the quiet mechanics that govern obedience.
            </p>

            <p>
              The narrator realizes too late that he has not created a follower, but a successor who no longer needs permission, approval, or power itself.
            </p>

            {/* The Big Question */}
            <div className="py-6 border-y border-white/5 my-4 bg-white/[0.01]">
                <p className="text-lg md:text-xl text-white font-black tracking-tight leading-tight italic">
                    What happens when you can see the system clearly—and choose not to belong to it?
                </p>
            </div>
          </div>

          {/* Bottom Branding, Barcode & Integrated Copyright */}
          <div className="mt-auto pt-8 relative z-10 flex flex-col items-center border-t border-white/5">
            
            {/* Edge 9 Branding */}
            <div className="mb-6 text-center">
              <p className="text-orange-500 font-black text-3xl tracking-tighter leading-none">EDGE 9</p>
              <p className="text-white/20 text-[8px] uppercase tracking-[0.5em] mt-1">Awareness is Irreversible</p>
            </div>

            {/* Copyright Section */}
            <div className="text-center mb-6 space-y-2 max-w-xs">
              <p className="text-white/60 font-serif tracking-widest text-[10px]">
                Copyright © 2024 Rolando AY
              </p>
              <p className="text-gray-500 text-[8px] uppercase tracking-[0.15em] leading-tight opacity-50">
                All rights reserved. Reproduction or redistribution in any form without permission is prohibited.
              </p>
              <a 
                href="mailto:rolandoay85@gmail.com" 
                className="block text-blue-400/60 hover:text-blue-400 transition-colors text-[10px] font-mono mt-2"
              >
                rolandoay85@gmail.com
              </a>
            </div>

            {/* Barcode */}
            <div className="bg-white/95 p-2 rounded-sm flex flex-col items-center">
                <div className="w-28 h-8 flex gap-[1px]">
                    {[...Array(24)].map((_, i) => (
                        <div key={i} className={`bg-black h-full ${i % 4 === 0 ? 'w-[0.5px]' : 'w-[1.5px]'} ${i % 7 === 0 ? 'w-[2px]' : ''}`}></div>
                    ))}
                </div>
                <p className="text-[6px] text-black font-mono mt-1 tracking-[0.2em]">9 780123 456789 52699</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <Link to="/final" className="absolute bottom-10 left-10 group flex items-center gap-4 text-white z-50">
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">←</div>
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">Prev</span>
      </Link>

      <Link to="/" className="absolute bottom-10 right-10 group flex items-center gap-4 text-white z-50">
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">Close Book</span>
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">×</div>
      </Link>

    </div>
  )
}

export default BackCover