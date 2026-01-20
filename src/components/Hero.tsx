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
          Olá, sou <strong className="text-content">Matheus da Silva Carvalho</strong>. Uni minha
          experiência comercial à tecnologia para criar interfaces que não
          apenas funcionam, mas resolvem problemas reais. Especialista em
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
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Tech Stack (Rodapé da seção) */}
        <div className="mt-20 pt-8 border-t border-secondary/20">
          <p className="text-sm text-secondary mb-4 uppercase tracking-wider font-semibold">
            Tech Stack
          </p>
          <div className="flex gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            {/* Você pode substituir por ícones SVG reais depois */}
            <span className="font-bold text-content">REACT</span>
            <span className="font-bold text-content">TYPESCRIPT</span>
            <span className="font-bold text-content">TAILWIND</span>
            <span className="font-bold text-content">GIT</span>
          </div>
        </div>
      </div>
    </section>
  );
};
