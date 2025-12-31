'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { whoOptions, topicOptions, vibeOptions, getScript } from '@/data/boundaryScripts';
import { Button } from '@/components/ui/Button';
import { Copy, Share2 } from 'lucide-react';
import { toPng } from 'html-to-image';
import download from 'downloadjs';

export default function BoundaryGenerator() {
    const [who, setWho] = useState(whoOptions[0].id);
    const [topic, setTopic] = useState(topicOptions[0].id);
    const [vibe, setVibe] = useState(vibeOptions[0].id);
    const [generatedScript, setGeneratedScript] = useState('');
    const [isGenerated, setIsGenerated] = useState(false);

    const handleGenerate = () => {
        setIsGenerated(false);
        setTimeout(() => {
            const text = getScript(who, topic, vibe);
            setGeneratedScript(text);
            setIsGenerated(true);
        }, 200);
    };

    const handleShare = async () => {
        const node = document.getElementById('script-card');
        if (node) {
            try {
                const dataUrl = await toPng(node);
                download(dataUrl, 'tender-boundary.png');
            } catch (e) {
                console.error('Failed to generate image', e);
            }
        }
    };

    return (
        <div className="container mx-auto px-6 py-12 max-w-4xl">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
                    Interactive Boundary Generator
                </h1>
                <p className="text-lg text-stone-600">
                    Tell us the situation, choose your vibe, and get the perfect script.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Controls */}
                <div className="space-y-8 bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                    <div>
                        <label className="block text-sm font-bold text-stone-900 mb-3 uppercase tracking-wider">Who is it?</label>
                        <div className="flex flex-wrap gap-2">
                            {whoOptions.map(opt => (
                                <button
                                    key={opt.id}
                                    onClick={() => setWho(opt.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${who === opt.id
                                        ? 'bg-stone-900 text-white shadow-md transform scale-105'
                                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                                        }`}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-stone-900 mb-3 uppercase tracking-wider">The Issue</label>
                        <div className="flex flex-wrap gap-2">
                            {topicOptions.map(opt => (
                                <button
                                    key={opt.id}
                                    onClick={() => setTopic(opt.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${topic === opt.id
                                        ? 'bg-stone-900 text-white shadow-md transform scale-105'
                                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                                        }`}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-stone-900 mb-3 uppercase tracking-wider">The Vibe</label>
                        <div className="grid grid-cols-1 gap-2">
                            {vibeOptions.map(opt => (
                                <button
                                    key={opt.id}
                                    onClick={() => setVibe(opt.id)}
                                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all text-left border-2 ${vibe === opt.id
                                        ? 'border-primary bg-primary/10 text-stone-900'
                                        : 'border-transparent bg-stone-50 text-stone-600 hover:bg-stone-100'
                                        }`}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <Button onClick={handleGenerate} size="lg" className="w-full h-14 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
                        Generate Script
                    </Button>
                </div>

                {/* Output */}
                <div className="flex flex-col items-center justify-center min-h-[400px]">
                    <AnimatePresence mode='wait'>
                        {isGenerated ? (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, type: "spring" }}
                                className="w-full"
                            >
                                <div
                                    id="script-card"
                                    className="bg-gradient-to-br from-[#FFFBF5] to-[#FDFCDC] p-6 md:p-10 rounded-[2rem] border-8 border-white shadow-2xl relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
                                    <div className="mb-6 opacity-50 flex items-center justify-center">
                                        <img src="/logo.png" className="w-8 h-8 opacity-50" alt="" />
                                    </div>
                                    <p className="font-serif text-3xl md:text-4xl text-stone-800 leading-tight text-center mb-8">
                                        "{generatedScript}"
                                    </p>
                                    <div className="flex justify-center">
                                        <span className="text-xs font-bold tracking-widest uppercase text-stone-400">Tender Guidance</span>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-6 justify-center">
                                    <Button variant="outline" onClick={() => navigator.clipboard.writeText(generatedScript)}>
                                        <Copy className="w-4 h-4 mr-2" /> Copy Text
                                    </Button>
                                    <Button variant="secondary" onClick={handleShare}>
                                        <Share2 className="w-4 h-4 mr-2" /> Save Image
                                    </Button>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="text-stone-300 text-center">
                                <div className="w-24 h-24 bg-stone-100 rounded-full mx-auto mb-4 animate-pulse"></div>
                                <p>Waiting for your input...</p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
