import { Link } from 'react-router-dom'

function StudentGuide() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1>🎓 Student Guide</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        Everything you need to get started and make an impact!
      </p>

      <div style={{ marginTop: '3rem' }}>
        <h2>🚀 Getting Started</h2>
        <ol style={{ fontSize: '1.125rem', lineHeight: '2' }}>
          <li><strong>Sign Up:</strong> Create your account (coming soon with authentication)</li>
          <li><strong>Complete Your Profile:</strong> Tell us about your skills and interests</li>
          <li><strong>Explore Projects:</strong> Check out <Link to="/loot-locker">Loot Locker</Link> and other initiatives</li>
          <li><strong>Join the Community:</strong> Connect with other students on the <Link to="/community">boards</Link></li>
          <li><strong>Start Contributing:</strong> Pick a challenge and start building!</li>
        </ol>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h2>💡 What Can I Build?</h2>
        <div style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--primary-50)', borderRadius: '0.75rem' }}>
            <h3>Beginner: Documentation & UI</h3>
            <p>Write guides, design interfaces, create graphics</p>
          </div>
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--primary-50)', borderRadius: '0.75rem' }}>
            <h3>Intermediate: Features & Integration</h3>
            <p>Build web features, connect APIs, process data</p>
          </div>
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--primary-50)', borderRadius: '0.75rem' }}>
            <h3>Advanced: AI & Systems</h3>
            <p>Train models, architect systems, optimize performance</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h2>🏆 Earning Points & Rewards</h2>
        <p>Every contribution earns you points on the <Link to="/leaderboard">leaderboard</Link>:</p>
        <ul>
          <li>Create posts and comments</li>
          <li>Commit code to GitHub</li>
          <li>Complete challenges</li>
          <li>Attend events</li>
          <li>Help other students</li>
        </ul>
        <p><strong>Top 10 contributors get exclusive rewards!</strong></p>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h2>📚 Learning Resources</h2>
        <p>New to coding or want to learn specific skills? Check out our <Link to="/learning">Learning Resources</Link> page for tutorials and guides.</p>
      </div>

      <p style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--secondary-50)', borderRadius: '0.5rem' }}>
        <strong>Need help?</strong> Ask questions in the community boards or reach out to mentors at events!
      </p>
    </div>
  )
}

export default StudentGuide
