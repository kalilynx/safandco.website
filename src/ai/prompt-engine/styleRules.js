export const styleRules = {
  goldenRenaissance: {
    label: 'Golden Renaissance',
    medium: 'oil painting, renaissance artwork',
    lighting: 'warm candlelight, soft shadows',
    palette: ['gold', 'ivory', 'deep red'],
    texture: 'museum quality painted canvas',
    avoid: ['modern objects', 'text', 'watermark'],
  },
  darkAcademia: {
    label: 'Dark Academia',
    medium: 'antique illustration with painterly realism',
    lighting: 'library candlelight and muted window glow',
    palette: ['umber', 'sepia', 'moss', 'aged paper'],
    texture: 'aged parchment and worn leather',
    avoid: ['neon colours', 'plastic objects', 'watermark'],
  },
  celestialFantasy: {
    label: 'Celestial Fantasy',
    medium: 'ethereal fantasy painting',
    lighting: 'moon glow, star bloom, soft rim light',
    palette: ['gold', 'navy', 'violet'],
    texture: 'oil painting with subtle nebula grain',
    avoid: ['flat lighting', 'modern city objects', 'text'],
  },
};

export const styleOptions = [
  'Golden Renaissance',
  'Dark Academia',
  'Celestial Fantasy',
  'Ancient Egyptian',
  'Greek Mythology',
  'Botanical',
  'Art Nouveau',
  'Victorian Gothic',
  'Watercolour',
  'Oil Painting',
  'Sacred Geometry',
  'Luxury Oracle',
  'Minimal Modern',
];

export function findStyleRule(styleName) {
  return Object.values(styleRules).find((rule) => rule.label === styleName) || null;
}
