# Arcana Studio

AI Tarot / Oracle / Angel Card Generator Studio for creating cohesive, publishable decks without requiring prompt-engineering skills.

## Feature branch

Suggested branch: `aitarot-ai-generator`

## What this repository contains

- A static interactive prototype in `index.html`, `src/app.js`, and `src/styles.css`.
- Component blueprints for image upload, guided prompt building, style selection, deck building, and card preview.
- Prompt-engine modules for style rules, negative prompts, tarot prompt composition, and Deck DNA consistency.
- Image-generation provider clients for FLUX and Stable Diffusion integration stubs.
- Interpretation engines for tarot meanings, numerology, and philosophy prompts.
- Documentation covering product scope, API setup, prompt architecture, and symbolism systems.

## Local development

```bash
npm run start
```

Then open `http://127.0.0.1:4173/`.

## Validation

```bash
npm run build
```

The build script performs syntax checks on the dependency-free JavaScript modules.

## Environment

Copy `.env.example` to `.env` and provide keys for the providers you plan to enable.
