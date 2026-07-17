const directions = ['Luxury Tarot','Golden Renaissance','Dark Academia','Cottagecore','Art Nouveau','Celestial Fantasy','Botanical','Ancient Egypt','Greek Mythology','Norse','Japanese Ukiyo-e','Chinese Ink','Watercolour','High Fantasy','Mystic Realism','Sacred Geometry','Cosmic','Vintage Illustration'];
const packs = ['Luxury','Boho','Modern','Minimal','Spiritual','Dark','Pastel','Vintage','Gold Foil','Crystal','Forest','Celestial','Gothic','Cyber Mystic','Royal'];
const direction = document.querySelector('#direction');
const pack = document.querySelector('#pack');
const prompt = document.querySelector('#prompt');
const preview = document.querySelector('#preview');

directions.forEach((item) => direction.add(new Option(item, item, item === 'Celestial Fantasy', item === 'Celestial Fantasy')));
packs.forEach((item) => pack.add(new Option(item, item, item === 'Gold Foil', item === 'Gold Foil')));
function renderPreview() {
  preview.textContent = `${direction.value} with ${pack.value.toLowerCase()} overlay, 2:3 portrait card, symbolic and print-ready. ${prompt.value}`;
}
[direction, pack, prompt].forEach((element) => element.addEventListener('input', renderPreview));
renderPreview();
