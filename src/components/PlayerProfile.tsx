import Image from 'next/image'
import { useSession } from 'next-auth/react'

export default function PlayerProfile() {
  const { data: session } = useSession()

  // Placeholder data - replace with actual data from your game state
  const playerData = {
    level: 1,
    xp: 50,
    maxXp: 100,
    gold: 100,
    inventory: ['Health Potion', 'Strength Elixir'],
    matchHistory: [
      { opponent: 'Sasquatch', result: 'Win' },
      { opponent: 'Yeti', result: 'Loss' },
    ],
    achievements: ['First Win', 'Card Collector'],
  }

  return (
    <div className="text-stone-200 font-pixel">
      <h2 className="text-2xl font-bold mb-4 text-amber-400">Player Profile</h2>
      <div className="mb-4">
        <Image
          src="/images/bigfoot-avatar.png"
          alt="Bigfoot Avatar"
          width={100}
          height={100}
          className="rounded-full"
        />
        <p className="mt-2">{session?.user?.name || 'Unknown Player'}</p>
      </div>
      <div className="mb-4">
        <p>Level: {playerData.level}</p>
        <p>XP: {playerData.xp} / {playerData.maxXp}</p>
        <div className="w-full bg-stone-700 rounded-full h-2.5 dark:bg-stone-700">
          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${(playerData.xp / playerData.maxXp) * 100}%` }}></div>
        </div>
      </div>
      <p>Gold: {playerData.gold}</p>
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Inventory</h3>
        <ul className="list-disc list-inside">
          {playerData.inventory.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Recent Matches</h3>
        <ul>
          {playerData.matchHistory.map((match, index) => (
            <li key={index}>{match.opponent}: {match.result}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Achievements</h3>
        <ul className="list-disc list-inside">
          {playerData.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}