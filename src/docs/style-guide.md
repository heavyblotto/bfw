# *Bigfoot War* Style Guide

The game's visual identity blends retro pixel art with immersive, natural elements, creating a dark, mysterious atmosphere that reflects the world of Bigfoot creatures. Our UI and HUD design uses a dark color scheme with gradient backgrounds, emphasizing the game's mythical and adventurous qualities.

## Color Palette

- Primary Colors: 
  - Dark Stone: `#1c1917` (bg-stone-900)
  - Neutral: `#262626` (bg-neutral-800)
  - Slate: `#0f172a` (bg-slate-900)
- Accent Colors:
  - Green: `#15803d` (bg-green-700)
  - Amber: `#fbbf24` (text-amber-400)
  - Stone: `#e7e5e4` (text-stone-200)
- Gradient Text:
  - `bg-gradient-to-r from-purple-400 via-pink-500 to-red-500`

## Typography

- Primary Font: "Press Start 2P" (pixel font, referred to as `font-pixel`)
- Fallback Font: sans-serif
- Font Sizes:
  - Main Heading: text-4xl sm:text-6xl
  - Subheadings: text-2xl
  - Body Text: text-xl
  - Small Text: text-sm

## UI Components

### Cards/Containers
- Background: `bg-gradient-to-r from-stone-900/90 via-neutral-800/90 to-slate-900/90`
- Border: `border border-stone-500`
- Shadow: `shadow-[0_0_15px_rgba(255,255,255,0.5)]`
- Rounded corners: `rounded-lg`

### Buttons
- Primary Button:
  - Background: `bg-green-700 hover:bg-green-600`
  - Text Color: `text-stone-200`
  - Border: `border-2 border-stone-400`
- Secondary Button:
  - Background: `bg-stone-700 hover:bg-stone-600`
  - Text Color: `text-stone-200`
  - Border: `border-2 border-stone-400`

### Text
- Headings: Gradient text with drop shadow
  ```css
  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
  text-transparent bg-clip-text 
  drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
  ```
- Body Text: `text-stone-200`
- Muted Text: `text-stone-400`
- Links: `text-amber-400 hover:text-amber-300`

## Layout

- Use flexbox for centering and alignment
- Full-height layouts: `min-h-screen flex flex-col`
- Content width on larger screens: `max-w-3xl w-full`

## Backgrounds

- Full-page background image:
  ```jsx
  <Image
    src="/images/background-image.webp"
    alt="Background description"
    fill
    style={{ objectFit: 'cover' }}
    priority
  />
  ```
- Overlay the background with a semi-transparent container

## Images

- Use the Next.js Image component for optimization
- For card-like images:
  ```css
  relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg
  shadow-[0_0_10px_rgba(255,255,255,0.3)]
  ```
- Use `priority` prop for above-the-fold images

## Animations and Transitions

- Use subtle hover effects on interactive elements
- Implement smooth transitions for state changes:
  ```css
  transition-colors duration-200
  ```

## Accessibility

- Ensure sufficient color contrast for readability
- Use semantic HTML elements
- Provide descriptive alt text for images

## Responsive Design

- Design for mobile-first, then scale up for larger screens
- Use Tailwind's responsive classes to adjust layouts and font sizes

## Footer

- Background: `bg-gradient-to-r from-stone-900/90 via-neutral-800/90 to-slate-900/90`
- Border: `border-t border-stone-500`
- Shadow: `shadow-[0_0_15px_rgba(255,255,255,0.5)]`
- Text: `text-stone-200`
- Links: `text-amber-400 hover:text-amber-300`

This updated style guide reflects the dark, mysterious atmosphere of the Bigfoot War game, emphasizing the use of gradients, semi-transparent overlays, and pixel-style fonts. When implementing new features or components, refer to this guide to maintain consistency throughout the game.
