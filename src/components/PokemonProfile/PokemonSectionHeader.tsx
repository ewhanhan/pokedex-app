import cs from 'clsx';

interface IPokemonSectionHeaderProps {
  colour: string;
  sectionTitle: string;
}

export function PokemonSectionHeader({
  colour,
  sectionTitle,
}: IPokemonSectionHeaderProps) {
  const classNames = cs('mb-2 border border-black py-1 md:my-2.5', colour);
  return (
    <div className={classNames}>
      <h3 className="ml-2.5 text-xl font-semibold capitalize tracking-widest">
        {sectionTitle}
      </h3>
    </div>
  );
}
