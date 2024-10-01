export const abilities = {
    primary: {
      forestStealth: {
        name: "Forest Stealth",
        description: "Increased chance to avoid attacks in forested areas",
        effect: "avoidAttack",
        value: 20, // 20% chance to avoid attacks
        trigger: "passive" // Always active
      },
      rockThrow: {
        name: "Rock Throw",
        description: "Throw rocks at the opponent, dealing damage and potentially stunning them",
        effect: "damageAndStun",
        damage: 15,
        stunChance: 10, // 10% chance to stun
        trigger: "onClubsPlay" // Triggered when playing a Clubs card
      }
    },
    secondary: {
      eerieWhistle: {
        name: "Eerie Whistle",
        description: "Emit an eerie whistle that reduces the opponent's attack power",
        effect: "reduceAttack",
        value: 15, // Reduce opponent's attack by 15%
        trigger: "onSpadesPlay" // Triggered when playing a Spades card
      },
      thickFur: {
        name: "Thick Fur",
        description: "Sasquatch's thick fur provides additional defense against attacks",
        effect: "increaseDefense",
        value: 10, // Increase defense by 10%
        trigger: "onDiamondsPlay" // Triggered when playing a Diamonds card
      }
    }
  };