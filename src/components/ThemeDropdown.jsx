export const themes = ['Luxury','Boho','Modern','Minimal','Spiritual','Dark','Pastel','Vintage','Gold Foil','Silver Foil','Crystal','Floral','Botanical','Forest','Celestial','Gothic','Steampunk','Cyber Mystic','Royal','Ancient','Feminine','Masculine','Neutral'];

export function ThemeDropdown({ selected = 'Gold Foil' } = {}) {
  return { component: 'ThemeDropdown', selected, themes };
}
