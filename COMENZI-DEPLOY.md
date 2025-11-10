# 🚀 Comenzi Exacte pentru Deploy

## 📦 Instalare Inițială

```bash
# Navighează în folderul proiectului
cd 747-detailing

# Instalează dependențele
npm install
```

**Ce face**: Instalează toate pachetele necesare (Next.js, React, Tailwind, Framer Motion, etc.)

---

## 🏃 Rulare Development

```bash
npm run dev
```

**Ce face**: 
- Pornește server-ul de development Next.js
- Site-ul va fi disponibil la `http://localhost:3000`
- Hot reload activ - modificările se văd instant
- **Nu folosi pentru producție!**

**Când să oprești**: Apasă `Ctrl+C` în terminal

---

## 🏗️ Build pentru Producție

```bash
npm run build
```

**Ce face**:
- Compilează și optimizează tot codul
- Generează fișiere statice optimizate
- Creează bundle-uri minificate
- Verifică erori TypeScript
- Rezultatul este în folderul `.next/`

**Timp estimat**: 1-3 minute (în funcție de hardware)

**Dacă apare eroare**: Verifică mesajul și corectează problema înainte de deploy

---

## 🎯 Rulare Build Local (Test)

```bash
npm start
```

**Ce face**:
- Pornește server-ul de producție local
- Folosește build-ul generat cu `npm run build`
- Site-ul va fi disponibil la `http://localhost:3000`
- **Folosește pentru testare înainte de deploy real**

---

## 🌐 Deploy pe Vercel (Recomandat)

### Opțiunea 1: Vercel CLI

```bash
# Instalează Vercel CLI global (doar prima dată)
npm i -g vercel

# Login în Vercel (doar prima dată)
vercel login

# Deploy
vercel

# Pentru producție
vercel --prod
```

**Ce face**:
- `vercel` - Deploy pe staging (URL temporar pentru testare)
- `vercel --prod` - Deploy pe producție (domeniul tău)

**Pași interacți**:
1. Vercel va întreba dacă vrei să conectezi un proiect existent sau să creezi unul nou
2. Alege folderul proiectului
3. Configurează variabilele de mediu (dacă ai)
4. Așteaptă deploy-ul (1-2 minute)

### Opțiunea 2: GitHub + Vercel Dashboard

1. **Push codul pe GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/747-detailing.git
git push -u origin main
```

2. **Conectează în Vercel Dashboard**:
   - Mergi pe [vercel.com](https://vercel.com)
   - Click "New Project"
   - Selectează repository-ul GitHub
   - Vercel detectează automat Next.js și configurează totul
   - Click "Deploy"

**Avantaje**: 
- Deploy automat la fiecare push
- Preview deployments pentru fiecare branch
- SSL automat
- CDN global

---

## 🌍 Deploy pe Netlify

### Netlify CLI

```bash
# Instalează Netlify CLI (doar prima dată)
npm i -g netlify-cli

# Login (doar prima dată)
netlify login

# Deploy
netlify deploy

# Pentru producție
netlify deploy --prod
```

**Configurare în Netlify Dashboard**:
- Build command: `npm run build`
- Publish directory: `.next`
- Framework: Next.js (detectat automat)

---

## 📤 Deploy pe Server FTP/Traditional

### Pasul 1: Build

```bash
npm run build
```

### Pasul 2: Export Static (Opțional)

Dacă vrei site complet static (fără server Node.js):

```bash
# Adaugă în next.config.js:
# output: 'export'

# Apoi:
npm run build
```

Rezultatul va fi în folderul `out/`

### Pasul 3: Upload

Upload conținutul folderului `.next` (sau `out/` dacă static) + `public/` pe server prin FTP/SFTP.

**Notă**: Pentru Next.js cu server, ai nevoie de Node.js pe server și să rulezi `npm start`.

---

## 🔧 Variabile de Mediu

### Creare `.env.local`

```bash
# Creează fișierul .env.local în root
touch .env.local
```

### Conținut `.env.local`:

```env
# Email Configuration (pentru formular booking)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=contact@747detailingclub.ro

# Google Analytics (opțional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# URL Site (pentru SEO)
NEXT_PUBLIC_SITE_URL=https://747detailingclub.ro
```

### Pe Vercel/Netlify:

Adaugă variabilele în dashboard:
- **Vercel**: Settings → Environment Variables
- **Netlify**: Site settings → Environment variables

---

## ✅ Verificare Post-Deploy

### 1. Testează Site-ul Live

```bash
# Deschide în browser
https://747detailingclub.ro
```

Verifică:
- ✅ Toate paginile se încarcă
- ✅ Imagini se afișează
- ✅ Formularul funcționează
- ✅ Link-urile funcționează

### 2. Testează SEO

```bash
# Verifică meta tags
curl -I https://747detailingclub.ro

# Testează sitemap
https://747detailingclub.ro/sitemap.xml
```

### 3. Testează Performance

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

---

## 🐛 Debugging

### Erori la Build

```bash
# Verifică erori TypeScript
npm run build

# Verifică erori ESLint
npm run lint
```

### Erori la Deploy

```bash
# Verifică logs Vercel
vercel logs

# Verifică logs Netlify
netlify logs
```

### Clear Cache

```bash
# Șterge .next și node_modules
rm -rf .next node_modules

# Reinstalează
npm install

# Rebuild
npm run build
```

---

## 📊 Comenzi Utile

```bash
# Verifică versiuni
node --version    # Ar trebui să fie 18+
npm --version

# Verifică dependențe
npm outdated

# Update dependențe (atenție!)
npm update

# Verifică erori TypeScript
npx tsc --noEmit
```

---

## 🎯 Quick Start (TL;DR)

```bash
# 1. Instalare
npm install

# 2. Development
npm run dev

# 3. Build
npm run build

# 4. Deploy (Vercel)
vercel --prod
```

---

## ⚠️ Note Importante

1. **Nu rulezi `npm run dev` în producție** - folosește `npm start` sau deploy pe platformă
2. **Variabilele de mediu** trebuie setate pe platforma de deploy
3. **Imaginile** trebuie înlocuite cu imagini reale înainte de deploy
4. **SSL** este automat pe Vercel/Netlify
5. **Domeniul** trebuie configurat în dashboard-ul platformei

---

## 🆘 Probleme Comune

### "Module not found"
```bash
npm install
```

### "Build failed"
Verifică erorile în terminal și corectează codul.

### "Port already in use"
```bash
# Schimbă portul
PORT=3001 npm run dev
```

### "Environment variables not working"
Asigură-te că variabilele încep cu `NEXT_PUBLIC_` pentru variabile publice.

---

**Succes cu deploy-ul! 🚀**

