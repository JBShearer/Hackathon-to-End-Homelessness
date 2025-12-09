function Community() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1>👥 Community Boards</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        Connect, collaborate, and share ideas with fellow contributors.
      </p>

      <div style={{ marginTop: '3rem' }}>
        <h2>Discussion Categories</h2>
        <div style={{ display: 'grid', gap: '1rem', marginTop: '2rem' }}>
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--gray-50)', borderRadius: '0.75rem', border: '1px solid var(--gray-200)' }}>
            <h3>🏗️ Processes</h3>
            <p>Discuss documentation, workflows, and best practices.</p>
          </div>
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--gray-50)', borderRadius: '0.75rem', border: '1px solid var(--gray-200)' }}>
            <h3>💼 Projects</h3>
            <p>Collaborate on active initiatives and new ideas.</p>
          </div>
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--gray-50)', borderRadius: '0.75rem', border: '1px solid var(--gray-200)' }}>
            <h3>📍 Places</h3>
            <p>Regional discussions and local implementations.</p>
          </div>
        </div>
      </div>

      <p style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--primary-50)', borderRadius: '0.5rem' }}>
        <strong>Coming Soon:</strong> Interactive discussion boards with real-time updates and notifications!
      </p>
    </div>
  )
}

export default Community
