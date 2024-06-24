/* eslint-disable react/prop-types */
const Project = ({ project }) => {
  return (
    <div className="project-description"> 
      <a href={project.pageUrl} className="project-title" target="_blank" rel="noreferrer">{project.name}</a>
      <a href={project.githubUrl} target="_blank" rel="noreferrer"><span className="icon icon-github" aria-label="github project link"></span></a>
      <p>{project.description}</p>
    </div>
  )
}

export default Project;