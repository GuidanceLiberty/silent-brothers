/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const ChapterSix = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#e8e4d9] flex items-center justify-center overflow-x-hidden py-10 md:py-20">
      
      {/* Subtle Paper Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.4] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>

      {/* FIXED NAVIGATION - Safe inward positioning for mobile */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] z-[100] px-6 md:px-10 py-8 flex justify-between items-center pointer-events-none">
        <Link 
          to="/five" 
          className="pointer-events-auto group flex items-center gap-3 bg-[#2a2a2a] text-[#fdfdfd] p-2 pr-5 rounded-full transition-all hover:scale-105 shadow-xl"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-lg">←</span>
          </div>
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Prev</span>
        </Link>

        <Link 
          to="/seven" 
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
            <p className="text-[11px] tracking-[0.2em] uppercase font-bold text-orange-800/60 mb-2">Chapter VI</p>
            <h1 className="text-3xl md:text-5xl font-serif italic text-black tracking-tight leading-tight">The Space Where I Used to Stand</h1>
          </header>

          <article className="font-serif text-[1.1rem] md:text-[1.25rem] leading-[1.9] text-justify space-y-8 text-black/80 antialiased pb-32">
            
            <p>
              <span className="text-6xl float-left mr-4 mt-2 font-bold leading-none text-black font-serif">I</span>
              didn’t notice it at first. Power rarely announces transition. It migrates.
            </p>

            <p>I was still being consulted. Still deferred to. Still named. But something had shifted. People stopped looking at me for confirmation. They looked past me—toward absence. Toward you.</p>

            <p>Not for answers. For orientation. You never offered guidance. That was the mistake they made. They assumed restraint meant uncertainty. But restraint is confidence refined.</p>

            <p>You didn’t shape outcomes. You shaped conditions. Where I once controlled momentum, you controlled timing. Where I once used fear to accelerate decisions, you slowed everything down.</p>

            <p className="italic font-bold text-black border-l-4 border-orange-800/20 pl-6 py-2">
              Delay became your weapon. In delay, people reveal priority. In urgency, they lie. You gave them time and they confessed everything.
            </p>

            <p>I realized then what I had done. I taught you how to read systems. I taught you how to see fear. I did not teach you how to stop. Because I never learned. You did.</p>

            <p className="text-2xl md:text-3xl font-black text-black pt-6 leading-tight">
              You understood something I never accepted: <br />
              <span className="italic font-light text-xl md:text-2xl">Power that must be used is already decaying.</span>
            </p>

            <p>So you let mine exhaust itself. I watched authority lean forward and find no resistance—only space. That space used to belong to me. I mistook silence for loyalty. I mistook patience for waiting.</p>

            <p className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-orange-900 text-center py-6">
              You weren’t waiting. <br /> You were outlasting.
            </p>

            <p>That is when I understood I had not raised a successor. I had created a replacement.</p>

            <div className="bg-black/[0.02] border-y border-black/5 p-8 my-10">
              <p className="text-xl md:text-2xl italic text-black leading-relaxed">
                Not for my position— <br />
                <span className="not-italic font-bold">For the idea that power was necessary at all.</span>
              </p>
            </div>

            {/* FOOTER - Perfectly consistent with Chapter IV & V */}
            <div className="pt-24 pb-12 text-center opacity-30">
               <div className="w-16 h-[1px] bg-black mx-auto mb-4"></div>
               <p className="text-[10px] tracking-[0.8em] font-bold uppercase">End of Chapter VI</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default ChapterSix