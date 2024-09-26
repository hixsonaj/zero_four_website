import { Outlet, Link } from "react-router-dom";
import './Default_Footer.css';

export default function Default_Header() {
  return(
    <footer>
      <Link to="/" style={{ textDecoration: 'none' }}><h2 className='Footer_Title'>ZERO FOUR</h2></Link>          
      <ul className="Footer_Navigation">
        <li><Link to="/Projects" style={{ textDecoration: 'none' }}><h3>Projects</h3></Link></li> {/*Not sure why style cant go in css*/}
        <li><Link to="/about" style={{ textDecoration: 'none' }}><h3>About</h3></Link></li>
        <li><Link to="/contact" style={{ textDecoration: 'none' }}><h3>Contact</h3></Link></li>
      </ul>
      <Outlet/>
    </footer>
  );
}