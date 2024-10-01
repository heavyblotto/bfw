import { create } from 'zustand'

interface PlayerProfileData {
  level: number
  xp: number
  gold: number
}

interface PlayerProfileStore {
  playerProfile: PlayerProfileData | null
  isLoading: boolean
  error: string | null
  fetchPlayerProfile: () => Promise<void>
  updatePlayerProfile: (data: Partial<PlayerProfileData>) => Promise<void>
}

const usePlayerProfileStore = create<PlayerProfileStore>((set) => ({
  playerProfile: null,
  isLoading: false,
  error: null,
  fetchPlayerProfile: async () => {
    set({ isLoading: true, error: null })
    try {
      const response = await fetch('/api/player-profile', { credentials: 'include' })
      if (response.ok) {
        const data = await response.json()
        set({ playerProfile: data, isLoading: false })
      } else if (response.status === 401) {
        throw new Error('Unauthorized. Please log in.')
      } else {
        throw new Error('Failed to fetch player profile')
      }
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false })
    }
  },
  updatePlayerProfile: async (data) => {
    set({ isLoading: true, error: null })
    try {
      const response = await fetch('/api/player-profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(data),
      })
      if (response.ok) {
        const updatedData = await response.json()
        set((state) => ({
          playerProfile: state.playerProfile ? { ...state.playerProfile, ...updatedData } : null,
          isLoading: false,
        }))
      } else if (response.status === 401) {
        throw new Error('Unauthorized. Please log in.')
      } else {
        throw new Error('Failed to update player profile')
      }
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false })
    }
  },
}))

export default usePlayerProfileStore