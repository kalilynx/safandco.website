export async function generateWithStableDiffusion({ prompt, referenceImage, style }) {
  return {
    provider: 'stable-diffusion',
    prompt,
    referenceImage,
    style,
    status: 'queued',
  };
}
