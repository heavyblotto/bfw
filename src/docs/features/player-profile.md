# Player Profile

## Table of Contents
- [Overview](#overview)
- [Data Models](#data-models)
- [Features](#features)
- [Architecture](#architecture)
- [Component Integration](#component-integration)
- [Implementation Plan](#implementation-plan)
- [Future Enhancements](#future-enhancements)

## Overview
The Player Profile feature manages and displays user-specific information, including level, experience points, gold, selected Bigfoot, inventory, achievements, and match history.

See also:
- [Game Design](game-design.md)

## Data Models

See the [schema.prisma](../../../prisma/schema.prisma) file for more details.

### User

- id: unique identifier for the user
- username: unique username for the user
- password: hashed password for the user
- email: unique email address for the user (optional)
- createdAt: timestamp of user creation
- updatedAt: timestamp of last user update
- playerProfile: relation to the PlayerProfile model

### PlayerProfile

- id: unique identifier for the player profile
- userId: unique identifier for the associated user
- user: relation to the User model
- level: level of the player profile
- xp: experience points for the player profile
- gold: gold for the player profile
- points: points for the player profile
- selectedBigfoot: selected bigfoot for the player profile
- unlockedBigfoots: array of unlocked Bigfoot characters
- inventory: inventory for the player profile
- matchLog: match history for the player profile
- achievements: achievements for the player profile
- statistics: statistics for the player profile
- aiDifficulty: AI difficulty setting for the player

### Schema

```prisma
model User {
  id            Int           @id @default(autoincrement())
  username      String        @unique
  password      String
  email         String?       @unique
  createdAt     DateTime      @default(now())
  updatedAt     DateTime      @updatedAt
  playerProfile PlayerProfile?
}

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
  // inventory       Inventory?
  // matchLog        MatchLog[]
  // achievements    Achievement[]
  // statistics      Statistics?
  aiDifficulty    String        @default("Medium")
}
```

Related data models:
- User
- Inventory
- MatchLog
- Achievement
- Statistics

## Features

1. Player Information Display
   - Show player's level, XP, gold, and points

2. Bigfoot Selection
   - Display and select from unlocked Bigfoot characters

3. Inventory Management
   - View and manage player's inventory items

4. Match History
   - Display recent match results and statistics

5. Achievements Tracking
   - Show unlocked achievements and progress towards new ones

6. Statistics Display
   - Present various player statistics

6. Game Settings Management
   - Manage AI difficulty setting

## Architecture

### Technology Stack
- Next.js: React framework for server-side rendering and API routes
- Prisma: ORM for database management
- TypeScript: Typed superset of JavaScript
- Zustand: State management library
- Tailwind CSS: Utility-first CSS framework

### Architecture Diagram

```plaintext
{{ Insert architecture diagram here }}
```

### Data Flow of Player Profile
1. Client requests player profile data
2. Next.js API route handles the request
3. Prisma queries the database for player profile information
4. Data is returned to the client and stored in Zustand state
5. React components render the player profile information

### How Player Profile Works in the Game
1. User Authentication:
   - Player logs in or creates an account
   - PlayerProfile is created or retrieved

2. Profile Updates:
   - Game events trigger updates to PlayerProfile (e.g., gaining XP, earning gold)
   - Updates are sent to the server and stored in the database

3. Profile Display:
   - PlayerProfile data is fetched and displayed in various game components
   - Players can view and interact with their profile information

### API Routes
- **Get Player Profile**: 
  - **Route**: `GET /api/player-profile`
  - **File**: `src/pages/api/player-profile.ts`
  - **Functionality**: Retrieve player profile information

- **Update Player Profile**: 
  - **Route**: `PUT /api/player-profile`
  - **File**: `src/pages/api/player-profile.ts`
  - **Functionality**: Update player profile information

- **Get Inventory**: 
  - **Route**: `GET /api/inventory`
  - **File**: `src/pages/api/inventory.ts`
  - **Functionality**: Retrieve player's inventory items

- **Get Game Settings**: 
  - **Route**: `GET /api/settings`
  - **File**: `src/pages/api/settings.ts`
  - **Functionality**: Retrieve game settings for the player

- **Update Game Settings**: 
  - **Route**: `PUT /api/settings`
  - **File**: `src/pages/api/settings.ts`
  - **Functionality**: Update game settings for the player

### Components
- **PlayerProfileDisplay**: Main component to show player information
  - **File**: `src/components/PlayerProfileDisplay.tsx`

- **InventoryDisplay**: Component to display player's inventory
  - **File**: `src/components/InventoryDisplay.tsx`

- **MatchLogDisplay**: Component to show recent matches
  - **File**: `src/components/MatchLogDisplay.tsx`

- **AchievementsDisplay**: Component to display player achievements
  - **File**: `src/components/AchievementsDisplay.tsx`

- **GameSettingsDisplay**: Component to show current game settings
  - **File**: `src/components/GameSettingsDisplay.tsx`

- **GameSettingsForm**: Component to update game settings
  - **File**: `src/components/GameSettingsForm.tsx`

### State Management
We'll use Zustand to manage the Player Profile state on the client-side. This will include current player profile information, inventory items, recent match history, and achievements.

### Security Considerations
- Implement API rate limiting to prevent abuse
- Ensure proper authentication and authorization for all player profile operations
- Validate and sanitize all user inputs
- Use HTTPS for all API communications

### Integration with Game Flow
1. PlayerProfile is created upon user registration
2. PlayerProfile is updated after each game session
3. PlayerProfile information is displayed in the main menu and other relevant game screens

## Component Integration

### PlayerProfileDisplay
- **File**: `src/components/PlayerProfileDisplay.tsx`
- **Usage**: 
  - `src/pages/main-menu.tsx`
  - `src/pages/profile.tsx`

### InventoryDisplay
- **File**: `src/components/InventoryDisplay.tsx`
- **Usage**: 
  - `src/pages/inventory.tsx`

### MatchLogDisplay
- **File**: `src/components/MatchLogDisplay.tsx`
- **Usage**: 
  - `src/pages/match-history.tsx`

### PlayerProfileStore
- **File**: `src/stores/playerProfileStore.ts`
- **Usage**: 
  - `src/pages/main-menu.tsx`
  - `src/components/PlayerProfileDisplay.tsx`
  - `src/components/InventoryDisplay.tsx`

### API Routes
- **Get Player Profile**: 
  - **File**: `src/pages/api/player-profile.ts`
  - **Usage**: 
    - `src/components/PlayerProfileDisplay.tsx`

- **Update Player Profile**: 
  - **File**: `src/pages/api/player-profile.ts`
  - **Usage**: 
    - `src/components/BigfootSelection.tsx`

### Testing
Implement unit tests for components and integration tests for API routes using Jest and React Testing Library.

### Deployment
Ensure all player profile related components and API routes are properly bundled and deployed with the Next.js application on Vercel.

## Implementation Plan

### Current Status
- Basic PlayerProfile schema defined
- Game settings structure defined

### Plan

1. Update Prisma Schema:
   - [x] Create PlayerProfile model
   - [ ] Create related models (Inventory, MatchLog, Achievement, Statistics)
   - [ ] Update User model with relation to PlayerProfile

2. Implement API Routes:
   - [ ] Create player-profile.ts API route
   - [ ] Create inventory.ts API route
   - [ ] Create match-log.ts API route
   - [ ] Create achievements.ts API route

3. Create React Components:
   - [ ] Implement PlayerProfileDisplay component
   - [ ] Implement InventoryDisplay component
   - [ ] Implement MatchLogDisplay component
   - [ ] Implement AchievementsDisplay component
   - [ ] Implement BigfootSelection component

4. Set up State Management:
   - [ ] Create Zustand store for PlayerProfile
   - [ ] Implement actions for updating PlayerProfile state

5. Integrate Components:
   - [ ] Add PlayerProfileDisplay to Main Menu page
   - [ ] Create dedicated Profile page
   - [ ] Create Inventory page
   - [ ] Create Match History page

6. Implement Bigfoot Character System:
   - [ ] Create Bigfoot model in Prisma schema
   - [ ] Implement API routes for Bigfoot data and selection
   - [ ] Create BigfootSelectionDisplay component
   - [ ] Implement logic for unlocking new Bigfoot characters

7. Implement Statistics System:
   - [ ] Create Statistics model in Prisma schema
   - [ ] Implement API route for Statistics data
   - [ ] Create StatisticsDisplay component
   - [ ] Implement logic for updating statistics after each game

8. Implement Game Settings:
   - [ ] Update PlayerProfile model with aiDifficulty field
   - [ ] Create API routes for game settings
   - [ ] Implement GameSettingsDisplay and GameSettingsForm components
   - [ ] Integrate game settings with player profile management

## Future Enhancements
- Implement a leveling system with rewards
- Add customizable player avatars
- Introduce player titles based on achievements
- Create a friend system with profile sharing
- Implement leaderboards based on player statistics