function Projects() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1>💼 Projects</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        Explore active initiatives and join a team making real-world impact.
      </p>

      <div style={{ display: 'grid', gap: '2rem', marginTop: '3rem' }}>
        <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '1rem', border: '2px solid var(--primary-300)' }}>
          <h2>🏪 Loot Locker Prototype</h2>
          <p><strong>Status:</strong> Active • <strong>Team Size:</strong> Open</p>
          <p>Building AI-powered donation intake and distribution systems.</p>
          <ul>
            <li>Computer Vision for object recognition</li>
            <li>LLM-based conversational AI</li>
            <li>Cloud logistics integration</li>
          </ul>
        </div>

        <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '1rem', border: '2px solid var(--secondary-300)' }}>
          <h2>🎯 Project Gamer</h2>
          <p><strong>Status:</strong> Planning • <strong>Team Size:</strong> Forming</p>
          <p>Strategy games for emergency response training and city planning.</p>
          <ul>
            <li>Digital twin development</li>
            <li>Scenario simulation</li>
            <li>SAP Analytics integration</li>
          </ul>
        </div>
      </div>

      <p style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--accent-50)', borderRadius: '0.5rem' }}>
        <strong>Want to start a project?</strong> Sign up and propose your idea in the community boards!
      </p>
    </div>
  )
}

export default Projects
