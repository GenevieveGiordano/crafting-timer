// " " allows spaces; needs bracket notation [" words "] instead of . notation
// const itemGroups = {
//     Test_1: [
//       { id: 0, duration: 5}
//     ],

//chatgpt said this automates the ids :^)
let nextId = 1;

function addId(entry) {
  return { ...entry, id: nextId++ };
}

function assignIds(obj) {
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key] = obj[key].map(addId); // use pre-declared function here
    } else if (typeof obj[key] === 'object') {
      assignIds(obj[key]);
    }
  }
}


const itemGroups = {
  // Test: [
  //   { duration: 5 }
  // ],
  T1: {
    "T1 Starforged": [
      { name: 'Starforged Legs', image: '/images/crafting-silversteel-legs-icon.png', duration: 7200 },
      { name: 'Starforged Body', image: '/images/crafting-silversteel-body-icon.png', duration: 7200 },
      { name: 'Starforged Helm', image: '/images/crafting-silversteel-helm-icon.png', duration: 7200 }
    ],
    "T1 Sta": [
      { name: 'Bastion Legs', image: '/images/armor-t1-stam-legs-icon.png', duration: 14400 },
      { name: 'Bastion Body', image: '/images/armor-t1-stam-body-icon.png', duration: 14400 },
      { name: 'Bastion Helm', image: '/images/armor-t1-stam-helm-icon.png', duration: 14400 },
      { name: 'Bastion Visor', image: '/images/armor-t1-stam-face-icon.png', duration: 14400 }
    ],
    "T1 Str": [
      { name: 'Knight Legs', image: '/images/armor-t1-str-legs-icon.png', duration: 14400 },
      { name: 'Knight Armor', image: '/images/armor-t1-str-body-icon.png', duration: 14400 },
      { name: 'Knight Helm', image: '/images/armor-t1-str-helm-icon.png', duration: 14400 },
      { name: 'Knight Guise', image: '/images/armor-t1-str-face-icon.png', duration: 14400 }
    ],
    "T1 Agi": [
      { name: 'Dragon Legs', image: '/images/armor-t1-agi-legs-icon.png', duration: 14400 },
      { name: 'Dragon Armor', image: '/images/armor-t1-agi-body-icon.png', duration: 14400 },
      { name: 'Dragon Helm', image: '/images/armor-t1-agi-helm-icon.png', duration: 14400 },
      { name: 'Dragon Guise', image: '/images/armor-t1-agi-face-icon.png', duration: 14400 }
    ],
    "T1 Int": [
      { name: 'Worn CLoth', image: '/images/crafting-worn-cloth-icon.png', duration: 600 },
      { name: 'Cloth', image: '/images/crafting-cloth-icon.png', duration: 1800 },
      { name: 'Infused Cloth', image: '/images/crafting-t1-cloth-icon.png', duration: 3600 },
      { name: 'Mage Pants', image: '/images/armor-t1-int-legs-icon.png', duration: 14400 },
      { name: 'Mage Cloak', image: '/images/armor-t1-int-body-icon.png', duration: 14400 },
      { name: 'Mage Hood', image: '/images/armor-t1-int-hood-icon.png', duration: 14400 },
      { name: 'Mage Pendant', image: '/images/armor-t1-int-face-icon.png', duration: 14400 }
    ]
  },
 T2: {
    "T2 Starforged Ruby": [
      { name: 'Starforged Legs', image: '/images/crafting-starforged-ruby-leg-shell-icon.png', duration: 14400 }, //4hrs
      { name: 'Starforged Body', image: '/images/crafting-starforged-ruby-body-shell-icon.png', duration: 14400 }, //4hrs
      { name: 'Starforged Helm', image: '/images/crafting-starforged-ruby-helm-shell-icon.png', duration: 14400 } //4hrs
    ],
    "T2 Str": [
      { name: 'Crimson Knight Legs', image: '/images/armor-t2-str-legs-icon.png', duration: 21600 }, //6hrs
      { name: 'Crimson Knight Body', image: '/images/armor-t2-str-body-icon.png', duration: 21600 }, //6hrs
      { name: 'Crimson Knight Helm', image: '/images/armor-t2-str-helm-icon.png', duration: 21600 }, //6hrs
      { name: 'Crimson Knight Guise', image: '/images/armor-t2-str-face-icon.png', duration: 21600 } //6hrs
    ],
    "T2 Agi": [
      { name: 'Mighty Dragon Legs', image: '/images/armor-t2-agi-legs-icon.png', duration: 21600 }, //6hrs
      { name: 'Mighty Dragon Armor', image: '/images/armor-t2-agi-body-icon.png', duration: 21600 }, //6hrs
      { name: 'Mighty Dragon Helm', image: '/images/armor-t2-agi-helm-icon.png', duration: 21600 }, //6hrs
      { name: 'Mighty Dragon Guise', image: '/images/armor-t2-agi-face-icon.png', duration: 21600 } //6hrs
    ],
    "T2 Int": [
      { name: 'Adept Mage Legs', image: '/images/armor-t2-int-legs-icon.png', duration: 21600 }, //6hrs
      { name: 'Adept Mage Robes', image: '/images/armor-t2-int-body-icon.png', duration: 21600 }, //6hrs
      { name: 'Adept Mage Hat', image: '/images/armor-t2-int-head-icon.png', duration: 21600 }, //6hrs
      { name: 'Adept Mage Pendant', image: '/images/armor-t2-int-face-icon.png', duration: 21600 } //6hrs
    ],
    "T2 Sta": [
      { name: 'Fortified Bastion Legs', image: '/images/armor-t2-stam-legs-icon.png', duration: 21600 }, //6hrs
      { name: 'Fortified Bastion Body', image: '/images/armor-t2-stam-body-icon.png', duration: 21600 }, //6hrs
      { name: 'Fortified Bastion Helm', image: '/images/armor-t2-stam-helm-icon.png', duration: 21600 }, //6hrs
      { name: 'Fortified Bastion Visor', image: '/images/armor-t2-stam-face-icon.png', duration: 21600 } //6hrs
    ]
  },
  T3: {
    "T3 Starforged Emerald": [
      { name: 'Starforged Emerald Legs', image: '/images/crafting-starforged-emerald-leg-shell-icon.png', duration: 21600 }, //6hrs
      { name: 'Starforged Emerald Body', image: '/images/crafting-starforged-emerald-body-shell-icon.png', duration: 21600 }, //6hrs
      { name: 'Starforged Emerald Helm', image: '/images/crafting-starforged-emerald-helm-shell-icon.png', duration: 21600 } //6hrs
    ],
    "T3 Agi": [
      { name: 'Ancient Dragon Legs', image: '/images/armor-t3-agi-legs-icon.png', duration: 28800 }, //8hrs
      { name: 'Ancient Dragon Armor', image: '/images/armor-t3-agi-body-icon.png', duration: 28800 }, //8hrs
      { name: 'Ancient Dragon Helm', image: '/images/armor-t3-agi-helm-icon.png', duration: 28800 }, //8hrs
      { name: 'Ancient Dragon Guise', image: '/images/armor-t3-agi-face-icon.png', duration: 28800 }, //8hrs
      { name: 'Ancient Dragon Pauldrons', image: '/images/armor-t3-agi-shoulder-icon.png', duration: 28800 } //8hrs
    ],
    "T3 Int": [
      { name: 'Ancient Mage Legs', image: '/images/armor-t3-int-legs-icon.png', duration: 28800 }, //8hrs
      { name: 'Ancient Mage Robes', image: '/images/armor-t3-int-body-icon.png', duration: 28800 }, //8hrs
      { name: 'Ancient Mage Hat', image: '/images/armor-t3-int-hood-icon.png', duration: 28800 }, //8hrs
      { name: 'Ancient Mage Pendant', image: '/images/armor-t3-int-face-icon.png', duration: 28800 }, //8hrs
      { name: 'Ancient Mage Companion', image: '/images/armor-t3-int-shoulder-icon.png', duration: 28800 } //8hrs
    ],
    "T3 Sta": [
      { name: 'Ancient Bastion Legs', image: '/images/armor-t3-sta-legs-icon.png', duration: 28800 }, //8hrs
      { name: 'Ancient Bastion Body', image: '/images/armor-t3-sta-body-icon.png', duration: 28800 }, //8hrs
      { name: 'Ancient Bastion Helm', image: '/images/armor-t3-sta-helm-icon.png', duration: 28800 }, //8hrs
      { name: 'Ancient Bastion Visor', image: '/images/armor-t3-sta-face-icon.png', duration: 28800 }, //8hrs
      { name: 'Ancient Bastion Pauldrons', image: '/images/armor-t3-sta-shoulder-icon.png', duration: 28800 } //8hrs
    ],
    "T3 Str": [
      { name: 'Ancient Knight Legs', image: '/images/armor-t3-str-legs-icon.png', duration: 28800 }, //8hrs
      { name: 'Ancient Knight Body', image: '/images/armor-t3-str-body-icon.png', duration: 28800 }, //8hrs
      { name: 'Ancient Knight Helm', image: '/images/armor-t3-str-helm-icon.png', duration: 28800 }, //8hrs
      { name: 'Ancient Knight Guise', image: '/images/armor-t3-str-face-icon.png', duration: 28800 }, //8hrs
      { name: 'Ancient Knight Pauldrons', image: '/images/armor-t3-str-shoulder-icon.png', duration: 28800 } //8hrs
    ]
  },
  T4: {
    "T4 Starforged Diamond": [
      { name: 'Starforged Diamond Legs', image: '/images/crafting-starforged-diamond-leg-shell-icon.png', duration: 28800 }, //8hrs
      { name: 'Starforged Diamond Body', image: '/images/crafting-starforged-diamond-body-shell-icon.png', duration: 28800 }, //8hrs
      { name: 'Starforged Diamond Helm', image: '/images/crafting-starforged-diamond-helm-shell-icon.png', duration: 28800 } //8hrs
    ],
    "T4 Agi": [
      { name: 'Crystal Dragon Legs', image: '/images/armor-t4-agi-legs-icon.png', duration: 54000 }, //16hrs
      { name: 'Crystal Dragon Armor', image: '/images/armor-t4-agi-body-icon.png', duration: 54000 }, //16hrs
      { name: 'Crystal Dragon Helm', image: '/images/armor-t4-agi-helm-icon.png', duration: 54000 }, //16hrs
      { name: 'Crystal Dragon Guise', image: '/images/armor-t4-agi-face-icon.png', duration: 54000 }, //16hrs
      { name: 'Crystal Dragon Pauldrons', image: '/images/armor-t4-agi-shoulder-icon.png', duration: 54000 } //16hrs
    ],
    "T4 Int": [
      { name: 'Divine Mage Legs', image: '/images/armor-t4-int-legs-icon.png', duration: 54000 }, //16hrs
      { name: 'Divine Mage Cloak', image: '/images/armor-t4-int-body-icon.png', duration: 54000 }, //16hrs
      { name: 'Divine Mage Cap', image: '/images/armor-t4-int-hat-icon.png', duration: 54000 }, //16hrs
      { name: 'Divine Mage Mask', image: '/images/armor-t4-int-face-icon.png', duration: 54000 }, //16hrs
      { name: 'Orbs of the Divine', image: '/images/armor-t4-int-shoulder-icon.png', duration: 54000 } //16hrs
    ],
    "T4 Sta": [
      { name: 'Impenetrable Bastion Legs', image: '/images/armor-t4-sta-legs-icon.png', duration: 54000 }, //16hrs
      { name: 'Impenetrable Bastion Body', image: '/images/armor-t4-sta-body-icon.png', duration: 54000 }, //16hrs
      { name: 'Impenetrable Bastion Helm', image: '/images/armor-t4-sta-helm-icon.png', duration: 54000 }, //16hrs
      { name: 'Impenetrable Bastion Visor', image: '/images/armor-t4-sta-face-icon.png', duration: 54000 }, //16hrs
      { name: 'Impenetrable Bastion Pauldrons', image: '/images/armor-t4-sta-shoulder-icon.png', duration: 54000 } //16hrs
    ],
    "T4 Str": [
      { name: 'Crucified Knight Legs', image: '/images/armor-t4-str-legs-icon.png', duration: 54000 }, //16hrs
      { name: 'Crucified Knight Body', image: '/images/armor-t4-str-body-icon.png', duration: 54000 }, //16hrs
      { name: 'Crucified Knight Helm', image: '/images/armor-t4-str-helm-icon.png', duration: 54000 }, //16hrs
      { name: 'Crucified Knight Guise', image: '/images/armor-t4-str-face-icon.png', duration: 54000 }, //16hrs
      { name: 'Crucified Knight Pauldrons', image: '/images/armor-t4-str-shoulder-icon.png', duration: 54000 } //16hrs
    ]
  },
  T5: {
    "T5 Starforged Antimatter": [
      { name: 'Starforged Antimatter Legs', image: '/images/.png', duration: 28800 }, //8hrs
      { name: 'Starforged Antimatter Body', image: '/images/.png', duration: 28800 }, //8hrs
      { name: 'Starforged Antimatter Helm', image: '/images/.png', duration: 28800 } //8hrs
    ],
    "T5 Agi": [
      { name: 'Tiamat Legs', image: '/images/armor/armor-t5-agi-legs-icon.png', duration: 86400 }, //24hrs
      { name: 'Tiamat Body', image: '/images/armor/armor-t5-agi-body-icon.png', duration: 86400 }, //24hrs
      { name: 'Tiamat Helm', image: '/images/armor/armor-t5-agi-helmet-icon.png', duration: 86400 }, //24hrs
      { name: 'Tiamat Face', image: '/images/armor/armor-t5-agi-face-icon.png', duration: 86400 }, //24hrs
      { name: 'Tiamat Mantleplate', image: '/images/armor/armor-t5-agi-shoulder-icon.png', duration: 86400 }, //24hrs
      { name: 'Pegasus Wings', image: '/images/weapons/.png', duration: 86400 }, //24hrs
      { name: 'Drakepiercer', image: '/images/weapons/.png', duration: 86400 } //24hrs
    ],
    "T5 Int": [
      { name: 'Archmage Legs', image: '/images/.png', duration: 86400 }, //24hrs
      { name: 'Archmage Body', image: '/images/.png', duration: 86400 }, //24hrs
      { name: 'Archmage Hat', image: '/images/.png', duration: 86400 }, //24hrs
      { name: 'Archmage Face', image: '/images/.png', duration: 86400 }, //24hrs
      { name: 'Archmage Necklace', image: '/images/.png', duration: 86400 }, //24hrs
      { name: 'Soul Releaser', image: '/images/weapons/.png', duration: 86400 }, //24hrs
      { name: 'The Monarch', image: '/images/weapons/.png', duration: 86400 } //24hrs
    ],
    "T5 Sta": [
      { name: 'Colossus Legs', image: '/images/.png', duration: 86400 },  //24hrs
      { name: 'Colossus Body', image: '/images/.png', duration: 86400 }, //24hrs
      { name: 'Colossus Helmet', image: '/images/.png', duration: 86400 }, //24hrs
      { name: 'Colossus Face', image: '/images/.png', duration: 86400 }, //24hrs
      { name: 'Colossus Pauldrons', image: '/images/.png', duration: 86400 }, //24hrs
      { name: 'Morning Star', image: '/images/weapons/.png', duration: 86400 }, //24hrs
      { name: 'Skullcradle', image: '/images/weapons/.png', duration: 86400 } //24hrs
    ],
    "T5 Str": [
      { name: 'Paladin Legs', image: '/images/.png', duration: 86400 }, //24hrs
      { name: 'Paladin Body', image: '/images/.png', duration: 86400 }, //24hrs
      { name: 'Paladin Helmet', image: '/images/.png', duration: 86400 }, //24hrs
      { name: 'Paladin Face', image: '/images/', duration: 86400 }, //24hrs
      { name: 'Paladin Pauldrons', image: '/images/.png', duration: 86400 }, //24hrs
      { name: 'Divine Claymore', image: '/images/weapons/.png', duration: 86400 }, //24hrs
      { name: 'Axe of Honor', image: '/images/weapons/.png', duration: 86400 }, //24hrs
    ]
  },
  Resources: {
    Iron: [
      { name: 'Iron Chunk', image: '/images/resources/iron/item-iron-chunk-icon.png', duration: 300 },
      { name: 'Iron Slab', image: '/images/resources/iron/item-iron-slab-icon.png', duration: 900 },
      { name: 'Iron Plate', image: '/images/resources/iron/item-iron-plate-icon.png', duration: 1800 },
      { name: 'Reinforced Iron Plate', image: '/images/resources/iron/item-iron-plate-reinforced-icon.png', duration: 3600 },
      { name: 'Iron Legs', image: '/images/resources/iron/item-iron-leg-shell-icon.png', duration: 7200 },
      { name: 'Iron Body', image: '/images/resources/iron/item-iron-body-shell-icon.png', duration: 7200 },
      { name: 'Iron Helm', image: '/images/resources/iron/item-iron-helm-shell-icon.png', duration: 7200 }
    ],
    Silver: [
      { name: 'Silver Chunk', image: '/images/resources/silver/item-silver-chunk-icon.png', duration: 300 },
      { name: 'Silver Slab', image: '/images/resources/silver/item-silver-slab-icon.png', duration: 900 },
      { name: 'Silver Plate', image: '/images/resources/silver/item-silver-plate-icon.png', duration: 1800 },
      { name: 'Reinforced Silver Plate', image: '/images/resources/silver/item-silver-plate-reinforced-icon.png', duration: 3600 },
      { name: 'Silver Legs', image: '/images/resources/silver/item-silver-leg-shell-icon.png', duration: 7200 },
      { name: 'Silver Body', image: '/images/resources/silver/item-silver-body-shell-icon.png', duration: 7200 },
      { name: 'Silver Helm', image: '/images/resources/silver/item-silver-helm-shell-icon.png', duration: 7200 }
    ],
    Gold: [
      { name: 'Gold Chunk', image: '/images/resources/gold/crafting-gold-chunk-icon.png', duration: 900 },
      { name: 'Gold Slab', image: '/images/resources/gold/crafting-gold-slab-icon.png', duration: 3600 },
      { name: 'Gold Plate', image: '/images/resources/gold/crafting-gold-plate-icon.png', duration: 7200 },
      { name: 'Reinforced Gold Plate', image: '/images/resources/gold/crafting-gold-plate-reinforced-icon.png', duration: 14400 },
      { name: 'Legs', image: '/images/resources/gold/crafting-gold-leg-shell-icon.png', duration: 21600 },
      { name: 'Body', image: '/images/resources/gold/crafting-gold-body-shell-icon.png', duration: 21600 },
      { name: 'Helm', image: '/images/resources/gold/crafting-gold-helm-shell-icon.png', duration: 21600 }
    ],
    "Unob": [
      { name: 'Unobtainium Chunk', image: '/images/resources/unobtainium/crafting-unobtainium-chunk-icon.png', duration: 1800 },
      { name: 'Unobtainium Slab', image: '/images/resources/unobtainium/crafting-unobtainium-slab-icon.png', duration: 7200 },
      { name: 'Unobtainium Plate', image: '/images/resources/unobtainium/crafting-unobtainium-plate-icon.png', duration: 14400 },
      { name: 'Reinforced Unobtainium Plate', image: '/images/resources/unobtainium/crafting-unobtainium-plate-reinforced-icon.png', duration: 21600 },
      { name: 'Legs', image: '/images/resources/unobtainium/crafting-unobtainium-leg-shell-icon.png', duration: 28800 }, //8hrs
      { name: 'Body', image: '/images/resources/unobtainium/crafting-unobtainium-body-shell-icon.png', duration: 28800 }, //8hrs
      { name: 'Helm', image: '/images/resources/unobtainium/crafting-unobtainium-helm-shell-icon.png', duration: 28800 } //8hrs
    ],
    "Frost": [
      { name: 'Ice Crystal Chunk', image: '/images/resources/frost/crafting-ice-crystal-medium-icon.png', duration: 7200 },
      { name: 'Ice Crystal', image: '/images/resources/frost/crafting-ice-crystal-large-icon.png', duration: 14400 },
      { name: 'Frostite Plate', image: '/images/resources/frost/item-ice-plate-icon.png', duration: 21600 },
      { name: 'Reinforced Frostite Plate', image: '/images/resources/frost/item-ice-plate-reinforced-icon.png', duration: 28800 },
      { name: 'Legs', image: '/images/resources/frost/crafting-ice-leg-shell-icon.png', duration: 43200 },
      { name: 'Body', image: '/images/resources/frost/crafting-ice-body-shell-icon.png', duration: 43200 },
      { name: 'Helm', image: '/images/resources/frost/crafting-ice-helm-shell-icon.png', duration: 43200 }
    ],
    "Marble": [
      { name: 'Marble Chunk', image: '/images/resources/marble/crafting-marble-chunk-icon.png', duration: 7200 }, //2hrs
      { name: 'Marble Slab', image: '/images/resources/marble/crafting-marble-slab-icon.png', duration: 14400 }, //4hrs
      { name: 'Marble Plate', image: '/images/resources/marble/crafting-marble-plate-icon.png', duration: 21600 }, //6hrs
      { name: 'Reinforced Marble Plate', image: '/images/resources/marble/crafting-marble-plate-rf-icon.png', duration: 28800 }, //8hrs
      { name: 'Legs', image: '/images/resources/marble/.png', duration: 43200 }, //12hrs
      { name: 'Body', image: '/images/resources/marble/.png', duration: 43200 }, //12hrs
      { name: 'Helm', image: '/images/resources/marble/.png', duration: 43200 } //12hrs
    ],
    "Soul": [
      { name: 'Soul Fragment', image: '/images/resources/soul/item-dark-soul-fragment-icon.png', duration: 7200 }, //2hrs
      { name: 'Soul Gem', image: '/images/resources/soul/item-dark-soul-gem-icon.png', duration: 14400 }, //4hrs
      { name: 'Soul Nebula', image: '/images/resources/soul/item-dark-soul-nebula-icon.png', duration: 21600 }, //6hrs
      { name: 'Soul Cube', image: '/images/resources/soul/item-dark-soul-cube-basic-icon.png', duration: 28800 }, //8hrs
      { name: 'Soul Hypercube', image: '/images/resources/soul/item-dark-soul-cube-icon.png', duration: 57600 }, //16hrs
      { name: 'Antimatter', image: '/images/resources/soul/crafting-antimatter-icon.png', duration: 86400 } //24hrs
    ],
  },
  Weapons: {
    T1 : [
      { name: 'Epic Pearl Staff', image: '/images/weapons/.png', duration: 14400 }, //4hrs
      { name: 'Dragon Bow', image: '/images/weapons/weapon-t1-agi-bow-icon.png', duration: 14400 }, //4hrs
      { name: 'Holy Deathbringer', image: '/images/weapons/weapon-t1-str-sword-icon.png', duration: 14400 }, //4hrs
      { name: 'Hammer of Doom', image: '/images/weapons/weapon-t1-sta-hammer-icon.png', duration: 14400 }, //4hrs
      { name: 'Epic Pearl Wand', image: '/images/weapons/weapon-t1-int-wand-icon.png', duration: 14400 }, //4hrs
      { name: 'Draco Scythe', image: '/images/weapons/weapon-t1-agi-one-hand-icon.png', duration: 14400 }, //4hrs
      { name: 'Squire Sword', image: '/images/weapons/.png', duration: 14400 }, //4hrs
      { name: 'Mallet of Doom', image: '/images/weapons/.png', duration: 14400 } //4hrs
    ],
    T2 : [
      { name: 'Staff of Life', image: '/images/weapons/weapon-t2-int-staff-icon.png', duration: 21600 }, //6hrs
      { name: 'Artemis Bow', image: '/images/weapons/weapon-t2-agi-bow-icon.png', duration: 21600 }, //6hrs
      { name: 'Blade of the Forgotten', image: '/images/weapons/weapon-t2-str-sword-icon.png', duration: 21600 }, //6hrs
      { name: 'Hammer of Ruin', image: '/images/weapons/weapon-t2-sta-hammer-icon.png', duration: 21600 }, //6hrs
      { name: 'Wand of Hate', image: '/images/weapons/.png', duration: 21600 }, //6hrs
      { name: 'Twin Talon', image: '/images/weapons/weapon-t2-agi-one-hand-icon.png', duration: 21600 }, //6hrs
      { name: 'Ironjaw', image: '/images/weapons/.png', duration: 21600 }, //6hrs
      { name: 'Thorn of Dread', image: '/images/weapons/.png', duration: 21600 } //6hrs
    ],
    T3 : [
      { name: 'Druid Nature Staff', image: '/images/weapons/weapon-t3-int-staff-icon.png', duration: 28800 }, //8hrs
      { name: 'Elder Dragon Bow', image: '/images/weapons/weapon-t3-agi-bow-icon.png', duration: 28800 }, //8hrs
      { name: 'The Unstable Twin', image: '/images/weapons/weapon-t3-str-sword-icon.png', duration: 28800 }, //8hrs
      { name: 'Battle Axe of Doom', image: '/images/weapons/weapon-t3-sta-axe-icon.png', duration: 28800 }, //8hrs
      { name: 'Riptide Wand', image: '/images/weapons/.png', duration: 28800 }, //8hrs
      { name: 'Death Scythe', image: '/images/weapons/weapon-t3-agi-one-hand-icon.png', duration: 28800 }, //8hrs
      { name: 'Crowncleaver', image: '/images/weapons/.png', duration: 28800 }, //8hrs
      { name: 'Battle Mace of the Fallen', image: '/images/weapons/.png', duration: 28800 } //8hrs
    ],
    T4 : [
      { name: 'Secret Keeper', image: '/images/weapons/weapon-t4-int-icon.png', duration: 57600 }, //16hrs
      { name: 'Bow of the Dragon Gods', image: '/images/weapons/weapon-t4-agi-icon.png', duration: 57600 }, //16hrs
      { name: 'The Holy Destroyer', image: '/images/weapons/weapon-t4-str-icon.png', duration: 57600 }, //16hrs
      { name: 'The Dominator', image: '/images/weapons/weapon-t4-sta-icon.png', duration: 57600 }, //16hrs
      { name: 'Lumenroot', image: '/images/weapons/.png', duration: 57600 }, //16hrs
      { name: 'Crystal Halberd', image: '/images/weapons/weapon-t4-agi-one-hand-icon.png', duration: 57600 }, //16hrs
      { name: 'Gracebreaker', image: '/images/weapons/.png', duration: 57600 }, //16hrs
      { name: 'Blunt Stick of Doom', image: '/images/weapons/.png', duration: 57600 } //16hrs
    ]
  },
  Rings: {
    T2 : [
      { name: 'Mighty Dragon Ring', image: '/images/rings/ring-t1-agi-icon.png', duration: 14400 }, //4hrs
      { name: 'Adept Mage Ring', image: '/images/rings/ring-t1-int-icon.png', duration: 14400 }, //4hrs
      { name: 'Fortified Bastion Ring', image: '/images/rings/ring-t1-sta-icon.png', duration: 14400 }, //4hrs
      { name: 'Crimson Knight Ring', image: '/images/rings/ring-t1-str-icon.png', duration: 14400 }, //4hrs //named warrior ring on db
    ],
    T3 : [
      { name: 'Ancient Dragon Ring', image: '/images/rings/ring-t2-agi-icon.png', duration: 21600 }, //6hrs
      { name: 'Ancient Mage Ring', image: '/images/rings/ring-t2-int-icon.png', duration: 21600 }, //6hrs
      { name: 'Ancient Bastion Ring', image: '/images/rings/ring-t2-sta-icon.png', duration: 21600 }, //6hrs
      { name: 'Ancient Knight Ring', image: '/images/rings/ring-t2-str-icon.png', duration: 21600 }, //6hrs
    ],
    T4 : [
      { name: 'Crucified Knight Ring', image: '/images/rings/ring-t3-str-icon.png', duration: 28800 }, //8hrs
      { name: 'Impenetrable Bastion Ring', image: '/images/rings/ring-t3-sta-icon.png', duration: 28800 }, //8hrs
      { name: 'Crystal Dragon Ring', image: '/images/rings/ring-t3-agi-icon.png', duration: 28800 }, //8hrs
      { name: 'Divine Mage Ring', image: '/images/rings/ring-t3-int-icon.png', duration: 28800 } //8hrs
    ],
    T5 : [
      { name: 'Paladin Ring', image: '/images/rings/.png', duration: 43200 }, //12hrs
      { name: 'Colossus Ring', image: '/images/rings/.png', duration: 43200 }, //12hrs
      { name: 'Tiamat Ring', image: '/images/rings/.png', duration: 43200 }, //12hrs
      { name: 'Archmage', image: '/images/rings/.png', duration: 43200 } //12hrs
    ]
  },
  Books: {
    T1 : [
      { name: 'Dragon Book', image: '/images/books/trinket-base-agi-book-icon.png', duration: 3600 }, //1hrs
      { name: 'Mage Book', image: '/images/books/trinket-base-int-book-icon.png', duration: 3600 }, //1hrs
      { name: 'Bastion Book', image: '/images/books/trinket-base-sta-book-icon.png', duration: 3600 }, //1hrs
      { name: 'Knight Book', image: '/images/books/trinket-base-str-book-icon.png', duration: 3600 } //1hrs
    ],
    T2 : [
      { name: 'Mighty Dragon Book', image: '/images/books/trinket-t1-agi-book-icon.png', duration: 14400 }, //4hrs
      { name: 'Adept Mage Book', image: '/images/books/trinket-t1-int-book-icon.png', duration: 14400 }, //4hrs
      { name: 'Fortified Bastion Book', image: '/images/books/trinket-t1-sta-book-icon.png', duration: 14400 }, //4hrs
      { name: 'Crimson Knight Book', image: '/images/books/trinket-t1-str-book-icon.png', duration: 14400 } //4hrs
    ],
    T3 : [
      { name: 'Ancient Dragon Book', image: '/images/books/trinket-t2-agi-book-icon.png', duration: 21600 }, //6hrs
      { name: 'Ancient Mage Book', image: '/images/books/trinket-t2-int-book-icon.png', duration: 21600 }, //6hrs
      { name: 'Ancient Bastion Book', image: '/images/books/trinket-t2-sta-book-icon.png', duration: 21600 }, //6hrs
      { name: 'Ancient Knight Book', image: '/images/books/trinket-t2-str-book-icon.png', duration: 21600 } //6hrs
    ],
    T4 : [
      { name: 'Crucified Knight Book', image: '/images/books/trinket-t3-str-book-icon.png', duration: 28800 }, //8hrs
      { name: 'Impenetrable Bastion Book', image: '/images/books/trinket-t3-sta-book-icon.png', duration: 28800 }, //8hrs
      { name: 'Crystal Dragon Book', image: '/images/books/trinket-t3-agi-book-icon.png', duration: 28800 }, //8hrs
      { name: 'Divine Mage Book', image: '/images/books/trinket-t3-int-book-icon.png', duration: 28800 } //8hrs
    ],
    T5 : [
      { name: 'Paladin', image: '/images/books/.png', duration: 43200 }, //12hrs
      { name: 'Colossus', image: '/images/books/.png', duration: 43200 }, //12hrs
      { name: 'Tiamat', image: '/images/books/.png', duration: 43200 }, //12hrs
      { name: 'Archmage', image: '/images/books/.png', duration: 43200 } //12hrs
    ]
  }
};

assignIds(itemGroups);

export default itemGroups;
