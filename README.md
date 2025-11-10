# 747 Detailing Club - Site Web Premium

Site web complet pentru garajul de detailing premium **747 Detailing Club** din București, construit cu Next.js 14, TypeScript și Tailwind CSS.

## 🚀 Caracteristici

- **Design Premium**: Interfață modernă, elegantă, fără elemente copilărești
- **Responsive**: Optimizat pentru toate dispozitivele (mobile-first)
- **SEO Optimizat**: Meta tags, Schema.org, sitemap, robots.txt
- **Performanță**: Lazy loading, optimizare imagini, code splitting
- **Accesibilitate**: ARIA labels, keyboard navigation, contrast optim
- **Animații Elegante**: Framer Motion pentru tranziții fluide
- **Componente Interactive**: 
  - Before/After slider draggable
  - Service cards 3D flip
  - Gallery lightbox cu zoom
  - Service estimator în timp real
  - Sticky booking bar pe mobil

## 📋 Cerințe

- Node.js 18+ 
- npm sau yarn

## 🛠️ Instalare

1. **Clonează sau descarcă proiectul**

2. **Instalează dependențele:**
```bash
npm install
```

sau

```bash
yarn install
```

## 🏃 Rulare Locală

### Mod Development

```bash
npm run dev
```

Site-ul va fi disponibil la `http://localhost:3000`

### Build pentru Producție

```bash
npm run build
```

### Rulare Build de Producție

```bash
npm start
```

## 📁 Structura Proiectului

```
747-detailing/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal cu SEO
│   ├── page.tsx           # Pagina Home
│   ├── globals.css        # Stiluri globale
│   ├── servicii/          # Pagina Servicii
│   ├── galerie/           # Pagina Galerie
│   ├── despre-noi/        # Pagina Despre noi
│   ├── contact/           # Pagina Contact
│   ├── booking/           # Pagina Programare
│   ├── faq/               # Pagina FAQ
│   ├── sitemap.ts         # Sitemap generat
│   └── robots.txt          # Robots.txt
├── components/            # Componente React
│   ├── Header.tsx         # Header cu navigare
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero section cu carousel
│   ├── ServiceCards.tsx   # Carduri servicii 3D
│   ├── BeforeAfterSlider.tsx # Slider before/after
│   ├── GalleryGrid.tsx    # Grid galerie cu lightbox
│   ├── BookingForm.tsx    # Formular programare
│   ├── ServiceEstimator.tsx # Estimator servicii
│   ├── StickyBookingBar.tsx # Bar fix mobil
│   └── ...
├── public/                # Assets statice
│   └── site.webmanifest   # PWA manifest
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Design System

### Culori

- **Carbon**: `#0b0b0b` - Fundal principal
- **Metallic**: `#2f3438` - Carduri, panels
- **Gold**: `#d4a017` - Accente, CTA
- **Warm White**: `#f7f7f5` - Text
- **Neon Green**: `#16c79a` - Status badges

### Tipografie

- **Display**: Montserrat (titluri)
- **Body**: Inter (text)

## 📧 Configurare Email pentru Formular

Formularul de programare salvează datele local (localStorage) și simulează trimiterea email. Pentru funcționalitate reală:

### Opțiunea 1: API Route Next.js

Creează `app/api/booking/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  const data = await request.json()
  
  // Configurare transporter (ex: Gmail, SendGrid, etc.)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: 'contact@747detailingclub.ro',
    subject: `Programare nouă - ${data.name}`,
    html: `
      <h2>Programare nouă</h2>
      <p><strong>Nume:</strong> ${data.name}</p>
      <p><strong>Telefon:</strong> ${data.phone}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Serviciu:</strong> ${data.service}</p>
      <p><strong>Dată:</strong> ${data.date}</p>
      <p><strong>Interval:</strong> ${data.time}</p>
      <p><strong>Observații:</strong> ${data.notes}</p>
    `,
  })

  return NextResponse.json({ success: true })
}
```

Instalează nodemailer:
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### Opțiunea 2: SendGrid / Resend

Folosește un serviciu de email ca SendGrid sau Resend pentru o soluție mai robustă.

### Variabile de Mediu

Creează `.env.local`:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 🚀 Deploy

### Vercel (Recomandat)

1. **Instalează Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
vercel
```

Sau conectează repository-ul GitHub direct în dashboard-ul Vercel.

### Netlify

1. **Build command:** `npm run build`
2. **Publish directory:** `.next`
3. **Deploy:** Conectează repository-ul sau folosește Netlify CLI

### FTP / Server Tradițional

1. **Build:**
```bash
npm run build
```

2. **Export static (opțional):**
```bash
npm run build
# Next.js va genera fișierele în .next
```

3. **Upload** conținutul folderului `.next` și `public` pe server

## 🔍 SEO & Optimizări

### Verificări Pre-Lansare

1. **Google Search Console**: Adaugă site-ul și verifică sitemap-ul
2. **Google Analytics**: Adaugă tracking code (opțional)
3. **Open Graph Images**: Generează imagini 1200x630 pentru fiecare pagină
4. **Favicon**: Adaugă iconuri în `public/`:
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`
   - `icon-192.png`
   - `icon-512.png`

### Schema.org

Schema LocalBusiness este deja inclusă în `app/layout.tsx`. Verifică datele în [Google Rich Results Test](https://search.google.com/test/rich-results).

## 📱 PWA

Manifest-ul este configurat în `public/site.webmanifest`. Pentru activare completă:

1. Generează iconuri (192x192, 512x512)
2. Adaugă service worker (opțional)

## 🧪 Testare

### Teste QA Rapide

1. ✅ Buton apel telefonic funcționează
2. ✅ Formular booking salvează datele
3. ✅ Before/After slider este draggable
4. ✅ Gallery lightbox se deschide și închide
5. ✅ Service cards 3D flip la hover/tap
6. ✅ Sticky booking bar apare pe mobil
7. ✅ Navigare keyboard funcționează
8. ✅ Lazy loading imagini active
9. ✅ Meta tags OG corecte
10. ✅ Responsive pe toate breakpoint-urile

## 📝 Note Importante

### Imagini

Toate imaginile din componente sunt placeholder-uri. **Înlocuiește-le cu imagini reale:**

- Hero images: `/public/hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`
- Gallery: `/public/gallery-1.jpg` până la `gallery-9.jpg`
- Before/After: `/public/before-after-1-before.jpg`, etc.
- OG Image: `/public/og-image.jpg` (1200x630)

**Optimizare imagini:**
- Folosește format WebP
- Comprimă imagini (TinyPNG, ImageOptim)
- Generează srcset pentru responsive

### Conținut

Actualizează textele, prețurile și informațiile conform nevoilor tale.

## 🆘 Suport

Pentru întrebări sau probleme:
- Email: contact@747detailingclub.ro
- Telefon: 0745 313 747
- Instagram: [@747detailingclub](https://www.instagram.com/747detailingclub/)

## 📄 Licență

© 2024 747 Detailing Club. Toate drepturile rezervate.

