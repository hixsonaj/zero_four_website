import { Outlet, Link } from "react-router-dom";
import data from './projects/projects.json';
import './Project_Tile.css';


export default function Project_Tile({projectin}){
  const projectsArray = data.projects;
  const project = projectsArray.find(item => item.projectId === projectin); 
  return (
    <div className="Project_Tile_Container">
      <Link to={"/projects/" + project.Page} style={{ textDecoration: 'none' }}><h3>{project.Title}</h3></Link>
      <p style={{ fontSize: '18px', paddingBottom: '6px'}}>{project.Subtitle}</p>
      <p>{project.Brief}</p>
      <Outlet/>
    </div>
  );
}