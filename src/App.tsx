import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllProjectsPage from './pages/AllProjectsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<AllProjectsPage />} />
    </Routes>
  );
}