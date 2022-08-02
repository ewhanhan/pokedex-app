/* eslint-disable camelcase */
import {PokemonSection} from '../index';
import {IFlavorTextEntries} from '../../types/index';

interface IPokemonBiography {
  colour: string;
  flavor_text_entries: IFlavorTextEntries[];
}

export function PokemonBiography({
  colour,
  flavor_text_entries,
}: IPokemonBiography) {
  const englishFlavorEntry = flavor_text_entries.find(
    (entry: IFlavorTextEntries) => {
      return entry.language.name === 'en';
    }
  );

  if (englishFlavorEntry === undefined) return null;

  return (
    <PokemonSection sectionTitle="Legend" colour={colour}>
      <p>{englishFlavorEntry.flavor_text}</p>
    </PokemonSection>
  );
}
