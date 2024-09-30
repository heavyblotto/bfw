# Account Management Feature

## Table of Contents
- [Overview](#overview)
- [Data Models](#data-models)
- [Notes](#notes)
- [Features](#features)
- [Real-time UI Update](#real-time-ui-update)
- [API Routes](#api-routes)
- [Components](#components)
- [Related Components and Files](#related-components-and-files)
- [Security Considerations](#security-considerations)

- [Current Status](#current-status)
- [Implementation Plan for User Update Functionality](#implementation-plan-for-user-update-functionality)
- [Future Enhancements](#future-enhancements)
- [Future Enhancements](#future-enhancements)
- [Implementation Plan](#implementation-plan)

## Overview
The Account Management feature allows players to create, manage, and customize their profiles in Bigfoot War. This system handles user authentication, account information, and game-related data associated with each player.

See also:
- [Game Design](game-design.md)

## Data Models

See the [schema.prisma](../../../prisma/schema.prisma) file for more details.

### User

- id: unique identifier for the user.
- username: unique username for the user.
- email: email address for the user.
- password: password for the user.
- createdAt: date and time when the user was created.
- updatedAt: date and time when the user was last updated.
- playerProfile: player profile for the user. (to be implemented in future)

### Schema

```prisma
model User {
  id          Int           @id @default(autoincrement())
  username    String        @unique
  email       String        @unique
  password    String
  createdAt   DateTime      @default(now())
  updatedAt   DateTime      @updatedAt
//  playerProfile PlayerProfile? to be implemented in future
}
```

Related data models:
- PlayerProfile

## Features

1. User Registration
   - Players can create an account with a unique username and email
   - Password hashing and security measures implemented

2. User Authentication
   - Secure login system using NextAuth.js
   - Password reset functionality

3. User Update
   - Players can update their email and password

4. User Deletion
   - Players can delete their account

## Architecture

### Technology Stack
- **NextAuth.js**: Handles user authentication and session management.
- **Zustand**: Manages client-side authentication state.
- **Prisma ORM**: Interfaces with the Vercel Postgres database.
- **Vercel Postgres**: Stores user data and other related information.
- **Next.js API Routes**: Implements backend functionality.

# Account Management Architecture Diagram

```plaintext
+------------------------------------------------------------+
|                       Client                               |
| +---------------------+   +-----------------------------+  |
| | Registration Form    |   | Login Form                  | |
| | src/components/      |   | src/components/SignIn.tsx   | |
| | Register.tsx         |   +---------------------------+   |
| +---------------------+                                  | |
| +---------------------+   +---------------------------+    |
| | UpdateUserForm       |   | Session Management (Zustand)| |
| | src/components/      |   | src/stores/authStore.ts     | |
| | UpdateUserForm.tsx   |   +---------------------------+   |
| +---------------------+                                    |
+------------------------------------------------------------+

                  ↓ Form Data (HTTP Requests) ↓
                 
+-----------------------------------------------------------+
|                        API Routes                         |
| +-------------------------------------------------------+ |
| | POST /api/auth/register (User Registration)           | |
| | src/pages/api/auth/register.ts                        | |
| +-------------------------------------------------------+ |
| +-------------------------------------------------------+ |
| | POST /api/auth/login (User Login)                     | |
| | src/pages/api/auth/[...nextauth].ts                   | |
| +-------------------------------------------------------+ |
| +-------------------------------------------------------+ |
| | PUT /api/auth/update (User Update)                    | |
| | src/pages/api/auth/update.ts                          | |
| +-------------------------------------------------------+ |
| +-------------------------------------------------------+ |
| | DELETE /api/auth/delete (User Deletion)               | |
| | src/pages/api/auth/delete.ts                          | |
| +-------------------------------------------------------+ |
| +-------------------------------------------------------+ |
| | GET /api/auth/session (Session Info)                  | |
| | src/pages/api/auth/[...nextauth].ts                   | |
| +-------------------------------------------------------+ |
| +-------------------------------------------------------+ |
| | GET /api/auth/user (Retrieve User Info)               | |
| | src/pages/api/auth/[...nextauth].ts                   | |
| +-------------------------------------------------------+ |
+-----------------------------------------------------------+

                  ↓ Prisma ORM - DB Transactions ↓

+-----------------------------------------------------------+
|                  Vercel Postgres Database                 |
| +-------------------------------------------------------+ |
| | User Table                                            | |
| | - id                                                  | |
| | - username                                            | |
| | - email                                               | |
| | - password (hashed)                                   | |
| | - createdAt                                           | |
| | - updatedAt                                           | |
| +-------------------------------------------------------+ |
+-----------------------------------------------------------+
```

### Data Flow of Authentication Feature

1. **User Registration**:
   - **Client**: User submits registration form via `src/components/Register.tsx`.
   - **API Route**: Form data is sent to `POST /api/auth/register` handled by `src/pages/api/auth/register.ts`.
   - **Database**: Prisma ORM creates a new user record in Vercel Postgres.

2. **User Login**:
   - **Client**: User submits login form via `src/components/SignIn.tsx`.
   - **API Route**: Form data is sent to `POST /api/auth/login` handled by `src/pages/api/auth/[...nextauth].ts`.
   - **Session**: NextAuth.js creates a session and stores session data.

3. **User Update**:
   - **Client**: User submits update form via `src/components/UpdateUserForm.tsx`.
   - **API Route**: Form data is sent to `PUT /api/auth/update` handled by `src/pages/api/auth/update.ts`.
   - **Database**: Prisma ORM updates the user record in Vercel Postgres.

4. **User Deletion**:
   - **Client**: User submits deletion request.
   - **API Route**: Request is sent to `DELETE /api/auth/delete` handled by `src/pages/api/auth/delete.ts`.
   - **Database**: Prisma ORM deletes the user record from Vercel Postgres.

5. **Session Management**:
   - **Client**: Zustand manages client-side authentication state.
   - **API Route**: Session information is retrieved via `GET /api/auth/session` handled by `src/pages/api/auth/[...nextauth].ts`.

6. **Retrieve User Information**:
   - **Client**: User information is requested.
   - **API Route**: Request is sent to `GET /api/auth/user` handled by `src/pages/api/auth/[...nextauth].ts`.
   - **Database**: Prisma ORM retrieves user data from Vercel Postgres.

### How Authentication Works in the Game
1. **User Registration**:
   - Players register by filling out the registration form in `src/components/Register.tsx`.
   - The form data is sent to the `POST /api/auth/register` endpoint (`src/pages/api/auth/register.ts`).
   - Prisma ORM creates a new user record in the Vercel Postgres database.

2. **User Login**:
   - Players log in using the login form in `src/components/SignIn.tsx`.
   - The login data is sent to the `POST /api/auth/login` endpoint (`src/pages/api/auth/[...nextauth].ts`).
   - NextAuth.js authenticates the user and creates a session.

3. **Session Management**:
   - Zustand manages the client-side authentication state.
   - Session information is retrieved from the `GET /api/auth/session` endpoint (`src/pages/api/auth/[...nextauth].ts`).

4. **User Update**:
   - Players can update their email and password using the form in `src/components/UpdateUserForm.tsx`.
   - The update data is sent to the `PUT /api/auth/update` endpoint (`src/pages/api/auth/update.ts`).
   - Prisma ORM updates the user record in the Vercel Postgres database.

5. **User Deletion**:
   - Players can delete their account by submitting a deletion request.
   - The request is sent to the `DELETE /api/auth/delete` endpoint (`src/pages/api/auth/delete.ts`).
   - Prisma ORM deletes the user record from the Vercel Postgres database.

6. **Retrieve User Information**:
   - User information can be requested from the `GET /api/auth/user` endpoint (`src/pages/api/auth/[...nextauth].ts`).
   - Prisma ORM retrieves the user data from the Vercel Postgres database.

### API Routes
- **Registration**: 
  - **Route**: `POST /api/auth/register`
  - **File**: `src/pages/api/auth/register.ts`
  - **Functionality**: Creates a new user account.

- **Login**: 
  - **Route**: `POST /api/auth/login`
  - **File**: `src/pages/api/auth/[...nextauth].ts`
  - **Functionality**: Authenticates user and creates a session.

- **Update User Information**: 
  - **Route**: `PUT /api/auth/update`
  - **File**: `src/pages/api/auth/update.ts`
  - **Functionality**: Updates user information (email and password).

- **Delete User Account**: 
  - **Route**: `DELETE /api/auth/delete`
  - **File**: `src/pages/api/auth/delete.ts`
  - **Functionality**: Deletes a user account.

- **Session Information**: 
  - **Route**: `GET /api/auth/session`
  - **File**: `src/pages/api/auth/[...nextauth].ts`
  - **Functionality**: Retrieves user session information.

- **Retrieve User Information**: 
  - **Route**: `GET /api/auth/user`
  - **File**: `src/pages/api/auth/[...nextauth].ts`
  - **Functionality**: Retrieves user information.

### Components
- **SignIn**: Form for user authentication.
  - **File**: `src/components/SignIn.tsx`

- **Register**: Form for creating a new account.
  - **File**: `src/components/Register.tsx`

- **UpdateUserForm**: Form for updating user information.
  - **File**: `src/components/UpdateUserForm.tsx`

### State Management
Zustand is used to manage the authentication state on the client-side, syncing with NextAuth.js session.

### Security Considerations
- Passwords are hashed using bcrypt before storage.
- CSRF protection is handled by NextAuth.js.
- API routes are protected against unauthorized access. This is achieved using Next.js middleware and NextAuth.js session management.
- Prisma provides type-safe database access, reducing the risk of SQL injection.

### Integration with Game Flow
1. Users start at the splash page (index.tsx) where they can choose to register or login.
2. Upon successful authentication, users are redirected to the main menu (main-menu.tsx).
3. The game state, including user progress and preferences, is associated with the authenticated user's account.

## Component Integration

### SignIn Component
- **File**: `src/components/SignIn.tsx`
- **Usage**: 
  - `src/pages/login.tsx`

### Register Component
- **File**: `src/components/Register.tsx`
- **Usage**: 
  - `src/pages/register.tsx`

### UpdateUserForm Component
- **File**: `src/components/UpdateUserForm.tsx`
- **Usage**: 
  - `src/pages/main-menu.tsx`

### Zustand Store
- **File**: `src/stores/authStore.ts`
- **Usage**: 
  - `src/pages/main-menu.tsx`
  - `src/components/SignIn.tsx`
  - `src/components/Register.tsx`

### API Routes
- **Registration**: 
  - **File**: `src/pages/api/auth/register.ts`
  - **Usage**: 
    - `src/components/Register.tsx`

- **Login**: 
  - **File**: `src/pages/api/auth/[...nextauth].ts`
  - **Usage**: 
    - `src/components/SignIn.tsx`

- **Update User Information**: 
  - **File**: `src/pages/api/auth/update.ts`
  - **Usage**: 
    - `src/components/UpdateUserForm.tsx`

- **Delete User Account**: 
  - **File**: `src/pages/api/auth/delete.ts`
  - **Usage**: 
    - `src/components/DeleteAccount.tsx`

- **Session Information**: 
  - **File**: `src/pages/api/auth/[...nextauth].ts`
  - **Usage**: 
    - `src/stores/authStore.ts`

- **Retrieve User Information**: 
  - **File**: `src/pages/api/auth/[...nextauth].ts`
  - **Usage**: 
    - `src/stores/authStore.ts`

### Testing
(Note: Testing framework not yet implemented. To be added in future iterations.)

### Deployment
The authentication system is deployed as part of the overall application on Vercel, utilizing Vercel Postgres for data storage.

## Implementation Plan

### Current Status
- Basic authentication system implemented using NextAuth.js
- API routes for registration, login, and user updates are in place
- Main menu page displays user and email information
- Email update functionality implemented and working
  - Real-time email update in the main menu UI after successful change

### Plan

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
   - ✅ Update splash page to show login/register buttons or user info

8. Implement error handling and validation
   - ✅ Add form validation to SignIn and Register components
   - ✅ Implement error messages for failed authentication attempts
   - ✅ Add validation and error handling for email updates

9. Test authentication flow
   - ✅ Manual testing of registration, login, update, and delete processes
   - Write unit tests for authentication components and API routes

10. Implement security measures
    - Set up CSRF protection
    - Implement rate limiting for API routes
    - Ensure secure password hashing with bcrypt

11. Update documentation
    - Update developer guide with authentication implementation details
    - Update technical design document if necessary

### Future Enhancements
- Implement password reset functionality
- Add option for users to delete their account
- Integrate with external authentication providers (e.g., Google, Facebook)
- Two-factor authentication
- Implement proper input validation and sanitization
- Use HTTPS for all API requests
- Implement rate limiting to prevent abuse
- Ensure secure storage of user passwords (hashing + salting)
- Implement CSRF protection for form submissions
- Use secure session management with NextAuth.js (?)
