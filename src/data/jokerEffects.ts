export const jokerEffects = {
  black: {
    name: "Bigfoot's Fortune",
    description: "Increases Gold earned in the current match",
    effect: "multiplyGold",
    baseMultiplier: 1.5,
    maxMultiplier: 3.0,
    scalingFactor: 0.1
  },
  red: {
    name: "Ancestral Wisdom",
    description: "Increases XP earned in the current match",
    effect: "multiplyXP",
    baseMultiplier: 1.5,
    maxMultiplier: 3.0,
    scalingFactor: 0.1
  }
};

export type JokerColor = 'black' | 'red';

export interface JokerEffect {
  name: string;
  description: string;
  effect: 'multiplyGold' | 'multiplyXP';
  baseMultiplier: number;
  maxMultiplier: number;
  scalingFactor: number;
}

export function calculateJokerMultiplier(jokerColor: JokerColor, bigfootLevel: number): number {
  const joker = jokerEffects[jokerColor];
  const multiplier = joker.baseMultiplier + (bigfootLevel * joker.scalingFactor);
  return Math.min(multiplier, joker.maxMultiplier);
}

export function applyJokerEffect(jokerColor: JokerColor, bigfootLevel: number, baseValue: number): number {
  const multiplier = calculateJokerMultiplier(jokerColor, bigfootLevel);
  return Math.round(baseValue * multiplier);
}