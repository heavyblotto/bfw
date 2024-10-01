import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { FaStar, FaCoins } from 'react-icons/fa'
import { GiUpgrade } from 'react-icons/gi'

interface PlayerProfileData {
  level: number
  xp: number
  gold: number
}

export default function PlayerProfile() {
  const { data: session } = useSession()
  const [playerData, setPlayerData] = useState<PlayerProfileData | null>(null)

  useEffect(() => {
    const fetchPlayerProfile = async () => {
      const response = await fetch('/api/player-profile')
      if (response.ok) {
        const data = await response.json()
        setPlayerData(data)
      }
    }

    if (session) {
      fetchPlayerProfile()
    }
  }, [session])

  if (!playerData) {
    return <div className="text-stone-200 font-pixel">Loading...</div>
  }

  return (
    <div className="text-stone-200 font-pixel bg-stone-700/50 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-amber-400">Player Profile</h2>
      <div className="mb-4">
        <p className="text-lg">{session?.user?.name || 'Unknown Player'}</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center">
          <GiUpgrade className="text-amber-400 mr-2" />
          <span>Level: {playerData.level}</span>
        </div>
        <div className="flex items-center">
          <FaStar className="text-amber-400 mr-2" />
          <span>XP: {playerData.xp}</span>
        </div>
        <div className="flex items-center">
          <FaCoins className="text-amber-400 mr-2" />
          <span>Gold: {playerData.gold}</span>
        </div>
      </div>
      <div className="mt-4">
        <div className="bg-stone-600 h-2 rounded-full">
          <div
            className="bg-amber-400 h-2 rounded-full"
            style={{ width: `${(playerData.xp % 100) / 100 * 100}%` }}
          ></div>
        </div>
        <p className="text-xs mt-1 text-center">XP Progress</p>
      </div>
    </div>
  )
}