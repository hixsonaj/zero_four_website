import { Outlet, Link } from "react-router-dom";
import './Project_Tile.css';

export default function Project_Tile({project}){
  return (
    <div className="container">
      <img
        className="Project_Picture"
        src={'/project_images/' + project + '.jpg'}
        alt={project}
      />
      <Link to="/" style={{ textDecoration: 'none' }}><h3>{project}</h3></Link>
      <Outlet/>
    </div>
  );
}