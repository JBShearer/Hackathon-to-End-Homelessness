function About() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1>About Hackathon to End Homelessness</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        A gamified community platform to coordinate volunteer efforts, track progress, and develop 
        solutions for ending homelessness through technology, collaboration, and systemic change.
      </p>
      
      <h2>Our Mission</h2>
      <p>
        To build and maintain a digital ecosystem that connects volunteers, organizations, and 
        resources to solve homelessness through systematic documentation, gamified engagement, 
        and real-world implementation of solutions.
      </p>

      <h2>Our Vision</h2>
      <p>
        Create a sustainable circular economy that provides grace, dignity, and resources for 
        all humans, eliminating scarcity through coordinated action, innovative technology, 
        and community engagement.
      </p>

      <h2>How We Work</h2>
      <ul>
        <li><strong>Open Source:</strong> All our projects are open source and community-driven</li>
        <li><strong>Student-Focused:</strong> We empower STEM students to build real-world solutions</li>
        <li><strong>Gamified Learning:</strong> Earn points, badges, and recognition for contributions</li>
        <li><strong>Real Impact:</strong> Every project directly helps people experiencing homelessness</li>
      </ul>

      <p style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--primary-50)', borderRadius: '0.5rem' }}>
        <strong>Join us!</strong> Whether you're a student, developer, NGO, or just someone who wants to help, 
        there's a place for you in our community.
      </p>
    </div>
  )
}

export default About
