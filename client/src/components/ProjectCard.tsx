import type {Project} from '../data/projectData';
import './ProjectCard.css'

// Define the prop for this component. It expects a single 'project' component
interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className={"project-card"}>
            <img src={project.imageUrl} alt={`${project.title} screenshot`} className={"project-image"} />
            <div className={"project-content"}>
                <h3 className={"project-title"}>{project.title}</h3>
                <p className={"project-description"}>{project.description}</p>
                <ul className={"project-tech-list"}>
                    {project.technologies.map((tech) => (
                        <li key={tech} className={"tech-item"}>{tech}</li>
                    ))}
                </ul>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={"project-link"}>
                    View Code
                </a>
            </div>
        </div>
    );
}
export default ProjectCard;