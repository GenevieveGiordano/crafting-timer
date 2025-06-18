const fs = require('fs');

const items = JSON.parse(fs.readFileSync('items.json', 'utf-8'));

// Armor order (used by non-resource items or to map armor inside resources)
function getArmorOrderFromGroupOrName(item) {
  const group = item.group?.toLowerCase() || '';
  const name = item.name?.toLowerCase() || '';

  if (
    group.includes('legs') ||
    name.includes('legs') ||
    name.includes('pants')
  ) return 1;

  if (
    group.includes('body') ||
    name.includes('body') ||
    name.includes('robe') ||
    name.includes('cloak') ||
    name.includes('armor') ||
    name.includes('armour')
  ) return 2;

  if (
    group.includes('head') ||
    name.includes('head') ||
    name.includes('hood') ||
    name.includes('hat') ||
    name.includes('helm') ||
    name.includes('cap')
  ) return 3;

  return 99;
}

// Gem order
function getGemOrder(name) {
  const lower = name.toLowerCase();
  if (lower.includes('uber')) return 3;
  if (lower.includes('mega')) return 2;
  return 1;
}

// Stat order for books, rings, weapons
function getStatOrder(item) {
  const group = item.group?.toLowerCase() || '';
  const image = item.image?.toLowerCase() || '';

  if (group.includes('int') || image.includes('int')) return 1;
  if (group.includes('agi') || image.includes('agi')) return 2;
  if (group.includes('sta') || image.includes('sta')) return 3;
  if (group.includes('str') || image.includes('str')) return 4;

  return 99;
}

// Resource order
function getResourceOrder(item) {
  const name = item.name?.toLowerCase() || '';

  if (name.includes('ore') || name.includes('fragment')) return 0;
  if (name.includes('chunk') || name.includes('clump') || name.includes('gem')) return 1;
  if (name.includes('slab') || name.includes('nebula')) return 2;

  if (name.includes('hypercube')) {
    if (name.includes('sea')) return 7;
    return 4;
  }

  if ((name.includes('cube') && (name.includes('salt') || name.includes('coral')))) return 3;

  if (name.includes('plate')) return 3;

  if (name.includes('infused') && name.includes('plate')) return 7;

  if (name.includes('legs') || name.includes('pants')) return 8;
  if (name.includes('body') || name.includes('robe') || name.includes('cloak') || name.includes('armor')) return 9;
  if (name.includes('helm') || name.includes('hat') || name.includes('cap') || name.includes('head')) return 10;

  return 5; // Unknown but not armor
}


const updatedItems = items.map(item => {
  const name = item.name?.toLowerCase() || '';
  const image = item.image?.toLowerCase() || '';
  const category = item.category?.toLowerCase() || '';

  let order = 99;
  let statOrder = 99;

  const isGem = name.includes('gem');
  const isRing = image.includes('ring');
  const isBook = image.includes('book');
  const isWeapon =
    image.includes('weapon') ||
    image.includes('sword') ||
    image.includes('bow') ||
    image.includes('dagger') ||
    image.includes('staff') ||
    image.includes('axe');

  if (category === 'resources') {
    order = getResourceOrder(item);
  } else if (isGem) {
    order = getGemOrder(name);
  } else if (isRing || isBook || isWeapon) {
    order = 10;
    statOrder = getStatOrder(item);
  } else {
    order = getArmorOrderFromGroupOrName(item);
    statOrder = getStatOrder(item);
  }

  return {
    ...item,
    order,
    statOrder,
  };
});

// Sort: order → statOrder → name
updatedItems.sort((a, b) => {
  if (a.order !== b.order) return a.order - b.order;
  if (a.statOrder !== b.statOrder) return a.statOrder - b.statOrder;
  return a.name.localeCompare(b.name);
});

fs.writeFileSync('items.json', JSON.stringify(updatedItems, null, 2));
console.log('items.json updated and sorted with custom resource/armor logic');
