import "./projectPages.css";
import data from './projects.json';


export default function Project_page({projectin}){
  const projectsArray = data.projects;
  const project = projectsArray.find(item => item.projectId === projectin); 
  const descriptionWithLineBreaks = project.Description.split('\n').map((line, index) => (
    <p key={index}>
      {line}
      <br />
    </p>
  ));
  return(
    <div className="project_description_container">
      <h1>{project.Title}</h1>
      <h3>{project.Subtitle}</h3>
      <p>{descriptionWithLineBreaks}</p>
      {project.HasGithub && (
        <a
          href={project.Github}
          style={{ textDecoration: 'none' }}
          target="_blank"
          rel="noopener noreferrer">
        <h3 className="link">See the Github Repository</h3>
        </a>
      )}
      {project.HasAdditionalLink && (
        <a
          href={project.AdditionalLink}
          style={{ textDecoration: 'none' }}
          target="_blank"
          rel="noopener noreferrer">
        <h3 className="link">{project.AdditionalLinkMessage}</h3>
        </a>
      )}
    </div>
  );
}