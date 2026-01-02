/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const FinalChapter = () => {
  return (
    <div className="relative h-screen w-full bg-[#08081a] flex items-center justify-center overflow-hidden">
      
      {/* Background Glows - Deep, dark, and receding */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-900/5 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#08081a] z-10 pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-[1200px] h-[85vh] flex items-center justify-center z-20">
        
        {/* The Text Card - Very minimal borders to represent "unclaimed" space */}
        <div className="relative h-full aspect-[3/4] md:aspect-[2/3] lg:aspect-[4/5] bg-[#0c0c24] shadow-[0_0_100px_rgba(0,0,0,1)] border border-white/[0.02] rounded-lg flex flex-col p-8 md:p-14 overflow-y-auto no-scrollbar">
          
          {/* Chapter Header */}
          <div className="mb-12 border-b border-white/5 pb-8">
            <p className="text-orange-500/30 text-[10px] uppercase tracking-[0.8em] font-bold italic mb-4">Final Chapter</p>
            <h1 className="text-white text-3xl md:text-4xl font-serif font-black tracking-tight leading-none mb-2">
              No One Closed the Door
            </h1>
          </div>

          {/* Chapter Body */}
          <div className="space-y-10 text-white/90 font-serif leading-relaxed text-base md:text-lg tracking-wide">
            
            <p>He did not announce it. That would have turned departure into performance. <span className="text-gray-500 italic">The system feeds on performance.</span></p>

            <p className="text-xl font-light">He simply stopped arriving.</p>

            <p className="text-gray-400">
              At first, they assumed delay. Then distraction. Then inefficiency. No one had instructed him to stay. No one had instructed him to leave. That was the problem.
            </p>

            {/* The Room Block */}
            <div className="py-8 my-6 border-y border-white/5 space-y-4">
                <p>Nothing broke. Which is how they knew something had.</p>
                <p className="text-2xl font-black text-white">The room felt larger than it used to. <br /> <span className="text-blue-400 font-serif italic font-normal">Not emptier—unclaimed.</span></p>
            </div>

            <p>People spoke and waited for the familiar pause. It didn’t come. They filled it themselves, quickly, nervously. No one said his name. <span className="text-orange-500/80">Names invite questions. Questions invite responsibility.</span></p>

            <p>I watched it happen without intervening. For the first time, there was nothing to manage.</p>

            <p className="italic text-gray-400">
              He did not leave a message. He did not leave a warning. He did not leave a successor. He left no story behind him that could be repeated.
            </p>

            <p className="text-xl font-bold text-white">
                That is how you leave power intact and still render it <span className="underline decoration-blue-500 underline-offset-8">insufficient.</span>
            </p>

            <p>He had not escaped. He had simply declined.</p>

            {/* The Final Revelation */}
            <div className="pt-10 space-y-4">
              <p className="text-[10px] uppercase tracking-[0.5em] text-orange-500 font-bold">The Final Lie</p>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter">
                There is no outside.
              </h2>
              
              <div className="space-y-2 pt-6">
                <p className="text-white text-2xl md:text-3xl font-serif italic">The door was never locked.</p>
                <p className="text-blue-400 text-2xl md:text-3xl font-serif italic opacity-80">It was never even closed.</p>
              </div>
            </div>

            <div className="pt-20 flex justify-center">
                <div className="w-1 h-1 rounded-full bg-white/20 mx-1"></div>
                <div className="w-1 h-1 rounded-full bg-white/20 mx-1"></div>
                <div className="w-1 h-1 rounded-full bg-white/20 mx-1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Link to="/seven" className="absolute bottom-10 left-10 group flex items-center gap-4 text-white z-50">
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">←</div>
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">Prev</span>
      </Link>

      <Link to="/cover" className="absolute bottom-10 right-10 group flex items-center gap-4 text-white z-50">
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">Next</span>
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">→</div>
      </Link>

    </div>
  )
}

export default FinalChapter