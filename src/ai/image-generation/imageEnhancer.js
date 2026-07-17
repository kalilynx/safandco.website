export const enhancementTools = [
  'enhance-resolution-4x',
  'improve-faces',
  'correct-hands',
  'remove-artifacts',
  'add-decorative-border',
  'create-matching-card-back',
  'extend-canvas',
  'remove-background',
  'replace-background',
  'harmonize-colour-palette',
  'add-gold-foil-effect',
  'add-embossed-texture',
  'convert-to-cmyk-preview',
];

export function createEnhancementRequest(imageId, tools = enhancementTools.slice(0, 3)) {
  return { imageId, tools, status: 'draft' };
}
