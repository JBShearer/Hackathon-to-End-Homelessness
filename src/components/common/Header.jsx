import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-icon">🏠</span>
            <span className="logo-text">Hackathon to End Homelessness</span>
          </Link>

          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/loot-locker" onClick={() => setIsMenuOpen(false)}>Loot Locker</Link>
            <Link to="/project-gamer" onClick={() => setIsMenuOpen(false)}>Project Gamer</Link>
            <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link to="/community" onClick={() => setIsMenuOpen(false)}>Community</Link>
            <Link to="/learning" onClick={() => setIsMenuOpen(false)}>Learning</Link>
            <Link to="/events" onClick={() => setIsMenuOpen(false)}>Events</Link>
            <Link to="/leaderboard" onClick={() => setIsMenuOpen(false)}>Leaderboard</Link>
            <Link to="/student-guide" className="btn-cta" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
