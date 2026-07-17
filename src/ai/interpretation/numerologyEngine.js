export function reduceNumber(value) {
  let number = Math.abs(Number(value));
  while (number > 9 && ![11, 22, 33].includes(number)) {
    number = String(number).split('').reduce((sum, digit) => sum + Number(digit), 0);
  }
  return number;
}

export function numerologyTheme(value) {
  const themes = {
    1: 'initiation and sovereignty',
    2: 'duality and relationship',
    3: 'creation and expression',
    4: 'structure and devotion',
    5: 'change and liberation',
    6: 'harmony and care',
    7: 'mysticism and inquiry',
    8: 'power and stewardship',
    9: 'completion and compassion',
    11: 'visionary intuition',
    22: 'master building',
    33: 'compassionate teaching',
  };
  return themes[reduceNumber(value)];
}
