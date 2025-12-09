import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="container" style={{ padding: '8rem 1rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '6rem', marginBottom: '1rem' }}>404</h1>
      <h2>Page Not Found</h2>
      <p style={{ fontSize: '1.25rem', marginTop: '1rem', marginBottom: '2rem', color: 'var(--gray-600)' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        style={{ 
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: 'var(--primary-600)',
          color: 'white',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          fontWeight: '600'
        }}
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotFound
