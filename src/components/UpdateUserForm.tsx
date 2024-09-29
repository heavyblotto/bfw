import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAuthStore from '@/stores/authStore';

export default function UpdateUserForm() {
  const { data: session } = useSession();
  const updateUser = useAuthStore((state) => state.updateUser);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('/api/auth/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to update user');
      }

      setSuccess('User updated successfully');
      if (email && session?.user) {
        updateUser({ 
          ...session.user, 
          email,
          username: session.user.username || undefined  // Add this line
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="email" className="text-stone-200 font-pixel">New Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="New email address"
          className="bg-stone-700 text-stone-200 border-stone-600 font-pixel"
        />
      </div>
      <div>
        <Label htmlFor="password" className="text-stone-200 font-pixel">New Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New password"
          className="bg-stone-700 text-stone-200 border-stone-600 font-pixel"
        />
      </div>
      <div>
        <Label htmlFor="confirmPassword" className="text-stone-200 font-pixel">Confirm New Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm new password"
          className="bg-stone-700 text-stone-200 border-stone-600 font-pixel"
        />
      </div>
      {error && <p className="text-red-500 font-pixel">{error}</p>}
      {success && <p className="text-green-500 font-pixel">{success}</p>}
      <Button type="submit" className="w-full bg-stone-700 hover:bg-stone-600 text-stone-200 border-2 border-stone-400 font-pixel text-xs">
        Update Account
      </Button>
    </form>
  );
}