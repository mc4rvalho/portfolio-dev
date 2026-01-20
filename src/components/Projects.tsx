export const Projects = () => {
  // Aqui ficam os dados dos seus projetos.
  // Quando tiver prints reais, coloque-os na pasta 'public' e use o caminho "/nome-da-imagem.png"
  const projects = [
    {
      title: "Dashboard Financeiro",
      description:
        "Uma aplicação de controle de gastos pessoais que permite visualização de dados em gráficos interativos. O foco foi criar uma experiência mobile-first com performance otimizada.",
      tags: ["React", "TypeScript", "Chart.js", "Styled Components"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000", // Imagem placeholder
      repoUrl: "https://github.com/seu-usuario/repo",
      demoUrl: "https://seu-projeto.vercel.app",
    },
    {
      title: "Gestão do Sport Futmesa",
      description:
        "Sistema completo para organização do elenco. Permite cadastro de usuários, cadastro do calendário, cadastrar os campeonatos e acompanhamento de pontuação em tempo real. Resolveu o problema de planilhas manuais complexas.",
      tags: ["React", "TypeScript", "Nextjs", "Tailwind CSS", "MySQL"],
      image:
        "https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&q=80&w=1000",
      repoUrl: "https://github.com/mcarvalho093", // Atualize com o link real depois
      demoUrl: "#",
    },
    {
      title: "App de Clima",
      description:
        "Consumindo a OpenWeather API para fornecer previsões em tempo real. Implementei geolocalização e tratamento de erros robusto para conexões lentas.",
      tags: ["JavaScript", "API Rest", "CSS Modules"],
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000", // Imagem placeholder
      repoUrl: "https://github.com/seu-usuario/repo",
      demoUrl: "https://seu-projeto.vercel.app",
    },
  ];

  return (
    <section id="projetos" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-content mb-16 text-center">
          Projetos Selecionados
        </h2>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <div
              key={index}
              // A mágica acontece aqui: 'lg:flex-row-reverse' inverte a ordem se o index for ímpar
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Área da Imagem */}
              <div className="w-full lg:w-1/2 group relative overflow-hidden rounded-xl border border-secondary/20 shadow-lg">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Área do Texto */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h3 className="text-2xl font-bold text-content">
                  {project.title}
                </h3>

                <p className="text-secondary leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-secondary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-2">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-content font-semibold hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Código
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-content font-semibold hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
