import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Features } from './components/Features';
import { Team } from './components/Team';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Navigation />
      <Hero />
      <Highlights />
      <Features />
      <Team />
      <Projects />
      <Contact />
    </div>
  );
}