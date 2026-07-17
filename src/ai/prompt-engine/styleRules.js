export const styleRules = {
  goldenRenaissance: {
    label: 'Golden Renaissance',
    medium: 'oil painting, renaissance artwork',
    lighting: 'warm candlelight, soft shadows, soft volumetric glow',
    palette: 'gold, ivory, deep red, warm umber',
    texture: 'museum quality painted canvas',
    composition: 'classical proportions, symbolic composition, elegant framing',
    border: 'decorative gilded border with typography-safe title space',
    avoid: 'modern objects, text, watermark, logo, distorted anatomy',
  },
  darkAcademia: {
    label: 'Dark Academia',
    medium: 'antique illustration with painterly realism',
    lighting: 'low-key library lighting, candle glow, soft shadows',
    palette: 'muted earth tones, sepia, oxblood, aged ivory',
    texture: 'antique paper, aged leather, detailed engravings',
    composition: 'scholarly symbolism, Victorian fashion, library atmosphere',
    border: 'aged ornamental border with archival paper margin',
    avoid: 'neon colors, modern screens, text, watermark, clutter',
  },
  celestialFantasy: {
    label: 'Celestial Fantasy',
    medium: 'fantasy illustration with luminous cosmic detailing',
    lighting: 'moonlight, star glow, soft ethereal rim light',
    palette: 'navy, violet, silver, gold foil accents',
    texture: 'nebula haze, floating fabrics, sacred geometry overlays',
    composition: 'constellations, cosmic backgrounds, elegant symbolic hierarchy',
    border: 'ornate celestial border with moon phases and stars',
    avoid: 'flat lighting, harsh daylight, text, watermark, malformed hands',
  },
};

export function getStyleRules(styleKey) {
  return styleRules[styleKey] ?? styleRules.celestialFantasy;
}
