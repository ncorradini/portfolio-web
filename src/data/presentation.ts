type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "nicocorradini471@gmail.com",
  title: "Nicolás Corradini, 👋🏻",
  description:
    "Desarrollador de software con *+2 años de experiencia*, especializado en *front-end* con sólida competencia full-stack. Manejo de stack tecnológico: TypeScript, React JS, Next.js, Node.js y NestJS.",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/nicolascorradini/",
    },
    {
      label: "Github",
      link: "https://github.com/ncorradini",
    }
  ],
};

export default presentation;
