import Project_Tile from './Project_Tile.js';
import './Projects.css';

export default function Projects() {
  return (
    <div className="Browser">
        <div className='Projects_Tile_Container'>
          <Project_Tile projectin="volumeBySpeed"/>
          <Project_Tile projectin="zeroFourTechWebsite"/>
          <Project_Tile projectin="alexhixson.com"/>
          <Project_Tile projectin="musicTranslator"/>
          <Project_Tile projectin="cpuScheduling"/>
          <Project_Tile projectin="morsecoding"/>
        </div>
    </div>
  );
}