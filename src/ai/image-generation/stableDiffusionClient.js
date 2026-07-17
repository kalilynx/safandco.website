export async function generateWithStableDiffusion({ prompt, negativePrompt, referenceImage, style }) {
  return {
    provider: 'Stable Diffusion',
    status: 'queued',
    prompt,
    negativePrompt,
    referenceImage,
    style,
  };
}
