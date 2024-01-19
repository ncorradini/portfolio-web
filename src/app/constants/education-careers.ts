export type TStudyCareer = {
  id: number;
  career: string;
  institution: {
    name: string;
    href: string;
  };
  date: string;
};

export const STUDY_CAREERS: TStudyCareer[] = [
  {
    id: 1,
    career: 'Técnico Superior en Análisis de Sistemas',
    institution: {
      name: 'Instituto Superior de Informática Virasoro',
      href: 'https://www.isiv.edu.ar/'
    },
    date: '2021 - Cursando actualmente'
  },
  {
    id: 2,
    career: 'Técnico Superior en Diseño Gráfico',
    institution: {
      name: 'Escuela Superior de Bellas Artes Emiliano Gómez Clara',
      href: 'https://esbagomezclara-cba.infd.edu.ar'
    },
    date: '2018 - 2020 (Recibido)'
  }
];
