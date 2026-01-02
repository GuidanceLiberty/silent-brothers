/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const ChapterThree = () => {
  return (
    <div className="relative h-screen w-full bg-[#08081a] flex items-center justify-center overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-[1200px] h-[85vh] flex items-center justify-center">
        
        {/* The Text Card */}
        <div className="relative h-full aspect-[3/4] md:aspect-[2/3] lg:aspect-[4/5] bg-[#0c0c24] shadow-[0_0_80px_rgba(0,0,0,0.9)] border border-white/5 rounded-lg flex flex-col p-8 md:p-14 overflow-y-auto no-scrollbar">
          
          {/* Chapter Header */}
          <div className="mb-12 border-b border-white/5 pb-8">
            <p className="text-orange-500/50 text-[10px] uppercase tracking-[0.8em] font-bold italic mb-4">Chapter III</p>
            <h1 className="text-white text-3xl md:text-4xl font-serif font-black tracking-tight leading-none mb-2">
              The Rules That Pretend Not to Exist
            </h1>
          </div>

          {/* Chapter Body */}
          <div className="space-y-10 text-white/90 font-serif leading-relaxed text-base md:text-lg tracking-wide">
            
            <p className="text-2xl font-light text-white italic">Brother,</p>

            <p>Read them before they read you. Always read them first.</p>

            <p className="text-gray-400">Everything beneath fear is decoration. Watch their mouths when they speak. Watch their eyes when they listen. The body confesses before the mind agrees.</p>

            {/* Rules Section */}
            <div className="space-y-12 py-10">
              
              <div className="group">
                <h4 className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 group-hover:text-white transition-colors">Rule One</h4>
                <p className="border-l-2 border-white/10 pl-6 italic">
                  People obey what explains their discomfort. If you name their pain, they will trust you. If you give their fear a cause, they will defend the cause more than themselves.
                </p>
              </div>

              <div className="group">
                <h4 className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 group-hover:text-white transition-colors">Rule Two</h4>
                <p className="border-l-2 border-white/10 pl-6">
                  Never fight the system directly. The system rewards resistance with exhaustion. Every system leaks through people—and <span className="text-orange-400">fear is the widest crack.</span>
                </p>
              </div>

              <div className="group">
                <h4 className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 group-hover:text-white transition-colors">Rule Three</h4>
                <p className="border-l-2 border-white/10 pl-6 italic text-gray-400">
                  Those who speak first reveal weakness. Silence forces revelation. Silence turns other people into informants against themselves.
                </p>
              </div>

              {/* Central Mantra */}
              <div className="bg-white/[0.02] border border-white/5 p-8 rounded-lg text-center space-y-4 my-12">
                <p className="text-[10px] uppercase tracking-[0.6em] text-orange-500/60 font-bold">The Pattern</p>
                <div className="text-3xl md:text-4xl font-black tracking-tighter text-white flex flex-col gap-2">
                  <span>NAME.</span>
                  <span className="opacity-60">SHARE.</span>
                  <span className="opacity-30">DIRECT.</span>
                </div>
              </div>

              <div className="group">
                <h4 className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 group-hover:text-white transition-colors">Rule Five</h4>
                <p className="border-l-2 border-white/10 pl-6">
                  Power hides best behind usefulness. Be quietly necessary. Do not be replaceable.
                </p>
              </div>

              <div className="group">
                <h4 className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 group-hover:text-white transition-colors">The Final Rule</h4>
                <p className="border-l-2 border-white/10 pl-6 italic">
                  Those who understand the rules must pretend they don’t. The moment they sense awareness, they close ranks.
                </p>
              </div>

            </div>

            <p className="text-2xl font-black text-white py-10 leading-tight border-t border-white/5">
                Power is not control. <br />
                <span className="text-orange-500 italic">Power is choice.</span>
            </p>

            <p className="pt-12 text-center text-white/20 tracking-[1em] uppercase font-bold text-[10px]">— CHAPTER III COMPLETE —</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Link to="/two" className="absolute bottom-10 left-10 group flex items-center gap-4 text-white z-50">
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">←</div>
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">Prev</span>
      </Link>

      <Link to="/four" className="absolute bottom-10 right-10 group flex items-center gap-4 text-white z-50">
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">Next</span>
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">→</div>
      </Link>

    </div>
  )
}

export default ChapterThree