import {IType} from '../../types/Pokemon/Pokemon';

interface IPokemonTypeProps {
  types?: IType[];
}
export function PokemonType({types}: IPokemonTypeProps) {
  let id = 0;

  const updateId = (): number => {
    id += 1;
    return id;
  };

  return types !== undefined ? (
    <div className="mt-2 grid w-full grid-cols-2 gap-2">
      {types.map(({type: {name}}) => {
        const className = [
          'rounded-md border border-black p-0.5 text-center font-normal capitalize col-span-1 text-white',
        ];

        if (name === 'grass') {
          className.push('bg-green-600');
        } else if (name === 'poison') {
          className.push('bg-purple-600');
        } else if (name === 'fire') {
          className.push('bg-red-600');
        } else if (name === 'water') {
          className.push('bg-blue-600');
        } else if (name === 'bug') {
          className.push('bg-green-700');
        } else if (name === 'normal') {
          className.push('bg-gray-400');
          className.push('text-black');
        } else if (name === 'flying') {
          className.push('bg-gradient-to-r from-cyan-500 to-blue-500');
        } else if (name === 'fairy') {
          className.push('bg-pink-300');
          className.push('text-black');
        } else {
          className.push('text-black');
        }

        return (
          <span key={updateId()} className={className.join(' ')}>
            {name}
          </span>
        );
      })}
    </div>
  ) : null;
}
