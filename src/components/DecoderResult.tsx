import React, { useMemo, memo } from 'react';
import { motion } from 'motion/react';
import { DecoderResult, Product } from '../types';
import { PRODUCTS } from '../data';
import { Sparkles, Brain, Zap, Target, Shield, ArrowRight, RefreshCw, Award, Layers, Check, ShoppingBag } from 'lucide-react';

interface DecoderResultProps {
  result: DecoderResult;
  onReset: () => void;
}

function DecoderResultView({ result, onReset }: DecoderResultProps) {
  // Find recommended product details
  const recommendedProduct = useMemo(() => {
    return PRODUCTS.find(p => p.id === result.recommendedProductId) || PRODUCTS[0];
  }, [result.recommendedProductId]);

  // Parse paragraphs for rich, luxury formatting
  const { quoteParagraph, otherParagraphs, cleanCtaText } = useMemo(() => {
    const paragraphs = result.archetypeDesc.split('\n\n');
    const quote = paragraphs.find(p => p.trim().startsWith('„') || p.trim().startsWith('"') || p.trim().startsWith('”'));
    
    const others = paragraphs.filter(p => {
      const trimmed = p.trim();
      if (trimmed === quote?.trim()) return false;
      if (trimmed.startsWith('[KUP') && trimmed.endsWith(']')) return false;
      return true;
    });

    const ctaParagraph = paragraphs.find(p => p.trim().startsWith('[KUP') && p.trim().endsWith(']'));
    const cleanCta = ctaParagraph 
      ? ctaParagraph.replace('[', '').replace(']', '') 
      : `KUP KOMPLETNY SYSTEM: ${result.bundleTitle || 'REGENERACJA'}`;

    return {
      quoteParagraph: quote,
      otherParagraphs: others,
      cleanCtaText: cleanCta
    };
  }, [result.archetypeDesc, result.bundleTitle]);

  // Calculate bundle details
  const { bundleProducts, standardBundlePrice, discountedBundlePrice, bundleSavings } = useMemo(() => {
    const bundleProductIds = result.bundleProducts || [result.recommendedProductId];
    const products = bundleProductIds
      .map(id => PRODUCTS.find(p => p.id === id))
      .filter((p): p is typeof PRODUCTS[number] => Boolean(p));
    const standardPrice = products.reduce((sum, p) => sum + p.price, 0);
    const discountedPrice = Math.round(standardPrice * 0.80); // 20% Bundle Discount!
    const savings = standardPrice - discountedPrice;

    return {
      bundleProducts: products,
      standardBundlePrice: standardPrice,
      discountedBundlePrice: discountedPrice,
      bundleSavings: savings
    };
  }, [result.bundleProducts, result.recommendedProductId]);

  // Calculate dynamic link for the bundle variant based on result.bundleLink or variantKey
  const bundleTargetUrl = useMemo(() => {
    if (result.bundleLink) return result.bundleLink;
    if (result.variantKey === 'A') return 'https://namipharm.pl/detox_slim_magnez';
    if (result.variantKey === 'B') return 'https://namipharm.pl/detox_slim_imunno';
    if (result.variantKey === 'C') return 'https://namipharm.pl/slim_magnez';
    if (result.variantKey === 'D') return 'https://namipharm.pl/imunno_slim_magnez';
    if (result.variantKey === 'E') return 'https://namipharm.pl/full_system';

    const ids = result.bundleProducts || [];
    if (ids.length >= 4) return 'https://namipharm.pl/full_system';
    return 'https://namipharm.pl/detox_slim_magnez';
  }, [result.bundleLink, result.variantKey, result.bundleProducts]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full relative py-12 lg:py-20 bg-obsidian-950 flex flex-col items-center"
    >
      {/* Decorative background grid and flows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-neon-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl w-full px-6 relative z-10">
        
        {/* Results Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-gold/20 bg-neon-gold/5 mb-4">
            <Award className="w-4 h-4 text-neon-gold" />
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-gold-premium font-bold">Analiza Wygenerowana Pomyślnie</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-5xl text-gold-premium text-glow-gold tracking-tight uppercase">
            TWÓJ PROFIL MATRYCY
          </h2>
          <p className="text-white font-mono text-sm sm:text-base mt-2">
            Twój kod. Twoja Matryca. Twój kierunek.
          </p>
        </div>

        {/* Master Card Grid (Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Column Left: Archetype Profile details (Glass panel) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border-white/10 flex flex-col justify-between">
            <div>
              {/* Archetype Badge */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <span className="font-mono text-xs sm:text-sm text-gold-premium uppercase tracking-wider block mb-1 font-bold">
                    INDYWIDUALNY ARKAN DEKODERA
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-gold-premium uppercase leading-tight">
                    {result.archetypeName}
                  </h3>
                </div>
                <div className="w-14 h-14 rounded-xl bg-neon-gold/10 border border-neon-gold/30 flex items-center justify-center font-display font-black text-gold-premium text-2xl shadow-[0_0_15px_rgba(226,180,79,0.25)] shrink-0">
                  {result.archetypeSymbol}
                </div>
              </div>

              {/* Glowing Quote Banner */}
              {quoteParagraph && (
                <div className="pl-4 border-l-2 border-neon-gold/60 italic text-white font-display tracking-wide bg-gradient-to-r from-amber-500/[0.04] to-transparent py-4 pr-4 rounded-r-2xl text-base sm:text-lg mb-6 shadow-[inset_1px_0_0_0_rgba(255,255,255,0.02)]">
                  {quoteParagraph}
                </div>
              )}

              {/* Parsed Body Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-white leading-relaxed font-sans">
                {otherParagraphs.map((para, idx) => {
                  const text = para.trim();

                  // 1. Identify list/bullet items
                  if (text.startsWith('–') || text.startsWith('-') || /^\d+\./.test(text)) {
                    const isBulletList = text.startsWith('–') || text.startsWith('-');
                    return (
                      <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-2xl p-5 my-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
                        {text.split('\n').map((line, lIdx) => {
                          let cleanLine = line.trim();
                          if (isBulletList) {
                            if (cleanLine.startsWith('–')) {
                              cleanLine = cleanLine.substring(1).trim();
                            } else if (cleanLine.startsWith('-')) {
                              cleanLine = cleanLine.substring(1).trim();
                            }
                            if (cleanLine && !cleanLine.endsWith('–') && !cleanLine.endsWith('-')) {
                              cleanLine = `${cleanLine} –`;
                            }
                          }
                          return (
                            <p key={lIdx} className="pl-3.5 border-l border-neon-gold/60 py-1.5 font-sans text-xs sm:text-sm text-gold-premium uppercase font-extrabold leading-relaxed text-glow-gold">
                              {cleanLine}
                            </p>
                          );
                        })}
                      </div>
                    );
                  }
                  
                  // 2. Typography for all 22 arcana: only recognize complete heading paragraphs.
                  // All description strings remain exactly as supplied.
                  const isArcanaTitle = (/^Arkan\s+[IVXLCDM]+\.\s+[^\n]+\s\|\s[^\n]+$/i.test(text) && text.length <= 130) || /^MAG \| MISTRZ MANIFESTACJI$/.test(text);
                  const isSectionHeading = /^(Twoja architektura losu|Ciało i emocje\.|ALCHEMIA TWOJEGO CIAŁA\.|Twój kierunek$)/i.test(text);
                  const isModuleHeading = /^Moduł\s+/i.test(text);
                  const isClosingStatement = text.endsWith('ODKODUJ SIĘ.') || (result.archetypeSymbol === 'XXII' && text === 'Zachowaj ciekawość. Znajdź własny rytm. Ruszaj odważnie przed siebie.');

                  if (isArcanaTitle) {
                    return (
                      <h3 key={idx} className="font-display font-extrabold text-xl sm:text-2xl text-white leading-snug mt-8 mb-4 tracking-tight">
                        {text}
                      </h3>
                    );
                  }

                  if (isSectionHeading) {
                    return (
                      <h4 key={idx} className="font-display font-extrabold text-lg sm:text-xl text-white leading-snug mt-9 mb-4">
                        {text}
                      </h4>
                    );
                  }

                  if (isModuleHeading) {
                    return (
                      <h5 key={idx} className="font-display font-bold text-base sm:text-lg text-white leading-snug mt-7 mb-3">
                        {text}
                      </h5>
                    );
                  }

                  if (isClosingStatement) {
                    return (
                      <p key={idx} className="font-display font-extrabold text-base sm:text-lg leading-relaxed text-white mt-7">
                        {text}
                      </p>
                    );
                  }

                  // 4. Render Normal Paragraph (Must be white)
                  return (
                    <p key={idx} className="text-white text-xs sm:text-sm leading-relaxed font-sans">
                      {text}
                    </p>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Column Right: Interactive Scores & Details Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Stats panel */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
              <h4 className="font-mono text-xs sm:text-sm text-gold-premium uppercase tracking-widest mb-5 border-b border-white/5 pb-2 font-bold">
                WSKAŹNIKI TWOJEJ MATRYCY
              </h4>

              {/* Stat meters list */}
              <div className="space-y-4">
                
                {/* Clarity */}
                <div>
                  <div className="flex justify-between items-center text-xs sm:text-sm mb-1.5">
                    <span className="text-white font-sans flex items-center gap-2">
                      <Brain className="w-4 h-4 text-neon-gold" /> Jasność Umysłu
                    </span>
                    <span className="font-mono text-white font-bold">{result.scores.clarity}%</span>
                  </div>
                  <div className="w-full bg-black/40 h-2.5 rounded-full p-[1px] border border-white/5 overflow-hidden shadow-inner">
                    <div 
                      className="h-full bg-gold-premium rounded-full shadow-[0_0_15px_rgba(226,180,79,0.7)] relative animate-pulse-slow"
                      style={{ width: `${result.scores.clarity}%` }}
                    >
                      <div className="absolute top-0.5 left-0.5 right-0.5 h-[1px] bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Energy */}
                <div>
                  <div className="flex justify-between items-center text-xs sm:text-sm mb-1.5">
                    <span className="text-white font-sans flex items-center gap-2">
                      <Zap className="w-4 h-4 text-neon-gold" /> Potencjał Energii
                    </span>
                    <span className="font-mono text-white font-bold">{result.scores.energy}%</span>
                  </div>
                  <div className="w-full bg-black/40 h-2.5 rounded-full p-[1px] border border-white/5 overflow-hidden shadow-inner">
                    <div 
                      className="h-full bg-gold-premium rounded-full shadow-[0_0_15px_rgba(226,180,79,0.7)] relative"
                      style={{ width: `${result.scores.energy}%` }}
                    >
                      <div className="absolute top-0.5 left-0.5 right-0.5 h-[1px] bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Metabolism */}
                <div>
                  <div className="flex justify-between items-center text-xs sm:text-sm mb-1.5">
                    <span className="text-white font-sans flex items-center gap-2">
                      <Target className="w-4 h-4 text-neon-gold" /> Stabilność Wagowa
                    </span>
                    <span className="font-mono text-white font-bold">{result.scores.metabolism}%</span>
                  </div>
                  <div className="w-full bg-black/40 h-2.5 rounded-full p-[1px] border border-white/5 overflow-hidden shadow-inner">
                    <div 
                      className="h-full bg-gold-premium rounded-full shadow-[0_0_15px_rgba(226,180,79,0.7)] relative"
                      style={{ width: `${result.scores.metabolism}%` }}
                    >
                      <div className="absolute top-0.5 left-0.5 right-0.5 h-[1px] bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Resilience */}
                <div>
                  <div className="flex justify-between items-center text-xs sm:text-sm mb-1.5">
                    <span className="text-white font-sans flex items-center gap-2">
                      <Shield className="w-4 h-4 text-neon-gold" /> Tarcza Biologiczna
                    </span>
                    <span className="font-mono text-white font-bold">{result.scores.resilience}%</span>
                  </div>
                  <div className="w-full bg-black/40 h-2.5 rounded-full p-[1px] border border-white/5 overflow-hidden shadow-inner">
                    <div 
                      className="h-full bg-gold-premium rounded-full shadow-[0_0_15px_rgba(226,180,79,0.7)] relative"
                      style={{ width: `${result.scores.resilience}%` }}
                    >
                      <div className="absolute top-0.5 left-0.5 right-0.5 h-[1px] bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Recalibrate hint */}
              <div className="pt-4 border-t border-white/5 mt-5 text-center">
                <span className="text-xs sm:text-sm font-mono text-white/80 font-medium">
                  Kod matrycy wyliczony dla daty: <span className="text-gold-premium font-bold">{result.birthDate}</span>
                </span>
              </div>
            </div>

            {/* Neurotransmitter Box */}
            <div className="glass-panel p-6 rounded-2xl border-white/10">
              <span className="font-mono text-xs sm:text-sm text-gold-premium block uppercase mb-1 font-bold">
                DOMINUJĄCY MOTYW ARCHETYPU
              </span>
              <span className="font-display font-extrabold text-base sm:text-lg text-gold-premium block mb-1">
                {result.neurotransmitter}
              </span>
              <p className="text-xs sm:text-sm text-white leading-relaxed font-sans">
                {result.neurotransmitterDesc}
              </p>
            </div>

          </div>

        </div>

        {/* RECOMMENDATION MODULE: Matched Variant Bundle */}
        <div className="space-y-8">
          
          <div className="text-center border-b border-white/10 pb-4">
            <h3 className="font-display font-black text-xl sm:text-2xl lg:text-3xl uppercase tracking-wider text-gold-premium text-glow-gold">
              Dopasowany Wariant Systemowy NAMI PHARM
            </h3>
            <p className="text-xs sm:text-sm text-white font-mono mt-1">
              Dedykowany zestaw wsparcia biochemicznego dla Arkanu {result.archetypeNum} ({result.archetypeName})
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Complete Alchemic System Bundle Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border-neon-gold/40 shadow-[0_15px_45px_rgba(0,0,0,0.8),0_0_30px_rgba(226,180,79,0.08)] hover:border-neon-gold/70 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              {/* Gold light burst */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-neon-gold/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -top-1 right-4 bg-neon-gold/15 text-gold-premium border border-neon-gold/30 font-mono text-[10px] sm:text-xs uppercase tracking-widest px-2.5 py-1 rounded-b-md font-black shadow-[0_0_10px_rgba(212,175,55,0.1)]">
                🔥 Sugerowany Wariant {result.variantKey ? `(${result.variantKey})` : ''}
              </div>

              <div>
                <span className="text-xs font-mono text-gold-premium uppercase tracking-widest block mb-1 font-bold">Wariant Systemowy</span>
                <h4 className="font-display font-black text-xl sm:text-2xl text-gold-premium mb-2 uppercase tracking-wide">
                  {result.bundleTitle || cleanCtaText}
                </h4>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-sans mb-5 max-w-xl">
                  {result.bundleSubtitle || 'Zintegrowana kuracja realizująca pełne spektrum filarów Twojej matrycy biochemicznej. Zapewnia maksymalną synergię komórkową, odpornościową oraz neurotransmisyjną.'}
                </p>

                {/* Bundle Visual Image Banner */}
                {result.bundleImage && (
                  <a 
                    href={bundleTargetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full h-[220px] sm:h-[280px] md:h-[320px] rounded-2xl overflow-hidden border border-white/10 hover:border-neon-gold/40 transition-all duration-300 group/bundleImg mb-6 shadow-xl bg-black/40"
                  >
                    <img 
                      src={result.bundleImage} 
                      alt={result.bundleTitle || 'Zestaw NAMI PHARM'} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/bundleImg:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </a>
                )}
              </div>

              <div className="pt-5 border-t border-white/5 mt-2">
                <div className="flex w-full">
                  <a
                    href={bundleTargetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-gold-premium hover:bg-gold-premium-hover text-black hover:brightness-110 font-mono text-xs sm:text-sm font-extrabold rounded-xl transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-[0_6px_20px_rgba(226,180,79,0.35)] border border-white/15 hover:scale-[1.01] active:scale-95"
                  >
                    <Layers className="w-4 h-4 text-black" />
                    <span className="truncate">ZAMÓW WARIANT SYSTEMU</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>


        {/* Bottom utility controls */}
        <div className="flex justify-center mt-16">
          <button
            onClick={onReset}
            className="flex items-center gap-2.5 font-mono text-xs sm:text-sm text-white hover:text-gold-premium font-bold transition-all duration-300 uppercase tracking-widest border border-white/10 hover:border-neon-gold/40 rounded-xl px-7 py-4 bg-white/[0.02] hover:bg-white/[0.05] shadow-[0_2px_10px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Wykonaj nową analizę</span>
          </button>
        </div>

      </div>
    </motion.div>
  );
}

export default memo(DecoderResultView);
