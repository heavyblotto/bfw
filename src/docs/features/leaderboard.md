# Leaderboard System

## Overview
The Leaderboard System provides a competitive aspect to Bigfoot War, allowing players to compare their performance with others on various metrics.

## Data Models

```typescript
// src/data/models/leaderboard.ts
export interface LeaderboardEntry {
  id: number;
  playerProfileId: number;
  playerProfile: PlayerProfile;
  leaderboardType: string;
  rank: number;
  score: number;
  seasonId?: number;
  season?: Season;
  updatedAt: Date;
}

export interface Season {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  leaderboardEntries: LeaderboardEntry[];
}
```


## Types of Leaderboards

1. **Global Leaderboard**:
   - Ranks all players based on their total points.
   - Updated in real-time as players earn or lose points.
   - Displays the top 100 players.

2. **Friend Leaderboard**:
   - Shows the ranking of the player and their friends.
   - Encourages friendly competition and social interaction.

3. **Seasonal Leaderboard**:
   - Resets at the beginning of each season (e.g., monthly).
   - Provides a fresh start for competition regularly.
   - Offers special rewards for top performers at the end of each season.

4. **Bigfoot-specific Leaderboards**:
   - Separate leaderboards for each Bigfoot character.
   - Ranks players based on their performance with specific Bigfoots.

5. **Achievement Leaderboard**:
   - Ranks players based on the number and difficulty of achievements completed.

## Leaderboard Components

Each leaderboard entry typically includes:
- Player's rank
- Player's username
- Player's Bigfoot avatar
- Player's level
- Player's total points (or relevant metric for the specific leaderboard)
- Change in rank since last update (e.g., up or down arrows)

## Leaderboard Page

The Leaderboard page accessible from the Main Menu includes:
- Tabs to switch between different leaderboard types
- Search function to find specific players
- Filters (e.g., by region, level range)
- The player's current rank and nearby competitors
- Option to view detailed stats for each player on the leaderboard

## Leaderboard Updates

- Global and Friend Leaderboards update in real-time.
- Seasonal Leaderboards update daily to prevent constant fluctuations.
- Players receive notifications when they achieve a significant rank improvement.

## Leaderboard Rewards

1. **Seasonal Rewards**:
   - Top players on the Seasonal Leaderboard receive exclusive rewards.
   - Rewards may include special Bigfoot skins, titles, or in-game currency.

2. **Achievement Milestones**:
   - Players earn rewards for reaching certain ranks on the Global Leaderboard.
   - Milestones might be set at ranks like 1000, 500, 100, 50, 10, and 1.

3. **Bigfoot-specific Rewards**:
   - Top players on each Bigfoot-specific leaderboard receive character-specific rewards.

## Implementation Plan

1. Create the LeaderboardEntry and Season models in the Prisma schema
2. Implement API routes for Leaderboard data:
   - GET /api/leaderboards/:type: Retrieve leaderboard data for a specific type
   - GET /api/leaderboards/player/:playerProfileId: Retrieve a player's rankings across all leaderboards
3. Create LeaderboardDisplay component
4. Implement logic to update leaderboards after each match
5. Create a LeaderboardPage component for the full leaderboard view
6. Implement search and filter functionality for leaderboards

## Components

- LeaderboardDisplay: Shows a condensed view of a leaderboard (e.g., top 10 players)
- LeaderboardPage: Full page view of a leaderboard with search and filter options
- LeaderboardEntry: Individual entry in a leaderboard

## API Routes

- GET /api/leaderboards/:type: Retrieve leaderboard data for a specific type
- GET /api/leaderboards/player/:playerProfileId: Retrieve a player's rankings across all leaderboards
- POST /api/leaderboards/update: Update a player's score on a leaderboard

## State Management

- Store current player's rankings in the Zustand store
- Update leaderboard data in real-time during gameplay

## Considerations

- Implement caching for leaderboard data to reduce database load
- Consider implementing pagination for large leaderboards
- Ensure proper indexing on the database for efficient leaderboard queries
- Implement anti-cheat measures to prevent leaderboard exploitation
- Plan for scalability as the player base grows

The Leaderboard System adds a competitive element to Bigfoot War, encouraging players to improve their skills and engage with the game regularly. It also provides additional goals for players to strive for beyond individual match victories.