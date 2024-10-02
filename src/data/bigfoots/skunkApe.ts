import { Bigfoot } from '../../types/bigfoot';

export const skunkApe: Bigfoot = {
  id: 'skunkape',
  name: 'Skunk Ape',
  description: 'The Skunk Ape is a Bigfoot found in the Florida Everglades, notorious for its foul odor. It stands between 6 to 7 feet tall and has reddish-brown fur. Known for its agility in swampy terrain, the Skunk Ape is elusive and rarely seen by humans.',
  location: 'Florida, USA',
  habitat: 'Swamps and marshlands of the Florida Everglades',
  class: 'Squatch',
  level: 3,
  hp: 90,
  attack: 9,
  defense: 10,
  luck: 8,
  image: '/images/bigfoots/skunkApe.png',
  avatar: '/images/bigfoots/avatars/skunkApe-avatar.png',
  attacks: {
    hearts: ['2', '3', '4', '5', '6', '7', '11', '12', '13'],
    clubs: ['2', '3', '4', '5', '6', '7', '11', '12', '13'],
    diamonds: ['2', '3', '4', '5', '6', '7', '11', '12', '13'],
    spades: ['2', '3', '4', '5', '6', '7', '11', '12', '13'],
  },
  primaryAbility: 'swampStealth',
  secondaryAbility: 'noxiousCloud',
  jokerEffect: {
    black: 'blackJoker',
    red: 'redJoker',
  },
};