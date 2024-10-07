import Project_Tile from './Project_Tile.js';
import './Home.css';

export default function Home() {
  return (
    <div>
        <div className='Project_Tiles_Container'>
          <Project_Tile projectin="volumeBySpeed"/>
          <Project_Tile projectin="photoSort"/>
          <Project_Tile projectin="zeroFourTechWebsite"/>
        </div>
    </div>
  );
}