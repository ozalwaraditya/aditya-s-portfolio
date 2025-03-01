const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      {/* Tech Stack Section */}
      <div className="tech-stack">
        {project.techStack.map((tech, index) => (
          <span key={index} className="tech-badge">{tech}</span>
        ))}
      </div>

      {/* Conditionally render Source Code button only if repo exists */}
      {project.repo && (
        <div className="project-links">
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="button button--flex">
            Source Code <i className="uil uil-link"></i>
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;