# Gold Design

## Overview
The Gold system is a core economic mechanic in Bigfoot War, allowing players to earn and spend currency throughout their gameplay experience. Gold serves as a reward for various actions and can be used to unlock new content and enhance the player's gameplay options.

## Data Model

```prisma
model PlayerGold {
  id         Int     @id @default(autoincrement())
  playerProfileId Int  @unique
  playerProfile    PlayerProfile @relation(fields: [playerProfileId], references: [id])
  amount          Int    @default(0)
  lastUpdated      DateTime @updatedAt
}

model GoldTransaction {
  id             Int     @id @default(autoincrement())
  playerProfileId Int
  playerProfile    PlayerProfile @relation(fields: [playerProfileId], references: [id])
  amount           Int
  type             String // "EARN" or "SPEND"
  source           String
  timestamp        DateTime @default(now())
}


```
## Earning Gold

Players can earn Gold through various gameplay actions:

1. **Collecting Cards**: Earns more Gold than Attacks.
2. **Attacks**: Yield Gold based on the card's suit and value, but less than collecting cards.
3. **Knockout Victory**: Large Gold bonus (e.g., 100 Gold) for winning by knockout.
4. **Achievements**: Earn Gold for achieving milestones, like completing a certain number of games or winning a certain number of rounds.

## Using Gold

Gold can be used for:

1. **Purchasing items in the Shop**.
2. **Unlocking Matches against locked Opponent Bigfoot characters**.

## Special Effects

1. **Black Joker**: 
   - **Gold Multiplier**: Multiply the amount of Gold earned in the current match by a factor depending on the Bigfoot's abilities and current level.

## Implementation Plan

1. Create the PlayerGold and GoldTransaction models in the Prisma schema
2. Implement API routes for Gold data:
   - GET /api/gold/:playerProfileId: Retrieve current Gold amount
   - POST /api/gold/add: Add Gold to player's account
   - POST /api/gold/spend: Spend Gold from player's account
3. Create a GoldDisplay component to show current Gold amount
4. Implement logic to track Gold gains during gameplay
5. Create a GoldTransaction component to display recent Gold transactions
6. Implement the Shop system for spending Gold

## Components

- GoldDisplay: Shows current Gold amount
- GoldTransaction: Displays recent Gold transactions
- ShopItem: Represents an item that can be purchased with Gold

## API Routes

- GET /api/gold/:playerProfileId: Retrieve current Gold amount
- POST /api/gold/add: Add Gold to player's account
- POST /api/gold/spend: Spend Gold from player's account
- GET /api/gold/transactions/:playerProfileId: Retrieve recent Gold transactions

## State Management

- Store current Gold amount in the Zustand store
- Update Gold amount in real-time during gameplay

## Considerations

- Implement proper error handling for Gold transactions
- Consider implementing a daily Gold bonus to encourage regular play
- Balance Gold earnings and costs to maintain a healthy in-game economy
- Implement anti-cheat measures to prevent Gold exploitation
- Consider implementing a Gold gifting system between friends (with appropriate limitations)

This Gold system will provide players with a sense of progression and reward, while also offering strategic choices in how they spend their earned currency.