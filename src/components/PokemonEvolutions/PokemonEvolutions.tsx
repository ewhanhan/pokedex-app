/* eslint-disable react/no-array-index-key */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import {useState, useEffect} from 'react';
import Axios, {AxiosResponse, AxiosPromise} from 'axios';
import {ArrowRight} from 'phosphor-react';
import {URL, IEvolutionChain, IPokemon} from '../../types/index';
import {getSprites} from '../../util/index';

interface IPokemonEvolutions {
  evolution_chain: URL;
}

export function PokemonEvolutions({evolution_chain}: IPokemonEvolutions) {
  const [evolutionSprites, setEvolutionSprites] = useState<
    {name: string; url: string}[]
  >([]);

  useEffect(() => {
    (async function getData() {
      try {
        const pokemonEvolvesToData: AxiosResponse<IEvolutionChain> =
          await Axios(evolution_chain);
        const evolvesTo = pokemonEvolvesToData.data.chain.evolves_to;
        const evolutionList = [];
        evolutionList.push(pokemonEvolvesToData.data.chain.species.name);
        for (const pokemon of evolvesTo) {
          if (pokemon.species !== undefined) {
            if (pokemon.evolves_to.length !== 0) {
              evolutionList.push(pokemon.species.name);
              for (const moreEvolutionDetails of pokemon.evolves_to) {
                evolutionList.push(moreEvolutionDetails.species.name);
              }
            } else {
              evolutionList.push(pokemon.species.name);
            }
          }
        }
        let pokemonPromiseList: AxiosPromise<IPokemon>[] = [];

        if (evolutionList.length !== 0) {
          pokemonPromiseList = evolutionList.map((pokemon) => {
            return Axios(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
          });
        }

        const evolvedPokemonResponses = await Promise.all([
          ...pokemonPromiseList,
        ]);
        const evolutionSpritesList = [];
        for (const {data: pokemonData} of evolvedPokemonResponses) {
          const spriteSrc = getSprites(pokemonData);
          evolutionSpritesList.push({
            name: pokemonData.name,
            url: spriteSrc,
          });
        }
        setEvolutionSprites(evolutionSpritesList);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [evolution_chain.url]);

  if (evolutionSprites === undefined || evolutionSprites.length === 0)
    return null;

  return (
    <div className="col-auto grid grid-flow-col">
      {evolutionSprites.map((sprites, index) => {
        return (
          <>
            <div
              className="relative h-fit w-full max-w-[200px] justify-self-center"
              key={sprites.name + index}>
              <div className="rounded-full bg-green-400">
                <img
                  className="aspect-w-square h-auto max-w-[200px] overflow-hidden"
                  src={sprites.url}
                  alt={sprites.name}
                />
              </div>
            </div>
            {index !== evolutionSprites.length - 1 && (
              <div className="flex flex-col justify-center justify-self-center">
                <ArrowRight size={64} />
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}
