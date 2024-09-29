# Authentication System Design

## Overview
The authentication system for our game uses NextAuth.js, Zustand for state management, Prisma ORM, and Vercel Postgres for storage. It allows users to register, login, update their account, and delete their account.

## Features
- User registration with username and password (email optional)
- User login
- Update email and password
- Delete account
- Protected game access

## Technology Stack
- NextAuth.js for authentication
- Zustand for client-side state management
- Prisma ORM for database access
- Vercel Postgres for data storage
- Next.js API routes for backend functionality

## Database Schema
```prisma
model User {
id Int @id @default(autoincrement())
username String @unique
password String
email String? @unique
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
}
```

## API Routes
- `/api/auth/[...nextauth]`: NextAuth.js configuration
- `/api/auth/register`: User registration
- `/api/auth/update`: Update user information
- `/api/auth/delete`: Delete user account

## Components
- `SignIn`: User login form
- `Register`: User registration form

## State Management
Zustand is used to manage the authentication state on the client-side, syncing with NextAuth.js session.

## Protected Routes
Protected routes are implemented to ensure that only authenticated users can access certain parts of the game. This is achieved using Next.js middleware and NextAuth.js session management.

## Security Considerations
- Passwords are hashed using bcrypt before storage
- CSRF protection is handled by NextAuth.js
- API routes are protected against unauthorized access
- Prisma provides type-safe database access, reducing the risk of SQL injection

## Integration with Game Flow
1. Users start at the splash page (index.tsx) where they can choose to register or login.
2. Upon successful authentication, users are redirected to the main menu (main-menu.tsx).
3. The game state, including user progress and preferences, is associated with the authenticated user's account.

## Future Improvements
- Implement email verification for account recovery
- Add social login options (e.g., Google, Facebook)
- Implement rate limiting for API routes to prevent abuse
- Add two-factor authentication for enhanced security

## Testing
(Note: Testing framework not yet implemented. To be added in future iterations.)

## Deployment
The authentication system is deployed as part of the overall application on Vercel, utilizing Vercel Postgres for data storage.

## Implementation Todo

1. Set up NextAuth.js
   - ✅ Install necessary dependencies (nextauth, @prisma/client)
   - ✅ Create NextAuth configuration file
   - ✅ Set up environment variables for NextAuth

2. Create Prisma schema for User model
   - ✅ Update schema.prisma file with User model
   - ✅ Set up Vercel Postgres database
   - ✅ Configure DATABASE_URL environment variable
   - ✅ Run Prisma migration

3. Implement API routes
   - ✅ Create /api/auth/[...nextauth].ts for NextAuth
   - ✅ Create /api/auth/register.ts for user registration
   - ✅ Create /api/auth/update.ts for updating user information
   - ✅ Create /api/auth/delete.ts for deleting user account

4. Create React components
   - ✅ Implement SignIn component
   - ✅ Implement Register component
   - ✅ Create forms using shadcn/ui components  

5. Set up Zustand store for authentication state
   - ✅ Create src/stores/authStore.ts
   - ✅ Implement actions for login, logout, and user state management

6. Implement protected routes
   - ✅ Create middleware for route protection
   - ✅ Update relevant pages to use authentication state

7. Integrate authentication with existing pages
   - ✅ Update main menu page to use authentication state and implement logout
   - Update splash page to show login/register buttons or user info
   - Create a user profile page

8. Implement error handling and validation
   - Add form validation to SignIn and Register components
   - Implement error messages for failed authentication attempts

9. Test authentication flow
   - Manual testing of registration, login, update, and delete processes
   - Write unit tests for authentication components and API routes

10. Implement security measures
    - Set up CSRF protection
    - Implement rate limiting for API routes
    - Ensure secure password hashing with bcrypt

11. Update documentation
    - Update developer guide with authentication implementation details
    - Update technical design document if necessary