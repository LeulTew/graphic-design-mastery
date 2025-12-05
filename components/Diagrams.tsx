
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Move, Layers, Monitor, Type, Printer, Image, PenTool, Search, Feather, Send, Briefcase, Copy, ZoomIn, DollarSign, Grid, ShieldCheck, AlertTriangle, FileText, Smartphone, Mail, Coffee, Video, Box, PenTool as PenToolIcon, Moon } from 'lucide-react';

// --- DESIGN PRINCIPLE VISUALIZER ---
export const DesignPrincipleVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'balance' | 'contrast' | 'hierarchy' | 'repetition' | 'alignment' | 'proximity' | 'color'>('balance');

  return (
    <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden backdrop-blur-md transition-colors duration-300 flex flex-col h-full">
       <div className="flex border-b border-gray-200 dark:border-white/10 overflow-x-auto scrollbar-hide">
          {['balance', 'contrast', 'hierarchy', 'repetition', 'alignment', 'proximity', 'color'].map((tab) => (
             <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`flex-none px-6 py-4 text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${activeTab === tab ? 'bg-ethio-tibeb text-white' : 'text-gray-500 hover:text-ethio-ink dark:hover:text-white'}`}
             >
                {tab}
             </button>
          ))}
       </div>

       <div className="relative flex-grow min-h-[400px] flex items-center justify-center p-8 bg-gray-50 dark:bg-transparent transition-colors overflow-hidden">
          <AnimatePresence mode="wait">
             {activeTab === 'balance' && (
                <motion.div 
                    key="balance"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="w-full h-full flex items-center justify-center gap-8"
                >
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-32 h-32 border-2 border-gray-300 dark:border-white/20 flex items-center justify-center gap-2">
                             <div className="w-8 h-8 bg-ethio-ink dark:bg-ethio-teff rounded-full"></div>
                             <div className="w-1 bg-gray-300 dark:bg-white/10 h-full mx-2"></div>
                             <div className="w-8 h-8 bg-ethio-ink dark:bg-ethio-teff rounded-full"></div>
                        </div>
                        <span className="text-[10px] uppercase text-gray-500">Symmetrical (Static)</span>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-32 h-32 border-2 border-ethio-tibeb flex items-center justify-between p-4 relative">
                             <div className="w-12 h-12 bg-gray-200 dark:bg-white rounded-md"></div>
                             <div className="absolute right-4 bottom-4 w-4 h-4 bg-ethio-tibeb rounded-full animate-bounce"></div>
                             <div className="absolute right-4 top-8 w-16 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                        </div>
                        <span className="text-[10px] uppercase text-ethio-tibeb font-bold">Asymmetrical (Dynamic)</span>
                    </div>
                </motion.div>
             )}

             {activeTab === 'contrast' && (
                <motion.div 
                    key="contrast"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="w-full flex items-center justify-center gap-8"
                >
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-600 font-serif text-2xl">
                       Low
                    </div>
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-ethio-ink dark:bg-ethio-teff flex items-center justify-center text-ethio-paper dark:text-ethio-charcoal font-serif text-2xl font-bold">
                       High
                    </div>
                    <motion.div 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-24 h-24 md:w-32 md:h-32 bg-ethio-tibeb flex items-center justify-center text-white font-serif text-2xl font-bold shadow-lg shadow-ethio-tibeb/50"
                    >
                       Pop
                    </motion.div>
                </motion.div>
             )}

             {activeTab === 'hierarchy' && (
                <motion.div 
                    key="hierarchy"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex flex-col items-start gap-4 bg-white p-6 rounded shadow-lg text-black w-64 border border-gray-100"
                >
                    <h1 className="text-3xl font-serif font-bold text-ethio-tibeb">Read Me First</h1>
                    <h2 className="text-xl text-gray-800 font-bold">Then read this subtitle</h2>
                    <p className="text-xs text-gray-500 leading-relaxed">Finally, the eye settles on the body text, which provides the details. Hierarchy guides the user's eye down the page in a predictable pattern.</p>
                    <button className="px-4 py-2 bg-black text-white text-xs uppercase font-bold rounded hover:bg-ethio-cyan hover:text-black transition-colors">Action</button>
                </motion.div>
             )}

            {activeTab === 'repetition' && (
                <motion.div 
                    key="repetition"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="w-full flex flex-col items-center gap-6"
                >
                    <div className="flex gap-6 items-end">
                        {/* Business Card */}
                        <motion.div initial={{y: 20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.1}} className="w-24 h-14 bg-white border border-gray-200 rounded flex flex-col justify-center items-center shadow-lg relative overflow-hidden">
                             <div className="w-full h-1 bg-ethio-tibeb absolute top-0"></div>
                             <div className="text-[8px] font-bold">Brand</div>
                        </motion.div>
                        {/* Mobile Screen */}
                        <motion.div initial={{y: 20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.2}} className="w-16 h-28 bg-white border border-gray-200 rounded-lg flex flex-col items-center shadow-lg relative overflow-hidden">
                             <div className="w-full h-8 bg-ethio-tibeb flex justify-center items-center"><div className="w-2 h-2 bg-white rounded-full"></div></div>
                             <div className="mt-4 w-10 h-1 bg-gray-200 rounded"></div>
                             <div className="mt-2 w-8 h-1 bg-gray-200 rounded"></div>
                        </motion.div>
                        {/* Envelope */}
                        <motion.div initial={{y: 20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.3}} className="w-24 h-16 bg-white border border-gray-200 rounded flex items-center justify-center shadow-lg relative overflow-hidden">
                             <div className="w-8 h-8 rounded-full border-2 border-ethio-tibeb flex items-center justify-center text-[8px] font-serif">B</div>
                        </motion.div>
                    </div>
                    <p className="text-center text-xs text-gray-500 dark:text-gray-400 max-w-xs">
                        By repeating the same color (Pink) and logo style across different mediums, we create a cohesive "Brand Identity".
                    </p>
                </motion.div>
             )}

            {activeTab === 'alignment' && (
                <motion.div 
                    key="alignment"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="w-full flex items-center justify-center gap-12"
                >
                     {/* Bad Alignment */}
                     <div className="relative w-32 h-40 border border-red-200 bg-red-50/10 p-2">
                        <div className="absolute top-0 right-0 text-[8px] text-red-500 uppercase font-bold p-1">Bad</div>
                        <div className="w-16 h-2 bg-gray-400 rounded mb-4 ml-2"></div>
                        <div className="w-20 h-2 bg-gray-400 rounded mb-2 ml-4"></div>
                        <div className="w-12 h-2 bg-gray-400 rounded mb-8 ml-0"></div>
                        <div className="w-16 h-6 bg-gray-800 rounded ml-6"></div>
                     </div>

                     {/* Snap Animation Arrow */}
                     <div className="text-ethio-tibeb">
                        <Move size={24} />
                     </div>

                     {/* Good Alignment */}
                     <div className="relative w-32 h-40 border border-green-200 bg-green-50/10 p-2">
                        {/* Invisible Grid Lines */}
                        <div className="absolute inset-0 border-l border-green-500/20 ml-4 pointer-events-none"></div>
                        <div className="absolute top-0 right-0 text-[8px] text-green-500 uppercase font-bold p-1">Good</div>
                        
                        <div className="w-16 h-2 bg-gray-400 rounded mb-4 ml-2"></div>
                        <div className="w-20 h-2 bg-gray-400 rounded mb-2 ml-2"></div>
                        <div className="w-12 h-2 bg-gray-400 rounded mb-8 ml-2"></div>
                        <div className="w-16 h-6 bg-ethio-tibeb rounded ml-2"></div>
                     </div>
                </motion.div>
             )}

            {activeTab === 'proximity' && (
                <motion.div 
                    key="proximity"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="w-full flex flex-col items-center justify-center gap-8"
                >
                    <div className="flex gap-12">
                         <div className="text-center">
                            <h4 className="text-[10px] uppercase text-gray-500 mb-2">Before (Chaos)</h4>
                            <div className="w-32 h-32 border border-dashed border-gray-300 relative">
                                <div className="absolute top-2 left-2 w-8 h-8 bg-gray-300 rounded-full"></div>
                                <div className="absolute bottom-2 right-4 w-16 h-2 bg-gray-400"></div>
                                <div className="absolute top-12 right-2 w-12 h-2 bg-gray-400"></div>
                                <div className="absolute bottom-12 left-4 w-20 h-6 bg-gray-800"></div>
                            </div>
                         </div>
                         <div className="text-center">
                            <h4 className="text-[10px] uppercase text-gray-500 mb-2">After (Grouped)</h4>
                            <div className="w-32 h-32 border border-ethio-tibeb bg-white dark:bg-black/20 relative flex flex-col items-center justify-center gap-2">
                                <div className="w-8 h-8 bg-ethio-tibeb rounded-full mb-1"></div>
                                <div className="w-16 h-2 bg-gray-400"></div>
                                <div className="w-12 h-2 bg-gray-400"></div>
                                <div className="w-20 h-6 bg-ethio-ink dark:bg-white rounded mt-2"></div>
                            </div>
                         </div>
                    </div>
                </motion.div>
             )}

            {activeTab === 'color' && (
                <motion.div 
                    key="color"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="w-full flex items-center justify-center"
                >
                    <div className="w-full max-w-md">
                        <h4 className="text-center font-serif text-xl mb-4 text-ethio-ink dark:text-white">The 60-30-10 Rule</h4>
                        <div className="h-12 w-full rounded-full overflow-hidden flex border border-gray-200 dark:border-white/10">
                             <div className="w-[60%] bg-[#F5F5DC] flex items-center justify-center text-xs font-bold text-gray-600">60% Neutral</div>
                             <div className="w-[30%] bg-ethio-tibeb flex items-center justify-center text-xs font-bold text-white">30% Brand</div>
                             <div className="w-[10%] bg-ethio-cyan flex items-center justify-center text-xs font-bold text-black">10%</div>
                        </div>
                        <div className="mt-8 flex gap-4 justify-center">
                             {/* Mock UI Example */}
                             <div className="w-48 h-32 bg-[#F5F5DC] rounded-lg p-4 relative shadow-lg">
                                 <div className="w-8 h-8 bg-ethio-tibeb rounded-full mb-2"></div>
                                 <div className="w-24 h-2 bg-gray-400/50 mb-1"></div>
                                 <div className="w-16 h-2 bg-gray-400/50"></div>
                                 <div className="absolute bottom-4 right-4 px-3 py-1 bg-ethio-cyan text-black text-[10px] font-bold rounded">Action</div>
                             </div>
                             <div className="text-xs text-gray-500 w-32 flex items-center">
                                 See how the 10% accent color (Cyan) draws the eye immediately to the button?
                             </div>
                        </div>
                    </div>
                </motion.div>
             )}
          </AnimatePresence>
       </div>
    </div>
  );
};

// --- GRID SYSTEM VISUALIZER ---
export const GridSystemVisualizer: React.FC = () => {
    const [mode, setMode] = useState<'thirds' | '12col' | 'golden'>('thirds');

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-100 dark:bg-white/5 p-8 rounded-xl border border-gray-200 dark:border-white/10">
            <div className="relative aspect-video bg-white dark:bg-[#121212] border border-gray-300 dark:border-gray-800 overflow-hidden shadow-inner">
                {/* Content Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <img src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale" alt="Forest" />
                </div>
                
                {/* Rule of Thirds Grid */}
                {mode === 'thirds' && (
                   <motion.div initial={{opacity:0}} animate={{opacity:1}} className="absolute inset-0 grid grid-cols-3 grid-rows-3 h-full w-full pointer-events-none">
                       {[...Array(9)].map((_, i) => (
                           <div key={i} className="border border-ethio-tibeb/50 relative">
                               {/* Hotspots */}
                               {[0, 1, 3, 4].includes(i) && (
                                   <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-ethio-tibeb rounded-full z-10 animate-pulse border-2 border-white"></div>
                               )}
                           </div>
                       ))}
                   </motion.div>
                )}

                {/* 12 Col Grid */}
                {mode === '12col' && (
                   <motion.div initial={{opacity:0}} animate={{opacity:1}} className="absolute inset-0 container mx-auto px-4 h-full flex gap-1 pointer-events-none">
                       {[...Array(12)].map((_, i) => (
                           <div key={i} className="flex-1 bg-ethio-cyan/20 h-full border-x border-ethio-cyan/30"></div>
                       ))}
                   </motion.div>
                )}

                {/* Golden Ratio */}
                {mode === 'golden' && (
                   <motion.div initial={{opacity:0}} animate={{opacity:1}} className="absolute inset-0 pointer-events-none p-4">
                       <svg viewBox="0 0 100 62" className="w-full h-full stroke-ethio-gold stroke-[0.5] fill-none">
                           <rect x="0" y="0" width="100" height="62" />
                           <path d="M 61.8 0 L 61.8 62 M 61.8 38.2 L 100 38.2 M 85.4 38.2 L 85.4 62" opacity="0.5" />
                           <path d="M 0 62 A 61.8 61.8 0 0 1 61.8 0 M 61.8 0 A 38.2 38.2 0 0 1 100 38.2 M 100 38.2 A 23.6 23.6 0 0 1 76.4 62" strokeWidth="1" />
                       </svg>
                       <div className="absolute top-1/2 left-1/3 text-ethio-gold font-serif text-4xl opacity-50">φ</div>
                   </motion.div>
                )}
            </div>

            <div>
                <h4 className="font-serif text-2xl text-ethio-ink dark:text-white mb-4">
                    {mode === 'thirds' && 'The Rule of Thirds'}
                    {mode === '12col' && 'The 12-Column Grid'}
                    {mode === 'golden' && 'The Golden Ratio (Fibonacci)'}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                    {mode === 'thirds' && 'For photography and simple layouts. The human eye is naturally drawn to the intersection points (dots). Never place your subject dead center; place them on a line.'}
                    {mode === '12col' && 'The standard for web design. Divide your screen into 12 vertical stripes. Elements should span 2, 3, 4, or 6 columns. This guarantees mathematical alignment.'}
                    {mode === 'golden' && 'Nature\'s secret formula (1 : 1.618). Found in seashells, flowers, and the Apple logo. Use this ratio to size your headings vs body text for perfect harmony.'}
                </p>
                <div className="flex flex-wrap gap-2">
                    <button 
                        onClick={() => setMode('thirds')} 
                        className={`px-4 py-2 text-xs font-bold uppercase rounded transition-colors ${mode === 'thirds' ? 'bg-ethio-tibeb text-white' : 'bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-400'}`}
                    >
                        Rule of Thirds
                    </button>
                    <button 
                        onClick={() => setMode('golden')} 
                        className={`px-4 py-2 text-xs font-bold uppercase rounded transition-colors ${mode === 'golden' ? 'bg-ethio-gold text-white' : 'bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-400'}`}
                    >
                        Golden Ratio
                    </button>
                    <button 
                        onClick={() => setMode('12col')} 
                        className={`px-4 py-2 text-xs font-bold uppercase rounded transition-colors ${mode === '12col' ? 'bg-ethio-cyan text-black' : 'bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-400'}`}
                    >
                        12-Col Grid
                    </button>
                </div>
            </div>
        </div>
    )
}

// --- TYPE PAIRING GUIDE ---
export const TypePairingGuide: React.FC = () => {
    return (
        <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-serif text-ethio-ink dark:text-white mb-6 flex items-center gap-2">
                <Type size={24} className="text-ethio-gold"/> Typography Pairing
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* BAD Example */}
                <div className="border border-red-500/30 bg-red-50/50 dark:bg-red-900/10 p-6 rounded-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-2 py-1 uppercase">Don't Do This</div>
                    <h4 className="font-serif text-3xl mb-2 text-gray-800 dark:text-gray-200" style={{ fontFamily: 'Times New Roman, serif' }}>The Conflict</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                        Here we have two Serif fonts (Times New Roman header + Georgia body). They are too similar but slightly different. It looks like a mistake, not a choice.
                    </p>
                </div>

                {/* GOOD Example */}
                <div className="border border-green-500/30 bg-green-50/50 dark:bg-green-900/10 p-6 rounded-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-green-600 text-white text-[10px] font-bold px-2 py-1 uppercase">The Golden Rule</div>
                    <h4 className="font-serif text-3xl mb-2 text-gray-900 dark:text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Contrast is Key</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                        Pair a distinct <strong>Serif Header</strong> (Traditional) with a clean <strong>Sans-Serif Body</strong> (Modern). This contrast creates visual interest and hierarchy instantly.
                    </p>
                </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10">
                <h4 className="font-mono text-ethio-tibeb text-xs uppercase tracking-widest mb-4">Amharic Context</h4>
                <div className="p-6 bg-ethio-paper dark:bg-black border border-gray-200 dark:border-white/10 rounded-lg flex flex-col md:flex-row gap-6 items-center">
                    <div className="text-5xl md:text-6xl text-ethio-ink dark:text-white">ሰላም</div>
                    <div className="text-3xl text-gray-400 font-light">+</div>
                    <div className="flex flex-col">
                        <span className="text-4xl font-sans font-bold text-ethio-ink dark:text-white">Hello World</span>
                        <span className="text-xs text-gray-500 uppercase mt-2">Noto Sans Ethiopic + Inter (Geometric Sans)</span>
                    </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                    Amharic letters are naturally ornamental (like Serifs). To make them look high-end, pair them with very clean, geometric English fonts like Inter or Roboto.
                </p>
            </div>
        </div>
    )
}

// --- HYGIENE CHECKLIST ---
export const HygieneChecklist: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/5 dark:to-white/10 border border-gray-200 dark:border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-serif text-ethio-ink dark:text-white mb-6 flex items-center gap-2">
                <ShieldCheck size={24} className="text-green-500"/> Professional Hygiene & Ethics
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h4 className="font-bold text-ethio-ink dark:text-white mb-4 flex items-center gap-2"><AlertTriangle size={18} className="text-red-500"/> Copyright Warning</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Never "Right Click -> Save" from Google Images. If you use a copyrighted image for a client, they can be sued.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <Check size={16} className="text-green-500"/> 
                            <span><strong>Unsplash / Pexels:</strong> 100% Safe & Free</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <Check size={16} className="text-green-500"/> 
                            <span><strong>Google Fonts:</strong> 100% Safe & Free</span>
                        </li>
                         <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <X size={16} className="text-red-500"/> 
                            <span><strong>Pinterest:</strong> Inspiration ONLY. Do not use.</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-ethio-ink dark:text-white mb-4 flex items-center gap-2"><FileText size={18} className="text-blue-500"/> File Naming</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Amateurs name files randomly. Professionals name them logically so clients (and you) don't get lost.
                    </p>
                    <div className="space-y-3">
                        <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded border border-red-200 dark:border-red-900/30 flex items-center justify-between">
                             <span className="font-mono text-xs text-red-600 dark:text-red-400">logo_final_real_FINAL2.png</span>
                             <X size={16} className="text-red-500"/>
                        </div>
                        <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded border border-green-200 dark:border-green-900/30 flex items-center justify-between">
                             <span className="font-mono text-xs text-green-600 dark:text-green-400">ClientName_Logo_v3_Print.pdf</span>
                             <Check size={16} className="text-green-500"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// --- VECTOR VS RASTER VISUALIZER (NEXT LEVEL) ---
export const VectorVsRaster: React.FC = () => {
    const [zoomLevel, setZoomLevel] = useState(1); // 1 to 10
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Draw the "Raster" low-res image whenever zoom changes
    useEffect(() => {
        if (!canvasRef.current) return;
        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;
        
        // Clear
        ctx.clearRect(0, 0, 300, 300);
        ctx.imageSmoothingEnabled = false; // The magic line for pixelation

        // Draw a circle and triangle at LOW resolution (e.g., 32x32 canvas scaled up)
        const size = 32; 
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = size;
        tempCanvas.height = size;
        const tempCtx = tempCanvas.getContext('2d');
        if (tempCtx) {
            // Background
            tempCtx.fillStyle = '#121212';
            tempCtx.fillRect(0,0,size,size);
            
            // Circle
            tempCtx.fillStyle = '#FF0099';
            tempCtx.beginPath();
            tempCtx.arc(size/2, size/2, size/3, 0, Math.PI*2);
            tempCtx.fill();

            // Triangle
            tempCtx.fillStyle = '#00FFFF';
            tempCtx.beginPath();
            tempCtx.moveTo(size/2, size/4);
            tempCtx.lineTo(size/1.2, size/1.2);
            tempCtx.lineTo(size/4, size/1.2);
            tempCtx.fill();
        }

        // Now draw the tiny image onto the main canvas, scaled by zoom
        // We simulate "raster view" by drawing a small bitmap largely
        const displaySize = 300 * zoomLevel;
        const offset = (300 - displaySize) / 2;
        
        ctx.drawImage(tempCanvas, offset, offset, displaySize, displaySize);

    }, [zoomLevel]);

    return (
        <div className="flex flex-col gap-6" ref={containerRef}>
            <div className="flex justify-between items-center bg-gray-100 dark:bg-white/5 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                    <ZoomIn size={20} className="text-ethio-tibeb"/>
                    <span className="font-mono text-xs uppercase tracking-widest text-ethio-ink dark:text-white">Zoom Level: {zoomLevel.toFixed(1)}x</span>
                </div>
                <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    step="0.1" 
                    value={zoomLevel} 
                    onChange={(e) => setZoomLevel(parseFloat(e.target.value))}
                    className="w-1/2 md:w-64 accent-ethio-tibeb cursor-pointer"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-80">
                {/* VECTOR SIDE */}
                <div className="relative bg-[#121212] border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden flex items-center justify-center">
                    <div className="absolute top-4 left-4 z-10 bg-ethio-tibeb text-white px-3 py-1 text-xs font-bold rounded shadow-lg">VECTOR (SVG)</div>
                    <div className="absolute bottom-4 left-4 z-10 text-[10px] text-gray-400 bg-black/50 px-2 rounded">Always Crisp</div>
                    
                    {/* SVG container scales the coordinate system, not the pixels */}
                    <div style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.1s linear' }} className="origin-center">
                        <svg width="100" height="100" viewBox="0 0 32 32">
                             {/* Background matching raster */}
                             <rect width="32" height="32" fill="#121212" />
                             <circle cx="16" cy="16" r="10.6" fill="#FF0099" />
                             <path d="M 16 8 L 26.6 26.6 L 8 26.6 Z" fill="#00FFFF" style={{ mixBlendMode: 'screen' }} />
                        </svg>
                    </div>
                </div>

                {/* RASTER SIDE */}
                <div className="relative bg-[#121212] border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden flex items-center justify-center">
                    <div className="absolute top-4 left-4 z-10 bg-gray-700 text-white px-3 py-1 text-xs font-bold rounded shadow-lg">RASTER (JPG)</div>
                    <div className="absolute bottom-4 left-4 z-10 text-[10px] text-gray-400 bg-black/50 px-2 rounded">Pixelates on Zoom</div>
                    <canvas 
                        ref={canvasRef} 
                        width="300" 
                        height="300" 
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
            <p className="text-center text-sm text-gray-500 italic">Drag the slider. Notice how Vector shapes stay smooth math, while Raster images reveal their square pixels.</p>
        </div>
    )
}

// --- WORKFLOW VISUALIZER ---
export const WorkflowVisualizer: React.FC = () => {
   return (
      <div className="overflow-x-auto pb-8">
         <div className="flex min-w-[800px] justify-between relative px-8 pt-8">
            {/* Connecting Line */}
            <div className="absolute top-14 left-0 right-0 h-1 bg-gray-200 dark:bg-white/10 z-0"></div>

            {[
               { icon: <Briefcase size={20}/>, title: '1. Brief', desc: 'Ask Questions. Define Goal.' },
               { icon: <Search size={20}/>, title: '2. Research', desc: 'Moodboards. Competitors.' },
               { icon: <PenTool size={20}/>, title: '3. Sketch', desc: 'Paper first. Generate ideas.' },
               { icon: <Monitor size={20}/>, title: '4. Design', desc: 'Digitize in Figma/Ai.' },
               { icon: <Send size={20}/>, title: '5. Deliver', desc: 'Export Files & Invoice.' },
            ].map((step, i) => (
               <motion.div 
                    key={i} 
                    className="relative z-10 flex flex-col items-center text-center w-40 group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 rounded-full bg-ethio-paper dark:bg-ethio-charcoal border-4 border-gray-100 dark:border-white/10 flex items-center justify-center mb-4 group-hover:border-ethio-tibeb group-hover:bg-ethio-tibeb/10 transition-all shadow-xl">
                     <span className="text-gray-500 group-hover:text-ethio-tibeb transition-colors">{step.icon}</span>
                  </div>
                  <h4 className="font-serif font-bold text-lg text-ethio-ink dark:text-white mb-1">{step.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 px-2 group-hover:text-ethio-tibeb transition-colors">{step.desc}</p>
               </motion.div>
            ))}
         </div>
      </div>
   )
}

// --- PRINT VS SCREEN VISUALIZER ---
export const PrintVsScreen: React.FC = () => {
   const [mode, setMode] = useState<'screen' | 'print'>('screen');

   return (
      <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden p-6 transition-colors duration-300">
         <h3 className="font-serif text-xl mb-4 flex items-center gap-2 text-ethio-ink dark:text-white">
            {mode === 'screen' ? <Monitor size={20} className="text-ethio-cyan"/> : <Printer size={20} className="text-ethio-tibeb"/>} 
            {mode === 'screen' ? 'Digital Mode (Screen)' : 'Physical Mode (Paper)'}
         </h3>
         
         <div className="flex gap-4 mb-6">
            <button onClick={() => setMode('screen')} className={`flex-1 py-2 rounded text-xs font-bold uppercase border transition-all ${mode === 'screen' ? 'bg-ethio-cyan text-black border-ethio-cyan shadow-[0_0_15px_rgba(0,255,255,0.3)]' : 'border-gray-600 text-gray-500 hover:border-gray-400'}`}>Screen (RGB)</button>
            <button onClick={() => setMode('print')} className={`flex-1 py-2 rounded text-xs font-bold uppercase border transition-all ${mode === 'print' ? 'bg-ethio-tibeb text-white border-ethio-tibeb shadow-[0_0_15px_rgba(255,0,153,0.3)]' : 'border-gray-600 text-gray-500 hover:border-gray-400'}`}>Print (CMYK)</button>
         </div>

         <div className="grid grid-cols-2 gap-4">
            <AnimatePresence mode="wait">
                <motion.div 
                    key={mode + '1'}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="bg-gray-100 dark:bg-black/30 p-4 rounded text-xs border border-transparent dark:border-white/5"
                >
                    <span className="text-gray-500 block mb-1">Color Model</span>
                    <span className={`font-bold text-lg ${mode === 'screen' ? 'text-ethio-cyan' : 'text-ethio-tibeb'}`}>
                        {mode === 'screen' ? 'RGB (Light)' : 'CMYK (Ink)'}
                    </span>
                </motion.div>
                <motion.div 
                    key={mode + '2'}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="bg-gray-100 dark:bg-black/30 p-4 rounded text-xs border border-transparent dark:border-white/5"
                >
                    <span className="text-gray-500 block mb-1">Resolution</span>
                    <span className="font-bold text-lg text-ethio-ink dark:text-white">
                        {mode === 'screen' ? '72 PPI' : '300 DPI'}
                    </span>
                </motion.div>
                <motion.div 
                    key={mode + '3'}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    className="bg-gray-100 dark:bg-black/30 p-4 rounded text-xs border border-transparent dark:border-white/5"
                >
                    <span className="text-gray-500 block mb-1">Units</span>
                    <span className="font-bold text-lg text-ethio-ink dark:text-white">
                        {mode === 'screen' ? 'Pixels (px)' : 'Inches / mm'}
                    </span>
                </motion.div>
                <motion.div 
                    key={mode + '4'}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                    className="bg-gray-100 dark:bg-black/30 p-4 rounded text-xs border border-transparent dark:border-white/5"
                >
                    <span className="text-gray-500 block mb-1">Primary Tool</span>
                    <span className="font-bold text-lg text-ethio-ink dark:text-white">
                        {mode === 'screen' ? 'Figma / XD' : 'InDesign / Ai'}
                    </span>
                </motion.div>
            </AnimatePresence>
         </div>
      </div>
   )
}

// --- TYPOGRAPHY ANATOMY ---
export const TypographyAnatomy: React.FC = () => {
   return (
      <div className="relative h-48 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl flex items-center justify-center overflow-hidden group cursor-default">
         {/* Baseline */}
         <div className="absolute w-full h-px bg-ethio-tibeb top-[65%] left-0 transition-all group-hover:h-0.5 group-hover:shadow-[0_0_10px_#FF0099]"></div>
         <span className="absolute left-2 top-[66%] text-[10px] text-ethio-tibeb uppercase font-bold">Baseline</span>
         
         {/* X-Height */}
         <div className="absolute w-full h-px bg-ethio-cyan top-[45%] left-0 border-dashed border-t border-transparent transition-all group-hover:border-solid group-hover:bg-ethio-cyan"></div>
         <span className="absolute left-2 top-[46%] text-[10px] text-ethio-cyan uppercase font-bold">x-height</span>

         <div className="font-serif text-8xl md:text-9xl relative z-10 text-ethio-ink dark:text-white flex gap-1 pointer-events-none">
            <span className="text-ethio-ink dark:text-white">D</span>
            <span className="text-ethio-ink dark:text-white">e</span>
            <span className="text-ethio-ink dark:text-white">s</span>
            <span className="text-ethio-ink dark:text-white">i</span>
            <span className="text-ethio-ink dark:text-white">g</span>
            <span className="text-ethio-ink dark:text-white">n</span>
         </div>
      </div>
   )
}

// --- COLOR THEORY (INTERACTIVE) ---
export const ColorTheoryWheel: React.FC = () => {
   const [copied, setCopied] = useState<string | null>(null);

   const copyToClipboard = (hex: string) => {
      navigator.clipboard.writeText(hex);
      setCopied(hex);
      setTimeout(() => setCopied(null), 2000);
   };

   return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
              { name: 'Teff Cream', hex: '#F5F5DC', use: '60% Background' },
              { name: 'Coffee Bean', hex: '#4B3621', use: 'Text / Contrast' },
              { name: 'Axum Gold', hex: '#C5A059', use: 'Prestige' },
              { name: 'Electric Tibeb', hex: '#FF0099', use: '30% Brand Color' },
              { name: 'Nile Cyan', hex: '#00FFFF', use: '10% Accent' },
              { name: 'Red Clay', hex: '#E97451', use: 'Alert' },
              { name: 'Charcoal', hex: '#121212', use: 'Dark Mode Bg' },
              { name: 'Shemma White', hex: '#FFFFFF', use: 'Negative Space' },
              // NEW DARK PALETTE
              { name: 'Abyssinian Night', hex: '#0B0C15', use: 'Dark UI Base' },
              { name: 'Lalibela Stone', hex: '#2D2D35', use: 'Dark UI Card' },
              { name: 'Midnight Blue', hex: '#1E1E2E', use: 'Code Editor' },
              { name: 'Nebula Purple', hex: '#7B61FF', use: 'SaaS Primary' },
          ].map((color, i) => (
              <motion.button 
                key={i} 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => copyToClipboard(color.hex)}
                className="relative bg-white dark:bg-white/5 rounded-lg overflow-hidden border border-gray-200 dark:border-white/5 flex flex-col shadow-sm dark:shadow-none text-left group"
              >
                 <div className="h-16 w-full relative" style={{ backgroundColor: color.hex }}>
                     {/* Overlay for Copy Action */}
                     <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                         <Copy className="text-white drop-shadow-md" size={20} />
                     </div>
                     {/* Copied Feedback */}
                     <AnimatePresence>
                         {copied === color.hex && (
                             <motion.div 
                                initial={{ opacity: 0, scale: 0.5 }} 
                                animate={{ opacity: 1, scale: 1 }} 
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-ethio-ink/80 flex items-center justify-center backdrop-blur-sm"
                             >
                                 <span className="text-white text-xs font-bold flex items-center gap-1">
                                     <Check size={12} /> Copied!
                                 </span>
                             </motion.div>
                         )}
                     </AnimatePresence>
                 </div>
                 <div className="p-3">
                    <p className="font-serif text-sm text-ethio-ink dark:text-white mb-1 font-bold">{color.name}</p>
                    <p className="text-[10px] text-gray-500 font-mono uppercase bg-gray-100 dark:bg-black/30 inline-block px-1 rounded">{color.hex}</p>
                    <p className="text-[10px] text-ethio-tibeb mt-2 font-medium">{color.use}</p>
                 </div>
              </motion.button>
          ))}
      </div>
   )
}

// --- MARKET CHART (NEW) ---
const MarketChart: React.FC = () => {
    return (
        <div className="w-full h-64 flex items-end gap-2 md:gap-4 font-mono text-xs">
            {[
                { label: 'Logo', local: 50, intl: 500, localH: '10%', intlH: '80%' },
                { label: 'Web UI', local: 200, intl: 1200, localH: '25%', intlH: '95%' },
                { label: 'Social', local: 100, intl: 400, localH: '15%', intlH: '50%' },
            ].map((item, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end items-center gap-2 h-full group">
                    <div className="flex items-end gap-1 w-full justify-center h-full">
                        {/* Local Bar */}
                        <div className="w-full max-w-[20px] bg-gray-400/30 rounded-t relative group-hover:bg-gray-400/50 transition-colors" style={{ height: item.localH }}>
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-gray-400">${item.local}</span>
                        </div>
                        {/* Intl Bar */}
                        <div className="w-full max-w-[20px] bg-ethio-tibeb rounded-t relative group-hover:bg-ethio-cyan transition-colors" style={{ height: item.intlH }}>
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-ethio-tibeb font-bold">${item.intl}</span>
                        </div>
                    </div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-tight md:tracking-widest text-center">{item.label}</span>
                </div>
            ))}
        </div>
    );
}

// --- TOOLKIT COMPARISON ---
export const ToolkitComparison: React.FC = () => {
    return (
        <div className="flex flex-col gap-12">
            {/* 1. THE TOOLS */}
            <div className="w-full overflow-x-auto rounded-xl border border-gray-200 dark:border-white/10">
                <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-white/5">
                    <thead>
                        <tr className="border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/20">
                            <th className="py-4 px-6 font-serif text-ethio-ink dark:text-white text-lg">Tool</th>
                            <th className="py-4 px-6 font-mono text-gray-500 uppercase tracking-widest text-xs">Cost</th>
                            <th className="py-4 px-6 font-mono text-gray-500 uppercase tracking-widest text-xs hidden md:table-cell">Primary Use</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-white/5">
                        {[
                            { name: 'Figma', code: 'Fg', color: '#F24E1E', type: 'Free / Paid', desc: 'Web Design, UI, Layout' },
                            { name: 'Photoshop', code: 'Ps', color: '#31A8FF', type: 'Paid', desc: 'Photo Editing, Manipulation' },
                            { name: 'Illustrator', code: 'Ai', color: '#FF9A00', type: 'Paid', desc: 'Logos, Vectors, Icons' },
                            { name: 'InDesign', code: 'Id', color: '#FF3366', type: 'Paid', desc: 'Books, Magazines, Print' },
                            { name: 'Canva', code: 'Cn', color: '#00C4CC', type: 'Freemium', desc: 'Quick Social Media (Beginners)' },
                            { name: 'After Effects', code: 'Ae', color: '#9999FF', type: 'Paid', desc: 'Motion Graphics' },
                            { name: 'Blender', code: 'Bl', color: '#EA7600', type: 'Free (OSS)', desc: '3D Modeling & Animation' },
                        ].map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <td className="py-4 px-6 font-bold text-ethio-ink dark:text-white flex items-center gap-3">
                                    <div className="w-8 h-8 rounded flex items-center justify-center font-bold text-white text-xs" style={{ backgroundColor: row.color }}>
                                        {row.code}
                                    </div>
                                    {row.name}
                                </td>
                                <td className="py-4 px-6">
                                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${row.type.includes('Free') ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                                        {row.type}
                                    </span>
                                </td>
                                <td className="py-4 px-6 hidden md:table-cell">{row.desc}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* 2. THE MARKET (EARNINGS) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 <div className="bg-ethio-tibeb/5 border border-ethio-tibeb/10 rounded-xl p-8">
                    <h4 className="font-serif text-2xl text-ethio-ink dark:text-white mb-6 flex items-center gap-2">
                        <DollarSign className="text-ethio-tibeb"/> The Market (2025)
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">
                        Earnings Gap: <span className="text-gray-500">Local (Grey)</span> vs <span className="text-ethio-tibeb font-bold">International (Pink)</span>.
                        The goal is to live in Addis but earn in USD.
                    </p>
                    <MarketChart />
                 </div>

                 <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-8 flex flex-col justify-center text-center">
                    <p className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-4">Strategic Advice</p>
                    <h5 className="font-serif text-xl md:text-2xl text-ethio-ink dark:text-white mb-4">"Don't sell time. Sell value."</h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        A logo might take you 2 hours, but if it helps a business earn millions, it is worth thousands. Never charge hourly for creative work unless it is simple production.
                    </p>
                 </div>
            </div>
        </div>
    );
};

// --- VECTOR MASTERCLASS MODAL (Interactive Lesson) ---
export const VectorMasterclassModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [layer, setLayer] = useState<'wireframe' | 'shape' | 'styled'>('wireframe');
    
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-ethio-charcoal/90 backdrop-blur-md flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div 
                    initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
                    className="bg-ethio-paper dark:bg-[#1a1a1a] w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-200 dark:border-white/10"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Left Panel: Sidebar */}
                    <div className="w-full md:w-1/3 bg-gray-50 dark:bg-black/40 p-8 border-r border-gray-200 dark:border-white/10 flex flex-col">
                        <h2 className="font-serif text-3xl mb-2 text-ethio-ink dark:text-white">Vector Anatomy</h2>
                        <p className="text-xs text-gray-500 mb-8 uppercase tracking-widest">Deconstructing Flat Art</p>
                        
                        <div className="flex-1 space-y-4">
                            <button onClick={() => setLayer('wireframe')} className={`w-full text-left p-4 rounded-lg border transition-all ${layer === 'wireframe' ? 'bg-ethio-tibeb text-white border-ethio-tibeb' : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10'}`}>
                                <div className="flex items-center gap-2 mb-1"><Grid size={16}/> 1. The Geometry</div>
                                <p className="text-[10px] opacity-80">Everything starts as simple shapes. Circles, Rectangles, and Triangles. No details yet.</p>
                            </button>
                            <button onClick={() => setLayer('shape')} className={`w-full text-left p-4 rounded-lg border transition-all ${layer === 'shape' ? 'bg-ethio-tibeb text-white border-ethio-tibeb' : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10'}`}>
                                <div className="flex items-center gap-2 mb-1"><PenToolIcon size={16}/> 2. The Path</div>
                                <p className="text-[10px] opacity-80">We merge shapes and use the Pen Tool to create the silhouette. This is the "Vector".</p>
                            </button>
                            <button onClick={() => setLayer('styled')} className={`w-full text-left p-4 rounded-lg border transition-all ${layer === 'styled' ? 'bg-ethio-tibeb text-white border-ethio-tibeb' : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10'}`}>
                                <div className="flex items-center gap-2 mb-1"><Feather size={16}/> 3. The Style</div>
                                <p className="text-[10px] opacity-80">Finally, we add gradients, patterns (Tibeb), and shadows to bring it to life.</p>
                            </button>
                        </div>
                        
                        <button onClick={onClose} className="mt-8 py-3 w-full border border-gray-300 dark:border-white/20 rounded hover:bg-gray-100 dark:hover:bg-white/5 text-xs font-bold uppercase">
                            Close Lesson
                        </button>
                    </div>

                    {/* Right Panel: Canvas */}
                    <div className="w-full md:w-2/3 bg-white dark:bg-[#121212] p-8 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                        
                        <div className="w-64 h-64 md:w-96 md:h-96 relative transition-all duration-500">
                             <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
                                  <defs>
                                      <linearGradient id="skin" x1="0%" y1="0%" x2="0%" y2="100%">
                                          <stop offset="0%" stopColor="#8D5524" />
                                          <stop offset="100%" stopColor="#6F431B" />
                                      </linearGradient>
                                  </defs>

                                  {/* --- LAYER 1: WIREFRAME --- */}
                                  <motion.g 
                                      initial={false}
                                      animate={{ opacity: layer === 'wireframe' ? 1 : 0.1 }}
                                  >
                                      {/* Head Circle */}
                                      <circle cx="100" cy="95" r="35" fill="none" stroke="#FF0099" strokeWidth="1" strokeDasharray="4 4" />
                                      {/* Neck Rect */}
                                      <rect x="90" y="120" width="20" height="30" fill="none" stroke="#FF0099" strokeWidth="1" strokeDasharray="4 4" />
                                      {/* Body shape */}
                                      <path d="M 50 200 Q 50 140 100 140 Q 150 140 150 200" fill="none" stroke="#FF0099" strokeWidth="1" strokeDasharray="4 4" />
                                  </motion.g>

                                  {/* --- LAYER 2: SHAPE (FLAT COLOR) --- */}
                                  <motion.g 
                                      initial={false}
                                      animate={{ opacity: layer === 'shape' || layer === 'styled' ? 1 : 0 }}
                                  >
                                      {/* Dress Base */}
                                      <path d="M 50 200 Q 50 140 100 140 Q 150 140 150 200 Z" fill={layer === 'styled' ? "#E0E0E0" : "#CCCCCC"} />
                                      {/* Neck */}
                                      <rect x="90" y="120" width="20" height="30" fill="#8D5524" />
                                      {/* Head */}
                                      <ellipse cx="100" cy="95" rx="35" ry="42" fill={layer === 'styled' ? "url(#skin)" : "#8D5524"} />
                                      {/* Hair Base */}
                                      <path d="M 65 95 Q 40 110 55 140" stroke="#121212" strokeWidth="6" fill="none"/>
                                      <path d="M 135 95 Q 160 110 145 140" stroke="#121212" strokeWidth="6" fill="none"/>
                                      <path d="M 100 50 Q 70 60 65 95" stroke="#121212" strokeWidth="10" fill="none"/>
                                      <path d="M 100 50 Q 130 60 135 95" stroke="#121212" strokeWidth="10" fill="none"/>
                                      <circle cx="100" cy="50" r="15" fill="#121212" />
                                  </motion.g>

                                  {/* --- LAYER 3: STYLED (DETAILS) --- */}
                                  <motion.g 
                                      initial={false}
                                      animate={{ opacity: layer === 'styled' ? 1 : 0 }}
                                  >
                                       {/* Tibeb Pattern */}
                                       <g transform="translate(0, 5)">
                                         <path d="M 60 190 L 140 190" stroke="#FF0099" strokeWidth="5"/>
                                         <path d="M 62 182 L 138 182" stroke="#00FFFF" strokeWidth="3"/>
                                         <path d="M 65 176 L 135 176" stroke="#C5A059" strokeWidth="2" strokeDasharray="1 2"/>
                                      </g>
                                      {/* Jewelry */}
                                      <circle cx="100" cy="130" r="2" fill="#C5A059" />
                                      <path d="M 100 130 L 100 145" stroke="#C5A059" strokeWidth="0.5"/>
                                      <circle cx="100" cy="145" r="4" fill="none" stroke="#C5A059" strokeWidth="1"/>
                                      {/* Facial Features */}
                                      <path d="M 98 100 L 100 105 L 102 100" fill="#6F431B"/> 
                                  </motion.g>
                             </svg>
                        </div>
                        
                        <div className="absolute bottom-6 right-6 text-xs font-mono text-gray-400">
                            {layer === 'wireframe' ? 'View: Structure' : layer === 'shape' ? 'View: Silhouette' : 'View: Final Render'}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

// --- CUSTOM ILLUSTRATION DEMO (FLAT VECTOR) ---
export const EthioFlatVectorDemo: React.FC<{onStart: () => void}> = ({onStart}) => {
   return (
      <div className="w-full h-80 flex items-center justify-center relative overflow-hidden group hover:cursor-pointer transition-all" onClick={onStart}>
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
              <defs>
                  <linearGradient id="skin" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#8D5524" />
                      <stop offset="100%" stopColor="#6F431B" />
                  </linearGradient>
                  <linearGradient id="cloth" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#E0E0E0" />
                  </linearGradient>
                  <filter id="shadow">
                      <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                  </filter>
              </defs>
              
              {/* Background Abstract */}
              <circle cx="100" cy="100" r="85" fill="#FDFBF7" stroke="#C5A059" strokeWidth="1" strokeDasharray="2 4" />
              <path d="M 0 200 L 200 0" stroke="#FF0099" strokeWidth="0.5" opacity="0.1"/>
              <path d="M 0 0 L 200 200" stroke="#00FFFF" strokeWidth="0.5" opacity="0.1"/>

              {/* Shoulders / Dress (Shemma) */}
              <path d="M 50 200 Q 50 140 100 140 Q 150 140 150 200 Z" fill="url(#cloth)" filter="url(#shadow)" />
              
              {/* Complex Tibeb Pattern */}
              <g transform="translate(0, 5)">
                 <path d="M 60 190 L 140 190" stroke="#FF0099" strokeWidth="5"/>
                 <path d="M 60 190 L 140 190" stroke="#121212" strokeWidth="5" strokeDasharray="2 4"/>
                 <path d="M 62 182 L 138 182" stroke="#00FFFF" strokeWidth="3"/>
                 <path d="M 65 176 L 135 176" stroke="#C5A059" strokeWidth="2" strokeDasharray="1 2"/>
              </g>

              {/* Neck & Head */}
              <rect x="90" y="120" width="20" height="30" fill="#8D5524" />
              <ellipse cx="100" cy="95" rx="35" ry="42" fill="url(#skin)" filter="url(#shadow)" />
              
              {/* Hair (Complex Shuruba) */}
              <g fill="#121212">
                 {/* Top Bun */}
                 <circle cx="100" cy="50" r="15" />
                 {/* Braids */}
                 <path d="M 65 95 Q 40 110 55 140" stroke="#121212" strokeWidth="6" fill="none" strokeLinecap="round"/>
                 <path d="M 135 95 Q 160 110 145 140" stroke="#121212" strokeWidth="6" fill="none" strokeLinecap="round"/>
                 <path d="M 100 50 Q 70 60 65 95" stroke="#121212" strokeWidth="10" fill="none"/>
                 <path d="M 100 50 Q 130 60 135 95" stroke="#121212" strokeWidth="10" fill="none"/>
              </g>
              
              {/* Minimalist Facial Features */}
              <path d="M 98 100 L 100 105 L 102 100" fill="#6F431B"/> 
              <path d="M 92 115 Q 100 120 108 115" stroke="#4B3621" strokeWidth="1.5" fill="none" strokeLinecap="round"/> 
              
              {/* Jewelry */}
              <circle cx="100" cy="130" r="2" fill="#C5A059" />
              <path d="M 100 130 L 100 145" stroke="#C5A059" strokeWidth="0.5"/>
              <circle cx="100" cy="145" r="4" fill="none" stroke="#C5A059" strokeWidth="1"/>

              {/* Coffee Cup (Jebena style handle hint) */}
              <g transform="translate(140, 150) rotate(-5)">
                  <path d="M 0 0 L 0 20 Q 10 25 20 20 L 20 0 Z" fill="#2A2A2A" stroke="#C5A059" strokeWidth="0.5"/>
                  <path d="M 20 5 Q 28 10 20 15" stroke="#C5A059" strokeWidth="2" fill="none" />
                  <path d="M 5 -10 Q 10 -20 15 -10" stroke="#C5A059" strokeWidth="1" fill="none" opacity="0.6">
                     <animate attributeName="d" values="M 5 -10 Q 10 -20 15 -10; M 5 -15 Q 10 -25 15 -15; M 5 -10 Q 10 -20 15 -10" dur="3s" repeatCount="indefinite"/>
                     <animate attributeName="opacity" values="0.6; 0; 0.6" dur="3s" repeatCount="indefinite"/>
                  </path>
              </g>

              {/* Label */}
              <text x="100" y="190" textAnchor="middle" fontSize="6" fontFamily="sans-serif" fill="#C5A059" letterSpacing="3" opacity="0.8">CLICK TO DECONSTRUCT</text>
          </svg>
      </div>
   )
}

export const SurfaceCodeDiagram = () => null;
export const TransformerDecoderDiagram = () => null;
export const PerformanceMetricDiagram = () => null;
