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
      <div className="min-h-screen flex flex-col relative bg-black">
        <div className="relative z-10 flex-grow flex flex-col">
          <div className="flex-grow flex items-center justify-center p-4">
            <div className="container mx-auto px-4 py-6 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex-grow bg-stone-800/90 rounded-lg text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-amber-400 font-pixel text-center 
                             [text-shadow:_1px_1px_0_#000,_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_0_1px_0_#000,_1px_0_0_#000,_0_-1px_0_#000,_-1px_0_0_#000]
                             [filter:_drop-shadow(0_0_5px_rgba(245,158,11,0.8))]
                             mb-3 whitespace-nowrap">
                Bigfoot War!
              </h1>
              <div className="relative w-full h-0 pb-[56.25%] mb-3 overflow-hidden">
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
              <p className="text-stone-200 mb-6 font-pixel text-sm">
                Battle opponents in this fast-paced card game featuring mythical Bigfoot creatures!
                Collect cards, unleash powerful attacks, and become the ultimate Bigfoot warrior.
              </p>
              <div className="space-y-3">
                <Button asChild className="w-full bg-green-700 hover:bg-green-600 text-stone-200 border-2 border-stone-400 font-pixel text-sm py-2 px-3">
                  <Link href="/register">Register</Link>
                </Button>
                <Button asChild className="w-full bg-stone-700 hover:bg-stone-600 text-stone-200 border-2 border-stone-400 font-pixel text-sm py-2 px-3">
                  <Link href="/login">Login</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <footer className="w-full text-center p-3 bg-stone-800/90 text-stone-200">
            <p className="font-pixel text-xs">© 2024 Bigfoot War. All rights reserved.</p>
            <Link href="/release-notes" className="text-amber-400 hover:text-amber-300 font-pixel text-xs transition-colors duration-200">
              Release Notes
            </Link>
          </footer>
        </div>
      </div>
    </>
  )
}
