-- ============================================
-- DISCUSSION SYSTEM FOR HOMELESSNESS RESPONSE
-- Complete Supabase Schema
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- PROFILES TABLE (extends auth.users)
-- ============================================
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE,
  display_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'contributor', -- contributor, student, teacher, volunteer, ngo, admin
  bio TEXT,
  reputation_points INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- BUSINESS PROCESS CATEGORIES
-- Top 21 business processes for homelessness response
-- Organized by timeframe: Emergency (real-time) to Strategic (years)
-- ============================================
CREATE TABLE business_processes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT, -- emoji or icon identifier
  category TEXT NOT NULL, -- 'emergency', 'operational', 'strategic', 'systemic'
  timeframe TEXT, -- 'real-time', 'daily', 'weekly', 'monthly', 'annual', 'multi-year'
  sort_order INT,
  parent_id UUID REFERENCES business_processes(id), -- for sub-processes
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- INTEROPERABILITY LAYER (NGSI-LD / NIEM / FIWARE / Tractus-X)
-- ============================================

-- Locations aligned with NGSI-LD Place/Location concepts
CREATE TABLE interop_locations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  ngsi_id TEXT UNIQUE, -- e.g. urn:ngsi-ld:Place:1234
  ngsi_type TEXT NOT NULL DEFAULT 'Place',
  name TEXT,
  description TEXT,
  address_line1 TEXT,
  address_line2 TEXT,
  city TEXT,
  region TEXT,
  postal_code TEXT,
  country_code TEXT,
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Parties (persons or organizations)
CREATE TABLE interop_parties (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  ngsi_id TEXT UNIQUE,
  ngsi_type TEXT NOT NULL DEFAULT 'Party', -- Person or Organization in NGSI-LD terms
  party_type TEXT CHECK (party_type IN ('person', 'organization')),
  name TEXT,
  given_name TEXT,
  family_name TEXT,
  organization_name TEXT,
  email TEXT,
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Events / incidents (e.g. homelessness-related events)
CREATE TABLE interop_events (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  ngsi_id TEXT UNIQUE,
  ngsi_type TEXT NOT NULL DEFAULT 'HomelessnessEvent',
  title TEXT NOT NULL,
  description TEXT,
  category_code TEXT, -- can align with NIEM / local code lists
  severity_code TEXT,
  status_code TEXT,
  start_time TIMESTAMPTZ,
  end_time TIMESTAMPTZ,
  location_id UUID REFERENCES interop_locations(id),
  subject_party_id UUID REFERENCES interop_parties(id),
  created_by_profile_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Service requests (city-facing tickets, Open311 / NGSI-LD ServiceRequest)
CREATE TABLE interop_service_requests (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  ngsi_id TEXT UNIQUE,
  ngsi_type TEXT NOT NULL DEFAULT 'ServiceRequest',
  service_type_code TEXT,
  status_code TEXT,
  priority_code TEXT,
  summary TEXT,
  description TEXT,
  opened_at TIMESTAMPTZ,
  closed_at TIMESTAMPTZ,
  location_id UUID REFERENCES interop_locations(id),
  requester_party_id UUID REFERENCES interop_parties(id),
  assigned_party_id UUID REFERENCES interop_parties(id),
  created_by_profile_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Resources / assets (beds, vehicles, warehouses, etc.)
CREATE TABLE interop_resources (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  ngsi_id TEXT UNIQUE,
  ngsi_type TEXT NOT NULL DEFAULT 'Resource',
  resource_type TEXT,
  name TEXT,
  description TEXT,
  status_code TEXT,
  location_id UUID REFERENCES interop_locations(id),
  external_asset_id TEXT, -- e.g. Tractus-X assetId
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- External systems (FIWARE broker, Open311, Tractus-X, etc.)
CREATE TABLE external_systems (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  code TEXT UNIQUE NOT NULL, -- e.g. fiware-main, open311-la
  name TEXT NOT NULL,
  system_type TEXT, -- fiware, open311, tractus-x, other
  base_url TEXT,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Mapping between local interop entities and external IDs
CREATE TABLE external_entity_mappings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  external_system_id UUID REFERENCES external_systems(id) ON DELETE CASCADE,
  interop_table_name TEXT NOT NULL, -- e.g. interop_events, interop_service_requests
  interop_id UUID NOT NULL,
  external_entity_id TEXT NOT NULL,
  external_type TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (external_system_id, interop_table_name, interop_id),
  UNIQUE (external_system_id, external_entity_id)
);

-- ============================================
-- DISCUSSION TOPICS (within business processes)
-- ============================================
CREATE TABLE topics (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  business_process_id UUID REFERENCES business_processes(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  description TEXT,
  created_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
  is_pinned BOOLEAN DEFAULT false,
  is_locked BOOLEAN DEFAULT false,
  view_count INT DEFAULT 0,
  reply_count INT DEFAULT 0,
  last_activity_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  -- Optional links to interoperable entities
  interop_event_id UUID REFERENCES interop_events(id),
  interop_service_request_id UUID REFERENCES interop_service_requests(id),
  UNIQUE(business_process_id, slug)
);

-- ============================================
-- DISCUSSION POSTS
-- ============================================
CREATE TABLE posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  topic_id UUID REFERENCES topics(id) ON DELETE CASCADE,
  author_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  content TEXT NOT NULL,
  parent_post_id UUID REFERENCES posts(id) ON DELETE CASCADE, -- for threaded replies
  is_solution BOOLEAN DEFAULT false, -- marked as solution/best answer
  upvotes INT DEFAULT 0,
  downvotes INT DEFAULT 0,
  edited_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- POST VOTES (for reputation system)
-- ============================================
CREATE TABLE post_votes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  vote_type TEXT CHECK (vote_type IN ('upvote', 'downvote')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(post_id, user_id)
);

-- ============================================
-- TOPIC FOLLOWERS (for notifications)
-- ============================================
CREATE TABLE topic_followers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  topic_id UUID REFERENCES topics(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(topic_id, user_id)
);

-- ============================================
-- TAGS (for cross-cutting topics)
-- ============================================
CREATE TABLE tags (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  color TEXT, -- hex color for UI
  usage_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TOPIC TAGS (many-to-many)
-- ============================================
CREATE TABLE topic_tags (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  topic_id UUID REFERENCES topics(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(topic_id, tag_id)
);

-- ============================================
-- REPUTATION EVENTS (audit log for points)
-- ============================================
CREATE TABLE reputation_events (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL, -- 'post_created', 'upvote_received', 'solution_marked', etc.
  points INT NOT NULL,
  reference_type TEXT, -- 'post', 'topic', etc.
  reference_id UUID,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- ACHIEVEMENTS (gamification)
-- ============================================
CREATE TABLE achievements (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  points_required INT,
  badge_image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- USER ACHIEVEMENTS (earned badges)
-- ============================================
CREATE TABLE user_achievements (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  achievement_id UUID REFERENCES achievements(id) ON DELETE CASCADE,
  earned_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, achievement_id)
);

-- ============================================
-- INDEXES for performance
-- ============================================
CREATE INDEX idx_topics_business_process ON topics(business_process_id);
CREATE INDEX idx_topics_created_at ON topics(created_at DESC);
CREATE INDEX idx_topics_last_activity ON topics(last_activity_at DESC);
CREATE INDEX idx_topics_interop_event ON topics(interop_event_id);
CREATE INDEX idx_topics_interop_request ON topics(interop_service_request_id);
CREATE INDEX idx_posts_topic ON posts(topic_id);
CREATE INDEX idx_posts_author ON posts(author_id);
CREATE INDEX idx_posts_parent ON posts(parent_post_id);
CREATE INDEX idx_posts_created_at ON posts(created_at);
CREATE INDEX idx_post_votes_post ON post_votes(post_id);
CREATE INDEX idx_post_votes_user ON post_votes(user_id);
CREATE INDEX idx_reputation_events_user ON reputation_events(user_id);
CREATE INDEX idx_business_processes_category ON business_processes(category);
CREATE INDEX idx_business_processes_parent ON business_processes(parent_id);
CREATE INDEX idx_interop_locations_ngsi_id ON interop_locations(ngsi_id);
CREATE INDEX idx_interop_events_ngsi_id ON interop_events(ngsi_id);
CREATE INDEX idx_interop_service_requests_ngsi_id ON interop_service_requests(ngsi_id);
CREATE INDEX idx_external_entity_mappings_interop ON external_entity_mappings(interop_table_name, interop_id);

-- ============================================
-- ROW LEVEL SECURITY POLICIES
-- ============================================

-- Profiles: Anyone can read, users can update their own
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Business Processes: Read-only for all
ALTER TABLE business_processes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Business processes are viewable by everyone"
  ON business_processes FOR SELECT
  USING (true);

-- Interop tables: read for all, write for authenticated users (except config tables)
ALTER TABLE interop_locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE interop_parties ENABLE ROW LEVEL SECURITY;
ALTER TABLE interop_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE interop_service_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE interop_resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE external_systems ENABLE ROW LEVEL SECURITY;
ALTER TABLE external_entity_mappings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Interop locations are viewable by everyone"
  ON interop_locations FOR SELECT
  USING (true);

CREATE POLICY "Interop locations can be managed by authenticated users"
  ON interop_locations FOR INSERT, UPDATE, DELETE
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Interop parties are viewable by everyone"
  ON interop_parties FOR SELECT
  USING (true);

CREATE POLICY "Interop parties can be managed by authenticated users"
  ON interop_parties FOR INSERT, UPDATE, DELETE
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Interop events are viewable by everyone"
  ON interop_events FOR SELECT
  USING (true);

CREATE POLICY "Interop events can be managed by authenticated users"
  ON interop_events FOR INSERT, UPDATE, DELETE
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Interop service requests are viewable by everyone"
  ON interop_service_requests FOR SELECT
  USING (true);

CREATE POLICY "Interop service requests can be managed by authenticated users"
  ON interop_service_requests FOR INSERT, UPDATE, DELETE
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Interop resources are viewable by everyone"
  ON interop_resources FOR SELECT
  USING (true);

CREATE POLICY "Interop resources can be managed by authenticated users"
  ON interop_resources FOR INSERT, UPDATE, DELETE
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- External systems: configuration, read by everyone, write via service role only (no INSERT/UPDATE policy)
CREATE POLICY "External systems are viewable by everyone"
  ON external_systems FOR SELECT
  USING (true);

CREATE POLICY "External entity mappings are viewable by everyone"
  ON external_entity_mappings FOR SELECT
  USING (true);

-- Topics: Anyone can read, authenticated users can create
ALTER TABLE topics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Topics are viewable by everyone"
  ON topics FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create topics"
  ON topics FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Topic creators can update their topics"
  ON topics FOR UPDATE
  USING (auth.uid() = created_by);

-- Posts: Anyone can read, authenticated users can create
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Posts are viewable by everyone"
  ON posts FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create posts"
  ON posts FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Post authors can update their posts"
  ON posts FOR UPDATE
  USING (auth.uid() = author_id);

CREATE POLICY "Post authors can delete their posts"
  ON posts FOR DELETE
  USING (auth.uid() = author_id);

-- Post Votes: Users can manage their own votes
ALTER TABLE post_votes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view all votes"
  ON post_votes FOR SELECT
  USING (true);

CREATE POLICY "Users can create their own votes"
  ON post_votes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own votes"
  ON post_votes FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own votes"
  ON post_votes FOR DELETE
  USING (auth.uid() = user_id);

-- Tags: Everyone can read, admins can manage (simplified for now)
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tags are viewable by everyone"
  ON tags FOR SELECT
  USING (true);

-- Topic Followers: Users manage their own follows
ALTER TABLE topic_followers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view all followers"
  ON topic_followers FOR SELECT
  USING (true);

CREATE POLICY "Users can follow topics"
  ON topic_followers FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can unfollow topics"
  ON topic_followers FOR DELETE
  USING (auth.uid() = user_id);

-- Reputation Events: Read-only for users
ALTER TABLE reputation_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view reputation events"
  ON reputation_events FOR SELECT
  USING (true);

-- Achievements: Read-only
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Achievements are viewable by everyone"
  ON achievements FOR SELECT
  USING (true);

-- User Achievements: Users can view all
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "User achievements are viewable by everyone"
  ON user_achievements FOR SELECT
  USING (true);

-- ============================================
-- FUNCTIONS AND TRIGGERS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_topics_updated_at BEFORE UPDATE ON topics
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_posts_updated_at BEFORE UPDATE ON posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_interop_locations_updated_at BEFORE UPDATE ON interop_locations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_interop_parties_updated_at BEFORE UPDATE ON interop_parties
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_interop_events_updated_at BEFORE UPDATE ON interop_events
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_interop_service_requests_updated_at BEFORE UPDATE ON interop_service_requests
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_interop_resources_updated_at BEFORE UPDATE ON interop_resources
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to update topic reply count and last activity
CREATE OR REPLACE FUNCTION update_topic_stats()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE topics 
    SET reply_count = reply_count + 1,
        last_activity_at = NOW()
    WHERE id = NEW.topic_id;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE topics 
    SET reply_count = GREATEST(0, reply_count - 1)
    WHERE id = OLD.topic_id;
  END IF;
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_topic_stats_trigger
  AFTER INSERT OR DELETE ON posts
  FOR EACH ROW EXECUTE FUNCTION update_topic_stats();

-- Function to update post vote counts
CREATE OR REPLACE FUNCTION update_post_votes()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    IF NEW.vote_type = 'upvote' THEN
      UPDATE posts SET upvotes = upvotes + 1 WHERE id = NEW.post_id;
    ELSE
      UPDATE posts SET downvotes = downvotes + 1 WHERE id = NEW.post_id;
    END IF;
  ELSIF TG_OP = 'UPDATE' THEN
    IF OLD.vote_type = 'upvote' AND NEW.vote_type = 'downvote' THEN
      UPDATE posts SET upvotes = upvotes - 1, downvotes = downvotes + 1 WHERE id = NEW.post_id;
    ELSIF OLD.vote_type = 'downvote' AND NEW.vote_type = 'upvote' THEN
      UPDATE posts SET upvotes = upvotes + 1, downvotes = downvotes - 1 WHERE id = NEW.post_id;
    END IF;
  ELSIF TG_OP = 'DELETE' THEN
    IF OLD.vote_type = 'upvote' THEN
      UPDATE posts SET upvotes = GREATEST(0, upvotes - 1) WHERE id = OLD.post_id;
    ELSE
      UPDATE posts SET downvotes = GREATEST(0, downvotes - 1) WHERE id = OLD.post_id;
    END IF;
  END IF;
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_post_votes_trigger
  AFTER INSERT OR UPDATE OR DELETE ON post_votes
  FOR EACH ROW EXECUTE FUNCTION update_post_votes();

-- Function to award reputation points
CREATE OR REPLACE FUNCTION award_reputation(
  p_user_id UUID,
  p_event_type TEXT,
  p_points INT,
  p_reference_type TEXT DEFAULT NULL,
  p_reference_id UUID DEFAULT NULL
)
RETURNS void AS $$
BEGIN
  -- Insert reputation event
  INSERT INTO reputation_events (user_id, event_type, points, reference_type, reference_id)
  VALUES (p_user_id, p_event_type, p_points, p_reference_type, p_reference_id);
  
  -- Update user's total reputation
  UPDATE profiles
  SET reputation_points = reputation_points + p_points
  WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- SEED DATA: 21 Business Processes
-- Organized by timeframe and category
-- ============================================

INSERT INTO business_processes (name, slug, description, icon, category, timeframe, sort_order) VALUES
-- EMERGENCY / REAL-TIME RESPONSES (1-5)
('Emergency Response', 'emergency-response', 'Immediate crisis intervention and safety services', '🚨', 'emergency', 'real-time', 1),
('Street Outreach', 'street-outreach', 'Mobile teams connecting with unsheltered individuals', '🚶', 'emergency', 'daily', 2),
('Emergency Shelter Operations', 'emergency-shelter', 'Managing immediate temporary shelter facilities', '🏠', 'emergency', 'daily', 3),
('Crisis Hotlines & Navigation', 'crisis-navigation', '211 services and crisis support coordination', '📞', 'emergency', 'real-time', 4),
('Emergency Medical Services', 'emergency-medical', 'Healthcare for immediate medical crises', '🏥', 'emergency', 'real-time', 5),

-- OPERATIONAL / DAILY-MONTHLY (6-13)
('Case Management', 'case-management', 'Individual support and service coordination', '📋', 'operational', 'weekly', 6),
('Housing Navigation', 'housing-navigation', 'Connecting individuals to available housing', '🗺️', 'operational', 'weekly', 7),
('Coordinated Entry', 'coordinated-entry', 'Assessment and prioritization for housing resources', '📊', 'operational', 'weekly', 8),
('Benefits Enrollment', 'benefits-enrollment', 'SSI, SNAP, Medicaid, and other public benefits', '💳', 'operational', 'monthly', 9),
('Employment Services', 'employment-services', 'Job training, placement, and support', '💼', 'operational', 'monthly', 10),
('Mental Health Services', 'mental-health', 'Ongoing behavioral health treatment and support', '🧠', 'operational', 'weekly', 11),
('Substance Use Treatment', 'substance-use', 'Addiction recovery and harm reduction programs', '💊', 'operational', 'weekly', 12),
('Legal Services', 'legal-services', 'Expungement, eviction defense, SSI appeals', '⚖️', 'operational', 'monthly', 13),

-- LOGISTICS & OPERATIONS (14-17)
('Supply Chain & Distribution', 'supply-chain', 'Food, clothing, hygiene supplies, equipment', '📦', 'operational', 'daily', 14),
('Transportation Services', 'transportation', 'Bus passes, ride programs, vehicle access', '🚌', 'operational', 'daily', 15),
('Warehousing & Inventory', 'warehousing', 'Storage and management of donated goods', '🏭', 'operational', 'daily', 16),
('Volunteer & Staff Management', 'staffing', 'Recruiting, training, and coordination', '👥', 'operational', 'weekly', 17),

-- STRATEGIC / LONG-TERM (18-21)
('Affordable Housing Development', 'housing-development', 'Building and financing permanent housing', '🏗️', 'strategic', 'multi-year', 18),
('Fund Development & Management', 'fund-management', 'Grants, donations, budgeting, and financial oversight', '💰', 'strategic', 'annual', 19),
('Policy & Advocacy', 'policy-advocacy', 'Zoning, rent control, NIMBY opposition, legislation', '📜', 'strategic', 'multi-year', 20),
('Data Systems & Technology', 'data-systems', 'HMIS, digital identity, fintech, SSI automation', '💻', 'systemic', 'annual', 21);

-- Insert some sub-processes for certain categories
INSERT INTO business_processes (name, slug, description, icon, category, timeframe, parent_id, sort_order) VALUES
('HMIS Data Management', 'hmis-data', 'Homeless Management Information System operations', '📊', 'systemic', 'daily', 
  (SELECT id FROM business_processes WHERE slug = 'data-systems'), 1),
('Digital Identity (SSI)', 'digital-identity', 'Self-sovereign identity for service access', '🪪', 'systemic', 'annual',
  (SELECT id FROM business_processes WHERE slug = 'data-systems'), 2),
('Fintech & Cash Transfer', 'fintech-cash', 'Direct cash assistance and payment systems', '💸', 'systemic', 'monthly',
  (SELECT id FROM business_processes WHERE slug = 'data-systems'), 3),
('Zoning & Land Use', 'zoning', 'Multi-year planning and approval processes', '🗺️', 'strategic', 'multi-year',
  (SELECT id FROM business_processes WHERE slug = 'policy-advocacy'), 1);

-- ============================================
-- SEED DATA: Sample Tags
-- ============================================

INSERT INTO tags (name, slug, description, color) VALUES
('best-practices', 'best-practices', 'Proven approaches and methodologies', '#10b981'),
('funding-opportunities', 'funding-opportunities', 'Grant announcements and financing', '#3b82f6'),
('case-study', 'case-study', 'Real-world examples and lessons learned', '#8b5cf6'),
('innovation', 'innovation', 'New technologies and creative solutions', '#f59e0b'),
('collaboration', 'collaboration', 'Multi-agency coordination', '#ec4899'),
('regulation', 'regulation', 'Compliance and legal requirements', '#ef4444'),
('technology', 'technology', 'Software, hardware, and digital tools', '#06b6d4'),
('urgent', 'urgent', 'Time-sensitive discussions', '#dc2626');

-- ============================================
-- SEED DATA: Sample Achievements
-- ============================================

INSERT INTO achievements (name, description, icon, points_required) VALUES
('First Post', 'Created your first discussion post', '✍️', 0),
('Contributor', 'Earned 100 reputation points', '⭐', 100),
('Helpful', 'Received 10 upvotes on your posts', '👍', 0),
('Problem Solver', 'Had 5 posts marked as solutions', '✅', 0),
('Active Participant', 'Posted in 10 different topics', '💬', 0),
('Community Leader', 'Earned 500 reputation points', '🏆', 500),
('Expert', 'Earned 1000 reputation points', '🎓', 1000),
('Mentor', 'Helped 20 community members', '🤝', 0);

-- ============================================
-- VIEWS FOR COMMON QUERIES
-- ============================================

-- View: Topic with author and stats
CREATE VIEW topic_details AS
SELECT 
  t.*,
  p.display_name as author_name,
  p.avatar_url as author_avatar,
  p.reputation_points as author_reputation,
  bp.name as business_process_name,
  bp.icon as business_process_icon,
  bp.slug as business_process_slug
FROM topics t
LEFT JOIN profiles p ON t.created_by = p.id
LEFT JOIN business_processes bp ON t.business_process_id = bp.id;

-- View: Posts with author details
CREATE VIEW post_details AS
SELECT 
  po.*,
  pr.display_name as author_name,
  pr.avatar_url as author_avatar,
  pr.reputation_points as author_reputation
FROM posts po
LEFT JOIN profiles pr ON po.author_id = pr.id;

-- View: Leaderboard
CREATE VIEW leaderboard AS
SELECT 
  id,
  username,
  display_name,
  avatar_url,
  reputation_points,
  (SELECT COUNT(*) FROM posts WHERE author_id = profiles.id) as post_count,
  (SELECT COUNT(*) FROM topics WHERE created_by = profiles.id) as topic_count
FROM profiles
ORDER BY reputation_points DESC;

-- ============================================
-- SAMPLE REPUTATION POINT VALUES
-- ============================================

-- Create topic: +10 points
-- Create post: +5 points
-- Receive upvote: +10 points
-- Receive downvote: -2 points
-- Post marked as solution: +15 points (author) + +2 points (person who marked it)
-- Daily login streak: +1 point per day
