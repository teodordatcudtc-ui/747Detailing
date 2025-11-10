# 📋 TO DO LIST - Verificări Pre-Lansare

## ✅ Checklist Complet pentru Lansare Site 747 Detailing Club

### 1. 📸 Imagini și Assets
- [ ] **Hero Images**: Înlocuiește placeholder-urile cu imagini reale (hero-1.jpg, hero-2.jpg, hero-3.jpg)
  - Format: WebP optimizat
  - Dimensiuni: 1920x1080 sau mai mari
  - Calitate: Premium, mașini lucioase în lumină studio

- [ ] **Gallery Images**: Adaugă 9+ imagini reale în `/public/`
  - gallery-1.jpg până la gallery-9.jpg
  - Optimizare WebP, lazy loading activ

- [ ] **Before/After Images**: Pregătește perechi de imagini
  - before-after-1-before.jpg / before-after-1-after.jpg
  - Minimum 3 perechi pentru slider

- [ ] **OG Image**: Generează imagine 1200x630 pentru social media
  - `/public/og-image.jpg`
  - Include logo și text "747 Detailing Club"

- [ ] **Favicon Set**: Generează toate dimensiunile
  - favicon.ico (16x16, 32x32)
  - favicon-16x16.png
  - favicon-32x32.png
  - apple-touch-icon.png (180x180)
  - icon-192.png (PWA)
  - icon-512.png (PWA)

### 2. 🔧 Configurare Email
- [ ] **Alege serviciu email**: SendGrid / Resend / Nodemailer
- [ ] **Creează API Route**: `app/api/booking/route.ts`
- [ ] **Adaugă variabile env**: `.env.local` cu credențiale
- [ ] **Testează formular**: Verifică că email-urile ajung corect
- [ ] **Backup local**: Verifică că localStorage funcționează

### 3. 🌐 SEO & Indexare
- [ ] **Google Search Console**: 
  - Adaugă proprietatea site-ului
  - Trimite sitemap: `https://747detailingclub.ro/sitemap.xml`
  - Verifică indexarea paginilor

- [ ] **Google My Business**: 
  - Actualizează profilul cu link către site
  - Adaugă fotografii

- [ ] **Schema.org**: 
  - Testează cu [Google Rich Results Test](https://search.google.com/test/rich-results)
  - Verifică că toate datele sunt corecte

- [ ] **Meta Tags**: 
  - Verifică că fiecare pagină are title și description unic
  - Testează OG tags cu [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
  - Testează Twitter Cards

### 4. 📊 Analytics & Tracking
- [ ] **Google Analytics 4**: 
  - Creează proprietate GA4
  - Adaugă tracking code în `app/layout.tsx`
  - Configurează event tracking pentru:
    - Clicks pe "Programează"
    - Clicks pe telefon
    - Submissions formular

- [ ] **Facebook Pixel** (opțional): 
  - Adaugă cod tracking dacă folosești Facebook Ads

### 5. 🔒 Securitate & Performanță
- [ ] **SSL Certificate**: Asigură-te că site-ul rulează pe HTTPS
- [ ] **Security Headers**: Verifică headers (HSTS, CSP, etc.)
- [ ] **Performance Audit**: 
  - Rulează [PageSpeed Insights](https://pagespeed.web.dev/)
  - Target: 90+ pe mobile și desktop
  - Optimizează imagini dacă e necesar

- [ ] **Lighthouse Score**: 
  - Verifică accesibilitate (target: 100)
  - Verifică best practices
  - Verifică SEO score

### 6. 📱 Testare Cross-Device
- [ ] **Mobile**: 
  - Testează pe iPhone (Safari)
  - Testează pe Android (Chrome)
  - Verifică sticky booking bar
  - Verifică hamburger menu

- [ ] **Tablet**: 
  - Testează layout pe iPad
  - Verifică grid-uri și spacing

- [ ] **Desktop**: 
  - Testează pe Chrome, Firefox, Safari, Edge
  - Verifică hover effects
  - Verifică 3D card flips

### 7. 🧪 Funcționalități
- [ ] **Formular Booking**: 
  - Testează validare
  - Verifică trimitere email
  - Verifică salvare locală

- [ ] **Before/After Slider**: 
  - Testează drag pe desktop
  - Testează touch pe mobil
  - Verifică animația automată

- [ ] **Gallery Lightbox**: 
  - Testează deschidere/închidere
  - Verifică zoom (wheel + butoane)
  - Verifică navigare între imagini

- [ ] **Service Cards 3D**: 
  - Testează flip la hover (desktop)
  - Testează flip la tap (mobil)

- [ ] **Service Estimator**: 
  - Verifică calculul corect
  - Verifică discount pentru pachete

- [ ] **Sticky Booking Bar**: 
  - Apare după scroll pe mobil
  - Butoanele funcționează corect

### 8. 🔗 Link-uri & Integrări
- [ ] **Telefon**: 
  - Testează `tel:+40745313747` pe mobil
  - Verifică că deschide aplicația de apeluri

- [ ] **Instagram**: 
  - Verifică link către [@747detailingclub](https://www.instagram.com/747detailingclub/)
  - Testează deschidere în tab nou

- [ ] **Google Maps**: 
  - Verifică embed-ul funcționează
  - Testează link "Deschide în Google Maps"

### 9. 📝 Conținut
- [ ] **Texturi**: 
  - Revizuiește toate textele pentru erori
  - Verifică ortografie și gramatică
  - Actualizează prețuri dacă e necesar

- [ ] **Testimoniale**: 
  - Verifică că sunt realiste
  - Adaugă mai multe dacă ai

- [ ] **FAQ**: 
  - Verifică că răspunsurile sunt complete
  - Adaugă întrebări suplimentare dacă e necesar

### 10. 🚀 Deploy & DNS
- [ ] **Domeniu**: 
  - Configurează DNS pentru domeniu
  - Verifică că www și non-www redirect corect
  - Setează canonical URLs

- [ ] **Deploy**: 
  - Deploy pe Vercel/Netlify sau server
  - Verifică că build-ul reușește
  - Testează site-ul live

- [ ] **Environment Variables**: 
  - Configurează variabile de mediu pe platformă
  - Verifică că EMAIL_USER și EMAIL_PASS sunt setate

### 11. 📧 Post-Lansare
- [ ] **Monitorizare**: 
  - Verifică erori în console (Vercel Analytics / Sentry)
  - Monitorizează formularul pentru submisii

- [ ] **Backup**: 
  - Configurează backup pentru datele formularului
  - Exportă periodic booking-urile din localStorage

- [ ] **Actualizări**: 
  - Planifică actualizări periodice de conținut
  - Adaugă imagini noi în galerie regulat

### 12. 🎯 Marketing
- [ ] **Social Media**: 
  - Anunță lansarea pe Instagram
  - Share link-ul site-ului

- [ ] **Google My Business**: 
  - Adaugă link către site în profil
  - Postează despre lansare

- [ ] **Local SEO**: 
  - Adaugă site-ul în directoare locale
  - Solicită review-uri de la clienți

## 🎉 Finalizare

După completarea tuturor item-urilor de mai sus, site-ul este gata pentru lansare!

**Timp estimat pentru completare**: 4-8 ore (în funcție de disponibilitatea asset-urilor)

---

**Notă**: Acest checklist este un ghid complet. Nu toate item-urile sunt obligatorii pentru lansare, dar recomandăm să le verifici pe toate pentru cel mai bun rezultat.

