function Learning() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1>📚 Learning Resources</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        Tutorials, tools, and guides for every skill level.
      </p>

      <div style={{ display: 'grid', gap: '2rem', marginTop: '3rem' }}>
        <div style={{ padding: '2rem', backgroundColor: 'var(--gray-50)', borderRadius: '1rem' }}>
          <h2>🤖 AI & Machine Learning</h2>
          <p>Computer vision, LLMs, and neural networks for donation classification.</p>
        </div>

        <div style={{ padding: '2rem', backgroundColor: 'var(--gray-50)', borderRadius: '1rem' }}>
          <h2>☁️ Cloud Computing</h2>
          <p>Learn Supabase, API integration, and cloud logistics systems.</p>
        </div>

        <div style={{ padding: '2rem', backgroundColor: 'var(--gray-50)', borderRadius: '1rem' }}>
          <h2>📷 Photogrammetry</h2>
          <p>3D scanning techniques for object digitization and modeling.</p>
        </div>

        <div style={{ padding: '2rem', backgroundColor: 'var(--gray-50)', borderRadius: '1rem' }}>
          <h2>🔧 IoT & Robotics</h2>
          <p>NVIDIA Jetson, sensors, and embedded systems programming.</p>
        </div>
      </div>

      <p style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--primary-50)', borderRadius: '0.5rem' }}>
        <strong>More resources coming soon!</strong> Contribute your own tutorials and guides.
      </p>
    </div>
  )
}

export default Learning
