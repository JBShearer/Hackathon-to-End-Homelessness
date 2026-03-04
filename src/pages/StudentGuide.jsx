import { Link } from 'react-router-dom'

function StudentGuide() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <p
        style={{
          display: 'inline-block',
          padding: '0.35rem 0.8rem',
          borderRadius: '999px',
          backgroundColor: 'var(--primary-50)',
          color: 'var(--primary-700)',
          fontSize: '0.8rem',
          fontWeight: 700,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}
      >
        Community Edition • Drafted for BTP tailoring
      </p>

      <h1 style={{ marginTop: '0.9rem' }}>🎓 Student Workbook (Web Summary)</h1>
      <p style={{ fontSize: '1.15rem', maxWidth: '58rem' }}>
        This page distills your Student Workbook into a web-friendly launch version.
        It keeps the core 3-day flow live and flags where each lab should be tailored to your actual SAP BTP landscape.
      </p>

      <section style={{ marginTop: '2rem', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid var(--gray-200)', backgroundColor: 'white' }}>
        <h2 style={{ marginBottom: '0.75rem' }}>Quick Start (What to do first)</h2>
        <ol style={{ lineHeight: 1.9 }}>
          <li><strong>Read pre-work P1–P5</strong> (movement, problem context, design thinking, tech primer, team roles).</li>
          <li><strong>Confirm your BTP access</strong> (Build Apps, Process Automation, HANA, Identity, AI service endpoints).</li>
          <li><strong>Choose your role</strong> (Product Owner, Builder, Designer, Tester, Integrator).</li>
          <li><strong>Review <Link to="/loot-locker">Loot Locker</Link></strong> and map your team’s Day 1 → Day 3 implementation plan.</li>
        </ol>
      </section>

      <section style={{ marginTop: '2.5rem' }}>
        <h2>3-Day Build Arc</h2>
        <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ padding: '1rem 1.15rem', backgroundColor: 'var(--primary-50)', borderRadius: '0.75rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Day 1 — Intake & Inventory</h3>
            <p style={{ marginBottom: 0 }}>
              Build a working intake app: image capture, AI suggestion, human override, save to inventory.
            </p>
          </div>
          <div style={{ padding: '1rem 1.15rem', backgroundColor: 'var(--primary-50)', borderRadius: '0.75rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Day 2 — Requests & Matching</h3>
            <p style={{ marginBottom: 0 }}>
              Build request submission, matching logic, and approval workflows with ethical decision checkpoints.
            </p>
          </div>
          <div style={{ padding: '1rem 1.15rem', backgroundColor: 'var(--primary-50)', borderRadius: '0.75rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Day 3 — Locker Integration</h3>
            <p style={{ marginBottom: 0 }}>
              Connect locker APIs, generate pickup codes, and demo a full donation-to-pickup flow.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '2.5rem' }}>
        <h2>Where BTP Tailoring Is Needed</h2>
        <ul style={{ lineHeight: 1.9 }}>
          <li><strong>Identity:</strong> map login/setup steps to your SAP Cloud Identity tenant and role model.</li>
          <li><strong>Build Apps:</strong> replace generic app setup with your org’s spaces, templates, and governance conventions.</li>
          <li><strong>AI calls:</strong> swap placeholder endpoints for approved AI Core/AI Launchpad service paths and credentials strategy.</li>
          <li><strong>Data model:</strong> align inventory/request schema with your HANA Cloud table naming and lifecycle rules.</li>
          <li><strong>Process automation:</strong> tailor approval routing to actual approver roles and escalation paths.</li>
          <li><strong>Locker integration:</strong> adapt APIs and key management to your deployed hardware/vendor stack.</li>
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
        <h2 style={{ marginBottom: '0.6rem' }}>Next Step for Learners</h2>
        <p style={{ marginBottom: '0.75rem' }}>
          Use this page as the lightweight front door, then follow your full workbook PDF/Doc in session.
        </p>
        <p style={{ marginBottom: 0 }}>
          Facilitating? Open the <Link to="/facilitator-guide">Facilitator Guide</Link> for pacing, train-the-trainer, and troubleshooting structure.
        </p>
      </section>
    </div>
  )
}

export default StudentGuide
