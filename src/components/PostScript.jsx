/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const PostScript = () => {
  return (
    <div className="relative h-screen w-full bg-[#08081a] flex items-center justify-center overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative w-full max-w-[1200px] h-[85vh] flex items-center justify-center">
        
        {/* The Text Card */}
        <div className="relative h-full aspect-[3/4] md:aspect-[2/3] lg:aspect-[4/5] bg-[#0c0c24] shadow-[0_0_80px_rgba(0,0,0,0.9)] border border-white/5 rounded-lg flex flex-col p-8 md:p-14 overflow-y-auto no-scrollbar">
          
          <div className="mb-10">
            <p className="text-orange-500/50 text-[10px] uppercase tracking-[0.8em] font-bold italic mb-4">— Postscript —</p>
            <h2 className="text-white text-2xl md:text-3xl font-serif font-bold leading-tight">Quiet Continuity</h2>
          </div>

          <div className="space-y-8 text-white/90 font-serif leading-relaxed text-base md:text-lg tracking-wide">
            <p>If you are reading this as analysis, <br /> <span className="text-blue-400 font-bold underline decoration-blue-900 underline-offset-4">you are safe.</span></p>
            
            <p>If you are reading it as recognition, <br /> <span className="italic text-orange-400">pause.</span></p>
            
            <div className="py-4 border-y border-white/5 opacity-50 text-sm">
              <p>Notice where you are sitting. Notice how long you stayed.</p>
            </div>

            <p className="text-xl font-bold text-white uppercase tracking-tighter">And yet, you continued.</p>
            
            <div className="bg-white/[0.02] border-l-2 border-orange-500/40 p-6 space-y-3 italic text-gray-400">
              <p>That is not a flaw. It is a habit.</p>
              <p className="text-white not-italic">Systems do not survive on force.</p>
              <p>They survive on continuation— on the quiet decision to remain one page longer.</p>
            </div>

            <p className="text-white/60">
              You may be waiting now for instruction. <br /> 
              <span className="text-orange-500 uppercase tracking-tighter font-black text-2xl leading-none">There isn’t one.</span>
            </p>
            
            <p className="pt-8 text-4xl font-black tracking-tight text-white leading-tight">Nothing will happen. <br /> That is the point.</p>
          </div>
        </div>
      </div>

      {/* PREV BUTTON (Bottom Left) */}
      <Link to="/" className="absolute bottom-10 left-10 group flex items-center gap-4 text-white z-50">
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">←</div>
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">Prev</span>
      </Link>

      {/* NEXT BUTTON (Bottom Right) */}
      <Link to="/about" className="absolute bottom-10 right-10 group flex items-center gap-4 text-white z-50">
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">Next</span>
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">→</div>
      </Link>

    </div>
  )
}

export default PostScript