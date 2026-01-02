/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const ChapterFive = () => {
  return (
    <div className="relative h-screen w-full bg-[#08081a] flex items-center justify-center overflow-hidden">
      
      {/* Background Glows - Subdued and colder */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-900/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-[1200px] h-[85vh] flex items-center justify-center">
        
        {/* The Text Card */}
        <div className="relative h-full aspect-[3/4] md:aspect-[2/3] lg:aspect-[4/5] bg-[#0c0c24] shadow-[0_0_80px_rgba(0,0,0,1)] border border-white/5 rounded-lg flex flex-col p-8 md:p-14 overflow-y-auto no-scrollbar">
          
          {/* Chapter Header */}
          <div className="mb-12 border-b border-white/5 pb-8">
            <p className="text-orange-500/40 text-[10px] uppercase tracking-[0.8em] font-bold italic mb-4">Chapter V</p>
            <h1 className="text-white text-3xl md:text-4xl font-serif font-black tracking-tight leading-none mb-2">
              What You Refused to Become
            </h1>
          </div>

          {/* Chapter Body */}
          <div className="space-y-10 text-white/90 font-serif leading-relaxed text-base md:text-lg tracking-wide">
            
            <p className="text-2xl font-light text-white italic">Brother,</p>

            <p>This is where you surprised me. Power always asks for proof. Not of competence—<span className="text-orange-500 font-bold">of loyalty.</span></p>

            <p className="text-gray-400">
              It wants you to cross a line publicly so retreat becomes impossible. It wants witnesses. It wants bloodless sacrifices that still stain.
            </p>

            <p>I expected you to hesitate. You didn’t. You refused. Not loudly. Not dramatically. You simply did not perform the role they prepared for you.</p>

            <div className="py-6 border-y border-white/5 my-8">
               <p className="text-sm tracking-widest uppercase text-gray-500 font-bold mb-4 italic">The Recruitment</p>
               <p className="text-white">They offered you legitimacy wrapped in obligation. They offered you authority with conditions disguised as trust. <span className="text-blue-400 italic">You saw it instantly.</span></p>
            </div>

            <p>They wanted to see if you would harden. If you would simplify people into tools. If you would trade understanding for efficiency. You understood too much to do that.</p>

            <p className="text-2xl font-black text-white leading-tight">
              Moral clarity is disruptive. <br />
              <span className="text-gray-500 italic text-xl">Not because it is righteous, but because it does not negotiate with fear.</span>
            </p>

            {/* The Refusal Block */}
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-lg space-y-4">
                <p>You didn’t expose the system. You didn’t condemn it. You didn’t try to fix it.</p>
                <p className="text-orange-400 font-bold text-xl uppercase tracking-tighter">You simply withdrew your permission.</p>
                <p className="text-xs text-gray-500 pt-2 tracking-widest">THAT IS UNFORGIVABLE.</p>
            </div>

            <p>They waited for you to become cruel. Cruelty would have justified them. You stayed precise instead. Precision without malice looks like judgment.</p>

            <p className="text-gray-400">
              They mistook isolation for punishment. They didn’t realize <span className="text-white">you were never seeking inclusion.</span>
            </p>

            <p className="text-xl font-bold text-white pt-6 border-t border-white/5 italic">
                You refused to become the thing they needed you to be. And in doing so, you became something they couldn’t classify.
            </p>

            <p className="text-2xl font-black text-orange-500 uppercase tracking-tighter">
                That’s when they started watching you.
            </p>

            <p className="pt-12 text-center text-white/20 tracking-[1em] uppercase font-bold text-[10px]">— THE FINAL CHAPTER —</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Link to="/four" className="absolute bottom-10 left-10 group flex items-center gap-4 text-white z-50">
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">←</div>
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">Prev</span>
      </Link>

      <Link to="/six" className="absolute bottom-10 right-10 group flex items-center gap-4 text-white z-50">
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">Next</span>
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">→</div>
      </Link>

    </div>
  )
}

export default ChapterFive