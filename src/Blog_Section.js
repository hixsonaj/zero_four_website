import './Blog_Section.css';

const posts = [
  {
    date: "May 2026",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7458691646944198656/",
    paragraphs: [
      "I'm very excited to announce that I will be starting my career as a Production Support Engineer at Morgan Stanley. I'm thankful for the opportunity to work and learn from their team of developers and engineers in Salt Lake City. Thanks to FDM Group for the help and encouragement through the recruitment process and for the training that is to come.",
      "This month, I will be celebrating my graduation ceremony with the SDSU College of Sciences, then packing up and leaving San Diego. Thank you to SDSU for a stellar education and an incredible four years.",
      "Finally, I am extremely grateful for my three years at the Mission Bay Aquatic Center. While I am excited to start my career, I will always miss the long summer days with the Watersports Camp and countless weekends spent teaching sailing."
    ]
  },
  {
    date: "December 2025",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7416342204887085056/",
    paragraphs: [
      "I'm excited to share that this fall, I graduated from San Diego State University with a bachelor's in Computer Science! I'm now entering the job search, looking for opportunities in the tech industry somewhere along the West Coast.",
      "In my three and a half years at SDSU, I've learned and put into practice a wide range of computer science and tech principles and ideas. I'm grateful to have had many knowledgeable and engaging professors, and a friend group of fellow computer science students. Working, learning, and living with engineers provided a motivating sense of camaraderie and served as a support system for difficult concepts and projects.",
      "In addition to my school work, I have gained significant experience in communications, teamwork, and leadership through my job at the Mission Bay Aquatic Center. This job has shaped me as a person, and I'm very grateful to all of my students and coworkers for the positive impact they've had on me.",
      "My four years in San Diego have helped me build both a community and the skills and experiences needed to begin my career."
    ]
  }
];

export default function Blog_Section() {
  return (
    <div className="Blog_Section">
      <p className="Blog_Subtitle">Notes and ideas, work in progress.</p>
      <div className="Blog_Posts">
        {posts.map((post, i) => (
          <div className="Blog_Post" key={i}>
            {post.paragraphs.map((paragraph, j) => (
              <p key={j}>{paragraph}</p>
            ))}
            <p className="Blog_Date"><a href={post.link} target="_blank" rel="noopener noreferrer">&nbsp;&nbsp;&nbsp;via LinkedIn</a></p>
            <p className="Blog_Date">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
