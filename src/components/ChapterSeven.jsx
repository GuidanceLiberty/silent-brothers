/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const ChapterSeven = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#e8e4d9] flex items-center justify-center overflow-x-hidden py-10 md:py-20">
      
      {/* Subtle Paper Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.4] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>

      {/* FIXED NAVIGATION - Safe inward positioning for mobile */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] z-[100] px-6 md:px-10 py-8 flex justify-between items-center pointer-events-none">
        <Link 
          to="/six" 
          className="pointer-events-auto group flex items-center gap-3 bg-[#2a2a2a] text-[#fdfdfd] p-2 pr-5 rounded-full transition-all hover:scale-105 shadow-xl"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-lg">←</span>
          </div>
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Prev</span>
        </Link>

        {/* Adjust destination as needed for the next chapter */}
        <Link 
          to="/final" 
          className="pointer-events-auto group flex items-center gap-3 bg-[#2a2a2a] text-[#fdfdfd] p-2 pl-5 rounded-full transition-all hover:scale-105 shadow-xl"
        >
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Next</span>
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-lg">→</span>
          </div>
        </Link>
      </div>

      {/* Main Book Page */}
      <div className="relative w-full max-w-[850px] min-h-[90vh] bg-[#fdfdfd] text-[#1a1a1a] shadow-[0_10px_50px_rgba(0,0,0,0.15)] rounded-sm flex flex-col mx-4 overflow-hidden border border-black/5">
        
        {/* Page Inner Shadow (Book Spine Effect) */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/[0.03] to-transparent pointer-events-none"></div>

        {/* Story Content Area */}
        <div className="relative z-10 flex flex-col p-6 md:p-20 overflow-y-auto">
          
          {/* Chapter Header */}
          <header className="text-center mb-16 border-b border-black/10 pb-12">
            <h2 className="text-[10px] tracking-[0.5em] uppercase font-light text-gray-500 mb-6 italic">Silent With My Brother</h2>
            <p className="text-[11px] tracking-[0.2em] uppercase font-bold text-orange-800/60 mb-2">Chapter VII</p>
            <h1 className="text-3xl md:text-5xl font-serif italic text-black tracking-tight leading-tight">How the System Tried</h1>
          </header>

          <article className="font-serif text-[1.1rem] md:text-[1.25rem] leading-[1.9] text-justify space-y-8 text-black/80 antialiased pb-32">
            
            <p>
              <span className="text-6xl float-left mr-4 mt-2 font-bold leading-none text-black font-serif">T</span>
              hey did not come for you loudly. That would have made you visible. Visibility creates sympathy. Instead, they whispered.
            </p>

            <p>They questioned your reliability. Your consistency. Your usefulness. They framed concern as care. They framed doubt as protection. Classic moves.</p>

            <p className="italic font-bold text-black border-l-4 border-orange-800/20 pl-6 py-2">
              You didn’t respond. Non-response confuses accusation. It removes friction. It forces escalation.
            </p>

            <p>So they tightened the net. Processes multiplied. Expectations shifted. Rules were suddenly remembered. You were audited without announcement. Evaluated without criteria. Included without influence.</p>

            <p className="text-2xl md:text-3xl font-black text-black pt-6 leading-tight">
              The system tried to tire you. <br />
              <span className="italic font-light text-xl md:text-2xl">You didn’t fight back. You complied precisely. Too precisely.</span>
            </p>

            <p>You followed rules so cleanly that they exposed their own contradictions. You documented nothing unnecessary. You spoke only when required. You became impossible to fault without faulting the structure itself.</p>

            <div className="bg-black/[0.02] border-y border-black/5 p-8 my-10 text-center">
              <p className="mb-4">That was when the pressure stopped. Quietly. No apology. No resolution. Just a subtle retreat.</p>
              <p className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-orange-900">
                Systems do not admit failure. They redirect.
              </p>
            </div>

            <p>They looked for leverage. They found none. Fear no longer worked on you. Reward never did. You had become immune without becoming hostile. That terrified them.</p>

            <p className="text-xl md:text-2xl font-bold text-black tracking-tight text-center md:text-left">
              So they did what systems always do when control fails: They pretended nothing was wrong.
            </p>

            <p className="text-2xl italic text-black pt-6">
              And in that pretense, they lost you completely.
            </p>

            {/* FOOTER - Consistent with previous chapters */}
            <div className="pt-24 pb-12 text-center opacity-30">
               <div className="w-16 h-[1px] bg-black mx-auto mb-4"></div>
               <p className="text-[10px] tracking-[0.8em] font-bold uppercase">End of Chapter VII</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default ChapterSeven