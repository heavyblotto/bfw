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
    return <div className="text-stone-200 font-pixel text-xs">Loading...</div>
  }

  if (error) {
    return <div className="text-red-500 font-pixel text-xs">Error: {error}</div>
  }

  if (!playerProfile) {
    return null
  }

  return (
    <div className="text-stone-200 font-pixel bg-stone-700/50 p-3 rounded-lg">
      <h2 className="text-lg font-bold mb-2">
        <span className="text-amber-400">Player: </span>
        <span className="text-stone-200">{session?.user?.name || 'Unknown Player'}</span>
      </h2>
      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className="flex items-center">
          <GiUpgrade className="text-amber-400 mr-1 h-3 w-3" />
          <span>Level: {playerProfile.level}</span>
        </div>
        <div className="flex items-center">
          <FaStar className="text-amber-400 mr-1 h-3 w-3" />
          <span>XP: {playerProfile.xp}</span>
        </div>
        <div className="flex items-center">
          <FaCoins className="text-amber-400 mr-1 h-3 w-3" />
          <span>Gold: {playerProfile.gold}</span>
        </div>
      </div>
      <div className="mt-2">
        <div className="bg-stone-600 h-1 rounded-full">
          <div
            className="bg-amber-400 h-1 rounded-full"
            style={{ width: `${(playerProfile.xp % 100) / 100 * 100}%` }}
          ></div>
        </div>
        <p className="text-[10px] mt-1 text-center">XP Progress</p>
      </div>
    </div>
  )
}