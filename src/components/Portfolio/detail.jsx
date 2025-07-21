import React from "react";

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-dark bg-opacity-75 flex justify-center items-center z-[99999]">
      <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 md:w-3/4 lg:w-1/2 max-h-full overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Close
          </button>
        </div>
        <p className="mb-6">{project.description}</p>
        <div className="space-y-4">
          <img
            src={project.imageUrl}
            alt="Project"
            className="w-full rounded"
          />
          {project.imageUrl2 && (
            <img
              src={project.imageUrl2}
              alt="Project additional"
              className="w-full rounded"
            />
          )}
          {project.imageUrl3 && (
            <img
              src={project.imageUrl3}
              alt="Project additional"
              className="w-full rounded"
            />
          )}
          {project.imageUrl4 && (
            <img
              src={project.imageUrl4}
              alt="Project additional"
              className="w-full rounded"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
