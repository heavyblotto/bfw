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
  id        Int      @id @default(autoincrement())
  username  String   @unique
  password  String
  email     String?  @unique
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
The game page (`/game`) is protected and only accessible to authenticated users.

## Security Considerations
- Passwords are hashed using bcrypt before storage
- CSRF protection is handled by NextAuth.js
- API routes are protected against unauthorized access
- Prisma provides type-safe database access, reducing the risk of SQL injection

## Future Improvements
- Implement email verification for account recovery
- Add social login options (e.g., Google, Facebook)
- Implement rate limiting for API routes to prevent abuse
