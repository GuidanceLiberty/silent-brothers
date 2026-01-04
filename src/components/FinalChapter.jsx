/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const FinalChapter = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#e8e4d9] flex items-center justify-center overflow-x-hidden py-10 md:py-20">
      
      {/* Subtle Paper Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.4] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>

      {/* FIXED NAVIGATION - Safe inward positioning for mobile */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] z-[100] px-6 md:px-10 py-8 flex justify-between items-center pointer-events-none">
        <Link 
          to="/seven" 
          className="pointer-events-auto group flex items-center gap-3 bg-[#2a2a2a] text-[#fdfdfd] p-2 pr-5 rounded-full transition-all hover:scale-105 shadow-xl"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-lg">←</span>
          </div>
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Prev</span>
        </Link>

        {/* Navigation back to the Cover Page */}
        <Link 
          to="/cover" 
          className="pointer-events-auto group flex items-center gap-3 bg-orange-900 text-[#fdfdfd] p-2 pl-5 rounded-full transition-all hover:scale-105 shadow-xl"
        >
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Cover</span>
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-lg">○</span>
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
            <p className="text-[11px] tracking-[0.2em] uppercase font-bold text-orange-800/60 mb-2">Final Chapter</p>
            <h1 className="text-3xl md:text-5xl font-serif italic text-black tracking-tight leading-tight">No One Closed the Door</h1>
          </header>

          <article className="font-serif text-[1.1rem] md:text-[1.25rem] leading-[1.9] text-justify space-y-8 text-black/80 antialiased pb-32">
            
            <p>
              <span className="text-6xl float-left mr-4 mt-2 font-bold leading-none text-black font-serif">H</span>
              e did not announce it. That would have turned departure into performance. The system feeds on performance. He simply stopped arriving.
            </p>

            <p>At first, they assumed delay. Then distraction. Then inefficiency. They checked schedules. They checked messages. They checked one another.</p>

            <p className="italic font-bold text-black border-l-4 border-orange-800/20 pl-6 py-2">
              No one had instructed him to stay. No one had instructed him to leave. That was the problem.
            </p>

            <p>Meetings continued. Decisions were made. Processes advanced—slower now, but intact. Nothing broke. Which is how they knew something had.</p>

            <p className="text-2xl md:text-3xl font-black text-black pt-6 leading-tight">
              The room felt larger than it used to. <br />
              <span className="italic font-light text-xl md:text-2xl">Not emptier—unclaimed.</span>
            </p>

            <p>People spoke and waited for the familiar pause. It didn’t come. They filled it themselves, quickly, nervously. Some felt relief. Others felt exposed. No one said his name. Names invite questions. Questions invite responsibility.</p>

            <p>I watched it happen without intervening. For the first time, there was nothing to manage. He did not leave a message. He did not leave a warning. He did not leave a successor.</p>

            <div className="bg-black/[0.02] border-y border-black/5 p-8 my-10 text-center">
              <p className="mb-4">He left no story behind him that could be repeated.</p>
              <p className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-orange-900">
                That is how you leave power intact and still render it insufficient.
              </p>
            </div>

            <p>He had not escaped. He had simply declined. And in that refusal, he exposed the final lie: That there is no outside.</p>

            <p className="text-xl md:text-2xl font-bold text-black tracking-tight text-center">
              The door was never locked.
            </p>

            <p className="text-2xl italic text-black pt-2 text-center">
              It was never even closed.
            </p>

            {/* FINAL FOOTER */}
            <div className="pt-24 pb-12 text-center opacity-30">
               <div className="w-16 h-[1px] bg-black mx-auto mb-4"></div>
               <p className="text-[10px] tracking-[0.8em] font-bold uppercase">The End</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default FinalChapter