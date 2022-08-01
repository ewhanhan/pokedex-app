interface IPokemonHeader {
  title: string;
}

export function PokemonHeader({title}: IPokemonHeader) {
  return (
    <div className="mb-2 w-full">
      <h3 className="text-center text-lg font-semibold capitalize tracking-wider">
        {title}
      </h3>
    </div>
  );
}
