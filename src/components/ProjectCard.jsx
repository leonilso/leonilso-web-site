import React, { useState } from "react";
import "./ProjectCard.css";

function ProjectCard({ title, description, imageUrl, projectUrl, githubUrl }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="project-card">
      <div className="project-image-container">
        {!loaded && <div className="image-skeleton" />}

        <img
          src={imageUrl}
          alt={title}
          className={`project-image ${loaded ? "loaded" : ""}`}
          onLoad={() => setLoaded(true)}
        />
      </div>

      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-links">
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn"
            >
              Ver Projeto
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
