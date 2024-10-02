import { Bigfoot } from '../../types/bigfoot';

export const agogwe: Bigfoot = {
  id: 'agogwe',
  name: 'Agogwe',
  description: 'A small, elusive humanoid covered in reddish-brown hair. The Agogwe is known for its swift movements through dense forests and its ability to blend into the surroundings. Standing only 3 to 5 feet tall, it has been reported to have long arms, a rounded forehead, and yellowish-red eyes.',
  location: 'East Africa',
  habitat: 'Dense tropical and subtropical forests of Tanzania, Mozambique, and Zimbabwe',
  class: 'Dwarf',
  level: 2,
  hp: 80,
  attack: 8,
  defense: 12,
  luck: 15,
  image: '/images/bigfoots/agogwe.png',
  avatar: '/images/bigfoots/avatars/agogwe-avatar.png',
  attacks: {
    hearts: ['2', '3', '4', '5', '11', '12', '13'],
    clubs: ['2', '3', '4', '5', '11', '12', '13'],
    diamonds: ['2', '3', '4', '5', '11', '12', '13'],
    spades: ['2', '3', '4', '5', '11', '12', '13'],
  },
  primaryAbility: 'jungleAgility',
  secondaryAbility: 'mimicryCall',
  jokerEffect: {
    black: 'blackJoker',
    red: 'redJoker',
  },
};