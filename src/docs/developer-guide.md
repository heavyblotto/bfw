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
6. Coding Standards and UI Components
   6.1 UI Components with shadcn/ui
   6.2 Page Design and Styling
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
14. Image Optimization

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

## 6. Coding Standards and UI Components

- Use TypeScript for type safety
- Follow ESLint rules for code style
- Write meaningful commit messages
- Update the changelog for significant changes (see CHANGELOG.md in the project root)

### 6.1 UI Components with shadcn/ui

We use shadcn/ui for our UI components. This is not a component library that you install as a dependency, but rather a collection of reusable components that you copy and paste into your project.

#### Key points about shadcn/ui:

1. It's not installed as a package, but components are added to your project as needed.
2. It uses Tailwind CSS for styling, which aligns with our existing setup.
3. Components are fully customizable as they live in your project.
4. It provides excellent accessibility out of the box.

#### Adding components:

To add a shadcn/ui component to the project:

1. Use the shadcn/ui CLI:
   ```
   npx shadcn-ui@latest add [component-name]
   ```
   For example, to add a button component:
   ```
   npx shadcn-ui@latest add button
   ```

2. The component will be added to your `components/ui` directory.

3. You can now import and use the component in your pages or other components:
   ```tsx
   import { Button } from "@/components/ui/button"
   
   export default function Page() {
     return (
       <Button>Click me</Button>
     )
   }
   ```

#### Customization:

You can customize the components by editing the files in your `components/ui` directory. This allows for easy theming and modification to fit our specific needs.

#### Best Practices:

- Use shadcn/ui components as a starting point, customizing them as needed for our game's specific requirements.
- Maintain consistency by using these components throughout the project where applicable.
- When adding new UI elements, check if a shadcn/ui component exists before creating a custom one from scratch.

For more information and a full list of available components, refer to the [shadcn/ui documentation](https://ui.shadcn.com/docs).

### 6.2 Page Design and Styling

We've established a consistent design pattern for our pages, particularly for the splash page. Here are the key elements:

1. **Background:**
   - Use a full-screen background image.
   - Apply a gradient overlay for better text contrast.
   - Example:
     ```tsx
     <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
       <div className="absolute inset-0 z-0">
         <Image
           src="/images/index.bg.webp"
           alt="Forest Background"
           fill
           style={{ objectFit: 'cover', objectPosition: 'center' }}
           priority
         />
       </div>
       <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
       {/* Content goes here */}
     </div>
     ```

2. **Main Content Card:**
   - Use a semi-transparent card with a blur effect for the main content.
   - Apply earthy color schemes as defined in the style guide.
   - Example:
     ```tsx
     <Card className="w-full max-w-4xl bg-stone-800/80 text-stone-200 border-2 border-stone-600 shadow-lg relative z-20 backdrop-blur-sm">
       {/* Card content */}
     </Card>
     ```

3. **Typography:**
   - Use the "Press Start 2P" pixel font for headings and important text.
   - Apply the font using the `font-pixel` class.
   - Adjust font sizes for readability, as pixel fonts can appear smaller.
   - Example:
     ```tsx
     <CardTitle className="text-4xl font-bold mb-2 text-amber-400 font-pixel">Welcome to Bigfoot War</CardTitle>
     <p className="text-xl font-pixel">Battle AI opponents in this thrilling card game!</p>
     ```

4. **Buttons:**
   - Style buttons to match the earthy, natural theme.
   - Use green for primary actions and stone colors for secondary actions.
   - Example:
     ```tsx
     <Button asChild variant="default" className="bg-green-700 hover:bg-green-600 text-stone-200 border-2 border-stone-400 font-pixel">
       <Link href="/register">Register</Link>
     </Button>
     ```

5. **Images:**
   - Use the Next.js Image component for optimization.
   - Adjust image positioning using `objectPosition` when necessary.
   - Example:
     ```tsx
     <div className="relative w-full h-48 mb-6">
       <Image
         src="/images/bigfoot-war-logo.png"
         alt="Bigfoot War Logo"
         fill
         style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
         priority
       />
     </div>
     ```

When implementing new pages or components, refer to these patterns to maintain consistency throughout the game. Adjust colors, sizes, and layouts as needed while keeping the overall aesthetic consistent with the established design.

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

Our project uses a combination of file-based storage and Vercel Postgres with Prisma ORM for data management:

### File-based Storage
- YAML and Markdown files with front matter are used for static content and configuration.
- These files are stored in the `/data` directory and parsed using the utility function (to be written).
- Ideal for content that doesn't change frequently, such as game rules, character descriptions, or level layouts.

### Vercel Postgres with Prisma ORM
We use Vercel Postgres with Prisma ORM for storing and managing dynamic game data, user information, and other structured data that requires frequent updates or complex queries.

#### Setting up Prisma with Vercel Postgres
1. Install Prisma:
   ```
   npm install prisma --save-dev
   ```
2. Initialize Prisma in your project:
   ```
   npx prisma init
   ```
3. Configure your `schema.prisma` file with your Vercel Postgres connection string.
4. Define your data models in the `schema.prisma` file.
5. Generate Prisma Client:
   ```
   npx prisma generate
   ```

#### Using Prisma in your code
Here's an example of how to use Prisma in an API route:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const users = await prisma.user.findMany()
  res.status(200).json(users)
}
```

#### Best Practices
- Use Prisma migrations for managing database schema changes.
- Leverage Prisma's type-safe queries for better developer experience and fewer runtime errors.
- Use Prisma Studio for visualizing and editing your data during development.

For more information on using Prisma with Vercel Postgres, refer to the [Prisma documentation](https://www.prisma.io/docs) and [Vercel Postgres documentation](https://vercel.com/docs/storage/vercel-postgres).

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

Our project is now integrated with Vercel for automatic deployments.

### Deployment Process

1. Every push to the main branch on GitHub triggers a new deployment on Vercel.
2. Vercel automatically builds and deploys the project.
3. You can view deployment logs and status in the Vercel dashboard.

### Accessing the Deployed Application

- The latest version of the main branch is always available at our project's Vercel URL.
- Each pull request gets its own preview deployment for easy testing and review.

### Best Practices

- Always test your changes locally before pushing to GitHub.
- Review the Vercel deployment logs for any build or runtime errors.
- Use Vercel's preview deployments to test and share new features before merging to main.

For more detailed information on Vercel deployments, refer to the [Vercel Documentation](https://vercel.com/docs).

## 13. Contributing

1. Review the [Design Document](./design.md) to understand the project architecture and decisions.
2. Check the [Todo List](./todo.md) for current priorities and tasks.
3. Make sure your work aligns with the coding standards and project structure outlined in this guide.
4. Update relevant documentation, including this guide, the changelog, and the todo list as necessary.
5. Submit a pull request with a clear description of your changes.

If you have any questions, don't hesitate to ask the project maintainers.

## 14. Image Optimization

Next.js provides an `Image` component that automatically optimizes images for better performance. This component offers several benefits, including automatic resizing, lazy loading, and support for modern image formats like WebP.

### Using the Next.js Image Component

To use the `Image` component, follow these steps:

1. **Import the Image Component:**

   ```typescript
   import Image from 'next/image'
   ```

2. **Add the Image Component to Your Page or Component:**

   ```typescript
   export default function MyPage() {
     return (
       <div>
         <h1>My Page</h1>
         <Image
           src="/path/to/image.jpg"
           alt="Description of image"
           width={500}
           height={300}
         />
       </div>
     )
   }
   ```

   - `src`: The path to the image. This can be a local path or a URL.
   - `alt`: A description of the image for accessibility.
   - `width` and `height`: The dimensions of the image. These are required to prevent layout shifts.

### Benefits of Using the Image Component

- **Automatic Optimization:** Images are automatically optimized and served in the most efficient format.
- **Responsive Images:** The component generates multiple sizes of the image and serves the appropriate size based on the device's screen size.
- **Lazy Loading:** Images are loaded lazily by default, which improves page load times.
- **Modern Formats:** The component supports modern image formats like WebP, which offer better compression than traditional formats like JPEG and PNG.

### Example

Here's an example of using the `Image` component in a Next.js page:

```typescript
import Image from 'next/image'

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to My Site</h1>
      <Image
        src="/images/hero.jpg"
        alt="Hero Image"
        width={1200}
        height={600}
      />
    </div>
  )
}
```

### Best Practices

- **Use Descriptive Alt Text:** Always provide descriptive alt text for accessibility.
- **Specify Dimensions:** Always specify the width and height to prevent layout shifts.
- **Optimize Source Images:** Use optimized source images to further improve performance.

For more information, refer to the [Next.js Image Optimization documentation](https://nextjs.org/docs/basic-features/image-optimization).