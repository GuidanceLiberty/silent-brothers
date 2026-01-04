/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="relative h-screen w-full bg-[#08081a] flex items-center justify-center overflow-hidden">
      
      {/* Background Glows - Exact same as Hero and Postscript */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative w-full max-w-[1200px] h-[85vh] flex items-center justify-center z-20 px-4">
        
        {/* The Text Card - Matching aspect ratio and styling */}
        <div className="relative h-full aspect-[3/4] md:aspect-[2/3] lg:aspect-[4/5] bg-[#0c0c24] shadow-[0_0_80px_rgba(0,0,0,0.9)] border border-white/5 rounded-sm flex flex-col p-8 md:p-14 overflow-y-auto no-scrollbar">
          
          {/* Subtle Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

          <div className="relative z-10 mb-8">
            <p className="text-orange-500/50 text-[10px] uppercase tracking-[0.8em] font-bold italic mb-4">— The Core —</p>
            <h2 className="text-white text-2xl md:text-3xl font-serif font-bold leading-tight">
              Awareness Outgrows Control
            </h2>
          </div>

          <div className="relative z-10 space-y-8 text-white/90 font-serif leading-relaxed text-base md:text-lg tracking-wide">
            
            <p className="italic text-gray-400 border-l border-white/10 pl-4">
              At its core, this book is not a how-to manual. It is a warning disguised as a confession.
            </p>

            <p>
              <span className="text-white font-bold">Silent With My Brother</span> is a psychological power fable about how systems, crowds, and fear manufacture obedience—and how awareness quietly dismantles it.
            </p>

            {/* Key Insights Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-blue-400 text-xs uppercase tracking-widest font-bold underline decoration-blue-900 underline-offset-4">01. Emotion over Logic</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Crowds do not follow truth; they follow fear, relief, and hope. Whoever understands this bends authority toward them.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-blue-400 text-xs uppercase tracking-widest font-bold underline decoration-blue-900 underline-offset-4">02. The Brother's Sight</h4>
                <p className="text-xs text-gray-400 leading-relaxed">He learns to read pauses instead of words. He becomes dangerous because he stops believing the system is natural.</p>
              </div>
            </div>

            {/* Accent Highlight */}
            <div className="bg-white/[0.02] border-l-2 border-orange-500/40 p-6 space-y-3 italic text-gray-400">
               <p className="text-white not-italic font-semibold text-lg tracking-tight">The True Horror is Moral Clarity.</p>
               <p className="text-sm">The brother doesn't break rules loudly; he walks around them. The system fails because he doesn't fight it—he simply outgrows it.</p>
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-gray-500 text-sm italic">
                The emotional climax is the narrator understanding: <br />
                <span className="text-white font-bold not-italic">"I created a successor who doesn’t need me."</span>
              </p>
            </div>

            <p className="pt-8 text-3xl font-black tracking-tight text-white leading-tight uppercase">
                What will you pretend not to notice tomorrow?
            </p>
          </div>
        </div>
      </div>

      {/* FIXED NAVIGATION - EXACT MATCH TO CHAPTER ONE */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] z-[100] px-10 py-8 flex justify-between items-center pointer-events-none">
        
        {/* PREV BUTTON */}
        <Link 
          to="/postscript" 
          className="pointer-events-auto group flex items-center gap-3 bg-[#2a2a2a] text-[#fdfdfd] p-2 pr-5 rounded-full transition-all hover:scale-105 shadow-xl border border-white/5"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-lg">←</span>
          </div>
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Prev</span>
        </Link>

        {/* NEXT BUTTON */}
        <Link 
          to="/author" 
          className="pointer-events-auto group flex items-center gap-3 bg-[#2a2a2a] text-[#fdfdfd] p-2 pl-5 rounded-full transition-all hover:scale-105 shadow-xl border border-white/5"
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

export default About