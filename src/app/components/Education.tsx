import { STUDY_CAREERS, TStudyCareer } from '@Constants/education-careers';

function Education() {
  return (
    <section id="education" className="pb-20">
      <h2 className="flex items-center gap-2 text-xl font-semibold leading-none md:gap-3 md:text-[32px]">
        Educación
      </h2>
      <ol className="justify-between md:flex">
        {STUDY_CAREERS.map((studyCareer) => (
          <StudyCareer key={studyCareer.id} studyCareer={studyCareer} />
        ))}
      </ol>
    </section>
  );
}

export default Education;

type TStudyCareerProps = {
  studyCareer: TStudyCareer;
};

function StudyCareer({ studyCareer }: TStudyCareerProps) {
  const divider =
    studyCareer.id > 1
      ? 'md:border-l border-solid border-silverSand dark:border-onyx md:pl-10'
      : '';

  return (
    <>
      <li className={`${divider} my-5 w-full md:my-10`}>
        <h3 className="text-md leading-6 text-chineseBlack md:text-xl dark:text-white">
          {studyCareer.career}
        </h3>
        <a
          href={studyCareer.institution.href}
          target="_blank"
          rel="noreferrer"
          className="block w-fit text-sm leading-6 text-lightAzure underline"
        >
          {studyCareer.institution.name}
        </a>
        <time className="text-xs  opacity-70 md:text-sm">
          {studyCareer.date}
        </time>
      </li>
      {studyCareer.id < STUDY_CAREERS.length && (
        <hr className="block border-silverSand md:hidden dark:border-onyx" />
      )}
    </>
  );
}
