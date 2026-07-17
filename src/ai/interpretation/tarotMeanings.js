export const tarotMeanings = {
  empress: {
    upright: ['creativity', 'nurturing', 'abundance', 'embodied wisdom'],
    reflection: 'What are you ready to cultivate with patience and care?',
  },
  star: {
    upright: ['hope', 'renewal', 'guidance', 'spiritual orientation'],
    reflection: 'Where can hope become a practical direction rather than an escape?',
  },
};

export function getTarotMeaning(cardKey) {
  return tarotMeanings[cardKey] ?? { upright: ['mystery'], reflection: 'What does this symbol ask you to notice?' };
}
