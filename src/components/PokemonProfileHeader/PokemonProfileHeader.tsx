interface IPokemonProfileHeaderProps {
  name: string;
  id: number;
}

export function PokemonProfileHeader({name, id}: IPokemonProfileHeaderProps) {
  return (
    <div className="relative my-5">
      <h1 className="text-center text-4xl capitalize">
        {name} <span># {id}</span>
      </h1>
    </div>
  );
}
