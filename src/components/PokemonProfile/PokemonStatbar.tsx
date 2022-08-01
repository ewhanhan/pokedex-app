/* eslint-disable camelcase */
interface IPokemonStatbar {
  colour: string;
  base_stat: number;
}
export function PokemonStatbar({colour, base_stat}: IPokemonStatbar) {
  return (
    <div className="mb-4 h-5 w-full bg-gray-200">
      <div className={`h-5 ${colour}`} style={{width: `${base_stat}%`}} />
    </div>
  );
}
