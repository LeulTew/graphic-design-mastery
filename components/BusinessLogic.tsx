
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';

// --- PORTFOLIO CASE STUDY TEMPLATE ---
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

// --- PRICING & NEGOTIATION ---
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
