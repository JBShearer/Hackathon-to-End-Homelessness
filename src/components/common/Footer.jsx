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
            <p>
              We are in a temporary placeholder phase while we update direction, messaging, and the next release.
            </p>
          </div>

          <div className="footer-section footer-links-quick">
            <Link to="/">Site Status</Link>
            <a
              href="https://github.com/JBShearer/Hackathon-to-End-Homelessness"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Hackathon to End Homelessness. Thanks for your patience during this transition.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
