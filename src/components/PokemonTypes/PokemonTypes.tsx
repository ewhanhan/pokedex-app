import cs from 'clsx';
import {IType} from '../../types/Pokemon/Pokemon';
import {useComponentId} from '../../util/index';

interface IPokemonTypeProps {
  types?: IType[];
}

// https://www.robinwieruch.de/react-conditional-classname/
export function PokemonType({types}: IPokemonTypeProps) {
  const componentId = useComponentId();

  if (types === undefined) return null;

  const parentClassNames = cs('grid max-h-8 w-ful gap-2', {
    'grid-cols-1': types.length === 1,
    'grid-cols-2': types.length === 2,
  });

  return (
    <div className={parentClassNames}>
      {types.map(({type: {name}}) => {
        const classNames = cs(
          'rounded-md border-none p-0.5 text-center font-semibold capitalize col-span-1 text-white',
          {
            'bg-green-600': name === 'grass',
            'bg-purple-600': name === 'poison',
            'bg-red-600': name === 'fire',
            'bg-blue-600': name === 'water',
            'bg-green-700': name === 'bug',
            'bg-gray-400 text-black': name === 'normal',
            'bg-gradient-to-r from-cyan-500 to-blue-500': name === 'flying',
            'bg-pink-300 text-black': name === 'fairy',
            'bg-yellow-300 text-black': name === 'electric',
            'bg-yellow-600': name === 'ground',
            'bg-yellow-700': name === 'fighting',
            'bg-pink-500': name === 'psychic',
            'bg-yellow-900': name === 'rock',
            'bg-gray-600': name === 'steel',
            'bg-cyan-500 text-black': name === 'ice',
            'bg-violet-700': name === 'ghost',
            'bg-gradient-to-r from-sky-500 to-orange-500': name === 'dragon',
            'bg-zinc-600': name === 'dark',
          }
        );

        return (
          <span key={componentId + Math.random()} className={classNames}>
            {name}
          </span>
        );
      })}
    </div>
  );
}
