'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import { EyeIcon, EyeOffIcon, X } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle login logic here
    console.log('Login submitted')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-green-900 via-brown-800 to-green-700">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/index-bg.webp"
          alt="Forest Background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
      </div>
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      <Card className="w-full max-w-md mx-auto bg-stone-800/90 text-stone-200 border-2 border-stone-600 shadow-lg relative z-20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-4xl font-bold mb-2 text-amber-400 font-pixel">Login</CardTitle>
          <CardDescription className="text-stone-300 font-pixel text-xl">Enter your credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-6">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="username" className="text-stone-300 font-pixel text-xl">Username</Label>
                <Input id="username" type="text" placeholder="Enter your username" required className="bg-stone-700 text-stone-200 border-stone-600 font-pixel text-xl p-6" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password" className="text-stone-300 font-pixel text-xl">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
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
            </div>
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
                Login
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4">
          <Link href="/forgot-password" className="text-sm text-stone-400 hover:underline font-pixel">
            Forgot your password?
          </Link>
          <div className="text-sm text-stone-400 font-pixel">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="font-medium text-amber-400 hover:underline">
              Register here
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
