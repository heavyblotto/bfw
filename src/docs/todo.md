---
title: Project Todo List
lastUpdated: 2023-04-20
status: In Progress
priority: High
---

## Development Workflow

## Current Focus
1. Implement and Style Main Menu page

## Menu (Main Menu) Page
- **Components**:
  - Player **Profile** display
    - **Username**
    - **Bigfoot avatar** for selected Bigfoot (Sasquatch at Level 1)
    - **Level**
    - **XP display**
    - **Gold display**
    - **Inventory display**
    - **Match Log**: Shows the Player's match history
    - **Trending Stats**: Shows the top stats for the Player's Bigfoot character
    - **Achievements**: Shows the Player's achievements
    - **Account**: Button to manage the Player's Profile and Account Settings
  - **Bigfoot Selection**: Based on the Player's Level, they can choose from available Bigfoot characters to represent them in the game.
    - The selected Bigfoot character is the **Player Bigfoot**.
    - At **Level 1**, the Player’s Bigfoot is **Sasquatch**.
    - Higher levels unlock additional Bigfoot characters (e.g., Yeti, Skunk Ape, etc.).
  - **Match Selection**: Select from available Opponents to play, based on Player's level. Matches take place in the **Arena**.
    - Matches are displayed in a linear map (see below).
    - Matches against locked Bigfoot characters require the Player to spend Gold to play.
    - When the Player selects a Match, the **Arena** page is displayed.
  - **Match Log**: Button to view the Player's Match history.
  - **Shop**: Button to access the Shop page.
  - **Game Settings**: Button to access the Game Settings page.
  - **Logout**: Button to log out of the game.


## Hit List
1. Create initial data files (YAML and Markdown). - in progress
2. Implement basic routing and navigation.
3. Develop core game components and logic using Zustand store. - In Progress
4. Implement API routes for data access and game state management.
5. Set up testing environment and write initial tests.
6. Optimize performance and implement security measures.
7. Deploy to Vercel and set up CI/CD pipeline.

## Next Steps
1. Create detailed component hierarchy.
2. Design database schema (if needed).
3. Create API endpoint specifications.
4. Develop user stories and game flow diagrams.
5. Set up development environment with all necessary tools and libraries.
6. Expand Zustand store to cover all necessary game states and actions.

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
- Set up the project structure and development environment. in progress
