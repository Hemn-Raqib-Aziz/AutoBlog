import './AboutMe.css';

function AboutMe() {
  return (
    <div className="container">
      <div className="aboutme-page">
        <h1 className="page-title">About Me</h1>
        <div className="aboutme-content">
          <div className="profile-section">
            <div className="profile-header">
              <div className="avatar-placeholder">
                <span className="avatar-text">H</span>
              </div>
              <div className="profile-info">
                <h2>Hemn Raqib Aziz</h2>
                <p className="profile-title">Full Stack Developer</p>
              </div>
            </div>
            
            <div className="profile-details">
              <p>
                Hello! I'm Hemn Raqib Aziz, a passionate developer who created this auto-generated blog platform. 
                I enjoy building modern, minimalistic web applications with clean user interfaces and robust functionality.
              </p>
              
              <div className="skills-section">
                <h3>Technologies Used:</h3>
                <div className="skills-grid">
                  <span className="skill-tag">NodeJS (Express)</span>
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Groq</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">CSS</span>
                  <span className="skill-tag">REST APIs</span>
                  <span className="skill-tag">Responsive Design</span>
                </div>
              </div>
              
              <div className="contact-section">
                <h3>Connect with Me:</h3>
                <a 
                  href="https://github.com/Hemn-Raqib-Aziz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link github"
                >
                  <span className="link-icon">⚡</span>
                  GitHub: Hemn-Raqib-Aziz
                </a>
                <p className="contact-note">
                  Feel free to explore my projects and contributions on GitHub. 
                  I'm always open to interesting collaborations and new opportunities.
                </p>
              </div>
              
              <div className="project-philosophy">
                <h3>Project Philosophy:</h3>
                <p>
                  This project embodies my approach to development: clean design, 
                  solid functionality, and user-friendly experiences. The minimalistic 
                  aesthetic ensures focus on content while maintaining excellent usability 
                  across all devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;