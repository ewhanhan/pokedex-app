/* eslint-disable camelcase */
import {Fragment} from 'react';
import {motion} from 'framer-motion';
import {IStats} from '../../types/index';
import {PokemonStatbar} from '../PokemonStatbar/PokemonStatbar';
import {useComponentId, cleanedStringName} from '../../util/index';
import {PokemonHeader} from '../index';

interface IPokemonStatsProps {
  colour: string;
  stats: IStats[];
}

function computeMaxStat(stat_name: string, stat: number): number {
  const max_stat =
    stat_name === 'health' ? stat * 2 + 204 : (stat * 2 + 99) * 1.1;
  return Math.floor(max_stat);
}

export function PokemonStats({colour, stats}: IPokemonStatsProps): JSX.Element {
  const componentId = useComponentId();
  return (
    <>
      <PokemonHeader title="Base Stats" />
      <div className="mt-2.5 grid grid-cols-8">
        {stats.map(({base_stat, stat: {name}}: IStats) => {
          const stat_name = cleanedStringName(name);
          const max_stat = computeMaxStat(stat_name, base_stat);
          const stat = Math.floor((base_stat / max_stat) * 100);

          return (
            <Fragment key={componentId + Math.random()}>
              <span className="col-span-3 font-semibold uppercase">
                {stat_name}
              </span>
              <motion.div className="col-span-1">
                <span className="float-right mr-1 text-slate-400">
                  ({base_stat})
                </span>
              </motion.div>
              <div className="col-span-4">
                <PokemonStatbar colour={colour} base_stat={stat} />
              </div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
