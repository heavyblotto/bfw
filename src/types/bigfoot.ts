export interface Bigfoot {
    id: string;
    name: string;
    description: string;
    location: string;
    habitat: string;
    class: 'Dwarf' | 'Squatch' | 'Giant' | 'Boss';
    level: number;
    hp: number;
    attack: number;
    defense: number;
    luck: number;
    image: string;
    avatar: string;
    attacks: {
      hearts: string[];
      clubs: string[];
      diamonds: string[];
      spades: string[];
    };
    primaryAbility: string;
    secondaryAbility: string;
    jokerEffect: {
      black: string;
      red: string;
    };
}