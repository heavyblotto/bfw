# Game Logic Design

## Overview
This document outlines the core game logic for Bigfoot War, detailing the flow of gameplay, key mechanics, and decision points.

## Game Flow

### Matches
- A match is a game session between two Participants.
- A Player selects a Bigfoot character to use in the Match (Player Bigfoot).
- Players can select from a list of available Matches.
- For each level, there Matches for each available Opponent Bigfoot character.
- Players pay Gold to play Matches against locked Opponent Bigfoot characters.
- Matches are displayed in a linear map with waypoints for each Player Level.
  - Players advance along the map by winning Matches within each Level.
  - Waypoints contain the Matches for each of the available Bigfoot character opponents for that Level.
  - For example, Level 1 is the first waypoint on the map, and contains the Matches for the Level 1 Bigfoot character (Sasquatch). At Level 2, the waypoint will contain the Matches for the Level 2 Bigfoot characters (Sasquatch and Skunk Ape).
  - When a Player reaches a waypoint, they can select the Match to play.
  - Players can repeat Matches to earn Gold and XP.
  - Players must defeat an Opponent Bigfoot character in order to unlock that Bigfoot character to be available as a Player Bigfoot in future Matches.
- When the Player selects a Match (and pays the Gold if the Opponent Bigfoot is locked), the player can proceed to the **Arena** page to start the game.

### Pre-Game Setup
1. Player selects their Bigfoot character based on their level.
2. Player chooses a Match to play and enters the Arena.
3. If the Match is against a locked Opponent Bigfoot, Player pays the required Gold.

### Game Start
1. Each Participant (Player and AI Opponent) starts with a deck of 52 cards, including two Jokers.
2. Both decks are shuffled and placed face-down.
3. Player and AI Bigfoot characters are displayed on the battlefield with their respective HP.

### Main Game Loop

#### 1. Drawing Cards
- Both Participants simultaneously draw a card from the top of their deck.
- The drawn cards are revealed in the Play Area.

#### 2. Determining the Winner
- Compare the values of the drawn cards.
- The Participant with the higher card value wins the round.
- In case of a tie, initiate the War Scenario.

#### 3. War Scenario (if tie occurs)
1. Both Participants place three cards face-down from their deck.
2. A fourth card is drawn and revealed.
3. The Participant with the higher fourth card wins all cards played in this War Scenario.
4. If another tie occurs, repeat the War Scenario.

#### 4. Winner's Action
The winning Participant chooses between two actions:
a. Collect Cards:
   - Add all played cards to their win pile.
   - Earn Gold based on the collected cards.
b. Attack:
   - Perform an attack based on the winning card's suit and value.
   - Collect only their own cards played during that round.
   - Opponent's cards are removed from play.
   - Earn XP based on the attack performed.

#### 5. Check for Game End Conditions
- If a Participant's deck is empty, they lose the game.
- If a Participant's HP reaches zero, they lose the game by knockout.

#### 6. Repeat
- If the game hasn't ended, return to step 1 (Drawing Cards).

### Post-Game
1. Calculate final Gold, XP, and Points earned.
2. Update Player's profile with new stats.
3. Check for level-up conditions and unlock new content if applicable.
4. Display game results and offer options to play again or return to the main menu.

## Key Mechanics

### Card Values and Suits
- Number cards (2-10): Face value
- Face cards: Jack (11), Queen (12), King (13), Ace (14)
- Suits: Hearts, Diamonds, Clubs, Spades

### Attack System
Attacks are based on the winning card's suit and value:
- Hearts: Healing actions
- Clubs: Offensive attacks
- Diamonds: Defensive moves
- Spades: Status effect attacks

The card's value determines the strength of the action.

### Joker Effects
- Black Joker: Gold multiplier for the current match
- Red Joker: XP multiplier for the current match

### Bigfoot Abilities
Each Bigfoot character has unique abilities that modify gameplay:
- Primary Ability: Always active
- Secondary Ability: Unlocked at higher levels

## Implementation Considerations

1. Create a GameState model to track the current state of the game.
2. Implement a turn-based system that alternates between Player and AI actions.
3. Develop an AI opponent with varying difficulty levels based on the Player's level.
4. Create a robust card management system for shuffling, drawing, and managing decks.
5. Implement the Attack system with different effects based on card suits and values.
6. Design a flexible ability system that can easily incorporate new Bigfoot abilities.
7. Develop a scoring system that calculates Gold, XP, and Points earned during gameplay.
8. Implement error handling and edge case management for various game scenarios.

## Next Steps

1. Create detailed flowcharts for the main game loop and sub-processes.
2. Develop a prototype of the core game logic using TypeScript.
3. Implement unit tests for each game mechanic and edge case.
4. Create an AI opponent with basic decision-making capabilities.
5. Integrate the game logic with the user interface components.
6. Implement save/load functionality for game state persistence.
7. Optimize performance for smooth gameplay, especially during War Scenarios.

By implementing this game logic, Bigfoot War will provide a balanced and engaging gameplay experience that combines elements of chance with strategic decision-making.
