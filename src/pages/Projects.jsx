import ProjectCard from "../components/ProjectCard";
import '../components/style/Projects.css';

const projectsData = [
    {
      id: 1,
      title: "Book Management System",
      description: "E-commerce platform for book purchases with user authentication and an admin panel.",
      techStack: ["C#", ".NET", "SQL", "JavaScript"],
      repo: "https://github.com/ozalwaraditya/WebApp_MVC"
    },
    {
      id: 2,
      title: "MERN Stack Real Estate Application",
      description: "Real estate web app with property listings, CRUD functionality, and secure authentication.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js"],
      repo: "https://github.com/ozalwaraditya/Ozalwar-Estate"
    },
    {
      id: 3,
      title: "CI/CD Pipeline using AWS",
      description: "Automated deployment pipeline for a MERN app using AWS services.",
      techStack: ["AWS", "EC2", "Git", "CodeBuild", "CodeDeploy"],
      repo: ""
    },
    {
      id: 4,
      title: "Ball Following Autonomous Bot",
      description: "AI-powered robot that tracks and follows a ball using YOLO and Raspberry Pi.",
      techStack: ["Raspberry Pi", "YOLO", "Computer Vision", "Python"],
      repo: ""
    }
  ];  


const Projects = () => {
  return (
    <section className="projects container" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
