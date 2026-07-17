export const philosophyFrames = {
  stoic: 'Focus the interpretation on virtue, agency, discipline, and what remains within the seeker\'s control.',
  socratic: 'Frame the card as a question that reveals assumptions and invites deeper inquiry.',
  hermetic: 'Connect the image to correspondence, polarity, rhythm, and the relationship between inner and outer worlds.',
  contemplative: 'Offer a gentle reflection practice rather than prediction or certainty.',
};

export function buildPhilosophyPrompt(frame = 'contemplative') {
  return philosophyFrames[frame] ?? philosophyFrames.contemplative;
}
