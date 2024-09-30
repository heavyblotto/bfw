# Player Levels System Design

## Overview
The Player Levels system is a core progression mechanic in Bigfoot War, allowing players to unlock new content, abilities, and Bigfoot characters as they gain experience and advance through the game.

## Data Model

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

model BigfootCharacter {
  id              Int              @id @default(autoincrement())
  name            String
  unlockLevel     Int
  primaryAbility  String
  secondaryAbility String?
  playerLevelId   Int
  playerLevel     PlayerLevel      @relation(fields: [playerLevelId], references: [id])
}

model XPGain {
  id              Int              @id @default(autoincrement())
  playerLevelId   Int
  playerLevel     PlayerLevel      @relation(fields: [playerLevelId], references: [id])
  amount          Int
  source          String
  timestamp       DateTime         @default(now())
}

## Leveling System

- Players start at **Level 1** with access to **Sasquatch** as their Player Bigfoot.
- An XP bar shows the Player's progress towards the next level.
- Levels are displayed on a linear map, with waypoints for each Level.
- Players must defeat all Opponent Bigfoot characters at a Level to unlock the next Level.
- Winning matches and achievements unlock new Player Levels, granting access to new Matches and Player Bigfoot Characters.

## XP System

Players gain XP through various gameplay actions:

- **Win a Match**: Large XP gain
- **Defeat Opponent Bigfoot**: XP for defeating a specific Opponent Bigfoot
- **Win a Round**: Small XP gain for each round won
- **Collect Cards**: Minor XP gain for collecting cards
- **Attack Opponent**: XP gain for successful attacks (more than collecting cards)
- **Achievements**: XP rewards for completing milestones and achievements

## Bigfoot Character Progression

As players level up, they unlock new Bigfoot characters:

- **Level 1**: Sasquatch (default Bigfoot)
- **Level 2**: Skunk Ape
- **Level 3**: Yowie
- **Level 4**: Yeti
- **Level 5**: Orang Mawas
- Higher levels: Additional regional and mythical Bigfoots

## Bigfoot Ability Progression

Each Bigfoot character has abilities that scale with Player Level:

1. **Primary Ability**: Unique to each Bigfoot, scales as they progress
2. **Secondary Ability**: Unlocked at higher levels

Example progression:
- **Level 1 (Sasquatch)**: Basic abilities tied to suits
- **Level 2 (Skunk Ape)**: Special abilities for each suit unlock
- **Level 3 (Yowie)**: Introduction of defensive tactics
- **Level 4 (Yeti)**: New abilities related to ice and freezing mechanics
- **Level 5+ Bigfoots**: Complex abilities combining attacks, defense, and utility

## Match Selection

- For each level, there are Matches available for each unlocked Opponent Bigfoot character.
- Players advance along the map by winning Matches within each Level.
- Waypoints contain Matches for available Bigfoot character opponents at that Level.
- Players can repeat Matches to earn Gold and XP.
- Matches against locked Opponent Bigfoot characters require Gold to play.

## Implementation Plan

1. Create a PlayerLevel model in the Prisma schema
2. Implement API routes for Player Level data:
   - GET /api/player-level/:playerProfileId: Retrieve current level and XP
   - POST /api/player-level/add-xp: Add XP and handle level-ups
3. Create a LevelProgressDisplay component to show XP bar and current level
4. Implement logic to track XP gain during gameplay
5. Create a level-up notification system
6. Integrate level-based unlocks for Bigfoot characters and abilities

## Components

- LevelProgressDisplay: Shows current level and XP progress
- LevelUpNotification: Displays a pop-up when a new level is reached
- UnlockedContentDisplay: Shows newly unlocked Bigfoots and abilities

## State Management

- Store current player level and XP in the Zustand store
- Update level and XP in real-time during gameplay

## Considerations

- Balance XP gain to ensure smooth progression without feeling grindy
- Implement catch-up mechanics for new players to compete with veterans
- Consider prestige systems for long-term engagement after reaching max level
- Implement proper error handling for XP updates and level-ups
- Plan for future scalability, such as increasing the level cap or adding new Bigfoot characters

This Player Levels system will provide a clear sense of progression and achievement, encouraging players to engage with the game regularly and strive for higher levels to unlock new content and abilities.
