import Project_Tile from './Project_Tile.js';
import './Home.css';

export default function Home() {
  return (
    <div>
        <div className='Project_Tile_Container'>
          <Project_Tile project="Volume By Speed"/>
          <Project_Tile project="PhotoSort"/>
          <Project_Tile project="Zero Four . tech"/>
        </div>
    </div>
  );
}