/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const ChapterOne = () => {
  return (
    <div className="relative h-screen w-full bg-[#08081a] flex items-center justify-center overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-[1200px] h-[85vh] flex items-center justify-center">
        
        {/* The Text Card */}
        <div className="relative h-full aspect-[3/4] md:aspect-[2/3] lg:aspect-[4/5] bg-[#0c0c24] shadow-[0_0_80px_rgba(0,0,0,0.9)] border border-white/5 rounded-lg flex flex-col p-8 md:p-14 overflow-y-auto no-scrollbar">
          
          {/* Chapter Header */}
          <div className="mb-12 border-b border-white/5 pb-8">
            <p className="text-orange-500/50 text-[10px] uppercase tracking-[0.8em] font-bold italic mb-4">Chapter I</p>
            <h1 className="text-white text-3xl md:text-4xl font-serif font-black tracking-tight leading-none mb-2">
              What Fear Listens To
            </h1>
            <p className="text-gray-500 text-xs italic tracking-wide">A Book About Power, Fear, and the Lie of Necessity</p>
          </div>

          {/* Epigraph */}
          <div className="mb-12 pl-6 border-l border-orange-500/30 py-2">
             <p className="text-white/60 italic text-sm md:text-base leading-relaxed">
              The most effective prison is the one you never test—<br />
              not because the door is hidden,<br />
              but because you were taught to call staying “choice.”
             </p>
             <p className="text-[10px] uppercase tracking-widest text-orange-500/40 mt-4 font-bold">— Epigraph</p>
          </div>

          {/* Chapter Body */}
          <div className="space-y-8 text-white/90 font-serif leading-relaxed text-base md:text-lg tracking-wide">
            
            <p className="text-2xl font-light text-white italic">Brother,</p>

            <p>You always asked why I stay quiet when the room is loud. It isn’t because I have nothing to say. It’s because crowds speak first.</p>

            <p>Crowds don’t think. They feel, and then they call it truth. One emotion moves faster than reason ever could. <span className="text-blue-400 font-bold">Fear is the fastest.</span></p>

            <p>I learned early that people believe numbers make them safe. They gather, they chant, they repeat one another’s words until the echo sounds like certainty. But certainty is fragile. Touch the right nerve and the whole body flinches.</p>

            <div className="py-6 space-y-4">
               <p className="text-white font-bold uppercase tracking-tighter border-b border-white/10 pb-2">On Leading Crowds</p>
               <p className="text-gray-400 italic">You don’t lead crowds by arguing with them. You reflect them. You show them their own face, slightly exaggerated, and they will follow it anywhere.</p>
            </div>

            <p>Most people believe power announces itself. They expect it to shout, to dominate, to arrive with force. That belief is their first weakness.</p>

            <p className="text-xl text-orange-200/80 font-medium italic">Real power waits.</p>

            <p>It watches who speaks when they are afraid, and who goes quiet. It notices who laughs when the joke isn’t funny. It listens for the story people repeat about themselves, because that story is the cage they already live in.</p>

            <p>Brother, fear does not make people weak. <span className="text-white underline decoration-orange-500 underline-offset-8">It makes them predictable.</span></p>

            <div className="bg-white/[0.02] p-8 rounded-lg space-y-6 border border-white/5">
                <p className="text-sm tracking-widest uppercase text-orange-500 font-bold">The Three Permissions</p>
                <ul className="space-y-4 text-gray-300 italic">
                    <li>Permission to hate.</li>
                    <li>Permission to obey.</li>
                    <li>Permission to stop thinking.</li>
                </ul>
                <p className="text-white text-sm pt-4 border-t border-white/5">Give them permission and they will call you a leader. Take responsibility and they will call you a savior.</p>
            </div>

            <p>I don’t tell them what to think. I tell them what to feel about what they already think. Once emotion is set, belief follows like a shadow.</p>

            <p>Manipulation is selection. You choose which truth they see first.</p>

            <p className="text-2xl font-black text-white py-10 leading-tight">
                Silence does what words cannot. <br />
                <span className="text-blue-400">When you pull your voice away, people lean forward.</span>
            </p>

            <p className="text-gray-400">
                I speak softly, rarely, and only when the room is ready. By then, my words feel like confirmation, not instruction. People obey what feels inevitable. And inevitability is engineered by repetition.
            </p>

            <p className="pt-12 text-center text-white/20 tracking-[1em] uppercase font-bold text-xs">— To Be Continued —</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Link to="/author" className="absolute bottom-10 left-10 group flex items-center gap-4 text-white z-50">
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">←</div>
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">Prev</span>
      </Link>

      <Link to="/two" className="absolute bottom-10 right-10 group flex items-center gap-4 text-white z-50">
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">Next</span>
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">→</div>
      </Link>

    </div>
  )
}

export default ChapterOne