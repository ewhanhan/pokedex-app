import { useEffect, useState } from "react";
import { PokemonCard } from "../components/pokemonCard";
import axiosInstance from "../util/base.axios";

import { IPokemonNamedAPIResource } from "../types/pokemon";
import { Layout } from "../layout/layout";

function App(): JSX.Element {
  const [pokemonList, setPokemonList] = useState<IPokemonNamedAPIResource[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [pageOffset, setPageOffset] = useState(0);
  const [, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get("pokemon", {
          params: {
            limit: 20,
            offset: pageOffset,
          },
        });
        setPokemonList(response.data.results);
        setIsLoading(false);
      } catch (error: Error | unknown) {
        if (error instanceof Error) {
          console.error(error);
          setError(error);
        } else {
          console.error(error);
        }
        setIsLoading(false);
      }
    }

    fetchData();
  }, [pageOffset]);

  return (
    <Layout>
      {isLoading && <div>loading...</div>}
      {!isLoading && pokemonList && (
        <>
          <div className="relative mx-auto grid h-screen grid-cols-1 justify-center gap-4 md:container md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {pokemonList.map((pokemon) => {
              return (
                <PokemonCard
                  key={pokemon.name}
                  pokemon={pokemon}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              );
            })}
            <div className="mt-2 mb-4 flex w-full justify-between md:col-span-2 lg:col-span-3 xl:col-span-4">
              <button
                className="rounded-md border p-2 shadow-md"
                onClick={() => {
                  setPageOffset((prev) => prev - 20);
                }}
              >
                PREV
              </button>
              <button
                className="rounded-md border p-2 shadow-md"
                onClick={() => {
                  setPageOffset((prev) => prev + 20);
                }}
              >
                NEXT
              </button>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}

export default App;
