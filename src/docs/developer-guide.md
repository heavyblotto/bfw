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
8. Rendering Strategies
9. Data Storage
10. Authentication
11. Version Control and Changelog Management
12. Testing
13. Deployment
14. Contributing
15. Image Optimization

## 1. Introduction

This document serves as a guide for developers working on our Bigfoot War project. It contains important information about our development process, coding standards, and best practices.

## 2. Project Overview

For a comprehensive overview of the project, including technology stack, data management, and architectural decisions, please refer to the [Technical Design Document](./technical-design.md).

## 3. Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Familiarize yourself with the [Technical Design Document](./technical-design.md) and [Todo List](./todo.md)

## 4. Project Structure

Our project uses Next.js with TypeScript. Here's an overview of the key directories:

- `/src`: Contains the main source code
  - `/components`: Reusable React components
  - `/data`: YAML and Markdown files for data storage
  - `/pages`: Next.js pages
  - `/styles`: CSS and styling files
  - `/utils`: Utility functions
  - `/docs`: Documentation files (including this guide)
  - `/stores`: Zustand stores for state management
- `/public`: Static assets

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
       <Link href="/register">register</Link>
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

For detailed information on using Zustand with Next.js, refer to the Technical Design Document.

## 8. Rendering Strategies

Our Next.js application uses a combination of Server-Side Rendering (SSR) and Client-Side Rendering (CSR). Understanding when to use each is crucial for performance and user experience.

For detailed information on our rendering strategies, refer to the Technical Design Document.

## 9. Data Storage

Our project uses a combination of file-based storage and Vercel Postgres with Prisma ORM for data management:

### File-based Storage
- YAML and Markdown files with front matter are used for static content and configuration.
- These files are stored in the `/data` directory and parsed using the utility function (to be written).
- Ideal for content that doesn't change frequently, such as game rules, character descriptions, or level layouts.

### Vercel Postgres with Prisma ORM
We use Vercel Postgres with Prisma ORM for storing and managing dynamic game data, user information, and other structured data that requires frequent updates or complex queries.

For detailed information on setting up and using Prisma with Vercel Postgres, refer to the Technical Design Document.

## 10. Authentication

Our authentication system uses NextAuth.js, Zustand for state management, Prisma ORM, and Vercel Postgres for storage. It allows users to register, login, update their account (including real-time email updates), and delete their account. The system is now fully implemented and working in both local and production environments.

Key points:
- NextAuth.js is configured with a Credentials provider
- Passwords are hashed using bcrypt before storage
- User data is stored in Vercel Postgres
- Protected routes ensure only authenticated users can access certain parts of the game
- Environment variables (NEXTAUTH_SECRET and NEXTAUTH_URL) are properly set in Vercel
- Real-time UI updates for email changes implemented in the main menu

For detailed information on the authentication system, including API routes and components, refer to the [Authentication System Design](./features/authentication.md) document.

## 11. Version Control and Changelog Management

We use `standard-version` to automate versioning and changelog generation. This tool follows the Semantic Versioning specification and generates changelogs based on commit messages that follow the Conventional Commits specification.

For detailed information on our version control and changelog management process, refer to the Technical Design Document.

## 12. Testing

(Note: Testing framework not yet implemented. To be added in future iterations as outlined in the Technical Design Document.)

## 13. Deployment

Our project is integrated with Vercel for automatic deployments.

For detailed information on our deployment process, refer to the Technical Design Document.

## 14. Contributing

1. Review the [Technical Design Document](./technical-design.md) to understand the project architecture and decisions.
2. Check the [Todo List](./todo.md) for current priorities and tasks.
3. Make sure your work aligns with the coding standards and project structure outlined in this guide.
4. Update relevant documentation, including this guide, the changelog, and the todo list as necessary.
5. Submit a pull request with a clear description of your changes.

If you have any questions, don't hesitate to ask the project maintainers.

## 15. Image Optimization

Next.js provides an `Image` component that automatically optimizes images for better performance. This component offers several benefits, including automatic resizing, lazy loading, and support for modern image formats like WebP.

For detailed information on using the Next.js Image component, refer to the Technical Design Document.