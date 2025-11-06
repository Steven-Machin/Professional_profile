import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import NovaBotShowcase from './pages/projects/NovaBotShowcase';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects/nova-bot" element={<NovaBotShowcase />} />
        <Route path="/" element={<AboutMe />} />
      </Routes>
    </Router>
  );
};

export default App;
