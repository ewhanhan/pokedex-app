import {IAbility} from '../../types/index';
import {useComponentId, cleanedStringName} from '../../util/index';
import {PokemonHeader} from '../index';

interface IPokemonAbilitiesProps {
  abilities: IAbility[];
}
export function PokemonAbilities({abilities}: IPokemonAbilitiesProps) {
  const componentId = useComponentId();

  return (
    <>
      <PokemonHeader title="Abilities" />
      <div className="w-ful mb-4 grid max-h-8 gap-2">
        {abilities.map((ability: IAbility) => {
          let {name} = ability.ability;
          name = cleanedStringName(name);

          return (
            <span
              key={componentId + Math.random()}
              className="col-span-1 rounded-md border-none bg-slate-300 p-0.5 text-center font-semibold capitalize text-black">
              {name}
            </span>
          );
        })}
      </div>
    </>
  );
}
