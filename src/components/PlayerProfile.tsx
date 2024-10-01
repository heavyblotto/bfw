import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

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
    return <div>Loading...</div>
  }

  return (
    <div className="text-stone-200 font-pixel">
      <h2 className="text-2xl font-bold mb-4 text-amber-400">Player Profile</h2>
      <div className="mb-4">
        <p className="mt-2">{session?.user?.name || 'Unknown Player'}</p>
      </div>
      <div className="mb-4">
        <p>Level: {playerData.level}</p>
        <p>XP: {playerData.xp}</p>
        <p>Gold: {playerData.gold}</p>
      </div>
    </div>
  )
}