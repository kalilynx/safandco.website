export function PromptBuilder({ subject = '', emotion = '', setting = '', symbolism = [] } = {}) {
  return {
    component: 'PromptBuilder',
    fields: ['subject', 'emotion', 'setting', 'lighting', 'colourMood', 'artStyle', 'symbolism'],
    optimizedPrompt: [subject, emotion, setting, symbolism.join(', ')].filter(Boolean).join(' · '),
  };
}
