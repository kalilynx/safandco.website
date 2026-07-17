import { createDeckDNA, describeDeckDNA } from './deckDNA.js';
import { buildNegativePrompt } from './negativePrompts.js';
import { getStyleRules } from './styleRules.js';

export function buildTarotPrompt({
  userPrompt,
  generator = 'Tarot',
  styleKey = 'celestialFantasy',
  aestheticPack = 'Gold Foil',
  referenceAnalysis = 'no reference image supplied',
  deckDNA = createDeckDNA(),
  characterConsistency = true,
} = {}) {
  const style = getStyleRules(styleKey);
  return {
    providerPrompt: [
      `Create an original ${generator} card illustration.`,
      `User vision: ${userPrompt}.`,
      `Style rules: ${style.medium}; ${style.lighting}; ${style.palette}; ${style.texture}; ${style.composition}; ${style.border}.`,
      `Aesthetic pack: ${aestheticPack}.`,
      `Reference analysis: ${referenceAnalysis}.`,
      describeDeckDNA(deckDNA),
      characterConsistency ? 'Preserve consistent facial structure, age, hairstyle, clothing motifs, and archetype identity.' : 'Character identity may vary.',
      'Print-quality composition, high detail, balanced visual hierarchy, no visible text inside artwork.',
    ].join('\n'),
    negativePrompt: buildNegativePrompt(style.avoid),
    deckDNA,
  };
}
