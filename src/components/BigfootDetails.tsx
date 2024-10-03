import React from 'react'
import { Bigfoot } from '@/types/bigfoot'
import Image from 'next/image'
import { getBigfootImagePath } from '@/utils/bigfootUtils'
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'

interface BigfootDetailsProps {
  bigfoot: Bigfoot
  onClose?: () => void
  isModal?: boolean
}

export default function BigfootDetails({ bigfoot, onClose, isModal = false }: BigfootDetailsProps) {
  const Content = () => (
    <div className="bg-stone-800 p-4 sm:p-6 rounded-lg w-full max-w-2xl mx-auto overflow-y-auto max-h-[90vh]">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-amber-400 font-pixel">{bigfoot.name}</h2>
        {isModal && onClose && (
          <Button 
            onClick={onClose} 
            className="bg-stone-600 hover:bg-stone-500 text-stone-200 p-2"
            aria-label="Close"
          >
            <X size={24} />
          </Button>
        )}
      </div>
      
      <div className="flex flex-col gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div className="w-full">
          <div className="relative w-full aspect-square mb-2 sm:mb-4 rounded-lg overflow-hidden border-2 border-stone-600">
            <Image
              src={getBigfootImagePath(bigfoot)}
              alt={bigfoot.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <p className="text-stone-400 font-pixel text-center mb-2">Class: {bigfoot.class}</p>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-stone-700/50 p-2 rounded">
              <h4 className="text-xs sm:text-sm font-bold text-amber-400 font-pixel mb-1">Location</h4>
              <p className="text-stone-200 font-pixel text-xs">{bigfoot.location}</p>
            </div>
            
            <div className="bg-stone-700/50 p-2 rounded">
              <h4 className="text-xs sm:text-sm font-bold text-amber-400 font-pixel mb-1">Habitat</h4>
              <p className="text-stone-200 font-pixel text-xs">{bigfoot.habitat}</p>
            </div>
          </div>
        </div>
        
        <div className="w-full">
          <h3 className="text-base sm:text-lg font-bold text-amber-400 font-pixel mb-2">{bigfoot.name}</h3>
          <p className="text-stone-200 font-pixel text-xs sm:text-sm mb-4">{bigfoot.description}</p>
          
          <h3 className="text-base sm:text-lg font-bold text-amber-400 font-pixel mb-2">Level {bigfoot.level}</h3>
          <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4">
            <StatItem label="HP" value={bigfoot.hp} />
            <StatItem label="Attack" value={bigfoot.attack} />
            <StatItem label="Defense" value={bigfoot.defense} />
            <StatItem label="Luck" value={bigfoot.luck} />
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-bold text-amber-400 font-pixel mb-2">Attacks</h3>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(bigfoot.attacks).map(([suit, values]) => (
            <div key={suit} className="bg-stone-700/50 p-2 rounded">
              <h4 className="text-stone-200 font-pixel capitalize mb-1">{suit}</h4>
              <p className="text-stone-400 font-pixel text-sm">{values.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-bold text-amber-400 font-pixel mb-2">Abilities</h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-stone-700/50 p-2 rounded">
            <h4 className="text-stone-200 font-pixel mb-1">Primary: {bigfoot.primaryAbility}</h4>
          </div>
          <div className="bg-stone-700/50 p-2 rounded">
            <h4 className="text-stone-200 font-pixel mb-1">Secondary: {bigfoot.secondaryAbility}</h4>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-bold text-amber-400 font-pixel mb-2">Joker Effects</h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-stone-700/50 p-2 rounded">
            <h4 className="text-stone-200 font-pixel mb-1">Black: {bigfoot.jokerEffect.black}</h4>
          </div>
          <div className="bg-stone-700/50 p-2 rounded">
            <h4 className="text-stone-200 font-pixel mb-1">Red: {bigfoot.jokerEffect.red}</h4>
          </div>
        </div>
      </div>
    </div>
  )

  if (isModal) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
        <Content />
      </div>
    )
  }

  return <Content />
}

function StatItem({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="text-stone-200 font-pixel text-xs sm:text-sm flex justify-between">
      <span className="text-stone-400">{label}:</span>
      <span>{value}</span>
    </div>
  )
}