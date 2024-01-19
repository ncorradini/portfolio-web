export type TExperience = {
  date: string;
  position: string;
  company: string;
  description: string;
};

export const EXPERIENCES: TExperience[] = [
  {
    date: 'Oct. 2023 - Actualidad',
    position: 'Desarrollador web full-stack',
    company: 'Agencia Esto Es',
    description:
      'Responsable del desarrollo de UIs dinámicas y servicios escalables con código eficiente. Colaboración en la traducción de requisitos a especificaciones técnicas. Gestión de despliegues y mantenimientos en entornos de producción.'
  },
  {
    date: 'Ago. 2022 - Oct. 2023',
    position: 'Desarrollador web front-end',
    company: 'Agencia Esto Es',
    description:
      'Encargado del desarrollo de interfaces dinámicas y responsivas. Mejora en la escalabilidad y eficiencia de los proyectos. Implementación y mantenimiento de sitios en producción.'
  }
];
