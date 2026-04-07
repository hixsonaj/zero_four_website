import { Outlet, Link } from "react-router-dom";
import './Default_Footer.css';

export default function Default_Footer() {
  return(
    <footer>
      <div className="Footer_Title_Container">
        <Link to="/" style={{ textDecoration: 'none' }}><h2 className='Footer_Title'>ZERO FOUR</h2></Link> 
      </div>         
      <ul className="Footer_Navigation">
        <li><Link to="/Projects" style={{ textDecoration: 'none' }}><h3 className="link">Projects</h3></Link></li> {/*Not sure why style cant go in css*/}
        <li><Link to="/about" style={{ textDecoration: 'none' }}><h3 className="link">About</h3></Link></li>
        <li><Link to="/contact" style={{ textDecoration: 'none' }}><h3 className="link">Contact</h3></Link></li>
      </ul>
      <Outlet/>
    </footer>
  );
}