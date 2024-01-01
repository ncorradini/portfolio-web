import { ReactNode } from 'react';

type Props = {
  text: string;
  icon: ReactNode;
  href: string;
};

function ButtonWithIcon({ text, icon, href }: Props) {
  return (
    <button type="button">
      <a
        href={href}
        target="_blank"
        className="text-platinum hover:border-vistaBlue flex w-fit min-w-[70px] items-center justify-center gap-2 rounded-full border-2 border-solid border-[#3a3a41] bg-white/5 px-4 py-2 text-center duration-300 ease-in-out hover:scale-105"
        rel="noreferrer"
      >
        {icon}
        <p className="hidden text-sm md:block">{text}</p>
      </a>
    </button>
  );
}

export default ButtonWithIcon;
