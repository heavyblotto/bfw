import { create } from 'zustand'

type User = {
  id: string
  username: string | null  // Change this line
  email?: string | null
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
  updateUser: (updatedUser: Partial<User>) => void
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
  updateUser: (updatedUser) => set((state) => ({
    user: state.user ? { ...state.user, ...updatedUser } : null
  })),
}))

export default useAuthStore