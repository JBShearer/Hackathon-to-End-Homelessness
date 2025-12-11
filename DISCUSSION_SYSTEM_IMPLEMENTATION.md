# Discussion System Implementation Guide

**Created:** December 9, 2025  
**Status:** ✅ Ready for Supabase Activation

---

## 📋 Overview

A comprehensive discussion system has been implemented featuring:
- **21 Core Business Processes** for homelessness response
- **Hierarchical categorization** (Emergency → Operational → Strategic → Systemic)
- **Timeframe organization** (Real-time to Multi-year planning)
- **Reputation & gamification system**
- **Filtering and search capabilities**

---

## 🗂️ What Was Created

### 1. Database Schema (`DISCUSSION_SYSTEM_SCHEMA.sql`)

**Tables Created:**
- `profiles` - User profiles with reputation points
- `business_processes` - 21 core processes with hierarchy support
- `topics` - Discussion topics within processes
- `posts` - Discussion posts with threading support
- `post_votes` - Upvote/downvote system
- `topic_followers` - Follow topics for notifications
- `tags` - Cross-cutting topic tags
- `topic_tags` - Many-to-many tag relationships
- `reputation_events` - Audit log for reputation points
- `achievements` - Badges and milestones
- `user_achievements` - Earned badges

**Key Features:**
- ✅ Row Level Security (RLS) policies on all tables
- ✅ Automatic triggers for stats updates
- ✅ Reputation point function `award_reputation()`
- ✅ Views for common queries (leaderboard, topic_details)
- ✅ Indexes for performance optimization

### 2. UI Components

**Created Files:**
- `src/components/discussion/BusinessProcessCard.jsx` - Display business process cards
- `src/components/discussion/BusinessProcessCard.css` - Card styling
- `src/pages/Community.jsx` - Main discussion hub (updated)
- `src/pages/Community.css` - Community page styling
- `src/pages/Events.jsx` - Updated (removed specific events)

---

## 🏗️ The 21 Business Processes

### Emergency Response (Real-time)
1. **Emergency Response** 🚨 - Immediate crisis intervention
2. **Street Outreach** 🚶 - Mobile teams connecting with individuals
3. **Emergency Shelter Operations** 🏠 - Temporary shelter facilities
4. **Crisis Hotlines & Navigation** 📞 - 211 services coordination
5. **Emergency Medical Services** 🏥 - Immediate healthcare

### Daily Operations (Day-to-Month)
6. **Case Management** 📋 - Individual support coordination
7. **Housing Navigation** 🗺️ - Connecting to available housing
8. **Coordinated Entry** 📊 - Assessment and prioritization
9. **Benefits Enrollment** 💳 - SSI, SNAP, Medicaid
10. **Employment Services** 💼 - Job training and placement
11. **Mental Health Services** 🧠 - Behavioral health treatment
12. **Substance Use Treatment** 💊 - Addiction recovery
13. **Legal Services** ⚖️ - Expungement, eviction defense

### Logistics & Operations
14. **Supply Chain & Distribution** 📦 - Food, clothing, supplies
15. **Transportation Services** 🚌 - Bus passes, ride programs
16. **Warehousing & Inventory** 🏭 - Storage management
17. **Volunteer & Staff Management** 👥 - Recruiting, coordination

### Strategic Planning (1-8 years)
18. **Affordable Housing Development** 🏗️ - Building permanent housing
19. **Fund Development & Management** 💰 - Grants, donations, budgets
20. **Policy & Advocacy** 📜 - Zoning, rent control, legislation
21. **Data Systems & Technology** 💻 - HMIS, digital identity, fintech

### Sub-Processes (Examples)
- HMIS Data Management
- Digital Identity (SSI)
- Fintech & Cash Transfer
- Zoning & Land Use

---

## 🎮 Reputation System

### Point Values
- **Create topic:** +10 points
- **Create post:** +5 points
- **Receive upvote:** +10 points
- **Receive downvote:** -2 points
- **Solution marked:** +15 points (author) + +2 points (marker)
- **Daily login streak:** +1 point per day

### Achievements
- ✍️ **First Post** - Created your first discussion post
- ⭐ **Contributor** - Earned 100 reputation points
- 👍 **Helpful** - Received 10 upvotes
- ✅ **Problem Solver** - Had 5 posts marked as solutions
- 💬 **Active Participant** - Posted in 10 different topics
- 🏆 **Community Leader** - Earned 500 reputation points
- 🎓 **Expert** - Earned 1000 reputation points
- 🤝 **Mentor** - Helped 20 community members

---

## 🚀 Installation Steps

### Step 1: Set Up Supabase (if not done)

1. Create Supabase project at https://supabase.com
2. Get credentials from Project Settings → API:
   - Project URL
   - Publishable key (anon)

### Step 2: Run Database Schema

1. Open Supabase dashboard
2. Go to **SQL Editor**
3. Click **New Query**
4. Copy entire `DISCUSSION_SYSTEM_SCHEMA.sql` file
5. Paste and click **Run**
6. Wait for success confirmation (~30 seconds)

### Step 3: Add GitHub Secrets

1. Go to: https://github.com/YOUR-REPO/settings/secrets/actions
2. Add `VITE_SUPABASE_URL`
3. Add `VITE_SUPABASE_ANON_KEY`
4. Trigger new deployment

### Step 4: Verify Installation

1. Visit your site's `/community` page
2. Should see all 21 business processes
3. Filter by category to test functionality
4. Search to test search functionality

---

## 💻 Code Usage Examples

### Fetching Business Processes

```javascript
import { supabase } from '../services/supabase'

// Get all top-level processes
const { data: processes } = await supabase
  .from('business_processes')
  .select('*')
  .is('parent_id', null)
  .order('sort_order')

// Get processes by category
const { data: emergency } = await supabase
  .from('business_processes')
  .select('*')
  .eq('category', 'emergency')
  .order('sort_order')
```

### Creating a Discussion Topic

```javascript
const { data, error } = await supabase
  .from('topics')
  .insert({
    business_process_id: processId,
    title: 'How to improve coordinated entry',
    slug: 'improve-coordinated-entry',
    description: 'Discuss ways to streamline the process...',
    created_by: user.id
  })
  .select()
  .single()
```

### Creating a Post

```javascript
const { data, error } = await supabase
  .from('posts')
  .insert({
    topic_id: topicId,
    author_id: user.id,
    content: 'Here are my thoughts...',
    parent_post_id: null // or parent ID for replies
  })
  .select()
  .single()

// Award reputation points
await supabase.rpc('award_reputation', {
  p_user_id: user.id,
  p_event_type: 'post_created',
  p_points: 5,
  p_reference_type: 'post',
  p_reference_id: data.id
})
```

### Voting on Posts

```javascript
// Upvote a post
const { error } = await supabase
  .from('post_votes')
  .upsert({
    post_id: postId,
    user_id: user.id,
    vote_type: 'upvote'
  })

// The trigger automatically:
// - Updates post.upvotes count
// - Awards reputation to post author
```

### Fetching Leaderboard

```javascript
const { data: leaders } = await supabase
  .from('leaderboard')
  .select('*')
  .limit(10)

// Returns users with:
// - reputation_points
// - post_count
// - topic_count
```

---

## 🎨 UI Components

### BusinessProcessCard

**Props:**
- `process` - Business process object with fields:
  - `name` - Display name
  - `slug` - URL-friendly identifier
  - `description` - Brief description
  - `icon` - Emoji icon
  - `category` - emergency/operational/strategic/systemic
  - `timeframe` - real-time/daily/weekly/monthly/annual/multi-year
- `topicCount` - Number of discussions (default: 0)

**Features:**
- Color-coded by category
- Timeframe badge
- Discussion count
- Hover effects
- Responsive design

### Community Page

**Features:**
- Search across all processes
- Category filter (5 categories)
- Grid layout (responsive)
- Info section explaining framework
- Gamification teaser
- Loading states
- Empty states
- Mock data for preview mode

**Filter Options:**
- All Categories (📚)
- Emergency Response (🚨)
- Daily Operations (⚙️)
- Strategic Planning (🎯)
- Systems & Tech (💻)

---

## 🔐 Security

### Row Level Security Policies

All tables have RLS enabled with appropriate policies:

**Public Read:**
- `business_processes` - Anyone can view
- `topics` - Anyone can view
- `posts` - Anyone can view
- `tags` - Anyone can view
- `achievements` - Anyone can view

**Authenticated Write:**
- `topics` - Auth users can create, authors can update
- `posts` - Auth users can create, authors can update/delete
- `post_votes` - Users manage their own votes
- `topic_followers` - Users manage their own follows

**User-Scoped:**
- `profiles` - Users can only update their own
- `reputation_events` - Read-only (managed by functions)

---

## 📊 Database Views

### topic_details
Combines topics with author info and business process details:
```sql
SELECT * FROM topic_details
WHERE business_process_slug = 'emergency-response'
ORDER BY last_activity_at DESC
```

### post_details
Posts with author information:
```sql
SELECT * FROM post_details
WHERE topic_id = 'xxx'
ORDER BY created_at ASC
```

### leaderboard
Top contributors by reputation:
```sql
SELECT * FROM leaderboard
LIMIT 50
```

---

## 🔄 Next Steps for Full Implementation

### Phase 1: Individual Topic Pages
1. Create `src/pages/TopicList.jsx` - List topics in a process
2. Create `src/pages/TopicDetail.jsx` - View full discussion
3. Add routing in `App.jsx`

### Phase 2: Post Creation & Display
1. Create `src/components/discussion/CreateTopic.jsx`
2. Create `src/components/discussion/CreatePost.jsx`
3. Create `src/components/discussion/PostThread.jsx`
4. Add markdown support for formatting

### Phase 3: Voting & Reputation
1. Implement upvote/downvote buttons
2. Show reputation scores on posts
3. Display user achievements
4. Add reputation leaderboard

### Phase 4: Real-time Features
1. Enable Supabase Realtime subscriptions
2. Live updates for new posts
3. Notifications for followed topics
4. Online user indicators

### Phase 5: Advanced Features
1. Post editing with history
2. Moderation tools (flag/report)
3. Tag management
4. Search across all discussions
5. Email notifications
6. Mobile app considerations

---

## 📱 Responsive Design

The UI is fully responsive with breakpoints:

**Mobile (< 768px):**
- Single column grid
- Icon-only category filters
- Simplified layouts

**Tablet (769-1024px):**
- 2-column grid
- Full navigation

**Desktop (> 1024px):**
- 3-column grid
- Enhanced interactions

**Large Desktop (> 1400px):**
- 3-column optimized grid
- Maximum width constraints

---

## 🐛 Troubleshooting

### "No business processes found"
**Cause:** Schema not run or data not seeded
**Fix:** Re-run `DISCUSSION_SYSTEM_SCHEMA.sql` in Supabase

### "Permission denied for table"
**Cause:** RLS policies not applied
**Fix:** Check policies are enabled on all tables

### Components not updating
**Cause:** Supabase client not configured
**Fix:** Add GitHub secrets and redeploy

### Category filter not working
**Cause:** Category values don't match database
**Fix:** Ensure categories are: emergency, operational, strategic, systemic

---

## 📚 Resources

### Supabase Documentation
- **Realtime:** https://supabase.com/docs/guides/realtime
- **RLS:** https://supabase.com/docs/guides/auth/row-level-security
- **Functions:** https://supabase.com/docs/guides/database/functions

### React Best Practices
- **Hooks:** https://react.dev/reference/react
- **Performance:** https://react.dev/learn/render-and-commit

### Design References
- **Discourse:** https://www.discourse.org/
- **Stack Overflow:** https://stackoverflow.com/
- **Reddit:** https://www.reddit.com/

---

## ✅ Testing Checklist

- [ ] Run schema in Supabase
- [ ] Verify all 21 processes are seeded
- [ ] Test category filtering
- [ ] Test search functionality
- [ ] Create test user and profile
- [ ] Create test topic
- [ ] Create test post
- [ ] Test voting system
- [ ] Verify reputation points awarded
- [ ] Check leaderboard view
- [ ] Test responsive design
- [ ] Verify RLS policies work

---

## 🎉 Summary

You now have:
- ✅ Complete database schema with 21 business processes
- ✅ Reputation and gamification system
- ✅ Beautiful, responsive UI
- ✅ Category filtering and search
- ✅ Ready for Supabase activation
- ✅ Extensible architecture for future features

The discussion system is ready to scale from real-time emergency response to 8-year strategic planning initiatives!

---

**Need Help?** Review other documentation:
- `SUPABASE_STATUS.md` - Supabase setup status
- `GITHUB_SECRETS_GUIDE.md` - How to add secrets
- `INTEGRATION_REVIEW.md` - Code review

**Ready to Deploy?**
1. Run the SQL schema
2. Add GitHub secrets
3. Push code
4. Start discussing! 🚀
