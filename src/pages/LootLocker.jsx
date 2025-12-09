function LootLocker() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1>🏪 The Loot Locker Prototype</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        A robotic donation system with AI-powered intake and logistics integration. 
        The digital twin of the circular economy in action.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
        <div style={{ padding: '2rem', backgroundColor: 'var(--gray-50)', borderRadius: '1rem' }}>
          <h2>📸 Drop Loot Cabinet</h2>
          <p><strong>What it does:</strong> AI-powered donation intake with photogrammetry and conversational AI.</p>
          <h3>Components:</h3>
          <ul>
            <li>NVIDIA Jetson for local AI processing</li>
            <li>Turntable for 360° scanning</li>
            <li>Cameras for photogrammetry</li>
            <li>LLM-based conversational interface</li>
          </ul>
        </div>

        <div style={{ padding: '2rem', backgroundColor: 'var(--gray-50)', borderRadius: '1rem' }}>
          <h2>🎁 Get Loot Cabinet</h2>
          <p><strong>What it does:</strong> Distribution interface with holographic display and cloud integration.</p>
          <h3>Components:</h3>
          <ul>
            <li>Looking Glass holographic display</li>
            <li>Touchscreen interface</li>
            <li>Cloud locker system</li>
            <li>Real-time inventory tracking</li>
          </ul>
        </div>
      </div>

      <h2 style={{ marginTop: '4rem' }}>Student Challenges</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        <div style={{ padding: '1.5rem', border: '2px solid var(--primary-300)', borderRadius: '0.75rem' }}>
          <h3>🔍 Optical Recognition</h3>
          <p>Build image classifiers for donation categories using computer vision.</p>
        </div>
        <div style={{ padding: '1.5rem', border: '2px solid var(--primary-300)', borderRadius: '0.75rem' }}>
          <h3>💬 LLM Questionnaire</h3>
          <p>Design conversation flows for AI-powered donation intake.</p>
        </div>
        <div style={{ padding: '1.5rem', border: '2px solid var(--primary-300)', borderRadius: '0.75rem' }}>
          <h3>📊 Metadata Extraction</h3>
          <p>Parse and structure donation data for logistics systems.</p>
        </div>
        <div style={{ padding: '1.5rem', border: '2px solid var(--primary-300)', borderRadius: '0.75rem' }}>
          <h3>☁️ Cloud Integration</h3>
          <p>Connect to SAP logistics and warehouse management systems.</p>
        </div>
      </div>

      <p style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--accent-50)', borderRadius: '0.5rem' }}>
        <strong>Demo at LA USD Event (Dec 11):</strong> See the physical prototype in action! 
        Two t-slot cabinets with Looking Glass display, turntable, and Jetson AI system.
      </p>
    </div>
  )
}

export default LootLocker
