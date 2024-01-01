import EmailIcon from '@Icons/EmailIcon';
import GitHubIcon from '@Icons/GitHubIcon';
import LinkedInIcon from '@Icons/LinkedInIcon';
import ButtonWithIcon from 'app/shared/ButtonWithIcon';

function AboutMe() {
  return (
    <section className="mt-[150px] flex max-w-[570px] flex-col gap-[32px]">
      <h1 className="border-l-4 border-solid border-l-vistaBlue pl-4 text-[48px] font-semibold leading-none text-platinum md:text-[60px]">
        Corradini Nicolás
      </h1>
      <p className="text-md font-light text-platinum md:text-2xl">
        Soy desarrollador web con{' '}
        <span className="text-highlighted">+1 año de experiencia</span>. He
        participado en diversos proyectos, donde he desarrollado{' '}
        <span className="text-highlighted">UIs</span> y{' '}
        <span className="text-highlighted">servicios REST</span>.
      </p>
      <div className="flex gap-4">
        <ButtonWithIcon
          text="LinkedIn"
          icon={<LinkedInIcon className="h-5" />}
          href="https://www.linkedin.com/in/nicolascorradini/"
        />
        <ButtonWithIcon
          text="GitHub"
          icon={<GitHubIcon className="h-5" />}
          href="https://github.com/ncorradini"
        />
        <ButtonWithIcon
          text="nicocorradini471@gmail.com"
          icon={<EmailIcon className="h-5" />}
          href="mailto:nicocorradini471@gmail.com"
        />
      </div>
    </section>
  );
}

export default AboutMe;
