import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { FaStar, FaCoins } from 'react-icons/fa'
import { GiUpgrade } from 'react-icons/gi'
import usePlayerProfileStore from '@/stores/playerProfileStore'

export default function PlayerProfile() {
  const { data: session } = useSession()
  const { playerProfile, isLoading, error, fetchPlayerProfile } = usePlayerProfileStore()

  useEffect(() => {
    if (session) {
      fetchPlayerProfile()
    }
  }, [session, fetchPlayerProfile])

  if (isLoading) {
    return <div className="text-stone-200 font-pixel">Loading...</div>
  }

  if (error) {
    return <div className="text-red-500 font-pixel">Error: {error}</div>
  }

  if (!playerProfile) {
    return null
  }

  return (
    <div className="text-stone-200 font-pixel bg-stone-700/50 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        <span className="text-amber-400">Player: </span>
        <span className="text-stone-200">{session?.user?.name || 'Unknown Player'}</span>
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center">
          <GiUpgrade className="text-amber-400 mr-2" />
          <span>Level: {playerProfile.level}</span>
        </div>
        <div className="flex items-center">
          <FaStar className="text-amber-400 mr-2" />
          <span>XP: {playerProfile.xp}</span>
        </div>
        <div className="flex items-center">
          <FaCoins className="text-amber-400 mr-2" />
          <span>Gold: {playerProfile.gold}</span>
        </div>
      </div>
      <div className="mt-4">
        <div className="bg-stone-600 h-2 rounded-full">
          <div
            className="bg-amber-400 h-2 rounded-full"
            style={{ width: `${(playerProfile.xp % 100) / 100 * 100}%` }}
          ></div>
        </div>
        <p className="text-xs mt-1 text-center">XP Progress</p>
      </div>
    </div>
  )
}