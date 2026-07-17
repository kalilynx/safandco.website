export function ImageUploader({ accept = 'image/*', mode = 'reference' } = {}) {
  return {
    component: 'ImageUploader',
    accept,
    mode,
    features: ['drag-drop-upload', 'image-preview', 'reference-analysis', 'style-extraction', 'composition-detection', 'palette-extraction', 'lighting-analysis'],
  };
}
