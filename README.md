# Arcarna Studio

Arcarna Studio is an AI Tarot / Oracle / Angel Card Generator Studio for creating cohesive, publishable spiritual card decks from reference images, inspiration prompts, and reusable deck style DNA. This repository includes the static interactive prototype plus modular AI architecture scaffolding for future full-stack integration.

## Feature branch

Suggested branch: `aitarot-ai-generator`

## Static prototype

The current prototype lives in `index.html`, `src/styles.css`, and `src/app.js`. It demonstrates the Create Card workspace, creation modes, prompt preview, hidden style rules, Deck DNA toggles, and publication refinement tools without requiring a backend.

## Core workflow

1. Create Card
2. Choose upload, written inspiration, or AI Inspire Me
3. Analyze reference image and creative intent
4. Match the request to a genre and visual style
5. Optimize the final generation prompt
6. Generate card artwork through FLUX or Stable Diffusion providers
7. Save the result into a consistent deck system

## Repository structure

- `docs/` — product, API, prompt engine, and symbolism architecture.
- `src/components/` — React component skeletons for the generator studio.
- `src/ai/prompt-engine/` — prompt construction, style rules, negative prompts, and Deck DNA.
- `src/ai/image-generation/` — provider client abstractions and enhancement pipeline.
- `src/ai/interpretation/` — tarot meanings, numerology, and philosophy layers.
- `src/database/` — Prisma schema and model notes.
- `public/` — themes, borders, and examples for generated decks.

## Local development

```bash
npm run start
npm run build
```

## Environment

Copy `.env.example` to `.env` and fill in provider keys before wiring live generation APIs.
