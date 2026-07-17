export const baseNegativePrompts = [
  'watermark',
  'signature',
  'unreadable text',
  'extra fingers',
  'distorted hands',
  'duplicate face',
  'low resolution',
  'muddy colours',
  'cropped border',
];

export function buildNegativePrompt(styleRule) {
  const styleAvoidList = styleRule?.avoid || [];
  return [...new Set([...baseNegativePrompts, ...styleAvoidList])].join(', ');
}
