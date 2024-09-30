# Attacks and Special Abilities Design

## Overview
The Attacks and Special Abilities system is a core gameplay mechanic in Bigfoot War, allowing players to use their cards strategically to deal damage, heal, defend, or apply status effects based on their Bigfoot character's abilities and the cards played.

After winning a round, Participants can choose to Attack the Opponent’s Bigfoot instead of collecting the cards. The attack's effectiveness is based on the Bigfoot’s abilities, the suit of the winning card, and the card’s value.

- **Attack Mechanics**:
  - **Hearts**: Healing moves that restore HP.
  - **Clubs**: Offensive attacks that deal damage.
  - **Diamonds**: Defensive moves that reduce incoming damage or increase defense.
  - **Spades**: Poisonous or weakening attacks that reduce the Opponent’s abilities over time.
  - **Face Cards**: Trigger powerful special abilities specific to the Bigfoot character.

- **Knockout Victory**: If a Participant reduces the Opponent’s HP to Zero through Attacks, they win the game by knockout.
- **XP Bonus**: Attacks earn more XP than collecting cards.
- **Collecting Cards**: When a Participant Attacks, they collect only their own cards played during that round. The Opponent's cards are destroyed and removed from play.

## Data Models

```prisma
model Attack {
  id          Int    @id @default(autoincrement())
  name        String
  description String
  suit        String // Hearts, Clubs, Diamonds, Spades
  cardValue   Int    // 2-10, 11 (Jack), 12 (Queen), 13 (King), 14 (Ace)
  effect      String // JSON string describing the attack's effect
  bigfootId   Int
  bigfoot     Bigfoot @relation(fields: [bigfootId], references: [id])
}

model Ability {
  id          Int    @id @default(autoincrement())
  name        String
  description String
  type        String // Primary or Secondary
  effect      String // JSON string describing the ability's effect
  unlockLevel Int
  bigfootId   Int
  bigfoot     Bigfoot @relation(fields: [bigfootId], references: [id])
}

model JokerEffect {
  id          Int    @id @default(autoincrement())
  type        String // Black or Red
  effect      String // JSON string describing the Joker's effect
  bigfootId   Int
  bigfoot     Bigfoot @relation(fields: [bigfootId], references: [id])
}

This updated document now includes the data models for the Attack, Ability, Bigfoot, and JokerEffect entities. These models provide a structure for storing and managing attacks, abilities, Bigfoot characters, and Joker effects. The implementation plan has been updated to reflect the addition of these new data models.
```

## General Card-Based Attacks

Each card played (including its suit and number) triggers specific effects based on the Participant's Bigfoot character and the card's attributes. The suits represent different playstyles, while the card number modifies the potency of that play.

### Suits and Their General Functions

1. **Hearts (Healing)**
   - Healing actions that recover the health of the Participant's Bigfoot character.
   - Higher-numbered cards increase the amount of HP restored.

2. **Clubs (Offensive Attacks)**
   - Physical and aggressive attacks that damage the Opponent's Bigfoot character.
   - Higher-numbered cards increase damage output.

3. **Diamonds (Defensive Plays)**
   - Defensive actions that boost the Participant's defense, shielding them from damage or reducing damage taken.
   - Higher-numbered cards increase the strength or duration of the defense.

4. **Spades (Status and Special Effects)**
   - Cards that trigger status effects (e.g., poison, stuns, debuffs, buffs, etc.) or special tactical actions.
   - Higher-numbered cards increase the potency or length of the effect.

### Number Cards (2-10)

The number of the card influences the strength of the action performed. For example:
- **2**: Minor effect (small heal, low damage, short-duration effect).
- **10**: Major effect (large heal, high damage, long-duration effect).

Examples for each suit:

- **Hearts (Healing)**: 
   - 2 of Hearts: Heal 2 HP.
   - 10 of Hearts: Heal 10 HP.

- **Clubs (Offensive Attacks)**: 
   - 2 of Clubs: Deal 2 damage.
   - 10 of Clubs: Deal 10 damage.

- **Diamonds (Defensive Plays)**: 
   - 2 of Diamonds: Increase defense by 2 points for 1 turn.
   - 10 of Diamonds: Increase defense by 10 points for 3 turns.

- **Spades (Status Effects)**: 
   - 2 of Spades: Apply a minor poison that deals 1 damage over time.
   - 10 of Spades: Apply a strong poison that deals 5 damage over time.

## Special Abilities for Face Cards

Face cards represent stronger abilities and more strategic gameplay. They have unique mechanics based on the Bigfoot's class and suit, triggering powerful attacks, defense mechanisms, or utility moves.

### Jack, Queen, King, and Ace Abilities

1. **Jack**: Aggressive multipliers or fast-paced attacks.
   - **Hearts (Jack)**: Strong healing ability that may heal other conditions like status effects or add a temporary HP boost.
   - **Clubs (Jack)**: Rapid, multi-hit attack that targets a single opponent multiple times.
   - **Diamonds (Jack)**: Instant defense boost with a small counterattack on the Opponent.
   - **Spades (Jack)**: A quick status effect (e.g., freeze or stun) that disables the Opponent for one turn.

2. **Queen**: Supportive abilities or defensive buffs.
   - **Hearts (Queen)**: Heal a significant amount of HP for the Participant's Bigfoot or create a large, temporary HP boost.
   - **Clubs (Queen)**: A powerful single-target attack that deals high damage and may stun the Opponent.
   - **Diamonds (Queen)**: A defensive shield that significantly boosts the Participant's defense while reducing damage taken.
   - **Spades (Queen)**: A strong debuff (e.g., poison the Opponent or reduce their attack power for several turns).

3. **King**: Ultimate ability for each suit.
   - **Hearts (King)**: A massive healing burst that completely heals the Participant's Bigfoot.
   - **Clubs (King)**: Devastating single-target attack that deals massive damage.
   - **Diamonds (King)**: Create a shield that lasts for multiple turns, reducing damage significantly.
   - **Spades (King)**: Apply a powerful, long-lasting debuff that severely hampers the Opponent (e.g., poison, reduce defense, or block healing).

4. **Ace**: The most powerful, game-changing cards that shift the balance of power.
   - **Hearts (Ace)**: Full HP recovery and cleanse all status effects.
   - **Clubs (Ace)**: Deal a massive single-target attack that deals critical damage.
   - **Diamonds (Ace)**: Create an unbreakable shield for several turns, nullifying all damage.
   - **Spades (Ace)**: Unleash a catastrophic status effect (e.g., freeze all enemies for two turns, poison all enemies).

## Special Effects for Jokers

Two Jokers are included in each deck, each with a special effect:

1. **Black Joker**: 
   - **Gold Multiplier**: Multiply the amount of Gold earned in the current match by a factor depending on the Bigfoot's abilities and current level.

2. **Red Joker**: 
   - **XP Multiplier**: Multiply the amount of XP earned in the current match by a factor depending on the Bigfoot's abilities and current level.

## Bigfoot-Specific Abilities

Each Bigfoot character unlocks special abilities as the Player levels up. Examples include:
- **Level 1 (Sasquatch)**: "Forest Regeneration" - Sasquatch can heal every time they play a Hearts card.
- **Level 5 (Yeti)**: "Blizzard Fury" - Each Clubs card attack has a chance to freeze the Opponent for one turn.
- **Level 10 (Skunk Ape)**: "Swamp Strike" - Playing Spades causes additional poison damage over time.

## Implementation Plan

1. Create Attack and Ability models in the Prisma schema
2. Implement API routes for Attack and Ability data:
   - GET /api/attacks/:bigfootId: Retrieve available attacks for a Bigfoot
   - GET /api/abilities/:bigfootId: Retrieve available abilities for a Bigfoot
3. Create AttackDisplay and AbilityDisplay components
4. Implement logic to execute attacks and abilities during gameplay
5. Create an attack/ability selection interface for players

## Components

- AttackDisplay: Shows available attacks during gameplay
- AbilityDisplay: Shows available abilities during gameplay
- AttackSelectionInterface: Allows players to choose between attacking and collecting cards
- AbilitySelectionInterface: Allows players to choose which ability to use

## API Routes

- GET /api/attacks/:bigfootId: Retrieve available attacks for a Bigfoot
- GET /api/abilities/:bigfootId: Retrieve available abilities for a Bigfoot
- POST /api/execute-attack: Execute a chosen attack
- POST /api/execute-ability: Execute a chosen ability

## State Management

- Store current available attacks and abilities in the Zustand store
- Update attack and ability cooldowns in real-time during gameplay

## Considerations

- Balance attack and ability power to ensure fair gameplay
- Implement proper error handling for attack and ability execution
- Consider adding unique animations or visual effects for different attacks and abilities
- Plan for future scalability, such as adding new attacks or abilities for future Bigfoot characters

This Attacks and Special Abilities system will provide players with strategic depth and variety in gameplay, encouraging them to experiment with different Bigfoot characters and ability combinations.