function TeacherResources() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1>👨‍🏫 Teacher Resources</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        Tools and guidance for educators supporting student participation.
      </p>

      <div style={{ marginTop: '3rem' }}>
        <h2>🎯 Curriculum Alignment</h2>
        <p>Our projects align with STEM education standards:</p>
        <ul>
          <li>Computer Science & Software Engineering</li>
          <li>Artificial Intelligence & Machine Learning</li>
          <li>Systems Design & Architecture</li>
          <li>Social Impact & Ethics</li>
          <li>Project Management & Collaboration</li>
        </ul>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h2>📋 Supervision & Safety</h2>
        <ul>
          <li><strong>Code of Conduct:</strong> All participants follow our community guidelines</li>
          <li><strong>Moderation:</strong> Active monitoring of all online interactions</li>
          <li><strong>Privacy:</strong> COPPA-compliant data handling for minors</li>
          <li><strong>Parental Consent:</strong> Forms available for students under 13</li>
        </ul>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h2>📊 Assessment & Recognition</h2>
        <p>Track student progress and achievements:</p>
        <ul>
          <li>Contribution metrics and leaderboards</li>
          <li>Project completion certificates</li>
          <li>Skill development tracking</li>
          <li>Portfolio-ready work samples</li>
        </ul>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h2>🤝 How Teachers Can Help</h2>
        <ol style={{ fontSize: '1.125rem', lineHeight: '2' }}>
          <li>Introduce the initiative to students</li>
          <li>Help students form teams and choose projects</li>
          <li>Provide in-class time for project work (optional)</li>
          <li>Connect students with mentors and resources</li>
          <li>Celebrate student achievements</li>
        </ol>
      </div>

      <p style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--accent-50)', borderRadius: '0.5rem' }}>
        <strong>Questions?</strong> Contact us to discuss how to integrate the hackathon into your classroom!
      </p>
    </div>
  )
}

export default TeacherResources
