# Nguyễn Đức Mạnh — Portfolio

Personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

🔗 **Live:** [manhnd0801-jpg.github.io/portfolio](https://manhnd0801-jpg.github.io/portfolio) *(or your deployed URL)*

---

## Preview

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen intro with magnetic portrait effect |
| **Marquee** | Scroll-driven dual-row image strip |
| **About** | Animated character-by-character text reveal + stats |
| **Skills** | 5 skill groups with tech tag chips |
| **Experience** | 5 sticky-stacking cards (VNPT IT → GO Solutions) |
| **Contact** | Email, phone, location footer |

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| [React](https://react.dev) | 18.3.1 | UI framework |
| [TypeScript](https://www.typescriptlang.org) | 5.4.5 | Type safety |
| [Vite](https://vitejs.dev) | 5.2.11 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com) | 3.4.1 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion) | 12.38.0 | Animations & scroll effects |
| [Lucide React](https://lucide.dev) | 0.344.0 | Icon library |

---

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── AnimatedText.tsx    # Char-by-char scroll reveal
│   │   ├── ContactButton.tsx   # Gradient pill CTA button
│   │   ├── FadeIn.tsx          # Scroll-triggered fade wrapper
│   │   ├── LiveProjectButton.tsx
│   │   └── Magnet.tsx          # Mouse-following magnetic effect
│   ├── sections/
│   │   ├── HeroSection.tsx     # Full-screen hero
│   │   ├── MarqueeSection.tsx  # Scroll-driven image marquee
│   │   ├── AboutSection.tsx    # About + stats + achievements
│   │   ├── ServicesSection.tsx # Skills breakdown
│   │   └── ProjectsSection.tsx # Experience cards + education + contact
│   ├── App.tsx
│   ├── index.css               # Global styles + .hero-heading gradient
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Clone the repo
git clone https://github.com/manhnd0801-jpg/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Available Scripts

```bash
npm run dev       # Start development server (hot reload)
npm run build     # Type-check + production build → dist/
npm run preview   # Preview production build locally
```

---

## Key Features

- **Dark theme** — `#0C0C0C` base with `#D7E2EA` text palette
- **Kanit font** — Google Fonts, weights 300–900
- **Fluid typography** — `clamp()` everywhere, scales from mobile to 4K
- **Magnetic portrait** — mouse-following effect on hero image
- **Scroll marquee** — two rows of images driven by `window.scrollY`
- **Animated text** — per-character opacity tied to scroll progress via `useScroll`
- **Sticky stacking cards** — 5 experience cards that scale down as you scroll past
- **Fully responsive** — mobile-first, Tailwind breakpoints `sm / md / lg`

---

## Deployment

### Vercel (recommended)

**Option 1 — Import từ GitHub (dễ nhất):**

1. Vào [vercel.com](https://vercel.com) → **Add New Project**
2. Import repo `manhnd0801-jpg/portfolio` từ GitHub
3. Vercel tự detect Vite, cấu hình sẵn:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy** → xong ✅

**Option 2 — Vercel CLI:**

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Netlify

```bash
npm run build
# Drag & drop the dist/ folder to netlify.com/drop
```

### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

npm run deploy
```

> **Note:** For GitHub Pages with a non-root base path, set `base` in `vite.config.ts`:
> ```ts
> export default defineConfig({ base: '/portfolio/', plugins: [react()] })
> ```

---

## Contact

**Nguyễn Đức Mạnh**

- 📧 [manhnd0801@gmail.com](mailto:manhnd0801@gmail.com)
- 📱 0974 636 884
- 📍 Hà Nội, Việt Nam
- 🐙 [github.com/manhnd0801-jpg](https://github.com/manhnd0801-jpg)

---

## License

MIT — feel free to use this as a template for your own portfolio.
