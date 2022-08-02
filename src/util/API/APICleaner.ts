import {IPokemonNamedAPIResource} from '../../types';

export function cleanedStringName(s: string): string {
  return s.replace(/-/g, ' ');
}

export function cleanedStringNames(entry: IPokemonNamedAPIResource[]): string {
  return entry.reduce((prev, curr) => curr.name + ', ' + prev, '').slice(0, -2);
}
