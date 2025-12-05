
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Smartphone, Monitor, Tablet, Folder, Image, FileText, Download, DollarSign, Brain, Sparkles, User, ArrowRight, MousePointer, Eye, ThumbsUp, Coffee } from 'lucide-react';

// --- 8. MOTION & MICRO-INTERACTIONS ---
export const MotionMicroInteractions: React.FC = () => {
  return (
    <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
           <h3 className="font-serif text-2xl text-ethio-ink dark:text-white mb-4">Motion is Meaning</h3>
           <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
             Static design is dead. International clients pay 2-5x more for interfaces that feel "alive". 
             You don't need to be an animator, you just need to understand <strong>Micro-interactions</strong>.
           </p>
           <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2"><Check size={16} className="text-ethio-tibeb"/> <strong>Feedback:</strong> Buttons should shrink when clicked.</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-ethio-tibeb"/> <strong>Transition:</strong> Pages should fade, not snap.</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-ethio-tibeb"/> <strong>Focus:</strong> Inputs should glow when active.</li>
           </ul>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 bg-gray-100 dark:bg-black/20 p-8 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
           {/* Interactive Button */}
           <div className="text-center">
             <p className="text-[10px] uppercase text-gray-500 mb-2">Try Clicking</p>
             <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 0, 153, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-ethio-tibeb text-white font-bold rounded-full shadow-lg"
             >
                Pay Now
             </motion.button>
           </div>
           
           {/* Loading State */}
           <div className="flex items-center gap-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
              <div className="w-5 h-5 border-2 border-ethio-cyan border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs font-mono text-gray-500">Processing...</span>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- 9. AI-ASSISTED WORKFLOW ---
export const AiWorkflowDiagram: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-900/10 to-blue-900/10 border border-purple-500/20 p-6 rounded-xl">
         <h4 className="flex items-center gap-2 font-bold text-purple-600 dark:text-purple-400 mb-2">
            <Sparkles size={18}/> The 2025 Reality
         </h4>
         <p className="text-sm text-gray-600 dark:text-gray-300">
            Clients expect you to use AI to work faster. Do not hide it. Master it. Your job is no longer just "drawing", it is "curating & refining".
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         {[
            { step: '1. Prompt', tool: 'Midjourney / Flux', desc: 'Generate 50 ideas in 5 mins. Explore composition & lighting.', icon: <Brain size={24}/> },
            { step: '2. Select', tool: 'Human Eye', desc: 'Pick the best 1%. AI has bad taste; you have good taste.', icon: <Eye size={24}/> },
            { step: '3. Vectorize', tool: 'Illustrator', desc: 'Trace the image. Fix the weird hands. Clean the lines.', icon: <MousePointer size={24}/> },
            { step: '4. Polish', tool: 'Photoshop', desc: 'Add texture, noise, and brand colors. Make it human again.', icon: <ThumbsUp size={24}/> },
         ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 rounded-xl relative group">
                <div className="absolute top-4 right-4 text-ethio-tibeb opacity-20 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">{item.step}</div>
                <h4 className="font-serif text-lg text-ethio-ink dark:text-white mb-2">{item.tool}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
         ))}
      </div>
    </div>
  );
};

// --- 10. PORTFOLIO CASE STUDY TEMPLATE ---
export const PortfolioCaseStudyTemplate: React.FC = () => {
   return (
      <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
         <div className="p-8 border-b border-gray-200 dark:border-white/10">
            <h3 className="font-serif text-2xl text-ethio-ink dark:text-white">The "Winning" Case Study Structure</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
               Don't just upload a Jpeg. International clients buy your <strong>Thinking</strong>, not just your styling. Use this 5-slide format for every project.
            </p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-white/10">
             {[
                { title: '1. The Problem', desc: '"Client needed a logo" is bad. "Client needed to increase trust with Gen Z" is good.' },
                { title: '2. The Research', desc: 'Show screenshots of competitors. Show moodboards. Show you did homework.' },
                { title: '3. The Sketches', desc: 'Show ugly pencil drawings. It proves you didn\'t steal the design.' },
                { title: '4. The Solution', desc: 'The final design. Show it on mockups (Phone, T-shirt, Billboard).' },
                { title: '5. The Results', desc: '"Sales increased by 20%". If no data, use a client testimonial.' },
             ].map((slide, i) => (
                <div key={i} className="p-6 hover:bg-white dark:hover:bg-white/5 transition-colors">
                   <div className="text-4xl font-serif text-ethio-tibeb/20 font-bold mb-4">{i+1}</div>
                   <h4 className="font-bold text-sm text-ethio-ink dark:text-white mb-2">{slide.title}</h4>
                   <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{slide.desc}</p>
                </div>
             ))}
         </div>
      </div>
   )
}

// --- 11. PRICING & NEGOTIATION ---
export const PricingStrategyCalculator: React.FC = () => {
    const [model, setModel] = useState<'hourly' | 'value'>('value');

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
                <h3 className="font-serif text-2xl text-ethio-ink dark:text-white">The Pricing Trap</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Most Ethiopian designers charge <strong>Cost + Time</strong>. <br/>
                    Smart designers charge <strong>Value + Risk</strong>.
                </p>
                
                <div className="flex bg-gray-200 dark:bg-white/10 rounded p-1">
                    <button onClick={() => setModel('hourly')} className={`flex-1 py-2 rounded text-xs font-bold uppercase ${model === 'hourly' ? 'bg-white text-black shadow' : 'text-gray-500'}`}>Hourly (Amateur)</button>
                    <button onClick={() => setModel('value')} className={`flex-1 py-2 rounded text-xs font-bold uppercase ${model === 'value' ? 'bg-ethio-gold text-white shadow' : 'text-gray-500'}`}>Value (Pro)</button>
                </div>

                <div className="bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 p-6 rounded-xl">
                    {model === 'hourly' ? (
                        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
                            <div className="flex justify-between items-end mb-4">
                                <span className="text-sm text-gray-500">Rate</span>
                                <span className="text-xl font-bold text-gray-800 dark:text-gray-200">$20 / hr</span>
                            </div>
                            <div className="flex justify-between items-end mb-4">
                                <span className="text-sm text-gray-500">Time</span>
                                <span className="text-xl font-bold text-gray-800 dark:text-gray-200">10 hrs</span>
                            </div>
                            <div className="h-px bg-gray-200 dark:bg-white/10 my-4"></div>
                            <div className="flex justify-between items-end">
                                <span className="text-sm font-bold text-ethio-ink dark:text-white">Total</span>
                                <span className="text-3xl font-serif text-gray-500">$200</span>
                            </div>
                            <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs rounded border border-red-200 dark:border-red-900/30">
                                ⚠️ Penalty: If you work faster, you earn less.
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
                            <div className="flex justify-between items-end mb-4">
                                <span className="text-sm text-gray-500">Client Revenue</span>
                                <span className="text-xl font-bold text-green-500">$100,000</span>
                            </div>
                            <div className="flex justify-between items-end mb-4">
                                <span className="text-sm text-gray-500">Design Impact</span>
                                <span className="text-xl font-bold text-ethio-gold">2%</span>
                            </div>
                            <div className="h-px bg-gray-200 dark:bg-white/10 my-4"></div>
                            <div className="flex justify-between items-end">
                                <span className="text-sm font-bold text-ethio-ink dark:text-white">Your Price</span>
                                <span className="text-3xl font-serif text-ethio-gold">$2,000</span>
                            </div>
                            <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs rounded border border-green-200 dark:border-green-900/30">
                                ✅ Reward: You earn based on result, not hours.
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            <div className="bg-ethio-tibeb/5 border border-ethio-tibeb/20 rounded-xl p-8">
                <h4 className="font-bold text-ethio-tibeb mb-4 flex items-center gap-2"><DollarSign size={18}/> Negotiation Scripts</h4>
                <div className="space-y-4">
                    <div className="text-xs">
                        <p className="text-gray-500 mb-1">When they ask: "What is your rate?"</p>
                        <div className="bg-white dark:bg-black/40 p-3 rounded text-ethio-ink dark:text-gray-300 italic">
                            "Before we talk numbers, I want to make sure I understand the scope fully so I can give you a fair fixed price. Can we discuss the deliverables?"
                        </div>
                    </div>
                    <div className="text-xs">
                        <p className="text-gray-500 mb-1">When they say: "That's too expensive."</p>
                        <div className="bg-white dark:bg-black/40 p-3 rounded text-ethio-ink dark:text-gray-300 italic">
                            "I understand. If budget is a concern, we can remove [Feature A] and [Feature B] to lower the price, but I want to ensure we don't compromise the result."
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// --- QUICK FIX: WHITE SPACE VISUALIZER ---
export const WhiteSpaceVisualizer: React.FC = () => {
    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-white/5 p-6 border border-red-200 dark:border-red-900/30 rounded-lg opacity-70">
                <div className="text-[10px] text-red-500 font-bold uppercase mb-2">Amateur (Cramped)</div>
                <div className="bg-gray-200 dark:bg-gray-700 h-32 p-1 text-[8px] leading-tight text-justify overflow-hidden text-gray-500">
                    Loremipsumdolorsitametconsecteturadipisicingelit.Seddoeiustmodtemporincididuntutlaboreetdoloremagnaaliqua.Utunimadminimveniam,quisnostrudexercitationullamcolaborisnisiutaliquip.
                    <button className="w-full bg-black text-white mt-1 py-1">Click</button>
                </div>
            </div>
            <div className="bg-white dark:bg-white/5 p-6 border border-green-200 dark:border-green-900/30 rounded-lg shadow-lg">
                <div className="text-[10px] text-green-500 font-bold uppercase mb-2">Pro (Breathing Room)</div>
                <div className="bg-gray-50 dark:bg-gray-800 h-32 p-4 flex flex-col justify-center items-center">
                    <span className="text-xs text-gray-800 dark:text-gray-200 font-serif mb-4">Elegant Design</span>
                    <button className="px-4 py-1 bg-black text-white text-[10px] rounded hover:scale-105 transition-transform">Click Me</button>
                </div>
            </div>
        </div>
    )
}

// --- QUICK FIX: PRODUCTION GUIDE (Exports & Folders) ---
export const ProductionReadyGuide: React.FC = () => {
    const [tab, setTab] = useState<'exports' | 'folders'>('exports');

    return (
        <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden mt-12">
            <div className="flex border-b border-gray-200 dark:border-white/10">
                <button onClick={() => setTab('exports')} className={`flex-1 py-3 text-xs font-bold uppercase ${tab === 'exports' ? 'bg-ethio-tibeb text-white' : 'text-gray-500'}`}>Export Cheat Sheet</button>
                <button onClick={() => setTab('folders')} className={`flex-1 py-3 text-xs font-bold uppercase ${tab === 'folders' ? 'bg-ethio-tibeb text-white' : 'text-gray-500'}`}>Folder Structure</button>
            </div>
            
            <div className="p-8">
                {tab === 'exports' ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                             <h4 className="font-bold text-ethio-ink dark:text-white flex items-center gap-2"><Monitor size={16}/> Web & Social</h4>
                             <p className="text-xs text-gray-500">Always RGB.</p>
                             <div className="bg-gray-100 dark:bg-black/30 p-3 rounded text-xs space-y-1 font-mono text-gray-600 dark:text-gray-300">
                                 <div>Format: <span className="text-ethio-tibeb">JPG</span> (Photos)</div>
                                 <div>Format: <span className="text-ethio-tibeb">PNG</span> (Transparent)</div>
                                 <div>Format: <span className="text-ethio-tibeb">SVG</span> (Icons/Logos)</div>
                                 <div>Scale: <span className="text-ethio-tibeb">@2x</span> for Retina</div>
                             </div>
                        </div>
                        <div className="space-y-2">
                             <h4 className="font-bold text-ethio-ink dark:text-white flex items-center gap-2"><FileText size={16}/> Print</h4>
                             <p className="text-xs text-gray-500">Always CMYK. 300 DPI.</p>
                             <div className="bg-gray-100 dark:bg-black/30 p-3 rounded text-xs space-y-1 font-mono text-gray-600 dark:text-gray-300">
                                 <div>Format: <span className="text-ethio-tibeb">PDF</span> (Print Ready)</div>
                                 <div>Bleed: <span className="text-ethio-tibeb">3mm</span></div>
                                 <div>Text: <span className="text-ethio-tibeb">Outlined</span></div>
                             </div>
                        </div>
                         <div className="space-y-2">
                             <h4 className="font-bold text-ethio-ink dark:text-white flex items-center gap-2"><Download size={16}/> Client Handoff</h4>
                             <p className="text-xs text-gray-500">Never send source files initially.</p>
                             <div className="bg-gray-100 dark:bg-black/30 p-3 rounded text-xs space-y-1 font-mono text-gray-600 dark:text-gray-300">
                                 <div>Drafts: <span className="text-ethio-tibeb">Low-Res JPG</span></div>
                                 <div>Final: <span className="text-ethio-tibeb">Zip All Formats</span></div>
                             </div>
                        </div>
                    </div>
                ) : (
                    <div className="font-mono text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-black/20 p-6 rounded-lg border border-dashed border-gray-300 dark:border-white/10">
                        <div className="flex items-center gap-2 text-ethio-tibeb"><Folder size={16}/> 01_Client_Name_Project</div>
                        <div className="pl-6 flex items-center gap-2"><Folder size={16}/> 01_Received (Briefs, Assets)</div>
                        <div className="pl-6 flex items-center gap-2"><Folder size={16}/> 02_Working (AI, PSD, FIG)</div>
                        <div className="pl-6 flex items-center gap-2"><Folder size={16}/> 03_Proofs (JPGs sent to client)</div>
                        <div className="pl-6 flex items-center gap-2"><Folder size={16}/> 04_Final_Delivery</div>
                        <div className="pl-12 flex items-center gap-2 text-green-600 dark:text-green-400"><Image size={16}/> Logo_Full_Color.png</div>
                        <div className="pl-12 flex items-center gap-2 text-green-600 dark:text-green-400"><Image size={16}/> Logo_White.png</div>
                        <div className="pl-12 flex items-center gap-2 text-green-600 dark:text-green-400"><FileText size={16}/> Brand_Guidelines.pdf</div>
                    </div>
                )}
            </div>
        </div>
    )
}

// --- QUICK FIX: RESPONSIVE GUIDE ---
export const ResponsiveGuide: React.FC = () => {
    return (
        <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6 mt-12">
            <h4 className="font-serif text-xl mb-4 text-ethio-ink dark:text-white flex items-center gap-2">
                <Smartphone size={20}/> Responsive Strategy
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Design for mobile first. If it works on a small screen, it works everywhere.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 items-end justify-center h-40 bg-gray-100 dark:bg-black/20 rounded-lg p-4">
                {/* Mobile */}
                <div className="w-16 h-24 bg-ethio-tibeb rounded flex items-center justify-center text-white text-[10px] font-bold shadow-lg">
                    Mobile<br/>375px
                </div>
                {/* Tablet */}
                <div className="w-24 h-32 bg-gray-400/50 rounded flex items-center justify-center text-white text-[10px] font-bold">
                    Tablet<br/>768px
                </div>
                {/* Desktop */}
                <div className="w-40 h-full bg-gray-300/30 rounded flex items-center justify-center text-gray-500 text-[10px] font-bold">
                    Desktop<br/>1440px+
                </div>
            </div>
            
             <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div className="text-xs text-gray-500">1 Column Layout</div>
                <div className="text-xs text-gray-500">4 Column Layout</div>
                <div className="text-xs text-gray-500">12 Column Layout</div>
             </div>
        </div>
    )
}

// --- QUICK FIX: ACCESSIBILITY ---
export const AccessibilityCheck: React.FC = () => {
    return (
         <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6 mt-12">
             <h4 className="font-serif text-xl mb-4 text-ethio-ink dark:text-white flex items-center gap-2">
                <Eye size={20}/> Accessibility (WCAG)
            </h4>
            <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-gray-200 text-gray-400 text-sm flex items-center justify-center rounded relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-[8px] px-2 py-1">FAIL</div>
                    Invisible Text
                 </div>
                 <div className="p-4 bg-gray-800 text-white text-sm flex items-center justify-center rounded relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-green-500 text-white text-[8px] px-2 py-1">PASS (AA)</div>
                    Clear Text
                 </div>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">
                Low contrast excludes 20% of users. Use tools like <strong>Contrast</strong> plugin in Figma to check automatically.
            </p>
         </div>
    )
}
