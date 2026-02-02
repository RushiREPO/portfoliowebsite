# Data Scientist Portfolio Website

A modern, responsive portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

## Features

- ✨ **AI Chat**: Powered by Google Gemini (or OpenAI) to answer questions about your skills
- 📊 **Skills Visualization**: Interactive skill charts using Recharts
- 🎨 **Modern Design**: Glassmorphism UI with smooth animations
- 📱 **Fully Responsive**: Mobile, tablet, and desktop optimized
- ⚡ **Fast Performance**: Vite-powered lightning-fast builds

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone and install
git clone https://github.com/RushiREPO/portfoliowebsite.git
cd portfoliowebsite
npm install
```

### Environment Setup

Copy `.env.example` to `.env.local` and add your API keys:

```bash
cp .env.example .env.local
```

Then edit `.env.local` with:
```
GEMINI_API_KEY=your_key_here
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub (already done ✓)
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel auto-detects Vite settings
5. Add environment variables in Vercel dashboard
6. Click **Deploy** — done!

Your site will be live at `https://portfoliowebsite-*.vercel.app`

### Deploy to Other Platforms

- **Netlify**: Connect GitHub → auto-deploys `dist/` folder
- **GitHub Pages**: Push `dist/` to `gh-pages` branch
- **Any Static Host**: Upload the `dist/` folder

## Project Structure

```
├── src/
│   ├── components/       # React components (AIChat, SkillChart)
│   ├── services/         # API services (Gemini, OpenAI)
│   ├── App.tsx           # Main app
│   └── index.tsx         # Entry point
├── public/               # Static assets & favicon
├── dist/                 # Production build (auto-generated)
├── vercel.json           # Vercel deployment config
├── vite.config.ts        # Vite configuration
└── package.json          # Dependencies & scripts
```

## Technologies

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Build**: Vite 6
- **Visualization**: Recharts
- **AI**: Google Gemini API / OpenAI
- **Deployment**: Vercel, GitHub Pages, or any static host

## License

MIT

---

**Deploy now**: [https://vercel.com/new](https://vercel.com/new)
