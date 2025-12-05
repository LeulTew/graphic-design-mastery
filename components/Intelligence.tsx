/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Brain, Eye, Wand2, PenTool, Cpu, Zap } from 'lucide-react';

export const AiWorkflowDiagram: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Header Strategy */}
      <div className="bg-gradient-to-br from-purple-900/5 to-blue-900/5 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-500/20 p-8 rounded-2xl relative overflow-hidden">
         <div className="absolute top-0 right-0 p-12 bg-purple-500/10 blur-3xl rounded-full pointer-events-none"></div>
         <h4 className="font-bold text-2xl text-purple-600 dark:text-purple-300 mb-4">
            AI AS YOUR STUDIO ASSISTANT
         </h4>
         <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
            2025–2026 Pro Workflow. Clients expect you to work at AI speed with human quality. 
            Do not hide it. Master it. Your job is no longer just "drawing", it is "curating & refining".
         </p>
      </div>

      {/* The 4-Step Loop */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
         {[
            { 
                step: '1. Generate', 
                time: '30 sec',
                tools: 'Nano Banana Pro / FLUX.2', 
                desc: 'Prompt: [Style] + [Subject] + Ethiopian [Cultural Detail] + [Mood], clean vector style, minimalist, 4k --stylize 250.',
                tip: "Pro Tip: Nano Banana Pro is the only model that knows 'Habesha Kemis' vs generic 'African dress'.",
                icon: <Brain size={24} className="text-purple-500"/>,
                color: "border-purple-200 dark:border-purple-900/30 bg-purple-50/50 dark:bg-purple-900/10"
            },
            { 
                step: '2. Pick & Remix', 
                time: '1 min',
                tools: 'Human Eye + In-Paint', 
                desc: 'Upscale the best 1%. Use "In-Paint" to fix hands, eyes, and Fidel accuracy.',
                tip: "Goal: Fix the 'hallucinations' before you leave the AI.",
                icon: <Eye size={24} className="text-blue-500"/>,
                color: "border-blue-200 dark:border-blue-900/30 bg-blue-50/50 dark:bg-blue-900/10"
            },
            { 
                step: '3. Vectorize', 
                time: '60 sec',
                tools: 'Recraft V3 / Affinity', 
                desc: 'Image Trace "High Fidelity" → Expand → Simplify Path.',
                tip: "Secret: Use Nano Banana Script ($9) to auto-remove 'white dust' & messy anchors.",
                icon: <Wand2 size={24} className="text-ethio-tibeb"/>,
                color: "border-pink-200 dark:border-pink-900/30 bg-pink-50/50 dark:bg-pink-900/10"
            },
            { 
                step: '4. Human Polish', 
                time: '2–3 min',
                tools: 'Photoshop / Photopea', 
                desc: 'Overlay "Tibeb" grain. Force AI colors into 60-30-10 palette. Dodge/Burn shadows.',
                tip: "This is where you earn your money.",
                icon: <PenTool size={24} className="text-ethio-gold"/>,
                color: "border-orange-200 dark:border-orange-900/30 bg-orange-50/50 dark:bg-orange-900/10"
            },
         ].map((item, i) => (
            <div key={i} className={`p-6 rounded-xl border ${item.color} relative group hover:scale-[1.02] transition-transform duration-300 flex flex-col`}>
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-white dark:bg-black/20 rounded-lg shadow-sm">{item.icon}</div>
                    <span className="px-2 py-1 bg-white dark:bg-black/20 rounded text-[10px] font-bold uppercase tracking-widest text-gray-500">{item.time}</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-ethio-ink dark:text-white mb-1">{item.step}</h4>
                <div className="text-xs font-mono text-ethio-tibeb mb-3">{item.tools}</div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-grow">{item.desc}</p>
                <div className="text-[10px] font-bold bg-white dark:bg-black/20 p-2 rounded text-gray-500 dark:text-gray-400 border border-black/5 dark:border-white/5">
                    {item.tip}
                </div>
            </div>
         ))}
      </div>

      {/* Tools & Rules Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tools List */}
          <div className="lg:col-span-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-8">
              <h4 className="font-serif text-xl text-ethio-ink dark:text-white mb-6 flex items-center gap-2">
                  <Cpu size={20}/> The 2026 Toolbox
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                      { name: 'Nano Banana Pro', role: 'King of Ethiopian consistency. Knows skin tones & jewelry.' },
                      { name: 'FLUX.2 [pro]', role: 'Photorealism beast. Best for product mockups.' },
                      { name: 'Affinity AI Studio', role: 'Built into Canva/Affinity. Commercial safe.' },
                      { name: 'Nano Banana Script', role: 'The Cleaner. Removes 98% of vector garbage.' },
                      { name: 'Magnific AI', role: 'The Magic Wand. Hallucinates 4K details in 3s.' },
                      { name: 'Recraft V3', role: 'Best raster-to-vector engine currently.' },
                  ].map((tool, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                          <div className="mt-1 w-1.5 h-1.5 rounded-full bg-ethio-tibeb flex-shrink-0"></div>
                          <div>
                              <strong className="block text-sm text-ethio-ink dark:text-white">{tool.name}</strong>
                              <span className="text-xs text-gray-500 dark:text-gray-400 leading-tight block mt-1">{tool.role}</span>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          {/* The Golden Rule */}
          <div className="bg-ethio-tibeb text-white rounded-xl p-8 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-ethio-tibeb/20">
              <div className="absolute -right-10 -bottom-10 opacity-20 text-black mix-blend-overlay"><Zap size={150}/></div>
              <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-4 border-b border-white/20 pb-4">The Golden Rule</h4>
                  <p className="text-xl font-serif leading-relaxed mb-6">
                      "Never deliver raw AI. Always: AI Idea → Human Refinement → Your Signature."
                  </p>
                  <p className="text-sm opacity-90 leading-relaxed">
                      Clients pay 3–5× more for "Hand-Finished Strategy" than "AI Slop".
                  </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/20">
                  <div className="flex items-center justify-between">
                      <span className="text-xs uppercase font-bold opacity-80">Speed Cheat</span>
                      <span className="text-2xl font-bold font-mono">~7 mins</span>
                  </div>
                  <p className="text-[10px] opacity-70 mt-1">You just outworked everyone who’s still drawing from scratch.</p>
              </div>
          </div>
      </div>
    </div>
  );
};