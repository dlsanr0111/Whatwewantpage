import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Team } from '../components/Team';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { Contact } from '../components/Contact';
import { Navigation } from '../components/Navigation';

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Navigation />
      <Hero />
      <Features />
      <Team />
      <FeaturedProjects />
      <Contact />
    </div>
  );
}

