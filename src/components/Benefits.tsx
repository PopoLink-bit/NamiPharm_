import React, { memo } from 'react';
import { Brain, Zap, Target } from 'lucide-react';

function Benefits() {
  return (
    <section className="relative py-24 lg:py-36 bg-obsidian-950/30 backdrop-blur-sm overflow-hidden border-t border-white/5">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-neon-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-gold-premium uppercase bg-neon-gold/5 border border-neon-gold/20 px-3 py-1 rounded-full font-bold">
            Ewolucja suplementacji
          </span>
          <h2 id="benefits-title" className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-gold-premium text-glow-gold tracking-tight mt-6">
            Twoje Korzyści
          </h2>
          <p className="text-white font-sans text-base sm:text-lg lg:text-xl mt-4 max-w-xl mx-auto">
            Dlaczego N.S.D.M.D stanowi przełom w <span className="text-gold-premium font-semibold">bio-hackingu</span> i codziennym funkcjonowaniu?
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1 */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border-white/5 flex flex-col gap-6 relative group hover:-translate-y-1 hover:border-neon-gold/40 transition-all duration-500">
            <div className="absolute top-0 right-0 w-24 h-24 bg-neon-gold/5 rounded-bl-full blur-xl pointer-events-none group-hover:bg-neon-gold/10 transition-colors"></div>
            <div className="w-12 h-12 rounded-xl bg-neon-gold/10 flex items-center justify-center text-neon-gold border border-neon-gold/20 group-hover:border-neon-gold group-hover:bg-neon-gold/20 transition-all duration-300 shadow-[0_0_15px_rgba(226,180,79,0.15)]">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-gold-premium mb-3">
                ŚWIADOME SAMOPOZNANIE
              </h3>
              <p className="text-sm sm:text-base text-white font-sans leading-relaxed">
                Odkrywaj swoje archetypy, poznawaj różne perspektywy i inspiruj się do świadomych wyborów.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border-white/5 flex flex-col gap-6 relative group hover:-translate-y-1 hover:border-neon-gold/40 transition-all duration-500">
            <div className="absolute top-0 right-0 w-24 h-24 bg-neon-gold/5 rounded-bl-full blur-xl pointer-events-none group-hover:bg-neon-gold/10 transition-colors"></div>
            <div className="w-12 h-12 rounded-xl bg-neon-gold/10 flex items-center justify-center text-neon-gold border border-neon-gold/20 group-hover:border-neon-gold group-hover:bg-neon-gold/20 transition-all duration-300 shadow-[0_0_15px_rgba(226,180,79,0.15)]">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-gold-premium mb-3">
                NOWA PERSPEKTYWA
              </h3>
              <p className="text-sm sm:text-base text-white font-sans leading-relaxed">
                Spójrz na siebie z innej strony. Odkrywaj nowe możliwości i rozwijaj swój potencjał na własnych zasadach.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border-white/5 flex flex-col gap-6 relative group hover:-translate-y-1 hover:border-neon-gold/40 transition-all duration-500">
            <div className="absolute top-0 right-0 w-24 h-24 bg-neon-gold/5 rounded-bl-full blur-xl pointer-events-none group-hover:bg-neon-gold/10 transition-colors"></div>
            <div className="w-12 h-12 rounded-xl bg-neon-gold/10 flex items-center justify-center text-neon-gold border border-neon-gold/20 group-hover:border-neon-gold group-hover:bg-neon-gold/20 transition-all duration-300 shadow-[0_0_15px_rgba(226,180,79,0.15)]">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-gold-premium mb-3">
                ŚWIADOME WYBORY
              </h3>
              <p className="text-sm sm:text-base text-white font-sans leading-relaxed">
                Poznaj naszą linię suplementów diety i odkrywaj produkty, które mogą uzupełniać Twoją codzienną rutynę.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default memo(Benefits);
