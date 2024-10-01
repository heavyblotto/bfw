import { create } from 'zustand';
import { signOut, getSession } from 'next-auth/react';

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
  deleteAccount: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
  updateUser: (updatedUser) => set((state) => ({
    user: state.user ? { ...state.user, ...updatedUser } : null
  })),
  deleteAccount: async () => {
    try {
      const session = await getSession();
      if (!session) {
        throw new Error('No active session');
      }

      const response = await fetch('/api/auth/delete', {
        method: 'DELETE',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.user.id}` // Add this line
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete account');
      }

      await signOut({ callbackUrl: '/' });
    } catch (error) {
      console.error('Error deleting account:', error);
      throw error;
    }
  },
}));

export default useAuthStore;