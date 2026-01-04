/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const AuthorsNote = () => {
  return (
    <div className="relative h-screen w-full bg-[#08081a] flex items-center justify-center overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative w-full max-w-[1200px] h-[85vh] flex items-center justify-center z-20 px-4">
        
        {/* The Text Card */}
        <div className="relative h-full aspect-[3/4] md:aspect-[2/3] lg:aspect-[4/5] bg-[#0c0c24] shadow-[0_0_80px_rgba(0,0,0,0.9)] border border-white/5 rounded-sm flex flex-col p-8 md:p-14 overflow-y-auto no-scrollbar">
          
          {/* Subtle Grain Overlay for Realism */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

          <div className="relative z-10 mb-10">
            <p className="text-orange-500/50 text-[10px] uppercase tracking-[0.8em] font-bold italic mb-4">— Final Entry —</p>
            <h2 className="text-white text-2xl md:text-3xl font-serif font-bold leading-tight">Author’s Note</h2>
          </div>

          <div className="relative z-10 space-y-8 text-white/90 font-serif leading-relaxed text-base md:text-lg tracking-wide">
            
            <p className="text-xl font-medium text-white/100 leading-snug">
              This book was not written to teach power. <br />
              <span className="text-orange-400/80 italic text-lg font-light">Power already teaches itself—poorly, loudly, and without mercy.</span>
            </p>

            <p>
              I set out to trace a quiet transformation: the moment when obedience dissolves—not into rebellion, but into <span className="text-white border-b border-white/20">clarity.</span> 
            </p>

            <p className="text-gray-400 text-sm md:text-base">
              If this book feels uncomfortable, it should. Discomfort is the sensation of a belief losing its grip. The most dangerous ideas do not arrive screaming. They arrive calmly, fully formed, and patient enough to wait.
            </p>

            {/* Quote Block */}
            <div className="bg-white/[0.02] border-l-2 border-blue-500/40 p-6 space-y-4">
               <p className="text-white italic">"The brother is not a person. He is a threshold. He is what happens when awareness outpaces instruction."</p>
            </div>

            <p className="text-gray-400 text-sm">
              If you close this book and something feels quieter than before—if a rule you once followed now sounds rehearsed, or an authority you trusted now feels performative—then the book has already finished its work.
            </p>

            <div className="pt-10 border-t border-white/5">
              <p className="text-white font-bold tracking-tighter uppercase">What you do with that awareness is no longer the author’s responsibility.</p>
              <p className="text-orange-500/50 text-xs font-bold mt-4 tracking-widest">— THE AUTHOR</p>
            </div>
          </div>
        </div>
      </div>

      {/* FIXED NAVIGATION - MAINTAINING CHAPTER ONE BUTTON STYLE */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] z-[100] px-10 py-8 flex justify-between items-center pointer-events-none">
        
        {/* PREV BUTTON */}
        <Link 
          to="/about" 
          className="pointer-events-auto group flex items-center gap-3 bg-[#2a2a2a] text-[#fdfdfd] p-2 pr-5 rounded-full transition-all hover:scale-105 shadow-xl border border-white/5"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-lg">←</span>
          </div>
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Prev</span>
        </Link>

        {/* START BUTTON (Goes to Chapter One) */}
        <Link 
          to="/one" 
          className="pointer-events-auto group flex items-center gap-3 bg-[#2a2a2a] text-[#fdfdfd] p-2 pl-5 rounded-full transition-all hover:scale-105 shadow-xl border border-white/5"
        >
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Start</span>
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-lg">→</span>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default AuthorsNote