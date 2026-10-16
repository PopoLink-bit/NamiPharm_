import { Product, DecoderResult, ArchetypeDefinition } from './types';
import { ARCHETYPES_1_5 } from './data/archetypes_1_5';
import { ARCHETYPES_6_10 } from './data/archetypes_6_10';
import { ARCHETYPES_11_15 } from './data/archetypes_11_15';
import { ARCHETYPES_16_22 } from './data/archetypes_16_22';

export const PRODUCTS: Product[] = [
  {
    id: 'slim',
    name: 'SLIM',
    tag: 'Metabolizm & Neuro-Kontrola',
    shortDesc: 'Szybkość synaptyczna zintegrowana z precyzyjną optymalizacją termogenetyczną i kontrolą łaknienia.',
    longDesc: 'NAMI PHARM SLIM to elitarna formuła stworzona z myślą o synergii między układem nerwowym a tempem przemiany materii. Łącząc zaawansowane ekstrakty z neuro-stymulatorami, preparat ten nie tylko przyspiesza lipolizę, ale także wzmacnia acetylocholinergiczne ścieżki przesyłu sygnałów. Pozwala to na zachowanie absolutnej koncentracji i kontroli nad nawykami żywieniowymi bez typowego dla innych spalaczy efektu rozdrażnienia.',
    price: 149,
    colorClass: 'from-emerald-500 to-teal-600',
    glowColor: 'shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] border-emerald-500/30',
    activeComponents: [
      'Kofeina bezwodna (czystość farmaceutyczna)',
      'L-teanina (ekstrakt z zielonej herbaty 99%)',
      'Ekstrakt z Coleus Forskohlii (standaryzowany na forskolinę)',
      'Ekstrakt z czarnego pieprzu (Piperyna 95%)',
      'Pikolinian chromu o wysokiej biodostępności'
    ],
    doseForm: '60 kapsułek liposomalnych',
    usage: '1 kapsułka dwa razy dziennie, najlepiej rano przed posiłkiem oraz 30 minut przed wysiłkiem intelektualnym lub fizycznym.',
    image: 'https://i.postimg.cc/L8SBNhn0/Dietary-supplement-bottle-photog-202607150424.jpg',
    link: 'https://namipharm.pl/slim'
  },
  {
    id: 'detox',
    name: 'DETOX',
    tag: 'Komórkowe Oczyszczenie',
    shortDesc: 'Mitochondrialne wsparcie komfortu jelitowego, optymalizacja gospodarki wodnej i przywrócenie naturalnej lekkości organizmu.',
    longDesc: 'Formuła DETOX to potężne narzędzie wspierające naturalną zdolność wątroby i nerek do eliminacji metabolitów wtórnych i metali ciężких. Działa na poziomie komórkowym, chroniąc mitochondria przed stresem oksydacyjnym. Usunięcie obciążeń toksycznych natychsmastowo przekłada się na redukcję tzw. "mgły mózgowej", ułatwiając syntezę kluczowych neuroprzekaźników odpowiedzialnych za stabilny nastrój.',
    price: 129,
    colorClass: 'from-amber-500 to-yellow-600',
    glowColor: 'shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] border-amber-500/30',
    activeComponents: [
      'N-acetylo-L-cysteina (NAC) - prekursor glutationu',
      'Chlorella pyrenoidosa (rozbite ściany komórkowe)',
      'Kwas alfa-liponowy (ALA)',
      'Ekstrakt z ostropestu plamistego (standaryzowany na 80% sylimaryny)',
      'L-glutamina o stopniu czystości Ajinomoto'
    ],
    doseForm: '90 wegańskich kapsułek',
    usage: '3 kapsułki dziennie, popijając dużą ilością filtrowanej wody. Stosować między posiłkami przez okres 30 dni.',
    image: 'https://i.postimg.cc/FHvgD1Y4/Supplement-bottle-on-black-backg-202607140529.jpg',
    link: 'https://namipharm.pl/detox'
  },
  {
    id: 'b-complex',
    name: 'B-COMPLEX + MAGNEZ',
    tag: 'Wydajność Synaptyczna',
    shortDesc: 'Metylowane formy koenzymatyczne witamin z grupy B wspierające układ nerwowy, syntezę energii i jasność myślenia.',
    longDesc: 'NAMI PHARM B-COMPLEX + MAGNEZ dostarcza pełne spektrum witamin z grupy B wyłącznie w ich najbardziej aktywnych biologicznie, metylowanych formach (koenzymatycznych) oraz wysoce przyswajalny magnez. Przechodzą one barierę krew-mózg bez konieczności uprzedniej konwersji w wątrobie. Kluczowe dla syntezy dopaminy, noradrenaliny i serotoniny, chronią włókna nerwowe i podnoszą ogólny poziom energii synaptycznej.',
    price: 69,
    colorClass: 'from-blue-600 to-indigo-700',
    glowColor: 'shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] border-blue-500/30',
    activeComponents: [
      'Witamina B12 (jako metylokobalamina)',
      'Witamina B6 (jako pirydoksalo-5-fosforan - P-5-P)',
      'Kwas foliowy Quatrefolic® (sól glukozaminowa kwasu (6S)-5-metylotetrahydrofoliowego)',
      'Dwuwinian choliny (prekursor acetylocholiny)',
      'Inozytol (Myo-inozytol)'
    ],
    doseForm: '120 mini-kapsułek roślinnych',
    usage: '1 kapsułka dziennie podczas śniadania. Nie przyjmować późnym wieczorem ze względu na działanie optymalizujące poziom energii.',
    image: 'https://i.postimg.cc/zGNS03Vs/Dietary-supplement-bottle-photog-202607140532-(1).jpg',
    link: 'https://namipharm.pl/b-complex'
  },
  {
    id: 'immuno',
    name: 'IMMUNO',
    tag: 'Tarcza Biologiczna',
    shortDesc: 'Zaawansowana stymulacja odporności, ochrona komórkowa i wsparcie harmonii neuro-biologicznej.',
    longDesc: 'IMMUNO to kompozycja synergiczna, która aktywuje wrodzone mechanizmy obronne organizmu. Wykorzystując potencjał grzybów adaptogennych (Reishi) oraz beta-glukanów o udowodnionym badaniami klinicznymi działaniu, stymuluje makrofagi do walki z patogenami. Jednocześnie, poprzez regulację osi jelitowo-mózgowej, wspiera wyciszanie stanów zapalnych w układzie nerwowym, działając silnie neuroprotekcyjnie.',
    price: 89,
    colorClass: 'from-amber-500 to-orange-600',
    glowColor: 'shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] border-amber-500/30',
    activeComponents: [
      'Yeast Beta-Glucan 1,3/1,6 (standaryzowany na 85% czystości)',
      'Ekstrakt z lakownicy żółtawej (Ganoderma lucidum / Reishi 10:1)',
      'Cynk organiczny (L-asparaginian cynku)',
      'Witamina D3 cholekalcyferol z lanoliny (5000 IU)',
      'Ekstrakt z owoców bzu czarnego (bogaty w antocyjany)'
    ],
    doseForm: '60 kapsułek z bio-otoczką',
    usage: '1 kapsułek rano oraz 1 kapsułka wieczorem przed snem, popijając szklanką ciepłej wody.',
    image: 'https://i.postimg.cc/Njt7pLKq/Dietary-supplement-bottle-photog-202607140532.jpg',
    link: 'https://namipharm.pl/imunnoc'
  },
  {
    id: 'bestseller',
    name: 'BESTSELLER',
    tag: 'Elitarna Formuła',
    shortDesc: 'Najwyżej oceniany preparat NAMI PHARM – synergia bioaktywnych ekstraktów, witalności i ochrony komórkowej.',
    longDesc: 'NAMI PHARM BESTSELLER to flagowa kompozycja łącząca synergię kluczowych bio-składników o najwyższej biodostępności. Opracowana z myślą o maksymalnej efektywności metabolicznej i wsparciu układu nerwowego.',
    price: 278,
    colorClass: 'from-amber-400 via-gold-premium to-yellow-600',
    glowColor: 'shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] border-amber-500/30',
    activeComponents: [
      'Kompleks ekstraktów bioaktywnych o najwyższej standaryzacji',
      'Aktywne formy koenzymatyczne witamin i minerałów',
      'Liposomalna technologia zwiększania biodostępności'
    ],
    doseForm: '60 kapsułek liposomalnych',
    usage: '1 kapsułka dwa razy dziennie, najlepiej rano przed posiłkiem oraz w ciągu dnia.',
    image: 'https://i.postimg.cc/k41rQ90K/slim-detox-bestseller.jpg',
    link: 'http://namipharm.pl/bestseller'
  }
];

export interface Bundle {
  id: string;
  name: string;
  tag: string;
  shortDesc: string;
  image: string;
  link: string;
  colorClass: string;
  price?: string;
}

export const BUNDLES: Bundle[] = [
  {
    id: 'detox-slim-magnez',
    name: 'DETOX + SLIM + MAGNEZ+B-COMPLEX',
    tag: 'Dedykowany Zestaw Wsparcia Biochemicznego',
    shortDesc: 'Zaawansowana synergia metabolizmu, detoksykacji i stabilizacji układu nerwowego.',
    image: 'https://i.postimg.cc/TP4wjXcY/3-suplement-in-1-ima-jpeg.webp',
    link: 'https://namipharm.pl/detox_slim_magnez',
    colorClass: 'from-amber-500 to-yellow-600',
    price: '347 zł'
  },
  {
    id: 'detox-slim-immuno',
    name: 'DETOX + SLIM + IMMUNOC+QUERCET',
    tag: 'Dedykowany Zestaw Oczyszczenia, Metabolizmu i Ochrony Komórkowej',
    shortDesc: 'Wielopoziomowa ochrona komórkowa połączona ze wsparciem głębokiego oczyszczenia tkankowego.',
    image: 'https://i.postimg.cc/wBBsz2v8/DETOX-SLIM-IMMUNO.jpg',
    link: 'https://namipharm.pl/detox_slim_imunno',
    colorClass: 'from-emerald-500 to-teal-600',
    price: '367 zł'
  },
  {
    id: 'slim-magnez',
    name: 'SLIM + MAGNEZ+B-COMPLEX',
    tag: 'Dedykowany Zestaw Kontroli Metabolizmu, Sprawności Umysłowej i Witalności',
    shortDesc: 'Precyzyjne wyważenie witalności metabolicznej oraz regeneracji neuro-synaptycznej.',
    image: 'https://i.postimg.cc/GppsRK20/SLIM-B-COMPLEX-MAGNEZ.jpg',
    link: 'https://namipharm.pl/slim_magnez',
    colorClass: 'from-blue-500 to-indigo-600',
    price: '218 zł'
  },
  {
    id: 'immuno-slim-magnez',
    name: 'IMMUNOC+QUERCET + SLIM + MAGNEZ+B-COMPLEX',
    tag: 'Dedykowany Zestaw Ochrony Komórkowej, Metabolizmu i Sprawności Umysłowej',
    shortDesc: 'Zintegrowana tarcza biologiczna wspomagająca odporność, metabolizm oraz koncentrację.',
    image: 'https://i.postimg.cc/sgmZbqVC/DETOX-SLIM-B-COMPLEX-MAGNEZ.jpg',
    link: 'https://namipharm.pl/imunno_slim_magnez',
    colorClass: 'from-purple-500 to-indigo-600',
    price: '307 zł'
  },
  {
    id: 'full-system-alchemy',
    name: 'FULL SYSTEM ALCHEMY',
    tag: 'Zintegrowana Rekalibracja Biologiczna',
    shortDesc: 'Pełna alchemia NAMI PHARM – kompleksowe wsparcie 4 filarów Twojej matrycy biochemicznej.',
    image: 'https://i.postimg.cc/MGGjw5TJ/SLIM-DETOX-IMMUNO-MAGNEZ).jpg',
    link: 'https://namipharm.pl/full_system',
    colorClass: 'from-amber-400 via-gold-premium to-yellow-600',
    price: '436 zł'
  }
];

export const ARCHETYPES: Record<number, ArchetypeDefinition> = {
  ...ARCHETYPES_1_5,
  ...ARCHETYPES_6_10,
  ...ARCHETYPES_11_15,
  ...ARCHETYPES_16_22
};

export type VariantKey = 'A' | 'B' | 'C' | 'D' | 'E';

export const VARIANTS: Record<VariantKey, {
  key: VariantKey;
  name: string;
  title: string;
  subtitle: string;
  image: string;
  products: ('slim' | 'detox' | 'b-complex' | 'immuno')[];
  link: string;
}> = {
  A: {
    key: 'A',
    name: 'WARIANT A',
    title: 'DETOX + SLIM + MAGNEZ+B-COMPLEX',
    subtitle: 'Dedykowany Zestaw Wsparcia Biochemicznego',
    image: 'https://i.postimg.cc/TP4wjXcY/3-suplement-in-1-ima-jpeg.webp',
    products: ['detox', 'slim', 'b-complex'],
    link: 'https://namipharm.pl/detox_slim_magnez'
  },
  B: {
    key: 'B',
    name: 'WARIANT B',
    title: 'DETOX + SLIM + IMMUNOC+QUERCET',
    subtitle: 'Dedykowany Zestaw Oczyszczenia, Metabolizmu i Ochrony Komórkowej',
    image: 'https://i.postimg.cc/wBBsz2v8/DETOX-SLIM-IMMUNO.jpg',
    products: ['detox', 'slim', 'immuno'],
    link: 'https://namipharm.pl/detox_slim_imunno'
  },
  C: {
    key: 'C',
    name: 'WARIANT C',
    title: 'SLIM + MAGNEZ+B-COMPLEX',
    subtitle: 'Dedykowany Zestaw Kontroli Metabolizmu, Sprawności Umysłowej i Witalności',
    image: 'https://i.postimg.cc/GppsRK20/SLIM-B-COMPLEX-MAGNEZ.jpg',
    products: ['slim', 'b-complex'],
    link: 'https://namipharm.pl/slim_magnez'
  },
  D: {
    key: 'D',
    name: 'WARIANT D',
    title: 'IMMUNOC+QUERCET + SLIM + MAGNEZ+B-COMPLEX',
    subtitle: 'Dedykowany Zestaw Ochrony Komórkowej, Metabolizmu i Sprawności Umysłowej',
    image: 'https://i.postimg.cc/sgmZbqVC/DETOX-SLIM-B-COMPLEX-MAGNEZ.jpg',
    products: ['immuno', 'slim', 'b-complex'],
    link: 'https://namipharm.pl/imunno_slim_magnez'
  },
  E: {
    key: 'E',
    name: 'WARIANT E',
    title: 'NAMI PHARM – FULL SYSTEM ALCHEMY',
    subtitle: 'Zintegrowana Rekalibracja Biologiczna',
    image: 'https://i.postimg.cc/MGGjw5TJ/SLIM-DETOX-IMMUNO-MAGNEZ).jpg',
    products: ['detox', 'slim', 'immuno', 'b-complex'],
    link: 'https://namipharm.pl/full_system'
  }
};

export const ARCANUM_VARIANT_MAP: Record<number, VariantKey> = {
  1: 'A',
  2: 'B',
  3: 'B',
  4: 'A',
  5: 'C',
  6: 'A',
  7: 'A',
  8: 'E',
  9: 'B',
  10: 'C',
  11: 'A',
  12: 'C',
  13: 'A',
  14: 'A',
  15: 'E',
  16: 'A',
  17: 'C',
  18: 'C',
  19: 'A',
  20: 'A',
  21: 'A',
  22: 'C'
};

export function calculateMatrixNumber(dateStr: string): number {
  if (!dateStr) return 22;
  const parts = dateStr.split('-');
  if (parts.length < 3) return 22;
  
  // Year-Month-Day is standard input type date
  const day = parseInt(parts[2], 10);
  if (isNaN(day)) return 22;
  
  if (day <= 22) {
    return day;
  } else {
    // Sum digits
    const sum = day.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    return sum <= 22 ? sum : sum % 22 || 22;
  }
}

export function decodeBirthDate(dateStr: string): DecoderResult {
  const num = calculateMatrixNumber(dateStr);
  const archetype = ARCHETYPES[num] || ARCHETYPES[22];
  
  const variantKey = ARCANUM_VARIANT_MAP[num] || 'A';
  const variant = VARIANTS[variantKey];

  // Create deterministic scores based on the birthdate values to feel 100% authentic
  const parts = dateStr.split('-');
  const dVal = parseInt(parts[2] || '1', 10);
  const mVal = parseInt(parts[1] || '1', 10);
  const yVal = parseInt(parts[0] || '1990', 10);
  
  // Frequency in Hz calculation (e.g. 432Hz to 963Hz - typical solfeggio frequencies)
  const baseFreqs = [432, 528, 639, 741, 852, 963];
  const freqIndex = (dVal * mVal + yVal) % baseFreqs.length;
  const frequencyHz = baseFreqs[freqIndex];
  
  // Calculate deterministic scores (between 55% and 98%)
  const scoreSeed1 = (dVal * 7 + mVal * 13) % 40;
  const scoreSeed2 = (mVal * 9 + yVal * 3) % 40;
  const scoreSeed3 = (yVal * 5 + dVal * 11) % 40;
  const scoreSeed4 = (dVal * mVal + yVal) % 40;
  
  const scores = {
    clarity: 58 + scoreSeed1,
    energy: 55 + scoreSeed2,
    metabolism: 57 + scoreSeed3,
    resilience: 60 + scoreSeed4,
  };
  
  return {
    birthDate: dateStr,
    archetypeNum: archetype.num,
    archetypeName: archetype.name,
    archetypeSymbol: archetype.symbol,
    archetypeDesc: archetype.desc,
    neurotransmitter: archetype.neurotransmitter,
    neurotransmitterDesc: archetype.neurotransmitterDesc,
    frequencyHz,
    scores,
    recommendedProductId: archetype.recId,
    bundleProducts: variant.products,
    bundleTitle: variant.title,
    bundleSubtitle: variant.subtitle,
    bundleImage: variant.image,
    variantKey: variant.key,
    bundleLink: variant.link
  };
}
