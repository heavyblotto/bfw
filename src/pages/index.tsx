import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (session) {
    router.push('/main-menu')
    return null
  }

  return (
    <>
      <Head>
        <title>Bigfoot War - Card Battle Game</title>
        <meta name="description" content="Battle opponents in this fast-paced card game featuring mythical Bigfoot creatures!" />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <Image
          src="/images/index-bg.webp"
          alt="Forest background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="relative z-10 bg-stone-800/90 p-8 rounded-lg text-center max-w-3xl w-full">
          <h1 className="text-6xl font-bold mb-4 text-amber-400 font-pixel whitespace-nowrap">Bigfoot War!</h1>
          <div className="relative w-full h-0 pb-[56.25%] mb-4 overflow-hidden">
            <Image
              src="/images/bigfoot-war-logo.png"
              alt="Bigfoot Battle"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              priority
            />
          </div>
          <p className="text-stone-200 mb-4 font-pixel">
            Battle opponents in this fast-paced card game featuring mythical Bigfoot creatures!
            Collect cards, unleash powerful attacks, and become the ultimate Bigfoot warrior.
          </p>
          <div className="space-x-4 mb-4">
            <Button asChild className="bg-green-700 hover:bg-green-600 text-stone-200 border-2 border-stone-400 font-pixel">
              <Link href="/register">Register</Link>
            </Button>
            <Button asChild className="bg-stone-700 hover:bg-stone-600 text-stone-200 border-2 border-stone-400 font-pixel">
              <Link href="/login">Login</Link>
            </Button>
          </div>
          <div className="bg-stone-900/80 p-4 rounded-lg mt-4">
            <h2 className="text-2xl font-bold mb-2 text-amber-400 font-pixel">How to Get Started:</h2>
            <ol className="text-stone-200 text-left list-decimal list-inside font-pixel">
              <li>Register for a new account or log in</li>
              <li>Choose your Bigfoot character</li>
              <li>Select a match and enter the arena</li>
              <li>Battle opponents, collect cards, and earn rewards!</li>
            </ol>
          </div>
        </div>
      </div>
      <footer className="w-full text-center p-4 bg-stone-800/90 text-stone-200 mt-4">
        <p className="font-pixel text-sm">© 2024 Bigfoot War. All rights reserved.</p>
        <Link href="/release-notes" className="text-amber-400 hover:text-amber-300 font-pixel text-sm transition-colors duration-200">
          Release Notes
        </Link>
      </footer>
    </>
  )
}
