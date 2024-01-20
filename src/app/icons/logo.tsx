import { twMerge } from 'tailwind-merge';
import * as types from './types/icon.types';

function LogoIcon({ className, ...rest }: types.IconComponentProps) {
  const mergeClasses = twMerge('h-4 w-fit', className);

  return (
    <svg
      className={mergeClasses}
      fill="currentColor"
      viewBox="0 0 500 500"
      {...rest}
    >
      <polygon points="325.45 121.51 325.27 121.51 286.77 121.51 400.09 338.46 363.09 338.46 249.77 121.51 249.59 121.51 162.98 121.51 162.14 121.51 41.89 377.14 77.2 377.14 178.11 160.19 230.25 160.19 344.61 377.14 359.75 377.14 383.29 377.14 420.29 377.14 421.97 377.14 458.97 377.14 325.45 121.51" />
      <polygon points="247.43 301.46 264.27 338.46 155.03 338.46 206.25 211 218.34 237.55 253.37 237.55 226.37 182.88 182.43 182.88 97.39 378 322.75 378 284.94 301.46 247.43 301.46" />
    </svg>
  );
}

export default LogoIcon;
