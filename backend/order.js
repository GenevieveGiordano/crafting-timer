const fs = require('fs');

const items = JSON.parse(fs.readFileSync('items.json', 'utf-8'));

function getArmorOrderFromGroupOrName(item) {
  // We'll check group first, then fallback to name if needed
  const group = item.group ? item.group.toLowerCase() : '';
  const name = item.name ? item.name.toLowerCase() : '';

  // Legs
  if (group.includes('legs') || name.includes('legs')) return 1;

  // Body: check for robes, armor, or "body"
  if (
    group.includes('body') ||
    name.includes('robe') ||
    name.includes('armor') ||
    name.includes('armour') // British spelling
  ) return 2;

  // Head: head, hat, helm, cap
  if (
    group.includes('head') ||
    name.includes('hat') ||
    name.includes('helm') ||
    name.includes('cap')
  ) return 3;

  // Face: pendant, guise, visor, face
  if (
    group.includes('face') ||
    name.includes('pendant') ||
    name.includes('guise') ||
    name.includes('visor')
  ) return 4;

  // Shoulders: shoulders, pauldron, epaulet, epaulette
  if (
    group.includes('shoulders') ||
    name.includes('companion') ||
    name.includes('pauldron') ||
    name.includes('epaulet') ||
    name.includes('epaulette')
  ) return 5;

  // Unknown items get a high order to be last
  return 99;
}

function getGemOrder(name) {
  const lower = name.toLowerCase();

  if (lower.includes('uber')) return 3;
  if (lower.includes('mega')) return 2;
  return 1;  // normal gems first
}

const updatedItems = items.map(item => {
  let order = 99;

  if (item.name.toLowerCase().includes('gem')) {
    order = getGemOrder(item.name);
  } else {
    order = getArmorOrderFromGroupOrName(item);
  }

  return {
    ...item,
    order,
  };
});


fs.writeFileSync('items.json', JSON.stringify(updatedItems, null, 2));

console.log('Items updated with order (legs first) and saved to items.json');
