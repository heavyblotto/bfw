# Opponent and AI Design

## Overview
This document outlines the design for opponents and AI in Bigfoot War, detailing how the AI opponents function, their difficulty levels, and how they interact with the player throughout the game.

## Opponent Types

### 1. AI Opponents
- Controlled by the game's artificial intelligence.
- Available for single-player matches.
- Difficulty scales with player level and selected Bigfoot character.

### 2. Locked Bigfoot Characters
- Special AI opponents that represent new Bigfoot characters.
- Players must defeat these to unlock the character for their own use.
- Require Gold payment to challenge.

## AI Behavior

### Decision Making
The AI opponent makes decisions based on:
1. Current game state (cards in hand, HP, etc.)
2. Opponent's (player's) apparent strategy
3. AI difficulty level
4. Unique traits of the AI's Bigfoot character

### Strategy Adaptation
- AI adapts its strategy based on the player's actions.
- Higher difficulty AIs learn from previous matches against the same player.

## Difficulty Levels

### 1. Novice (Level 1)
- Makes mostly random decisions.
- Doesn't utilize advanced strategies or Bigfoot abilities effectively.
- Suitable for new players or those learning the game.

### 2. Intermediate (Levels 2-4)
- Makes more informed decisions based on card values and suits.
- Begins to use Bigfoot abilities strategically.
- Provides a moderate challenge for average players.

### 3. Advanced (Levels 5-7)
- Utilizes complex strategies involving card counting and prediction.
- Makes effective use of Bigfoot abilities and special cards (Face cards, Jokers).
- Challenging for experienced players.

### 4. Expert (Levels 8+)
- Employs advanced tactics and long-term strategies.
- Maximizes the use of Bigfoot abilities and special cards.
- Adapts quickly

## AI Progression

As players advance through levels:
1. AI opponents become more challenging.
2. New Bigfoot characters are introduced as