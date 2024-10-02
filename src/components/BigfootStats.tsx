import { Bigfoot } from '@/types/bigfoot'

interface BigfootStatsProps {
  bigfoot: Bigfoot
}

export default function BigfootStats({ bigfoot }: BigfootStatsProps) {
  return (
    <div className="bg-stone-700/50 p-4 rounded-lg w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div className="text-stone-300 font-pixel whitespace-nowrap">Level: {bigfoot.level}</div>
        <div className="text-stone-300 font-pixel whitespace-nowrap">HP: {bigfoot.hp}</div>
        <div className="text-stone-300 font-pixel whitespace-nowrap">Attack: {bigfoot.attack}</div>
        <div className="text-stone-300 font-pixel whitespace-nowrap">Defense: {bigfoot.defense}</div>
        <div className="text-stone-300 font-pixel whitespace-nowrap">Luck: {bigfoot.luck}</div>
        <div className="text-stone-300 font-pixel whitespace-nowrap">Primary: {bigfoot.primaryAbility}</div>
        <div className="text-stone-300 font-pixel whitespace-nowrap">Secondary: {bigfoot.secondaryAbility}</div>
      </div>
    </div>
  )
}