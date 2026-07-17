export function planEnhancements(options = {}) {
  return {
    upscale: options.upscale || '4x',
    faceCorrection: options.faceCorrection ?? true,
    handCorrection: options.handCorrection ?? true,
    artifactRemoval: options.artifactRemoval ?? true,
    borderSafeArea: options.borderSafeArea || 'tarot-print',
  };
}
