import { Outlet, Link } from "react-router-dom";
import data from './projects/projects.json';
import './Project_Tile.css';


export default function Project_Tile({projectin}){
  const projectsArray = data.projects;
  const project = projectsArray.find(item => item.projectId === projectin); 
  return (
    <div className="Project_Tile_Container">
      <img
        className="Project_Picture"
        src={'/project_images/' + project.img + '.jpg'}
        alt={project.projectImg}
      />
      <Link to={"/projects/" + project.Page} style={{ textDecoration: 'none' }}><h3>{project.Title}</h3></Link>
      <Outlet/>
    </div>
  );
}