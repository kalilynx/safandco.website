import { createDeckDNA } from '../ai/prompt-engine/deckDNA.js';

export function DeckBuilder({ title = 'Untitled Deck', cards = [], deckDNA = createDeckDNA() } = {}) {
  return { component: 'DeckBuilder', title, cards, deckDNA, status: cards.length ? 'in-progress' : 'draft' };
}
