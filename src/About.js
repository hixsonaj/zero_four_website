import './About.css';

export default function About() {
  return(
    <div className='About_Container'>
      <h2>Zero Four</h2><span>&emsp;&emsp;This website serves as a digital portfolio showcasing my journey as a computer science student. As I progress through my academic and professional pursuits, this space will evolve to reflect my growing skills and knowledge. Here, you’ll find a curated selection of my projects, demonstrating my ability to apply theoretical concepts to practical solutions. I invite you to explore my work and feel free to reach out for inquiries or collaborations.</span>
      <h2>Alex Hixson</h2>
      <span>      <img
        className="Alex_Hixson"
        src={'/project_images/Alex_Hixson.jpg'}
        alt={'Alex Hixson'}
      />&emsp;&emsp;I love to build. Whether it’s physical stuff, I’ve built furniture and art. Or symbolically, like how I’ve built plans, friend groups, strength, and relationships. What makes coding exciting to me is how much you can build with so little. As a junior in high school, I wanted to be part of the tech world, and with my laptop, some YouTube tutorials, and hundreds of hours, I was able to build a mobile app that anybody could download from the Google Play Store. The accessibility of the tech world is what I love; any language or service or framework can be learned for free, given the mass amount of tutorial videos, websites, and docs. Being able to build a product or service out of a computer and some software is what drove me to pursue a bachelor’s in computer science. Now, with more skills, I want to build bigger projects and work in a team to create something new. Like many, I strive to find myself in a job where I can make an impact. To me, this means working for a smaller company where I feel that my work won’t go unnoticed, or for a larger company where the service we provide positively impacts people. <br/><br/>
        &emsp;&emsp;In my time as an undergraduate at San Diego State University, I’ve bettered my skills as a programmer through my high performance in classes. Graduating with a 3.55 GPA highlights my academic success. As a student, I’m extremely reliable, hardworking, and efficient, which has allowed me to graduate one semester sooner than intended. Through many upper-division classes, I’ve learned much about AI models, programming language structures, and UNIX Systems. I’m excited to put my programming into practice and move out of academia. <br/><br/>
        &emsp;&emsp;In addition to advancing my tech skills, I have also been given the opportunity to further my skills as a leader, teacher, and team member through my work at the Mission Bay Aquatic Center. While in my undergrad, I worked there for 2.5 years as a Lead Youth Camp Counselor and Sailing Instructor. While I don’t gain any tech-related skills from my work at the Aquatic Center, I have developed as a person and an employee. As attested by many of my coworkers and supervisors, I demonstrated good work ethic, strategic mind, and ability to lead and problem-solve effectively. During my three summers there, I worked as a Lead Camp Counselor, where I managed 5-7 other staff as we ran and organized safe, fun, and educational water sport activities for a group of 40 youth. As a Sailing Instructor, I taught a variety of classes to any and all age groups and experience levels. Through teaching, I’ve become extremely proficient at communicating new ideas and teaching to people of all different learning styles. My ability to communicate makes me a valuable asset to any team, whether in an instructional or software engineering role.<br/><br/>
        &emsp;&emsp;Ultimately, I envision myself continuing to build, both in ways that involve tech and software, and as an adult and professional. The foundation I’ve built through my academic success, leadership experience, and passion for technology has prepared me to take on real-world challenges with creativity and confidence. I’m eager to be part of a team where I can continue to learn, build, and apply my technical and personal skills and help create products that make a meaningful impact.
      </span>
      <h4>
        <br/>
        <a href="/Alexander_Hixson_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        <a href="http://alexhixson.com">alexhixson.com</a>
        <p>Email: hixsonaj@zerofour.tech</p>
      </h4>
    </div>
    
  );
}