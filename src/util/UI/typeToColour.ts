// import {IPokemonNamedAPIResource} from '../types/index';

export function getColourFromType(name: string): string {
  switch (name) {
    case 'bug':
      return 'bg-green-700';
    case 'dark':
      return 'bg-zinc-600';
    case 'dragon':
      return 'bg-gradient-to-r from-sky-500 to-orange-500';
    case 'electric':
      return 'bg-yellow-300';
    case 'fairy':
      return 'bg-pink-300';
    case 'fighting':
      return 'bg-yellow-700';
    case 'fire':
      return 'bg-red-600';
    case 'flying':
      return 'bg-gradient-to-r from-cyan-500 to-blue-500';
    case 'ghost':
      return 'bg-violet-700';
    case 'grass':
      return 'bg-green-600';
    case 'ground':
      return 'bg-yellow-600';
    case 'ice':
      return 'bg-cyan-500';
    case 'normal':
      return 'bg-gray-400';
    case 'poison':
      return 'bg-purple-600';
    case 'psychic':
      return 'bg-pink-500';
    case 'rock':
      return 'bg-yellow-900';
    case 'steel':
      return 'bg-gray-600';
    case 'water':
      return 'bg-blue-600';
    default:
      return '';
  }
}

//           'bg-green-600': name === 'grass',
//           'bg-purple-600': name === 'poison',
//           'bg-red-600': name === 'fire',
//           'bg-blue-600': name === 'water',
//           'bg-green-700': name === 'bug',
//           'bg-gray-400 text-black': name === 'normal',
//           'bg-gradient-to-r from-cyan-500 to-blue-500': name === 'flying',
//           'bg-pink-300 text-black': name === 'fairy',
//           'bg-yellow-300 text-black': name === 'electric',
//           'bg-yellow-600': name === 'ground',
//           'bg-yellow-700': name === 'fighting',
//           'bg-pink-500': name === 'psychic',
//           'bg-yellow-900': name === 'rock',
//           'bg-gray-600': name === 'steel',
//           'bg-cyan-500 text-black': name === 'ice',
//           'bg-violet-700': name === 'ghost',
//           'bg-gradient-to-r from-sky-500 to-orange-500': name === 'dragon',
//           'bg-zinc-600': name === 'dark',
