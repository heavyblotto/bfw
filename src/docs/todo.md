---
title: Project Todo List
lastUpdated: 2023-04-20
status: In Progress
priority: High
---

## Development Workflow

## Current Focus
1. Complete Player Profile system
   - [x] Update Prisma Schema with PlayerProfile model
   - [x] Implement basic API routes for player profile data
   - [x] Create player-profile.ts API route
   - [x] Update player-profile.ts to create a default profile if one doesn't exist
   - [x] Implement basic PlayerProfileDisplay component
   - [x] Polish PlayerProfileDisplay with icons and improved layout
   - [x] Install and integrate react-icons package
   - [x] Create Zustand store for PlayerProfile
   - [x] Implement actions for updating PlayerProfile state
   - [x] Add PlayerProfile to Main Menu page
   - [ ] Enhance PlayerProfile component with more details
   - [ ] Implement profile editing functionality

2. Implement Bigfoot Character System
   - [ ] Create Bigfoot model in Prisma schema
   - [ ] Implement API routes for Bigfoot data
   - [ ] Create BigfootCard and BigfootSelection components
   - [ ] Integrate Bigfoot selection with player profile

3. Develop Core Gameplay Features
   - [ ] Implement player leveling system
     - [ ] Create PlayerLevel model in Prisma schema
     - [ ] Implement XP gain and level-up logic
     - [ ] Create LevelProgressDisplay component
   - [ ] Design and implement attack system
     - [ ] Define attack types and mechanics
     - [ ] Create Attack model in Prisma schema
     - [ ] Implement API routes for attacks
   - [ ] Develop game loop
     - [ ] Create mock game function to simulate battles
     - [ ] Implement turn-based logic
     - [ ] Integrate attacks, XP gain, and leveling into game loop

4. Enhance Main Menu and Game UI
   - [ ] Update Main Menu with Bigfoot selection
   - [ ] Create basic Game Board component
   - [ ] Implement UI for displaying active Bigfoot and opponent
   - [ ] Add attack selection interface

5. Implement Basic AI Opponent
   - [ ] Create simple AI logic for opponent moves
   - [ ] Integrate AI opponent into game loop

## Hit List
1. Create initial data files (YAML and Markdown). - in progress
2. Implement basic routing and navigation.
3. Develop core game components and logic using Zustand store. - In Progress
4. Implement API routes for data access and game state management.
5. Set up testing environment and write initial tests.
6. Optimize performance and implement security measures.
7. Deploy to Vercel and set up CI/CD pipeline.

## Next Steps
1. Polish and debug core gameplay features
2. Implement basic matchmaking system
3. Add more Bigfoot characters and attacks
4. Enhance AI difficulty levels

## Future Enhancements (Lower Priority)
- Implement inventory system
- Create achievement system
- Develop match history tracking
- Design and implement leaderboard
- Add statistics tracking and display

## Done
- Set up Next.js project with TypeScript.
- Implement basic project structure.
- Set up linting and formatting.
- Create initial data files (YAML and Markdown).
- Set up Zustand for state management and create initial game store.
- Implement splash page with responsive design.
- Create login and registration pages with forms.
- Set up basic routing between splash, login, and registration pages.
- Implement UI components using shadcn/ui.
- Create Layout component for consistent page structure.
- Set up release notes page and functionality.
- Implement pixel font styling for headings and important text.
- Create initial documentation (developer guide, design document, todo list).
- Set up image optimization using Next.js Image component.
- Set up authentication with NextAuth.js.
- Implement full authentication system including registration, login, account management, and protected routes.
- Integrate authentication with main menu and splash pages.
- Implement error handling and validation for authentication forms.
- Set up Vercel Postgres for user data storage and management.
- Configure environment variables for production security.
- Implement real-time email update functionality in the main menu
- Finalize layout and design for main menu page.