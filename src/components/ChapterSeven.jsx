/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const ChapterSeven = () => {
  return (
    <div className="relative h-screen w-full bg-[#08081a] flex items-center justify-center overflow-hidden">
      
      {/* Background Glows - Sharp and localized */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-red-900/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-[1200px] h-[85vh] flex items-center justify-center">
        
        {/* The Text Card */}
        <div className="relative h-full aspect-[3/4] md:aspect-[2/3] lg:aspect-[4/5] bg-[#0c0c24] shadow-[0_0_80px_rgba(0,0,0,0.9)] border border-white/5 rounded-lg flex flex-col p-8 md:p-14 overflow-y-auto no-scrollbar">
          
          {/* Chapter Header */}
          <div className="mb-12 border-b border-white/5 pb-8">
            <p className="text-orange-500/40 text-[10px] uppercase tracking-[0.8em] font-bold italic mb-4">Chapter VII</p>
            <h1 className="text-white text-3xl md:text-4xl font-serif font-black tracking-tight leading-none mb-2">
              How the System Tried
            </h1>
          </div>

          {/* Chapter Body */}
          <div className="space-y-10 text-white/90 font-serif leading-relaxed text-base md:text-lg tracking-wide">
            
            <p>They did not come for you loudly. That would have made you visible. Visibility creates sympathy. <span className="text-orange-500/80 italic font-medium">Instead, they whispered.</span></p>

            <p className="text-gray-400">
              They questioned your reliability. Your consistency. Your usefulness. They framed concern as care. They framed doubt as protection. <span className="text-white font-bold">Classic moves.</span>
            </p>

            <div className="bg-white/[0.02] border-l-2 border-blue-500/40 p-6 italic text-gray-400">
              You didn’t respond. Non-response confuses accusation. It removes friction. It forces escalation.
            </div>

            <p>So they tightened the net. Processes multiplied. Expectations shifted. Rules were suddenly remembered. You were audited without announcement. Evaluated without criteria.</p>

            <p className="text-xl font-bold text-white">The system tried to tire you.</p>

            <p>You didn’t fight back. You complied precisely. <span className="text-blue-400">Too precisely.</span> You followed rules so cleanly that they exposed their own contradictions.</p>

            {/* Compliance Block */}
            <div className="py-6 space-y-2 border-y border-white/5">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-500 font-bold">The Protocol of Absence</p>
                <p>You documented nothing unnecessary. You spoke only when required. You became impossible to fault without faulting the structure itself.</p>
            </div>

            <p>That was when the pressure stopped. Quietly. No apology. No resolution. Just a subtle retreat. <span className="text-orange-500 underline decoration-orange-900 underline-offset-8">Systems do not admit failure. They redirect.</span></p>

            <p>They looked for leverage. They found none. Fear no longer worked on you. Reward never did. You had become immune without becoming hostile.</p>

            <div className="pt-10 text-center">
              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
                They did what systems always do when control fails: <br />
                <span className="text-blue-400 italic">They pretended nothing was wrong.</span>
              </h2>
              <p className="text-white mt-6 text-xl font-serif">And in that pretense, they lost you completely.</p>
            </div>

            <p className="pt-16 text-center text-white/10 tracking-[1.5em] uppercase font-bold text-[10px]">— SYSTEM ERROR: NULL —</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Link to="/six" className="absolute bottom-10 left-10 group flex items-center gap-4 text-white z-50">
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">←</div>
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">Prev</span>
      </Link>

      <Link to="/final" className="absolute bottom-10 right-10 group flex items-center gap-4 text-white z-50">
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">Next</span>
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">→</div>
      </Link>

    </div>
  )
}

export default ChapterSeven