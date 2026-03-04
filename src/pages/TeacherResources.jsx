import { Link } from 'react-router-dom'

function TeacherResources() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <p
        style={{
          display: 'inline-block',
          padding: '0.35rem 0.8rem',
          borderRadius: '999px',
          backgroundColor: 'var(--accent-50)',
          color: 'var(--accent-700)',
          fontSize: '0.8rem',
          fontWeight: 700,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}
      >
        Facilitator Guide • Community Edition
      </p>

      <h1 style={{ marginTop: '0.9rem' }}>👨‍🏫 Facilitator Guide (Web Summary)</h1>
      <p style={{ fontSize: '1.15rem', maxWidth: '58rem' }}>
        This page converts your Facilitator Guide into an easy website format: session cadence,
        train-the-trainer structure, workforce integration, and what needs BTP-specific tailoring.
      </p>

      <section style={{ marginTop: '2rem', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid var(--gray-200)', backgroundColor: 'white' }}>
        <h2 style={{ marginBottom: '0.75rem' }}>90-Minute Session Cadence</h2>
        <ul style={{ lineHeight: 1.9 }}>
          <li><strong>Day 1:</strong> Intake + AI classification + inventory save + reflection.</li>
          <li><strong>Day 2:</strong> Request/matching engine + approvals + ethics discussion.</li>
          <li><strong>Day 3:</strong> Locker integration + end-to-end showcase + commitments.</li>
        </ul>
        <p style={{ marginBottom: 0 }}>
          Keep checkpoint discipline tight; this format works only when pre-work is complete and facilitation remains focused.
        </p>
      </section>

      <section style={{ marginTop: '2.5rem' }}>
        <h2>Train-the-Trainer Model</h2>
        <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ padding: '1rem 1.15rem', borderRadius: '0.75rem', backgroundColor: 'var(--primary-50)' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Weeks 1–3</h3>
            <p style={{ marginBottom: 0 }}>Lead facilitators run sessions while local educators observe and co-facilitate.</p>
          </div>
          <div style={{ padding: '1rem 1.15rem', borderRadius: '0.75rem', backgroundColor: 'var(--primary-50)' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Weeks 4–12</h3>
            <p style={{ marginBottom: 0 }}>Local facilitators lead independently with virtual backstop support.</p>
          </div>
          <div style={{ padding: '1rem 1.15rem', borderRadius: '0.75rem', backgroundColor: 'var(--primary-50)' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Post Week 12</h3>
            <p style={{ marginBottom: 0 }}>Community ownership: materials, methods, and operations transfer fully local.</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '2.5rem' }}>
        <h2>Where BTP Tailoring Is Needed</h2>
        <ul style={{ lineHeight: 1.9 }}>
          <li><strong>Landscape readiness:</strong> replace generic setup with your subaccount, entitlements, and environment specifics.</li>
          <li><strong>Identity provisioning:</strong> map participant/admin onboarding to your Cloud Identity process.</li>
          <li><strong>Build + Process governance:</strong> align workflows with your real approval rules and operational ownership.</li>
          <li><strong>AI and integration security:</strong> use your approved destination model, secret handling, and API gateway standards.</li>
          <li><strong>Monitoring:</strong> define where facilitators check logs (workflow, API, app) during live sessions.</li>
        </ul>
      </section>

      <section
        style={{
          marginTop: '2.5rem',
          padding: '1.25rem',
          borderRadius: '0.75rem',
          backgroundColor: 'var(--secondary-50)',
          border: '1px solid var(--secondary-100)',
        }}
      >
        <h2 style={{ marginBottom: '0.6rem' }}>Implementation Notes</h2>
        <p style={{ marginBottom: '0.75rem' }}>
          The full facilitator guide should remain your canonical operational document. This page is the lightweight public-facing version.
        </p>
        <p style={{ marginBottom: 0 }}>
          For student framing, direct participants to the <Link to="/student-guide">Student Guide</Link>. For solution context, pair sessions with the <Link to="/loot-locker">Loot Locker</Link> page.
        </p>
      </section>
    </div>
  )
}

export default TeacherResources
