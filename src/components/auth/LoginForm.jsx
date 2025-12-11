import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import './SignupForm.css'

function LoginForm() {
  const { signIn, isConfigured } = useAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError('')
  }

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError('Please enter your email and password')
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address')
      return false
    }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!isConfigured) {
      setError('Authentication service is not configured. Please try again later.')
      return
    }

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      const { error: signInError } = await signIn(formData.email, formData.password)

      if (signInError) {
        const message = signInError.message || ''
        const normalized = message.toLowerCase()

        if (normalized.includes('confirm') || normalized.includes('verified')) {
          setError(
            "You need to verify your email before you can log in. Check your inbox (and spam folder) for a verification email, then try again."
          )
        } else if (normalized.includes('invalid login credentials')) {
          setError('Incorrect email or password. Please try again.')
        } else {
          setError(message || 'Unable to log in. Please try again.')
        }

        setLoading(false)
        return
      }

      // On successful login, send user to the community
      navigate('/community')
    } catch (err) {
      console.error('Login error', err)
      setError('An unexpected error occurred. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Log In</h2>
        <p className="form-subtitle">Welcome back to the movement to end homelessness</p>

        {error && (
          <div className="error-message">
            <span className="error-icon">⚠️</span>
            {error}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">
            Email Address <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">
            Password <span className="required">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            disabled={loading}
            minLength={6}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-lg btn-full"
          disabled={loading}
        >
          {loading ? 'Logging In...' : 'Log In'}
        </button>

        <p className="form-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  )
}

export default LoginForm
