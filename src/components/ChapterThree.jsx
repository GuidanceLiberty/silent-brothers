/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const ChapterThree = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#e8e4d9] flex items-center justify-center overflow-x-hidden py-10 md:py-20">
      
      {/* Subtle Paper Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.4] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>

      {/* FIXED NAVIGATION - Safe inward positioning */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] z-[100] px-6 md:px-10 py-8 flex justify-between items-center pointer-events-none">
        <Link 
          to="/two" 
          className="pointer-events-auto group flex items-center gap-3 bg-[#2a2a2a] text-[#fdfdfd] p-2 pr-5 rounded-full transition-all hover:scale-105 shadow-xl"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-lg">←</span>
          </div>
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Prev</span>
        </Link>

        <Link 
          to="/four" 
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
        
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/[0.03] to-transparent pointer-events-none"></div>

        <div className="relative z-10 flex flex-col p-6 md:p-20 overflow-y-auto">
          
          <header className="text-center mb-16 border-b border-black/10 pb-12">
            <h2 className="text-[10px] tracking-[0.5em] uppercase font-light text-gray-500 mb-6 italic">Silent With My Brother</h2>
            <p className="text-[11px] tracking-[0.2em] uppercase font-bold text-orange-800/60 mb-2">Chapter III</p>
            <h1 className="text-3xl md:text-5xl font-serif italic text-black tracking-tight leading-tight">The Rules That Pretend Not to Exist</h1>
          </header>

          <article className="font-serif text-[1.1rem] md:text-[1.25rem] leading-[1.9] text-justify space-y-8 text-black/80 antialiased pb-32">
            
            <p className="text-2xl font-light text-black italic">Brother,</p>

            <p>read them before they read you. Always read them first.</p>

            <p>People think they are complex. They are not. They are layered. Peel the first layer and you find noise. Peel the second and you find habit. Peel the third and you find fear.</p>
            
            <p>
              <span className="text-6xl float-left mr-4 mt-2 font-bold leading-none text-black font-serif">E</span>
              verything beneath fear is decoration. Watch their mouths when they speak. Watch their eyes when they listen. Watch their bodies when they think no one is watching. The body confesses before the mind agrees.
            </p>

            <p>They repeat themselves. They repeat their mistakes. They repeat the stories that excuse them. That is how you read them.</p>

            <p>Crowds are books written in one language: emotion. Individuals are footnotes pretending to be chapters.</p>

            <p>You must learn the pattern. There is always the loud one. There is always the angry one. There is always the clever one who thinks he sees through it. There is always the follower who needs instructions to breathe. They rotate, but they never disappear. Surrounded by them, you will think the world is chaotic. It isn’t. It is sorted.</p>

            <p>The system survives because it convinces people the rules are invisible. But rules are everywhere. Rules of attention. Rules of dominance. Rules of survival. Those who deny rules are ruled hardest by them.</p>

            {/* Rules Grid */}
            <div className="space-y-12 my-16">
              {[
                { r: "One", t: "People obey what explains their discomfort. If you name their pain, they will trust you. If you frame their confusion, they will follow you. If you give their fear a cause, they will defend the cause more than themselves.", b: "Say it again: They defend the cause more than themselves." },
                { r: "Two", t: "Never fight the system directly. The system rewards resistance with exhaustion. It buries rebels under process, paperwork, delay, ridicule. You don’t escape the system by opposing it. You escape it by understanding where it leaks. Every system leaks through people. People get tired. People get greedy. People get afraid. Fear is the widest crack." },
                { r: "Three", t: "Those who speak first reveal weakness. They reveal what they want. They reveal what they lack. They reveal what they are afraid will be taken. Silence forces revelation. Silence forces projection. Silence turns other people into informants against themselves." },
                { r: "Four", t: "Never try to educate the crowd. Education threatens identity. Threatened identity becomes violence. Instead, label. Labels feel like understanding without effort. Give them colors. Give them types. Give them enemies and fools. Once labeled, people behave as expected. Expectation is a cage that locks from the inside." },
                { r: "Five", t: "Power hides best behind usefulness. Be useful, and you are tolerated. Be indispensable, and you are protected. Be replaceable, and you are erased. So never be replaceable. Do not be loud. Do not be brilliant in public. Be quietly necessary." },
                { r: "Six", t: "Escape does not mean freedom. Escape means invisibility. The system cannot control what it cannot categorize. So confuse it. Change roles. Refuse consistency. Consistency is how they track you." }
              ].map((rule, i) => (
                <div key={i} className="border-l-4 border-orange-800/20 pl-6">
                  <p className="text-[11px] uppercase tracking-widest font-bold text-orange-800/60 mb-2">Rule {rule.r}</p>
                  <p>{rule.t}</p>
                  {rule.b && <p className="italic font-bold mt-2 text-black">{rule.b}</p>}
                </div>
              ))}
            </div>

            <p>Crowds hate inconsistency. It makes them nervous. Nervous people seek authority. Be unpredictable, and authority will leave you alone.</p>

            <p>Brother, read this carefully. Idiots are not stupid. They are certain. Certainty closes the mind. Certainty resists correction. Certainty spreads faster than doubt. Doubt isolates. Certainty gathers. So never argue with certainty. Redirect it. Give it a new object. Give it a new fear. Give it a new permission.</p>

            {/* FIX: NAME SHARE DIRECT - Wrapped and adjusted for mobile */}
            <div className="text-center py-12 bg-black/[0.02] border-y border-black/5 my-10 px-4">
              <p className="text-[12px] uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold text-orange-900 mb-6">Repeat the pattern:</p>
              <div className="text-3xl md:text-5xl font-serif italic space-y-2">
                <p className="opacity-100">Name the fear.</p>
                <p className="opacity-70">Share the fear.</p>
                <p className="opacity-40">Direct the fear.</p>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-10 text-xl md:text-2xl tracking-[0.2em] md:tracking-[0.4em] font-light">
                <span className="min-w-fit">NAME.</span>
                <span className="min-w-fit">SHARE.</span>
                <span className="min-w-fit">DIRECT.</span>
              </div>
            </div>

            <p>This is how crowds move without being pushed.</p>

            <p>The final rule, brother, the one they never write down: Those who understand the rules must pretend they don’t. The moment they sense awareness, they close ranks. The moment they sense superiority, they attack. The moment they sense escape, they punish.</p>

            <p>So smile. Agree. Participate just enough. And watch. Watch who speaks. Watch who follows. Watch who disappears. Read them until they are transparent. Then decide.</p>

            <p className="text-2xl italic text-black pt-6">Because power is not control. Power is choice.</p>

            <p>And fear ensures they never realize you were the only one who had it.</p>

            <div className="pt-24 pb-12 text-center opacity-30">
               <div className="w-16 h-[1px] bg-black mx-auto mb-4"></div>
               <p className="text-[10px] tracking-[0.8em] font-bold uppercase">End of Chapter III</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default ChapterThree