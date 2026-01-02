/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const ChapterTwo = () => {
  return (
    <div className="relative h-screen w-full bg-[#08081a] flex items-center justify-center overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-[1200px] h-[85vh] flex items-center justify-center">
        
        {/* The Text Card */}
        <div className="relative h-full aspect-[3/4] md:aspect-[2/3] lg:aspect-[4/5] bg-[#0c0c24] shadow-[0_0_80px_rgba(0,0,0,0.9)] border border-white/5 rounded-lg flex flex-col p-8 md:p-14 overflow-y-auto no-scrollbar">
          
          {/* Chapter Header */}
          <div className="mb-12 border-b border-white/5 pb-8">
            <p className="text-orange-500/50 text-[10px] uppercase tracking-[0.8em] font-bold italic mb-4">Chapter II</p>
            <h1 className="text-white text-3xl md:text-4xl font-serif font-black tracking-tight leading-none mb-2">
              The Shape Fear Takes
            </h1>
          </div>

          {/* Chapter Body */}
          <div className="space-y-10 text-white/90 font-serif leading-relaxed text-base md:text-lg tracking-wide max-w-[90%] mx-auto">
            
            <p className="text-2xl font-light text-white italic">Brother,</p>

            <p className="italic text-gray-400">Do you hear them when they sleep?</p>

            <p>I do. Not their voices—their breathing. Crowds breathe in patterns. Panic changes the rhythm. Hope speeds it up. Anger makes it shallow. Once you learn the sound, you know when they’re ready.</p>

            <div className="bg-white/[0.01] border-y border-white/5 py-8 my-4">
                <p className="text-white font-bold text-center uppercase tracking-[0.3em]">Fear is a narrowing.</p>
                <p className="text-gray-500 text-sm text-center mt-2 italic">A tightening of choices until only one path feels safe.</p>
            </div>

            <p>I don’t frighten people. <span className="text-orange-400/80">I remove their alternatives.</span> When enough alternatives disappear, obedience feels like relief.</p>

            <p>Thinking requires isolation, and isolation feels like death to them. So they cling to whatever emotion is already moving, even if it’s carrying them somewhere ugly. Especially then.</p>

            <p className="text-xl font-medium text-white">I don’t argue with crowds. I infect them.</p>

            <p>Emotion spreads faster than logic because it doesn’t ask permission. One fearful voice becomes two, then ten, then a thousand, and suddenly no one remembers where it began. They just feel surrounded.</p>

            {/* Insight Block */}
            <div className="border-l-2 border-blue-500/40 pl-6 py-2 space-y-4">
                <p className="text-gray-400">They say power corrupts. Power doesn’t corrupt—it reveals.</p>
                <p className="text-white italic">Give someone permission to be afraid together, and they will surrender their conscience just to belong.</p>
            </div>

            <p>I place pressure on the quiet ones first. The thinkers. The observers. When they fall silent, the rest follow without knowing why. Silence spreads faster than dissent.</p>

            <p className="text-2xl font-black text-white py-6 leading-tight border-b border-white/5">
                Fear doesn’t demand action. <br />
                <span className="text-orange-500 underline decoration-orange-900 underline-offset-8">It demands alignment.</span>
            </p>

            <p>I stay distant on purpose. Distance creates mythology. If they can’t touch you, they will imagine you. And imagination is always crueler than reality.</p>

            <p className="text-gray-400 text-sm">
                Ambiguity creates obedience. When they ask what I want, I delay. Delay makes desire rot into anxiety. Anxious people offer more than they were asked for.
            </p>

            <p>They are afraid of being seen without the crowd around them. Afraid that alone, they are insignificant, wrong, replaceable. So I give them a role. A chant. A symbol.</p>

            <p className="pt-8 text-3xl font-black tracking-tight text-white leading-tight">
                Crowds do not want truth. <br /> 
                <span className="text-blue-400">They want permission to stop searching for it.</span>
            </p>

            <p className="pt-12 text-center text-white/20 tracking-[1em] uppercase font-bold text-[10px]">— END OF CHAPTER II —</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Link to="/one" className="absolute bottom-10 left-10 group flex items-center gap-4 text-white z-50">
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">←</div>
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">Prev</span>
      </Link>

      <Link to="/three" className="absolute bottom-10 right-10 group flex items-center gap-4 text-white z-50">
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">Next</span>
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">→</div>
      </Link>

    </div>
  )
}

export default ChapterTwo