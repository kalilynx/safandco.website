import { buildTarotPrompt } from '../ai/prompt-engine/tarotPromptBuilder.js';

export function PromptBuilder({ cardName, inspiration, style, deckDNA, referenceAnalysis }) {
  const promptPayload = buildTarotPrompt({ cardName, inspiration, style, deckDNA, referenceAnalysis });

  return (
    <section className="studio-panel prompt-builder">
      <h2>Prompt Builder</h2>
      <p>{promptPayload.prompt}</p>
      <small>{promptPayload.negativePrompt}</small>
    </section>
  );
}
