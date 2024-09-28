// THIS IS AN EXAMPLE STORE. IT IS NOT CURRENTLY USED.

import { create } from 'zustand'

// Define your game state types
interface Card {
  id: string;
  name: string;
  // Add other card properties
}

interface Player {
  id: string;
  name: string;
  hand: Card[];
  // Add other player properties
}

interface GameState {
  cards: Card[];
  players: Player[];
  currentTurn: number;
  playCard: (playerId: string, cardId: string) => void;
  drawCard: (playerId: string) => void;
  endTurn: () => void;
  // Add other game state properties and actions
}

// Create the store
const useGameStore = create<GameState>((set) => ({
  cards: [],
  players: [],
  currentTurn: 0,

  playCard: (playerId, cardId) => set((state) => {
    // Find the player and the card
    const player = state.players.find(p => p.id === playerId);
    const cardIndex = player?.hand.findIndex(c => c.id === cardId);

    if (player && cardIndex !== undefined && cardIndex !== -1) {
      // Remove the card from the player's hand
      const newHand = [...player.hand];
      const [playedCard] = newHand.splice(cardIndex, 1);

      // Update the player's hand and the played cards
      const newPlayers = state.players.map(p => 
        p.id === playerId ? { ...p, hand: newHand } : p
      );

      return {
        ...state,
        players: newPlayers,
        cards: [...state.cards, playedCard],
      };
    }
    return state;
  }),

  drawCard: (playerId) => set((state) => {
    // Implement draw card logic
    // This is a simplified version, you'll need to adjust based on your game rules
    const newCard: Card = { id: `card-${Date.now()}`, name: 'New Card' };
    const newPlayers = state.players.map(p => 
      p.id === playerId ? { ...p, hand: [...p.hand, newCard] } : p
    );

    return {
      ...state,
      players: newPlayers,
    };
  }),

  endTurn: () => set((state) => ({
    currentTurn: (state.currentTurn + 1) % state.players.length,
  })),

  // Implement other actions
}))

export default useGameStore
