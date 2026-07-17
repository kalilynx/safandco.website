const creationModes = [
  ['Reference Image', 'Extract lighting, composition, palette, texture, brush style, depth, and mood.'],
  ['Prompt Only', 'Expand a simple idea into a structured production prompt.'],
  ['Reference + Prompt', 'Use uploaded inspiration for style while the prompt controls meaning.'],
  ['Inspire Me', 'Generate a strong concept from a curated inspiration library.'],
];
const generators = ['Tarot', 'Oracle', 'Angel', 'Lenormand', 'Numerology', 'Ancient Philosophy', 'Hybrid'];
const directions = ['Luxury Tarot','Golden Renaissance','Dark Academia','Cottagecore','Art Nouveau','Victorian Gothic','Celestial Fantasy','Botanical','Ancient Egypt','Greek Mythology','Roman Mythology','Norse','Japanese Ukiyo-e','Chinese Ink','Watercolour','Oil Painting','Impressionism','Digital Painting','High Fantasy','Mystic Realism','Minimal Luxury','Crystal Magic','Nature Spirits','Dreamcore','Ethereal','Divine Feminine','Masculine Archetypes','Sacred Geometry','Cosmic','Modern Graphic','Vintage Illustration','Children\'s Storybook'];
const packs = ['Luxury','Boho','Modern','Minimal','Spiritual','Dark','Pastel','Vintage','Gold Foil','Silver Foil','Crystal','Floral','Botanical','Forest','Celestial','Gothic','Steampunk','Cyber Mystic','Royal','Ancient','Feminine','Masculine','Neutral'];
const lightings = ['Soft volumetric lighting', 'Golden hour', 'Moonlight', 'Candlelight', 'Low-key dramatic', 'Diffuse studio glow'];
const inspirations = ['Forest Spirits','Lost Kingdoms','Moon Temples','Forgotten Queens','Sacred Botanicals','Celestial Gardens','Dream Library','The Alchemist','The Wanderer','The Oracle of Time'];
const tools = ['Enhance Resolution 4×','Improve Faces','Correct Hands','Remove Artifacts','Add Decorative Border','Create Matching Card Back','Extend Canvas','Harmonize Colour Palette','Add Gold Foil Effect','Embossed Texture','CMYK Preview'];
const hiddenRules = {
  'Golden Renaissance': ['oil painting', 'warm gold palette', 'rich reds', 'classical proportions', 'decorative borders', 'no modern objects'],
  'Dark Academia': ['antique paper', 'library atmosphere', 'muted earth tones', 'Victorian fashion', 'aged textures', 'scholarly symbolism'],
  'Celestial Fantasy': ['stars', 'nebulae', 'gold foil', 'moonlight', 'constellations', 'sacred geometry', 'soft glow'],
};
const $ = (selector) => document.querySelector(selector);
const fillSelect = (selector, values, selected) => values.forEach((value) => $(selector).add(new Option(value, value, value === selected, value === selected)));

creationModes.forEach(([title, text], index) => {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = `modeCard${index === 2 ? ' active' : ''}`;
  card.innerHTML = `<strong>${index + 1}. ${title}</strong><span>${text}</span>`;
  card.addEventListener('click', () => {
    document.querySelectorAll('.modeCard').forEach((item) => item.classList.remove('active'));
    card.classList.add('active');
    renderPrompt();
  });
  $('#modeGrid').append(card);
});
fillSelect('#generator', generators, 'Tarot');
fillSelect('#direction', directions, 'Golden Renaissance');
fillSelect('#pack', packs, 'Gold Foil');
fillSelect('#lighting', lightings, 'Soft volumetric lighting');
tools.forEach((tool) => $('#toolCloud').append(Object.assign(document.createElement('span'), { textContent: tool })));

function renderPrompt() {
  const activeMode = document.querySelector('.modeCard.active strong').textContent.replace(/^\d+\. /, '');
  const rules = hiddenRules[$('#direction').value] || ['cohesive palette', 'symbolic composition', 'print-safe borders', 'no text', 'no watermark'];
  const deckRules = $('#deckDna').checked ? 'apply Deck DNA: recurring motifs, border language, brushwork, palette, and visual rhythm' : 'single-card exploration';
  const characterRules = $('#consistent').checked ? 'preserve facial structure, age, hairstyle, clothing motifs, and archetype identity' : 'allow new character identity';
  $('#promptPreview').textContent = `System rules + ${$('#generator').value} symbolism + ${$('#direction').value} hidden rules + ${$('#pack').value} aesthetic pack + ${$('#lighting').value} + reference analysis from ${activeMode} + ${deckRules} + ${characterRules} + print-quality negative prompt + user vision: ${$('#vision').value}`;
  $('#ruleStack').innerHTML = rules.map((rule) => `<span>${rule}</span>`).join('');
  $('#qualityScore').textContent = $('#deckDna').checked ? 'Deck-cohesive' : 'Print-ready';
}
['#generator', '#direction', '#pack', '#lighting', '#vision', '#consistent', '#deckDna'].forEach((selector) => $(selector).addEventListener('input', renderPrompt));
$('#inspire').addEventListener('click', () => {
  $('#vision').value = inspirations[Math.floor(Math.random() * inspirations.length)];
  renderPrompt();
});
renderPrompt();
