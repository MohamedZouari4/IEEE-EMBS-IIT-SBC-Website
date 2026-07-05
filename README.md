# IEEE EMBS IIT Student Branch Website

A modern, modular React website for the IEEE Engineering in Medicine & Biology Society student chapter at IIT.

## Features

- 🎨 Modern dark-themed design with gradient accents
- ⚡ Fast development with Vite
- 📱 Fully responsive mobile-first design
- 🎯 Smooth scroll animations and transitions
- 🏗️ Modular component architecture
- 🎭 Interactive EKG animation and dot motif
- ♿ Accessible WCAG-compliant HTML

## Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will open at `http://localhost:5173`

## Project Structure

```
src/
├── components/        # Reusable React components
├── constants/         # Content data and assets
├── styles/           # Global CSS styles
├── App.jsx           # Root component
└── main.jsx          # Entry point
```

## Key Components

- **Navigation** — Sticky header with mobile menu
- **Hero** — Main landing section with CTA
- **About** — Goals and chapter mission
- **Events** — Upcoming events monitor
- **Team** — Board member cards
- **Faq** — Collapsible FAQ section
- **Join** — 3-step signup section
- **Footer** — Links and contact info

## Customization

Edit content in `src/constants/`:
- `content.js` — All text, links, and data
- `assets.js` — Logo and image URLs

## Build Tools

- **Vite** — Next-gen build tool
- **React 18** — UI framework
- **Lucide Icons** — Beautiful SVG icons

## License

© IEEE EMBS Student Branch Chapter, IIT
