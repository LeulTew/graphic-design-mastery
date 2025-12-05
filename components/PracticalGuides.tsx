
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Monitor, Folder, Image, FileText, Download, Smartphone, Eye } from 'lucide-react';

// --- WHITE SPACE VISUALIZER ---
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

// --- PRODUCTION GUIDE (Exports & Folders) ---
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

// --- RESPONSIVE GUIDE ---
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

// --- ACCESSIBILITY CHECK ---
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
