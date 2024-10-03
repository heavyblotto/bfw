# Arena Page Design

### 1. **Layout Structure**
Layout to remain intuitive on mobile first layout, with clear priorities for information and actions. A **vertical stack** for mobile will help maintain readability and ease of interaction. Here’s a breakdown:

#### **Desktop Design (Horizontal Layout)**

#### **Mobile Design (Vertical Stack)**
On mobile, compress the layout into a single column view:
- **Top Section**: Show the opponent’s character and stats at the very top, followed by the player’s character and stats right beneath. This keeps things visible without cluttering the small screen.
- **Middle Section**: The play area and the cards will appear next, taking center stage. Small cards for the War scenario cards. Action buttons for the player to play cards, and collect cards or attack.
- **Bottom Section**: The game narrative and actions, which dynamically display the results of each round, gold/XP rewards, and game status.

### 2. **Interactive Elements**
To enhance user experience, make key elements interactive:
- **Tap-friendly Elements for Mobile**: Ensure that all elements are large enough to tap, and avoid overcrowding small screens by using collapsible sections (e.g., the narrative can collapse to show only the latest update but expand for more details).
- **Action Buttons**: Use large, tap-friendly buttons for actions like playing cards, collecting cards, and attacking. These buttons should have clear labels and be styled to stand out from the game background.

### 3. **Character and Stat Presentation for player and opponent**
- **Character Image with Stats**: Place the character's image in a bordered or circular frame with HP, attack, defense, and luck bars next to the image for easy access. The stats can be styled as:
  - **HP Bar**: Displayed as a horizontal bar, which can shrink/grow as health changes.
  - **Attack, Defense, Luck**: Represent these as either number values or small icons (like swords for attack, shields for defense, and dice for luck).
  
  Use tooltips or pop-ups when these stats change so that the user gets feedback on how gameplay is impacting their characters (e.g., “+5 attack due to card effect”).

### 4. **Play Area Design**
The play area is crucial since it's the focal point of each round. Consider these design ideas:
- **Card Reveal Animation**: Have an animation that flips the card. This adds excitement and visual flair.
- **War Scenario Handling**: Use small cards for the War scenario.
- **Deck and Win Pile**: Show simple card back images with a count (e.g., “Deck: 20 cards,” “Win Pile: 10 cards”) to keep users aware of how much is left in their decks.

### 5. **Game Narrative and Feedback**
The game narrative and player feedback are essential for immersion:
- **Dynamic Text Box**: Display a scrolling text box that details each action, from who won a round to the attacks made, damage dealt, and gold/XP earned. This box can be styled like a fantasy RPG log with icons or highlights for key events.
- **Progress Bars for XP and Gold**: Place these under the narrative box to track player progression visually.
- **Popup Notifications**: Use small popups or notifications to show important gameplay events like “Level Up!” or “Special Attack Activated!”

### 6. **Responsive UI for Desktop and Mobile**
Use CSS grid or flexbox to adapt to different screen sizes:
- **Desktop**: A three-column layout with characters on each side and the play area in the center.
- **Mobile**: A single-column layout, with each section stacked vertically and scaled down. Cards can be smaller, and stats can be collapsed or shown under a single tap.

### 7. **Visual Theme**
- Follow the current style guide for the game.
- **Pixel Art/Retro Style**: If you're going with the pixel art style for characters, use pixelated UI elements for consistency (buttons, frames, borders, etc.).

### Example Mockup Concept


#### **Mobile Layout**:
```
+-----------------+
| Opponent Character (Image + Stats) |
+-----------------+
| Player Character (Image + Stats)   |
+-----------------+
|        Play Area (Cards Laid)      |
+-----------------+
|    Action Log, Gold, XP, etc.      |
+-----------------+
```

---

This structure will keep the game engaging, visually clear, and easy to interact with on both desktop and mobile. Does this design approach match the feel you want for your game?