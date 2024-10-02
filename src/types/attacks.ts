export interface Attack {
    name: string;
    effect: 'heal' | 'damage' | 'shield' | 'poison';
    value: number;
    removeStatusEffects?: boolean;
    addShield?: number;
    stunChance?: number;
    ignoreDefense?: boolean;
    reflectDamage?: number;
    healOverTime?: number;
    invulnerable?: boolean;
    duration?: number;
    reduceHealing?: number;
    reduceAttack?: number;
    reduceDefense?: number;
  }
  
  export type Attacks = {
    [suit in 'hearts' | 'clubs' | 'diamonds' | 'spades']: {
      [value: string]: Attack;
    };
  };