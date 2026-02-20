import { Link } from 'react-router-dom'
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

          <div className="header-status" role="status" aria-live="polite">
            <span className="status-dot" aria-hidden="true"></span>
            <span>Placeholder mode</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
