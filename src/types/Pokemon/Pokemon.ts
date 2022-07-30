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
