import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type TButtonWithIconsProps = {
  button: {
    text: string;
    icon?: ReactNode;
    href: string;
  };
  className?: string;
};

function ButtonWithIcon({ button, className = '' }: TButtonWithIconsProps) {
  const mergeClasses = twMerge(
    'hover:border-cafeAuLait/20 dark:hover:border-desertSand/20 flex w-fit min-w-[70px] items-center justify-center gap-2 rounded-full border-2 border-solid border-onyx/10 dark:border-onyx bg-black/5 dark:bg-white/5 px-4 py-2 text-center text-onyx/90 dark:text-platinum duration-300 hover:scale-105',
    className
  );
  const { text, icon, href } = button;

  return (
    <button type="button">
      <a href={href} target="_blank" className={mergeClasses} rel="noreferrer">
        {icon}
        <p className={`${icon && 'hidden'} text-sm md:block`}>{text}</p>
      </a>
    </button>
  );
}

export default ButtonWithIcon;
