import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { Bigfoot } from '@/types/bigfoot'
import Image from 'next/image'
import { getBigfootImagePath } from '@/utils/bigfootUtils'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function BigfootDisplay() {
  const { data: session } = useSession()
  const [bigfoot, setBigfoot] = useState<Bigfoot | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (session) {
      fetchBigfoot()
    }
  }, [session])

  const fetchBigfoot = async () => {
    try {
      const response = await fetch('/api/player/bigfoot', { credentials: 'include' })
      if (response.ok) {
        const data = await response.json()
        setBigfoot(data)
      } else {
        throw new Error('Failed to fetch Bigfoot data')
      }
    } catch (error) {
      setError((error as Error).message)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) return <div className="text-stone-200 font-pixel text-xl">Loading Bigfoot...</div>
  if (error) return <div className="text-red-500 font-pixel text-xl">Error: {error}</div>
  if (!bigfoot) return null

  return (
    <div className="bg-stone-800/90 p-6 rounded-lg mb-8 border-2 border-stone-600 shadow-lg">
      <h3 className="text-2xl font-bold text-amber-400 font-pixel mb-6">{bigfoot.name}</h3>
      <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6 mb-6">
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="relative w-64 h-64 mb-4 rounded-lg overflow-hidden border-2 border-stone-600">
            <Image
              src={getBigfootImagePath(bigfoot)}
              alt={bigfoot.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <p className="text-stone-400 font-pixel">Class: {bigfoot.class}</p>
        </div>
        <div className="w-full md:w-2/3 flex flex-col">
          <div className="bg-stone-700/50 p-4 rounded-lg mb-4 h-40 overflow-y-auto">
            <h5 className="text-lg font-bold text-amber-400 font-pixel mb-2">Description</h5>
            <p className="text-stone-200 font-pixel text-sm">{bigfoot.description}</p>
          </div>
          <div className="bg-stone-700/50 p-4 rounded-lg">
            <h5 className="text-lg font-bold text-amber-400 font-pixel mb-2">Stats</h5>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <StatItem label="Level" value={bigfoot.level} />
              <StatItem label="HP" value={bigfoot.hp} />
              <StatItem label="Attack" value={bigfoot.attack} />
              <StatItem label="Defense" value={bigfoot.defense} />
              <StatItem label="Luck" value={bigfoot.luck} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-6">
        <Button asChild className="flex-1 bg-stone-700 hover:bg-stone-600 text-stone-200 border-2 border-stone-400 font-pixel text-sm">
          <Link href="/bigfoot-selection">Change Bigfoot</Link>
        </Button>
        <Button 
          asChild 
          className="flex-1 bg-green-700 hover:bg-green-600 text-stone-200 border-2 border-stone-400 font-pixel text-sm"
        >
          <Link href="/arena">Start Game</Link>
        </Button>
      </div>
    </div>
  )
}

function StatItem({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="text-stone-200 font-pixel text-sm flex justify-between">
      <span className="text-stone-400">{label}:</span>
      <span>{value}</span>
    </div>
  )
}