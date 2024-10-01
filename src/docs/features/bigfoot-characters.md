# Bigfoot Characters Design

## Table of Contents
- [Overview](#overview)
- [Data Models](#data-models)
- [Implementation](#implementation)
- [Utility Functions](#utility-functions)
- [Features](#features)
- [Architecture](#architecture)
- [Component Integration](#component-integration)
- [Implementation Plan](#implementation-plan)
- [Future Enhancements](#future-enhancements)

## Overview
Bigfoot characters are a core element of the game, representing the player and opponents in matches. Each Bigfoot has unique properties, attacks, abilities, and Joker effects that affect gameplay.

## Data Models

### Bigfoot

```typescript
interface Bigfoot {
  id: string;
  name: string;
  description: string;
  location: string;
  habitat: string;
  class: 'Dwarf' | 'Squatch' | 'Giant';
  level: number;
  hp: number;
  attack: number;
  defense: number;
  luck: number;
  image: string;
  avatar: string;
  attacks: {
    hearts: string[];
    clubs: string[];
    diamonds: string[];
    spades: string[];
  };
  primaryAbility: string;
  secondaryAbility: string;
  jokerEffect: {
    black: string;
    red: string;
  };
}
```

### Attack Data Structure

```typescript
// src/data/attacks.ts
export const attacks = {
  hearts: {
    2: { name: "Minor Heal", effect: "heal", value: 2 },
    // ... other number cards
    11: { name: "Jack's Rejuvenation", effect: "heal", value: 15, removeStatusEffects: true },
    // ... other face cards
  },
  clubs: {
    // Offensive attacks
  },
  diamonds: {
    // Defensive plays
  },
  spades: {
    // Status effects
  }
};
```

### Ability Data Structure

```typescript
// src/data/abilities.ts
export const abilities = {
  primary: {
    forestRegeneration: {
      name: "Forest Regeneration",
      description: "Heal every time a Hearts card is played",
      effect: "healOnHearts",
      value: 2
    },
    // ... other primary abilities
  },
  secondary: {
    // ... secondary abilities
  }
};
```

### Joker Effect Data Structure

```typescript
// src/data/jokerEffects.ts
export const jokerEffects = {
  black: {
    name: "Gold Multiplier",
    effect: "multiplyGold",
    baseMultiplier: 1.5
  },
  red: {
    name: "XP Multiplier",
    effect: "multiplyXP",
    baseMultiplier: 1.5
  }
};
```

## Implementation

### Bigfoot Data Files

```typescript
// src/data/bigfoots/sasquatch.ts
import { attacks } from '../attacks';
import { abilities } from '../abilities';
import { jokerEffects } from '../jokerEffects';

export const sasquatch: Bigfoot = {
  id: 'sasquatch',
  name: 'Sasquatch',
  // ... other properties
  attacks: {
    hearts: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
    clubs: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
    diamonds: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
    spades: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
  },
  primaryAbility: 'forestRegeneration',
  secondaryAbility: 'someSecondaryAbility',
  jokerEffect: {
    black: 'black',
    red: 'red',
  },
};
```

## Utility Functions

```typescript
// src/utils/bigfootUtils.ts

import { attacks } from '../data/attacks';
import { abilities } from '../data/abilities';
import { jokerEffects } from '../data/jokerEffects';
import { Bigfoot } from '../types';

export function getBigfootAttack(bigfoot: Bigfoot, suit: string, value: number) {
  const attackKey = bigfoot.attacks[suit].find(k => k === value.toString());
  return attackKey ? attacks[suit][attackKey] : null;
}

export function getBigfootAbility(bigfoot: Bigfoot, type: 'primary' | 'secondary') {
  const abilityKey = bigfoot[`${type}Ability`];
  return abilities[type][abilityKey];
}

export function getBigfootJokerEffect(bigfoot: Bigfoot, type: 'black' | 'red') {
  const effectKey = bigfoot.jokerEffect[type];
  return jokerEffects[effectKey];
}
```

## Features

1. Unique Bigfoot Characters
   - Each Bigfoot has a unique name, set of attacks, abilities, and Joker effects

2. Class System
   - Bigfoots are categorized into three classes: Dwarf, Squatch, and Giant

3. Stat-based Gameplay
   - Each Bigfoot has stats: HP, Attack, Defense, and Luck

4. Character Progression
   - Players unlock more powerful Bigfoot characters as they level up

5. Card-based Attacks
   - Attacks are based on card suits and values

6. Special Abilities
   - Each Bigfoot has primary and secondary abilities

7. Joker Effects
   - Special effects triggered by Joker cards

## Architecture

### Technology Stack
- Next.js: React framework for building the user interface
- TypeScript: Ensures type safety throughout the project
- Zustand: State management library

### Data Storage
- Bigfoot data stored in TypeScript files
- Attack, ability, and Joker effect data stored in separate files

### API Routes
- GET /api/bigfoots: Retrieve all Bigfoot characters
- GET /api/bigfoots/:id: Retrieve a specific Bigfoot character
- GET /api/player/bigfoots: Retrieve Bigfoots available to the current player

## Component Integration

### Components
- BigfootCard: Displays individual Bigfoot information
- BigfootSelection: Allows players to choose their Bigfoot for matches
- BigfootDetails: Shows detailed information about a specific Bigfoot

### State Management
- Store available Bigfoots in the Zustand store
- Track the currently selected Bigfoot in the player's game state

## Implementation Plan

1. Create data files:
   - [ ] Create `src/data/attacks.ts`, `src/data/abilities.ts`, and `src/data/jokerEffects.ts`
   - [ ] Create individual Bigfoot files in `src/data/bigfoots/`

2. Implement utility functions:
   - [ ] Create `src/utils/bigfootUtils.ts` with necessary functions

3. Update existing components:
   - [ ] Modify BigfootCard, BigfootSelection, and BigfootDetails to use new data structure

4. Implement API routes:
   - [ ] Create GET /api/bigfoots route
   - [ ] Create GET /api/bigfoots/:id route
   - [ ] Create GET /api/player/bigfoots route

5. Update state management:
   - [ ] Modify Zustand store to work with new Bigfoot data structure

6. Testing and refinement:
   - [ ] Write unit tests for utility functions and components
   - [ ] Perform integration testing

## Future Enhancements
- Implement a balancing system for Bigfoot abilities and stats
- Create a progression system for upgrading Bigfoot abilities
- Design and implement special event Bigfoots or variants
- Add more diverse attack patterns and ability combinations

This updated design document now provides a cohesive and aligned structure for the Bigfoot characters, their attacks, abilities, and Joker effects. It covers the data models, implementation details, features, architecture, component integration, and a clear implementation plan.