import MainLayout from './MainLayout';
import ProjectsGrid from './ProjectsGrid';

const Portfolio = () => {
  return (
    <MainLayout>
      <div className="portfolio-container">
        <ProjectsGrid />
      </div>
    </MainLayout>
  );
};

export default Portfolio;
