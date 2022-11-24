import Project from "../components/Project.jsx";
import projects from "../project_data.js";

export default function Projects() {
  return (
    <div className="wrapper">
      <div className="middle-container projects row">

        {projects.map((project) => {

          return <Project
            key={project.id}
            id={project.id}
            title={project.title}
            images={project.images}
            languages={project.languages}
            technologies={project.technologies}
            description={project.description}
            link={project.link}
            type={(project.id < 5 ? "main" : "other")}
          />
        })}
      </div>
    </div>
  );
}
