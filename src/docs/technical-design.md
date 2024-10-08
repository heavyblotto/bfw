---
title: Next.js Game Project: Technical Design Document
lastUpdated: 2023-04-22
version: 0.3.0
---

# Next.js Game Project: Technical Design Document

## Project Overview
This document outlines the current design and architecture decisions for our single-player, turn-based game developed using Next.js. The game features different Bigfoot characters, levels, and game mechanics, with a focus on maintainability, scalability, and performance.

## Technology Stack

### Core Technologies
- **Framework**: Next.js
- **Language**: TypeScript
- **Hosting/Deployment**: Vercel
- **Authentication**: NextAuth.js
- **State Management**: Zustand
- **Data Storage**: YAML and Markdown with front matter, Vercel Postgres
- **Testing**: Jest with React Testing Library (to be implemented)

### Additional Tools and Libraries
- Linting: ESLint
- Formatting: Prettier
- UI Components: shadcn/ui
- API Routes: Next.js built-in API routes
- Image Optimization: Next.js Image component
- SEO: Next.js Head component and dynamic metadata
- ORM: Prisma (for Vercel Postgres)
- Fonts: next/font

## Data Management
- Character data, level descriptions, and game mechanics stored in YAML files.
- Longer descriptions and narratives stored in Markdown files with YAML front matter.
- Vercel Postgres used for storing dynamic game data, user information, and other structured data that requires frequent updates or complex queries.
- Prisma ORM used as an interface for database operations and schema management with Vercel Postgres.
- Data accessed and served through Next.js API routes.
- File-based data (YAML and Markdown) used for static content and configuration.
- Vercel Postgres used for:
  - User profiles and authentication data
  - Game state and progress
  - Leaderboards and statistics
  - Any other data requiring relational database capabilities

## Routing and Navigation
- Page-based routing using Next.js file-system based routing.
- Dynamic routes for game levels and character pages.
- Programmatic navigation using Next.js `useRouter` hook.
- Link component from `next/link` for client-side navigation.

## State Management
- Zustand for global state management.
- React hooks for local component state.

## Authentication
- NextAuth.js for user authentication, fully implemented and working in production.
- Credentials provider configured for username/password authentication.
- Protected routes and API endpoints to ensure secure access.
- User data stored in Vercel Postgres, accessed via Prisma ORM.
- Passwords hashed using bcrypt for security.
- Environment variables (NEXTAUTH_SECRET and NEXTAUTH_URL) properly configured in Vercel for production security.
- Zustand used for client-side authentication state management.

## Rendering Strategies
- Mix of Client-Side Rendering (CSR) and Server-Side Rendering (SSR).
- CSR for dynamic game components and authenticated user interactions.
- SSR for initial game state, static content, and SEO-critical pages.
- Protected routes implemented using Next.js middleware and NextAuth.js session management.

## API Design
- RESTful API endpoints using Next.js API routes.
- Authentication-related endpoints:
  - /api/auth/[...nextauth]: NextAuth.js configuration
  - /api/auth/register: User registration
  - /api/auth/update: Update user information
  - /api/auth/delete: Delete user account
- Player profile endpoints:
  - GET /api/player-profile: Fetch player profile
  - PUT /api/player-profile: Update player profile
- Planned endpoints:
  - /api/bigfoots: Bigfoot character data
  - /api/player-level: Player leveling system
  - /api/attacks: Attack system

## Data Models
- User: Stores user authentication information
- PlayerProfile: Stores player-specific data (level, XP, gold)
- Planned models:
  - Bigfoot: Represents Bigfoot characters
  - PlayerLevel: Tracks player progression
  - Attack: Defines attack types and mechanics

## State Management
- Zustand for global state management
- PlayerProfileStore implemented for managing player profile data
- Planned stores:
  - BigfootStore: For managing Bigfoot character data
  - GameStore: For managing game state during gameplay

## UI Components
- PlayerProfileDisplay: Shows player information
- Planned components:
  - BigfootCard and BigfootSelection: For Bigfoot character system
  - LevelProgressDisplay: For player leveling system
  - GameBoard: For core gameplay UI

## Game Logic
- Basic player profile system implemented
- Planned implementations:
  - Turn-based game loop
  - Attack system
  - AI opponent logic
  - XP gain and leveling system

## Testing Strategy
- Jest with React Testing Library planned for unit and integration testing
- API route testing to be implemented

## Deployment
- Vercel for hosting and deployment
- Continuous deployment set up with GitHub integration

## Performance Optimization
- Next.js Image component for image optimization
- Code splitting to be implemented for faster initial load times

## UI Components and Styling
- shadcn/ui for reusable UI components.
- Tailwind CSS for custom styling and responsive design.
- Custom pixel font (Press Start 2P) for headings and important text.
- Consistent color palette and design system as defined in the style guide.

## Testing Strategy - to be implemented
- Jest for unit and integration testing.
- React Testing Library for component testing.
- Consider axe-core for accessibility testing.

## Deployment and CI/CD
- Vercel for hosting and automatic deployments.
  - Integrated with our GitHub repository for continuous deployment.
  - Automatic deployments triggered on pushes to the main branch.
  - Preview deployments for pull requests.
- GitHub Actions for additional CI/CD processes (if needed in the future).

## Security Considerations
- CSRF protection.
- Content Security Policy (CSP).
- Secure headers.
- API rate limiting.

## Implemented Features
- Splash page with responsive design and game introduction.
- Release notes page with dynamic content loading from Markdown files.
- Basic routing between splash, login, and registration pages.
- Pixel font implementation for consistent typography.
- Image optimization for background and logo images.
- Full authentication system including registration, login, account management, and protected routes.
- Integration with Vercel Postgres for user data storage and management.
- Zustand store implementation for client-side authentication state management.
- Secure password hashing using bcrypt.
- Environment variable configuration for production security.
- Basic routing between splash, login, registration, and main menu pages.
- Pixel font implementation for consistent typography.
- Image optimization for background and logo images.

## Future Considerations
- WebSocket support for real-time features.
- Progressive Web App (PWA) capabilities.
- Internationalization (i18n) support.
- Advanced state management with Zustand.
- Implement remaining game pages and features as outlined in the game design document.

This design document serves as a living document and will be updated as the project evolves and new decisions are made.