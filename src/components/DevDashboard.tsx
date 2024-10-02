import { useState } from 'react'
import { Button } from "@/components/ui/button"
import usePlayerProfileStore from '@/stores/playerProfileStore'

export default function DevDashboard() {
  const [isVisible, setIsVisible] = useState(false)
  const { playerProfile, updatePlayerProfile } = usePlayerProfileStore()

  const toggleVisibility = () => setIsVisible(!isVisible)

  const handleXPChange = (amount: number) => {
    if (playerProfile) {
      updatePlayerProfile({ xp: playerProfile.xp + amount })
    }
  }

  const handleGoldChange = (amount: number) => {
    if (playerProfile) {
      updatePlayerProfile({ gold: playerProfile.gold + amount })
    }
  }

  if (!isVisible) {
    return (
      <Button className="fixed bottom-4 right-4 z-50" onClick={toggleVisibility}>
        Show Dev Dashboard
      </Button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-stone-800 p-4 rounded-lg shadow-lg z-50">
      <Button className="absolute top-2 right-2" onClick={toggleVisibility}>
        Hide
      </Button>
      <h2 className="text-xl font-bold mb-4 text-amber-400">Dev Dashboard</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-stone-200">Player Profile</h3>
          <p className="text-stone-300">Level: {playerProfile?.level}</p>
          <p className="text-stone-300">XP: {playerProfile?.xp}</p>
          <p className="text-stone-300">Gold: {playerProfile?.gold}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-stone-200">Modify State</h3>
          <div className="flex space-x-2">
            <Button onClick={() => handleXPChange(100)}>Add 100 XP</Button>
            <Button onClick={() => handleGoldChange(50)}>Add 50 Gold</Button>
          </div>
        </div>
      </div>
    </div>
  )
}