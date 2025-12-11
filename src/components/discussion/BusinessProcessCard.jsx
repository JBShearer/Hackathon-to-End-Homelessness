import { Link } from 'react-router-dom'
import './BusinessProcessCard.css'

function BusinessProcessCard({ process, topicCount = 0 }) {
  const getCategoryColor = (category) => {
    switch (category) {
      case 'emergency': return 'var(--error-600)'
      case 'operational': return 'var(--primary-600)'
      case 'strategic': return 'var(--secondary-600)'
      case 'systemic': return 'var(--accent-600)'
      default: return 'var(--gray-600)'
    }
  }

  const getTimeframeLabel = (timeframe) => {
    switch (timeframe) {
      case 'real-time': return '⚡ Real-time'
      case 'daily': return '📅 Daily'
      case 'weekly': return '📆 Weekly'
      case 'monthly': return '🗓️ Monthly'
      case 'annual': return '📊 Annual'
      case 'multi-year': return '🏛️ Multi-year'
      default: return timeframe
    }
  }

  return (
    <Link 
      to={`/community/${process.slug}`} 
      className="business-process-card"
      style={{ '--category-color': getCategoryColor(process.category) }}
    >
      <div className="process-header">
        <span className="process-icon">{process.icon}</span>
        <div className="process-info">
          <h3>{process.name}</h3>
          <p className="process-description">{process.description}</p>
        </div>
      </div>
      
      <div className="process-footer">
        <span className="process-timeframe">
          {getTimeframeLabel(process.timeframe)}
        </span>
        <span className="process-topics">
          {topicCount} {topicCount === 1 ? 'discussion' : 'discussions'}
        </span>
      </div>
    </Link>
  )
}

export default BusinessProcessCard
