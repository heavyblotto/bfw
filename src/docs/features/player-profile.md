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

### Components
- **PlayerProfile**: Main component to show player information
  - **File**: `src/components/PlayerProfile.tsx`

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

### PlayerProfile
- **File**: `src/components/PlayerProfile.tsx`
- **Usage**: 
  - `src/pages/main-menu.tsx`
  - `src/pages/profile.tsx`

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
   - [x] Update User model with relation to PlayerProfile

2. Implement API Routes:
   - [x] Create player-profile.ts API route

3. Create React Components:
   - [x] Implement PlayerProfile component

4. Set up State Management:
   - [x] Create Zustand store for PlayerProfile
   - [x] Implement actions for updating PlayerProfile state

5. Integrate Components:
   - [x] Add PlayerProfileto Main Menu page

## Future Enhancements
- Implement a leveling system with rewards
- Add customizable player avatars
- Introduce player titles based on achievements
- Create a friend system with profile sharing
- Implement leaderboards based on player statistics