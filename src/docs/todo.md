---
title: Project Todo List
lastUpdated: 2023-04-20
status: In Progress
priority: High
---

## Development Workflow

## Current Focus
1. Implement Player Profile system
   - Update Prisma Schema with PlayerProfile model and related models
   - Implement API routes for player profile data
   - Create React components for player profile display and management
   - Set up state management for player profile
2. Implement Bigfoot Character System
3. Complete implementation of Main Menu page
   - Integrate player profile components
   - Implement remaining components (e.g., Bigfoot Selection, Match Selection)
   - Integrate with game state management

## Hit List
1. Create initial data files (YAML and Markdown). - in progress
2. Implement basic routing and navigation.
3. Develop core game components and logic using Zustand store. - In Progress
4. Implement API routes for data access and game state management.
5. Set up testing environment and write initial tests.
6. Optimize performance and implement security measures.
7. Deploy to Vercel and set up CI/CD pipeline.

## Next Steps
1. Implement API Routes:
   - [x] Create player-profile.ts API route
   - [x] Update player-profile.ts to create a default profile if one doesn't exist
2. Create React Components:
   - [x] Implement basic PlayerProfileDisplay component
   - [ ] Enhance PlayerProfileDisplay with XP bar
3. Set up State Management:
   - [ ] Create Zustand store for PlayerProfile
   - [ ] Implement actions for updating PlayerProfile state
4. Integrate Components:
   - [x] Add PlayerProfileDisplay to Main Menu page
5. Implement core game loop:
   - [ ] Create API route for updating player XP and gold
   - [ ] Implement mock game function to simulate XP and gold gain
   - [ ] Add "Play Game" button to main menu to test core loop
6. Implement Inventory System:
   - [ ] Create inventory.ts API route
   - [ ] Update PlayerProfileDisplay to show basic inventory
7. Implement Match Log:
   - [ ] Create match-log.ts API route
   - [ ] Add recent matches display to PlayerProfileDisplay

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