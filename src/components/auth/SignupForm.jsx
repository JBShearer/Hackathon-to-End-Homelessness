import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import './SignupForm.css'

function SignupForm() {
  const { signUp, isConfigured } = useAuth()
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    displayName: '',
    role: 'contributor'
  })
  
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const validateForm = () => {
    if (!formData.email || !formData.password || !formData.displayName) {
      setError('Please fill in all required fields')
      return false
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return false
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
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
      const { data, error: signUpError } = await signUp(
        formData.email,
        formData.password,
        {
          display_name: formData.displayName,
          role: formData.role,
        }
      )

      if (signUpError) {
        setError(signUpError.message)
        setLoading(false)
        return
      }

      setSuccess(true)
      setLoading(false)

      // Redirect after showing success message
      setTimeout(() => {
        navigate('/community')
      }, 2000)

    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="signup-success">
        <div className="success-icon">✅</div>
        <h2>Welcome to the Community!</h2>
        <p>Check your email to verify your account.</p>
        <p>Redirecting you to the community...</p>
      </div>
    )
  }

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Create Your Account</h2>
        <p className="form-subtitle">Join the movement to end homelessness through technology</p>

        {error && (
          <div className="error-message">
            <span className="error-icon">⚠️</span>
            {error}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="displayName">
            Full Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="displayName"
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            disabled={loading}
          />
        </div>

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
          <small className="form-help">We'll send you updates and community news</small>
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
            placeholder="At least 6 characters"
            required
            disabled={loading}
            minLength={6}
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">
            Confirm Password <span className="required">*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter your password"
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">I am a...</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            disabled={loading}
          >
            <option value="contributor">Contributor / Developer</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher / Educator</option>
            <option value="volunteer">Volunteer</option>
            <option value="ngo">NGO / Organization</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button 
          type="submit" 
          className="btn btn-primary btn-lg btn-full"
          disabled={loading}
        >
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>

        <p className="form-footer">
          Already have an account? <a href="/login">Log in</a>
        </p>

        <p className="form-terms">
          By signing up, you agree to receive community updates and newsletters. 
          You can unsubscribe at any time.
        </p>
      </form>
    </div>
  )
}

export default SignupForm
