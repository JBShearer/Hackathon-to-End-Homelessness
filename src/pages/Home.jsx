import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Home.css'

function Home() {
  const { isConfigured } = useAuth()

  return (
    <div className="home">
      {/* Supabase Connection Status */}
      {isConfigured && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#10b981',
          color: 'white',
          padding: '0.75rem 1.25rem',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          fontSize: '0.875rem',
          fontWeight: '500',
          zIndex: 1000
        }}>
          ✅ Connected to Supabase
        </div>
      )}
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Build Technology That <span className="highlight">Changes Lives</span>
            </h1>
            <p className="hero-subtitle">
              Join hundreds of students and developers using AI, robotics, and cloud tech to end homelessness. 
              Earn rewards, compete on leaderboards, and create real-world impact.
            </p>
            <div className="hero-cta">
              <Link to="/student-guide" className="btn btn-primary btn-lg">
                Get Started Now
              </Link>
              <Link to="/events" className="btn btn-secondary btn-lg">
                View Events
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">Open</span>
                <span className="stat-label">Source</span>
              </div>
              <div className="stat">
                <span className="stat-number">Free</span>
                <span className="stat-label">To Join</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured: Loot Locker */}
      <section className="featured">
        <div className="container">
          <div className="featured-badge">✨ Featured Challenge</div>
          <h2>The Loot Locker Prototype</h2>
          <p className="section-intro">
            Build the AI brain for a robotic donation system. Use computer vision, LLMs, 
            and cloud logistics to revolutionize how we distribute resources.
          </p>
          
          <div className="loot-locker-grid">
            <div className="locker-card">
              <div className="locker-icon">📸</div>
              <h3>Drop Loot Cabinet</h3>
              <p>AI-powered intake with photogrammetry, object recognition, and conversational AI to classify donations.</p>
              <ul className="tech-list">
                <li>NVIDIA Jetson AI</li>
                <li>360° Photogrammetry</li>
                <li>LLM Classification</li>
              </ul>
            </div>

            <div className="locker-card">
              <div className="locker-icon">🎁</div>
              <h3>Get Loot Cabinet</h3>
              <p>Holographic display and touchscreen interface connected to cloud logistics and warehouse systems.</p>
              <ul className="tech-list">
                <li>Looking Glass Display</li>
                <li>Cloud Integration</li>
                <li>Real-time Inventory</li>
              </ul>
            </div>

            <div className="locker-card">
              <div className="locker-icon">🚀</div>
              <h3>Your Challenge</h3>
              <p>Build optical recognition, metadata extraction, conversational interfaces, or cloud integrations.</p>
              <ul className="tech-list">
                <li>Computer Vision</li>
                <li>Natural Language</li>
                <li>API Integration</li>
              </ul>
            </div>
          </div>

          <Link to="/loot-locker" className="btn btn-accent btn-lg">
            Explore Loot Locker →
          </Link>
        </div>
      </section>

      {/* Why Join */}
      <section className="why-join">
        <div className="container">
          <h2>Why Join Our Community?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎮</div>
              <h3>Gamified Experience</h3>
              <p>Earn points, unlock achievements, and compete on leaderboards as you contribute.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">💻</div>
              <h3>Real Skills</h3>
              <p>Learn AI/ML, cloud computing, IoT, and enterprise systems like SAP.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🏆</div>
              <h3>Epic Rewards</h3>
              <p>Top contributors get exclusive event access, merch, and recognition.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h3>Make Impact</h3>
              <p>Your code directly helps people experiencing homelessness.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">👥</div>
              <h3>Build Community</h3>
              <p>Connect with students, mentors, NGOs, and industry professionals.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">📚</div>
              <h3>Learn Together</h3>
              <p>Access tutorials, tools, and guidance for every skill level.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Sign Up</h3>
              <p>Create your account and complete your profile to start earning points.</p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3>Choose Your Path</h3>
              <p>Join the Loot Locker challenge, Project Gamer, or start your own initiative.</p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3>Build & Contribute</h3>
              <p>Code, design, document, or mentor. Every contribution counts.</p>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <h3>Level Up</h3>
              <p>Earn achievements, climb the leaderboard, and unlock exclusive perks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="projects-preview">
        <div className="container">
          <h2>More Initiatives</h2>
          <div className="project-cards">
            <div className="project-card">
              <div className="project-icon">🎯</div>
              <h3>Project Gamer</h3>
              <p>Generative AI to Manage Emergency Response. Build strategy games for city planning and first responders.</p>
              <Link to="/project-gamer" className="project-link">Learn More →</Link>
            </div>

            <div className="project-card">
              <div className="project-icon">🏙️</div>
              <h3>Smart City Planning</h3>
              <p>Create digital twins of cities using SAP Analytics Cloud and dataspace concepts.</p>
              <Link to="/projects" className="project-link">Explore Projects →</Link>
            </div>

            <div className="project-card">
              <div className="project-icon">🔧</div>
              <h3>Solution Hacks</h3>
              <p>Build specific tools for shelters, NGOs, and service providers.</p>
              <Link to="/community" className="project-link">Join Discussion →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready to Make a Difference?</h2>
          <p>Join the movement to end homelessness through technology.</p>
          <div className="cta-buttons">
            <Link to="/student-guide" className="btn btn-primary btn-xl">
              Start Your Journey
            </Link>
            <Link to="/events" className="btn btn-outline btn-xl">
              Attend an Event
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
