/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const ChapterTwo = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#e8e4d9] flex items-center justify-center overflow-x-hidden py-10 md:py-20">
      
      {/* Subtle Paper Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.4] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>

      {/* FIXED NAVIGATION - Moved inward for mobile safety */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] z-[100] px-10 py-8 flex justify-between items-center pointer-events-none">
        {/* PREV BUTTON - URL: /one */}
        <Link 
          to="/one" 
          className="pointer-events-auto group flex items-center gap-3 bg-[#2a2a2a] text-[#fdfdfd] p-2 pr-5 rounded-full transition-all hover:scale-105 shadow-xl"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-lg">←</span>
          </div>
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Prev</span>
        </Link>

        {/* NEXT BUTTON - URL: /three */}
        <Link 
          to="/three" 
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
        <div className="relative z-10 flex flex-col p-8 md:p-20 overflow-y-auto">
          
          {/* Chapter Header */}
          <header className="text-center mb-16 border-b border-black/10 pb-12">
            <h2 className="text-[10px] tracking-[0.5em] uppercase font-light text-gray-500 mb-6 italic">Silent With My Brother</h2>
            <p className="text-[11px] tracking-[0.2em] uppercase font-bold text-orange-800/60 mb-2">Chapter II</p>
            <h1 className="text-3xl md:text-5xl font-serif italic text-black tracking-tight leading-tight">The Shape Fear Takes</h1>
          </header>

          {/* COMPLETE STORY TEXT - UNABRIDGED */}
          <article className="font-serif text-[1.15rem] md:text-[1.25rem] leading-[1.9] text-justify space-y-8 text-black/80 antialiased pb-32">
            
            <p className="text-2xl font-light text-black italic">Brother,</p>

            <p>do you hear them when they sleep?</p>
            
            <p>I do.</p>
            
            <p>Not their voices—their breathing. Crowds breathe in patterns. Panic changes the rhythm. Hope speeds it up. Anger makes it shallow. Once you learn the sound, you know when they’re ready.</p>

            <p>People think fear is loud. It isn’t.</p>

            <p>
              <span className="text-6xl float-left mr-4 mt-2 font-bold leading-none text-black font-serif">F</span>
              ear is a narrowing. A tightening of choices until only one path feels safe. That path is never freedom.
            </p>

            <p>I don’t frighten people. I remove their alternatives. When enough alternatives disappear, obedience feels like relief.</p>

            <p>Crowds follow emotion because emotion is painless. Thinking requires isolation, and isolation feels like death to them. So they cling to whatever emotion is already moving, even if it’s carrying them somewhere ugly. Especially then.</p>

            <p>They call it manipulation when they notice it. But by the time they notice, it’s already finished.</p>

            <p className="text-2xl italic text-black py-4 font-light tracking-tight">I don’t argue with crowds. I infect them.</p>

            <p>Emotion spreads faster than logic because it doesn’t ask permission. One fearful voice becomes two, then ten, then a thousand, and suddenly no one remembers where it began. They just feel surrounded.</p>

            <p>Fear works best when it feels shared. That’s the lie at the center of every movement: <span className="underline underline-offset-8 decoration-black/10">You are not alone.</span></p>

            <p>They say power corrupts. Power doesn’t corrupt—it reveals. Give someone permission to be afraid together, and they will surrender their conscience just to belong.</p>

            <p>I never tell them what to hate. I let them discover it together. Discovery feels earned. Earned beliefs become sacred.</p>

            <p>Brother, the crowd doesn’t need a leader. It needs a direction. Leaders can be blamed. Directions cannot.</p>

            <p>I place pressure on the quiet ones first. The thinkers. The observers. When they fall silent, the rest follow without knowing why. Silence spreads faster than dissent. People sense it and assume danger. That’s when fear sharpens.</p>

            <p>You must understand this: Fear doesn’t demand action. <span className="italic font-bold border-b border-black/10">It demands alignment.</span> Once everyone is aligned, movement happens naturally.</p>

            <p>I stay distant on purpose. Distance creates mythology. If they can’t touch you, they will imagine you. And imagination is always crueler than reality.</p>

            <p>I let them project strength onto me, intention onto me, mercy onto me. Whatever they need to feel stable. I do not correct them. Correction breaks the spell.</p>

            <p>Power survives by being vague. Clear answers create limits. Ambiguity creates obedience. When they ask what I want, I delay. Delay makes desire rot into anxiety. Anxious people offer more than they were asked for.</p>

            <p>Brother, people think fear is about loss. It’s not. Fear is about exposure.</p>

            <p>They are afraid of being seen without the crowd around them. Afraid that alone, they are insignificant, wrong, replaceable. So I give them a role. A chant. A symbol. Anything to keep them from looking inward.</p>

            <p className="text-2xl md:text-3xl font-black text-black pt-6 pb-2 leading-tight">
              Crowds do not want truth. <br />
              <span className="italic font-light">They want permission to stop searching for it.</span>
            </p>

            <p>And when the crowd moves, it crushes quietly. No one feels responsible. That’s the beauty of it.</p>

            {/* End of Chapter Mark */}
            <div className="pt-24 pb-12 text-center opacity-30">
               <div className="w-16 h-[1px] bg-black mx-auto mb-4"></div>
               <p className="text-[10px] tracking-[0.8em] font-bold uppercase">End of Chapter II</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default ChapterTwo