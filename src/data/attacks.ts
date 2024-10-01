export const attacks = {
  hearts: {
    2: { name: "Minor Heal", effect: "heal", value: 2 },
    3: { name: "Small Heal", effect: "heal", value: 3 },
    4: { name: "Medium Heal", effect: "heal", value: 4 },
    5: { name: "Large Heal", effect: "heal", value: 5 },
    6: { name: "Major Heal", effect: "heal", value: 6 },
    7: { name: "Mega Heal", effect: "heal", value: 7 },
    8: { name: "Ultra Heal", effect: "heal", value: 8 },
    9: { name: "Super Heal", effect: "heal", value: 9 },
    10: { name: "Extreme Heal", effect: "heal", value: 10 },
    11: { name: "Jack's Rejuvenation", effect: "heal", value: 15, removeStatusEffects: true },
    12: { name: "Queen's Blessing", effect: "heal", value: 20, addShield: 5 },
    13: { name: "King's Restoration", effect: "heal", value: 25, removeStatusEffects: true, addShield: 10 },
    14: { name: "Ace of Life", effect: "heal", value: 30, removeStatusEffects: true, addShield: 15 },
  },
  clubs: {
    // Implement offensive attacks here
  },
  diamonds: {
    // Implement defensive plays here
  },
  spades: {
    // Implement status effects here
  }
};
