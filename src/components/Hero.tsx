import linkedinIcon from "../assets/icons/linkedin.svg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-4xl w-full pt-20">
        {/* Badge de Status */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Disponível para novos projetos
        </div>

        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl font-bold text-content tracking-tight mb-6">
          Desenvolvedor Front-end <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
            com Visão de Negócio.
          </span>
        </h1>

        {/* Subtítulo / Pitch */}
        <p className="text-lg md:text-xl text-secondary max-w-2xl mb-10 leading-relaxed">
          Olá, sou <strong className="text-content">Matheus Carvalho</strong>.
          Uni minha experiência comercial à tecnologia para criar interfaces que
          não apenas funcionam, mas resolvem problemas reais. Especialista em
          traduzir necessidades de clientes em código limpo.
        </p>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projetos"
            className="px-8 py-4 rounded-lg bg-primary text-white font-semibold hover:bg-blue-700 transition-colors text-center"
          >
            Ver Projetos
          </a>

          <a
            href="https://linkedin.com/in/mcarvalho-dev"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-lg border border-secondary/30 text-content hover:bg-secondary/5 transition-colors flex items-center justify-center gap-2"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-5 h-5 dark:invert"
            />
            LinkedIn
          </a>
        </div>

        {/* Tech Stack (Rodapé da seção com Ícones) */}
        <div className="mt-20 pt-8 border-t border-secondary/20">
          <p className="text-sm text-secondary mb-4 uppercase tracking-wider font-semibold">
            Tech Stack
          </p>
          <div className="flex gap-6 items-center flex-wrap">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML5"
              className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
              title="HTML5"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS3"
              className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
              title="CSS3"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="TypeScript"
              className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
              title="TypeScript"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
              title="React"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              alt="Next.js"
              className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer dark:invert"
              title="Next.js"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
              className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
              title="Node.js"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg"
              alt="NestJS"
              className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
              title="NestJS"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
              alt="Tailwind"
              className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
              title="Tailwind CSS"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Git"
              className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
              title="Git"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
