import codeIcon from "../assets/icons/code.svg";
import demoIcon from "../assets/icons/demo.svg";

export const Projects = () => {
  const projects = [
    {
      title: "Dashboard Financeiro",
      description:
        "Uma aplicação de controle de gastos pessoais que permite visualização de dados em gráficos interativos. O foco foi criar uma experiência mobile-first com performance otimizada.",
<<<<<<< HEAD
      tags: ["React", "TypeScript", "Tailwind CSS", "Styled Components"],
=======
      tags: ["React", "TypeScript", "Tailwind CSS],
>>>>>>> 8062a236cd12a0b8de4004a470baf39669a07bc8
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      repoUrl: "https://github.com/mc4rvalho/dashboard-financeiro",
      demoUrl: "https://mc4rvalho.github.io/dashboard-financeiro/",
    },
    {
      title: "Gestão do Sport Futmesa",
      description:
        "Sistema completo para organização do elenco. Permite cadastro de usuários, cadastro do calendário, cadastrar os campeonatos e acompanhamento de pontuação em tempo real. Resolveu o problema de planilhas manuais complexas.",
      tags: ["React", "TypeScript", "Nextjs", "Tailwind CSS", "MySQL"],
      image:
        "https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&q=80&w=1000",
      repoUrl: "https://github.com/mc4rvalho/sport-app",
      demoUrl: "#",
    },
    {
      title: "App de Clima",
      description:
        "Consumindo a OpenWeather API para fornecer previsões em tempo real. Implementei geolocalização e tratamento de erros robusto para conexões lentas.",
<<<<<<< HEAD
      tags: ["React", "TypeScript", "API Rest", "Tailwind CSS"],
=======
      tags: ["React", "TypeScript" "API Rest", "Tailwind CSS"],
>>>>>>> 8062a236cd12a0b8de4004a470baf39669a07bc8
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000",
      repoUrl: "https://github.com/mc4rvalho/weather-app",
      demoUrl: "https://mc4rvalho.github.io/weather-app/",
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
                      className="px-3 py-1 text-sm font-medium rounded-full bg-secondary/10 text-primary border border-primary/20"
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
                    className="px-4 py-2 rounded-lg border border-secondary/30 text-content hover:bg-secondary/5 transition-colors flex items-center gap-2 font-medium"
                  >
                    <img
                      src={codeIcon}
                      alt="Código"
                      className="w-5 h-5 dark:invert"
                    />
                    Código
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-blue-600 transition-colors flex items-center gap-2 font-medium"
                  >
                    <img src={demoIcon} alt="Demo" className="w-5 h-5 invert" />
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
