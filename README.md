# Clarity Dash | Mohamed Badawy

**Operational Clarity Portfolio**

This project is a React-based portfolio website designed to demonstrate operational capability through concrete case studies. It is built with Vite, TypeScript, and TailwindCSS.

## Core Principles
- **No Marketing Fluff**: Focus on metrics, constraints, and outcomes.
- **Proof over Claims**: Artifacts and execution logs validate the narrative.
- **Systematic Structure**: Consistent case study format (Context → Intervention → Result).

## Architecture
- **Tech Stack**: React 18, TypeScript, TailwindCSS, Framer Motion (animations).
- **Styling**: `index.css` (global variables) + Tailwind utility classes.
- **Components**: Functional components in `/components`.
- **Content**: Data-driven architecture; all content lives in `/data/content.ts`.

## Development

### Prerequisites
- Node.js (v16+)

### Setup
```bash
npm install
# Set GEMINI_API_KEY in .env.local if working on AI features
```

### Run Locally
```bash
npm run dev
```

### Deployment
Deploys to Firebase Hosting.
```bash
npm run build
firebase deploy
```
