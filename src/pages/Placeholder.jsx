import { Link, useLocation } from 'react-router-dom'
import './Placeholder.css'

function Placeholder() {
  const { pathname } = useLocation()
  const isHomeRoute = pathname === '/'

  return (
    <section className="placeholder-page">
      <div className="container container-narrow">
        <p className="placeholder-pill">Temporary site update</p>

        <h1>We’re taking a short pause while we pivot.</h1>

        <p className="placeholder-lead">
          Thank you for your support. This project was recently shared with a much larger audience, and we’re
          quickly simplifying and refreshing content so we can relaunch with clarity.
        </p>

        {!isHomeRoute && (
          <p className="placeholder-route-note">
            The page you requested (<code>{pathname}</code>) is temporarily unavailable during this update window.
          </p>
        )}

        <div className="placeholder-actions">
          <Link to="/student-guide" className="placeholder-btn placeholder-btn-primary">
            Open Student Guide
          </Link>
          <Link to="/facilitator-guide" className="placeholder-btn placeholder-btn-secondary">
            Open Facilitator Guide
          </Link>
          <Link to="/project-gamer" className="placeholder-btn placeholder-btn-secondary">
            View Project GAMER
          </Link>
          <Link to="/loot-locker" className="placeholder-btn placeholder-btn-secondary">
            View Loot Locker
          </Link>
          <a
            className="placeholder-btn placeholder-btn-secondary"
            href="https://github.com/JBShearer/Hackathon-to-End-Homelessness"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow on GitHub
          </a>
        </div>

        <div className="placeholder-card">
          <h2>What to expect next</h2>
          <ul>
            <li>Two public guides are now available (Student + Facilitator)</li>
            <li>Project GAMER is positioned as the umbrella project</li>
            <li>Smart City Planning is positioned as the core game inside Project GAMER</li>
            <li>Loot Locker remains visible as the core concept</li>
            <li>BTP-specific tailoring will be expanded in the next update cycle</li>
          </ul>
          <p className="placeholder-thanks">Thanks for your patience while we regroup and improve the experience.</p>
        </div>
      </div>
    </section>
  )
}

export default Placeholder
