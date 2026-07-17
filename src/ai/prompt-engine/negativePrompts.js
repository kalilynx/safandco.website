export const baseNegativePrompt = [
  'visible text',
  'watermark',
  'logo',
  'celebrity likeness',
  'copied protected artwork',
  'malformed hands',
  'distorted face',
  'extra limbs',
  'low resolution',
  'muddy details',
  'random symbols',
  'cluttered composition',
].join(', ');

export function buildNegativePrompt(extraAvoid = '') {
  return [baseNegativePrompt, extraAvoid].filter(Boolean).join(', ');
}
