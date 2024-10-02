export type TriggerCondition = 'passive' | 'onClubsPlay' | 'onSpadesPlay' | 'onDiamondsPlay' | 'onHeartsPlay';

export interface Ability {
  name: string;
  description: string;
  effect: string;
  value?: number;
  damage?: number;
  stunChance?: number;
  trigger: TriggerCondition;
}

export interface Abilities {
  primary: Record<string, Ability>;
  secondary: Record<string, Ability>;
}