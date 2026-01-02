/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Copyright = () => {
  return (
    <div className="relative h-screen w-full bg-[#08081a] flex items-center justify-center overflow-hidden">
      
      {/* Background Glows - Minimal and "Off" */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-[1200px] h-[85vh] flex items-center justify-center">
        
        {/* The Card */}
        <div className="relative h-full aspect-[3/4] md:aspect-[2/3] lg:aspect-[4/5] bg-[#0c0c24] shadow-[0_0_80px_rgba(0,0,0,1)] border border-white/5 rounded-lg flex flex-col items-center justify-center p-12 text-center">
          
          <div className="space-y-8 max-w-sm">
            {/* Copyright Text */}
            <div className="space-y-2">
              <p className="text-white font-serif tracking-widest text-sm">
                Copyright © 2024 Rolando AY
              </p>
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] leading-relaxed">
                All rights reserved. This book may not be copied, translated, reproduced, or redistributed in any form without permission.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="py-6 border-y border-white/5">
              <p className="text-white/60 text-xs italic font-serif">
                "It is a work of observation, not instruction. The responsibility of interpretation belongs to the reader."
              </p>
            </div>

            {/* Brand / Series */}
            <div>
              <p className="text-orange-500 font-black text-4xl tracking-tighter">EDGE 9</p>
            </div>

            {/* Contact */}
            <div className="pt-4">
              <p className="text-gray-600 text-[10px] uppercase tracking-widest mb-1">Inquiries</p>
              <a 
                href="mailto:rolandoay85@gmail.com" 
                className="text-blue-400 hover:text-white transition-colors text-sm font-mono tracking-tight"
              >
                rolandoay85@gmail.com
              </a>
            </div>
          </div>

          {/* Bottom Branding */}
          <div className="absolute bottom-12">
             <p className="text-[9px] text-white/10 tracking-[1em] uppercase">Awareness is Irreversible</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Link to="/cover" className="absolute bottom-10 left-10 group flex items-center gap-4 text-white z-50">
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

export default Copyright