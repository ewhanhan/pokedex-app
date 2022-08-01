import cs from 'clsx';
import {IAbility} from '../../types/index';
import {useComponentId} from '../../util/index';
import {PokemonHeader} from '../index';

interface IPokemonAbilitiesProps {
  abilities: IAbility[];
}
export function PokemonAbilities({abilities}: IPokemonAbilitiesProps) {
  const componentId = useComponentId();

  const parentClassNames = cs('grid max-h-8 w-ful gap-2 mb-4', {
    'grid-cols-1': abilities.length === 1,
    'grid-cols-2': abilities.length === 2,
  });

  return (
    <>
      <PokemonHeader title="Abilities" />
      <div className={parentClassNames}>
        {abilities.map((ability: IAbility) => {
          return (
            <span
              key={componentId + Math.random()}
              className="col-span-1 rounded-md border-none bg-slate-300 p-0.5 text-center font-semibold capitalize text-black">
              {ability.ability.name}
            </span>
          );
        })}
      </div>
    </>
  );
}
