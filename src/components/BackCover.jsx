/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const BackCover = () => {
  return (
    <div className="relative h-screen w-full bg-[#08081a] flex items-center justify-center overflow-hidden">
      
      {/* Background Glows - Subdued, focus on the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[#08081a]/40 z-10 pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-[1200px] h-[85vh] flex items-center justify-center z-20">
        
        {/* The Back Cover Card */}
        <div className="relative h-full aspect-[3/4] md:aspect-[2/3] lg:aspect-[4/5] bg-[#0c0c24] shadow-[0_0_100px_rgba(0,0,0,1)] border border-white/10 rounded-lg flex flex-col p-10 md:p-16 overflow-y-auto no-scrollbar">
          
          {/* Tagline */}
          <div className="mb-12 text-center">
            <p className="text-white text-lg md:text-xl font-serif italic leading-relaxed">
              "Power does not announce itself. <br />
              It repeats itself—until someone stops believing the repetition."
            </p>
          </div>

          {/* Synopsis Body */}
          <div className="space-y-6 text-white/80 font-serif leading-relaxed text-sm md:text-base tracking-wide text-center px-4">
            
            <p className="text-orange-500/80 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Back-Cover Synopsis</p>
            
            <p>
              <span className="text-white font-bold">Silent With My Brother</span> is a psychological power fable about fear, crowds, and the quiet mechanics that govern obedience. Told through the voice of a narrator who understands how systems manipulate emotion, the book follows the emergence of a brother who does something far more dangerous than rebel: <span className="text-blue-400 italic font-bold">he begins to see.</span>
            </p>

            <p>
              As the brother learns to read people the way systems read crowds—through fear, habit, and silence—he outgrows instruction. What begins as guidance becomes a threat. The narrator realizes too late that he has not created a follower, but a successor who no longer needs permission, approval, or power itself.
            </p>

            <p>
              Part psychological horror, part modern power manifesto, this is not a guide to manipulation, but an exposure of it. It asks a single dangerous question of the reader:
            </p>

            {/* The Big Question */}
            <div className="py-8 border-y border-white/5 my-6">
                <p className="text-xl md:text-2xl text-white font-black tracking-tight leading-tight italic">
                    What happens when you can see the system clearly—and choose not to belong to it?
                </p>
            </div>

            <div className="space-y-2 pt-4">
                <p className="text-white font-bold uppercase tracking-widest text-xs">Once you notice, silence becomes a strategy.</p>
                <p className="text-orange-500 font-black uppercase tracking-tighter text-2xl">And awareness becomes irreversible.</p>
            </div>
          </div>

          {/* Barcode Placeholder for Aesthetic */}
          <div className="mt-auto pt-10 flex flex-col items-center opacity-30">
            <div className="w-32 h-10 flex gap-1">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className={`bg-white h-full ${i % 3 === 0 ? 'w-[1px]' : 'w-[2px]'}`}></div>
                ))}
            </div>
            <p className="text-[8px] text-white tracking-[0.8em] mt-2">0 9780123 456789</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Link to="/final" className="absolute bottom-10 left-10 group flex items-center gap-4 text-white z-50">
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">←</div>
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">Prev</span>
      </Link>

      <Link to="/copyright" className="absolute bottom-10 right-10 group flex items-center gap-4 text-white z-50">
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">CopyRight</span>
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">→</div>
      </Link>

    </div>
  )
}

export default BackCover