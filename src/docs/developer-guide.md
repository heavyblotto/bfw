---
title: Developer Guide
lastUpdated: 2023-04-21
---

# Developer Guide

## Table of Contents
1. Introduction
2. Project Overview
3. Getting Started
4. Project Structure
5. Development Workflow
6. Coding Standards
7. State Management
   7.1 Using Zustand in Components
   7.2 Zustand and Next.js Integration
   7.3 Best Practices
8. Rendering Strategies
   8.1 Server-Side Rendering (SSR)
   8.2 Client-Side Rendering (CSR)
   8.3 Choosing Between SSR and CSR
   8.4 Hybrid Approach
9. Data Storage
10. Version Control and Changelog Management
11. Testing
12. Deployment
13. Contributing

## 1. Introduction

This document serves as a guide for developers working on our project. It contains important information about our development process, coding standards, and best practices.

## 2. Project Overview

For a comprehensive overview of the project, including technology stack, data management, and architectural decisions, please refer to the [Design Document](./design.md).

## 3. Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Familiarize yourself with the [Design Document](./design.md) and [Todo List](./todo.md)

## 4. Project Structure

Our project uses Next.js with TypeScript. Here's an overview of the key directories:

- `/src`: Contains the main source code
  - `/components`: Reusable React components
  - `/pages`: Next.js pages
  - `/styles`: CSS and styling files
  - `/utils`: Utility functions
  - `/docs`: Documentation files (including this guide)
  - `/stores`: Zustand stores for state management
- `/public`: Static assets
- `/data`: YAML and Markdown files for data storage

## 5. Development Workflow

For current tasks, priorities, and project progress, please refer to the [Todo List](./todo.md). This document is regularly updated to reflect the current state of development.

## 6. Coding Standards

- Use TypeScript for type safety
- Follow ESLint rules for code style
- Write meaningful commit messages
- Update the changelog for significant changes (see CHANGELOG.md in the project root)

## 7. State Management

We use Zustand for global state management. The main game store is located in `src/stores/gameStore.ts`. This store manages the core game state, including players, cards, and game actions.

### 7.1 Using Zustand in Components

To use the store in a component:

```typescript
import useGameStore from '@/stores/gameStore'

const MyComponent = () => {
  const { players, currentTurn, playCard } = useGameStore()
  // Use the state and actions in your component
}
```

When adding new features or game mechanics, consider whether they should be part of the global game state or local component state. Add new state properties and actions to the game store as needed.

### 7.2 Zustand and Next.js Integration

Zustand works well alongside Next.js state management tools:

1. Server-Side Rendering (SSR):
   Zustand is compatible with Next.js SSR. You can use Zustand stores in getServerSideProps or getStaticProps:

   ```typescript
   import { createStore } from 'zustand/vanilla'

   const store = createStore(/* your store logic */)

   export async function getServerSideProps() {
     store.getState().someAction()
     return { props: { initialState: store.getState() } }
   }
   ```

   Then hydrate the store on the client:

   ```typescript
   import create from 'zustand'
   import { useEffect } from 'react'

   const useStore = create(/* your store logic */)

   function MyComponent({ initialState }) {
     useEffect(() => {
       useStore.setState(initialState)
     }, [initialState])
     // ...
   }
   ```

2. Next.js API Routes:
   You can use Zustand stores in API routes to manage server-side state:

   ```typescript
   import { createStore } from 'zustand/vanilla'

   const store = createStore(/* your store logic */)

   export default function handler(req, res) {
     const state = store.getState()
     // Use state in your API logic
     res.status(200).json(state)
   }
   ```

3. Client-Side Rendering:
   Zustand works seamlessly with Next.js client-side rendering, just like in a regular React app.

4. Next.js Context:
   You can use Zustand alongside Next.js Context if needed. Zustand is often simpler for global state, while Context can be used for more localized state or for dependency injection.

5. Next.js Dynamic Imports:
   Zustand stores can be dynamically imported, which works well with Next.js dynamic imports for code splitting.

### 7.3 Best Practices

- Initialize stores with SSR data when necessary
- Use separate stores for server-only and client-only state
- Leverage Next.js API routes for server-side state mutations
- Keep store actions

If you have any questions, don't hesitate to ask the project maintainers.

## 8. Rendering Strategies

Our Next.js application uses a combination of Server-Side Rendering (SSR) and Client-Side Rendering (CSR). Understanding when to use each is crucial for performance and user experience.

### 8.1 Server-Side Rendering (SSR)

SSR generates the full HTML for a page on the server in response to navigation. This is useful for:

- SEO-critical pages
- Content that doesn't change frequently
- Initial page load performance

To implement SSR in Next.js, use `getServerSideProps`:

```typescript
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
```

When using SSR with Zustand:

1. Create the store server-side
2. Perform any necessary actions
3. Pass the initial state as props
4. Hydrate the store client-side

### 8.2 Client-Side Rendering (CSR)

CSR renders pages directly in the browser using JavaScript. This is useful for:

- Highly interactive components
- Content that updates frequently
- Private, user-specific pages

To implement CSR in Next.js, simply don't use `getServerSideProps` or `getStaticProps`. Fetch data client-side using React hooks.

When using CSR with Zustand, you can directly use the store in your components:

```typescript
import useStore from '@/stores/store'

function MyComponent() {
  const data = useStore(state => state.data)
  // Use data in your component
}
```

### 8.3 Choosing Between SSR and CSR

- Use SSR for:
  - Public pages that need SEO
  - Pages with mostly static content
  - Initial page loads where fast paint is crucial

- Use CSR for:
  - Private, authenticated pages
  - Highly interactive components
  - Content that updates based on user interaction

### 8.4 Hybrid Approach

Next.js allows a hybrid approach where you can use SSR for the initial page load and CSR for subsequent interactions. This can provide the best of both worlds:

1. Fast initial page load and SEO benefits from SSR
2. Smooth, app-like experience for subsequent interactions with CSR

When adding new features, consider:

1. Does this page/component need to be indexed by search engines?
2. How often does the data change?
3. Is the content user-specific?
4. How complex

## 9. Data Storage

We use YAML and Markdown with front matter for data storage. These files are stored in the `/data` directory and parsed using the utility function in `src/utils/dataParser.ts`.

## 10. Version Control and Changelog Management

We use `standard-version` to automate versioning and changelog generation. This tool follows the Semantic Versioning specification and generates changelogs based on commit messages that follow the Conventional Commits specification.

### Setup

1. `standard-version` is installed as a dev dependency. If it's not installed, run:
   ```
   npm install --save-dev standard-version
   ```

2. The `package.json` includes a script for running `standard-version`:
   ```json
   {
     "scripts": {
       "release": "standard-version"
     }
   }
   ```

### Usage

To create a new release:

1. Ensure all your changes are committed and pushed.
2. Run:
   ```
   npm run release
   ```

3. This command will:
   - Analyze your commits since the last release
   - Determine the appropriate version bump (major, minor, or patch)
   - Update the version in `package.json`
   - Generate or update the `CHANGELOG.md` file
   - Create a new git tag for the release

4. Review the changes in `CHANGELOG.md` and `package.json`.

5. Push the changes and the new tag to the repository:
   ```
   git push --follow-tags origin main
   ```

### Best Practices

- Always use Conventional Commits syntax in your commit messages to ensure accurate changelog generation.
- Run `npm run release` only on the main branch after merging all changes for a release.
- Review the generated changelog before pushing to ensure all important changes are documented correctly.
- Do not manually edit the CHANGELOG.md file. Let `standard-version` manage it.

## 11. Testing

(Note: Testing framework not yet implemented. To be added in future iterations as outlined in the Design Document.)

## 12. Deployment

(Deployment will be handled through Vercel. Specific instructions to be added when available.)

## 13. Contributing

1. Review the [Design Document](./design.md) to understand the project architecture and decisions.
2. Check the [Todo List](./todo.md) for current priorities and tasks.
3. Make sure your work aligns with the coding standards and project structure outlined in this guide.
4. Update relevant documentation, including this guide, the changelog, and the todo list as necessary.
5. Submit a pull request with a clear description of your changes.

If you have any questions, don't hesitate to ask the project maintainers.