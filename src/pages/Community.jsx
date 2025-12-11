import { useState, useEffect } from 'react'
import { supabase, isSupabaseConfigured } from '../services/supabase'
import BusinessProcessCard from '../components/discussion/BusinessProcessCard'
import './Community.css'

// Mock data for when Supabase isn't configured
const MOCK_PROCESSES = [
  // Emergency / Real-time
  { id: '1', name: 'Emergency Response', slug: 'emergency-response', description: 'Immediate crisis intervention and safety services', icon: '🚨', category: 'emergency', timeframe: 'real-time', sort_order: 1 },
  { id: '2', name: 'Street Outreach', slug: 'street-outreach', description: 'Mobile teams connecting with unsheltered individuals', icon: '🚶', category: 'emergency', timeframe: 'daily', sort_order: 2 },
  { id: '3', name: 'Emergency Shelter Operations', slug: 'emergency-shelter', description: 'Managing immediate temporary shelter facilities', icon: '🏠', category: 'emergency', timeframe: 'daily', sort_order: 3 },
  { id: '4', name: 'Crisis Hotlines & Navigation', slug: 'crisis-navigation', description: '211 services and crisis support coordination', icon: '📞', category: 'emergency', timeframe: 'real-time', sort_order: 4 },
  { id: '5', name: 'Emergency Medical Services', slug: 'emergency-medical', description: 'Healthcare for immediate medical crises', icon: '🏥', category: 'emergency', timeframe: 'real-time', sort_order: 5 },
  
  // Operational / Daily-Monthly
  { id: '6', name: 'Case Management', slug: 'case-management', description: 'Individual support and service coordination', icon: '📋', category: 'operational', timeframe: 'weekly', sort_order: 6 },
  { id: '7', name: 'Housing Navigation', slug: 'housing-navigation', description: 'Connecting individuals to available housing', icon: '🗺️', category: 'operational', timeframe: 'weekly', sort_order: 7 },
  { id: '8', name: 'Coordinated Entry', slug: 'coordinated-entry', description: 'Assessment and prioritization for housing resources', icon: '📊', category: 'operational', timeframe: 'weekly', sort_order: 8 },
  { id: '9', name: 'Benefits Enrollment', slug: 'benefits-enrollment', description: 'SSI, SNAP, Medicaid, and other public benefits', icon: '💳', category: 'operational', timeframe: 'monthly', sort_order: 9 },
  { id: '10', name: 'Employment Services', slug: 'employment-services', description: 'Job training, placement, and support', icon: '💼', category: 'operational', timeframe: 'monthly', sort_order: 10 },
  { id: '11', name: 'Mental Health Services', slug: 'mental-health', description: 'Ongoing behavioral health treatment and support', icon: '🧠', category: 'operational', timeframe: 'weekly', sort_order: 11 },
  { id: '12', name: 'Substance Use Treatment', slug: 'substance-use', description: 'Addiction recovery and harm reduction programs', icon: '💊', category: 'operational', timeframe: 'weekly', sort_order: 12 },
  { id: '13', name: 'Legal Services', slug: 'legal-services', description: 'Expungement, eviction defense, SSI appeals', icon: '⚖️', category: 'operational', timeframe: 'monthly', sort_order: 13 },
  
  // Logistics & Operations
  { id: '14', name: 'Supply Chain & Distribution', slug: 'supply-chain', description: 'Food, clothing, hygiene supplies, equipment', icon: '📦', category: 'operational', timeframe: 'daily', sort_order: 14 },
  { id: '15', name: 'Transportation Services', slug: 'transportation', description: 'Bus passes, ride programs, vehicle access', icon: '🚌', category: 'operational', timeframe: 'daily', sort_order: 15 },
  { id: '16', name: 'Warehousing & Inventory', slug: 'warehousing', description: 'Storage and management of donated goods', icon: '🏭', category: 'operational', timeframe: 'daily', sort_order: 16 },
  { id: '17', name: 'Volunteer & Staff Management', slug: 'staffing', description: 'Recruiting, training, and coordination', icon: '👥', category: 'operational', timeframe: 'weekly', sort_order: 17 },
  
  // Strategic / Long-term
  { id: '18', name: 'Affordable Housing Development', slug: 'housing-development', description: 'Building and financing permanent housing', icon: '🏗️', category: 'strategic', timeframe: 'multi-year', sort_order: 18 },
  { id: '19', name: 'Fund Development & Management', slug: 'fund-management', description: 'Grants, donations, budgeting, and financial oversight', icon: '💰', category: 'strategic', timeframe: 'annual', sort_order: 19 },
  { id: '20', name: 'Policy & Advocacy', slug: 'policy-advocacy', description: 'Zoning, rent control, NIMBY opposition, legislation', icon: '📜', category: 'strategic', timeframe: 'multi-year', sort_order: 20 },
  { id: '21', name: 'Data Systems & Technology', slug: 'data-systems', description: 'HMIS, digital identity, fintech, SSI automation', icon: '💻', category: 'systemic', timeframe: 'annual', sort_order: 21 },
]

function Community() {
  const [processes, setProcesses] = useState(MOCK_PROCESSES)
  const [filteredProcesses, setFilteredProcesses] = useState(MOCK_PROCESSES)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (isSupabaseConfigured()) {
      fetchBusinessProcesses()
    }
  }, [])

  useEffect(() => {
    filterProcesses()
  }, [selectedCategory, searchTerm, processes])

  const fetchBusinessProcesses = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('business_processes')
        .select('*')
        .is('parent_id', null) // Only top-level processes
        .order('sort_order')

      if (error) throw error
      if (data) setProcesses(data)
    } catch (error) {
      console.error('Error fetching business processes:', error)
    } finally {
      setLoading(false)
    }
  }

  const filterProcesses = () => {
    let filtered = processes

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredProcesses(filtered)
  }

  const categories = [
    { id: 'all', name: 'All Categories', icon: '📚', count: processes.length },
    { id: 'emergency', name: 'Emergency Response', icon: '🚨', count: processes.filter(p => p.category === 'emergency').length },
    { id: 'operational', name: 'Daily Operations', icon: '⚙️', count: processes.filter(p => p.category === 'operational').length },
    { id: 'strategic', name: 'Strategic Planning', icon: '🎯', count: processes.filter(p => p.category === 'strategic').length },
    { id: 'systemic', name: 'Systems & Tech', icon: '💻', count: processes.filter(p => p.category === 'systemic').length },
  ]

  return (
    <div className="community-page">
      <div className="container" style={{ padding: '4rem 1rem' }}>
        {/* Header */}
        <div className="community-header">
          <h1>👥 Community Discussions</h1>
          <p className="subtitle">
            Collaborate on solutions across the 21 core business processes in homelessness response.
            Share knowledge from real-time emergency response to multi-year strategic planning.
          </p>
        </div>

        {/* Search Bar */}
        <div className="search-section">
          <input
            type="text"
            placeholder="Search business processes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            >
              <span className="category-icon">{cat.icon}</span>
              <span className="category-name">{cat.name}</span>
              <span className="category-count">{cat.count}</span>
            </button>
          ))}
        </div>

        {/* Info Banner */}
        {!isSupabaseConfigured() && (
          <div className="info-banner">
            <span className="info-icon">ℹ️</span>
            <div>
              <strong>Preview Mode:</strong> Showing all 21 business process categories.
              Connect to Supabase to start real discussions and earn reputation points!
            </div>
          </div>
        )}

        {/* Business Processes Grid */}
        {loading ? (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading business processes...</p>
          </div>
        ) : filteredProcesses.length > 0 ? (
          <div className="processes-grid">
            {filteredProcesses.map(process => (
              <BusinessProcessCard
                key={process.id}
                process={process}
                topicCount={0}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No business processes match your search.</p>
            <button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }} className="btn btn-secondary">
              Clear Filters
            </button>
          </div>
        )}

        {/* Info Section */}
        <div className="info-section">
          <h2>About the Business Process Framework</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>🚨 Emergency (Real-time)</h3>
              <p>Immediate crisis intervention, street outreach, emergency shelters, and 24/7 hotlines.</p>
            </div>
            <div className="info-card">
              <h3>⚙️ Operational (Daily-Monthly)</h3>
              <p>Case management, housing navigation, benefits enrollment, employment, and health services.</p>
            </div>
            <div className="info-card">
              <h3>🎯 Strategic (1-8 years)</h3>
              <p>Housing development, fund management, policy advocacy, and long-term planning initiatives.</p>
            </div>
            <div className="info-card">
              <h3>💻 Systems & Technology</h3>
              <p>HMIS data, digital identity (SSI), fintech solutions, and service coordination platforms.</p>
            </div>
          </div>
        </div>

        {/* Gamification Teaser */}
        <div className="gamification-teaser">
          <h3>🏆 Earn Reputation Points</h3>
          <p>Contribute to discussions and earn points:</p>
          <ul>
            <li><strong>+10 points</strong> for starting a discussion</li>
            <li><strong>+5 points</strong> for posting helpful replies</li>
            <li><strong>+10 points</strong> for each upvote received</li>
            <li><strong>+15 points</strong> when your solution is accepted</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            <a href="/signup" className="btn btn-primary">Sign Up to Start Contributing</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Community
