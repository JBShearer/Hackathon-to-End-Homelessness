import { Link, NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-icon">HH</span>
            <span className="logo-text">Hackathon to End Homelessness</span>
          </Link>

          <div className="header-right">
            <nav className="header-nav" aria-label="Primary">
              <NavLink to="/student-guide">Student Guide</NavLink>
              <NavLink to="/facilitator-guide">Facilitator Guide</NavLink>
              <NavLink to="/project-gamer">Project GAMER</NavLink>
              <NavLink to="/loot-locker">Loot Locker</NavLink>
            </nav>

            <div className="header-status" role="status" aria-live="polite">
              <span className="status-dot" aria-hidden="true"></span>
              <span>Pivot mode</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
