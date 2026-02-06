import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Home.css';

export default function Home() {
  return (
    <div className='Home_Container'>
      <img
        className="Alex_Hixson2"
        src={'/project_images/Alex_Hixson2.jpg'}
        alt={'Alex Hixson'}/>
      <h1>ZERO FOUR TECH</h1>
      <p>A development tool</p>
      <p>From Alex Hixson</p>
      <Link to={"/contact"} style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faEnvelope} className="Icon_Email" /></Link>
      <a href="https://github.com/hixsonaj"><FontAwesomeIcon icon={faGithub} className="Icon_GitHub" /></a>
      <a href="https://linkedin.com/in/hixsonaj"><FontAwesomeIcon icon={faLinkedin} className="Icon_Linkedin" /></a>
      <div className="Projects">
        <Link to={"/projects/volume_by_speed"} style={{ textDecoration: 'none' }}><h3>{"Volume by Speed"}</h3></Link>
        <h3><a href="http://alexhixson.com">alexhixson.com</a></h3>

      </div>
    </div>
  );
}