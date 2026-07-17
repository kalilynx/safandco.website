export const defaultDeckDNA = {
  style: 'Celestial Fantasy',
  palette: ['gold', 'navy', 'violet'],
  border: 'ornate celestial',
  lighting: 'moon glow',
  texture: 'oil painting',
  motifs: ['moon phases', 'constellations', 'scrolls', 'thresholds'],
  aspectRatio: '2:3',
  typographySafeZones: true,
  characterConsistency: true,
};

export function createDeckDNA(overrides = {}) {
  return {
    ...defaultDeckDNA,
    ...overrides,
    palette: overrides.palette ?? defaultDeckDNA.palette,
    motifs: overrides.motifs ?? defaultDeckDNA.motifs,
  };
}

export function describeDeckDNA(deckDNA = defaultDeckDNA) {
  return `Deck DNA: ${deckDNA.style}, ${deckDNA.palette.join('/')} palette, ${deckDNA.border} border, ${deckDNA.lighting}, ${deckDNA.texture}, recurring motifs: ${deckDNA.motifs.join(', ')}, aspect ratio ${deckDNA.aspectRatio}.`;
}
