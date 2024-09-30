# Player Profile Design

## Database Schema

### PlayerProfile

id: unique identifier for the player profile.
userId: unique identifier for the user.
level: level of the player profile.
xp: experience points for the player profile.
gold: gold for the player profile.
points: points for the player profile.
selectedBigfoot: selected bigfoot for the player profile.
inventory: inventory for the player profile.
achievements: achievements for the player profile.
matchHistory: match history for the player profile.

Here's the schema:

```prisma
model PlayerProfile {
  id              Int           @id @default(autoincrement())
  userId          Int           @unique
  user            User          @relation(fields: [userId], references: [id])
  level           Int           @default(1)
  xp              Int           @default(0)
  gold            Int           @default(0)
  points          Int           @default(0)
  selectedBigfoot String        @default("Sasquatch")
  unlockedBigfoots String[]     @default(["Sasquatch"])
  inventory       Inventory?
  matchLog        MatchLog[]
  achievements    Achievement[]
  statistics      Statistics?
}
```

This schema design covers the following aspects of the Player Profile:

1. Extended User model with a one-to-one relation to PlayerProfile
2. PlayerProfile model containing level, XP, gold, and selected Bigfoot
3. Inventory model for storing player items
4. MatchLog model for recording match history
5. Achievement model for tracking player achievements

Related data models:

- Inventory
- Achievement
- MatchLog
- Statistics
- Points
- SelectedBigfoot
- UnlockedBigfoots

## Components

To implement the Player Profile feature, we'll need to create the following components:

1. PlayerProfileDisplay: Main component to show player information
2. InventoryDisplay: Component to display player's inventory
3. MatchLogDisplay: Component to show recent matches
4. AchievementsDisplay: Component to display player achievements
5. BigfootSelection: Component for selecting and displaying the current Bigfoot
6. PointsDisplay: Component to show current points and points history
7. BigfootSelectionDisplay: Component for selecting and displaying available Bigfoot characters
8. StatisticsDisplay: Component for displaying player statistics

## API Routes

We'll need to create the following API routes to handle Player Profile data:

1. `/api/player-profile`: GET and UPDATE player profile information
2. `/api/inventory`: GET and UPDATE inventory items
3. `/api/match-log`: GET match history and ADD new match results
4. `/api/achievements`: GET achievements and UNLOCK new achievements
5. `/api/points`: GET points history, UPDATE points, and PROCESS points decay
6. `/api/bigfoot`: GET all Bigfoot characters, GET a specific Bigfoot character
7. `/api/player-profile/bigfoot`: GET unlocked Bigfoots, UPDATE selected Bigfoot
8. `/api/statistics`: GET player statistics

## State Management

We'll use Zustand to manage the Player Profile state on the client-side. This will include:

1. Current player profile information
2. Inventory items
3. Recent match history
4. Achievements

## Next Steps

1. Update the Prisma schema with the new models
2. Create migrations and apply them to the database
3. Implement API routes for Player Profile data
4. Create React components for displaying Player Profile information
5. Integrate Player Profile components into the Main Menu page
6. Implement Zustand store for managing Player Profile state
7. Add functionality for updating player information, such as selecting a new Bigfoot

8. Implement Bigfoot character system:
   - [ ] Create Bigfoot model in Prisma schema
   - [ ] Update PlayerProfile model to include unlockedBigfoots field
   - [ ] Create migration for the updated schema
   - [ ] Implement API routes for Bigfoot data and selection
   - [ ] Create BigfootSelectionDisplay component
   - [ ] Update PlayerProfileDisplay to show selected Bigfoot
   - [ ] Implement logic for unlocking new Bigfoot characters based on player level

9. Implement Statistics system:
   - [ ] Create Statistics model in Prisma schema
   - [ ] Update PlayerProfile model to include relation to Statistics
   - [ ] Create migration for the updated schema
   - [ ] Implement API route for Statistics data
   - [ ] Create StatisticsDisplay component
   - [ ] Update PlayerProfileDisplay to show key statistics
   - [ ] Implement logic for updating statistics after each game

