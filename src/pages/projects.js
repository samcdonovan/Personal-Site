import Project from "../components/Project.jsx";
import projects from "../project_data.js";

export default function Projects() {
  return (
    <div className="wrapper">
      <div className="middle-container">

        {projects.map((project) => {

          return <Project
            key={project.id}
            id={project.id}
            title={project.title}
            languages={project.languages}
            technologies={project.technologies}
            description={project.description}
            link={project.link}
          />
        })}
      </div>
    </div>
  );
}
