import EmailIcon from '@Icons/EmailIcon';
import GitHubIcon from '@Icons/GitHubIcon';
import LinkedInIcon from '@Icons/LinkedInIcon';
import { GITHUB_LINK, GMAIL_LINK, LINKEDIN_LINK } from '@Utils/links';
import ButtonWithIcon from 'app/shared/ButtonWithIcon';

const ICON_SIZE = 'h-5';

const BUTTONS_LINKS = [
  {
    text: 'LinkedIn',
    icon: <LinkedInIcon className={ICON_SIZE} />,
    href: LINKEDIN_LINK
  },
  {
    text: 'GitHub',
    icon: <GitHubIcon className={ICON_SIZE} />,
    href: GITHUB_LINK
  },
  {
    text: 'nicocorradini471@gmail.com',
    icon: <EmailIcon className={ICON_SIZE} />,
    href: GMAIL_LINK
  }
];

function AboutMe() {
  return (
    <section
      id="presentation"
      className="mt-[130px] flex max-w-[580px] flex-col gap-[32px] md:mt-[150px]"
    >
      <h1 className="border-l-4 border-solid border-l-lightAzure pl-4 text-[48px] font-semibold leading-none md:text-[60px]">
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
