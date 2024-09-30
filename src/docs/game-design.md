# Bigfoot War - Game Design

## Introduction

**Bigfoot War** is a digital card game inspired by the classic card game War, but with a twist: Participants face off against an AI Opponent with powerful attacks while seeking to collect cards and win gold and experience. Use the traditional route to collect cards and win hands, or use the attack route to try to knock out the opponent. The game features different types of Bigfoots that the Player can choose from and battle against, with access to more powerful Bigfoots as they level up.

## Game Flow

### Game Pages Overview

| Splash Page | all access
-- | Login Page | all access
-- | Register Page | all access
-- | Release Notes | all access
| Main Menu | auth
-- | Bigfoot Selection | auth
-- | Match Selection | auth
-- | Match Log | auth
-- | Inventory | auth
-- | Shop | auth
-- | Achievements | auth
-- | Leaderboard | auth
-- | Statistics | auth
| Arena | auth
-- | Results | auth

### Splash Page
- **Purpose**: Introduce the game, allow users to quickly log in or register.
- **User Journey**:
  1. A visitor arrives at [bigfootwar.com](https://bigfootwar.com).
  2. The visitor is greeted with a minimalistic splash page featuring a prominent game logo and two clear options: Register or Login.
  3. Below the buttons is a brief game description and instructions on how to get started.
  **Links to**:
  - Login Page
  - Register Page
  - Release Notes

See:
- [Splash Page](src/docs/features/splash-page.md) for more details.

### Register Page
- **Purpose**: Allow users to register for the game.
- **User Journey**:
  1. The Player arrives at the Register page.
  2. The Player fills out the registration form and submits it.
  3. The Player is redirected to the Login page.

See:
- [Account Management](src/docs/features/account.md) for more details.

### Login Page
- **Purpose**: Allow users to login to the game.
- **User Journey**:
  1. The Player arrives at the Login page.
  2. The Player fills out the login form and submits it.
  3. The Player is redirected to the Main Menu.

  See:
- [Account Management](src/docs/features/account.md) for more details.

### Menu (Main Menu) Page
- **Purpose**: Main menu after logging in, providing quick access to the game.
- **User Journey**:
  1. The Player logs in and is taken to the **Menu** page.
  2. The Player selects an Opponent from the **Match Selection** list.
  3. The Player is taken to the **Arena** page.
- **Links to**:
  - [Match Selection](src/docs/features/match-selection.md)
  - [Arena](src/docs/features/arena-page.md)

See:
- [Menu Page](src/docs/features/menu-page.md) for more details.

### Arena - Main Game Page
Once they select a Match in, Players are taken to the **Arena** page, where they can begin the card game. 
- **Purpose**: The Arena is the main game page, where the Player can play the game. The Arena theme is based on the Opponent's selected Bigfoot character.
- **User Journey**:
  1. The Player selects a Match and enters the Arena.
  2. The Player draws and plays cards, collecting cards and attacking the Opponent.
  3. The Player wins or loses the game, and is taken to the **Results** page.
  **Links to**:
  - [Results](src/docs/features/results-page.md)

See:
- [Arena Page](src/docs/features/arena-page.md) for more details.

### Results - Game Results Page
  - **Purpose**: The Results page shows the outcome of the game and provides options to continue playing.
  - **User Journey**:
  1. The Player wins or loses the game, and is taken to the **Results** page.
  2. The Player can choose to replay the same Match or go back to the Menu.

  **Links to**:
  - [Match Selection](src/docs/features/match-selection.md)
  - [Menu](src/docs/features/menu-page.md)

See:
- [Results Page](src/docs/features/results-page.md) for more details.

### Match Log - Match Log Page
- The Match Log shows the Player's match history.
- The Match Log is displayed in a list of matches
  - **User Journey**:
  1. The Player can view their match history in the Match Log.
  2. The Player can click on a match to view more details about the match.

  **Links to**:
  - [Match Selection](src/docs/features/match-selection.md)
  - [Menu](src/docs/features/menu-page.md)

See:
- [Match Log](src/docs/features/match-log.md) for more details.

### Inventory - Inventory Page
  - **Purpose**: The Inventory page shows the Player's inventory.
  - **User Journey**:
  1. The Player can view the items in their inventory.
  2. The Player can click on an item to view more details about the item.

See:
- [Items](src/docs/features/items-and-inventory.md) for more details.

### Shop - Shop Page
  - **Purpose**: The Shop page allows the Player to purchase items with Gold.
  - **User Journey**:
  1. The Player can view the items available to purchase in the Shop.
  2. The Player can purchase an item by clicking on the item and then clicking the Purchase button.

See:
- [Shop Page](src/docs/features/shop-page.md) for more details.

### Acheivements Page
  - **Purpose**: The Acheivements page shows the achievements the Player has achieved.
  - **User Journey**:
  1. The Player can view the achievements they have achieved.
  2. The Player can click on an achievement to view more details about the achievement.

See:
- [Acheivements Page](src/docs/features/achievements-page.md) for more details. 

### Leaderboard Page
  - **Purpose**: The Leaderboard page shows the Leaderboard for the game.
  - **User Journey**:
  1. The Player can view the Leaderboard for the game.

See:
- [Leaderboard Page](src/docs/features/leaderboard-page.md) for more details.

### Statistics Page
  - **Purpose**: The Statistics page shows the statistics for the game.
  - **User Journey**:
  1. The Player can view the statistics for the game.

See:
- [Statistics Page](src/docs/features/statistics-page.md) for more details.


## Game Logic

See:
- [Arena](src/docs/features/arena.md) for more details.

### Matches
A game match is a single game session between two Participants. Players select a Match in the **Match Selection** page available from the Main Menu.

Players also select a Bigfoot character for them to use in the Match to play against the Opponent Bigfoot character.

See:
- [Bigfoot Character Selection](src/docs/features/bigfoot-character-selection.md) for more details.
- [Match Selection](src/docs/features/match-selection.md) for more details.
- [Match Log](src/docs/features/match-log.md) for more details.

### Basic Rules
- **Deck Setup**: Both the Player and AI Opponent start with a full 52-card deck, including two Jokers.
- **Turn Cycle**:
  1. Both Participants draw the top card from their respective decks.
  2. The higher card wins the round.
  3. When the Participant wins a round, they can choose to collect the cards or attack the Opponent.
  4. Collecting cards gives the Participant Gold and moves them closer to depleting the Opponent's deck.
  5. Attacking the Opponent deals damage and moves them closer to being knocked out.
    - Attacks earn less Gold than collecting cards.
    - The Participant only collects his own cards; the Opponent's cards are destroyed and removed from play.
  6. In case of a tie (War scenario), both Participants draw three additional cards, and the fourth card determines the winner.
  7. The game continues until one Participant collects all cards or the game ends by knockout.

- **Jokers**: Jokers act as wild cards and can amplify effects like Gold rewards or Attack power.

### Pre-Game Setup
- Players select their Bigfoot based on their level.
- Player selects the Match to play and enter the Arena.
- Player pays the Gold to play matches against locked Opponent Bigfoot characters.

### 1. Game Start
- Each Participant starts with 52 cards in their decks, including two Jokers.
- Both decks are shown face-down.
- The Player's Bigfoot is displayed on the battlefield.
- The AI's Bigfoot is displayed on the battlefield.

### 2. Drawing Cards
- On each turn, both the Player and AI draw a card.
- The Participant sees both cards in the battlefield area.
- The higher card wins.
- The winner can choose to collect the cards or attack the Opponent.
- Win cards are added to the Participant's win pile.

### 3. War Scenario
- If the cards drawn by both Participants are of the same rank:
  1. Both Participants draw three additional cards face down.
  2. A fourth card is drawn face up to determine the winner of the war.
  3. In case of another tie, the process repeats with additional cards drawn face down and up until a winner is determined.

### 4. Shuffling
- When a Participant runs out of cards in their draw deck, the win pile is automatically shuffled to become the new deck.

### 5. Knockout Victory
- If a Participant reduces their Opponent’s HP to zero through Attacks, they achieve a **knockout victory**, ending the game immediately.
- **Gold Bonus**: Knockout victories provide a large Gold bonus (e.g., 100 Gold).

### 6. Game End
- The game ends when one Participant collects all cards or the game ends by knockout.

## Game Features

### Attacks Feature
After winning a round, Participants can choose to Attack the Opponent’s Bigfoot instead of collecting the cards. The attack's effectiveness is based on the Bigfoot’s abilities, the suit of the winning card, and the card’s value.

See [Attacks](src/docs/features/attacks.md) for more details.

### Collecting Cards Feature
- **Gold Bonus**: Collecting cards earns more Gold than Attacks.
- **Collecting Cards**: Collects all cards played during the round, Player and Opponent.

See also:
- [Arena](src/docs/features/arena.md) for more details.

### Gold Feature

See also:
- [Gold](src/docs/features/gold.md) for more details.

#### Earning Gold
Gold is earned during gameplay through various actions:
- **Attacks**: Attacks yield Gold based on the card’s suit and value, but less than collecting cards.
- **Collecting Cards**: Earns more Gold than Attacks.
- **Knockout Victory**: Large Gold bonus (e.g., 100 Gold) for winning by knockout.
- **Achievements**: Earn Gold for achieving milestones, like completing a certain number of games or winning a certain number of rounds.

#### Using Gold
Gold can be used for:
1. **Purchasing items in the Shop**.
2. **Unlocking Matches against locked Opponent Bigfoot characters**.

### Player Levels Feature

See also:
- [Player Levels](src/docs/features/player-levels.md) for more details.

#### Leveling System
- XP bar showing Player's progress towards the next level.
- Wins and achievements unlock new Player Levels with new Matches and new Player Bigfoot Characters.
- Players start at **Level 1** with access to **Sasquatch** as their Player Bigfoot.
- Levels are displayed on a linear map, with waypoints for each Level.
- Players must defeat all Opponent Bigfoot characters at a Level in order to unlock the next Level.
- A Player needs to defeat an Opponent Bigfoot character in order to unlock that character in the game as the Player Bigfoot.

#### XP Feature
- As the Player levels up, they gain **XP** through winning games and attacking effectively. The higher the level, the more complex the abilities the Player can use.
- **Win a Match**: Gain a large amount of XP.
- **Defeat Opponent Bigfoot**: Gain XP for defeating an Opponent Bigfoot.
- **Win a Round**: Gain XP for winning a round.
- **Collect Cards**: Gain XP for collecting cards.
- **Attack Opponent**: Gain XP for attacking the Opponent.
- **Achievements**: Gain XP for achieving milestones, like completing a certain number of games or winning a certain number of rounds.

### Bigfoot Characters Feature

See also:
- [Bigfoot Characters](src/docs/features/bigfoot-characters.md) for more details.

#### Bigfoot Characters (Sample Progression)
- **Level 1**: Sasquatch (default Bigfoot)
- **Level 2**: Skunk Ape
- **Level 3**: Yowie
- **Level 4**: Yeti
- **Level 5**: Orang Mawas
- And so on, expanding to include different regional and mythical Bigfoots.

#### Bigfoot Character Abilities
Each Bigfoot Character has unique abilities tied to **Player Level**, allowing progression and strategy as the game progresses. Players unlock new Player Bigfoots and abilities as they level up. Here’s how these abilities could work:

- **Level 1 Bigfoot (e.g., Sasquatch)**: 
  - Basic abilities tied to the suits, but with no additional special effects.
  - Example ability: **Ground Smash** (Clubs): Deals damage and stuns for one turn.

- **Level 2 Bigfoot (e.g., Skunk Ape)**:
  - Special abilities tied to each suit unlock as the Player progresses.
  - Example ability: **Poison Cloud** (Spades): Poisons enemies over time.

- **Level 3 Bigfoot (e.g., Yowie)**: 
  - Special abilities that introduce defensive tactics.
  - Example ability: **Thorny Vines** (Diamonds): Reduces damage taken and reflects some damage to the Opponent.

- **Level 4 Bigfoot (e.g., Yeti)**: 
  - The Player unlocks new abilities related to ice and freezing mechanics.
  - Example ability: **Blizzard’s Fury** (Spades): Freezes all enemies and reduces their attack.

- **Level 5+ Bigfoots (e.g., Orang Mawas, Almas, etc.)**:
  - More complex abilities that combine attacks, defense, and utility. At this level, Players begin unlocking combinations of abilities, offering strategic depth.
  - Example ability: **Jungle Regeneration** (Hearts): Heal while also applying a poison to enemies.

#### Bigfoot Leveling Feature
- Each Bigfoot has a **Primary Ability** (tied to their theme) that scales as they progress, unlocking **Secondary Abilities** at higher levels.

#### Unlocking New Bigfoots and Their Abilities
- As the Player gains levels, new Bigfoot characters are unlocked, allowing access to new cards and abilities.
- Each Bigfoot may offer a unique twist in gameplay, pushing the Player to experiment with new strategies.
- Higher-level Bigfoots have more complex abilities, offering more tactical depth to the game as Players progress.

### Attacks and Special Abilities

See also:
- [Attacks](src/docs/features/attacks.md) for more details.

#### General Card-Based Attacks

Each card played (including its **suit** and **number**) will trigger specific effects based on the Participant’s Bigfoot character and the card's attributes. The suits will represent different playstyles, while the card number will modify the potency of that play.

Face cards represent stronger abilities and more strategic gameplay. They will have unique mechanics based on the Bigfoot’s **class** and **suit**. These can trigger unique attacks, defense mechanisms, or utility moves that are more powerful than the number cards.

Each Bigfoot character unlocks special abilities as the Player levels up. 

### Player Properties for Gameplay

See also:
- [Player Profiles](src/docs/features/player-profiles.md) for more details.

Players will have specific properties that affect gameplay:
1. **Experience Points (XP)**: Players earn XP by winning rounds and battles. Accumulating XP allows the Player to level up and unlock new Bigfoot characters.
2. **Level**: Player levels are tied to the number of games won and experience points earned. Higher levels unlock more Bigfoots and abilities.
3. **Points**: Players earn points through various gameplay actions and achievements. Points contribute to leaderboards and can be used for special rewards.
4. **Bigfoot Selection**: As Players progress, they unlock more powerful Bigfoots with unique stats and abilities.
5. **Win Pile Management**: Players must strategically decide when to collect cards into their win pile and when to risk attacking.

### Bigfoot Character Properties for Gameplay

See also:
- [Bigfoot Characters](src/docs/features/bigfoot-characters.md) for more details.

- **Name**: The name of the Bigfoot character (e.g. Sasquatch, Skunk Ape, Yowie, Yeti, Orang Mawas, etc.)
- **Class**: Dwarf, Squatch, or Giant
- **Level**: The level at which the Bigfoot character is unlocked.
- **Primary Ability**: The unique ability of the Bigfoot character.
- **Secondary Ability**: The secondary ability of the Bigfoot character.
- **HP**: The health points of the Bigfoot character, associated with their class and level. Determines how much damage they can take.
    - **Dwarf**: low
    - **Squatch**: medium
    - **Giant**: high
- **Attack**: The attack of the Bigfoot character, associated with their class and level. Determines how much damage they can deal.
    - **Dwarf**: low
    - **Squatch**: medium
    - **Giant**: high
- **Defense**: The defense of the Bigfoot character, associated with their class and level. Determines how much damage they can absorb.
    - **Dwarf**: high
    - **Squatch**: medium
    - **Giant**: low
- **Luck**: The luck of the Bigfoot character, associated with their class and level. Influences the amount of Gold and XP earned.
    - **Dwarf**: high
    - **Squatch**: medium
    - **Giant**: low

### Points Feature

See also:
- [Points](src/docs/features/points.md) for more details.

The Points System adds an additional layer of progression and competition to Bigfoot War. Points are separate from XP and Gold, serving as a measure of overall player achievement and skill.

#### Earning Points
Players can earn points through various actions and achievements:

1. **Gameplay Actions**:
   - Winning a round: 1 point
   - Winning a War scenario: 3 points
   - Winning a match: 10 points
   - Knockout victory: 15 points
   - Successfully attacking the opponent: 2 points
   - Collecting cards: 1 point per card collected

2. **Achievements**:
   - Unlocking a new Bigfoot character: 50 points
   - Reaching a new player level: 25 points
   - Winning streak bonuses: 5 points for every consecutive win (resets on loss)
   - Completing daily challenges: 10-30 points depending on difficulty

3. **Special Events**:
   - Participating in seasonal events: 20 points
   - Ranking in top positions during events: 50-100 points

#### Using Points
Points serve multiple purposes in the game:

1. **Leaderboards**: Players' total points contribute to their position on global and friend leaderboards.

2. **Seasonal Rewards**: At the end of each season (e.g., monthly), players receive rewards based on their point totals.

3. **Exclusive Content**: Certain cosmetic items or special Bigfoot variants may be unlocked by reaching specific point thresholds.

4. **Matchmaking**: Points can be used as a factor in matchmaking to ensure fair and competitive matches.

#### Displaying Points
- The player's current point total is displayed prominently on their profile and the main menu.
- A breakdown of points earned is available in the player's match history and achievement log.

This Points System adds an extra dimension to player progression and provides additional goals for players to strive for beyond just leveling up and earning Gold.

### Leaderboard System

See also:
- [Leaderboard](src/docs/features/leaderboard.md) for more details.

The Leaderboard System provides a competitive aspect to Bigfoot War, allowing players to compare their performance with others on various metrics.

#### Types of Leaderboards

1. **Global Leaderboard**:
   - Ranks all players based on their total points.
   - Updated in real-time as players earn or lose points.
   - Displays the top 100 players.

2. **Friend Leaderboard**:
   - Shows the ranking of the player and their friends.
   - Encourages friendly competition and social interaction.

3. **Seasonal Leaderboard**:
   - Resets at the beginning of each season (e.g., monthly).
   - Provides a fresh start for competition regularly.
   - Offers special rewards for top performers at the end of each season.

4. **Bigfoot-specific Leaderboards**:
   - Separate leaderboards for each Bigfoot character.
   - Ranks players based on their performance with specific Bigfoots.

5. **Achievement Leaderboard**:
   - Ranks players based on the number and difficulty of achievements completed.

#### Leaderboard Components

Each leaderboard entry typically includes:
- Player's rank
- Player's username
- Player's Bigfoot avatar
- Player's level
- Player's total points (or relevant metric for the specific leaderboard)
- Change in rank since last update (e.g., up or down arrows)

#### Leaderboard Page

The Leaderboard page accessible from the Main Menu includes:
- Tabs to switch between different leaderboard types
- Search function to find specific players
- Filters (e.g., by region, level range)
- The player's current rank and nearby competitors
- Option to view detailed stats for each player on the leaderboard

#### Leaderboard Updates

- Global and Friend Leaderboards update in real-time.
- Seasonal Leaderboards update daily to prevent constant fluctuations.
- Players receive notifications when they achieve a significant rank improvement.

#### Leaderboard Rewards

1. **Seasonal Rewards**:
   - Top players on the Seasonal Leaderboard receive exclusive rewards.
   - Rewards may include special Bigfoot skins, titles, or in-game currency.

2. **Achievement Milestones**:
   - Players earn rewards for reaching certain ranks on the Global Leaderboard.
   - Milestones might be set at ranks like 1000, 500, 100, 50, 10, and 1.

3. **Bigfoot-specific Rewards**:
   - Top players on each Bigfoot-specific leaderboard receive character-specific rewards.

The Leaderboard System adds a competitive element to Bigfoot War, encouraging players to improve their skills and engage with the game regularly. It also provides additional goals for players to strive for beyond individual match victories.

## Terminology

Here is a list of the key terms used throughout **Bigfoot War**:

- **Action**: Any move or interaction a Participant can take during their turn.
- **Attack**: A combat action a Participant can choose instead of collecting cards after winning a round. The nature of the attack is based on the Bigfoot’s abilities and the card played.
- **Bigfoot Ability**: The unique power or bonus that a selected Bigfoot provides during gameplay.
- **Bigfoot**: A mythical creature that represents a Participant in the game, each with its own abilities and characteristics.
- **Card Battle**: The individual match-up between the Participant’s card and the Opponent’s card during each turn.
- **Deck**: The set of cards controlled by each Participant at the start of a game, including Jokers.
- **Draw**: The action of pulling a card from the top of the Participant's deck to play in a round.
- **Experience (XP)**: A measure of progress earned by the Player through winning rounds and games. XP increases the Player's level and unlocks new Bigfoot characters and abilities.
- **Game Session**: The entirety of a game that begins with a Participant’s Bigfoot selection and ends when one Participant wins or the session is ended.
- **Gold**: The in-game currency that Participants can earn through gameplay, such as by winning rounds or achieving certain milestones.
- **Health Points (HP)**: A measure of the Bigfoot’s vitality. When a Participant's HP reaches zero, they lose the match.
- **Jokers**: Special wild cards included in each deck that trigger unique effects during gameplay. Each deck contains two Jokers.
- **Level**: A numeric representation of the Player’s overall progression, which dictates the Bigfoots they can access and the abilities they can use.
- **Match**: A game session between two Participants.
- **Opponent**: The AI-controlled agent that the Player competes against.
- **Opponent Bigfoot**: The Bigfoot character controlled by the Opponent. The Bigfoot Character the Opponent can use is based on their level.
- **Participant**: A generic term used to describe both the Player and the Opponent.
- **Player**: The registered user who is playing the game.
- **Player Bigfoot**: The Bigfoot character controlled by the Player. The Bigfoot character the Player can select is based on their level.
- **Play Area**: The central section of the game interface where both cards are placed during each card battle.
- **Primary Ability**: The unique ability of a Bigfoot character that is tied to their theme and scales as they progress.
- **Round**: A series of turns leading to the exhaustion of one or both Participants' decks, potentially involving multiple card battles and War scenarios.
- **Secondary Ability**: A secondary ability of a Bigfoot character that is unlocked at higher levels.
- **Tie**: The situation when both Participants draw a card of equal value, triggering a War Scenario.
- **Turn**: The process where both Participants simultaneously draw a card, and a winner is determined based on the higher card.
- **Victory Condition**: The condition in which a Participant wins the game, typically by collecting all of the cards.
- **War Deck**: The stack of cards that is used exclusively during a War Scenario.
- **War Scenario**: The game mechanic triggered when both Participants draw cards of the same rank, requiring additional cards to break the tie.