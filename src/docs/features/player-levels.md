# Player Levels System

## Table of Contents
- [Overview](#overview)
- [Data Models](#data-models)
- [Features](#features)
- [Architecture](#architecture)
- [Component Integration](#component-integration)
- [Implementation Plan](#implementation-plan)
- [Future Enhancements](#future-enhancements)

## Overview
The Player Levels system is a core progression mechanic in Bigfoot War, allowing players to unlock new content, abilities, and Bigfoot characters as they gain experience and advance through the game.

See also:
- [Game Design](game-design.md)

## Data Models

See the [schema.prisma](../../../prisma/schema.prisma) file for more details.

### PlayerLevel

- id: Unique identifier for the player level
- playerProfileId: Foreign key to the PlayerProfile
- level: Current level of the player
- currentXP: Current experience points of the player
- xpToNextLevel: Experience points required to reach the next level
- unlockedBigfoots: Bigfoot characters unlocked by the player

### XPGain

- id: Unique identifier for the XP gain event
- playerLevelId: Foreign key to the PlayerLevel
- amount: Amount of XP gained
- source: Source of the XP gain
- timestamp: Time when the XP was gained

### Schema

```prisma
model PlayerLevel {
  id              Int              @id @default(autoincrement())
  playerProfileId Int              @unique
  playerProfile   PlayerProfile    @relation(fields: [playerProfileId], references: [id])
  level           Int              @default(1)
  currentXP       Int              @default(0)
  xpToNextLevel   Int
  unlockedBigfoots BigfootCharacter[]
}

model XPGain {
  id              Int              @id @default(autoincrement())
  playerLevelId   Int
  playerLevel     PlayerLevel      @relation(fields: [playerLevelId], references: [id])
  amount          Int
  source          String
  timestamp       DateTime         @default(now())
}
```

Related data models:
- PlayerProfile
- BigfootCharacter

## Features

1. Leveling System
   - Players start at Level 1 with access to Sasquatch as their Player Bigfoot
   - XP bar shows progress towards the next level
   - Levels displayed on a linear map with waypoints for each Level
   - Players must defeat all Opponent Bigfoot characters at a Level to unlock the next Level
   - Winning matches and achievements unlock new Player Levels, granting access to new Matches and Player Bigfoot Characters

2. XP System
   - Players gain XP through various gameplay actions:
     - Win a Match: Large XP gain
     - Defeat Opponent Bigfoot: XP for defeating a specific Opponent Bigfoot
     - Win a Round: Small XP gain for each round won
     - Collect Cards: Minor XP gain for collecting cards
     - Attack Opponent: XP gain for successful attacks
     - Achievements: XP rewards for completing milestones and achievements

3. Bigfoot Character Progression
   - Players unlock new Bigfoot characters as they level up:
     - Level 1: Sasquatch (default Bigfoot)
     - Level 2: Skunk Ape
     - Level 3: Yowie
     - Level 4: Yeti
     - Level 5: Orang Mawas
     - Higher levels: Additional regional and mythical Bigfoots

4. Bigfoot Ability Progression
   - Each Bigfoot character has abilities that scale with Player Level:
     - Primary Ability: Unique to each Bigfoot, scales as they progress
     - Secondary Ability: Unlocked at higher levels

5. Match Selection
   - Matches available for each unlocked Opponent Bigfoot character at each level
   - Players advance along the map by winning Matches within each Level
   - Waypoints contain Matches for available Bigfoot character opponents at that Level
   - Players can repeat Matches to earn Gold and XP
   - Matches against locked Opponent Bigfoot characters require Gold to play

## Architecture

### Technology Stack
- Next.js: React framework for server-side rendering and API routes
- Prisma: ORM for database management
- TypeScript: For type-safe code
- Zustand: For state management

### API Routes
- **Get Player Level**: 
  - **Route**: `GET /api/player-level/:playerProfileId`
  - **File**: `src/pages/api/player-level/[playerProfileId].ts`
  - **Functionality**: Retrieve current level and XP

- **Add XP**: 
  - **Route**: `POST /api/player-level/add-xp`
  - **File**: `src/pages/api/player-level/add-xp.ts`
  - **Functionality**: Add XP and handle level-ups

### Components
- **LevelProgressDisplay**: Shows current level and XP progress
  - **File**: `src/components/LevelProgressDisplay.tsx`

- **LevelUpNotification**: Displays a pop-up when a new level is reached
  - **File**: `src/components/LevelUpNotification.tsx`

- **UnlockedContentDisplay**: Shows newly unlocked Bigfoots and abilities
  - **File**: `src/components/UnlockedContentDisplay.tsx`

### State Management
- Store current player level and XP in the Zustand store
- Update level and XP in real-time during gameplay

## Component Integration

### LevelProgressDisplay
- **File**: `src/components/LevelProgressDisplay.tsx`
- **Usage**: 
  - `src/pages/game.tsx`

### LevelUpNotification
- **File**: `src/components/LevelUpNotification.tsx`
- **Usage**: 
  - `src/pages/game.tsx`

### UnlockedContentDisplay
- **File**: `src/components/UnlockedContentDisplay.tsx`
- **Usage**: 
  - `src/pages/game.tsx`

### Zustand Store
- **File**: `src/stores/playerLevelStore.ts`
- **Usage**: 
  - `src/pages/game.tsx`
  - `src/components/LevelProgressDisplay.tsx`
  - `src/components/LevelUpNotification.tsx`

## Implementation Plan

### Current Status
- Initial design and data models created

### Plan

1. Set up data models:
   - [ ] Create PlayerLevel model in Prisma schema
   - [ ] Create BigfootCharacter model in Prisma schema
   - [ ] Create XPGain model in Prisma schema

2. Implement API routes:
   - [ ] Create GET /api/player-level/:playerProfileId endpoint
   - [ ] Create POST /api/player-level/add-xp endpoint

3. Create UI components:
   - [ ] Develop LevelProgressDisplay component
   - [ ] Develop LevelUpNotification component
   - [ ] Develop UnlockedContentDisplay component

4. Implement game logic:
   - [ ] Create logic to track XP gain during gameplay
   - [ ] Implement level-up system
   - [ ] Integrate level-based unlocks for Bigfoot characters and abilities

5. State management:
   - [ ] Set up Zustand store for player level and XP
   - [ ] Implement real-time updates of level and XP during gameplay

## Future Enhancements
- Implement catch-up mechanics for new players to compete with veterans
- Consider prestige systems for long-term engagement after reaching max level
- Plan for increasing the level cap or adding new Bigfoot characters
- Implement proper error handling for XP updates and level-ups
- Balance XP gain to ensure smooth progression without feeling grindy