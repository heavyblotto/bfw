# Bigfoot War - Game Design

## Introduction

**Bigfoot War** is a digital card game inspired by the classic card game War, but with a twist: Participants face off against an AI Opponent with powerful attacks while seeking to collect cards and win gold and experience. Use the traditional route to collect cards and win hands, or use the attack route to try to knock out the opponent. The game features different types of Bigfoots that the Player can choose from and battle against, with access to more powerful Bigfoots as they level up.

## Game Flow

### Splash Page
- **Components**: 
  - Registration button
  - Login button
  - Splash image
  - Brief game description
- **Purpose**: Introduce the game, allow users to quickly log in or register.
- **User Journey**:
  1. A visitor arrives at [bigfootwar.com](https://bigfootwar.com).
  2. The visitor is greeted with a minimalistic splash page featuring a prominent game logo and two clear options: Register or Login.
  3. Below the buttons is a brief game description and instructions on how to get started.

### Menu (Main Menu)
- **Components**:
  - Player **Profile** display
    - **Username**
    - **Bigfoot avatar** for selected Bigfoot (Sasquatch at Level 1)
    - **Level**
    - **XP display**
    - **Gold display**
    - **Inventory display**
  - **Bigfoot Selection**: Based on the Player's Level, they can choose from available Bigfoot characters to represent them in the game.
    - The selected Bigfoot character is the **Player Bigfoot**.
    - At **Level 1**, the Player’s Bigfoot is **Sasquatch**.
    - Higher levels unlock additional Bigfoot characters (e.g., Yeti, Skunk Ape, etc.).
  - **Match Selection**: Select from available Opponents to play, based on Player's level. Matches take place in the **Arena**.
    - Matches are displayed in a linear map (see below).
    - When the Player selects a Match, the **Arena** page is displayed.
  - **Shop** button
  - **Stats** button
  - **Account** button
  - **Logout** button
- **Purpose**: Main menu after logging in, providing quick access to the game.
- **User Journey**:
  1. The Player logs in and is taken to the **Menu** page.
  2. The Player selects an Opponent from the **Match Selection** list.
  3. The Player is taken to the **Arena** page.

### Arena - Main Game Page
Once logged in, users are taken to the **Arena** page, where they can begin the card game. The design includes:
- **Deck Area**: The deck of the Player’s Bigfoot and the AI Opponent’s Bigfoot.
- **Battlefield**: Where cards are played, showing the Player’s and Opponent’s cards during a round.
- **Controls**:
  - **Draw** button: Allows the Player to draw and play the next card.
  - **War Scenario (if tie)**: Trigger for the "War" phase.
  - **Attack/Collect Cards Option**: After winning a round, the winning Participant chooses between collecting the cards or attacking the Opponent.

## Game Logic

### Pre-Game Setup
- Players select their Bigfoot based on their level.
- Player selects the Match to play and enter the Arena

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

### Matches
- A match is a game session between two Participants.
- A Player selects a Bigfoot character to use in the Match (Player Bigfoot).
- Players can select from a list of available Matches.
- For each level, there Matches for each available Opponent Bigfoot character.
- Matches are displayed in a linear map with waypoints for each Player Level.
  - Players advance along the map by winning Matches within each Level.
  - Waypoints contain the Matches for each of the available Bigfoot character opponents for that Level.
  - For example, Level 1 is the first waypoint on the map, and contains the Matches for the Level 1 Bigfoot character (Sasquatch). At Level 2, the waypoint will contain the Matches for the Level 2 Bigfoot characters (Sasquatch and Skunk Ape).
  - When a Player reaches a waypoint, they can select the Match to play.
  - Players can repeat Matches to earn Gold and XP.
  - Players must defeat an Opponent Bigfoot character in order to unlock that Bigfoot character to be available as a Player Bigfoot in future Matches.
- When the Player selects an Opponent, the player can proceed to the **Arena** page to start the game.

### Attack vs. Collect Cards

#### Attacks
After winning a round, Participants can choose to Attack the Opponent’s Bigfoot instead of collecting the cards. The attack's effectiveness is based on the Bigfoot’s abilities, the suit of the winning card, and the card’s value.

- **Attack Mechanics**:
  - **Hearts**: Healing moves that restore HP.
  - **Clubs**: Offensive attacks that deal damage.
  - **Diamonds**: Defensive moves that reduce incoming damage or increase defense.
  - **Spades**: Poisonous or weakening attacks that reduce the Opponent’s abilities over time.
  - **Face Cards**: Trigger powerful special abilities specific to the Bigfoot character.

- **Knockout Victory**: If a Participant reduces the Opponent’s HP to Zero through Attacks, they win the game by knockout.
- **XP Bonus**: Attacks earn more XP than collecting cards.
- **Collecting Cards**: When a Participant Attacks, they collect only their own cards played during that round. The Opponent's cards are destroyed and removed from play.

#### Collecting Cards
- **Gold Bonus**: Collecting cards earns more Gold than Attacks.
- **Collecting Cards**: Collects all cards played during the round, Player and Opponent.

## Gold System

### Earning Gold
Gold is earned during gameplay through various actions:
- **Attacks**: Attacks yield Gold based on the card’s suit and value, but less than collecting cards.
- **Collecting Cards**: Earns more Gold than Attacks.
- **Knockout Victory**: Large Gold bonus (e.g., 100 Gold) for winning by knockout.
- **Achievements**: Earn Gold for achieving milestones, like completing a certain number of games or winning a certain number of rounds.

### Using Gold
Gold can be used for:
1. **Purchasing items in the Shop**.

## Bigfoot Levels & Selection

### Leveling System
- XP bar showing progress towards the next level.
- Wins and achievements unlock new Player Levels with new Matches and new Player Bigfoot Characters.
- Once a Bigfoot character is unlocked, the Participant can use it in future games as the Player Bigfoot.
- Players start at **Level 1** with access to **Sasquatch** as their Player Bigfoot.
- A Player needs to defeat an Opponent Bigfoot character in order to use that character in the game as the Player Bigfoot.

### Bigfoot Characters (Sample Progression)
- **Level 1**: Sasquatch (default Bigfoot)
- **Level 2**: Skunk Ape
- **Level 3**: Yowie
- **Level 4**: Yeti
- **Level 5**: Orang Mawas
- And so on, expanding to include different regional and mythical Bigfoots.

### Bigfoot Character Abilities
Each Bigfoot Characterhas unique abilities tied to **Player Level**, allowing progression and strategy as the game progresses. Players unlock new Player Bigfoots and abilities as they level up. Here’s how these abilities could work:

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

### Bigfoot Leveling System
- As the Player levels up, they gain **XP** through winning games and attacking effectively. The higher the level, the more complex the abilities the Player can use.
- Each Bigfoot has a **Primary Ability** (tied to their theme) that scales as they progress, unlocking **Secondary Abilities** at higher levels.
- **XP System**: 
  - **Win a Match**: Gain a large amount of XP.
  - **Successful Attacks**: Small XP bonuses for using strategic attacks.

### Unlocking New Bigfoots and Their Abilities
- As the Player gains levels, new Bigfoots are unlocked, allowing access to new cards and abilities.
- Each Bigfoot may offer a unique twist in gameplay, pushing the Player to experiment with new strategies.
- Higher-level Bigfoots have more complex abilities, offering more tactical depth to the game as Players progress.

## Game Mechanics

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

### General Card-Based Attacks

Each card played (including its **suit** and **number**) will trigger specific effects based on the Participant’s Bigfoot and the card's attributes. The suits will represent different playstyles, while the card number will modify the potency of that play.

#### Suits and Their General Functions
1. **Hearts (Healing)**
   - Healing actions that recover the health of the Participant's Bigfoot.
   - Higher-numbered cards increase the amount of HP restored.
2. **Clubs (Offensive Attacks)**
   - Physical and aggressive attacks that damage the Opponent’s Bigfoot.
   - Higher-numbered cards increase damage output.
3. **Diamonds (Defensive Plays)**
   - Defensive actions that boost the Participant’s defense, shielding them from damage or reducing damage taken.
   - Higher-numbered cards increase the strength or duration of the defense.
4. **Spades (Status and Special Effects)**
   - Cards that trigger status effects (e.g., poison, stuns, debuffs, buffs, etc.) or special tactical actions.
   - Higher-numbered cards increase the potency or length of the effect.

#### Number Cards (2-10)
The number of the card influences the strength of the action performed. For example:
- **2**: Minor effect (small heal, low damage, short-duration effect).
- **10**: Major effect (large heal, high damage, long-duration effect).

The attacks and abilities will scale depending on the card number drawn. Here's an example for each suit:

- **Hearts (Healing)**: 
   - 2 of Hearts: Heal 2 HP.
   - 10 of Hearts: Heal 10 HP.

- **Clubs (Offensive Attacks)**: 
   - 2 of Clubs: Deal 2 damage.
   - 10 of Clubs: Deal 10 damage.

- **Diamonds (Defensive Plays)**: 
   - 2 of Diamonds: Increase defense by 2 points for 1 turn.
   - 10 of Diamonds: Increase defense by 10 points for 3 turns.

- **Spades (Status Effects)**: 
   - 2 of Spades: Apply a minor poison that deals 1 damage over time.
   - 10 of Spades: Apply a strong poison that deals 5 damage over time.

### Special Abilities for Face Cards

Face cards represent stronger abilities and more strategic gameplay. They will have unique mechanics based on the Bigfoot’s **class** and **suit**. These can trigger unique attacks, defense mechanisms, or utility moves that are more powerful than the number cards.

#### Jack, Queen, King, and Ace Abilities
1. **Jack**: Aggressive multipliers or fast-paced attacks.
   - **Hearts (Jack)**: Strong healing ability that may heal other conditions like status effects or add a temporary HP boost.
   - **Clubs (Jack)**: Rapid, multi-hit attack that targets a single opponent multiple times.
   - **Diamonds (Jack)**: Instant defense boost with a small counterattack on the Opponent.
   - **Spades (Jack)**: A quick status effect (e.g., freeze or stun) that disables the Opponent for one turn.

2. **Queen**: AoE (Area of Effect) abilities or defensive buffs.
   - **Hearts (Queen)**: Heal all participants slightly or create a large, temporary HP boost.
   - **Clubs (Queen)**: An AoE attack that hits all enemies with moderate damage.
   - **Diamonds (Queen)**: An AoE defensive shield that boosts the Participant’s defense while weakening Opponent attacks.
   - **Spades (Queen)**: AoE debuff (e.g., poison all enemies or reduce their attack power for several turns).

3. **King**: Ultimate ability for each suit.
   - **Hearts (King)**: A massive healing burst that completely heals the Participant’s Bigfoot.
   - **Clubs (King)**: Devastating single-target attack that deals massive damage.
   - **Diamonds (King)**: Create a shield that lasts for multiple turns, reducing damage significantly.
   - **Spades (King)**: Apply a powerful, long-lasting debuff that severely hampers the Opponent (e.g., poison, reduce defense, or block healing).

4. **Ace**: The most powerful, game-changing cards that shift the balance of power.
   - **Hearts (Ace)**: Full HP recovery and cleanse all status effects.
   - **Clubs (Ace)**: Deal a massive AoE attack that targets all enemies.
   - **Diamonds (Ace)**: Create an unbreakable shield for several turns, nullifying all damage.
   - **Spades (Ace)**: Unleash a catastrophic status effect (e.g., freeze all enemies for two turns, poison all enemies).

### Special Attacks for Jokers
- **Joker (Fate's Hand)**: A Joker in Bigfoot War is a wildcard that can change the outcome of a battle. It allows the Participant to:
  1. **Replay a Round**: Draw a new card to try again.
  2. **Boost Stats**: Grant a temporary boost in attack or defense depending on the situation.
  3. **Ultimate Attack**: Inflict massive damage or perform a powerful move depending on the Bigfoot's abilities and current level.

### Bigfoot-Specific Abilities
Each Bigfoot unlocks special abilities as the Player levels up. Some examples include:
- **Level 1 (Sasquatch)**: "Forest Regeneration" - Sasquatch can heal every time they play a Hearts card.
- **Level 5 (Yeti)**: "Blizzard Fury" - Each Clubs card attack has a chance to freeze the Opponent for one turn.
- **Level 10 (Skunk Ape)**: "Swamp Strike" - Playing Spades causes additional poison damage over time.

### Player Properties for Gameplay
Players will have specific properties that affect gameplay:
1. **Experience Points (XP)**: Players earn XP by winning rounds and battles. Accumulating XP allows the Player to level up and unlock new Bigfoot characters.
2. **Level**: Player levels are tied to the number of games won and experience points earned. Higher levels unlock more Bigfoots and abilities.
3. **HP (Health Points)**: A Player’s Bigfoot will have a set amount of health, which can increase based on level and abilities.
4. **Bigfoot Selection**: As Players progress, they unlock more powerful Bigfoots with unique stats and abilities.
5. **Attack/Defense Buffs**: Depending on the cards played, Players can increase their attack power, defense, or unlock temporary buffs.
6. **Win Pile Management**: Players must strategically decide when to collect cards into their win pile and when to risk attacking.

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