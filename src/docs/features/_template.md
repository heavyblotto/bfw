# {{ Feature Name }}

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
- [Implementation Plan for {{ Feature Name }}](#implementation-plan-for-{{ feature-name }})
- [Future Enhancements](#future-enhancements)

## Overview
{{ Brief description of the feature }}

See also:
- [Game Design](game-design.md)

## Data Models

See the [schema.prisma](../../../prisma/schema.prisma) file for more details.

### {{ Model Name }}

- {{ field1 }}: {{ description1 }}
- {{ field2 }}: {{ description2 }}
- {{ field3 }}: {{ description3 }}
- {{ field4 }}: {{ description4 }}
- {{ field5 }}: {{ description5 }}

### Schema

```prisma
model {{ Model Name }} {
  {{ field1 }} {{ type1 }} {{ attributes1 }}
  {{ field2 }} {{ type2 }} {{ attributes2 }}
  {{ field3 }} {{ type3 }} {{ attributes3 }}
  {{ field4 }} {{ type4 }} {{ attributes4 }}
  {{ field5 }} {{ type5 }} {{ attributes5 }}
}
```
Related data models:
- {{ Related Model }}

## Features

1. {{ Feature 1 }}
   - {{ Description 1 }}

2. {{ Feature 2 }}
   - {{ Description 2 }}

3. {{ Feature 3 }}
   - {{ Description 3 }}

4. {{ Feature 4 }}
   - {{ Description 4 }}

## Architecture

### Technology Stack
- **NextAuth.js**: Handles user authentication and session management.
- **Zustand**: Manages client-side authentication state.
- **Prisma ORM**: Interfaces with the Vercel Postgres database.
- **Vercel Postgres**: Stores user data and other related information.
- **Next.js API Routes**: Implements backend functionality.

### Data Flow of {{ Feature Name }}
1. {{ Data Flow 1 }}
2. {{ Data Flow 2 }}
3. {{ Data Flow 3 }}

### How {{ Feature Name }} Works in the Game
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
- **{{ Route Name 1 }}**: 
  - **Route**: `{{ HTTP Method }} /api/{{ route1 }}`
  - **File**: `src/pages/api/{{ route1 }}.ts`
  - **Functionality**: {{ Functionality 1 }}

- **{{ Route Name 2 }}**: 
  - **Route**: `{{ HTTP Method }} /api/{{ route2 }}`
  - **File**: `src/pages/api/{{ route2 }}.ts`
  - **Functionality**: {{ Functionality 2 }}

- **{{ Route Name 3 }}**: 
  - **Route**: `{{ HTTP Method }} /api/{{ route3 }}`
  - **File**: `src/pages/api/{{ route3 }}.ts`
  - **Functionality**: {{ Functionality 3 }}

### Components
- **{{ Component 1 }}**: {{ Description 1 }}
  - **File**: `src/components/{{ Component 1 }}.tsx`

- **{{ Component 2 }}**: {{ Description 2 }}
  - **File**: `src/components/{{ Component 2 }}.tsx`

- **{{ Component 3 }}**: {{ Description 3 }}
  - **File**: `src/components/{{ Component 3 }}.tsx`

### State Management
Zustand is used to manage the authentication state on the client-side, syncing with NextAuth.js session.

### Security Considerations
- Passwords are hashed using bcrypt before storage.
- CSRF protection is handled by NextAuth.js.
- API routes are protected against unauthorized access.
- Prisma provides type-safe database access, reducing the risk of SQL injection.

### Integration with Game Flow
1. Users start at the splash page (index.tsx) where they can choose to register or login.
2. Upon successful authentication, users are redirected to the main menu (main-menu.tsx).
3. The game state, including user progress and preferences, is associated with the authenticated user's account.

## Component Integration

### {{ Component 1 }}
- **File**: `src/components/{{ Component 1 }}.tsx`
- **Usage**: 
  - `src/pages/{{ usage1 }}.tsx`

### {{ Component 2 }}
- **File**: `src/components/{{ Component 2 }}.tsx`
- **Usage**: 
  - `src/pages/{{ usage2 }}.tsx`

### {{ Component 3 }}
- **File**: `src/components/{{ Component 3 }}.tsx`
- **Usage**: 
  - `src/pages/{{ usage3 }}.tsx`

### Zustand Store
- **File**: `src/stores/authStore.ts`
- **Usage**: 
  - `src/pages/{{ usage4 }}.tsx`
  - `src/components/{{ usage5 }}.tsx`
  - `src/components/{{ usage6 }}.tsx`

### Testing
(Note: Testing framework not yet implemented. To be added in future iterations.)

### Deployment
The authentication system is deployed as part of the overall application on Vercel, utilizing Vercel Postgres for data storage.

## Implementation Plan for {{ Feature Name }}

### Current Status
- {{ Current Status }}

### Plan

1. {{ Task 1 }}:
   - [ ] {{ Subtask 1 }}
   - [ ] {{ Subtask 2 }}
   - [ ] {{ Subtask 3 }}

2. {{ Task 2 }}:
   - [ ] {{ Subtask 1 }}
   - [ ] {{ Subtask 2 }}
   - [ ] {{ Subtask 3 }}

3. {{ Task 3 }}:
   - [ ] {{ Subtask 1 }}
   - [ ] {{ Subtask 2 }}
   - [ ] {{ Subtask 3 }}

### Future Enhancements
- {{ Enhancement 1 }}
- {{ Enhancement 2 }}
- {{ Enhancement 3 }}
- {{ Enhancement 4 }}