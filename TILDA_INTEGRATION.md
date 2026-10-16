# Integracja z Tilda.cc - NAMI PHARM

Ten dokument zawiera gotowy kod HTML oraz instrukcję krok po kroku, jak zintegrować aplikację Neuro-Decoder (wdrożoną na Vercel) z Twoją stroną na platformie **Tilda.cc**.

---

## Metoda integracji: Responsywny Iframe z dynamicznym dopasowaniem wysokości

Najlepszą i najbardziej rekomendowaną metodą osadzania aplikacji React z platformy Vercel na Tildzie jest użycie bezpiecznego kontenera `<iframe>`. Kod poniżej automatycznie dopasowuje swoją wysokość na urządzeniach mobilnych, zapobiega niechcianym paskom przewijania (scrollbars) i idealnie wtapia się w ciemny, neonowy styl strony NAMI PHARM.

### Krok 1: Dodaj blok HTML w Tilda
1. Otwórz edytor strony w Tildzie.
2. Dodaj nowy blok z kategorii **Other (Inne)** -> **T123 (HTML code / kod HTML)**.
3. Kliknij przycisk **Content (Treść)** na dodanym bloku.

### Krok 2: Wklej poniższy kod
Skopiuj poniższy kod i wklej go do pola tekstowego w bloku T123. **Pamiętaj, aby zamienić adres `https://nami-pharm-decoder.vercel.app` na Twój rzeczywisty adres produkcyjny z Vercel!**

```html
<!-- ========================================== -->
<!-- CONTAINER NAMI PHARM NEURO-DECIDER EMBED    -->
<!-- ========================================== -->
<div id="nami-pharm-app-container" style="position: relative; width: 100vw; height: 100vh; min-height: 100vh; overflow: hidden; background-color: #000000; border: none; margin: 0; padding: 0; border-radius: 0; box-shadow: none; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw;">
  
  <!-- Tilda-level Premium Preloader Overlay (Polish Language) with Pulsating Logo -->
  <div id="namipharm-preloader" style="position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #000000; color: #ffffff; z-index: 100; transition: opacity 0.6s ease; padding: 20px; text-align: center; pointer-events: none;">
    <!-- Outer Glow Ambient Light -->
    <div style="position: absolute; width: 300px; height: 300px; background: radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, rgba(0,0,0,0) 70%); top: 50%; left: 50%; transform: translate(-50%, -50%);"></div>
    
    <div style="position: relative; display: flex; flex-direction: column; align-items: center; max-width: 450px; width: 100%;">
      <!-- Logo Container with pulse -->
      <div style="margin-bottom: 32px; animation: tildaPulseLogo 3s ease-in-out infinite;">
        <img src="https://i.postimg.cc/Vsb5FX7n/logo.png" alt="NAMI PHARM" style="height: 120px; width: auto; max-width: 100%; object-fit: contain; filter: drop-shadow(0 0 25px rgba(245,158,11,0.4));" />
      </div>

      <!-- Loader Ring -->
      <div style="position: relative; width: 60px; height: 60px; margin-bottom: 24px;">
        <div style="position: absolute; inset: 0; border: 2px dashed rgba(245, 158, 11, 0.15); border-radius: 50%; animation: tildaSpin 8s linear infinite;"></div>
        <div style="position: absolute; inset: 4px; border: 2px solid transparent; border-top-color: #fbbf24; border-bottom-color: #d97706; border-radius: 50%; animation: tildaSpin 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite; filter: drop-shadow(0 0 10px rgba(251,191,36,0.5));"></div>
      </div>

      <div style="letter-spacing: 0.2em; font-size: 11px; text-transform: uppercase; font-weight: 700; color: #fbbf24; margin-bottom: 8px; font-family: monospace;">
        NAMI PHARM SYSTEM
      </div>
      
      <div style="font-weight: 800; font-size: 15px; color: #ffffff; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px; font-family: sans-serif;">
        Ładowanie dekodera NAMI PHARM...
      </div>
      
      <div style="font-size: 12px; color: #a3a3a3; letter-spacing: 0.05em; font-family: sans-serif;">
        Optymalizacja profilu neuro-synaptycznego
      </div>
    </div>
  </div>

  <style>
    @keyframes tildaSpin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes tildaPulseLogo {
      0%, 100% { opacity: 0.85; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.05); }
    }
  </style>

  <!-- UWAGA: Podmień src na swój właściwy adres z Vercel -->
  <iframe 
    src="https://nami-pharm-delta.vercel.app/" 
    id="nami-pharm-iframe"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; display: block; background: transparent; z-index: 2; opacity: 0; transition: opacity 0.5s ease;" 
    allow="geolocation; microphone; camera; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    scrolling="auto"
    loading="lazy"
    onload="this.style.opacity = '1'; var preloader = document.getElementById('namipharm-preloader'); if (preloader) { preloader.style.opacity = '0'; setTimeout(function(){ preloader.style.display = 'none'; }, 600); }">
  </iframe>
</div>
```
```

### Krok 3: Zapisz i opublikuj stronę
1. Kliknij **Save and Close (Zapisz i zamknij)** w bloku T123.
2. Opublikuj stronę w Tildzie (**Publish / Publikuj**).

---

## Dodatkowe wskazówki dotyczące wdrażania na Vercel

1. **Połączenie z GitHub:**
   - Zaloguj się na [Vercel](https://vercel.com) za pomocą konta GitHub.
   - Kliknij **Add New...** -> **Project**.
   - Wybierz zaimportowane repozytorium z Twojego konta GitHub.
   
2. **Ustawienia projektu (Vercel automatycznie wykryje konfigurację Vite):**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

3. **Zezwolenia na zagnieżdżanie (Clickjacking/X-Frame-Options):**
   Aplikacja jest standardowo skonfigurowana jako Single-Page Application i nie blokuje zagnieżdżania w `<iframe>`. Jeśli jednak używasz niestandardowych nagłówków bezpieczeństwa w pliku konfiguracji serwera, upewnij się, że nie wysyłasz nagłówka `X-Frame-Options: DENY` lub `X-Frame-Options: SAMEORIGIN`. Wdrożenie domyślne na Vercel bez dodatkowych zmian zadziała od razu idealnie!
