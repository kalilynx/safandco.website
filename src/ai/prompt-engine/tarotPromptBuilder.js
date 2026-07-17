import { defaultDeckDNA, formatDeckDNA } from './deckDNA.js';
import { buildNegativePrompt } from './negativePrompts.js';
import { findStyleRule } from './styleRules.js';

export function buildTarotPrompt({
  cardName,
  generator = 'Tarot',
  inspiration,
  style = defaultDeckDNA.style,
  referenceAnalysis = {},
  deckDNA = defaultDeckDNA,
} = {}) {
  const styleRule = findStyleRule(style);
  const referenceLayer = Object.entries(referenceAnalysis)
    .map(([key, value]) => `${key}: ${value}`)
    .join('; ');

  return {
    provider: 'flux',
    prompt: [
      `${generator} card artwork for ${cardName || 'an original archetype'}`,
      inspiration,
      styleRule && `${styleRule.medium}; ${styleRule.lighting}; palette ${styleRule.palette.join(', ')}; ${styleRule.texture}`,
      referenceLayer && `reference analysis: ${referenceLayer}`,
      `Deck DNA: ${formatDeckDNA(deckDNA)}`,
      'print-ready composition, decorative border, symbolic visual hierarchy, no embedded text',
    ]
      .filter(Boolean)
      .join('. '),
    negativePrompt: buildNegativePrompt(styleRule),
    style: deckDNA,
  };
}
