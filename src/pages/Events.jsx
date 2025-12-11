function Events() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1>📅 Events</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        We're planning workshops, hackathons, and community gatherings.
      </p>

      <div
        style={{
          marginTop: '2rem',
          padding: '2.5rem 2rem',
          backgroundColor: 'var(--primary-50)',
          borderRadius: '1rem',
          border: '2px dashed var(--primary-200)',
          textAlign: 'center',
        }}
      >
        <h2 style={{ marginBottom: '1rem' }}>Events Coming Soon</h2>
        <p style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>
          We’re working with schools, community partners, and cities to coordinate
          kickoff events and workshops.
        </p>
        <p style={{ fontSize: '0.95rem', color: 'var(--gray-600)' }}>
          Once dates and details are confirmed, they’ll appear here.
        </p>
      </div>
    </div>
  )
}

export default Events
