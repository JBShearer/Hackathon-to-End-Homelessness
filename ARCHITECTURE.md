# Technical Architecture & File Structure

## System Architecture Overview

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENT LAYER                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Browser    │  │   Mobile     │  │   Trailer    │      │
│  │   Desktop    │  │   Devices    │  │   Display    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   STATIC HOSTING                             │
│               GitHub Pages (CDN)                             │
│    ┌──────────────────────────────────────────┐             │
│    │  React/Vite Static Build                 │             │
│    │  - HTML/CSS/JS Bundle                    │             │
│    │  - Optimized Assets                      │             │
│    │  - Service Worker (PWA)                  │             │
│    └──────────────────────────────────────────┘             │
└─────────────────────────────────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                 BACKEND as a SERVICE                         │
│                    Supabase                                  │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐            │
│  │ PostgreSQL │  │  Auth      │  │  Storage   │            │
│  │  Database  │  │  Service   │  │  (Media)   │            │
│  └────────────┘  └────────────┘  └────────────┘            │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐            │
│  │ Realtime   │  │  Functions │  │    API     │            │
│  │ (WebSocket)│  │  (Edge)    │  │  (REST)    │            │
│  └────────────┘  └────────────┘  └────────────┘            │
└─────────────────────────────────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────┐
│              EXTERNAL INTEGRATIONS                           │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐            │
│  │    SAP     │  │   GitHub   │  │   Email    │            │
│  │  Systems   │  │    OAuth   │  │  Service   │            │
│  └────────────┘  └────────────┘  └────────────┘            │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐            │
│  │ Loot Locker│  │   AI/ML    │  │   Maps     │            │
│  │   Devices  │  │  Services  │  │    API     │            │
│  └────────────┘  └────────────┘  └────────────┘            │
└─────────────────────────────────────────────────────────────┘
```

---

## File Structure

```
hackathon-to-end-homelessness/
│
├── .github/
│   ├── workflows/
│   │   ├── deploy.yml              # GitHub Actions for deployment
│   │   └── test.yml                # CI/CD testing
│   └── ISSUE_TEMPLATE/
│       ├── bug_report.md
│       ├── feature_request.md
│       └── student_project.md
│
├── docs/
│   ├── PROJECT_CHARTER.md          # ✅ Created
│   ├── ARCHITECTURE.md             # This file
│   ├── DEVELOPMENT_QUESTIONS.md    # Next to create
│   ├── CONTRIBUTING.md
│   ├── CODE_OF_CONDUCT.md
│   └── api/
│       ├── supabase-schema.md
│       └── api-reference.md
│
├── public/
│   ├── index.html                  # Entry point
│   ├── favicon.ico
│   ├── robots.txt
│   ├── manifest.json               # PWA manifest
│   ├── CNAME                       # hackathontoendhomelessness.org
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.svg
│   │   │   ├── loot-locker-demo.jpg
│   │   │   ├── hero-background.jpg
│   │   │   └── avatars/
│   │   ├── videos/
│   │   │   └── intro-video.mp4
│   │   └── downloads/
│   │       └── student-guide.pdf
│   └── _headers                    # Security headers for GitHub Pages
│
├── src/
│   ├── main.jsx                    # Application entry
│   ├── App.jsx                     # Root component
│   ├── index.css                   # Global styles
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navigation.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   │
│   │   ├── auth/
│   │   │   ├── LoginForm.jsx
│   │   │   ├── SignupForm.jsx
│   │   │   ├── ProfileCard.jsx
│   │   │   └── AuthProvider.jsx
│   │   │
│   │   ├── community/
│   │   │   ├── BoardList.jsx
│   │   │   ├── BoardCard.jsx
│   │   │   ├── PostFeed.jsx
│   │   │   ├── PostCard.jsx
│   │   │   ├── CommentThread.jsx
│   │   │   └── ActivityFeed.jsx
│   │   │
│   │   ├── projects/
│   │   │   ├── ProjectList.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectDetail.jsx
│   │   │   ├── ProcessDocumentation.jsx
│   │   │   └── ArchitectureDiagram.jsx
│   │   │
│   │   ├── gamification/
│   │   │   ├── Leaderboard.jsx
│   │   │   ├── LeaderboardRow.jsx
│   │   │   ├── StatsCard.jsx
│   │   │   ├── AchievementBadge.jsx
│   │   │   ├── ProgressBar.jsx
│   │   │   └── RewardCard.jsx
│   │   │
│   │   ├── loot-locker/
│   │   │   ├── LootLockerOverview.jsx
│   │   │   ├── DropLootDemo.jsx
│   │   │   ├── GetLootDemo.jsx
│   │   │   ├── StudentChallenge.jsx
│   │   │   └── IntegrationMap.jsx
│   │   │
│   │   ├── learning/
│   │   │   ├── ResourceLibrary.jsx
│   │   │   ├── TutorialCard.jsx
│   │   │   ├── ToolGrid.jsx
│   │   │   └── VideoPlayer.jsx
│   │   │
│   │   └── events/
│   │       ├── EventList.jsx
│   │       ├── EventCard.jsx
│   │       ├── EventDetail.jsx
│   │       ├── RegistrationForm.jsx
│   │       └── EventCalendar.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx                # Landing page
│   │   ├── About.jsx
│   │   ├── LootLocker.jsx          # Loot Locker showcase
│   │   ├── ProjectGamer.jsx
│   │   ├── Community.jsx           # Community boards
│   │   ├── Projects.jsx            # Project listing
│   │   ├── Leaderboard.jsx         # Gamification dashboard
│   │   ├── Learning.jsx            # Learning resources
│   │   ├── Events.jsx              # Event listing
│   │   ├── StudentGuide.jsx        # Getting started for students
│   │   ├── TeacherResources.jsx    # Resources for educators
│   │   ├── Profile.jsx             # User profile
│   │   └── NotFound.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useSupabase.js
│   │   ├── usePosts.js
│   │   ├── useProjects.js
│   │   ├── useLeaderboard.js
│   │   └── useRealtime.js
│   │
│   ├── services/
│   │   ├── supabase.js             # Supabase client config
│   │   ├── auth.service.js
│   │   ├── posts.service.js
│   │   ├── projects.service.js
│   │   ├── gamification.service.js
│   │   └── storage.service.js
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   ├── validators.js
│   │   └── formatters.js
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── NotificationContext.jsx
│   │
│   └── styles/
│       ├── variables.css           # CSS custom properties
│       ├── reset.css
│       ├── typography.css
│       └── animations.css
│
├── supabase/
│   ├── migrations/
│   │   ├── 001_initial_schema.sql
│   │   ├── 002_auth_setup.sql
│   │   ├── 003_community_boards.sql
│   │   ├── 004_gamification.sql
│   │   └── 005_loot_locker.sql
│   │
│   ├── functions/
│   │   ├── update-leaderboard/
│   │   │   └── index.ts
│   │   ├── send-notification/
│   │   │   └── index.ts
│   │   └── calculate-points/
│   │       └── index.ts
│   │
│   └── seed/
│       ├── sample-projects.sql
│       ├── sample-users.sql
│       └── sample-posts.sql
│
├── scripts/
│   ├── setup.sh                    # Initial project setup
│   ├── deploy.sh                   # Deployment script
│   └── generate-sitemap.js         # SEO sitemap generation
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env.example                    # Environment variables template
├── .gitignore
├── package.json
├── vite.config.js                  # Vite configuration
├── README.md
└── LICENSE
```

---

## Database Schema (Supabase)

### Core Tables

#### **users** (extends Supabase auth.users)
```sql
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  username TEXT UNIQUE,
  display_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'student', -- student, volunteer, teacher, admin, ngo
  school TEXT,
  grade_level INT,
  skills TEXT[],
  bio TEXT,
  location TEXT,
  points INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### **boards** (Community discussion boards)
```sql
CREATE TABLE public.boards (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  category TEXT, -- processes, projects, places
  parent_board_id UUID REFERENCES boards(id),
  icon TEXT,
  color TEXT,
  order_index INT DEFAULT 0,
  subscriber_count INT DEFAULT 0,
  post_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### **posts**
```sql
CREATE TABLE public.posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  board_id UUID REFERENCES boards(id) ON DELETE CASCADE,
  author_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  content_type TEXT DEFAULT 'markdown', -- markdown, html
  tags TEXT[],
  pinned BOOLEAN DEFAULT FALSE,
  locked BOOLEAN DEFAULT FALSE,
  view_count INT DEFAULT 0,
  upvote_count INT DEFAULT 0,
  comment_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### **comments**
```sql
CREATE TABLE public.comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  parent_comment_id UUID REFERENCES comments(id) ON DELETE CASCADE,
  author_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  upvote_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### **projects**
```sql
CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  category TEXT, -- loot-locker, project-gamer, solution, initiative
  status TEXT DEFAULT 'planning', -- planning, active, completed, archived
  location TEXT,
  lead_id UUID REFERENCES profiles(id),
  team_members UUID[],
  goals JSONB,
  milestones JSONB,
  resources JSONB,
  github_repo TEXT,
  demo_url TEXT,
  documentation_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### **activities** (For gamification tracking)
```sql
CREATE TABLE public.activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  activity_type TEXT NOT NULL, -- post, comment, commit, event, delivery, donation
  points INT DEFAULT 0,
  metadata JSONB,
  project_id UUID REFERENCES projects(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### **achievements**
```sql
CREATE TABLE public.achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  criteria JSONB, -- Requirements to unlock
  points INT DEFAULT 0,
  rarity TEXT DEFAULT 'common', -- common, rare, epic, legendary
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### **user_achievements** (Junction table)
```sql
CREATE TABLE public.user_achievements (
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  achievement_id UUID REFERENCES achievements(id) ON DELETE CASCADE,
  unlocked_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id, achievement_id)
);
```

#### **events**
```sql
CREATE TABLE public.events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  event_type TEXT, -- workshop, hackathon, showcase, training
  location TEXT,
  virtual_url TEXT,
  start_date TIMESTAMPTZ NOT NULL,
  end_date TIMESTAMPTZ,
  capacity INT,
  registered_count INT DEFAULT 0,
  host_organization TEXT,
  host_id UUID REFERENCES profiles(id),
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### **event_registrations**
```sql
CREATE TABLE public.event_registrations (
  event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'registered', -- registered, attended, cancelled
  team_name TEXT,
  registered_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (event_id, user_id)
);
```

#### **resources** (Learning materials)
```sql
CREATE TABLE public.resources (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  resource_type TEXT, -- tutorial, video, tool, documentation, template
  category TEXT, -- ai-ml, photogrammetry, logistics, cloud, etc.
  url TEXT,
  thumbnail_url TEXT,
  difficulty TEXT DEFAULT 'beginner', -- beginner, intermediate, advanced
  tags TEXT[],
  author_id UUID REFERENCES profiles(id),
  view_count INT DEFAULT 0,
  upvote_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### **subscriptions** (Board/topic subscriptions)
```sql
CREATE TABLE public.subscriptions (
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  board_id UUID REFERENCES boards(id) ON DELETE CASCADE,
  notification_level TEXT DEFAULT 'all', -- all, mentions, none
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id, board_id)
);
```

---

## API Endpoints

### Authentication
- `POST /auth/signup` - Create new account
- `POST /auth/login` - Login
- `POST /auth/logout` - Logout
- `GET /auth/user` - Get current user
- `PUT /auth/user` - Update profile

### Community Boards
- `GET /boards` - List all boards
- `GET /boards/:slug` - Get board details
- `GET /boards/:slug/posts` - Get posts in board
- `POST /boards/:slug/posts` - Create new post
- `POST /boards/:slug/subscribe` - Subscribe to board

### Posts & Comments
- `GET /posts/:id` - Get post details
- `PUT /posts/:id` - Update post
- `DELETE /posts/:id` - Delete post
- `POST /posts/:id/upvote` - Upvote post
- `GET /posts/:id/comments` - Get comments
- `POST /posts/:id/comments` - Add comment

### Projects
- `GET /projects` - List projects
- `GET /projects/:slug` - Get project details
- `POST /projects` - Create project
- `PUT /projects/:slug` - Update project
- `POST /projects/:slug/join` - Join project

### Gamification
- `GET /leaderboard` - Get leaderboard
- `GET /leaderboard/:scope` - Get scoped leaderboard (global, local, project)
- `GET /user/:id/stats` - Get user statistics
- `GET /user/:id/achievements` - Get user achievements
- `POST /activities` - Log activity

### Events
- `GET /events` - List upcoming events
- `GET /events/:id` - Get event details
- `POST /events/:id/register` - Register for event
- `DELETE /events/:id/register` - Cancel registration

### Resources
- `GET /resources` - List learning resources
- `GET /resources/:id` - Get resource details
- `POST /resources` - Submit resource

---

## Component Architecture

### Design System

#### Color Palette
```css
:root {
  /* Primary - Tech Blue */
  --primary-50: #eff6ff;
  --primary-500: #3b82f6;
  --primary-700: #1d4ed8;
  --primary-900: #1e3a8a;
  
  /* Secondary - Community Green */
  --secondary-500: #10b981;
  --secondary-700: #047857;
  
  /* Accent - Hope Orange */
  --accent-500: #f59e0b;
  --accent-700: #d97706;
  
  /* Neutrals */
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-500: #6b7280;
  --gray-900: #111827;
  
  /* Status Colors */
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
  --info: #3b82f6;
}
```

#### Typography
```css
:root {
  /* Headings - Bold, impactful */
  --font-heading: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  
  /* Body - Readable */
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  
  /* Code - Monospace */
  --font-code: 'Fira Code', 'Courier New', monospace;
  
  /* Sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
}
```

#### Spacing
```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
}
```

### Responsive Breakpoints
```css
/* Mobile First */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

---

## State Management

### Context Providers
- **AuthContext** - User authentication state
- **ThemeContext** - Dark/light mode
- **NotificationContext** - Toast notifications, alerts

### Local State (React Hooks)
- Component-specific UI state
- Form inputs
- Modal visibility

### Server State (React Query / Supabase)
- Cached API data
- Real-time subscriptions
- Optimistic updates

---

## Security Considerations

### Row-Level Security (RLS) Policies

#### Profiles
```sql
-- Users can read all profiles
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

-- Users can update their own profile
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);
```

#### Posts
```sql
-- Anyone can read posts
CREATE POLICY "Posts are viewable by everyone"
  ON posts FOR SELECT
  USING (true);

-- Authenticated users can create posts
CREATE POLICY "Authenticated users can create posts"
  ON posts FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Users can update their own posts
CREATE POLICY "Users can update own posts"
  ON posts FOR UPDATE
  USING (auth.uid() = author_id);
```

### Data Privacy
- **COPPA Compliance** - Parental consent for users under 13
- **GDPR Ready** - Data export and deletion capabilities
- **Minimal PII** - Only collect necessary information
- **Email Verification** - Required for account activation

### Content Moderation
- **Report System** - Flag inappropriate content
- **Admin Review** - Moderation queue
- **Auto-Flagging** - AI-based content filtering
- **Community Guidelines** - Clear rules and enforcement

---

## Performance Optimization

### Frontend
- **Code Splitting** - Route-based chunks
- **Lazy Loading** - Components and images
- **Image Optimization** - WebP format, responsive images
- **Service Worker** - Offline support, caching
- **Tree Shaking** - Remove unused code
- **Minification** - Compress assets

### Backend
- **Query Optimization** - Indexes on frequently queried fields
- **Caching** - Redis for leaderboards and feeds
- **CDN** - Static asset delivery
- **Connection Pooling** - Efficient database connections
- **Batch Operations** - Group database writes

### Monitoring
- **Web Vitals** - LCP, FID, CLS tracking
- **Error Tracking** - Sentry or similar
- **Analytics** - User behavior insights
- **Performance Budget** - Max bundle sizes

---

## Deployment Pipeline

### Development
```bash
npm run dev
# Runs Vite dev server at localhost:5173
# Hot module replacement enabled
```

### Build
```bash
npm run build
# Creates production-optimized bundle in dist/
# Minifies code, optimizes assets
```

### Preview
```bash
npm run preview
# Serves production build locally for testing
```

### Deploy
```bash
git push origin main
# GitHub Actions triggers deployment
# Builds and deploys to GitHub Pages
# Updates at hackathontoendhomelessness.org
```

### Environment Variables
```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxx...
VITE_SITE_URL=https://hackathontoendhomelessness.org
VITE_GA_ID=G-XXXXXXXXXX
```

---

## Integration Points

### Loot Locker Devices
- **WebSocket Connection** - Real-time device status
- **REST API** - Device commands and configuration
- **Event Stream** - Donation logs, item cataloging
- **Media Upload** - Photogrammetry images to Supabase Storage

### SAP Integration (Future)
- **OData Services** - ERP system connectivity
- **Warehouse Management** - Inventory tracking
- **Transportation Management** - Route optimization
- **Analytics Cloud** - Planning and reporting

### Third-Party Services
- **GitHub OAuth** - Authentication
- **SendGrid/Mailgun** - Email notifications
- **Twilio** - SMS alerts (optional)
- **Google Maps** - Location services
- **OpenAI/Anthropic** - AI assistance

---

## Accessibility

### WCAG 2.1 AA Compliance
- **Semantic HTML** - Proper heading hierarchy
- **ARIA Labels** - Screen reader support
- **Keyboard Navigation** - Full keyboard access
- **Color Contrast** - 4.5:1 minimum ratio
- **Focus Indicators** - Visible focus states
- **Alt Text** - All images described
- **Captions** - Video content accessible

### Internationalization (Future)
- **i18n Framework** - Multi-language support
- **RTL Support** - Right-to-left languages
- **Date/Time Formatting** - Locale-aware
- **Currency Formatting** - Regional formats

---

## Testing Strategy

### Unit Tests
- Component rendering
- Utility functions
- Service methods
- Hooks behavior

### Integration Tests
- API calls
- Database operations
- Authentication flows
- Form submissions

### E2E Tests
- User registration
- Creating posts
- Joining projects
- Event registration

### Performance Tests
- Lighthouse CI
- Bundle size limits
- Load testing
- Stress testing

---

**Document Version:** 1.0  
**Date:** December 7, 2025  
**Status:** ACTIVE
