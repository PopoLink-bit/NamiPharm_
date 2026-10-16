import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import { Sparkles, Loader2, Play, Calendar } from 'lucide-react';

interface DecoderFormProps {
  onDecode: (date: string) => void;
}

const STEPS = [
  'INICJALIZACJA DEKODERA NEURO-SYNAPTYCZNEGO...',
  'ODCZYTYWANIE CZĘSTOTLIWOŚCI DATA MATRIX...',
  'KALIBRACJA STRUKTURY ARKANÓW URODZENIOWYCH...',
  'PROFILOWANIE BIO-KODU HYDRO-KOMÓRKOWEGO...',
  'KORELACJA BIO-NAMI MATRYCY SYNAPTYCZNEJ...',
  'GENEROWANIE INDYWIDUALNEJ SPECYFIKACJI...'
];

function DecoderForm({ onDecode }: DecoderFormProps) {
  const [dateInput, setDateInput] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  const datePickerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (loading) {
      if (loadingStep < STEPS.length) {
        timer = setTimeout(() => {
          setLoadingStep(prev => prev + 1);
        }, 650);
      } else {
        onDecode(birthDate);
        setLoading(false);
        setLoadingStep(0);
      }
    }
    return () => clearTimeout(timer);
  }, [loading, loadingStep, birthDate, onDecode]);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const clean = value.replace(/\D/g, '');
    const limited = clean.slice(0, 8);
    
    let formatted = '';
    if (limited.length > 0) {
      formatted += limited.slice(0, 2);
    }
    if (limited.length > 2) {
      formatted += '.' + limited.slice(2, 4);
    }
    if (limited.length > 4) {
      formatted += '.' + limited.slice(4, 8);
    }
    
    setDateInput(formatted);
    
    if (limited.length === 8) {
      const d = limited.slice(0, 2);
      const m = limited.slice(2, 4);
      const y = limited.slice(4, 8);
      setBirthDate(`${y}-${m}-${d}`);
    } else {
      setBirthDate('');
    }
  };

  const handleNativePickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val) {
      setBirthDate(val);
      const [y, m, d] = val.split('-');
      setDateInput(`${d}.${m}.${y}`);
    }
  };

  const openCalendar = () => {
    if (datePickerRef.current) {
      try {
        datePickerRef.current.showPicker();
      } catch {
        datePickerRef.current.click();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const parts = dateInput.split('.');
    if (parts.length !== 3) {
      setError('Wprowadź poprawną datę (np. 15.06.1993).');
      return;
    }
    
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    const currentYear = new Date().getFullYear();

    if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > currentYear) {
      setError('Wprowadź poprawną datę (np. 15.06.1993).');
      return;
    }

    setError('');
    setLoading(true);
    setLoadingStep(0);
  };

  return (
    <div className="w-full relative pt-12 pb-20 sm:pt-16 sm:pb-32 overflow-hidden bg-transparent flex flex-col items-center">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>

      {/* Luxury Golden Glows & Particles to match tablet visual exactly */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl w-full px-6 relative z-10 flex flex-col items-center">

        {/* Glowing Logo - Increased 3x */}
        <div className="relative mb-8 group flex flex-col items-center">
          <div className="absolute w-[288px] h-[288px] bg-amber-500/15 rounded-full blur-3xl group-hover:bg-amber-500/25 transition-all duration-700 pointer-events-none"></div>
          <img 
            src="https://i.postimg.cc/Vsb5FX7n/logo.png" 
            alt="N.S.D.M.D. Logo" 
            width={336}
            height={336}
            fetchPriority="high"
            decoding="async"
            className="w-[288px] h-[288px] sm:w-[336px] sm:h-[336px] object-contain relative z-10 filter drop-shadow-[0_0_35px_rgba(245,158,11,0.7)] transition-all duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Title requested by user */}
        <div className="text-center mb-10 max-w-3xl px-4">
          <h1 className="text-base sm:text-lg md:text-xl font-mono tracking-[0.2em] text-gold-premium font-extrabold uppercase text-glow-gold">
            NEURO-SYNAPTIC DNA MATRIX DECODER (N.S.D.M.D.)
          </h1>
        </div>

        {/* Form Panel container with elegant subtle gold border */}
        <div className="w-full max-w-xl glass-panel rounded-[32px] p-6 sm:p-10 border border-neon-gold/20 hover:border-neon-gold/40 relative shadow-[0_30px_70px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.06),0_0_40px_rgba(226,180,79,0.03)] transition-all duration-500">

          {!loading ? (
            <div className="flex flex-col items-center">
              {/* Description styled cleanly without any inner border/background frame */}
              <div className="text-center font-sans space-y-4 text-white mb-10 w-full">
                <p className="text-xs sm:text-sm lg:text-base font-display font-black text-gold-premium text-glow-gold uppercase tracking-wider">
                  ODKRYJ SWÓJ UNIKALNY KOD MATRYCY
                </p>
                <p className="text-xs sm:text-sm text-white leading-relaxed font-sans max-w-md mx-auto">
                  Zaawansowana analiza archetypów daty urodzenia w kontekście Twojej unikalnej Matrycy.
                </p>
                <p className="text-xs sm:text-sm text-white leading-relaxed font-sans max-w-md mx-auto font-medium">
                  Każda <span className="text-gold-premium font-extrabold text-glow-gold">Matryca</span> kryje własny kod. Odkryj swój Arkan Zdrowia i poznaj nowe spojrzenie na siebie, dobrostan i świadomą suplementację.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-6">
                
                {/* Unified Optimized Responsive Touch-Friendly Input */}
                <div className="flex flex-col items-center gap-3 w-full">
                  <div className="relative w-full max-w-md flex items-center bg-neutral-950/60 backdrop-blur-md border border-white/10 hover:border-neon-gold/40 focus-within:border-neon-gold/70 focus-within:ring-4 focus-within:ring-neon-gold/15 rounded-2xl transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.05)]">
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={10}
                      placeholder="DD.MM.RRRR"
                      value={dateInput}
                      onChange={handleTextChange}
                      className="w-full h-16 px-6 bg-transparent text-white font-mono text-lg sm:text-xl font-bold tracking-widest outline-none placeholder-gray-600"
                    />
                    
                    {/* Hidden Native Picker Trigger */}
                    <input
                      type="date"
                      ref={datePickerRef}
                      onChange={handleNativePickerChange}
                      value={birthDate}
                      min="1900-01-01"
                      max="2026-12-31"
                      className="absolute opacity-0 pointer-events-none w-0 h-0"
                    />

                    <button
                      type="button"
                      onClick={openCalendar}
                      className="h-12 w-12 mr-2 flex items-center justify-center rounded-xl bg-neon-gold/10 border border-neon-gold/20 text-neon-gold hover:bg-neon-gold/20 active:scale-95 transition-all duration-200 cursor-pointer"
                      title="Wybierz z kalendarza"
                    >
                      <Calendar className="w-5 h-5" />
                    </button>
                  </div>



                  {error && <p className="text-neon-gold font-mono text-xs sm:text-sm mt-2 text-center">{error}</p>}
                </div>

                {/* Big Glowing Amber/Gold Button CTA exactly matching tablet "URUCHOM ANALIZĘ NEURO-SYNAPTYCZNĄ" */}
                <button
                  type="submit"
                  className="w-full max-w-md py-4 sm:py-5 bg-gold-premium hover:bg-gold-premium-hover text-black font-display font-black text-xs sm:text-sm uppercase tracking-widest rounded-full transition-all duration-500 border border-white/20 shadow-[0_10px_30px_-5px_rgba(226,180,79,0.35),inset_0_1.5px_0_0_rgba(255,255,255,0.45)] hover:shadow-[0_15px_45px_rgba(226,180,79,0.55),inset_0_1.5px_0_0_rgba(255,255,255,0.6)] cursor-pointer active:scale-[0.98] hover:brightness-105"
                >
                  URUCHOM ANALIZĘ SWOJEJ MATRYCY
                </button>
              </form>
            </div>
          ) : (
            /* Immersive Loading Terminal */
            <div className="flex flex-col items-center py-10">
              <h3 className="font-mono text-xs sm:text-sm text-gold-premium text-glow-gold uppercase tracking-widest mb-6 animate-pulse text-center font-bold">
                TRWA ŁADOWANIE DEKODERA NAMI PHARM...
              </h3>
              <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-neon-gold/20 animate-spin" style={{ animationDuration: '6s' }}></div>
                <div className="absolute inset-2 rounded-full border-2 border-neon-gold/30 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}></div>
                <Loader2 className="w-6 h-6 text-neon-gold animate-spin" />
              </div>
              
              <div className="w-full max-w-md font-mono text-[11px] text-white bg-neutral-950/80 backdrop-blur-xl rounded-2xl p-5 border border-white/10 shadow-2xl space-y-3">
                {STEPS.map((step, idx) => {
                  let status = 'pending';
                  if (idx < loadingStep) status = 'done';
                  else if (idx === loadingStep) status = 'active';

                  return (
                    <div key={idx} className="flex items-center justify-between">
                      <span className={`${status === 'active' ? 'text-neon-gold font-bold' : status === 'done' ? 'text-gray-500' : 'text-gray-700'}`}>
                        {idx + 1}. {step}
                      </span>
                      <span className={`text-[10px] font-semibold ${status === 'active' ? 'text-neon-gold animate-pulse' : status === 'done' ? 'text-gray-500' : 'text-gray-800'}`}>
                        {status === 'active' 
                          ? 'PRZETWARZANIE...' 
                          : status === 'done' 
                            ? 'ZAKOŃCZONO' 
                            : 'CZEKA'}
                      </span>
                    </div>
                  );
                })}
              </div>
              
              {/* Fake animated progress line */}
              <div className="w-full max-w-md bg-white/5 h-1 rounded-full mt-8 overflow-hidden">
                <div 
                  className="bg-gold-premium h-full transition-all duration-500"
                  style={{ width: `${(loadingStep / STEPS.length) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(DecoderForm);
