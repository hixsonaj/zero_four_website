import { Link } from "react-router-dom";
import './About.css';

export default function About() {
  return(
    <div className='About_Container'>
      <h2>Zero Four</h2><span>&emsp;&emsp;Zero Four is a platform for building and exploring tech. This website serves as a digital portfolio showcasing the projects built under the Zero Four name - from <Link className="Inline_Link" to={"/projects/volume_by_speed"}>Volume by Speed</Link>, a mobile app that's been live on the Google Play Store since 2022, to smaller experiments in AI, web tools, and automation. Explore the Leading Projects page to see what's live, and feel free to reach out for inquiries or collaborations.</span>
      <h2>Alex Hixson</h2>
      <span>      <img
        className="Alex_Hixson"
        src={'/project_images/Alex_Hixson.jpg'}
        alt={'Alex Hixson'}
      />&emsp;&emsp;I'm a Reliability & Production Engineer at Morgan Stanley, where I work on keeping systems stable, observable, and fast to recover when things go wrong. I graduated with a B.S. in Computer Science from San Diego State University in 2025.<br/><br/>
        &emsp;&emsp;My interest in tech started in high school, when I taught myself to code and published Volume by Speed to the Google Play Store. That early project and its success are what pushed me to pursue a computer science degree and, eventually, a tech career.<br/><br/>
        &emsp;&emsp;Outside of my professional life, I'm pretty outdoorsy; lots of hiking, biking, and skiing (Utah's great for that). I was briefly on the triathlon team in college and have done a couple of half marathons. I'm fairly new to Utah, so I'm always looking for new opportunities to get out of the house.
      </span>
      <h4>
        <br/>
        <a href="/Alexander_Hixson_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a><br/>
        <a href="http://alexhixson.com">alexhixson.com</a>
        <p>Email: hixsonaj@zerofour.tech</p>
      </h4>
    </div>
    
  );
}