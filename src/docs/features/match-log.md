# Match Log System Design

## Overview
The Match Log system records and displays the history of matches played by each player. It provides valuable insights into a player's performance and progression over time.

## Data Model

```prisma
model MatchLog {
  id              Int           @id @default(autoincrement())
  playerProfileId Int
  playerProfile   PlayerProfile @relation(fields: [playerProfileId], references: [id])
  opponent        String
  result          String
  goldEarned      Int
  xpEarned        Int
  pointsEarned    Int
  cardsCollected  Int
  attacksMade     Int
  roundsWon       Int
  roundsLost      Int
  warScenarios    Int
  duration        Int
  date            DateTime      @default(now())
}
```

The Match Log system will allow players to review their game history, track their progress, and analyze their performance over time. It will be an essential component of the player profile, providing valuable insights and contributing to the overall game experience.

Some key points to consider during implementation:

1. **Performance optimization**: As the number of matches grows, ensure that the system can handle large amounts of data efficiently.

2. **Data visualization**: Consider adding charts or graphs to help players visualize their progress and performance trends.

3. **Integration with achievements**: Use match log data to trigger achievements or track progress towards long-term goals.

4. **Privacy considerations**: Ensure that players have control over what match information is visible to other players.

5. **Exportability**: Consider allowing players to export their match history for personal analysis or sharing.

By implementing this Match Log system, you'll provide players with a powerful tool to track their progress and engagement with the game, potentially increasing player retention and satisfaction.

## Match Log Page

The Match Log page shows the following information:
  - **Opponent**: The Opponent Bigfoot character.
  - **Result**: The result of the match.
  - **Gold Earned**: The amount of Gold earned in the match.
  - **XP Earned**: The amount of XP earned in the match.
  - **Date**: The date the match was played.
  - **Time**: The time the match was played.
  - **Duration**: The duration of the match.
  - **Cards**: The number of cards collected in the match.
  - **Attacks**: The number of attacks made in the match.
  - **Wins**: The number of wins in the match.
  - **Losses**: The number of losses in the match.
  - **Purpose**: The Match Log page shows the Player's match history.