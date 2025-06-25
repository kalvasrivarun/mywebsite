import './App.css';
import { useState } from 'react';

function App() {
  const [section, setSection] = useState('resume');

  return (
    <div className="App dark-theme">
      <nav className="navbar">
        <span className={section === 'resume' ? 'active' : ''} onClick={() => setSection('resume')}>Resume</span>
        <span className={section === 'certificates' ? 'active' : ''} onClick={() => setSection('certificates')}>Certificates</span>
      </nav>
      {section === 'resume' ? (
        <div className="resume-container">
          <h1>KALVA SRI VARUN</h1>
          <div className="resume-grid">
            <section className="left">
              <h2>Contact</h2>
              <ul>
                <li>📞 +91 9640089466</li>
                <li>✉️ kalvasrivarn2004@gmail.com</li>
                <li>📍 shadnagar, Telangana, India</li>
              </ul>
              <h2>Skills</h2>
              <ul>
                <li>Problem Solving</li>
                <li>Creative Thinking</li>
                <li>Data Analysis</li>
                <li>Negotiation</li>
                <li>Strong communication skills</li>
                <li>Quick learner</li>
              </ul>
              <h2>Languages</h2>
              <ul>
                <li>English (Fluent)</li>
                <li>Telugu (Mother tongue)</li>
                <li>Hindi (Speaking)</li>
              </ul>
              <h2>Technical Skills</h2>
              <ul>
                <li>Python</li>
                <li>HTML, CSS</li>
                <li>C</li>
                <li>AI Tools handling</li>
                <li>Git and GitHub</li>
              </ul>
            </section>
            <section className="right">
              <h2>Profile</h2>
              <p>Motivated Computer Science and Engineering student seeking an internship/entry-level position to apply my knowledge of programming, data structures, and algorithms. Proficient in Python, C++, and web development. Eager to contribute to innovative projects, enhance my technical skills, and grow as a software developer in a challenging environment.</p>
              <h2>Educational Qualifications</h2>
              <ul>
                <li><b>BTECH-CSE</b> (2022 - Present)<br/>Guru Nanak Institution of Technical Campus<br/>CGPA (upto 2-2): 9.05</li>
                <li><b>MPC</b> (2020 - 2022)<br/>Vishwa Bharathi Junior College<br/>Percentage: 96.1%<br/>Marks: 961/1000</li>
                <li><b>CBSE (10th)</b> (2020)<br/>Tagore High School<br/>Marks: 407/500<br/>Percentage: 81.4%</li>
              </ul>
              <h2>Certifications</h2>
              <ul>
                <li>Python (SoloLearn)</li>
                <li>C (SoloLearn)</li>
              </ul>
            </section>
          </div>
        </div>
      ) : (
        <div className="certificates-container">
          <h1>Certificates</h1>
          <div className="certificates-gallery">
            {[
              { file: 'certificate1.jpg', alt: 'Accenture Data Analytics and Visualization' },
              { file: 'certificate2.png', alt: 'SoloLearn Introduction to C' },
              { file: 'certificate3.png', alt: 'SoloLearn Introduction to Python' },
              { file: 'certificate4.png', alt: 'HP LIFE Cybersecurity Awareness' }
            ].map((cert, idx) => (
              <div className="certificate-card" key={idx}>
                <img
                  src={process.env.PUBLIC_URL + `/certificates/${cert.file}`}
                  alt={cert.alt}
                  className="certificate-img"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
