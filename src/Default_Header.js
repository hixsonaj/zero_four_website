import { BrowserView, MobileView} from 'react-device-detect';
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import './Default_Header.css';

export default function Default_Header() {
  const [show, setShow] = useState(false);
  return (
    <header>
      <BrowserView>
        <h1 className='Header_Title'>ZERO FOUR</h1>
        <ul>
          <li><Link to="/" style={{ textDecoration: 'none' }}><h3>Projects</h3></Link></li> {/*Not sure why style cant go in css*/}
          <li><Link to="/" style={{ textDecoration: 'none' }}><h3>Contact</h3></Link></li>
          <li><Link to="/" style={{ textDecoration: 'none' }}><h3>About</h3></Link></li>
        </ul>
      </BrowserView>
      <MobileView>
        <h2 className='Header_Title'>ZERO FOUR</h2>          
        <div className='Icon_Container'>
          <button onClick={() => setShow(!show)}>
            {show ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
          </button>
        </div>
        {show ? <Mobile_Navigation /> : null}


        
        
      </MobileView>
      <Outlet/>
    </header>
  );
}

function Mobile_Navigation() {
  return (
    <div className='Mobile_Navigation_Container'>
      <ul>
        <li><Link to="/" style={{ textDecoration: 'none' }}><h3>Projects</h3></Link></li> {/*Not sure why style cant go in css*/}
        <li><Link to="/" style={{ textDecoration: 'none' }}><h3>Contact</h3></Link></li>
        <li><Link to="/" style={{ textDecoration: 'none' }}><h3>About</h3></Link></li>
      </ul>
    </div>

  );
}

