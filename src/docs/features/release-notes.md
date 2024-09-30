# Release Notes Feature

## Overview
The Release Notes feature displays the latest updates and changes made to the game. It fetches and renders the release notes from Markdown files stored in the project.

## Data Management
Release notes are stored as Markdown files with front matter in the `src/data/release-notes` directory. Each file contains metadata such as version and date, and the content is written in Markdown.

## File Structure
- `src/data/release-notes/`: Directory containing Markdown files for each release note.
- `src/utils/releaseNotes.ts`: Utility functions to read and process release notes.
- `src/pages/release-notes.tsx`: Next.js page to display the release notes.

## Utility Functions
The utility functions for fetching and processing release notes are defined in `src/utils/releaseNotes.ts`.

### getSortedReleaseNotes
This function reads all Markdown files from the `src/data/release-notes` directory, processes the front matter and content, and returns the latest 5 release notes sorted by date.

typescript:src/utils/releaseNotes.ts
startLine: 1
endLine: 36


## Release Notes Page
The release notes are displayed on a dedicated page implemented in `src/pages/release-notes.tsx`. This page uses Next.js static generation to fetch and render the release notes at build time.

### getStaticProps
This function fetches the sorted release notes using the `getSortedReleaseNotes` utility function and passes them as props to the page component.

### ReleaseNotes Component
The `ReleaseNotes` component renders the release notes using the `PixelatedText` component for headings and a `Button` component for navigation.

typescript:src/pages/release-notes.tsx
startLine: 1
endLine: 63


## Styling
- The release notes page uses Tailwind CSS for styling.
- The `PixelatedText` component is used for headings to maintain the game's pixel art theme.
- The `Button` component is styled to match the overall design of the game.

## Future Enhancements
- Add pagination to display more than the latest 5 release notes.
- Implement search functionality to find specific release notes.
- Allow filtering release notes by version or date.

## Summary
The Release Notes feature provides a way to display the latest updates and changes made to the game. It leverages Markdown files for content management and Next.js for static site generation, ensuring fast and efficient rendering of the release notes.