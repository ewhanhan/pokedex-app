import {PokemonSectionHeader} from './index';

interface IPokemonSectionProps {
  sectionTitle: string;
  colour: string;
  children: React.ReactNode;
}

export function PokemonSection({
  sectionTitle,
  colour,
  children,
}: IPokemonSectionProps) {
  return (
    <div className="flex w-full flex-col">
      <PokemonSectionHeader sectionTitle={sectionTitle} colour={colour} />
      {children}
    </div>
  );
}
