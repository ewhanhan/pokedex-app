import {useParams} from 'react-router-dom';
import {Layout} from '../../components/index';
import {IPokemon} from '../../types/index';

interface IPokemonProfileProps {
  pokemonDetails?: IPokemon;
}

export function PokemonProfile({pokemonDetails}: IPokemonProfileProps) {
  const {id} = useParams();
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

          <div className="border border-black">{pokemonDetails?.height}</div>
        </div>
      </div>
    </Layout>
  );
}
