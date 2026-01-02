/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const ChapterSix = () => {
  return (
    <div className="relative h-screen w-full bg-[#08081a] flex items-center justify-center overflow-hidden">
      
      {/* Background Glows - Deep Indigo and very subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-indigo-950/20 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-900/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-[1200px] h-[85vh] flex items-center justify-center">
        
        {/* The Text Card */}
        <div className="relative h-full aspect-[3/4] md:aspect-[2/3] lg:aspect-[4/5] bg-[#0c0c24] shadow-[0_0_100px_rgba(0,0,0,1)] border border-white/[0.03] rounded-lg flex flex-col p-8 md:p-14 overflow-y-auto no-scrollbar">
          
          {/* Chapter Header */}
          <div className="mb-12 border-b border-white/5 pb-8">
            <p className="text-orange-500/40 text-[10px] uppercase tracking-[0.8em] font-bold italic mb-4">Chapter VI</p>
            <h1 className="text-white text-3xl md:text-4xl font-serif font-black tracking-tight leading-none mb-2">
              The Space Where I Used to Stand
            </h1>
          </div>

          {/* Chapter Body */}
          <div className="space-y-10 text-white/90 font-serif leading-relaxed text-base md:text-lg tracking-wide">
            
            <p>I didn’t notice it at first. Power rarely announces transition. <span className="text-blue-400 italic">It migrates.</span></p>

            <p className="text-gray-400">
              I was still being consulted. Still deferred to. Still named. But something had shifted. 
              People stopped looking at me for confirmation. They looked past me— <span className="text-white">toward absence. Toward you.</span>
            </p>

            <div className="py-8 space-y-4">
               <p className="text-white font-bold uppercase tracking-tighter border-b border-white/10 pb-2">The Refined Confidence</p>
               <p className="italic text-gray-500">They assumed restraint meant uncertainty. But restraint is confidence refined. You didn’t shape outcomes. You shaped conditions.</p>
            </div>

            <p>In delay, people reveal priority. In urgency, they lie. You gave them time and they confessed everything.</p>

            <p className="text-2xl font-light text-white italic border-l-2 border-orange-500/40 pl-6">
              I realized then what I had done. I taught you how to read systems. I taught you how to see fear. I did not teach you how to stop.
            </p>

            {/* Pivot Block */}
            <div className="bg-white/[0.01] border border-white/5 p-8 rounded-lg space-y-6">
                <p className="text-white text-xl">Power that must be used is already decaying.</p>
                <p className="text-gray-400 italic">So you let mine exhaust itself. I watched authority lean forward and find no resistance—only space. That space used to belong to me.</p>
            </div>

            <p>I mistook silence for loyalty. I mistook patience for waiting. You weren’t waiting. <span className="text-orange-500 font-bold">You were outlasting.</span></p>

            <div className="pt-10 space-y-8">
              <h2 className="text-2xl md:text-4xl font-black text-white leading-tight tracking-tighter">
                I had created a replacement. <br />
                <span className="text-blue-400">Not for my position—</span>
              </h2>
              
              <p className="text-3xl md:text-5xl font-serif italic text-white/20 hover:text-white/100 transition-colors duration-1000 cursor-default">
                For the idea that power was necessary at all.
              </p>
            </div>

            <p className="pt-16 text-center text-white/10 tracking-[1.5em] uppercase font-bold text-[10px]">— THE END OF LESSONS —</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Link to="/five" className="absolute bottom-10 left-10 group flex items-center gap-4 text-white z-50">
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">←</div>
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">Prev</span>
      </Link>

      <Link to="/seven" className="absolute bottom-10 right-10 group flex items-center gap-4 text-white z-50">
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">Next</span>
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">→</div>
      </Link>

    </div>
  )
}

export default ChapterSix