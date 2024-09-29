# *Bigfoot War* Style Guide

The game's visual identity blends retro pixel art with immersive, natural elements, ensuring the player feels fully embedded in a world where Bigfoot-like creatures roam dense forests, misty swamps, and desolate mountain peaks.

Our UI and HUD design reflects these natural, earthy environments, using textures and colors that mimic wood, stone, moss, and dirt. The goal is to create an interface that is not only functional but also seamlessly integrated into the game's setting—every button, health bar, and ability icon should feel like it belongs in the wilds.

The aesthetic focuses on delivering a minimalistic but efficient user experience, where essential gameplay information is presented clearly but without disrupting immersion. Interactions with the UI should feel organic and in tune with the natural environments, emphasizing accessibility while maintaining an adventurous, raw, and mythic quality throughout.

## Color Palette

- Primary Colors: 
  - Green: `#15803d` (bg-green-700)
  - Brown: `#78350f` (bg-brown-800)
  - Stone: `#1c1917` (bg-stone-900)
- Accent Colors:
  - Amber: `#fbbf24` (text-amber-400)
  - Stone: `#e7e5e4` (text-stone-200)

## Typography

- Primary Font: "Press Start 2P" (pixel font)
- Fallback Font: sans-serif
- Font Sizes:
  - Headings: text-4xl (36px)
  - Subheadings: text-2xl (24px)
  - Body Text: text-xl (20px)
  - Small Text: text-sm (14px)

## UI Components

### Cards
- Background: `bg-stone-800/90` (semi-transparent dark stone)
- Border: `border-2 border-stone-600`
- Text Color: `text-stone-200`
- Shadow: `shadow-lg`

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
- Headings: `text-amber-400`
- Body Text: `text-stone-200`
- Muted Text: `text-stone-400`

## Layout

- Use flexbox for centering and alignment
- Maintain consistent padding and margins
- Utilize `max-w-4xl` for content width on larger screens

## Backgrounds

- Use gradient backgrounds with natural colors:
  ```css
  bg-gradient-to-br from-green-900 via-brown-800 to-green-700
  ```
- Overlay textures or patterns for added depth:
  ```css
  bg-[url('data:image/svg+xml;base64,...')] opacity-20
  ```

## Images

- Use the Next.js Image component for optimization
- Apply `object-fit: cover` for consistent image sizing
- Use `priority` prop for above-the-fold images

## Animations and Transitions

- Use subtle hover effects on interactive elements
- Implement smooth transitions for state changes
- Consider adding subtle particle effects or ambient animations to enhance the wilderness theme

## Accessibility

- Ensure sufficient color contrast for readability
- Use semantic HTML elements
- Provide descriptive alt text for images

## Responsive Design

- Design for mobile-first, then scale up for larger screens
- Use Tailwind's responsive classes to adjust layouts and font sizes

This style guide aims to create a consistent, immersive, and visually appealing experience that aligns with the Bigfoot War theme. When implementing new features or components, refer to this guide to maintain consistency throughout the game.
