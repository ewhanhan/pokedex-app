/* eslint-disable react/void-dom-elements-no-children */
import {useState, useRef, useEffect} from 'react';
import {debounce} from 'lodash';
import {MagnifyingGlass} from 'phosphor-react';
import {getPokemonByNameOrId} from '../../util/index';

// https://www.carlrippon.com/using-lodash-debounce-with-react-and-ts/

export function PokemonSearchBar() {
  const [input, setInput] = useState('');

  async function searchPokedex(val: string) {
    const res = await getPokemonByNameOrId(val);
    console.log(res); // !TODO: debounce, try-catch, set data, loading
  }

  const debouncedSearch = useRef(
    debounce(async (userInput: string) => {
      await searchPokedex(userInput);
    }, 500)
  ).current;

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    const userInput = e.target.value;
    if (userInput !== '') {
      debouncedSearch(userInput);
    }
    setInput(userInput);
  }

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
      <div className="flex items-center justify-center">
        <div className="flex w-full justify-between rounded-lg border border-gray-800 py-2 px-4 capitalize md:w-2/5">
          <input
            type="text"
            id="searchPokemonInput"
            placeholder="search for pokemon..."
            className="focus:shadow-outline form-input w-full appearance-none rounded-lg border-0 bg-transparent font-bold tracking-wide outline-none focus:outline-none"
            value={input}
            onChange={onChangeHandler}
          />
          <button type="submit" id="search">
            <MagnifyingGlass size={32} />
          </button>
        </div>
      </div>
    </div>
  );
}
