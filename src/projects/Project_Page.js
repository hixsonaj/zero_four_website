import "./projectPages.css";
import data from './projects.json';


export default function Project_page({projectin}){
  const projectsArray = data.projects;
  const project = projectsArray.find(item => item.projectId === projectin); 
  const descriptionWithLineBreaks = project.Description.split('\n').map((line, index) => (
    <p key={index}>
      {line}
      <br />
    </p>
  ));
  return(
    <div className="project_description_contianer">
      <h1>{project.Title}</h1>
      <h3>{project.Subtitle}</h3>
      <p>{descriptionWithLineBreaks}</p>
      <a href="https://github.com/hixsonaj/VolumeBySpeed" style={{ textDecoration: 'none' }}><h3 className="link">See the Github Repository</h3></a>
      <a href="https://play.google.com/store/apps/details?id=tech.zerofour.volumebyspeed" style={{ textDecoration: 'none' }}><h3 className="link" >View on the Google Play Store</h3></a>
    </div>
  );
}