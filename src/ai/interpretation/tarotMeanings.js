export const tarotMeanings = {
  empress: {
    upright: 'creation, abundance, care, beauty, embodiment',
    reversed: 'creative block, dependency, neglect, imbalance',
    visualMotifs: ['garden', 'crown of stars', 'wheat', 'flowing robe'],
  },
  star: {
    upright: 'hope, renewal, healing, guidance, faith',
    reversed: 'discouragement, disconnection, delayed renewal',
    visualMotifs: ['water vessels', 'night sky', 'eight-pointed star', 'reflection'],
  },
};

export function getTarotMeaning(cardKey) {
  return tarotMeanings[cardKey?.toLowerCase()] || null;
}
