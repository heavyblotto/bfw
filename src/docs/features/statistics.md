# Statistics System Design

## Overview
The Statistics system tracks various metrics of player performance and game history. This data is used to provide insights to players about their gameplay, contribute to achievements, and potentially influence matchmaking.

## Data Model

prisma
model Statistics {
  id                  Int           @id @default(autoincrement())
  playerProfileId     Int           @unique
  playerProfile       PlayerProfile @relation(fields: [playerProfileId], references: [id])
  totalGamesPlayed    Int           @default(0)
  totalWins           Int           @default(0)
  totalLosses         Int           @default(0)
  totalGoldEarned     Int           @default(0)
  totalXpEarned       Int           @default(0)
  totalPointsEarned   Int           @default(0)
  totalCardsCollected Int           @default(0)
  totalAttacksMade    Int           @default(0)
  totalRoundsWon      Int           @default(0)
  totalRoundsLost     Int           @default(0)
  totalWarScenarios   Int           @default(0)
  winRate             Float         @default(0)
  averageGameDuration Int           @default(0)
  favoriteOpponent    String?
  favoriteBigfoot     String?
  highestWinStreak    Int           @default(0)
  totalKnockoutVictories Int        @default(0)
}


## Statistics Tracked

1. Total Games Played
2. Total Wins
3. Total Losses
4. Total Gold Earned
5. Total XP Earned
6. Total Points Earned
7. Total Cards Collected
8. Total Attacks Made
9. Total Rounds Won
10. Total Rounds Lost
11. Total War Scenarios
12. Win Rate
13. Average Game Duration
14. Favorite Opponent
15. Favorite Bigfoot
16. Highest Win Streak
17. Total Knockout Victories
18. Total Points Decayed

## Implementation Plan

1. Create the Statistics model in the Prisma schema
2. Implement API routes for Statistics data:
   - GET /api/statistics/:playerProfileId: Retrieve statistics for a specific player
   - PUT /api/statistics/:playerProfileId: Update statistics for a specific player
3. Create a StatisticsDisplay component to show player statistics
4. Implement logic to update statistics after each game
5. Integrate statistics display into the Player Profile page
6. Add statistics-based achievements

## Components

- StatisticsDisplay: Shows an overview of player statistics
- DetailedStatisticsView: Provides a more in-depth look at player statistics

## API Routes

- GET /api/statistics/:playerProfileId: Retrieve statistics for a specific player
- PUT /api/statistics/:playerProfileId: Update statistics for a specific player

## State Management

- Store current player statistics in the Zustand store
- Update statistics in real-time as games are played

## Next Steps

1. Implement the Statistics model in the Prisma schema
2. Create migration for the updated schema
3. Develop API routes for retrieving and updating statistics
4. Create the StatisticsDisplay and DetailedStatisticsView components
5. Integrate statistics tracking into the game logic
6. Add statistics-based achievements
7. Implement a system for displaying player progress over time (e.g., graphs or charts)
8. Consider adding more advanced statistics (e.g., performance with specific Bigfoot characters)

## Considerations

- Ensure efficient updates to avoid performance issues during gameplay
- Consider caching frequently accessed statistics to reduce database load
- Implement proper error handling for statistics updates
- Plan for future scalability, such as adding new statistics or analyzing trends