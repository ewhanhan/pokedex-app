import { useEffect, useState, Dispatch, SetStateAction } from "react";
import axiosInstance from "../util/base.axios";
import { IPokemonNamedAPIResource, IPokemon } from "../types/pokemon";
import { PokemonType } from "./pokemonTypes";
import { Link } from "react-router-dom";

interface IPokemonCardProps {
  pokemon: IPokemonNamedAPIResource;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export function PokemonCard({
  pokemon,
  isLoading,
  setIsLoading,
}: IPokemonCardProps): JSX.Element {
  const [pokemonDetails, setPokemonDetails] = useState<IPokemon>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(pokemon.url);
        setPokemonDetails(response.data as IPokemon);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [pokemon.url]);

  return (
    <>
      {!isLoading && (
        <Link to={pokemonDetails?.id.toString() ?? ""}>
          <div className="flex h-min max-w-md flex-col justify-center justify-self-center rounded-lg border border-gray-200 bg-white shadow-md transition duration-500 ease-in-out hover:scale-105 hover:cursor-pointer">
            <img
              className="h-auto w-full overflow-hidden object-cover object-center"
              src={
                pokemonDetails?.sprites?.other["official-artwork"].front_default
              }
              alt={pokemonDetails?.name}
            />
            {/* pokemon info */}
            <div className="w-full p-4">
              {/* pokemon id */}
              <p className="font-semibold uppercase tracking-wide text-gray-400">
                <span># {pokemonDetails?.id}</span>
              </p>
              {/* pokemon name */}
              <h5 className="text-xl font-extrabold capitalize tracking-wide">
                {pokemonDetails?.name}
              </h5>
              {/* abilities */}
              <PokemonType types={pokemonDetails?.types} />
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
