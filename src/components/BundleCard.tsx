import React, { memo } from 'react';
import { Bundle } from '../data';
import { Info } from 'lucide-react';

interface BundleCardProps {
  bundle: Bundle;
}

function BundleCard({ bundle }: BundleCardProps) {
  const targetUrl = bundle.link || 'https://namipharm.pl/full_system';

  return (
    <a 
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-panel rounded-[32px] flex flex-col justify-between overflow-hidden relative border border-white/5 transition-all duration-700 group cursor-pointer hover:-translate-y-2 hover:border-neon-gold/40 hover:shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(226,180,79,0.15)] block h-full text-left"
    >
      {/* Glow highlight */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${bundle.colorClass} opacity-40 group-hover:opacity-100 transition-opacity`}></div>

      {/* Visual representation */}
      <div className="relative w-full h-[320px] sm:h-[380px] overflow-hidden rounded-t-[32px] bg-black/40">
        {/* Ambient Background Glow */}
        <div className={`absolute w-full h-full rounded-full bg-gradient-to-tr ${bundle.colorClass} opacity-[0.08] blur-[80px] group-hover:opacity-20 group-hover:scale-110 transition-all duration-700`}></div>
        {/* Subtle horizon line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105 flex items-center justify-center z-10">
          <img 
            src={bundle.image} 
            alt={`NAMI PHARM ${bundle.name}`} 
            width={400}
            height={380}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="p-6 pt-4 flex flex-col gap-4">
        {/* Bundle Information */}
        <div className="text-center px-2">
          <h3 className="font-display font-black text-xl sm:text-2xl text-gold-premium text-glow-gold tracking-wide uppercase transition-colors duration-300">
            {bundle.name.startsWith('NAMI PHARM') ? bundle.name : `NAMI PHARM ${bundle.name}`}
          </h3>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-6 pt-0 mt-auto flex flex-col gap-3">
        <div className="flex items-center justify-center mb-2">
          {bundle.price ? (
            <span className="font-display font-black text-gold-premium text-xl sm:text-2xl tracking-wide">
              {bundle.price}
            </span>
          ) : (
            <span className="font-display font-black text-gold-premium text-sm tracking-widest uppercase">
              PAKIET SYNERGICZNY
            </span>
          )}
        </div>

        {/* Action button mimicking SZCZEGÓŁY styled beautifully */}
        <div className="flex w-full">
          <div className="w-full py-3.5 px-1.5 rounded-2xl font-mono text-[11px] sm:text-xs font-extrabold tracking-widest uppercase transition-all duration-500 flex items-center justify-center gap-1.5 border bg-neutral-950/60 text-white border-white/5 shadow-inner group-hover:bg-gold-premium group-hover:text-black group-hover:border-transparent group-hover:shadow-[0_8px_20px_rgba(226,180,79,0.3)]">
            <Info className="w-4 h-4 shrink-0 text-neon-gold group-hover:text-black transition-colors" />
            <span>SZCZEGÓŁY</span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default memo(BundleCard);
