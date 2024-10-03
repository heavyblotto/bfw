import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { Bigfoot } from '@/types/bigfoot'
import Image from 'next/image'
import { getBigfootImagePath } from '@/utils/bigfootUtils'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import BigfootDetails from './BigfootDetails'

export default function BigfootDisplay() {
  const { data: session } = useSession()
  const [bigfoot, setBigfoot] = useState<Bigfoot | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showDetails, setShowDetails] = useState(false)

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
    <div className="bg-stone-800/90 p-6 rounded-lg border-2 border-stone-600 shadow-lg">
      <h3 className="text-2xl font-bold text-amber-400 font-pixel mb-6">
        Your Fighter: <span className="text-stone-200">{bigfoot.name}</span>
      </h3>
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
          <div className="bg-stone-700/50 p-4 rounded-lg mb-4">
            <Button 
              onClick={() => setShowDetails(true)} 
              className="bg-stone-600 hover:bg-stone-500 text-stone-200 font-pixel text-sm w-full"
            >
              View Details
            </Button>
          </div>
          <div className="bg-stone-700/50 p-4 rounded-lg">
            <h5 className="text-lg font-bold text-amber-400 font-pixel mb-2">Level {bigfoot.level}</h5>
            <div className="grid grid-cols-2 gap-4">
              <StatItem label="HP" value={bigfoot.hp} />
              <StatItem label="Attack" value={bigfoot.attack} />
              <StatItem label="Defense" value={bigfoot.defense} />
              <StatItem label="Luck" value={bigfoot.luck} />
            </div>
          </div>
        </div>
      </div>
      {showDetails && (
        <BigfootDetails bigfoot={bigfoot} onClose={() => setShowDetails(false)} isModal={true} />
      )}
      <div className="flex justify-center mt-6">
        <Button asChild className="bg-stone-700 hover:bg-stone-600 text-stone-200 border-2 border-stone-400 font-pixel text-sm">
          <Link href="/bigfoot-selection">Change Bigfoot</Link>
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