import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function SignIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams.get('registered') === 'true') {
      setSuccess('Registration successful! Please log in.')
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const result = await signIn('credentials', {
      username,
      password,
      redirect: false,
    })

    if (result?.error) {
      setError('Invalid username or password')
    } else {
      router.push('/main-menu')
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-green-900 via-brown-800 to-green-700">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/index-bg.webp"
          alt="Forest Background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      <Card className="w-full max-w-md mx-auto bg-stone-800/90 text-stone-200 border-2 border-stone-600 shadow-lg relative z-20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-4xl font-bold mb-2 text-amber-400 font-pixel">Sign In</CardTitle>
          <CardDescription className="text-stone-300 font-pixel text-xl">Enter your credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-6">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="username" className="text-stone-300 font-pixel text-xl">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="bg-stone-700 text-stone-200 border-stone-600 font-pixel text-xl p-6"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password" className="text-stone-300 font-pixel text-xl">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
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
            </div>
            {error && <p className="text-red-500 text-sm mt-2 font-pixel">{error}</p>}
            {success && <p className="text-green-500 text-sm mt-2 font-pixel">{success}</p>}
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
                Sign In
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