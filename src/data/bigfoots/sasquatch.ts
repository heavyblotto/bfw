import { Bigfoot } from '../../types/bigfoot';

export const sasquatch: Bigfoot = {
  id: 'sasquatch',
  name: 'Sasquatch',
  description: 'Sasquatch, or Bigfoot, is a well-known cryptid from North American folklore. Standing between 8 and 11 feet tall, it is covered in thick fur, with large, padded feet that leave behind enormous tracks. Sasquatch is a shy creature that avoids humans, though it is known for throwing rocks and making eerie whistling sounds at a distance.',
  location: 'Pacific Northwest',
  habitat: 'Temperate Rainforest',
  class: 'Squatch',
  level: 1,
  hp: 100,
  attack: 10,
  defense: 8,
  luck: 5,
  image: '/images/bigfoots/sasquatch.png',
  avatar: '/images/bigfoots/avatars/sasquatch-avatar.png',
  attacks: {
    hearts: ['2', '3', '4', '5', '6', '11', '12', '13'],
    clubs: ['2', '3', '4', '5', '6', '11', '12', '13'],
    diamonds: ['2', '3', '4', '5', '6', '11', '12', '13'],
    spades: ['2', '3', '4', '5', '6', '11', '12', '13'],
  },
  primaryAbility: 'forestStealth',
  secondaryAbility: 'eerieWhistle',
  jokerEffect: {
    black: 'blackJoker',
    red: 'redJoker',
  },
};