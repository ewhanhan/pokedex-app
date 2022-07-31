/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {IPokemon} from '../../types/index';
import {getPokemonByNameOrId, getColourFromType} from '../../util/index';
import {PokemonType} from '../../components/index';
import {PokemonProfileHeader} from './PokemonProfileHeader';
import {PokemonStats} from './PokemonStats';

export function PokemonProfile(): JSX.Element | null {
  const {id} = useParams();
  const [, setIsLoading] = useState(true);
  const [, setError] = useState<unknown>(undefined);
  const [pokemonDetails, setPokemonDetails] = useState<IPokemon>();
  const [colour, setColour] = useState('test');

  useEffect(() => {
    (async function getPokemon() {
      try {
        const data: IPokemon = await getPokemonByNameOrId(id as string);
        setColour(getColourFromType(data?.types[0]?.type?.name as string));
        setPokemonDetails(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    })();
  }, [id]);

  if (pokemonDetails === undefined) return null;
  console.log(pokemonDetails);

  return (
    <div className="fixed inset-0 -z-50 h-screen w-full">
      <div className="relative mx-auto h-full max-w-screen-lg rounded-md border drop-shadow">
        <div className="align-center flex h-full w-full flex-col">
          {/* header */}
          <PokemonProfileHeader
            id={pokemonDetails.id}
            name={pokemonDetails.name}
          />
          {/* body */}
          <div className="flex justify-center px-5">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* profile image */}
              <div className="flex justify-center">
                <img
                  className="overflow-hidden object-cover object-center"
                  src={
                    pokemonDetails.sprites.other['official-artwork']
                      .front_default
                  }
                  alt={pokemonDetails?.name}
                />
              </div>
              <div className="p-5">
                <PokemonType types={pokemonDetails.types} />
                {/* pokemon states */}
                <PokemonStats colour={colour} stats={pokemonDetails.stats} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
