const fs = require('fs');

const data = JSON.parse(fs.readFileSync('items.json', 'utf8'));

function getArmorOrder(name) {
  const lower = name.toLowerCase();
  if (lower.includes('legs') || lower.includes('pants')) return 1;
  if (lower.includes('body') || lower.includes('armor') || lower.includes('robes') || lower.includes('cloak')) return 2;
  if (lower.includes('hat') || lower.includes('head') || lower.includes('helm') || lower.includes('hood') || lower.includes('helmet') || lower.includes('cap')) return 3;
  if (lower.includes('face') || lower.includes('visor') || lower.includes('guise') || lower.includes('mask') || lower.includes('pendant')) return 4;
  if (lower.includes('shoulder') || lower.includes('pauldron') || lower.includes('epaulet') || lower.includes('mantle') || lower.includes('wings')) return 5;
  return null;
}

function getGemOrder(name) {
  const lower = name.toLowerCase();
  if (lower.includes('nebula')) return 3;
  if (lower.includes('hypercube')) return 2;
  if (lower.includes('cube')) return 1;
  return null;
}

const updatedItems = data.map(item => {
  const name = item.name || '';
  const armorOrder = getArmorOrder(name);
  const gemOrder = getGemOrder(name);

  // Prioritize armor order if applicable, then gem order
  const order = armorOrder !== null ? armorOrder : (gemOrder !== null ? gemOrder : null);

  return { ...item, order };
});

fs.writeFileSync('items_with_order.json', JSON.stringify(updatedItems, null, 2));
console.log('Updated items written to items_with_order.json');
