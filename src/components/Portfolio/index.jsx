import Project from "../Project";
import projects from "../../projects.json";

const Portfolio = () => {
  return (
    <>
      <h1>Portfolio</h1>
      <section id="my-work" className="my-work content">   
        <ul className="project-list">
          {projects.map((project) => (
            <li className={project.id} key={project.id}>
              <Project project={project} />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Portfolio;