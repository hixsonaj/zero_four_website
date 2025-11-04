import Project_Tile from './Project_Tile.js';
import './Projects.css';

export default function Projects() {
  return (
    <div className="Browser">
        <div className='Project_Tile_Container'>
        <Project_Tile projectin="volumeBySpeed"/>
          <Project_Tile projectin="photoSort"/>
          <Project_Tile projectin="zeroFourTechWebsite"/>
        </div>
    </div>
  );
}