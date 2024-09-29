import { Button } from "../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import Image from "next/image"
import Link from "next/link"
import Head from 'next/head'

export default function SplashPage() {
  return (
    <>
      <Head>
        <title>Bigfoot War - Card Battle Game</title>
        <meta name="description" content="Battle AI opponents in this thrilling card game featuring mythical Bigfoot creatures!" />
      </Head>
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
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        {/* Content */}
        <Card className="w-full max-w-4xl bg-stone-800/80 text-stone-200 border-2 border-stone-600 shadow-lg relative z-20 backdrop-blur-sm">
          <CardHeader className="text-center p-0">
            <h1 className="text-6xl font-bold mb-4 text-amber-400 font-pixel relative z-10 transform -rotate-2 skew-x-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Bigfoot War!
            </h1>
            <div className="relative w-full h-48 mb-6">
              <Image
                src="/images/bigfoot-war-logo.png"
                alt="Bigfoot War Logo"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
                priority
              />
            </div>
            <p className="text-xl font-pixel">
              Battle opponents in this fast-paced card game featuring mythical Bigfoot creatures!
            </p>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-6 font-pixel">
              Collect cards, unleash powerful attacks, and become the ultimate Bigfoot warrior.
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <Button asChild variant="default" className="bg-green-700 hover:bg-green-600 text-stone-200 border-2 border-stone-400 font-pixel">
                <Link href="/register">Register</Link>
              </Button>
              <Button asChild variant="outline" className="bg-stone-700 hover:bg-stone-600 text-stone-200 border-2 border-stone-400 font-pixel">
                <Link href="/login">Login</Link>
              </Button>
            </div>
            <Card className="bg-stone-700/50 border-2 border-stone-600">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-400 font-pixel">How to Get Started:</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside text-left font-pixel text-sm">
                  <li>Register for a new account or log in</li>
                  <li>Choose your Bigfoot character</li>
                  <li>Select a match and enter the arena</li>
                  <li>Battle opponents, collect cards, and earn rewards!</li>
                </ol>
              </CardContent>
            </Card>
          </CardContent>
          <CardFooter className="text-center text-xs font-pixel text-stone-400">
            <div className="w-full flex justify-between items-center">
              <span>© 2024 Bigfoot War. All rights reserved.</span>
              <Link href="/release-notes" className="text-amber-400 hover:text-amber-300">
                Release Notes
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}
