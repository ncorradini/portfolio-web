import DevWorkIcon from '@Icons/DevWorkIcon';
import ButtonWithIcon from '@Shared/ButtonWithIcon';
import { CV_LINK } from '@Utils/links';

type Experience = {
  date: string;
  position: string;
  company: string;
  description: string;
};

const EXPERIENCES: Experience[] = [
  {
    date: 'Oct. 2023 - Actualidad',
    position: 'Desarrollador web full-stack',
    company: 'Agencia Esto Es',
    description:
      'Responsable del desarrollo de UIs dinámicas y servicios escalables con código eficiente. Colaboro en la traducción de requisitos a especificaciones técnicas. Gestiono despliegues y mantenimientos en entornos de producción.'
  },
  {
    date: 'Ago. 2022 - Oct. 2023',
    position: 'Desarrollador web front-end',
    company: 'Agencia Esto Es',
    description:
      'Encargado del desarrollo de interfaces dinámicas y responsivas. Mejora en la escalabilidad y eficiencia de los proyectos.Implementación y mantenimiento de sitios en producción.'
  }
];

function JobExperience() {
  return (
    <div className="min-h-[700px]">
      <h2 className="flex items-center gap-2 text-xl font-semibold leading-none md:gap-3 md:text-[32px]">
        <DevWorkIcon className="h-6 text-cadetBlue md:h-7" />
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
    </div>
  );
}

export default JobExperience;

type PositionExperienceProps = {
  experience: Experience;
};

function PositionExperience({ experience }: PositionExperienceProps) {
  const { date, position, company, description } = experience;

  return (
    <li className="mb-10 ms-4">
      <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-white" />
      <time className="mb-1 text-xs leading-none opacity-70 md:text-sm">
        {date}
      </time>
      <h3 className="text-md mt-2 leading-5 text-lightAzure md:text-lg">
        <strong>{position}</strong>
        <br className="block md:hidden" />
        <span className="text-xs text-white md:text-sm">- {company}</span>
      </h3>
      <p className="mb-4 mt-2 text-sm text-cadetBlue md:mt-0 md:text-base">
        {description}
      </p>
    </li>
  );
}
