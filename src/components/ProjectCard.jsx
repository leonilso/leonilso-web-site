import React from 'react';
import './ProjectCard.css'; // Importa o CSS para este componente

function ProjectCard({ title, description, imageUrl, projectUrl, githubUrl }) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={imageUrl} alt={title} className="project-image" />
      </div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-links">
          {projectUrl && (
            <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn">
              Ver Projeto
            </a>
          )}
          {/* {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn github">
              GitHub
            </a>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;