function Events() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1>📅 Events</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        Join us for workshops, hackathons, and community gatherings.
      </p>

      <div style={{ display: 'grid', gap: '2rem', marginTop: '3rem' }}>
        <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '1rem', border: '2px solid var(--accent-400)' }}>
          <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: 'var(--accent-100)', color: 'var(--accent-800)', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '600', marginBottom: '1rem' }}>UPCOMING</span>
          <h2>LA USD Employee Kickoff</h2>
          <p><strong>Date:</strong> December 9, 2025 (2 days away!)</p>
          <p><strong>Audience:</strong> School District Employees</p>
          <p>Learn about the initiative, teacher resources, and how to support student participation.</p>
        </div>

        <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '1rem', border: '2px solid var(--primary-400)' }}>
          <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: 'var(--primary-100)', color: 'var(--primary-800)', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '600', marginBottom: '1rem' }}>FEATURED</span>
          <h2>Student Kickoff Event</h2>
          <p><strong>Date:</strong> December 11, 2025 (4 days away!)</p>
          <p><strong>Audience:</strong> 800+ High School Students</p>
          <p>See the Loot Locker demo, form teams, and start building!</p>
        </div>

        <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '1rem', border: '2px solid var(--secondary-400)' }}>
          <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: 'var(--secondary-100)', color: 'var(--secondary-800)', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '600', marginBottom: '1rem' }}>PLANNED</span>
          <h2>Mobile Trailer Tour</h2>
          <p><strong>Date:</strong> January 2026 (After Holidays)</p>
          <p><strong>Audience:</strong> LA School District</p>
          <p>The Loot Locker demo trailer will tour schools across the district.</p>
        </div>
      </div>

      <p style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--primary-50)', borderRadius: '0.5rem' }}>
        <strong>Want to host an event?</strong> Contact us to bring a hackathon or workshop to your school or organization!
      </p>
    </div>
  )
}

export default Events
