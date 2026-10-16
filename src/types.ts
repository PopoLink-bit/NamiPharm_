export interface Product {
  id: 'slim' | 'detox' | 'b-complex' | 'immuno' | 'bestseller';
  name: string;
  tag: string;
  shortDesc: string;
  longDesc: string;
  price: number;
  colorClass: string;
  glowColor: string;
  activeComponents: string[];
  doseForm: string;
  usage: string;
  image?: string;
  link?: string;
}

export interface DecoderResult {
  birthDate: string;
  archetypeNum: number;
  archetypeName: string;
  archetypeSymbol: string;
  archetypeDesc: string;
  neurotransmitter: string;
  neurotransmitterDesc: string;
  frequencyHz: number;
  scores: {
    clarity: number; // Absolutna Jasność Umysłu
    energy: number;  // Uwolniony Potencjał Energii
    metabolism: number; // Radykalna Precyzja (Metaboliczny status)
    resilience: number; // Odporność biologiczna
  };
  recommendedProductId: 'slim' | 'detox' | 'b-complex' | 'immuno';
  bundleProducts?: ('slim' | 'detox' | 'b-complex' | 'immuno')[];
  bundleTitle?: string;
  bundleSubtitle?: string;
  bundleImage?: string;
  variantKey?: 'A' | 'B' | 'C' | 'D' | 'E';
  bundleLink?: string;
}

export interface ArchetypeDefinition {
  num: number;
  name: string;
  symbol: string;
  desc: string;
  neurotransmitter: string;
  neurotransmitterDesc: string;
  recId: 'slim' | 'detox' | 'b-complex' | 'immuno';
  bundleProducts: ('slim' | 'detox' | 'b-complex' | 'immuno')[];
  bundleTitle: string;
  variantKey?: 'A' | 'B' | 'C' | 'D' | 'E';
  bundleLink?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
