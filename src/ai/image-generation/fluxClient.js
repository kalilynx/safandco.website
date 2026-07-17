export async function generateWithFlux({ prompt, referenceImage, style, model = 'flux-schnell' }) {
  return {
    provider: 'flux',
    model,
    prompt,
    referenceImage,
    style,
    status: 'queued',
  };
}
