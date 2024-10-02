---
title: Project Todo List
lastUpdated: 2023-04-20
status: In Progress
priority: High
---

## Development Workflow

## Current Focus

1. Complete Bigfoot Character System
   - [x] Create Bigfoot model in types
   - [x] Implement initial Bigfoot data structure
   - [x] Create utility functions for Bigfoot data handling
   - [x] Update ability system to reflect new primary (passive) and secondary (card-triggered) behavior
   - [x] Complete src/data/attacks.ts
   - [x] Complete src/data/jokerEffects.ts
   - [x] Create more individual Bigfoot files in src/data/bigfoots/
   - [ ] Implement API routes for Bigfoot data
   - [ ] Create BigfootCard and BigfootSelection components
   - [ ] Integrate Bigfoot selection with player profile

2. Develop Core Gameplay Features
   - [ ] Implement player leveling system
     - [ ] Create PlayerLevel model in Prisma schema
     - [ ] Implement XP gain and level-up logic
     - [ ] Create LevelProgressDisplay component
   - [ ] Design and implement attack system
     - [x] Define attack types and mechanics
     - [ ] Implement API routes for attacks
   - [ ] Develop game loop
     - [ ] Create mock game function to simulate battles
     - [ ] Implement turn-based logic
     - [ ] Integrate attacks, abilities, and Joker effects into game loop

3. Enhance Arena and Game UI
   - [ ] Create GameState model to track the current state of the game
   - [ ] Implement turn-based system
   - [ ] Develop AI opponent with varying difficulty levels
   - [ ] Create card management system for shuffling, drawing, and managing decks
   - [ ] Implement scoring system for Gold, XP, and Points

4. Update and Refine Components
   - [ ] Modify BigfootCard, BigfootSelection, and BigfootDetails to use new data structure
   - [ ] Implement image display in BigfootCard and BigfootDetails using Next.js Image component

5. API and State Management
   - [ ] Create GET /api/bigfoots route
   - [ ] Create GET /api/bigfoots/:id route
   - [ ] Create GET /api/player/bigfoots route
   - [ ] Modify Zustand store to work with new Bigfoot data structure

6. Testing and Refinement
   - [ ] Write unit tests for utility functions and components
   - [ ] Perform integration testing

7. Image Handling
   - [ ] Create directories for Bigfoot images: `public/images/bigfoots/` and `public/images/bigfoots/avatars/`
   - [ ] Add Bigfoot character images to the appropriate directories
   - [ ] Update Bigfoot data files with correct image paths

8. Implement Attack Execution Logic
   - [ ] Create function to execute attacks based on card played and Bigfoot abilities
   - [ ] Implement damage calculation considering attack value and target's defense
   - [ ] Add status effect application (poison, stun, etc.) based on attack properties
   - [ ] Implement healing and shielding mechanics
   - [ ] Create function to apply and resolve ongoing effects (poison damage, heal over time, etc.)

9. Ability System Refinement
   - [ ] Implement passive ability activation for primary abilities
   - [ ] Create trigger system for secondary abilities based on card plays
   - [ ] Integrate ability effects with attack execution and game state

10. Joker Effect Implementation
    - [ ] Define Joker effect data structure
    - [ ] Implement Joker effect activation logic
    - [ ] Integrate Joker effects with game scoring system (Gold and XP multipliers)

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