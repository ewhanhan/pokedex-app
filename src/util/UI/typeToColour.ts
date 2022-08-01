// import {IPokemonNamedAPIResource} from '../types/index';

export function getColourFromType(name: string): string {
  switch (name) {
    case 'bug':
      return 'bg-green-700 text-white';
    case 'dark':
      return 'bg-zinc-600 text-white';
    case 'dragon':
      return 'bg-gradient-to-r from-sky-500 to-orange-500';
    case 'electric':
      return 'bg-yellow-300 text-black';
    case 'fairy':
      return 'bg-pink-300 text-black';
    case 'fighting':
      return 'bg-yellow-700 text-white';
    case 'fire':
      return 'bg-red-600 text-white';
    case 'flying':
      return 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white';
    case 'ghost':
      return 'bg-violet-700 text-white';
    case 'grass':
      return 'bg-green-600 text-white';
    case 'ground':
      return 'bg-yellow-600 text-white';
    case 'ice':
      return 'bg-cyan-500 text-black';
    case 'normal':
      return 'bg-gray-400 text-black';
    case 'poison':
      return 'bg-purple-600 text-white';
    case 'psychic':
      return 'bg-pink-500 text-white';
    case 'rock':
      return 'bg-yellow-900 text-white';
    case 'steel':
      return 'bg-gray-600 text-white';
    case 'water':
      return 'bg-blue-600 text-white';
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
