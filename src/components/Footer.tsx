import React, { useState, memo } from 'react';
import { Shield, Info, HelpCircle, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';

function Footer() {
  const [modalType, setModalType] = useState<'regulamin' | 'kontakt' | null>(null);

  return (
    <footer className="relative bg-obsidian-950/40 backdrop-blur-sm text-gray-400 border-t border-white/5 pt-20 pb-12 overflow-hidden">
      {/* Absolute faint background lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Elegant Footer Brand Logo */}
        <div className="mb-8">
          <Logo size="md" showText={true} textColor="text-white/70" />
        </div>

        {/* Large Bio/Motto Banner */}
        <div className="text-center mb-16 max-w-3xl">
          <p className="font-sans font-semibold text-xl sm:text-2xl lg:text-3xl text-white/95 leading-relaxed tracking-wide">
            Odkryj swój unikalny kod.<br />
            Poznaj swoją Matrycę.<br />
            PRZEKROCZ WŁASNE GRANICE.<br />
            <br />
            DNA | SOUL | FUTURE.
          </p>
        </div>

        {/* Separator line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"></div>

        {/* Legal Disclaimer Box */}
        <div className="w-full bg-white/[0.01] border border-white/5 rounded-2xl p-6 sm:p-8 text-justify text-xs text-white/80 font-sans leading-relaxed max-w-4xl mb-12">
          <div className="flex items-start gap-3 mb-3">
            <Info className="w-4 h-4 text-neon-gold shrink-0 mt-0.5" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-white/70">NOTA PRAWNA</span>
          </div>
          <p>
            NEURO-SYNAPTIC DNA MATRIX DECODER (N.S.D.M.D.) to autorskie narzędzie NAMI PHARM oparte na symbolicznej interpretacji daty urodzenia i archetypów. Pojęcia związane z dekodowaniem neuro-synaptycznym i Matrycą Losu stanowią element koncepcji marki. System ma charakter informacyjny i rozrywkowy, nie wykonuje badań biologicznych ani nie służy diagnozowaniu. Treści nie stanowią porady medycznej ani indywidualnego zalecenia suplementacyjnego. Prezentowane produkty to suplementy diety, których przypisanie do Arkanów ma charakter symboliczny.
          </p>
        </div>

        {/* Bottom Menu Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center flex-wrap gap-4 sm:gap-8 text-xs font-mono tracking-widest text-gray-400 mb-8">
          <a 
            href="https://namipharm.pl/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neon-gold transition-colors font-semibold"
          >
            BLOG
          </a>
          <span className="hidden sm:inline text-white/10">|</span>
          <a 
            href="https://namipharm.pl/alchemia-duszy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-premium hover:text-white transition-colors font-bold"
          >
            ALCHEMIA DUSZY
          </a>
          <span className="hidden sm:inline text-white/10">|</span>
          <a 
            href="https://namipharm.pl/about"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neon-gold transition-colors"
          >
            O NAS
          </a>
          <span className="hidden sm:inline text-white/10">|</span>
          <a 
            href="https://namipharm.pl/regulamin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neon-gold transition-colors"
          >
            REGULAMIN SKLEPU
          </a>
          <span className="hidden sm:inline text-white/10">|</span>
          <a 
            href="https://namipharm.pl/kontakt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neon-gold transition-colors"
          >
            KONTAKT & SUPPORT
          </a>
        </div>

        {/* Neon Social Media Links */}
        <div className="flex items-center gap-6 mb-8">
          <a 
            href="https://www.facebook.com/profile.php?id=61594140664196" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neon-gold hover:text-white transition-all duration-300 transform hover:scale-110 filter drop-shadow-[0_0_10px_rgba(226,180,79,0.5)] hover:drop-shadow-[0_0_18px_rgba(226,180,79,0.8)]"
            title="Facebook Nami Pharm"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a 
            href="https://www.instagram.com/namipharm/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neon-gold hover:text-white transition-all duration-300 transform hover:scale-110 filter drop-shadow-[0_0_10px_rgba(226,180,79,0.5)] hover:drop-shadow-[0_0_18px_rgba(226,180,79,0.8)]"
            title="Instagram Nami Pharm"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright info with Neon-lit Developer Link */}
        <div className="text-xs sm:text-sm font-mono text-white/90 text-center leading-relaxed">
          &copy; 2026 NAMI PHARM. Wszelkie prawa zastrzeżone. <br className="sm:hidden" />
          Designed and developed by{" "}
          <a 
            href="https://www.instagram.com/artur_creative/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-all duration-300 font-bold tracking-wider relative filter drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
          >
            Artur Creative
          </a>
        </div>
      </div>

      {/* Elegant Popups/Modals for Regulations & Contact */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-panel w-full max-w-lg rounded-2xl border-white/10 p-6 sm:p-8 flex flex-col max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
              <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider">
                {modalType === 'regulamin' ? 'Regulamin Nami Pharm' : 'Kontakt z Nami Pharm'}
              </h3>
              <button 
                onClick={() => setModalType(null)}
                className="text-gray-400 hover:text-white font-mono text-lg p-1"
              >
                &times;
              </button>
            </div>

            {modalType === 'regulamin' ? (
              <div className="text-sm font-sans text-white space-y-4 pr-1">
                <p className="font-mono text-xs text-gold-premium font-bold">§1 POSTANOWIENIA OGÓLNE</p>
                <p>Sklep internetowy NAMI PHARM działający pod adresem namipharm.pl sprzedaje innowacyjne suplementy diety wspierające optymalizację neuro-synaptyczną.</p>
                
                <p className="font-mono text-xs text-gold-premium font-bold">§2 USŁUGA N.S.D.M.D</p>
                <p>Narzędzie deodera DNA Matrix stanowi darmową symulację wspierającą dobór suplementacji i nie niesie skutków diagnostyki medycznej.</p>
                
                <p className="font-mono text-xs text-gold-premium font-bold">§3 DOSTAWA I PŁATNOŚCI</p>
                <p>Zamówienia realizujemy w ciągu 24h roboczych za pośrednictwem kuriera InPost oraz paczkomatów. Obsługujemy bezpieczne płatności BLIK, PayU oraz karty płatnicze.</p>
 
                <p className="font-mono text-xs text-gold-premium font-bold">§4 REKLAMACJE I ZWROTY</p>
                <p>Ze względu na ochronę zdrowia oraz względy higieniczne, zwrot suplementów diety jest możliwy wyłącznie w przypadku nienaruszonego, oryginalnie zafoliowanego opakowania w terminie 14 dni.</p>
              </div>
            ) : (
              <div className="text-sm font-sans text-white space-y-4">
                <p>Masz pytania dotyczące swojej personalnej analizy lub zamówienia? Nasz zespół neuro-konsultantów jest dostępny od poniedziałku do piątku w godzinach 9:00 - 17:00.</p>
                
                <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl space-y-3 font-mono text-xs">
                  <div>
                    <span className="text-white block font-semibold">EMAIL:</span>
                    <a href="mailto:support@namipharm.pl" className="text-gold-premium hover:underline font-bold">support@namipharm.pl</a>
                  </div>
                  <div>
                    <span className="text-white block font-semibold">TELEFON:</span>
                    <span className="text-white">+48 22 104 20 00</span>
                  </div>
                  <div>
                    <span className="text-white block font-semibold">ADRES:</span>
                    <span className="text-white">NAMI PHARM Sp. z o.o.<br />Al. Jerozolimskie 120, 00-001 Warszawa</span>
                  </div>
                </div>

                <div className="pt-4 text-xs text-white/80 italic text-center">
                  Zaufaj nauce. Zaufaj naturze. Zaufaj sobie.
                </div>
              </div>
            )}

            <button 
              onClick={() => setModalType(null)}
              className="mt-8 w-full py-3 rounded-lg bg-white/5 hover:bg-gold-premium hover:text-black font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 border border-white/10 hover:border-transparent"
            >
              Zamknij okno
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}

export default memo(Footer);
