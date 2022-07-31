interface PokemonProfileHeaderProps {
  name: string;
  id: number;
}

export function PokemonProfileHeader({name, id}: PokemonProfileHeaderProps) {
  return (
    <div className="relative my-5">
      <h1 className="text-center text-4xl capitalize">
        {name} <span># {id}</span>
      </h1>
    </div>
  );
}
