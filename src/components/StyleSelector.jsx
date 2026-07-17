export const styles = ['Golden Renaissance','Dark Academia','Celestial Fantasy','Ancient Egyptian','Greek Mythology','Botanical','Art Nouveau','Victorian Gothic','Watercolour','Oil Painting','Sacred Geometry','Luxury Oracle','Minimal Modern'];

export function StyleSelector({ selected = 'Golden Renaissance' } = {}) {
  return { component: 'StyleSelector', selected, styles };
}
