import Project from "../components/Project.jsx";
import projects from "../project_data.js";
import { useEffect } from 'react';

export default function Projects() {
  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
        /*else {
            entry.target.classList.remove('show');
        }*/
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden-y');
    hiddenElements.forEach((el) => observer.observe(el));
  });

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
