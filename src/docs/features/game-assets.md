# Game Assets Management

## Overview
This document outlines the approach for managing various game assets in Bigfoot War, including sound effects, music, images, and animations.

## Asset Types

### 1. Sound Effects
- Format: .mp3 or .ogg (for better compression)
- Storage: `/public/sounds/effects/`
- Naming convention: `action_description.mp3` (e.g., `card_draw.mp3`, `attack_club.mp3`)

### 2. Background Music
- Format: .mp3
- Storage: `/public/sounds/music/`
- Naming convention: `theme_description.mp3` (e.g., `main_theme.mp3`, `battle_intense.mp3`)

### 3. Images
- Format: .png or .webp (for better compression)
- Storage: `/public/images/`
- Subdirectories:
  - `/public/images/bigfoots/` for Bigfoot character images
  - `/public/images/cards/` for card images
  - `/public/images/backgrounds/` for background images
  - `/public/images/ui/` for UI elements
- Naming convention: `category_description.png` (e.g., `bigfoot_sasquatch.png`, `card_ace_hearts.png`)

### 4. Animations
- Format: CSS animations or Lottie JSON files
- Storage: 
  - CSS animations in their respective component files
  - Lottie animations in `/public/animations/`
- Naming convention for Lottie files: `animation_description.json` (e.g., `card_flip.json`, `bigfoot_attack.json`)

## Asset Loading and Management

### Sound Effects and Music
1. Create a sound manager using the Howler.js library:

```typescript
// src/utils/soundManager.ts
import { Howl } from 'howler';

class SoundManager {
  sounds: { [key: string]: Howl } = {};

  loadSound(key: string, src: string) {
    this.sounds[key] = new Howl({ src });
  }

  playSound(key: string) {
    if (this.sounds[key]) {
      this.sounds[key].play();
    }
  }

  // Add methods for stopping, pausing, and managing volume
}

export const soundManager = new SoundManager();
```

2. Load sounds in the appropriate components or pages:

```typescript
import { useEffect } from 'react';
import { soundManager } from '@/utils/soundManager';

// In component or page
useEffect(() => {
  soundManager.loadSound('cardDraw', '/sounds/effects/card_draw.mp3');
}, []);

// When playing a sound
soundManager.playSound('cardDraw');


### Images
1. Use Next.js Image component for optimized image loading:

```
typescript
import Image from 'next/image';
<Image
src="/images/bigfoots/sasquatch.png"
alt="Sasquatch"
width={200}
height={200}
/>
```

2. For background images, use CSS modules or Tailwind CSS:

```tsx
import styles from './Background.module.css';

const Background = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.backgroundImage}>
    {children}
  </div>
);

export default Background;


### Animations
1. For CSS animations, define them in the component's CSS module:

```css
@keyframes cardFlip {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(180deg); }
}

.card {
  animation: cardFlip 0.5s ease-in-out;
}


2. For Lottie animations, use the `lottie-react` library:

```typescript
import Lottie from 'lottie-react';
import animationData from '/public/animations/card_flip.json';

const CardFlipAnimation = () => (
  <Lottie animationData={animationData} />
);
```

## Asset Preloading
To ensure smooth gameplay, preload essential assets:

1. Create a preloader component:

```typescript
// src/components/Preloader.tsx
import { useEffect, useState } from 'react';
import { soundManager } from '@/utils/soundManager';

const assetsToPreload = [
  { type: 'sound', key: 'cardDraw', src: '/sounds/effects/card_draw.mp3' },
  { type: 'sound', key: 'mainTheme', src: '/sounds/music/main_theme.mp3' },
  // Add more assets here
];

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loaded = 0;
    assetsToPreload.forEach((asset) => {
      if (asset.type === 'sound') {
        soundManager.loadSound(asset.key, asset.src);
      }
      // Add more asset type handling here
      loaded++;
      setProgress((loaded / assetsToPreload.length) * 100);
    });
    onComplete();
  }, [onComplete]);

  return <div>Loading... {progress.toFixed(0)}%</div>;
}
```

2. Use the Preloader component in your app:

```typescript
// src/pages/app.tsx
import { useState } from 'react';
import { Preloader } from '@/components/Preloader';

function MyApp({ Component, pageProps }) {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  if (!assetsLoaded) {
    return <Preloader onComplete={() => setAssetsLoaded(true)} />;
  }

  return <Component {...pageProps} />;
}

export default MyApp;


## Considerations
- Implement lazy loading for non-essential assets to improve initial load times.
- Use appropriate compression techniques for images and audio files to reduce file sizes.
- Consider using sprite sheets for smaller UI images to reduce HTTP requests.
- Implement error handling for asset loading to gracefully handle missing or corrupted files.
- Regularly audit and optimize asset usage to maintain performance as the game grows.

By following this asset management approach, we can ensure efficient loading, organization, and usage of sound effects, music, images, and animations in Bigfoot War.
