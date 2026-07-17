# API Integration Guide

## Environment variables

- `FLUX_API_KEY`
- `FLUX_MODEL`
- `STABLE_DIFFUSION_API_KEY`
- `STABLE_DIFFUSION_ENDPOINT`
- `DATABASE_URL`

## Provider switching

Default provider is FLUX Schnell. Stable Diffusion is the fallback provider. FLUX Pro is reserved for premium workflows.

## Cost optimisation

- Preview prompts before generation.
- Use Schnell for drafts and Pro only for final art.
- Cache Deck DNA and reference analysis results.
- Queue high-resolution enhancement separately from initial generation.

## Deployment

Configure provider keys in the deployment platform secrets manager and run the static build checks before deployment.
