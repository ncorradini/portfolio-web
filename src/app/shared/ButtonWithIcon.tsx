import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  button: {
    text: string;
    icon?: ReactNode;
    href: string;
  };
  className?: string;
};

function ButtonWithIcon({ button, className }: Props) {
  const mergeClasses = twMerge(
    'hover:border-lightAzure flex w-fit min-w-[70px] items-center justify-center gap-2 rounded-full border-2 border-solid border-onyx bg-white/5 px-4 py-2 text-center text-platinum duration-300 ease-in-out hover:scale-105',
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

ButtonWithIcon.defaultProps = {
  className: ''
};

export default ButtonWithIcon;
