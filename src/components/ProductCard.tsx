import React, { memo } from 'react';
import { Product } from '../types';
import { Info } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const targetUrl = product.link || 'https://namipharm.pl/slim';

  return (
    <a 
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-panel rounded-[32px] flex flex-col justify-between overflow-hidden relative border border-white/5 transition-all duration-700 group cursor-pointer hover:-translate-y-2 hover:border-neon-gold/40 hover:shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(226,180,79,0.15)] block h-full text-left"
    >
      {/* Glow highlight */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${product.colorClass} opacity-40 group-hover:opacity-100 transition-opacity`}></div>

      {/* Visual representation - Premium Jar with 3D pedestal stand */}
      <div className="relative w-full h-[320px] sm:h-[380px] overflow-hidden rounded-t-[32px] bg-black/40">
        {/* Ambient Background Glow matching the product's individual theme */}
        <div className={`absolute w-full h-full rounded-full bg-gradient-to-tr ${product.colorClass} opacity-[0.08] blur-[80px] group-hover:opacity-20 group-hover:scale-110 transition-all duration-700`}></div>
        {/* Futuristic subtle scanner/horizon line behind the jar */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* Product Jar Bottle */}
        {product.image ? (
          <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105 flex items-center justify-center z-10">
            <img 
              src={product.image} 
              alt={`NAMI PHARM ${product.name}`} 
              width={400}
              height={380}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        ) : (
          <div className="relative w-24 h-36 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black rounded-lg border border-white/10 shadow-lg flex flex-col justify-between p-3 transition-transform duration-500 group-hover:scale-105 z-10">
            {/* Jar Cap */}
            <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-10 h-2 bg-neutral-800 rounded-t border-t border-x border-white/5"></div>
            
            {/* Label */}
            <div className="w-full h-full bg-black/60 border border-white/5 rounded p-1.5 flex flex-col justify-between items-center text-center">
              <span className="text-[5px] font-mono tracking-widest text-gray-500">NAMI</span>
              <span className="font-display font-extrabold text-sm text-white tracking-widest">{product.name}</span>
              <span className="text-[5px] font-mono text-neon-gold uppercase">BIO-DYNAMIC</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 pt-4 flex flex-col gap-4">
        {/* Product Information */}
        <div className="text-center px-2">
          <h3 className="font-display font-black text-xl sm:text-2xl text-gold-premium text-glow-gold tracking-wide uppercase transition-colors duration-300">
            NAMI PHARM {product.name}
          </h3>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-6 pt-0 mt-auto flex flex-col gap-3">
        <div className="flex items-center justify-center mb-2">
          <span className="font-display font-black text-gold-premium text-xl sm:text-2xl tracking-wide">
            {product.price} zł
          </span>
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

export default memo(ProductCard);
