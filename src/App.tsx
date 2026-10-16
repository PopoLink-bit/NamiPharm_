import React, { useState, useRef, useCallback, useEffect, lazy, Suspense } from 'react';
import DecoderForm from './components/DecoderForm';
const DecoderResultView = lazy(() => import('./components/DecoderResult'));
import ProductCard from './components/ProductCard';
import BundleCard from './components/BundleCard';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import BackgroundVideo from './components/BackgroundVideo';
import EbookSection from './components/EbookSection';
import { PRODUCTS, BUNDLES, decodeBirthDate } from './data';
import { DecoderResult } from './types';
import { BookOpen, Compass } from 'lucide-react';

export default function App() {
  const [activeResult, setActiveResult] = useState<DecoderResult | null>(null);

  const decoderRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  // Send height of the page to Tilda parent frame using rAF throttle to prevent layout thrashing
  useEffect(() => {
    let rafId: number | null = null;

    const sendHeight = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const height = document.documentElement.scrollHeight || document.body.scrollHeight;
        window.parent.postMessage({ type: 'namipharm-resize', height }, '*');
      });
    };

    // Initial send
    sendHeight();

    // Set up ResizeObserver to watch for layout/dynamic content changes
    const resizeObserver = new ResizeObserver(() => {
      sendHeight();
    });
    
    resizeObserver.observe(document.body);

    // Fallbacks to handle dynamic content loads and images
    const timer1 = setTimeout(sendHeight, 300);
    const timer2 = setTimeout(sendHeight, 1000);
    const timer3 = setTimeout(sendHeight, 2500);

    window.addEventListener('resize', sendHeight);
    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      resizeObserver.disconnect();
      window.removeEventListener('resize', sendHeight);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [activeResult]);

  // Scroll Helpers
  const scrollToDecoder = useCallback(() => {
    decoderRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToProducts = useCallback(() => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Actions
  const handleDecode = useCallback((birthDate: string) => {
    const result = decodeBirthDate(birthDate);
    setActiveResult(result);
    // Scroll to result shortly after rendering
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }, []);

  const handleResetDecoder = useCallback(() => {
    setActiveResult(null);
    scrollToDecoder();
  }, [scrollToDecoder]);

  return (
    <div className="min-h-screen bg-transparent text-white font-sans antialiased overflow-x-hidden selection:bg-neon-gold selection:text-black relative">
      
      {/* Background Video (YouTube silent seamless loop) */}
      <BackgroundVideo />

      {/* Hero Section Container */}
      <div ref={decoderRef}>
        <DecoderForm onDecode={handleDecode} />
      </div>

      {/* Dynamic Results block - shown only after calculation */}
      {activeResult && (
        <Suspense fallback={null}>
          <div ref={resultsRef} className="border-t border-neon-gold/25 bg-black/60 backdrop-blur-3xl shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
            <DecoderResultView 
              result={activeResult} 
              onReset={handleResetDecoder} 
            />
          </div>
        </Suspense>
      )}

      {/* SEKCJA 2: SPECJALISTYCZNA LINIA SUPLEMENTÓW */}
      <section ref={productsRef} className="relative py-24 bg-obsidian-900/60 backdrop-blur-sm overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute -top-40 right-10 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Transitional Header exactly matching tablet */}
          <div className="text-center mb-16">
            <h2 id="products-title" className="font-display font-bold text-lg sm:text-xl lg:text-2xl text-neon-gold text-glow-gold uppercase tracking-widest max-w-4xl mx-auto leading-relaxed">
              Nie chcesz podawać daty?<br />
              <span className="text-amber-500 font-extrabold block mt-2 text-xs sm:text-sm font-mono tracking-[0.2em]">
                Odkryj naszą specjalistyczną linię suplementów
              </span>
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-6"></div>
          </div>

          {/* Grid Layout (4 columns on desktop, 1-2 on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
              />
            ))}
          </div>

          {/* Synergic Sets Section Header */}
          <div className="text-center mt-24 mb-16">
            <h2 id="bundles-title" className="font-display font-bold text-lg sm:text-xl lg:text-2xl text-neon-gold text-glow-gold uppercase tracking-widest max-w-4xl mx-auto leading-relaxed">
              Zintegrowana Synergia<br />
              <span className="text-amber-500 font-extrabold block mt-2 text-xs sm:text-sm font-mono tracking-[0.2em]">
                ODKRYJ ZESTAWY
              </span>
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-6"></div>
          </div>

          {/* Grid Layout for Bundles (3 columns on desktop, 1-2 on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BUNDLES.map(bundle => (
              <BundleCard 
                key={bundle.id} 
                bundle={bundle} 
              />
            ))}
          </div>

        </div>
      </section>

      {/* SEKCJA 2.5: STANOWISKO E-BOOK (Hides after calculation) */}
      {!activeResult && <EbookSection />}

      {/* SEKCJA 3: JAK TO DZIAŁA? – THE SCIENCE & SOUL */}
      <HowItWorks />

      {/* SEKCJA 4: TWOJE KORZYŚCI */}
      <Benefits />

      {/* SEKCJA: DEDYKOWANE PRZYCISKI PRZEJŚCIA (BLOG & ALCHEMIA DUSZY) */}
      <section className="py-12 bg-black/60 border-t border-white/10 relative z-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href="https://namipharm.pl/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-obsidian-900/90 hover:bg-white/10 text-white border border-white/20 hover:border-neon-gold/60 rounded-2xl font-mono text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] hover:scale-[1.02] active:scale-95"
          >
            <BookOpen className="w-4 h-4 text-neon-gold" />
            <span>Blog</span>
          </a>

          <a
            href="https://namipharm.pl/alchemia-duszy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500/15 via-neon-gold/20 to-amber-500/15 hover:from-amber-500/30 hover:to-neon-gold/40 text-gold-premium hover:text-white border border-neon-gold/50 hover:border-neon-gold rounded-2xl font-mono text-xs sm:text-sm font-extrabold tracking-widest uppercase transition-all duration-300 shadow-[0_4px_25px_rgba(212,175,55,0.2)] hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] hover:scale-[1.02] active:scale-95"
          >
            <Compass className="w-4 h-4 text-gold-premium" />
            <span>Alchemia Duszy</span>
          </a>
        </div>
      </section>

      {/* SEKCJA 5: FOOTER & NOTA PRAWNA */}
      <Footer />

    </div>
  );
}
