function Leaderboard() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1>🏆 Leaderboard</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        Top contributors making the biggest impact.
      </p>

      <div style={{ marginTop: '3rem' }}>
        <h2>Coming Soon!</h2>
        <p>Track your points, achievements, and ranking as you contribute to the community.</p>
        
        <div style={{ marginTop: '2rem' }}>
          <h3>How to Earn Points:</h3>
          <ul>
            <li>✅ Sign up: 100 points</li>
            <li>✅ Complete profile: 50 points</li>
            <li>✅ Create post: 10 points</li>
            <li>✅ Comment: 5 points</li>
            <li>✅ GitHub commit: 15 points</li>
            <li>✅ Attend event: 100 points</li>
            <li>✅ Complete challenge: 200-500 points</li>
          </ul>
        </div>
      </div>

      <p style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--accent-50)', borderRadius: '0.5rem' }}>
        <strong>Top 10 Rewards:</strong> Exclusive event access, unique merch, and bragging rights!
      </p>
    </div>
  )
}

export default Leaderboard
