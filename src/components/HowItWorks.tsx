import React, { memo } from 'react';
import { Network, Cpu, Sliders } from 'lucide-react';

function HowItWorks() {
  return (
    <section id="science" className="relative py-24 lg:py-36 bg-obsidian-950/40 backdrop-blur-sm overflow-hidden border-t border-white/5">
      {/* Decorative cyber grids and glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -right-40 top-1/2 w-96 h-96 bg-neon-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Subtle label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-gold/20 bg-neon-gold/5 mb-8">
          <Network className="w-4 h-4 text-neon-gold" />
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-neon-gold font-bold">The Science & Soul</span>
        </div>

        {/* Heading */}
        <h2 id="science-title" className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-neon-gold text-glow-gold tracking-tight mb-8">
          N.S.D.M.D. | Most między nauką a energią
        </h2>

        {/* Splitted or highlights column */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-neon-gold to-transparent mx-auto mb-12"></div>

        {/* Elegant typography text with spacious line height and max-width for premium readability */}
        <div className="text-white font-sans text-base sm:text-lg lg:text-xl leading-relaxed space-y-6 max-w-3xl mx-auto text-justify sm:text-center">
          <p>
            Autorski algorytm, który przekłada inspiracje starożytną wiedzą o archetypach na język nowoczesnego biohackingu i holistycznego podejścia do dobrostanu. Interpretujemy Twoją datę urodzenia przez pryzmat Matrycy i symboliki archetypów, tworząc nową perspektywę samopoznania i świadomych wyborów.
          </p>
          <p className="text-white font-semibold">
            Każdy organizm ma swoje potrzeby, a codzienne samopoczucie zależy od wielu czynników. Łączymy symboliczny wymiar Matrycy z ideą świadomej troski o siebie, inspirując do budowania własnej rutyny i odkrywania indywidualnej ścieżki dobrostanu.
          </p>
          <p>
            Zamiast przypadkowych wyborów, postaw na większą świadomość. Odkrywaj naszą linię suplementów diety, poznawaj ich skład i właściwości oraz wybieraj rozwiązania odpowiednie do swoich rzeczywistych potrzeb.
          </p>
        </div>

        {/* Subtle feature pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto text-left">
          <div className="glass-panel p-6 rounded-2xl border-white/5 flex flex-col gap-3.5 hover:-translate-y-1 hover:border-neon-gold/20 duration-500">
            <div className="w-8 h-8 rounded bg-neon-gold/10 flex items-center justify-center text-neon-gold">
              <Cpu className="w-4 h-4" />
            </div>
            <h3 className="font-display font-bold text-base sm:text-lg text-neon-gold uppercase tracking-wider">BIO-MATRYCA ANALITYCZNA</h3>
            <p className="text-xs sm:text-sm text-white font-sans leading-relaxed">
              Tradycyjna symbolika przełożona na cyfrową interpretację archetypów i indywidualną ścieżkę samopoznania.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border-white/5 flex flex-col gap-3.5 hover:-translate-y-1 hover:border-neon-gold/20 duration-500">
            <div className="w-8 h-8 rounded bg-neon-gold/10 flex items-center justify-center text-neon-gold">
              <Network className="w-4 h-4" />
            </div>
            <h3 className="font-display font-bold text-base sm:text-lg text-neon-gold uppercase tracking-wider">Neuro-Strojenie</h3>
            <p className="text-xs sm:text-sm text-white font-sans leading-relaxed">
              Inspiracja do budowania codziennej równowagi, świadomych nawyków i troski o dobre samopoczucie.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border-white/5 flex flex-col gap-3.5 hover:-translate-y-1 hover:border-neon-gold/20 duration-500">
            <div className="w-8 h-8 rounded bg-neon-gold/10 flex items-center justify-center text-neon-gold">
              <Sliders className="w-4 h-4" />
            </div>
            <h3 className="font-display font-bold text-base sm:text-lg text-neon-gold uppercase tracking-wider">Czystość Surowca</h3>
            <p className="text-xs sm:text-sm text-white font-sans leading-relaxed">
              Starannie dobrane składniki i świadome podejście do jakości. Przejrzyste informacje o składzie i zastosowanych surowcach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(HowItWorks);
