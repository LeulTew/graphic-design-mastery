/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Loader2 } from 'lucide-react';

export const MotionMicroInteractions: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (!inputValue) return;
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => {
        setFormState('idle');
        setInputValue('');
      }, 2500);
    }, 1500);
  };

  return (
    <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
           <h3 className="font-serif text-2xl text-ethio-ink dark:text-white mb-4">Motion is Meaning</h3>
           <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
             Static design is dead. International clients pay 2-5x more for interfaces that feel "alive". 
             You don't need to be an animator, you just need to understand <strong>Micro-interactions</strong>.
           </p>
           <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-ethio-tibeb/10 rounded-full"><Check size={12} className="text-ethio-tibeb"/></div>
                <div>
                    <strong className="block text-ethio-ink dark:text-white">Feedback</strong>
                    <span className="text-xs">Buttons should shrink and provide tactile response when clicked.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-ethio-tibeb/10 rounded-full"><Check size={12} className="text-ethio-tibeb"/></div>
                <div>
                    <strong className="block text-ethio-ink dark:text-white">Transition</strong>
                    <span className="text-xs">Pages and elements should fade or slide, never just "snap" into existence.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-ethio-tibeb/10 rounded-full"><Check size={12} className="text-ethio-tibeb"/></div>
                <div>
                    <strong className="block text-ethio-ink dark:text-white">Focus</strong>
                    <span className="text-xs">Active inputs should glow to guide the user's eye.</span>
                </div>
              </li>
           </ul>
        </div>
        
        {/* Interactive Demo Area */}
        <div className="relative bg-gray-100 dark:bg-[#0a0a0a] p-8 rounded-xl border border-dashed border-gray-300 dark:border-gray-800 flex flex-col items-center justify-center min-h-[340px]">
           <div className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-gray-400">Interactive Demo</div>
           
           <div className="w-full max-w-xs space-y-4">
              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                    <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="bg-green-500 text-white p-8 rounded-xl flex flex-col items-center justify-center text-center shadow-2xl shadow-green-500/30"
                    >
                        <motion.div 
                            initial={{ scale: 0 }} 
                            animate={{ scale: 1 }} 
                            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                            className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-green-500 mb-4"
                        >
                            <Check size={32} strokeWidth={3} />
                        </motion.div>
                        <h4 className="font-bold text-xl mb-1">Payment Sent!</h4>
                        <p className="text-xs opacity-90">Transaction Complete</p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-white dark:bg-[#121212] p-6 rounded-xl shadow-xl border border-gray-200 dark:border-white/5"
                    >
                        <div className="space-y-6">
                            <div>
                                <label className="text-[10px] font-bold uppercase text-gray-400 mb-2 block tracking-wider">Amount</label>
                                <motion.div 
                                    whileFocus="focus"
                                    initial="initial"
                                    className="relative"
                                >
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-serif italic text-lg">$</span>
                                    <motion.input 
                                        type="number" 
                                        variants={{
                                            initial: { scale: 1, borderColor: "rgba(156, 163, 175, 0.2)" },
                                            focus: { scale: 1.05, borderColor: "#FF0099", boxShadow: "0 0 0 4px rgba(255,0,153,0.1)" }
                                        }}
                                        transition={{ duration: 0.2 }}
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder="0.00"
                                        className="w-full bg-gray-50 dark:bg-black/20 border rounded-lg py-4 pl-10 pr-4 outline-none transition-colors text-ethio-ink dark:text-white font-mono text-lg"
                                    />
                                </motion.div>
                            </div>
                            
                            <motion.button 
                                onClick={handleSubmit}
                                disabled={!inputValue || formState === 'loading'}
                                whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(255, 0, 153, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-full py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all uppercase tracking-widest ${!inputValue ? 'bg-gray-200 dark:bg-white/10 text-gray-400 cursor-not-allowed' : 'bg-ethio-tibeb text-white shadow-lg shadow-ethio-tibeb/20'}`}
                            >
                                {formState === 'loading' ? (
                                    <>
                                        <Loader2 size={16} className="animate-spin" /> Processing...
                                    </>
                                ) : (
                                    <>
                                        Pay Now <ArrowRight size={16} />
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </motion.div>
                )}
              </AnimatePresence>
           </div>
           
           <div className="mt-8 text-center max-w-xs">
               <p className="text-[10px] text-gray-400">
                   {formState === 'idle' && "Try entering an amount (Focus) and clicking Pay (Feedback)."}
                   {formState === 'loading' && "Observe the loading state feedback."}
                   {formState === 'success' && "Observe the smooth transition to success state."}
               </p>
           </div>
        </div>
      </div>
    </div>
  );
};