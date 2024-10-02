export const abilities = {
    primary: {
      forestStealth: {
        name: "Forest Stealth",
        description: "Increased chance to avoid attacks in forested areas",
        effect: "avoidAttack",
        value: 20, // 20% chance to avoid attacks
        trigger: "passive" // Always active
      },
      jungleAgility: {
        name: "Jungle Agility",
        description: "Increased speed and evasion in dense forest environments",
        effect: "increaseEvasion",
        value: 25, // 25% increase in evasion
        trigger: "passive"
      },
      tropicalAdaptation: {
        name: "Tropical Adaptation",
        description: "Resistance to heat and humidity-based effects",
        effect: "resistEnvironment",
        value: 30, // 30% resistance to environmental effects
        trigger: "passive"
      },
      swampStealth: {
        name: "Swamp Stealth",
        description: "Increased evasion and camouflage in swampy environments",
        effect: "increaseEvasion",
        value: 30, // 30% increase in evasion in swamps
        trigger: "passive"
      },
    },
    secondary: {
      eerieWhistle: {
        name: "Eerie Whistle",
        description: "Emit an eerie whistle that reduces the opponent's attack power",
        effect: "reduceAttack",
        value: 15, // Reduce opponent's attack by 15%
        trigger: "onSpadesPlay" // Triggered when playing a Spades card
      },
      mimicryCall: {
        name: "Mimicry Call",
        description: "Mimic local animal sounds to confuse and disorient the opponent",
        effect: "confuseOpponent",
        value: 20, // 20% chance to make opponent miss their next turn
        trigger: "onHeartsPlay"
      },
      swiftDodge: {
        name: "Swift Dodge",
        description: "Quickly evade incoming attacks with incredible speed",
        effect: "dodgeAttack",
        value: 30, // 30% chance to completely dodge an attack
        trigger: "onDiamondsPlay"
      },
      canopyLeap: {
        name: "Canopy Leap",
        description: "Leap through the forest canopy to deal surprise damage",
        effect: "surpriseAttack",
        damage: 15,
        trigger: "onClubsPlay"
      },
      noxiousCloud: {
        name: "Noxious Cloud",
        description: "Release a foul-smelling cloud that reduces opponent's accuracy and defense",
        effect: "debuffOpponent",
        value: {
          accuracy: -20, // Reduce opponent's accuracy by 20%
          defense: -15  // Reduce opponent's defense by 15%
        },
        duration: 2, // Lasts for 2 turns
        trigger: "onClubsPlay"
      },
    }
  };