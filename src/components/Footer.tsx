import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import emailIcon from "../assets/icons/email.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/5 py-12 px-6 border-t border-secondary/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Lado Esquerdo: Marca e Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-content mb-2">
            Matheus Carvalho
          </h2>
          <p className="text-secondary text-sm">
            © {currentYear} • Construído com React & Tailwind
          </p>
        </div>

        {/* Lado Direito: Redes Sociais */}
        <div className="flex gap-6">
          <a
            href="https://github.com/mc4rvalho"
            target="_blank"
            rel="noreferrer"
            className="text-secondary hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="w-6 h-6 dark:invert hover:opacity-80 transition-opacity"
            />
          </a>

          <a
            href="https://linkedin.com/in/mcarvalho-dev"
            target="_blank"
            rel="noreferrer"
            className="text-secondary hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-6 h-6 dark:invert hover:opacity-80 transition-opacity"
            />
          </a>

          <a
            href="mailto:mcarvalho093@gmail.com"
            className="text-secondary hover:text-primary transition-colors"
            aria-label="Email"
          >
            <img
              src={emailIcon}
              alt="Email"
              className="w-6 h-6 dark:invert hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
