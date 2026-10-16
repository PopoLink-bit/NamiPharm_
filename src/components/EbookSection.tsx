import React, { memo } from 'react';
import { Sparkles, BookOpen } from 'lucide-react';

function EbookSection() {
  return (
    <section id="ebook-section" className="relative py-20 bg-obsidian-950/40 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border-white/10 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.01] rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            {/* Book Graphic / Cover Mock */}
            <div className="w-full md:w-1/3 flex justify-center shrink-0">
              <div className="relative w-48 h-64 rounded-xl border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.05)] overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://i.postimg.cc/CKSrCHVk/okladka.jpg" 
                  alt="Holistyczne Odrodzenie z Nami Pharm" 
                  width={192}
                  height={256}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* E-book Title & Action */}
            <div className="flex-1 text-center md:text-left">
              <span className="text-xs font-mono text-white/60 uppercase tracking-widest block mb-2 font-bold">DODATKOWE WSPARCIE | PAKIET EDUKACYJNY</span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wide mb-2">
                Holistyczne Odrodzenie z Nami Pharm (e-book)
              </h3>
              <div className="font-display font-black text-gold-premium text-xl sm:text-2xl tracking-wide mb-6">
                39,99 zł
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  href="https://namipharm.pl/e-book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 font-mono text-xs font-extrabold rounded-xl transition-all duration-300 uppercase tracking-widest flex items-center gap-2 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:scale-[1.01] active:scale-95"
                >
                  <BookOpen className="w-4 h-4 text-white" />
                  <span className="text-white">SZCZEGÓŁY</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(EbookSection);
