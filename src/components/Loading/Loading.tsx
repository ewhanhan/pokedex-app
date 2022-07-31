import {GridLoader, ScaleLoader} from 'react-spinners';
import {LOADER} from '../../types/index';

interface LoaderProps {
  type?: LOADER;
  color?: string;
  width?: number;
  height?: number;
  size?: number;
  loading?: boolean;
  speedMultiplier?: number;
}

export function Loading({
  type = LOADER.SCALE,
  color = '#E3350D',
  width = 4,
  height = 35,
  size = 15,
  loading = false,
  speedMultiplier = 1,
}: LoaderProps): JSX.Element | null {
  const baseClass = ['flex h-full items-center justify-center'];
  let loader = (
    <div className={baseClass.join(' ')}>
      <ScaleLoader
        color={color}
        width={width}
        height={height}
        loading={loading}
        speedMultiplier={speedMultiplier}
      />
    </div>
  );

  if (!loading) return null;

  switch (type) {
    case LOADER.GRID:
      loader = (
        <div className={baseClass.join(' ')}>
          <GridLoader
            color={color}
            size={size}
            loading={loading}
            speedMultiplier={speedMultiplier}
          />
        </div>
      );
      return loader;
    default:
      return loader;
  }
}
