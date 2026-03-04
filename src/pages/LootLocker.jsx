function LootLocker() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <header style={{ marginBottom: '2.5rem' }}>
        <p
          style={{
            display: 'inline-block',
            marginBottom: '0.85rem',
            padding: '0.35rem 0.8rem',
            borderRadius: '999px',
            backgroundColor: 'var(--secondary-50)',
            color: 'var(--secondary-700)',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          Core concept retained during pivot
        </p>

        <p
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.9rem',
            borderRadius: '999px',
            background:
              'linear-gradient(135deg, var(--primary-500), var(--primary-700))',
            color: 'white',
            fontSize: '0.8rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '1.4rem',
              height: '1.4rem',
              borderRadius: '0.35rem',
              backgroundColor: 'rgba(255, 255, 255, 0.16)',
              fontSize: '0.75rem',
              fontWeight: 700,
            }}
          >
            LL
          </span>
          Loot Locker Prototype
        </p>

        <h1 style={{ marginTop: '1rem' }}>Robotic Donation & Distribution System</h1>
        <p style={{ fontSize: '1.25rem', marginTop: '0.75rem', maxWidth: '48rem' }}>
          A robotic donation system with AI-powered intake, SAP-integrated logistics,
          and smart locker control. The digital twin of a circular economy in action.
        </p>

        <div
          style={{
            marginTop: '1.25rem',
            padding: '1rem 1.15rem',
            borderRadius: '0.75rem',
            border: '1px solid var(--gray-200)',
            backgroundColor: 'white',
            maxWidth: '58rem',
          }}
        >
          <strong>BTP Tailoring Note:</strong> this page is currently architecture-first.
          Next content pass should map each flow to your exact BTP subaccount setup,
          identity model, destinations, API security, and service ownership.
        </div>

        <section
          style={{
            marginTop: '1.25rem',
            padding: '1rem 1.15rem',
            borderRadius: '0.75rem',
            border: '1px solid var(--gray-200)',
            backgroundColor: 'white',
            maxWidth: '58rem',
          }}
        >
          <h2 style={{ fontSize: '1.35rem', marginBottom: '0.65rem' }}>Concept Video</h2>
          <p style={{ marginBottom: '0.8rem' }}>
            This Iris video explains the Loot Locker concept.
          </p>

          <div
            style={{
              position: 'relative',
              width: '100%',
              paddingTop: '56.25%',
              borderRadius: '0.7rem',
              overflow: 'hidden',
              border: '1px solid var(--gray-200)',
              backgroundColor: 'var(--gray-100)',
            }}
          >
            <iframe
              title="Loot Locker Concept Video"
              src="https://iris.video.sap.com/message/6a9239f65aa0a7f8c5b928f645793b7a50e604aca5bfac89d50776989c17"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                border: 0,
              }}
            />
          </div>

          <p style={{ marginTop: '0.8rem', marginBottom: 0, fontSize: '0.95rem', color: 'var(--gray-600)' }}>
            If your browser blocks embedding due to Iris security settings, open the video directly:{' '}
            <a
              href="https://iris.video.sap.com/message/6a9239f65aa0a7f8c5b928f645793b7a50e604aca5bfac89d50776989c17"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on Iris
            </a>
          </p>
        </section>
      </header>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '2.5rem',
        }}
      >
        <div
          style={{
            padding: '2rem',
            background:
              'linear-gradient(135deg, var(--primary-50), var(--gray-50))',
            borderRadius: '1rem',
            border: '1px solid var(--primary-100)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '3rem',
              height: '3rem',
              borderRadius: '0.9rem',
              backgroundColor: 'var(--primary-600)',
              color: 'white',
              fontWeight: 700,
              marginBottom: '1rem',
              fontSize: '0.9rem',
            }}
          >
            IN
          </div>
          <h2>Drop Loot Cabinet</h2>
          <p>
            <strong>What it does:</strong> Intelligent inbound donation intake with
            machine vision, photogrammetry, and conversational AI.
          </p>
          <h3 style={{ marginTop: '1rem' }}>Key Capabilities</h3>
          <ul>
            <li>Machine vision for item detection and quality checks</li>
            <li>Turntable control for 360° scanning sequences</li>
            <li>Photogrammetry capture pipelines</li>
            <li>On-device classification and tagging</li>
          </ul>
        </div>

        <div
          style={{
            padding: '2rem',
            background:
              'linear-gradient(135deg, var(--accent-50), var(--gray-50))',
            borderRadius: '1rem',
            border: '1px solid var(--accent-100)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '3rem',
              height: '3rem',
              borderRadius: '0.9rem',
              backgroundColor: 'var(--accent-500)',
              color: 'var(--gray-900)',
              fontWeight: 700,
              marginBottom: '1rem',
              fontSize: '0.9rem',
            }}
          >
            OUT
          </div>
          <h2>Get Loot Cabinet</h2>
          <p>
            <strong>What it does:</strong> Experience and fulfillment interface with
            holographic visualization, request queues, and locker control.
          </p>
          <h3 style={{ marginTop: '1rem' }}>Key Capabilities</h3>
          <ul>
            <li>Request and reservation queues for outgoing items</li>
            <li>Assignment logic for matching people to resources</li>
            <li>Locker bay control (open/close, occupancy, audit)</li>
            <li>Real-time inventory and distribution dashboards</li>
          </ul>
        </div>
      </div>

      <section style={{ marginTop: '4rem' }}>
        <h2>Activity Categories for the Loot Locker Prototype</h2>
        <p style={{ maxWidth: '52rem' }}>
          The prototype isn't just a warehouse induction demo. It's a
          full playground for AI, automation, and logistics scenarios. Here are
          discrete activity tracks you can build and experiment with.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem',
            marginTop: '2rem',
          }}
        >
          <div
            style={{
              padding: '1.75rem',
              border: '2px solid var(--primary-200)',
              borderRadius: '0.9rem',
              backgroundColor: 'white',
            }}
          >
            <h3>Inbound Capture & Machine Vision</h3>
            <ul>
              <li>Item detection and classification models</li>
              <li>Photogrammetry workflows from turntable captures</li>
              <li>Background removal and quality scoring</li>
              <li>Multi-angle inspection pipelines</li>
            </ul>
          </div>

          <div
            style={{
              padding: '1.75rem',
              border: '2px solid var(--primary-200)',
              borderRadius: '0.9rem',
              backgroundColor: 'white',
            }}
          >
            <h3>Turntable & Device Control</h3>
            <ul>
              <li>Motion control for the rotating platform</li>
              <li>Synchronized camera capture and lighting control</li>
              <li>Safety states and error handling for hardware</li>
              <li>APIs for scripts and low-code orchestration</li>
            </ul>
          </div>

          <div
            style={{
              padding: '1.75rem',
              border: '2px solid var(--primary-200)',
              borderRadius: '0.9rem',
              backgroundColor: 'white',
            }}
          >
            <h3>Classification & Knowledge Graphs</h3>
            <ul>
              <li>Category and condition taxonomies for donations</li>
              <li>LLM-based descriptions and attribute extraction</li>
              <li>Linking items to needs, programs, and locations</li>
              <li>Feedback loops to improve model confidence</li>
            </ul>
          </div>

          <div
            style={{
              padding: '1.75rem',
              border: '2px solid var(--primary-200)',
              borderRadius: '0.9rem',
              backgroundColor: 'white',
            }}
          >
            <h3>Queues, Assignment & Logistics</h3>
            <ul>
              <li>Request queues for individuals, shelters, and NGOs</li>
              <li>Assignment logic based on priority and fit</li>
              <li>Integration patterns for SAP logistics and WM</li>
              <li>Simulation of different routing and matching rules</li>
            </ul>
          </div>

          <div
            style={{
              padding: '1.75rem',
              border: '2px solid var(--primary-200)',
              borderRadius: '0.9rem',
              backgroundColor: 'white',
            }}
          >
            <h3>Gamification & Experience Design</h3>
            <ul>
              <li>Scoring systems for intake and distribution tasks</li>
              <li>Quests and missions for students and volunteers</li>
              <li>Badges, streaks, and leaderboards tied to activity</li>
              <li>Cooperative modes for teams and classrooms</li>
            </ul>
          </div>

          <div
            style={{
              padding: '1.75rem',
              border: '2px solid var(--primary-200)',
              borderRadius: '0.9rem',
              backgroundColor: 'white',
            }}
          >
            <h3>Distribution & Locker Control</h3>
            <ul>
              <li>Locker bay allocation and slot management</li>
              <li>Outgoing flows and pickup verification</li>
              <li>Notifications and status updates to recipients</li>
              <li>Audit trails for equity, safety, and reporting</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        style={{
          marginTop: '3.5rem',
          padding: '2rem',
          backgroundColor: 'var(--gray-50)',
          borderRadius: '0.9rem',
          border: '1px dashed var(--gray-300)',
        }}
      >
        <h2 style={{ marginBottom: '0.75rem' }}>From Prototype to Production</h2>
        <p style={{ marginBottom: 0, maxWidth: '52rem' }}>
          Use the Loot Locker prototype to explore how SAP technologies, AI, and
          robotics can work together—from camera to cabinet to cloud. Each activity
          category can be a standalone student project or part of a larger
          end-to-end solution.
        </p>
      </section>

      <section
        style={{
          marginTop: '2rem',
          padding: '1.5rem',
          borderRadius: '0.9rem',
          backgroundColor: 'var(--primary-50)',
          border: '1px solid var(--primary-200)',
        }}
      >
        <h2 style={{ marginBottom: '0.8rem' }}>BTP Environment Mapping Checklist</h2>
        <ul style={{ marginBottom: 0, lineHeight: 1.9 }}>
          <li><strong>Identity:</strong> map participant, approver, and admin roles to Cloud Identity groups/claims.</li>
          <li><strong>Build Apps:</strong> establish app lifecycle (dev/test/prod) and naming conventions by cohort.</li>
          <li><strong>HANA Cloud:</strong> confirm schema ownership, table retention rules, and audit requirements.</li>
          <li><strong>Process Automation:</strong> align approval steps with real business owners and escalation timing.</li>
          <li><strong>Integration Suite:</strong> define destinations for locker APIs and any cross-agency service endpoints.</li>
          <li><strong>AI Services:</strong> register approved model endpoints and confidence thresholds for human override.</li>
          <li><strong>Observability:</strong> define where facilitators monitor errors during live hackathon sessions.</li>
        </ul>
      </section>
    </div>
  )
}

export default LootLocker
