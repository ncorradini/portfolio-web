import { ReactNode } from 'react';

type Props = {
  button: {
    text: string;
    icon: ReactNode;
    href: string;
  };
};

function ButtonWithIcon({ button }: Props) {
  const { text, icon, href } = button;

  return (
    <button type="button">
      <a
        href={href}
        target="_blank"
        className="flex w-fit min-w-[70px] items-center justify-center gap-2 rounded-full border-2 border-solid border-[#3a3a41] bg-white/5 px-4 py-2 text-center text-platinum duration-300 ease-in-out hover:scale-105 hover:border-vistaBlue"
        rel="noreferrer"
      >
        {icon}
        <p className="hidden text-sm md:block">{text}</p>
      </a>
    </button>
  );
}

export default ButtonWithIcon;
