export const defaultDeckDNA = {
  style: 'Celestial Fantasy',
  palette: ['gold', 'navy', 'violet'],
  border: 'ornate celestial',
  lighting: 'moon glow',
  texture: 'oil painting',
  characterConsistency: true,
};

export function createDeckDNA(overrides = {}) {
  return {
    ...defaultDeckDNA,
    ...overrides,
    palette: overrides.palette || defaultDeckDNA.palette,
  };
}

export function formatDeckDNA(deckDNA = defaultDeckDNA) {
  return [
    `style: ${deckDNA.style}`,
    `palette: ${deckDNA.palette.join(', ')}`,
    `border: ${deckDNA.border}`,
    `lighting: ${deckDNA.lighting}`,
    `texture: ${deckDNA.texture}`,
    `character consistency: ${deckDNA.characterConsistency ? 'locked' : 'open'}`,
  ].join('; ');
}
