export type URL = {
  url: string;
};
export interface IPokemonNamedAPIResource {
  name: string;
  url: string;
}

export interface IPokemonPage {
  count: number;
  next: string;
  previous: string;
  results: IPokemonNamedAPIResource[];
}

export interface IPokemon {
  abilities: IAbility[];
  base_experience: number;
  height: number;
  id: number;
  name: string;
  weight: number;
  types: IType[];
  sprites: ISprites;
  stats: IStats[];
  species: IPokemonNamedAPIResource;
}

export interface IPokemonSpecies {
  flavor_text_entries: IFlavorTextEntries[];
  capture_rate: number;
  gender_rate: number;
  shape: IPokemonNamedAPIResource;
  habitat: IPokemonNamedAPIResource;
  growth_rate: IPokemonNamedAPIResource;
  egg_groups: IPokemonNamedAPIResource[];
  evolution_chain: URL;
  evolves_from_species: null;
}

export interface IFlavorTextEntries {
  language: IPokemonNamedAPIResource;
  flavor_text: string;
}
export interface IStats {
  base_stat: number;
  stat: IPokemonNamedAPIResource;
}
export interface ISprites {
  other: IOfficialArtwork;
}

export interface IOfficialArtwork {
  'official-artwork': IFrontDefault;
}

export interface IFrontDefault {
  front_default: string;
}

export interface IAbility {
  ability: IPokemonNamedAPIResource;
  isHidden: boolean;
  slot: number;
}

export interface IType {
  slot: number;
  type: IPokemonNamedAPIResource;
}

export interface IEvolutionChain {
  chain: IChain;
  id: number;
  baby_trigger_item?: any;
}

interface IChain {
  evolves_to: IEvolvesTo[];
  species: IPokemonNamedAPIResource;
}

export interface IEvolvesTo {
  evolution_details: IEvolutionDetail[];
  species: IPokemonNamedAPIResource;
  evolves_to: IEvolvesTo[];
}

export interface IEvolutionDetail {
  gender?: any;
  held_item?: any;
  item: IPokemonNamedAPIResource;
  known_move?: any;
  known_move_type?: any;
  location?: any;
  min_affection?: any;
  min_beauty?: any;
  min_happiness?: any;
  min_level?: number;
  needs_overworld_rain: boolean;
  party_species?: any;
  party_type?: any;
  relative_physical_stats?: any;
  time_of_day: string;
  trade_species?: any;
  trigger: IPokemonNamedAPIResource;
  turn_upside_down: boolean;
}
