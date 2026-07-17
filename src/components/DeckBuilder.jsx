import { createDeckDNA } from '../ai/prompt-engine/deckDNA.js';

export function DeckBuilder({ deck = createDeckDNA(), cards = [] }) {
  return (
    <section className="studio-panel deck-builder">
      <h2>Deck DNA</h2>
      <p>{deck.style} · {deck.border} · {deck.palette.join(', ')}</p>
      <strong>{cards.length} cards planned</strong>
    </section>
  );
}
