/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {IPokemon, IPokemonSpecies} from '../../types/index';
import {getPokemonByNameOrId, getColourFromType} from '../../util/index';
import {
  PokemonType,
  PokemonProfileHeader,
  PokemonStats,
  PokemonSection,
  PokemonAbilities,
  PokemonBiography,
} from '../../components/index';
import {containerVariant} from '../../style/index';

export function PokemonProfile(): JSX.Element | null {
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [, setError] = useState<unknown>(undefined);
  const [pokemonDetails, setPokemonDetails] = useState<IPokemon>();
  const [colour, setColour] = useState('');
  const [speciesDetails, setSpeciesDetails] = useState<IPokemonSpecies>();

  useEffect(() => {
    (async function getPokemon() {
      try {
        const pokemonData: IPokemon = await getPokemonByNameOrId(id as string);
        setColour(
          getColourFromType(pokemonData?.types[0]?.type?.name as string)
        );
        const speciesData = await axios(pokemonData.species.url);
        setSpeciesDetails(speciesData.data);
        setPokemonDetails(pokemonData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    })();
  }, [id]);

  if (
    pokemonDetails === undefined ||
    speciesDetails === undefined ||
    isLoading !== false
  )
    return null;
  console.log(pokemonDetails);
  console.log(speciesDetails);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{duration: 0.5}}
      variants={containerVariant}
      className="fixed inset-0 -z-50 h-screen w-full">
      <div className="relative mx-auto h-full max-w-screen-lg rounded-md border drop-shadow">
        <div className="align-center flex h-full w-full flex-col">
          {/* header */}
          <PokemonProfileHeader
            id={pokemonDetails.id}
            name={pokemonDetails.name}
          />
          {/* body */}
          <div className="flex flex-col justify-center px-5">
            {/* upper section */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* profile image */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1.1, 1.1, 1],
                  rotate: [0, 45, -45, 45, 0],
                  borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                }}
                className="flex justify-center">
                {!isLoading && (
                  <img
                    className="overflow-hidden object-cover object-center"
                    src={
                      pokemonDetails.sprites.other['official-artwork']
                        .front_default
                    }
                    alt={pokemonDetails.name}
                    onLoad={() => {
                      setIsLoading(false);
                    }}
                  />
                )}
              </motion.div>
              <div>
                <PokemonType header types={pokemonDetails.types} />
                <PokemonStats colour={colour} stats={pokemonDetails.stats} />
                <PokemonAbilities abilities={pokemonDetails.abilities} />
              </div>
            </div>
            <PokemonBiography
              colour={colour}
              flavor_text_entries={speciesDetails.flavor_text_entries}
            />
            <PokemonSection sectionTitle="Profile" colour={colour}>
              <div className="grid grid-flow-col grid-rows-4 gap-1.5">
                <div className="grid grid-cols-2">
                  <span className="bold font-semibold capitalize">Height:</span>
                  <span className="capitalize text-stone-700">
                    {pokemonDetails.height / 10} m
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="bold font-semibold capitalize">Weight:</span>
                  <span className="capitalize text-stone-700">
                    {pokemonDetails.weight / 10} kg
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="bold font-semibold capitalize">
                    Habitat:
                  </span>
                  <span className="capitalize text-stone-700">
                    {speciesDetails.habitat?.name ?? 'unknown'}
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="bold font-semibold capitalize">
                    Capture Rate:
                  </span>
                  <span className="capitalize text-stone-700">
                    {speciesDetails.capture_rate}
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="bold font-semibold capitalize">Gender:</span>
                  <span className="inline-block text-center capitalize">
                    <div
                      className={`h-5 w-full rounded-lg ${
                        speciesDetails.gender_rate === -1
                          ? 'bg-black'
                          : 'bg-pink-500'
                      }`}>
                      <motion.div
                        className="h-5 rounded-lg bg-blue-500"
                        animate={{
                          width: [
                            '0%',
                            `${
                              speciesDetails.gender_rate === -1
                                ? 0
                                : (1 - speciesDetails.gender_rate / 8) * 100
                            }%`,
                          ],
                        }}
                        transition={{
                          type: 'ease-in-out',
                          duration: 2,
                        }}
                      />
                    </div>
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="bold font-semibold capitalize">Shape:</span>
                  <span className="capitalize text-stone-700">
                    {speciesDetails.shape.name}
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="bold font-semibold capitalize">
                    Leveling Rate:
                  </span>
                  <span className="capitalize text-stone-700">
                    {speciesDetails.growth_rate.name.replace(/-/g, ' ')}
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="bold font-semibold capitalize">
                    Egg Groups:
                  </span>
                  <span className="capitalize text-stone-700">
                    {speciesDetails.egg_groups
                      .reduce((prev, curr) => curr.name + ', ' + prev, '')
                      .slice(0, -2)}
                  </span>
                </div>
              </div>
            </PokemonSection>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
