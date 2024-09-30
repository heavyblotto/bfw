# Main Menu Page

## Table of Contents
- [Overview](#overview)
- [Data Models](#data-models)
- [Features](#features)
- [Architecture](#architecture)
- [Component Integration](#component-integration)
- [Implementation Plan](#implementation-plan)
- [Future Enhancements](#future-enhancements)

## Overview
The main menu page serves as the central hub for players after logging in. It provides access to various game features, displays player information, and offers navigation to different sections of the game.

See also:
- [Game Design](game-design.md)

## Data Models

The page integrates various components with respective data models. The page itself has no data model for the menu screen, but the components do.

See the [schema.prisma](../../../prisma/schema.prisma) file for more details.

## Features

1. Current Bigfoot Display
   - Shows the player's currently selected Bigfoot character

2. Player Profile Section
   - Displays user information, level, and stats

3. Achievements Section
   - Showcases recent achievements and overall progress

4. Match History Section
   - Lists recent matches and their outcomes

5. Trending Stats Section
   - Displays current game statistics and trends

6. Leaderboard Section
   - Shows top players and the user's ranking

7. Settings Section
   - Displays current game settings
   - Provides a link to adjust game settings

8. Account Management Section
   - Provides options for account-related actions

## Architecture

### Technology Stack
- Next.js: For page rendering and routing
- React: For component structure and UI
- Tailwind CSS: For styling and responsive design
- Shadcn UI: For pre-built UI components
- Next-Auth: For session management and authentication

### Architecture Diagram

```plaintext
[User] -> [Next.js Server]
           |
           v
[Main Menu Page (React Components)]
  |
  +-- [Current Bigfoot Display]
  |
  +-- [Player Profile Section]
  |
  +-- [Achievements Section]
  |
  +-- [Match History Section]
  |
  +-- [Trending Stats Section]
  |
  +-- [Leaderboard Section]
  |
  +-- [Settings Section]
  |
  +-- [Account Management Section]
  |
  v
[Next-Auth] <-> [Database]
```

### Data Flow of Main Menu Page
1. User logs in and is redirected to the main menu page
2. Next.js server renders the page with initial data
3. React components fetch additional data as needed
4. User interacts with various sections, triggering state updates

### How Main Menu Page Works in the Game
1. Authentication Check:
   - Next-Auth verifies user session
   - If not authenticated, redirect to login page

2. Data Fetching:
   - Fetch user profile, achievements, match history, and game stats
   - Load current Bigfoot information

3. Rendering:
   - Display all sections with fetched data
   - Update real-time information (e.g., updated email results) periodically

### API Routes
- `/api/auth/[...nextauth].ts`: Handles authentication
- `/api/auth/update.ts`: Handles user email updates

### Components

See [Component Integration](#component-integration).

### State Management
Uses Next-Auth session for user authentication state and local React state for menu interactions

### Security Considerations
- Implement API rate limiting to prevent abuse
- Ensure all API routes are protected and require authentication
- Validate and sanitize user input on both client and server sides
- Use HTTPS for all communications

### Integration with Game Flow
1. Main menu serves as the starting point after login
2. Provides navigation to other game sections (Arena, Bigfoot Selection, etc.)
3. Updates in real-time to reflect changes in user stats and game state

## Component Integration

The main menu page (`src/pages/main-menu.tsx`) integrates various components to create a comprehensive user interface. Here's how the components are integrated:

1. CurrentBigfootDisplay: Embedded directly in the main menu page
2. PlayerProfileSection: Embedded directly in the main menu page
3. AchievementsSection: Embedded directly in the main menu page
4. MatchHistorySection: Embedded directly in the main menu page
5. TrendingStatsSection: Embedded directly in the main menu page
6. LeaderboardSection: Embedded directly in the main menu page
7. SettingsSection: Embedded directly in the main menu page
8. UpdateUserForm: Imported and used in the Account section of the main menu page

The page uses a combination of hardcoded dummy data and dynamic data from the session for demonstration purposes. In a production environment, these components would fetch data from the appropriate API endpoints.

### Testing
Implement unit tests for individual components and integration tests for the entire menu page functionality

### Deployment
Ensure compatibility with Vercel hosting for seamless deployment

## Implementation Plan

### Current Status
- Basic layout and design implemented
- Core components created and integrated
- Authentication integration completed
- Real-time email update functionality implemented

### Plan

1. Replace dummy data with real data:
   - [ ] Implement API routes for fetching player profile, achievements, match history, and game stats
   - [ ] Update components to use real data from API calls

2. Implement remaining interactive features:
   - [ ] Create GameSettingsDisplay component
   - [ ] Create GameSettingsForm component
   - [ ] Implement Settings page with GameSettingsForm
   - [ ] Update Settings section in main menu to use GameSettingsDisplay

3. Enhance state management:
   - [ ] Implement global state for user data using Zustand
   - [ ] Set up real-time updates for dynamic content

4. Improve error handling and loading states:
   - [ ] Add loading indicators for data fetching operations
   - [ ] Implement error handling for failed API calls

5. Optimize performance:
   - [ ] Implement code splitting for faster initial load
   - [ ] Optimize component re-renders

6. Enhance accessibility:
   - [ ] Add keyboard navigation support
   - [ ] Implement ARIA labels for all interactive elements

7. Implement testing:
   - [ ] Write unit tests for individual components
   - [ ] Create integration tests for the entire main menu page

## Future Enhancements
- Implement real-time data fetching for all sections
- Add animations for smoother transitions between sections
- Implement push notifications for important updates
- Add a news or announcements section
- Enhance personalization based on user preferences and play style
- Add more customizable settings (e.g., graphics quality, language preferences)
- Implement preset setting profiles for quick switching