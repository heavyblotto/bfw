import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { Bigfoot } from '@/types/bigfoot'
import Image from 'next/image'
import { getBigfootImagePath } from '@/utils/bigfootUtils'
import BigfootStats from './BigfootStats'

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

  if (isLoading) return <div className="text-stone-200 font-pixel">Loading Bigfoot...</div>
  if (error) return <div className="text-red-500 font-pixel">Error: {error}</div>
  if (!bigfoot) return null

  return (
    <div className="bg-stone-800/90 p-4 rounded-lg mb-8">
      <h3 className="text-xl font-bold text-amber-400 font-pixel mb-4">Your Bigfoot</h3>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/2">
          <Image
            src={getBigfootImagePath(bigfoot)}
            alt={bigfoot.name}
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h4 className="text-lg font-bold text-stone-200 font-pixel">{bigfoot.name}</h4>
          <p className="text-stone-300 font-pixel mb-2">Class: {bigfoot.class}</p>
          <p className="text-stone-300 font-pixel mb-4">{bigfoot.description}</p>
          <BigfootStats bigfoot={bigfoot} />
        </div>
      </div>
    </div>
  )
}