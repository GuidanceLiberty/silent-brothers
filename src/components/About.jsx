/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="relative h-screen w-full bg-[#08081a] flex items-center justify-center overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative w-full max-w-[1200px] h-[85vh] flex items-center justify-center z-20 px-4">
        
        {/* The Text Card */}
        <div className="relative h-full aspect-[3/4] md:aspect-[2/3] lg:aspect-[4/5] bg-[#0c0c24] shadow-[0_0_80px_rgba(0,0,0,0.9)] border border-white/5 rounded-sm flex flex-col p-8 md:p-14 overflow-y-auto no-scrollbar">
          
          {/* Subtle Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

          <div className="relative z-10 mb-8 text-center">
            <p className="text-orange-500/50 text-[10px] uppercase tracking-[0.8em] font-bold italic mb-4">— The Core —</p>
            <h2 className="text-white text-2xl md:text-4xl font-serif font-bold leading-tight uppercase tracking-tighter">
              Awareness Outgrows Control
            </h2>
          </div>

          <div className="relative z-10 space-y-10 text-white/90 font-serif leading-relaxed text-sm md:text-base tracking-wide pb-10">
            
            <div className="space-y-4 border-l-2 border-orange-500/20 pl-6 italic text-gray-400">
              <p className="text-white not-italic font-bold">At its core, this book is not a how-to manual. It is a warning disguised as a confession.</p>
              <p>
                <span className="text-white font-bold italic">Silent With My Brother</span> is a psychological power fable about how systems, crowds, and fear manufacture obedience—and how awareness quietly dismantles it. The book explores manipulation, not to glorify it, but to expose how it operates beneath language, morality, and structure.
              </p>
            </div>

            <p className="text-orange-500 font-bold uppercase tracking-widest text-[10px] text-center">Here’s what it’s really about:</p>

            {/* 1 & 2 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest underline underline-offset-8 decoration-blue-900">1. Power Is Emotional Before Logic</h4>
                <p className="text-gray-400 text-xs leading-relaxed">The book argues that crowds do not follow truth, rules, or reason—they follow emotion. Fear, relief, shame, hope. Whoever understands this doesn’t need authority; authority bends toward them.</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest underline underline-offset-8 decoration-blue-900">2. The Brother Is Not Taught—He Sees</h4>
                <p className="text-gray-400 text-xs leading-relaxed">The brother is not trained to manipulate. He learns to read: <span className="text-white italic">pauses instead of words, patterns instead of promises, fear instead of intention.</span> He becomes dangerous because he stops believing the system is natural.</p>
              </div>
            </div>

            {/* 3 & 4 */}
            <div className="grid md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-3">
                <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest underline underline-offset-8 decoration-blue-900">3. The True Horror Is Moral Clarity</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Villains want control. The brother wants freedom—and understands that freedom exposes the system as fragile. He doesn’t break rules loudly; he walks around them. The horror is quiet because nothing stops him.</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest underline underline-offset-8 decoration-blue-900">4. The System Only Destroys Loud Threats</h4>
                <p className="text-gray-400 text-xs leading-relaxed">When the system uses its usual tools—isolation, mislabeling, social suffocation—the brother doesn’t resist or explain. So the system fails—silently.</p>
              </div>
            </div>

            {/* 5 & 6 */}
            <div className="space-y-6 bg-white/[0.02] p-6 border border-white/5">
              <div className="space-y-2">
                <h4 className="text-orange-400 font-bold uppercase text-[10px] tracking-widest">5. The Narrator’s Realization</h4>
                <p className="text-white italic">“I didn’t create a student. I created a successor who doesn’t need me.”</p>
                <p className="text-gray-500 text-xs italic">That is the deepest fear of power: being made unnecessary.</p>
              </div>
              
              <div className="pt-4 border-t border-white/5 space-y-2">
                <h4 className="text-orange-400 font-bold uppercase text-[10px] tracking-widest">6. The Reader Is the Final Character</h4>
                <p className="text-gray-400 text-sm">The postscript turns the mirror outward. The book never tells the reader what to do. It asks: <span className="text-white font-bold">“If you can see this now… what will you pretend not to notice tomorrow?”</span></p>
              </div>
            </div>

            {/* Final Sentence */}
            <div className="pt-6 text-center">
              <p className="text-[10px] uppercase tracking-[0.5em] text-orange-500/60 font-bold mb-4">In One Sentence</p>
              <p className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase leading-tight">
                Awareness outgrows control—and systems fear people who no longer need permission.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* FIXED NAVIGATION */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] z-[100] px-10 py-8 flex justify-between items-center pointer-events-none">
        <Link 
          to="/postscript" 
          className="pointer-events-auto group flex items-center gap-3 bg-[#2a2a2a] text-[#fdfdfd] p-2 pr-5 rounded-full transition-all hover:scale-105 shadow-xl border border-white/5"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-lg">←</span>
          </div>
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Prev</span>
        </Link>

        <Link 
          to="/author" 
          className="pointer-events-auto group flex items-center gap-3 bg-[#2a2a2a] text-[#fdfdfd] p-2 pl-5 rounded-full transition-all hover:scale-105 shadow-xl border border-white/5"
        >
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Next</span>
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-lg">→</span>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default About