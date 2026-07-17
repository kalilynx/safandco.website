export function reduceNumber(value) {
  const digits = String(value).replace(/\D/g, '').split('').map(Number);
  let total = digits.reduce((sum, digit) => sum + digit, 0);
  while (total > 9 && ![11, 22, 33].includes(total)) {
    total = String(total).split('').reduce((sum, digit) => sum + Number(digit), 0);
  }
  return total;
}

export function numerologyKeywords(value) {
  const map = {
    1: ['initiation', 'will', 'spark'],
    2: ['duality', 'intuition', 'partnership'],
    3: ['creation', 'expression', 'growth'],
    4: ['structure', 'foundation', 'order'],
    5: ['change', 'freedom', 'motion'],
    6: ['harmony', 'care', 'responsibility'],
    7: ['mystery', 'study', 'spirit'],
    8: ['power', 'cycles', 'mastery'],
    9: ['completion', 'wisdom', 'release'],
    11: ['vision', 'awakening', 'channel'],
    22: ['builder', 'legacy', 'manifestation'],
    33: ['teacher', 'compassion', 'devotion'],
  };
  return map[reduceNumber(value)] || [];
}
