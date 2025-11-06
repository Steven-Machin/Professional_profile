import Projects from './Projects';
import MainLayout from './MainLayout';

const Portfolio = () => {
  return (
    <MainLayout>
      <div className="portfolio-container">
        <Projects />
      </div>
    </MainLayout>
  );
};

export default Portfolio;
