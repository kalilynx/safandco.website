# API Integration Guide

## Environment variables

Copy `.env.example` to `.env` and configure:

- `FLUX_API_KEY` for FLUX Schnell and FLUX Pro.
- `STABLE_DIFFUSION_API_KEY` for fallback generation.
- `DATABASE_URL` for Deck DNA, gallery, and marketplace persistence.
- `PUBLIC_APP_URL` for deployment callbacks and share links.

## Provider switching

The image generation layer accepts a normalized request and routes it to the selected provider. FLUX Schnell is the default, Stable Diffusion is the fallback, and FLUX Pro is reserved for premium quality settings.

## Cost optimisation

- Use prompt validation before sending requests.
- Prefer FLUX Schnell for drafts.
- Use premium providers only for final art.
- Cache Deck DNA and reference analysis results.
- Batch low-resolution previews before high-resolution exports.

## Deployment

Deploy the static prototype to any static host. A production app can evolve toward Next.js, Remix, or another full-stack framework while preserving the prompt-engine modules.
