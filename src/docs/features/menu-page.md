# Main Menu Page Design

## Overview
The main menu page serves as the central hub for players after logging in. It provides access to various game features, displays player information, and offers navigation to different sections of the game.

## Features
- Display current Bigfoot information
- Show player profile and stats
- Present recent achievements and match history
- Offer quick access to game modes and settings
- Display leaderboard information
- Provide account management options

## Technology Stack
- Next.js for page rendering
- React for component structure
- Tailwind CSS for styling
- Shadcn UI for UI components
- Next-Auth for session management

## Components
- Current Bigfoot display
- Player Profile section
- Achievements section
- Match History section
- Trending Stats section
- Leaderboard section
- Settings section
- Account management section

## State Management
- Uses Next-Auth session for user authentication state
- Local React state for menu interactions

## Protected Route
The main menu page is a protected route, accessible only to authenticated users.

## Authentication Integration
- The page checks for user authentication status using Next-Auth
- If the user is not authenticated, they are redirected to the login page
- User information (username, level, etc.) is displayed based on the authenticated user's data
- Logout functionality is implemented, allowing users to end their session

## Layout and Styling
- Responsive design using Tailwind CSS
- Dark theme with semi-transparent backgrounds
- Pixel font for game-like appearance
- Background image with overlay for atmospheric effect

## Navigation
- Links to various game sections (Arena, Bigfoot Selection, Inventory, Shop, etc.)
- Logout button to end the user's session

## Future Improvements
- Implement real-time data fetching for all sections
- Add animations for smoother transitions between sections
- Implement push notifications for important updates
- Add a news or announcements section

## Implementation Todo
1. ✅ Finalize layout and design
2. ✅ Implement remaining components (e.g., Bigfoot Selection, Match Selection)
3. ✅ Integrate with game state management
4. ✅ Implement data fetching for player stats and game information
5. ✅ Add error handling for failed data fetches
6. ✅ Optimize performance for smooth user experience
7. ✅ Implement real-time email update display
8. Implement accessibility features (keyboard navigation, ARIA labels)
9. Add unit and integration tests

## Real-time email update display
