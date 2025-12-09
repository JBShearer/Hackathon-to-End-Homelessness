import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Hackathon to End Homelessness</h3>
            <p>Building technology solutions to end scarcity and provide dignity for all humans.</p>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Get Involved</h4>
            <ul>
              <li><Link to="/student-guide">Student Guide</Link></li>
              <li><Link to="/teacher-resources">Teacher Resources</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/projects">Join a Project</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Learn More</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/loot-locker">Loot Locker</Link></li>
              <li><Link to="/project-gamer">Project Gamer</Link></li>
              <li><Link to="/learning">Learning Resources</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Community</h4>
            <ul>
              <li><Link to="/community">Discussion Boards</Link></li>
              <li><Link to="/leaderboard">Leaderboard</Link></li>
              <li><a href="/docs/CODE_OF_CONDUCT.md">Code of Conduct</a></li>
              <li><a href="/docs/CONTRIBUTING.md">Contributing</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Hackathon to End Homelessness. Open Source MIT License.</p>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
