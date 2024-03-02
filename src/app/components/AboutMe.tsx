import { BUTTONS_LINKS } from '@Constants/about-links';
import ButtonWithIcon from 'app/shared/ButtonWithIcon';

function AboutMe() {
  return (
    <section
      id="about-me"
      className="mt-[80px] flex max-w-[580px] flex-col gap-[32px] md:mt-[150px]"
    >
      <h1 className="border-l-4 border-solid border-l-cafeAuLait pl-4 text-[48px] font-semibold leading-none md:text-[60px] dark:border-l-desertSand">
        Corradini Nicolás
      </h1>
      <p className="text-md font-light md:text-2xl">
        Desarrollador web con <strong>+1 año de experiencia</strong>.
        Especializado en la construcción y mantenimiento de <strong>UIs</strong>{' '}
        y <strong>servicios web</strong>.
      </p>
      <div className="flex gap-4">
        {BUTTONS_LINKS.map((button) => (
          <ButtonWithIcon key={button.text} button={button} />
        ))}
      </div>
    </section>
  );
}

export default AboutMe;
