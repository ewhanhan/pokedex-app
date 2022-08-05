import {IPokemonNamedAPIResource, IPokemon} from '../../types';

export function cleanedStringName(s: string): string {
  return s.replace(/-/g, ' ');
}

export function cleanedStringNames(entry: IPokemonNamedAPIResource[]): string {
  return entry.reduce((prev, curr) => curr.name + ', ' + prev, '').slice(0, -2);
}

export function getSprites(pokemon: IPokemon) {
  return pokemon.sprites.other['official-artwork'].front_default;
}
