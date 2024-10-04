'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import { EyeIcon, EyeOffIcon, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function RegisterForm() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      })

      if (response.ok) {
        router.push('/login?registered=true')
      } else {
        const data = await response.json()
        setError(data.message || 'Registration failed')
      }
    } catch (err) {
      console.error('Registration error:', err)
      setError('An error occurred during registration')
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-black">
      <Card className="container mx-auto px-4 py-6 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex-grow bg-stone-800/90 text-stone-200 border-2 border-stone-600 shadow-lg relative z-20">
        <CardHeader>
          <CardTitle className="text-4xl font-bold mb-2 text-amber-400 font-pixel">Register</CardTitle>
          <CardDescription className="text-stone-300 font-pixel text-xl">Create your Bigfoot War account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-6">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="username" className="text-stone-300 font-pixel text-xl">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Choose a username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="bg-stone-700 text-stone-200 border-stone-600 font-pixel text-xl p-6"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email" className="text-stone-300 font-pixel text-xl">Email (optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-stone-700 text-stone-200 border-stone-600 font-pixel text-xl p-6"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password" className="text-stone-300 font-pixel text-xl">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-stone-700 text-stone-200 border-stone-600 font-pixel text-xl p-6"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-6 w-6 text-stone-400" />
                    ) : (
                      <EyeIcon className="h-6 w-6 text-stone-400" />
                    )}
                  </Button>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="confirmPassword" className="text-stone-300 font-pixel text-xl">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="bg-stone-700 text-stone-200 border-stone-600 font-pixel text-xl p-6"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                  >
                    {showConfirmPassword ? (
                      <EyeOffIcon className="h-6 w-6 text-stone-400" />
                    ) : (
                      <EyeIcon className="h-6 w-6 text-stone-400" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mt-2 font-pixel">{error}</p>}
            <div className="flex justify-between mt-8 gap-4">
              <Button
                type="button"
                variant="destructive"
                className="flex-1 font-pixel text-xl py-6"
                onClick={() => router.push('/')}
              >
                <X className="h-6 w-6 mr-2" />
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="flex-1 bg-green-700 hover:bg-green-600 text-stone-200 border-2 border-stone-400 font-pixel text-xl py-6"
              >
                Register
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <div className="text-sm text-stone-400 font-pixel">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-amber-400 hover:underline">
              Login here
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
