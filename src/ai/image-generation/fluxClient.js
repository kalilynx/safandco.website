export async function generateWithFlux({ prompt, referenceImage, style, provider = 'schnell' }) {
  return {
    provider: provider === 'pro' ? 'FLUX Pro' : 'FLUX Schnell',
    status: 'queued',
    prompt,
    referenceImage,
    style,
  };
}
