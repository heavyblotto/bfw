'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import Image from 'next/image'
import { X } from 'lucide-react'
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
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
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
      
      <Card className="w-full max-w-md mx-auto bg-stone-800/80 text-stone-200 border-2 border-stone-600 shadow-lg relative z-20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold mb-2 text-amber-400 font-pixel">Login to Bigfoot War</CardTitle>
          <CardDescription className="text-stone-300 font-pixel">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className="text-stone-300 font-pixel">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" required className="bg-stone-700 text-stone-200 border-stone-600" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className="text-stone-300 font-pixel">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    required
                    className="bg-stone-700 text-stone-200 border-stone-600"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-4 w-4 text-stone-400" />
                    ) : (
                      <EyeIcon className="h-4 w-4 text-stone-400" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6 gap-4">
              <Button
                type="button"
                variant="destructive"
                className="flex-1 font-pixel"
                onClick={() => router.push('/')}
              >
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="flex-1 bg-green-700 hover:bg-green-600 text-stone-200 border-2 border-stone-400 font-pixel"
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
