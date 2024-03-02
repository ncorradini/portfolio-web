import { EXPERIENCES, TExperience } from '@Constants/job-experiences';
import ButtonWithIcon from '@Shared/ButtonWithIcon';
import { CV_LINK } from '@Utils/links';

function JobExperience() {
  return (
    <section id="experience">
      <h2 className="flex items-center gap-2 text-xl font-semibold leading-none md:gap-3 md:text-[32px]">
        Experiencia laboral
      </h2>
      <ol className="relative ml-1 mt-5 max-w-[700px] border-s border-cadetBlue md:ml-3 md:mt-10">
        {EXPERIENCES.map((experience) => (
          <PositionExperience key={experience.date} experience={experience} />
        ))}
      </ol>
      <ButtonWithIcon
        button={{ text: 'Descargar CV', href: CV_LINK }}
        className="w-[200px]"
      />
    </section>
  );
}

export default JobExperience;

type TPositionExperienceProps = {
  experience: TExperience;
};

function PositionExperience({ experience }: TPositionExperienceProps) {
  const { date, position, company, description } = experience;

  return (
    <li className="mb-10 ms-4">
      <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-onyx dark:bg-white" />
      <time className="mb-1 text-xs leading-none opacity-70 md:text-sm">
        {date}
      </time>
      <h3 className="text-md mt-2 leading-5 text-desertSand md:text-lg">
        <strong>{position}</strong>
        <br className="block md:hidden" />
        <span className="text-xs text-chineseBlack md:text-sm dark:text-white">
          {' '}
          - {company}
        </span>
      </h3>
      <p className="mb-4 mt-2 text-sm text-chineseBlack/80 md:mt-0 md:text-base dark:text-cadetBlue">
        {description}
      </p>
    </li>
  );
}
