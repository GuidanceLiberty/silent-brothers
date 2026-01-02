/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const ChapterFour = () => {
  return (
    <div className="relative h-screen w-full bg-[#08081a] flex items-center justify-center overflow-hidden">
      
      {/* Background Glows - Shifted to cooler tones for this chapter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-[1200px] h-[85vh] flex items-center justify-center">
        
        {/* The Text Card */}
        <div className="relative h-full aspect-[3/4] md:aspect-[2/3] lg:aspect-[4/5] bg-[#0c0c24] shadow-[0_0_80px_rgba(0,0,0,0.9)] border border-white/5 rounded-lg flex flex-col p-8 md:p-14 overflow-y-auto no-scrollbar">
          
          {/* Chapter Header */}
          <div className="mb-12 border-b border-white/5 pb-8">
            <p className="text-orange-500/40 text-[10px] uppercase tracking-[0.8em] font-bold italic mb-4">Chapter IV</p>
            <h1 className="text-white text-3xl md:text-4xl font-serif font-black tracking-tight leading-none mb-2">
              When You Started Watching Back
            </h1>
          </div>

          {/* Chapter Body */}
          <div className="space-y-10 text-white/90 font-serif leading-relaxed text-base md:text-lg tracking-wide">
            
            <p className="text-2xl font-light text-white italic">Brother,</p>

            <p>I knew the moment you understood. It wasn’t when you disagreed. Disagreement is loud. Understanding is quiet.</p>

            <p className="text-gray-400">
              You stopped asking questions. You stopped nodding. You stopped reacting at the right moments. That’s how I knew. 
              <span className="text-white"> You began to watch me the way I watch them.</span>
            </p>

            <div className="py-6 space-y-4">
               <p className="text-blue-400 font-bold uppercase tracking-tighter border-b border-white/10 pb-2">The Signs of Danger</p>
               <p className="italic text-gray-400">You noticed the pauses. The timing. The way I let others speak themselves into corners. You noticed how silence always arrived before obedience. And you didn’t interrupt it.</p>
            </div>

            <p>People think power is something you take. You realized it is something you <span className="text-orange-500 font-bold">withhold.</span></p>

            <p>You learned that rules depend on participation. And participation depends on belief. <span className="underline decoration-blue-500 underline-offset-8">You stopped believing.</span> That is when systems lose their grip.</p>

            {/* Inversion Block */}
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-lg space-y-6">
                <p className="text-sm tracking-widest uppercase text-blue-400 font-bold">The Shift</p>
                <p className="italic">You learned to read fear in reverse. Not what they feared losing—but what they feared never becoming.</p>
                <p className="text-white text-sm pt-4 border-t border-white/5">Confusion is more powerful than fear. Fear seeks safety. Confusion seeks authority. You never offered authority. You offered space.</p>
            </div>

            <p className="text-xl text-white font-medium">You became inconsistent on purpose. Not chaotic—selective.</p>

            <p className="text-gray-400">
              Predictable to no one. Legible to no metric. That is how you vanished. While they argued about who you were, you learned who they needed you to be—and when.
            </p>

            {/* The Climax of the Chapter */}
            <div className="py-10 text-center">
              <p className="text-[10px] uppercase tracking-[0.6em] text-orange-500/60 font-bold mb-4">The Final Realization</p>
              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
                The most dangerous person is not the one who controls fear—but the one who <span className="text-orange-500">no longer reacts to it.</span>
              </h2>
            </div>

            <p>Fear stopped working on you. That is when I stopped teaching. Because now, brother, you don’t need rules. You see patterns.</p>

            <p className="text-blue-400 italic">
              The only thing more dangerous than a manipulator is someone who understands manipulation and chooses not to use it until it matters.
            </p>

            <p className="text-xl font-bold text-white pt-6 border-t border-white/5">
                That’s how I know you’re ready. Not because you agree with me. But because you don’t need to.
            </p>

            <p className="pt-12 text-center text-white/20 tracking-[1em] uppercase font-bold text-[10px]">— END OF NARRATIVE —</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Link to="/three" className="absolute bottom-10 left-10 group flex items-center gap-4 text-white z-50">
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">←</div>
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">Prev</span>
      </Link>

      <Link to="/five" className="absolute bottom-10 right-10 group flex items-center gap-4 text-white z-50">
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">Next</span>
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">→</div>
      </Link>

    </div>
  )
}

export default ChapterFour