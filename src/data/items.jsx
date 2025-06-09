// " " allows spaces; needs bracket notation [" words "] instead of . notation
// const itemGroups = {
//     Test_1: [
//       { id: 0, duration: 5}
//     ],

const itemGroups = {
  // Test: [
  //   { id: 0, duration: 5 }
  // ],
  T1: {
    "T1 Starforged": [
      { id: 1, name: 'Starforged Legs', image: '/images/crafting-silversteel-legs-icon.png', duration: 7200 },
      { id: 2, name: 'Starforged Body', image: '/images/crafting-silversteel-body-icon.png', duration: 7200 },
      { id: 3, name: 'Starforged Helm', image: '/images/crafting-silversteel-helm-icon.png', duration: 7200 }
    ],
    "T1 Sta": [
      { id: 4, name: 'Bastion Legs', image: '/images/armor-t1-stam-legs-icon.png', duration: 14400 },
      { id: 5, name: 'Bastion Body', image: '/images/armor-t1-stam-body-icon.png', duration: 14400 },
      { id: 6, name: 'Bastion Helm', image: '/images/armor-t1-stam-helm-icon.png', duration: 14400 },
      { id: 7, name: 'Bastion Visor', image: '/images/armor-t1-stam-face-icon.png', duration: 14400 }
    ],
    "T1 Str": [
      { id: 8, name: 'Knight Legs', image: '/images/armor-t1-str-legs-icon.png', duration: 14400 },
      { id: 9, name: 'Knight Armor', image: '/images/armor-t1-str-body-icon.png', duration: 14400 },
      { id: 10, name: 'Knight Helm', image: '/images/armor-t1-str-helm-icon.png', duration: 14400 },
      { id: 11, name: 'Knight Guise', image: '/images/armor-t1-str-face-icon.png', duration: 14400 }
    ],
    "T1 Agi": [
      { id: 12, name: 'Dragon Legs', image: '/images/armor-t1-agi-legs-icon.png', duration: 14400 },
      { id: 13, name: 'Dragon Armor', image: '/images/armor-t1-agi-body-icon.png', duration: 14400 },
      { id: 14, name: 'Dragon Helm', image: '/images/armor-t1-agi-helm-icon.png', duration: 14400 },
      { id: 15, name: 'Dragon Guise', image: '/images/armor-t1-agi-face-icon.png', duration: 14400 }
    ],
    "T1 Int": [
      { id: 16, name: 'Worn CLoth', image: '/images/crafting-worn-cloth-icon.png', duration: 600 },
      { id: 17, name: 'Cloth', image: '/images/crafting-cloth-icon.png', duration: 1800 },
      { id: 18, name: 'Infused Cloth', image: '/images/crafting-t1-cloth-icon.png', duration: 3600 },
      { id: 19, name: 'Mage Pants', image: '/images/armor-t1-int-legs-icon.png', duration: 14400 },
      { id: 20, name: 'Mage Cloak', image: '/images/armor-t1-int-body-icon.png', duration: 14400 },
      { id: 21, name: 'Mage Hood', image: '/images/armor-t1-int-hood-icon.png', duration: 14400 },
      { id: 22, name: 'Mage Pendant', image: '/images/armor-t1-int-face-icon.png', duration: 14400 }
    ],
  },
  T2: {
    "T2 Starforged Ruby": [
      { id: 23, name: 'Starforged Legs', image: '/images/crafting-starforged-ruby-leg-shell-icon.png', duration: 7200 },
      { id: 24, name: 'Starforged Body', image: '/images/crafting-starforged-ruby-body-shell-icon.png', duration: 7200 },
      { id: 25, name: 'Starforged Helm', image: '/images/crafting-starforged-ruby-helm-shell-icon.png', duration: 7200 }
    ],
    "T2 Str": [
      { id: 26, name: 'Crimson Knight Legs', image: '/images/armor-t2-str-legs-icon.png', duration: 28800 },
      { id: 27, name: 'Crimson Knight Body', image: '/images/armor-t2-str-body-icon.png', duration: 28800 },
      { id: 28, name: 'Crimson Knight Helm', image: '/images/armor-t2-str-helm-icon.png', duration: 28800 },
      { id: 29, name: 'Crimson Knight Guise', image: '/images/armor-t2-str-face-icon.png', duration: 28800 }
    ],
    "T2 Agi": [
      { id: 30, name: 'Mighty Dragon Legs', image: '/images/armor-t2-agi-legs-icon.png', duration: 28800 },
      { id: 31, name: 'Mighty Dragon Armor', image: '/images/armor-t2-agi-body-icon.png', duration: 28800 },
      { id: 32, name: 'Mighty Dragon Helm', image: '/images/armor-t2-agi-helm-icon.png', duration: 28800 },
      { id: 33, name: 'Mighty Dragon Guise', image: '/images/armor-t2-agi-face-icon.png', duration: 144000 }
    ],
    "T2 Int": [
      { id: 34, name: 'Adept Mage Legs', image: '/images/armor-t2-int-legs-icon.png', duration: 28800 },
      { id: 35, name: 'Adept Mage Robes', image: '/images/armor-t2-int-body-icon.png', duration: 28800 },
      { id: 36, name: 'Adept Mage Hat', image: '/images/armor-t2-int-head-icon.png', duration: 28800 },
      { id: 37, name: 'Adept Mage Pendant', image: '/images/armor-t2-int-face-icon.png', duration: 28800 }
    ],
    "T2 Sta": [
      { id: 38, name: 'Fortified Bastion Legs', image: '/images/armor-t2-stam-legs-icon.png', duration: 28800 },
      { id: 39, name: 'Fortified Bastion Body', image: '/images/armor-t2-stam-body-icon.png', duration: 28800 },
      { id: 40, name: 'Fortified Bastion Helm', image: '/images/armor-t2-stam-helm-icon.png', duration: 28800 },
      { id: 41, name: 'Fortified Bastion Visor', image: '/images/armor-t2-stam-face-icon.png', duration: 28800 }
    ]
  },
  T3: {
    "T3 Starforged Emerald": [
      { id: 42, name: 'Starforged Emerald Legs', image: '/images/crafting-starforged-emerald-leg-shell-icon.png', duration: 28800 },
      { id: 43, name: 'Starforged Emerald Body', image: '/images/crafting-starforged-emerald-body-shell-icon.png', duration: 28800 },
      { id: 44, name: 'Starforged Emerald Helm', image: '/images/crafting-starforged-emerald-helm-shell-icon.png', duration: 28800 }
    ],
    "T3 Agi": [
      { id: 45, name: 'Ancient Dragon Legs', image: '/images/armor-t3-agi-legs-icon.png', duration: 43200 },
      { id: 46, name: 'Ancient Dragon Armor', image: '/images/armor-t3-agi-body-icon.png', duration: 43200 },
      { id: 47, name: 'Ancient Dragon Helm', image: '/images/armor-t3-agi-helm-icon.png', duration: 43200 },
      { id: 48, name: 'Ancient Dragon Guise', image: '/images/armor-t3-agi-face-icon.png', duration: 43200 },
      { id: 49, name: 'Ancient Dragon Pauldrons', image: '/images/armor-t3-agi-shoulder-icon.png', duration: 43200 }
    ],
    "T3 Int": [
      { id: 50, name: 'Ancient Mage Legs', image: '/images/armor-t3-int-legs-icon.png', duration: 43200 },
      { id: 51, name: 'Ancient Mage Robes', image: '/images/armor-t3-int-body-icon.png', duration: 43200 },
      { id: 52, name: 'Ancient Mage Hat', image: '/images/armor-t3-int-hood-icon.png', duration: 43200 },
      { id: 53, name: 'Ancient Mage Pendant', image: '/images/armor-t3-int-face-icon.png', duration: 43200 },
      { id: 54, name: 'Ancient Mage Companion', image: '/images/armor-t3-int-shoulder-icon.png', duration: 43200 }
    ],
    "T3 Sta": [
      { id: 55, name: 'Ancient Bastion Legs', image: '/images/armor-t3-sta-legs-icon.png', duration: 43200 },
      { id: 56, name: 'Ancient Bastion Body', image: '/images/armor-t3-sta-body-icon.png', duration: 43200 },
      { id: 57, name: 'Ancient Bastion Helm', image: '/images/armor-t3-sta-helm-icon.png', duration: 43200 },
      { id: 58, name: 'Ancient Bastion Visor', image: '/images/armor-t3-sta-face-icon.png', duration: 43200 },
      { id: 59, name: 'Ancient Bastion Pauldrons', image: '/images/armor-t3-sta-shoulder-icon.png', duration: 43200 }
    ],
    "T3 Str": [
      { id: 60, name: 'Ancient Knight Legs', image: '/images/armor-t3-str-legs-icon.png', duration: 43200 },
      { id: 61, name: 'Ancient Knight Body', image: '/images/armor-t3-str-body-icon.png', duration: 43200 },
      { id: 62, name: 'Ancient Knight Helm', image: '/images/armor-t3-str-helm-icon.png', duration: 43200 },
      { id: 63, name: 'Ancient Knight Guise', image: '/images/armor-t3-str-face-icon.png', duration: 43200 },
      { id: 64, name: 'Ancient Knight Pauldrons', image: '/images/armor-t3-str-shoulder-icon.png', duration: 43200 }
    ]
  },
  T4: {
    "T4 Starforged Diamond": [
      { id: 65, name: 'Starforged Diamond Legs', image: '/images/crafting-starforged-diamond-leg-shell-icon.png', duration: 172800 },
      { id: 66, name: 'Starforged Diamond Body', image: '/images/crafting-starforged-diamond-body-shell-icon.png', duration: 172800 },
      { id: 67, name: 'Starforged Diamond Helm', image: '/images/crafting-starforged-diamond-helm-shell-icon.png', duration: 172800 }
    ],
    "T4 Agi": [
      { id: 68, name: 'Crystal Dragon Legs', image: '/images/armor-t4-agi-legs-icon.png', duration: 172800 },
      { id: 69, name: 'Crystal Dragon Armor', image: '/images/armor-t4-agi-body-icon.png', duration: 172800 },
      { id: 70, name: 'Crystal Dragon Helm', image: '/images/armor-t4-agi-helm-icon.png', duration: 172800 },
      { id: 71, name: 'Crystal Dragon Guise', image: '/images/armor-t4-agi-face-icon.png', duration: 172800 },
      { id: 72, name: 'Crystal Dragon Pauldrons', image: '/images/armor-t4-agi-shoulder-icon.png', duration: 172800 }
    ],
    "T4 Int": [
      { id: 73, name: 'Divine Mage Legs', image: '/images/armor-t4-int-legs-icon.png', duration: 172800 },
      { id: 74, name: 'Divine Mage Cloak', image: '/images/armor-t4-int-body-icon.png', duration: 172800 },
      { id: 75, name: 'Divine Mage Cap', image: '/images/armor-t4-int-hat-icon.png', duration: 172800 },
      { id: 76, name: 'Divine Mage Mask', image: '/images/armor-t4-int-face-icon.png', duration: 172800 },
      { id: 77, name: 'Orbs of the Divine', image: '/images/armor-t4-int-shoulder-icon.png', duration: 172800 }
    ],
    "T4 Sta": [
      { id: 78, name: 'Impenetrable Bastion Legs', image: '/images/armor-t4-sta-legs-icon.png', duration: 172800 },
      { id: 79, name: 'Impenetrable Bastion Body', image: '/images/armor-t4-sta-body-icon.png', duration: 172800 },
      { id: 80, name: 'Impenetrable Bastion Helm', image: '/images/armor-t4-sta-helm-icon.png', duration: 172800 },
      { id: 81, name: 'Impenetrable Bastion Visor', image: '/images/armor-t4-sta-face-icon.png', duration: 172800 },
      { id: 82, name: 'Impenetrable Bastion Pauldrons', image: '/images/armor-t4-sta-shoulder-icon.png', duration: 172800 }
    ],
    "T4 Str": [
      { id: 83, name: 'Crucified Knight Legs', image: '/images/armor-t4-str-legs-icon.png', duration: 172800 },
      { id: 84, name: 'Crucified Knight Body', image: '/images/armor-t4-str-body-icon.png', duration: 172800 },
      { id: 85, name: 'Crucified Knight Helm', image: '/images/armor-t4-str-helm-icon.png', duration: 172800 },
      { id: 86, name: 'Crucified Knight Guise', image: '/images/armor-t4-str-face-icon.png', duration: 172800 },
      { id: 87, name: 'Crucified Knight Pauldrons', image: '/images/armor-t4-str-shoulder-icon.png', duration: 172800 }
    ]
  },
  Resources: {
    "Iron": [
      { id: 88, name: 'Iron Chunk', image: '/images/resources/iron/item-iron-chunk-icon.png', duration: 300 },
      { id: 89, name: 'Iron Slab', image: '/images/resources/iron/item-iron-slab-icon.png', duration: 900 },
      { id: 90, name: 'Iron Plate', image: '/images/resources/iron/item-iron-plate-icon.png', duration: 1800 },
      { id: 91, name: 'Reinforced Iron Plate', image: '/images/resources/iron/item-iron-plate-reinforced-icon.png', duration: 3600 },
      { id: 92, name: 'Iron Legs', image: '/images/resources/iron/item-iron-leg-shell-icon.png', duration: 7200 },
      { id: 93, name: 'Iron Body', image: '/images/resources/iron/item-iron-body-shell-icon.png', duration: 7200 },
      { id: 94, name: 'Iron Helm', image: '/images/resources/iron/item-iron-helm-shell-icon.png', duration: 7200 }
    ],
    "Silver": [
      { id: 95, name: 'Silver Chunk', image: '/images/resources/silver/item-silver-chunk-icon.png', duration: 300 },
      { id: 96, name: 'Silver Slab', image: '/images/resources/silver/item-silver-slab-icon.png', duration: 900 },
      { id: 97, name: 'Silver Plate', image: '/images/resources/silver/item-silver-plate-icon.png', duration: 1800 },
      { id: 98, name: 'Reinforced Silver Plate', image: '/images/resources/silver/item-silver-plate-reinforced-icon.png', duration: 3600 },
      { id: 99, name: 'Silver Legs', image: '/images/resources/silver/item-silver-leg-shell-icon.png', duration: 7200 },
      { id: 100, name: 'Silver Body', image: '/images/resources/silver/item-silver-body-shell-icon.png', duration: 7200 },
      { id: 101, name: 'Silver Helm', image: '/images/resources/silver/item-silver-helm-shell-icon.png', duration: 7200 }
    ],
    "Gold": [
      { id: 102, name: 'Gold Chunk', image: '/images/resources/gold/crafting-gold-chunk-icon.png', duration: 900 },
      { id: 103, name: 'Gold Slab', image: '/images/resources/gold/crafting-gold-slab-icon.png', duration: 3600 },
      { id: 104, name: 'Gold Plate', image: '/images/resources/gold/crafting-gold-plate-icon.png', duration: 7200 },
      { id: 105, name: 'Reinforced Gold Plate', image: '/images/resources/gold/crafting-gold-plate-reinforced-icon.png', duration: 14400 },
      { id: 106, name: 'Legs', image: '/images/resources/gold/crafting-gold-leg-shell-icon.png', duration: 21600 },
      { id: 107, name: 'Body', image: '/images/resources/gold/crafting-gold-body-shell-icon.png', duration: 21600 },
      { id: 108, name: 'Helm', image: '/images/resources/gold/crafting-gold-helm-shell-icon.png', duration: 21600 }
    ],
    "Unob": [
      { id: 109, name: 'Unobtainium Chunk', image: '/images/resources/unobtainium/crafting-unobtainium-chunk-icon.png', duration: 1800 },
      { id: 110, name: 'Unobtainium Slab', image: '/images/resources/unobtainium/crafting-unobtainium-slab-icon.png', duration: 7200 },
      { id: 111, name: 'Unobtainium Plate', image: '/images/resources/unobtainium/crafting-unobtainium-plate-icon.png', duration: 14400 },
      { id: 112, name: 'Reinforced Unobtainium Plate', image: '/images/resources/unobtainium/crafting-unobtainium-plate-reinforced-icon.png', duration: 21600 },
      { id: 113, name: 'Legs', image: '/images/resources/unobtainium/crafting-unobtainium-leg-shell-icon.png', duration: 28800 },
      { id: 114, name: 'Body', image: '/images/resources/unobtainium/crafting-unobtainium-body-shell-icon.png', duration: 28800 },
      { id: 115, name: 'Helm', image: '/images/resources/unobtainium/crafting-unobtainium-helm-shell-icon.png', duration: 28800 }
    ],
    "Frost": [
      { id: 116, name: 'Ice Crystal Chunk', image: '/images/resources/frost/crafting-ice-crystal-medium-icon.png', duration: 7200 },
      { id: 117, name: 'Ice Crystal', image: '/images/resources/frost/crafting-ice-crystal-large-icon.png', duration: 14400 },
      { id: 118, name: 'Frostite Plate', image: '/images/resources/frost/item-ice-plate-icon.png', duration: 21600 },
      { id: 119, name: 'Reinforced Frostite Plate', image: '/images/resources/frost/item-ice-plate-reinforced-icon.png', duration: 28800 },
      { id: 120, name: 'Legs', image: '/images/resources/frost/crafting-ice-leg-shell-icon.png', duration: 43200 },
      { id: 121, name: 'Body', image: '/images/resources/frost/crafting-ice-body-shell-icon.png', duration: 43200 },
      { id: 122, name: 'Helm', image: '/images/resources/frost/crafting-ice-helm-shell-icon.png', duration: 43200 }
    ],
    "Marble": [
      { id: 123, name: 'Marble Chunk', image: '/images/resources/marble/crafting-marble-chunk-icon.png', duration: 7200 },
      { id: 124, name: 'Marble Slab', image: '/images/resources/marble/crafting-marble-slab-icon.png', duration: 14400 },
      { id: 125, name: 'Marble Plate', image: '/images/resources/marble/crafting-marble-plate-icon.png', duration: 21600 },
      { id: 126, name: 'Reinforced Marble Plate', image: '/images/resources/marble/crafting-marble-plate-rf-icon.png', duration: 28800 },
      { id: 127, name: 'Legs', image: '/images/resources/marble/.png', duration: 43200 },
      { id: 128, name: 'Body', image: '/images/resources/marble/.png', duration: 43200 },
      { id: 129, name: 'Helm', image: '/images/resources/marble/.png', duration: 43200 }
    ]
  }
};

export default itemGroups;
