import { useParams } from "react-router-dom";
import { Layout } from "../layout/layout";
import { IPokemon } from "../types/pokemon";

interface IPokemonProfileProps {
  pokemonDetails?: IPokemon;
}

export function PokemonProfile(props: IPokemonProfileProps) {
  const { id } = useParams();
  console.log(id);
  return (
    <Layout>
      <div className="align-center flex h-full w-full flex-col">
        <h1 className="text-center text-4xl capitalize">
          pokemon <span>#001</span>
        </h1>
        <div className="grid grid-cols-2">
          <div className="flex justify-center">
            <img
              className="overflow-hidden object-cover object-center"
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
              alt=""
            />
          </div>

          <div className="border border-black"></div>
        </div>
      </div>
    </Layout>
  );
}
