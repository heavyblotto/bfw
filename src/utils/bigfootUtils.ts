import { Bigfoot } from '../types/bigfoot';
import { TriggerCondition, Ability } from '../types/abilities';
import { attacks } from '../data/attacks';
import { abilities } from '../data/abilities';
import { jokerEffects } from '../data/jokerEffects';

export function getBigfootAttack(bigfoot: Bigfoot, suit: keyof Bigfoot['attacks'], value: number) {
  const attackKey = bigfoot.attacks[suit].find(k => k === value.toString());
  return attackKey ? attacks[suit][attackKey as keyof typeof attacks[typeof suit]] : null;
}

export function getBigfootAbility(bigfoot: Bigfoot, type: 'primary' | 'secondary', triggerCondition?: TriggerCondition) {
  const abilityKey = bigfoot[`${type}Ability`] as keyof typeof abilities[typeof type];
  const ability = abilities[type][abilityKey] as Ability;
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