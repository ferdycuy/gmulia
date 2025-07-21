import React, { useState } from "react";
import ProjectDetail from "./detail";
import { projects } from "../Data/ProductData";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Calculate the projects to display for the current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(projects.length / projectsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={handlePreviousPage}
            className={`mx-2 bg-white text-secondary hover:bg-blue-700 font-bold py-2 px-4 rounded ${
              currentPage === 1 && "opacity-50 cursor-not-allowed"
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className={`mx-2 bg-white text-secondary hover:bg-blue-700 font-bold py-2 px-4 rounded ${
              currentPage === Math.ceil(projects.length / projectsPerPage) &&
              "opacity-50 cursor-not-allowed"
            }`}
            disabled={
              currentPage === Math.ceil(projects.length / projectsPerPage)
            }
          >
            Next
          </button>
        </div>
      </div>
      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={handleCloseDetail} />
      )}
    </section>
  );
};

export default Portfolio;
