import { Projects } from '../components/Projects';
import { Navigation } from '../components/Navigation';
import { Contact } from '../components/Contact';

export default function AllProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

