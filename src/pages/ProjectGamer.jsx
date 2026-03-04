function ProjectGamer() {
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
          marginBottom: '0.75rem',
        }}
      >
        Umbrella Project
      </p>

      <h1>🎯 Project GAMER</h1>
      <h2>Smart City Planning Game + Live BTP Systems Platform</h2>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        Project GAMER is the parent initiative. Smart City Planning is the game layer, and the underlying
        platform runs on SAP Business Data Cloud and BTP-aligned integration patterns.
      </p>

      <h2>What is Project GAMER?</h2>
      <p>
        We're building a dual-mode system: (1) a free Smart City Planning game and (2) a live interoperability
        backbone for real operations. Players simulate emergency response, routing, warehousing, and city-scale
        resource decisions while generating structures that can map into production systems.
      </p>

      <h2>Key Features (Project + Game)</h2>
      <ul>
        <li><strong>Smart City Planning (Game):</strong> Free training/simulation experience for planning and response scenarios</li>
        <li><strong>NIEM-Aligned Exchange:</strong> Structured information-sharing model for interoperability</li>
        <li><strong>FIWARE API Patterns:</strong> Open integration approach for contextual and operational data</li>
        <li><strong>Business Data Cloud Foundation:</strong> Shared data layer for planning, analytics, and orchestration</li>
        <li><strong>SAP System Mapping:</strong> Connect gameplay/logistics flows to enterprise processes and controls</li>
        <li><strong>Business Network Extensions:</strong> Leverage external logistics/procurement ecosystems where needed</li>
        <li><strong>Warehouse + Yard + Locker Automation:</strong> Scale distribution and redistribution through truck/robotics workflows</li>
      </ul>

      <h2>Core Strategy</h2>
      <p>
        The long-term goal is circular-economy infrastructure at scale: high-volume filling and routing of lockers,
        connected warehousing and yard logistics, and interoperable partner networks so people can access needed goods
        without constantly buying new items.
      </p>

      <h2>Technology & Standards Direction</h2>
      <ul>
        <li><strong>SAP Business Data Cloud:</strong> Free game data access and enterprise-aligned planning layer</li>
        <li><strong>SAP Analytics + Planning:</strong> Scenario modeling, dashboards, and operations review</li>
        <li><strong>NIEM Model:</strong> Common information model for cross-domain coordination</li>
        <li><strong>FIWARE APIs:</strong> Open interoperability for context-aware smart city integrations</li>
        <li><strong>SAP Business Networks:</strong> Logistics and partner collaboration at network scale</li>
      </ul>

      <p style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--secondary-50)', borderRadius: '0.5rem' }}>
        <strong>Positioning update:</strong> Project GAMER is the project umbrella.
        Smart City Planning is the core game experience. Loot Locker remains a practical activation pathway
        for circular distribution, smart lockers, and automation workflows.
      </p>
    </div>
  )
}

export default ProjectGamer
