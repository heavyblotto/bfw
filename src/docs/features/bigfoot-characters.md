# Bigfoot Characters Design

## Table of Contents
- [Overview](#overview)
- [Data Models](#data-models)
- [Features](#features)
- [Architecture](#architecture)
- [Component Integration](#component-integration)
- [Implementation Plan](#implementation-plan)
- [Future Enhancements](#future-enhancements)

## Overview
Bigfoot characters are a core element of the game, representing the player and opponents in matches. Each Bigfoot has unique properties and abilities that affect gameplay.

See also:
- [Game Design](game-design.md)

## Data Models

See the [schema.prisma](../../../prisma/schema.prisma) file for more details.

### Bigfoot

- name: The unique identifier for each Bigfoot character
- class: Categorizes Bigfoots into three classes: Dwarf, Squatch, Giant
- level: The player level required to unlock and use the Bigfoot character
- primaryAbility: The main unique ability of the Bigfoot character
- secondaryAbility: An additional ability that becomes available at higher levels
- hp: Health Points
- attack: Influences the damage dealt when using attack actions
- defense: Affects the amount of damage absorbed or mitigated
- luck: Influences the amount of Gold and XP earned during matches
- image: The image associated with the Bigfoot character
- avatar: The avatar associated with the Bigfoot character

### Schema

```prisma
model Bigfoot {
  id          Int      @id @default(autoincrement())
  name        String
  class       String   // Dwarf, Squatch, or Giant
  level       Int
  hp          Int
  attack      Int
  defense     Int
  luck        Int
  attacks     Attack[]
  abilities   Ability[]
  jokerEffects JokerEffect[]
}
```

## Features

1. Unique Bigfoot Characters
   - Each Bigfoot has a unique name and set of abilities

2. Class System
   - Bigfoots are categorized into three classes: Dwarf, Squatch, and Giant

3. Stat-based Gameplay
   - Each Bigfoot has four main stats: HP, Attack, Defense, and Luck

4. Character Progression
   - Players unlock more powerful Bigfoot characters as they level up

## Architecture

### Technology Stack
- Next.js: React framework for building the user interface
- Prisma: ORM for database management
- TypeScript: Ensures type safety throughout the project
- Zustand: State management library

### API Routes
- **Get All Bigfoots**: 
  - **Route**: `GET /api/bigfoots`
  - **File**: `src/pages/api/bigfoots.ts`
  - **Functionality**: Retrieve all Bigfoot characters

- **Get Specific Bigfoot**: 
  - **Route**: `GET /api/bigfoots/:id`
  - **File**: `src/pages/api/bigfoots/[id].ts`
  - **Functionality**: Retrieve a specific Bigfoot character

- **Get Player Bigfoots**: 
  - **Route**: `GET /api/player/bigfoots`
  - **File**: `src/pages/api/player/bigfoots.ts`
  - **Functionality**: Retrieve Bigfoots available to the current player

### Components
- **BigfootCard**: Displays individual Bigfoot information
  - **File**: `src/components/BigfootCard.tsx`

- **BigfootSelection**: Allows players to choose their Bigfoot for matches
  - **File**: `src/components/BigfootSelection.tsx`

- **BigfootDetails**: Shows detailed information about a specific Bigfoot
  - **File**: `src/components/BigfootDetails.tsx`

### State Management
- Store available Bigfoots in the Zustand store
- Track the currently selected Bigfoot in the player's game state

## Assets

### Image Assets
- **Bigfoot Character Images**: 
  - **Directory**: `public/images/bigfoots/`
  - **Format**: PNG
  - **Naming Convention**: `{bigfoot_name}.png` (e.g., `sasquatch.png`, `yeti.png`)

### Avatar Assets
- **Bigfoot Avatar Images**: 
  - **Directory**: `public/images/avatars/`
  - **Format**: PNG
  - **Naming Convention**: `{bigfoot_name}_avatar.png` (e.g., `sasquatch_avatar.png`, `yeti_avatar.png`)

### Sound Assets
- **Bigfoot Sound Effects**: 
  - **Directory**: `public/sounds/bigfoots/`
  - **Format**: MP3
  - **Naming Convention**: `{bigfoot_name}_{action}.mp3` (e.g., `sasquatch_attack.mp3`, `yeti_ability.mp3`)

### Animation Assets
- **Bigfoot Animations**: 
  - **Directory**: `public/animations/bigfoots/`
  - **Format**: JSON (for Lottie animations) or GIF
  - **Naming Convention**: `{bigfoot_name}_{animation_type}.{format}` (e.g., `sasquatch_idle.json`, `yeti_victory.gif`)

## Component Integration

### BigfootCard
- **File**: `src/components/BigfootCard.tsx`
- **Usage**: 
  - `src/pages/bigfoot-selection.tsx`

### BigfootSelection
- **File**: `src/components/BigfootSelection.tsx`
- **Usage**: 
  - `src/pages/main-menu.tsx`

### BigfootDetails
- **File**: `src/components/BigfootDetails.tsx`
- **Usage**: 
  - `src/pages/bigfoot-details.tsx`

### Bigfoot Store
- **File**: `src/stores/bigfootStore.ts`
- **Usage**: 
  - `src/pages/bigfoot-selection.tsx`
  - `src/components/BigfootCard.tsx`
  - `src/components/BigfootSelection.tsx`

### API Routes
- **Get All Bigfoots**: 
  - **File**: `src/pages/api/bigfoots.ts`
  - **Usage**: 
    - `src/components/BigfootSelection.tsx`

- **Get Specific Bigfoot**: 
  - **File**: `src/pages/api/bigfoots/[id].ts`
  - **Usage**: 
    - `src/components/BigfootDetails.tsx`

## Implementation Plan

### Current Status
- Bigfoot data model defined

### Plan

1. Create Bigfoot model in Prisma schema:
   - [ ] Define Bigfoot model in schema.prisma
   - [ ] Run Prisma migration
   - [ ] Generate Prisma client

2. Implement API routes:
   - [ ] Create GET /api/bigfoots route
   - [ ] Create GET /api/bigfoots/:id route
   - [ ] Create GET /api/player/bigfoots route

3. Create Bigfoot components:
   - [ ] Implement BigfootCard component
   - [ ] Implement BigfootSelection component
   - [ ] Implement BigfootDetails component

4. Integrate with game logic:
   - [ ] Add logic to unlock Bigfoots based on player level
   - [ ] Integrate Bigfoot selection with the match system
   - [ ] Implement Bigfoot abilities in the game logic

## Future Enhancements
- Design and implement visual representations of each Bigfoot character
- Create a balancing system for Bigfoot abilities and stats
- Implement a progression system for upgrading Bigfoot abilities
- Design and implement special event Bigfoots or variants