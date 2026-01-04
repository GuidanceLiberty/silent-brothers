/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const ChapterFour = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#e8e4d9] flex items-center justify-center overflow-x-hidden py-10 md:py-20">
      
      {/* Subtle Paper Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.4] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>

      {/* FIXED NAVIGATION - Safe inward positioning for mobile */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] z-[100] px-6 md:px-10 py-8 flex justify-between items-center pointer-events-none">
        <Link 
          to="/three" 
          className="pointer-events-auto group flex items-center gap-3 bg-[#2a2a2a] text-[#fdfdfd] p-2 pr-5 rounded-full transition-all hover:scale-105 shadow-xl"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-lg">←</span>
          </div>
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Prev</span>
        </Link>

        <Link 
          to="/five" 
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
        <div className="relative z-10 flex flex-col p-6 md:p-20 overflow-y-auto">
          
          {/* Chapter Header */}
          <header className="text-center mb-16 border-b border-black/10 pb-12">
            <h2 className="text-[10px] tracking-[0.5em] uppercase font-light text-gray-500 mb-6 italic">Silent With My Brother</h2>
            <p className="text-[11px] tracking-[0.2em] uppercase font-bold text-orange-800/60 mb-2">Chapter IV</p>
            <h1 className="text-3xl md:text-5xl font-serif italic text-black tracking-tight leading-tight">When You Started Watching Back</h1>
          </header>

          <article className="font-serif text-[1.15rem] md:text-[1.25rem] leading-[1.9] text-justify space-y-8 text-black/80 antialiased pb-32">
            
            <p className="text-2xl font-light text-black italic">Brother,</p>

            <p>I knew the moment you understood. It wasn’t when you disagreed. Disagreement is loud. It announces itself. Understanding is quiet.</p>
            
            <p>
              <span className="text-6xl float-left mr-4 mt-2 font-bold leading-none text-black font-serif">Y</span>
              ou stopped asking questions. You stopped nodding. You stopped reacting at the right moments. That’s how I knew. You began to watch me the way I watch them.
            </p>

            <p>You noticed the pauses. The timing. The way I let others speak themselves into corners. You noticed how silence always arrived before obedience. And you didn’t interrupt it. That was the first sign of danger.</p>

            <p>People think power is something you take. You realized it is something you <span className="italic font-bold">withhold.</span> You saw how I never finished sentences. How I let people complete them with fear. How they volunteered truths without being asked. And you started doing it too.</p>

            <p>At first, unconsciously. Later, deliberately.</p>

            <p>You learned that every system has a rhythm. And that rhythm can be disrupted without resistance—only by stepping half a beat late. You learned that rules depend on participation. And participation depends on belief. You stopped believing. That is when systems lose their grip.</p>

            <p>Brother, you didn’t confront the crowd. You mirrored it. You laughed when they laughed. You nodded when they nodded. You agreed just enough to be ignored. Ignored people move freely.</p>

            <p>You learned to read fear in reverse. Not what they feared losing—but what they feared never becoming. Unfulfilled people are easier than desperate ones. They cling longer. They listen harder.</p>

            <p>You began to see types the way I do. The anxious leader. The righteous idiot. The silent follower waiting for permission. But unlike me, you didn’t organize them. You let them collide.</p>

            <p>You learned that confusion is more powerful than fear. Fear seeks safety. Confusion seeks authority. You never offered authority. You offered space. Space is unbearable to them. They filled it with mistakes.</p>

            <p>Brother, this is what frightened me: You stopped trying to escape the system. You realized escape is temporary. So you did something worse. You learned how to stand inside it without being counted.</p>

            <p className="text-2xl italic text-black py-4">You became inconsistent on purpose. Not chaotic—selective.</p>

            <p>Predictable to no one. Legible to no metric. That is how you vanished. You let them underestimate you. You let them label you wrong. Labels are blindfolds. While they argued about who you were, you learned who they needed you to be—and when.</p>

            {/* RESPONSIVE CLIMAX BLOCK */}
            <div className="text-center py-12 px-4 bg-black/[0.02] border-y border-black/5 my-10">
              <p className="text-[12px] uppercase tracking-[0.4em] font-bold text-orange-900 mb-6">The Final Realization</p>
              <h2 className="text-2xl md:text-4xl font-serif italic leading-tight text-black">
                The most dangerous person is not the one who controls fear— <br className="hidden md:block" />
                but the one who <span className="not-italic font-bold border-b-2 border-orange-800/20">no longer reacts to it.</span>
              </h2>
            </div>

            <p>Fear stopped working on you. That is when I stopped teaching. Because now, brother, you don’t need rules. You see patterns. You see timing. You see the moment when power shifts hands without anyone noticing.</p>

            <p>You don’t lead crowds. You outlive them. And that is why I stay silent now.</p>

            <p>Because the only thing more dangerous than a manipulator is someone who understands manipulation and chooses not to use it until it matters. And when it does—They won’t see you coming. They won’t even know there was a choice.</p>

            <p>They will just feel that something has changed and they no longer know who decided.</p>

            <p className="text-2xl italic text-black pt-6">That’s how I know you’re ready. Not because you agree with me. But because you don’t need to.</p>

            {/* End of Chapter Mark - NOW CONSISTENT */}
            <div className="pt-24 pb-12 text-center opacity-30">
               <div className="w-16 h-[1px] bg-black mx-auto mb-4"></div>
               <p className="text-[10px] tracking-[0.8em] font-bold uppercase">End of Chapter IV</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default ChapterFour