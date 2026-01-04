/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const ChapterOne = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#e8e4d9] flex items-center justify-center overflow-x-hidden py-10 md:py-20">
      
      {/* Subtle Paper Texture Overlay for the whole screen */}
      <div className="fixed inset-0 opacity-[0.4] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>

      {/* FIXED NAVIGATION - Moved inward to prevent mobile overflow */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] z-[100] px-10 py-8 flex justify-between items-center pointer-events-none">
        {/* PREV BUTTON */}
        <Link 
          to="/author" 
          className="pointer-events-auto group flex items-center gap-3 bg-[#2a2a2a] text-[#fdfdfd] p-2 pr-5 rounded-full transition-all hover:scale-105 shadow-xl"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-lg">←</span>
          </div>
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Prev</span>
        </Link>

        {/* NEXT BUTTON */}
        <Link 
          to="/two" 
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
        
        {/* Page Inner Shadow for Depth */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/[0.03] to-transparent pointer-events-none"></div>

        {/* Story Content Area */}
        <div className="relative z-10 flex flex-col p-8 md:p-20 overflow-y-auto">
          
          {/* Chapter Header */}
          <div className="text-center mb-16 border-b border-black/10 pb-12">
            <h2 className="text-[10px] tracking-[0.5em] uppercase font-light text-gray-500 mb-6 italic">Silent With My Brother</h2>
            <p className="text-[11px] tracking-[0.2em] uppercase font-bold text-orange-800/60 mb-2">Chapter I</p>
            <h1 className="text-3xl md:text-5xl font-serif italic text-black tracking-tight">What Fear Listens To</h1>
          </div>

          {/* Epigraph Section */}
          <div className="max-w-[85%] mx-auto mb-16 text-center italic text-gray-600 font-serif border-b border-black/5 pb-12">
            <p className="leading-relaxed text-lg">
              "The most effective prison is the one you never test— <br className="hidden md:block" />
              not because the door is hidden, <br className="hidden md:block" />
              but because you were taught to call staying 'choice.'"
            </p>
            <p className="text-[10px] not-italic uppercase tracking-widest mt-6 text-gray-400 font-bold">— Epigraph</p>
          </div>

          {/* COMPLETE STORY TEXT - UNABRIDGED */}
          <div className="font-serif text-[1.15rem] md:text-[1.25rem] leading-[1.9] text-justify space-y-8 text-black/80 antialiased">
            
            <p>
              <span className="text-6xl float-left mr-4 mt-2 font-bold leading-none text-black">B</span>
              rother, you always asked why I stay quiet when the room is loud. It isn’t because I have nothing to say. It’s because crowds speak first.
            </p>

            <p>Crowds don’t think. They feel, and then they call it truth. One emotion moves faster than reason ever could. <span className="italic font-bold border-b border-black/10">Fear is the fastest.</span></p>

            <p>I learned early that people believe numbers make them safe. They gather, they chant, they repeat one another’s words until the echo sounds like certainty. But certainty is fragile. Touch the right nerve and the whole body flinches.</p>

            <p>You don’t lead crowds by arguing with them. You reflect them. You show them their own face, slightly exaggerated, and they will follow it anywhere.</p>

            <p>Most people believe power announces itself. They expect it to shout, to dominate, to arrive with force. That belief is their first weakness.</p>

            <p className="text-2xl italic text-black py-4 font-light tracking-tight">Real power waits.</p>

            <p>It watches who speaks when they are afraid, and who goes quiet. It notices who laughs when the joke isn’t funny. It listens for the story people repeat about themselves, because that story is the cage they already live in.</p>

            <p>Brother, fear does not make people weak. <span className="underline underline-offset-8 decoration-black/10">It makes them predictable.</span></p>

            <p>A frightened crowd wants permission— permission to hate, permission to obey, permission to stop thinking. Give them permission and they will call you a leader. Take responsibility and they will call you a savior. Remove their doubt and they will surrender their judgment. But never remove their fear. Fear is the leash.</p>

            <p>I don’t tell them what to think. I tell them what to feel about what they already think. Once emotion is set, belief follows like a shadow.</p>

            <p>People say manipulation is deception. They’re wrong. Manipulation is selection. You choose which truth they see first.</p>

            <p>If you want loyalty, create a shared enemy. If you want obedience, create uncertainty. If you want devotion, make yourself the calm inside their storm.</p>

            <p>Crowds love symbols more than substance. They will die for an idea they barely understand, as long as it feels bigger than their fear of being alone. And being alone—that is the oldest fear of all.</p>

            <p>So I never threaten exile. I imply absence. Silence does what words cannot. When you pull your voice away, people lean forward. When you delay, they imagine rejection. When you say nothing, they fill the void with their worst assumptions. That’s when they start to chase.</p>

            <p>Brother, you remember this part. We learned it young. Authority does not need to explain itself. The moment you explain, you descend. The moment you defend, you invite doubt. Let others argue. Let others shout. Noise is camouflage for the insecure.</p>

            <p>I speak softly, rarely, and only when the room is ready. By then, my words feel like confirmation, not instruction. People obey what feels inevitable. And inevitability is engineered by repetition. Say something often enough, from enough mouths, and it stops sounding like an opinion. It becomes atmosphere. Crowds breathe atmosphere without noticing.</p>

            <p>The strongest position is not the front of the crowd. It’s the place where you can redirect it without being seen. If they praise you, step back. If they attack you, remain still. Attention is a fire—use it, don’t stand in it.</p>

            <p>I don’t need to punish. The system punishes for me. I only need to decide who is protected by it—and who is left outside. Being outside is worse than pain. Outside, there is no echo. Only your own thoughts. Most people would rather suffer than think alone.</p>

            <p>So yes, brother, I stay silent. Because silence lets fear speak in its native language. And when I finally speak, it doesn’t sound like command. It sounds like permission. By then, they are already moving. Not because I told them to. But because fear showed them where to go—and I was the only one standing there when they arrived.</p>

            {/* End of Chapter Mark */}
            <div className="pt-24 pb-12 text-center opacity-30">
               <div className="w-16 h-[1px] bg-black mx-auto mb-4"></div>
               <p className="text-[10px] tracking-[0.8em] font-bold uppercase">End of Chapter I</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChapterOne