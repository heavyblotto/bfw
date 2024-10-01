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
  class: 'Dwarf' | 'Squatch' | 'Giant' | 'Boss';
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

#### Property Explanations

- `id`: Unique identifier for the Bigfoot character.
- `name`: The name of the Bigfoot character (e.g., Sasquatch, Skunk Ape, Yowie).
- `description`: A brief description of the Bigfoot character's background and traits.
- `location`: The geographical location associated with this Bigfoot.
- `habitat`: The type of environment where this Bigfoot is typically found.
- `class`: The category of the Bigfoot, which affects its base stats. Can be 'Dwarf', 'Squatch', 'Giant', or 'Boss'.
- `level`: The level at which this Bigfoot character becomes available to the player.
- `hp`: Health Points. Determines how much damage the Bigfoot can take before being defeated.
- `attack`: Influences the base damage dealt by the Bigfoot's attacks.
- `defense`: Reduces the amount of damage taken from opponent attacks.
- `luck`: Affects various chance-based events, such as critical hits or bonus rewards. Higher luck can lead to more favorable outcomes in random events.
- `image`: Path to the full-size image of the Bigfoot, used in detailed views.
- `avatar`: Path to the avatar image of the Bigfoot, used in smaller UI elements.
- `attacks`: An object containing arrays of card values for each suit, representing the attacks available to this Bigfoot.
- `primaryAbility`: The main special ability of the Bigfoot, which is always available.
- `secondaryAbility`: An additional ability that becomes available as the Bigfoot levels up.
- `jokerEffect`: Special effects triggered when playing a Joker card, with different effects for black and red Jokers.

These properties define the characteristics, abilities, and gameplay mechanics associated with each Bigfoot character. The combination of these properties creates unique gameplay experiences for each Bigfoot, encouraging players to try different strategies and playstyles.

Note: The description, habitat, location, and other properties of each Bigfoot should directly influence the design of their attacks and abilities. This ensures that each Bigfoot's gameplay style is thematically consistent with their lore and characteristics.

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

#### Relationship to Bigfoot's `attacks` Property

The `attacks` property in the Bigfoot interface is closely related to this attack data structure. Here's how they work together:

1. The Bigfoot's `attacks` property contains arrays of string values for each suit, representing the card values that the Bigfoot can use for attacks.

2. These string values correspond to the keys in the `attacks` data structure.

3. When a Bigfoot uses an attack, the game system:
   a. Checks the suit and value of the played card
   b. Looks up the corresponding attack in the Bigfoot's `attacks` property
   c. Uses that value to retrieve the actual attack data from the `attacks` data structure

For example, if a Sasquatch Bigfoot has this in its `attacks` property:

```typescript
attacks: {
  hearts: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
  // ... other suits
}
```

And the player plays a 2 of Hearts, the system would:
1. See that '2' is in the Sasquatch's `hearts` array
2. Look up `attacks.hearts[2]` in the attack data structure
3. Apply the "Minor Heal" effect with a value of 2

This structure allows for flexible customization of each Bigfoot's available attacks while maintaining a centralized database of attack effects. It also enables easy balancing and modification of attacks without changing the Bigfoot data itself.

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

#### Relationship to Bigfoot's `primaryAbility` and `secondaryAbility` Properties

The `primaryAbility` and `secondaryAbility` properties in the Bigfoot interface are directly related to this ability data structure. Here's how they work together:

1. The Bigfoot's `primaryAbility` and `secondaryAbility` properties contain string values that serve as keys to look up the actual ability data in the `abilities` structure.

2. The `primaryAbility` is always available to the Bigfoot and represents its core special ability.

3. The `secondaryAbility` becomes available as the Bigfoot levels up, providing additional strategic options.

4. When a Bigfoot uses an ability, the game system:
   a. Retrieves the ability key from the Bigfoot's `primaryAbility` or `secondaryAbility` property
   b. Uses that key to look up the full ability data in the `abilities` data structure

For example, if a Sasquatch Bigfoot has these ability properties:

```typescript
{
  primaryAbility: 'forestRegeneration',
  secondaryAbility: 'barkArmor'
}
```

The system would:
1. For the primary ability:
   - Look up `abilities.primary.forestRegeneration`
   - Apply the "Forest Regeneration" effect, healing 2 HP every time a Hearts card is played

2. For the secondary ability (once unlocked):
   - Look up `abilities.secondary.barkArmor`
   - Apply the "Bark Armor" effect (assuming it exists in the secondary abilities)

This structure allows for:
- Easy assignment of abilities to different Bigfoot characters
- Centralized management of ability data
- Flexibility in updating or balancing abilities without changing individual Bigfoot data
- Clear separation between available abilities (in the Bigfoot data) and ability effects (in the central ability data)

It's important to note that while a Bigfoot always has both `primaryAbility` and `secondaryAbility` properties defined, the secondary ability might not be immediately available in gameplay. The availability of the secondary ability could be tied to the Bigfoot's level or other progression mechanics, as defined in the game rules.

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
  image: '/images/bigfoots/sasquatch.png',
  avatar: '/images/bigfoots/avatars/sasquatch-avatar.png',
};
```

### Usage in Application

These Bigfoot data files play a crucial role in the application:

1. **Character Selection**: When players are choosing their Bigfoot character, the application loads these data files to populate the selection screen with available characters, their images, and basic stats.

2. **Game Initialization**: At the start of a game, the selected Bigfoot's data is loaded to set up the player's initial state, including HP, attack power, and available abilities.

3. **Gameplay Mechanics**: During gameplay, the application refers to the Bigfoot's data to:
   - Determine which attacks are available for each card played
   - Apply primary and secondary abilities when triggered
   - Implement Joker effects when Joker cards are played

4. **UI Rendering**: The Bigfoot's image and avatar are used throughout the UI, such as on the game board, in the player's profile, and in match results.

5. **Leveling and Progression**: As players level up, the application checks these files to determine which new Bigfoots or abilities become available.

6. **AI Opponent Setup**: When setting up AI opponents, the system uses these files to create appropriately leveled and themed adversaries.

7. **Data Management**: These files serve as the single source of truth for Bigfoot data, making it easy to update character stats, abilities, or visuals across the entire application by modifying a single file.

By structuring Bigfoot data in this way, the application maintains a clear separation of concerns, improves maintainability, and allows for easy addition or modification of Bigfoot characters as the game evolves.

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

export function getBigfootImagePath(bigfoot: Bigfoot): string {
  return bigfoot.image;
}

export function getBigfootAvatarPath(bigfoot: Bigfoot): string {
  return bigfoot.avatar;
}

export function getOptimizedImageUrl(imagePath: string, width: number, height: number): string {
  return `/_next/image?url=${encodeURIComponent(imagePath)}&w=${width}&q=75`;
}
```

### Usage in Application

These utility functions play a crucial role in various parts of the application:

1. **getBigfootAttack**:
   - Used in the game logic when a player plays a card
   - Called in the Arena component to determine and apply the attack effect
   - Used in AI logic to decide on the best card to play

2. **getBigfootAbility**:
   - Called at the start of a player's turn to check and apply any passive abilities
   - Used when rendering the Bigfoot details to display ability information
   - Utilized in the game logic when specific triggers activate an ability

3. **getBigfootJokerEffect**:
   - Invoked when a player plays a Joker card in the game
   - Used in the UI to display information about Joker effects for each Bigfoot

4. **getBigfootImagePath** and **getBigfootAvatarPath**:
   - Used in various UI components to display Bigfoot images and avatars
   - Called when rendering the Bigfoot selection screen
   - Utilized in the Arena component to show the current Bigfoot in play

5. **getOptimizedImageUrl**:
   - Used in conjunction with Next.js Image component for optimized image loading
   - Called when rendering Bigfoot images in lists, details views, and the game arena

These functions will be imported and used across different components and modules in the application, including:

- Game logic modules (e.g., `src/game/engine.ts`)
- React components (e.g., `src/components/BigfootCard.tsx`, `src/components/Arena.tsx`)
- State management (e.g., Zustand store actions)
- API route handlers (e.g., `src/pages/api/bigfoots/[id].ts`)

By centralizing these utility functions, we ensure consistent behavior across the application and make it easier to update game logic in one place. This approach also improves code readability and maintainability by abstracting complex operations into simple function calls.

## Features

1. Unique Bigfoot Characters
   - Each Bigfoot has a unique name, set of attacks, abilities, and Joker effects
   - Implemented using the Bigfoot interface and individual Bigfoot data files
   - Utilizes the `attacks`, `primaryAbility`, `secondaryAbility`, and `jokerEffect` properties
   - The `location` property is used in the Bigfoot selection system to create a "map" of player progress
   - The `habitat` property determines the style of background art used during gameplay

2. Class System
   - Bigfoots are categorized into four classes: Dwarf, Squatch, Giant, and Boss
   - Defined in the Bigfoot interface using the `class` property
   - Affects base stats and potentially gameplay mechanics
   - Boss class represents special, more powerful Bigfoots that may serve as end-of-level challenges or special events
   - Property distribution is determined by class:
     * Squatch: Balanced across all properties
     * Dwarf: Highest luck and defense, lowest attack and HP
     * Giant: Highest HP and attack, lowest luck and defense
     * Boss: Unique distributions based on specific boss designs

3. Stat-based Gameplay
   - Each Bigfoot has stats: HP, Attack, Defense, and Luck
   - Represented by corresponding properties in the Bigfoot interface
   - Used in game logic to determine attack strength, damage reduction, and chance-based events
   - Stat distribution reflects the Bigfoot's class, creating distinct playstyles and strategies

4. Character Progression
   - Players unlock more powerful Bigfoot characters as they level up
   - Implemented using the `level` property in the Bigfoot interface
   - Tied to the player's progression system (not shown in this document)

5. Card-based Attacks
   - Attacks are based on card suits and values
   - Defined in the `attacks` property of the Bigfoot interface
   - Utilizes the attack data structure and `getBigfootAttack` utility function

6. Special Abilities
   - Each Bigfoot has primary and secondary abilities
   - Represented by `primaryAbility` and `secondaryAbility` properties
   - Implemented using the ability data structure and `getBigfootAbility` utility function

7. Joker Effects
   - Special effects triggered by Joker cards
   - Defined in the `jokerEffect` property of the Bigfoot interface
   - Utilizes the Joker effect data structure and `getBigfootJokerEffect` utility function

8. Location-based Selection System
   - The `location` property of each Bigfoot is used to create a "map" in the Bigfoot selection interface
   - This map represents the player's progress through different regions and levels
   - While location doesn't affect gameplay directly, it provides a thematic progression for unlocking new Bigfoots

9. Habitat-based Visual Theming
   - The `habitat` property determines the style of background art used during gameplay
   - This creates a visually diverse experience as players encounter Bigfoots from different environments
   - Habitats might include forests, mountains, swamps, tundra, etc., each with its unique visual style

These features are closely tied to the data models and implementation:

- The Bigfoot interface serves as the foundation for all character-related features
- Individual Bigfoot data files (e.g., `sasquatch.ts`) provide the specific data for each character
- Utility functions in `bigfootUtils.ts` facilitate the use of these features in the game logic
- The attack, ability, and Joker effect data structures (`attacks.ts`, `abilities.ts`, `jokerEffects.ts`) provide the detailed mechanics for each feature
- Components like BigfootCard, BigfootSelection, and BigfootDetails will use this data to render the UI and handle user interactions
- The game engine will utilize these features to manage gameplay, applying attacks, abilities, and effects based on player actions and game state
- The selection interface will use the `location` property to create a progression map
- The gameplay interface will use the `habitat` property to determine appropriate background visuals

By structuring the features this way, we ensure a modular and extensible system that can easily accommodate new Bigfoot characters, abilities, or gameplay mechanics in the future. The addition of location-based selection and habitat-based theming enhances the game's visual appeal and provides a sense of progression and exploration for the players.

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

### Data Files and API Route Interaction

The data files and API routes work together to provide efficient data access and management:

1. Data files (`src/data/bigfoots/*.ts`, `attacks.ts`, `abilities.ts`, `jokerEffects.ts`) serve as the source of truth for all Bigfoot-related data.

2. API routes act as an interface between the client-side application and the data:
   - When an API route is called, it reads the necessary data from the relevant data files.
   - The route then processes this data as needed (e.g., filtering, combining) before sending it to the client.

3. For example, the `/api/bigfoots` route would:
   - Import all Bigfoot data files
   - Compile the data into an array
   - Send this array as a JSON response

4. The `/api/bigfoots/:id` route would:
   - Import the specific Bigfoot data file based on the `:id` parameter
   - Enhance the Bigfoot data with related attack, ability, and Joker effect details
   - Return the compiled data as a JSON response

5. The `/api/player/bigfoots` route would:
   - Authenticate the player
   - Determine which Bigfoots are available based on the player's level
   - Filter and return only the available Bigfoot data

This architecture allows for:
- Centralized data management in TypeScript files
- Dynamic data access through API routes
- Efficient client-side data fetching
- Easy expansion of the data model and API as the game evolves

By separating the data storage (in files) from the data access (via API routes), we create a flexible system that can easily adapt to future changes in data structure or access patterns.

### Image Handling

Bigfoot character images are stored in the public directory and referenced in the Bigfoot data files:

- Full-size images: `/public/images/bigfoots/`
- Avatar images: `/public/images/bigfoots/avatars/`

Image paths in the Bigfoot data files are relative to the public directory:

```typescript
export const sasquatch: Bigfoot = {
  // ... other properties
  image: '/images/bigfoots/sasquatch.png',
  avatar: '/images/bigfoots/avatars/sasquatch-avatar.png',
};
```

When using these images in components, use the Next.js Image component for optimization:

```tsx
import Image from 'next/image';

<Image 
  src={bigfoot.image} 
  alt={bigfoot.name} 
  width={300} 
  height={300} 
/>
```

Ensure all images are optimized and in appropriate formats (e.g., WebP) for better performance.

## Component Integration

### Components
- BigfootCard: Displays individual Bigfoot information
- BigfootSelection: Allows players to choose their Bigfoot for matches
- BigfootDetails: Shows detailed information about a specific Bigfoot

### State Management
- Store available Bigfoots in the Zustand store
- Track the currently selected Bigfoot in the player's game state

### Utility Functions and Data Model Usage

These components will integrate closely with the utility functions and data models:

1. **BigfootCard**:
   - Uses `getBigfootImagePath` to display the Bigfoot's avatar
   - Accesses the Bigfoot interface properties to show name, class, and basic stats
   - May use `getBigfootAbility` to display a summary of the Bigfoot's primary ability

2. **BigfootSelection**:
   - Utilizes the Zustand store to access the list of available Bigfoots
   - Uses `getBigfootImagePath` and `getBigfootAvatarPath` to display Bigfoot images
   - Accesses the Bigfoot interface properties to show relevant information for selection
   - May use `getOptimizedImageUrl` for efficient image loading in the selection grid

3. **BigfootDetails**:
   - Uses all properties from the Bigfoot interface to display comprehensive information
   - Calls `getBigfootAbility` to show detailed information about primary and secondary abilities
   - Utilizes `getBigfootJokerEffect` to explain Joker effects
   - May use `getBigfootAttack` to display a list of available attacks for each suit
   - Uses `getBigfootImagePath` with `getOptimizedImageUrl` to display a high-quality Bigfoot image

### Data Flow and State Management

1. The Zustand store will:
   - Fetch Bigfoot data from the API routes (e.g., `/api/bigfoots`, `/api/player/bigfoots`)
   - Store the retrieved Bigfoot objects, which follow the Bigfoot interface
   - Provide actions to update the currently selected Bigfoot

2. Components will:
   - Access Bigfoot data from the Zustand store
   - Use utility functions to process and display data as needed
   - Trigger state updates when user interactions occur (e.g., selecting a new Bigfoot)

3. The game state will:
   - Keep track of the currently active Bigfoot during gameplay
   - Utilize utility functions like `getBigfootAttack` and `getBigfootAbility` to apply game mechanics

By leveraging the utility functions and adhering to the defined data models, these components ensure consistent data handling and presentation throughout the application. This approach promotes reusability, maintainability, and a unified user experience across different parts of the game interface.

## Implementation Plan

1. Create data files:
   - [x] Create `src/data/abilities.ts`
   - [ ] Create `src/data/attacks.ts` and `src/data/jokerEffects.ts`
   - [ ] Create individual Bigfoot files in `src/data/bigfoots/`
      - [x] Create `sasquatch.ts`
      - [ ] Add more Bigfoot characters based on the provided list

2. Implement utility functions:
   - [ ] Create `src/utils/bigfootUtils.ts` with necessary functions
   - [ ] Add image-related utility functions (getBigfootImagePath, getBigfootAvatarPath, getOptimizedImageUrl)

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
  
7. Image handling:
   - [ ] Create directories for Bigfoot images: `public/images/bigfoots/` and `public/images/bigfoots/avatars/`
   - [ ] Add Bigfoot character images to the appropriate directories
   - [ ] Update Bigfoot data files with correct image paths
   - [ ] Implement image display in BigfootCard and BigfootDetails components using Next.js Image component

## Future Enhancements
- Implement a balancing system for Bigfoot abilities and stats
- Create a progression system for upgrading Bigfoot abilities
- Design and implement special event Bigfoots or variants
- Add more diverse attack patterns and ability combinations
- Implement special mechanics and encounters for Boss class Bigfoots