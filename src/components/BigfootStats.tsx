import { Bigfoot } from '@/types/bigfoot'

interface BigfootStatsProps {
  bigfoot: Bigfoot
}

export default function BigfootStats({ bigfoot }: BigfootStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="text-stone-300 font-pixel">Level: {bigfoot.level}</div>
      <div className="text-stone-300 font-pixel">HP: {bigfoot.hp}</div>
      <div className="text-stone-300 font-pixel">Attack: {bigfoot.attack}</div>
      <div className="text-stone-300 font-pixel">Defense: {bigfoot.defense}</div>
      <div className="text-stone-300 font-pixel">Luck: {bigfoot.luck}</div>
      <div className="text-stone-300 font-pixel">Primary: {bigfoot.primaryAbility}</div>
      <div className="text-stone-300 font-pixel">Secondary: {bigfoot.secondaryAbility}</div>
    </div>
  )
}