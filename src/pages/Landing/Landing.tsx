import {useEffect, useState} from 'react';
import {
  PokemonCard,
  Layout,
  PageNavigation,
  PokemonSearchBar,
  Loading,
} from '../../components/index';
import {getPokemonByPage} from '../../util/index';
import {IPokemonNamedAPIResource, LOADER} from '../../types/index';

export function Landing(): JSX.Element {
  const [pokemonList, setPokemonList] = useState<IPokemonNamedAPIResource[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [pageOffset, setPageOffset] = useState(0);
  const [, setError] = useState<unknown>(undefined);

  useEffect(() => {
    (async function getPokemon() {
      try {
        const data = await getPokemonByPage(20, pageOffset);
        setPokemonList(data.results);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    })();
  }, [pageOffset]);

  return (
    <Layout>
      <Loading
        type={LOADER.GRID}
        size={50}
        loading={isLoading}
        speedMultiplier={0.85}
      />
      {!isLoading && pokemonList && (
        <div className="relative mx-auto grid grid-cols-1 justify-center gap-4 md:container md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <PokemonSearchBar />
          {pokemonList.map((pokemon) => {
            return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
          })}
          <PageNavigation offSet={pageOffset} setPageOffset={setPageOffset} />
        </div>
      )}
    </Layout>
  );
}
