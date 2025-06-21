import { projectsData } from "../data/projectData"
import ProjectCard from "../components/ProjectCard"
import "../index.css"

function ProjectsPage() {
    return (
        <div className="page-content">
            <h1>Projects</h1>
            <p>
                Here are some of the projects I'm proud to have worked on.
            </p>

            <div className={"project-grid"}>
                {projectsData.map(project => (
                    <ProjectCard key={"project.id"} project={project} />
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;