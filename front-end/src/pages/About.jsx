import './About.css';

function About() {
  return (
    <div className="container">
      <div className="about-page">
        <h1 className="page-title">About This Project</h1>
        <div className="about-content">
          <div className="about-card">
            <h2>🚀 Project Overview</h2>
            <p>
              This is an auto-generated blog platform that automatically creates and manages content 
              using AI technology. The system generates articles on various topics without manual intervention.
            </p>
            <p>
              The platform is built with React for the frontend and connects to a backend API 
              to fetch the latest generated articles. All content is automatically created and 
              updated in real-time.
            </p>
            
            <h3>Key Features:</h3>
            <ul className="feature-list">
              <li>AI-generated content</li>
              <li>Automatic article creation</li>
              <li>Responsive design</li>
              <li>Clean, minimalistic interface</li>
              <li>Real-time updates</li>
            </ul>
            
            <div className="creator-info">
              <h3>Creator Information:</h3>
              <p>This project was created by:</p>
              <div className="creator-link">
                <a 
                  href="https://github.com/Hemn-Raqib-Aziz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <span className="github-icon">⚡</span>
                  Hemn Raqib Aziz
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;