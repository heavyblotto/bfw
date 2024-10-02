import { Bigfoot } from '../types/bigfoot';
import { TriggerCondition, Ability } from '../types/abilities';
import { attacks } from '../data/attacks';
import { abilities } from '../data/abilities';
import { jokerEffects } from '../data/jokerEffects';
import { JokerColor, calculateJokerMultiplier } from '../data/jokerEffects';

export function getBigfootAttack(bigfoot: Bigfoot, suit: keyof Bigfoot['attacks'], value: number) {
  const attackKey = bigfoot.attacks[suit].find(k => k === value.toString());
  if (attackKey) {
    const numericKey = parseInt(attackKey, 10);
    if (numericKey >= 2 && numericKey <= 14) {
      return attacks[suit][numericKey as keyof typeof attacks[typeof suit]];
    }
  }
  return null; // Return null if the Bigfoot doesn't have this attack
}

export function getBigfootAbility(bigfoot: Bigfoot, type: 'primary' | 'secondary', triggerCondition?: TriggerCondition) {
  const abilityKey = bigfoot[`${type}Ability`] as keyof typeof abilities[typeof type];
  const ability = abilities[type][abilityKey] as Ability;
  if (type === 'primary') {
    return ability; // Primary abilities are always active
  }
  return triggerCondition ? (ability.trigger === triggerCondition ? ability : null) : ability;
}

export function getBigfootJokerEffect(bigfoot: Bigfoot, type: 'black' | 'red') {
  const effectKey = bigfoot.jokerEffect[type] as keyof typeof jokerEffects;
  return jokerEffects[effectKey];
}

export function getBigfootImagePath(bigfoot: Bigfoot): string {
  return bigfoot.image;
}

export function getBigfootAvatarPath(bigfoot: Bigfoot): string {
  return bigfoot.avatar;
}

export function getOptimizedImageUrl(imagePath: string): string {
  // Implement image optimization logic here
  // For now, we'll just return the original path
  return imagePath;
}

export function handleJokerPlay(jokerColor: JokerColor, bigfoot: Bigfoot, currentGold: number, currentXP: number) {
  const multiplier = calculateJokerMultiplier(jokerColor, bigfoot.level);
  
  if (jokerColor === 'black') {
    const newGold = Math.round(currentGold * multiplier);
    return { newGold, newXP: currentXP };
  } else {
    const newXP = Math.round(currentXP * multiplier);
    return { newGold: currentGold, newXP };
  }
}

export function displayJokerEffect(jokerColor: JokerColor, bigfoot: Bigfoot) {
  const multiplier = calculateJokerMultiplier(jokerColor, bigfoot.level);
  const effect = jokerEffects[jokerColor];
  return `${effect.name}: ${effect.description} (x${multiplier.toFixed(2)})`;
}

export function applyJokerEffectToMatch(jokerColor: JokerColor, bigfoot: Bigfoot, matchResults: { gold: number, xp: number }) {
  const { gold, xp } = matchResults;
  const { newGold, newXP } = handleJokerPlay(jokerColor, bigfoot, gold, xp);
  return { gold: newGold, xp: newXP };
}