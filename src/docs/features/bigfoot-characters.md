# Bigfoot Characters

## Overview
Bigfoot characters are a core element of the game, representing the player and opponents in matches. Each Bigfoot has unique properties and abilities that affect gameplay.

## Data Model


prisma
model Bigfoot {
  id              Int     @id @default(autoincrement())
  name            String  @unique
  class           String
  level           Int
  primaryAbility  String
  secondaryAbility String?
  hp              Int
  attack          Int
  defense         Int
  luck            Int
}


## Bigfoot Properties

### Name
The unique identifier for each Bigfoot character (e.g., Sasquatch, Skunk Ape, Yowie, Yeti, Orang Mawas).

### Class
Bigfoots are categorized into three classes:
- Dwarf
- Squatch
- Giant

### Level
The player level required to unlock and use the Bigfoot character.

### Primary Ability
The main unique ability of the Bigfoot character, which is always available.

### Secondary Ability
An additional ability that becomes available at higher levels.

### Stats
Each Bigfoot has four main stats that affect gameplay:

1. **HP (Health Points)**:
   - Dwarf: Low
   - Squatch: Medium
   - Giant: High

2. **Attack**:
   - Dwarf: Low
   - Squatch: Medium
   - Giant: High

3. **Defense**:
   - Dwarf: High
   - Squatch: Medium
   - Giant: Low

4. **Luck**:
   - Dwarf: High
   - Squatch: Medium
   - Giant: Low

## Gameplay Impact

- **HP**: Determines how much damage a Bigfoot can take before losing the match.
- **Attack**: Influences the damage dealt when using attack actions.
- **Defense**: Affects the amount of damage absorbed or mitigated.
- **Luck**: Influences the amount of Gold and XP earned during matches.

## Unlocking Bigfoots

Players start with Sasquatch at Level 1. As they progress and level up, they unlock more powerful Bigfoot characters with unique abilities.

## Implementation Plan

1. Create the Bigfoot model in the Prisma schema
2. Implement API routes for Bigfoot data:
   - GET /api/bigfoots: Retrieve all Bigfoot characters
   - GET /api/bigfoots/:id: Retrieve a specific Bigfoot character
3. Create a BigfootCard component to display Bigfoot information
4. Implement BigfootSelection component for the main menu
5. Add logic to unlock Bigfoots based on player level
6. Integrate Bigfoot selection with the match system
7. Implement Bigfoot abilities in the game logic

## Components

- BigfootCard: Displays individual Bigfoot information
- BigfootSelection: Allows players to choose their Bigfoot for matches
- BigfootDetails: Shows detailed information about a specific Bigfoot

## API Routes

- GET /api/bigfoots: Retrieve all Bigfoot characters
- GET /api/bigfoots/:id: Retrieve a specific Bigfoot character
- GET /api/player/bigfoots: Retrieve Bigfoots available to the current player

## State Management

- Store available Bigfoots in the Zustand store
- Track the currently selected Bigfoot in the player's game state

## Next Steps

1. Design and implement the visual representations of each Bigfoot character
2. Create a balancing system for Bigfoot abilities and stats
3. Implement a progression system for upgrading Bigfoot abilities
4. Design and implement special event Bigfoots or variants