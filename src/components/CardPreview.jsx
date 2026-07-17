export function CardPreview({ title = 'The Star', subtitle = 'Hope · Renewal · Guidance', imageUrl = '' } = {}) {
  return { component: 'CardPreview', title, subtitle, imageUrl, aspectRatio: '2:3' };
}
