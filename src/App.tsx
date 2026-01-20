import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { ThemeToggle } from "./components/ThemeToggle";

export function App() {
  return (
    <main className="relative">
      <ThemeToggle />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
