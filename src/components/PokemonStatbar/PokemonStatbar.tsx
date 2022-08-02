/* eslint-disable camelcase */
import {motion} from 'framer-motion';

interface IPokemonStatbar {
  colour: string;
  base_stat: number;
}

export function PokemonStatbar({colour, base_stat}: IPokemonStatbar) {
  return (
    <motion.div className="mb-4 mt-0.5 flex h-5 w-full bg-gray-200">
      <motion.div
        animate={{width: ['0%', `${base_stat}%`]}}
        transition={{
          type: 'ease-in-out',
          duration: 2,
        }}
        className={`h-5 ${colour}`}
        style={{width: `${base_stat}%`}}
      />
    </motion.div>
  );
}
