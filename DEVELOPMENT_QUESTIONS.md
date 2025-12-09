# Development Questions & Decision Log

## Critical Questions for This Week (Pre-Launch)

### 1. Domain Configuration
**Status:** ⚠️ NEEDS DECISION

**Questions:**
- Have you configured DNS settings for hackathontoendhomelessness.org to point to GitHub Pages?
- Do you have access to the domain registrar control panel?
- Current DNS records needed:
  - A records pointing to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - CNAME record for www subdomain

**Action Required:**
- [ ] Configure DNS A records
- [ ] Add CNAME file to repository root
- [ ] Verify domain propagation (24-48 hours)

**Fallback:** Use GitHub Pages default URL initially: `username.github.io/hackathon-to-end-homelessness`

---

### 2. Supabase Setup
**Status:** ⚠️ NEEDS DECISION

**Questions:**
- Do you have a Supabase account created?
- Which tier to start with?
  - **Recommendation:** Free tier for launch, scale up after student event
- Organization name in Supabase?
- Database region? (Closest to Los Angeles: `us-west-1` or `us-west-2`)

**Action Required:**
- [ ] Create Supabase project
- [ ] Save project URL and anon key
- [ ] Configure authentication providers (GitHub, Google, Email)
- [ ] Run initial database migrations
- [ ] Set up row-level security policies

**Timeline:** Complete before Day 2 (employee kickoff) for live demo capability

---

### 3. Content & Messaging for Students
**Status:** ⚠️ NEEDS DECISION

**Questions:**
- What is the primary call-to-action for the 800 students?
  - Sign up for ongoing participation?
  - Form teams for challenges?
  - Submit project ideas?
  - All of the above?

- Prize/reward structure for students:
  - What are the actual rewards? (Be specific for motivational impact)
  - Top 10 leaderboard gets...?
  - Event completion rewards?

- Parental consent:
  - Do students need parental consent to sign up?
  - School district policies on student data?
  - Age restrictions (13+ for standard accounts due to COPPA)?

**Action Required:**
- [ ] Define specific CTAs for landing page
- [ ] List concrete rewards/incentives
- [ ] Create parental consent form (if needed)
- [ ] Review school district data policies

**Timeline:** Complete before Day 4 (student event)

---

### 4. Loot Locker Demo Logistics
**Status:** ⚠️ NEEDS DECISION

**Questions:**
- Will the physical Loot Locker prototype be at the Day 4 event?
- If yes, do we need live connectivity between website and devices?
- If not, should we create a video/simulation instead?

- Loot Locker student challenges:
  - Specific challenge descriptions written?
  - GitHub repositories set up for student teams?
  - Data sets prepared (sample donation images, metadata)?
  - Evaluation criteria defined?

**Student Challenge Ideas:**
1. **Optical Recognition Challenge** - Build image classifier for donation categories
2. **LLM Questionnaire Challenge** - Design conversation flow for intake
3. **Metadata Extraction Challenge** - Parse and structure donation data
4. **Cloud Integration Challenge** - Connect to logistics pipeline
5. **UI/UX Challenge** - Design donor/recipient interfaces

**Action Required:**
- [ ] Define 3-5 specific challenges
- [ ] Prepare sample datasets
- [ ] Create challenge documentation
- [ ] Set up team collaboration tools

**Timeline:** Complete before Day 4

---

### 5. GitHub Repository Configuration
**Status:** 🔨 IN PROGRESS

**Questions:**
- Repository visibility: Public or Private initially?
  - **Recommendation:** Public for open-source credibility, community engagement
- Branch protection rules?
- Contribution guidelines for students?
- Code review process for student PRs?

**Action Required:**
- [ ] Initialize Git repository
- [ ] Create initial commit with structure
- [ ] Set up GitHub Actions for deployment
- [ ] Create CONTRIBUTING.md with student-friendly instructions
- [ ] Set up issue templates for student projects
- [ ] Add README with getting started guide

**Timeline:** Complete today (Day 0)

---

### 6. Design & Branding
**Status:** ⚠️ NEEDS DECISION

**Questions:**
- Logo design: Do you have one, or should we create a simple text-based logo for launch?
- Color scheme: Confirmed?
  - Blue (tech/trust), Green (community/growth), Orange (hope/action)
- Hero image: Do you have photography/graphics, or use free stock images for launch?
- Trailer display: What resolution? Standard 1920x1080?

**Action Required:**
- [ ] Logo (even simple SVG is fine for launch)
- [ ] Hero/background images
- [ ] Icon for favicon
- [ ] Placeholder images for projects/profiles

**Resources:**
- Free stock photos: Unsplash, Pexels
- Free icons: Heroicons, Lucide, Font Awesome
- Logo creation: Canva (free), Figma (free tier)

**Timeline:** Basic branding by Day 1, polish over following week

---

### 7. Authentication Strategy
**Status:** ⚠️ NEEDS DECISION

**Questions:**
- Which login methods to enable initially?
  - **Recommended for students:** Google (school accounts), GitHub (developer identity)
  - **Also consider:** Email/password (backup), Microsoft (some schools)
  
- Guest access:
  - Can visitors browse without logging in?
  - **Recommendation:** Yes for public content, login required for participation

- Profile requirements:
  - What fields are required at signup?
  - **Minimum:** Email, display name, role (student/volunteer/teacher)
  - **Optional:** School, grade, skills, bio

**Action Required:**
- [ ] Configure OAuth providers in Supabase
- [ ] Design signup flow
- [ ] Create profile setup wizard
- [ ] Add email verification

**Timeline:** Core authentication by Day 2

---

### 8. Content Strategy
**Status:** ⚠️ NEEDS DECISION

**Questions:**
- Who writes the initial content?
- Pre-populate with sample projects/posts, or launch empty?
  - **Recommendation:** 2-3 seed projects (including Loot Locker) to demonstrate functionality

**Content Needed:**
1. **About Page**
   - Mission statement ✅ (from charter)
   - Team/leadership info
   - Partner organizations

2. **Student Guide**
   - How to get started
   - Challenge explanations
   - Team formation tips
   - Submission process

3. **Teacher Resources**
   - Curriculum alignment
   - Supervision guidelines
   - Assessment rubrics
   - Safety/moderation info

4. **Sample Projects**
   - Loot Locker (feature showcase)
   - Project Gamer (future initiative)
   - 1-2 example solutions

**Action Required:**
- [ ] Write About page content
- [ ] Create Student Guide
- [ ] Develop Teacher Resources
- [ ] Document Loot Locker project

**Timeline:** Core content by Day 2, expanded content by Day 4

---

### 9. Gamification Parameters
**Status:** ⚠️ NEEDS DECISION

**Questions:**
- Point values for activities:
  - Creating a post: ? points
  - Making a comment: ? points
  - Committing code: ? points
  - Attending event: ? points
  - Completing challenge: ? points

**Recommended Point System:**
```
- Sign up: 100 points (welcome bonus)
- Complete profile: 50 points
- Create post: 10 points
- Comment on post: 5 points
- Receive upvote: 2 points
- GitHub commit: 15 points
- Complete tutorial: 25 points
- Attend event: 100 points
- Complete challenge: 200-500 points (based on difficulty)
- Mentor another student: 50 points
```

- Achievement tiers:
  - How many achievements total?
  - Categories: Beginner, Contributor, Builder, Leader, Legend?

**Sample Achievements:**
```
🌟 First Steps (10 pts) - Create your profile
🗣️ Community Voice (25 pts) - Make your first post
👥 Team Player (50 pts) - Join a project
💻 Code Contributor (100 pts) - Submit your first commit
🏆 Challenge Champion (200 pts) - Complete a Loot Locker challenge
📚 Knowledge Seeker (75 pts) - Complete 5 tutorials
🎯 Streak Master (150 pts) - 7 consecutive days of activity
👑 Top 10 Legend (500 pts) - Reach top 10 on leaderboard
```

**Action Required:**
- [ ] Define point values
- [ ] Create achievement list
- [ ] Set leaderboard refresh frequency (real-time, hourly, daily?)

**Timeline:** Basic system by end of Week 1, iterate based on usage

---

### 10. Mobile Responsiveness Priority
**Status:** ⚠️ NEEDS DECISION

**Questions:**
- What devices will students primarily use?
  - School-provided laptops?
  - Personal smartphones?
  - Trailer displays (large touchscreen)?

**Design Priorities:**
1. **Desktop/Laptop** (1024px+): Full featured experience
2. **Tablet** (768-1023px): Adapted layout
3. **Mobile** (320-767px): Essential features, simplified nav
4. **Large Display** (1920px+): Trailer showcase mode

**Action Required:**
- [ ] Test on multiple device sizes
- [ ] Ensure touch-friendly tap targets (44x44px minimum)
- [ ] Optimize images for mobile bandwidth
- [ ] Consider PWA for app-like experience

**Timeline:** Mobile-first design from Day 0

---

## Technical Decisions Needed

### 11. Build Tool & Framework
**Status:** ✅ RECOMMENDED

**Options:**

**Option A: Vite + React (Recommended)**
- ✅ Fast dev server
- ✅ Modern, familiar to students
- ✅ Excellent documentation
- ✅ Easy GitHub Pages deployment
- ✅ Great ecosystem

**Option B: Next.js (Static Export)**
- ✅ Powerful framework
- ✅ Built-in optimizations
- ⚠️ Heavier learning curve
- ⚠️ More complex setup

**Option C: Vanilla HTML/CSS/JS**
- ✅ Simple, no build step
- ✅ Maximum compatibility
- ⚠️ Harder to scale
- ⚠️ More manual work

**Recommendation:** **Vite + React** - Best balance for this project

**Action Required:**
- [ ] Confirm framework choice
- [ ] Initialize project

---

### 12. CSS Strategy
**Status:** ⚠️ NEEDS DECISION

**Options:**

**Option A: Tailwind CSS**
- ✅ Rapid development
- ✅ Utility-first
- ✅ Small production bundle
- ⚠️ HTML can get verbose

**Option B: CSS Modules**
- ✅ Scoped styles
- ✅ No naming conflicts
- ⚠️ More files to manage

**Option C: Styled Components**
- ✅ CSS-in-JS
- ✅ Dynamic styles
- ⚠️ Runtime overhead

**Option D: Plain CSS with Variables**
- ✅ Simple, standard
- ✅ Easy for students
- ⚠️ Manual organization needed

**Recommendation:** **Tailwind CSS** for speed, fallback to **Plain CSS** if students struggle

**Action Required:**
- [ ] Choose CSS approach
- [ ] Set up configuration

---

### 13. Hosting & Deployment
**Status:** ✅ RECOMMENDED

**GitHub Pages Configuration:**
- Repository: Public
- Source branch: `gh-pages` (auto-created by GitHub Actions)
- Custom domain: hackathontoendhomelessness.org
- HTTPS: Enforced (automatic with custom domain)

**Deployment Trigger:**
- Push to `main` branch → Auto-build → Auto-deploy
- ~2-5 minutes from commit to live site

**GitHub Actions Workflow:**
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - Checkout code
      - Install Node.js
      - Install dependencies
      - Build project
      - Deploy to gh-pages branch
```

**Action Required:**
- [ ] Create `.github/workflows/deploy.yml`
- [ ] Add secrets to GitHub repo (if needed)
- [ ] Test deployment pipeline

---

### 14. Environment Variables
**Status:** ⚠️ NEEDS DECISION

**Required Variables:**
```env
# Supabase
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxxxx...

# Site
VITE_SITE_URL=https://hackathontoendhomelessness.org

# Analytics (optional)
VITE_GA_ID=G-XXXXXXXXXX

# GitHub OAuth (if used)
VITE_GITHUB_CLIENT_ID=xxxxx
```

**Security Notes:**
- ✅ Supabase anon key is safe to expose (public API key)
- ✅ Vite automatically includes `VITE_*` variables in build
- ⚠️ Never commit `.env` file to Git
- ⚠️ Use GitHub Secrets for deployment

**Action Required:**
- [ ] Create `.env.example` template
- [ ] Document required variables
- [ ] Configure GitHub repository secrets

---

### 15. Data Backup & Recovery
**Status:** ⚠️ NEEDS DECISION

**Questions:**
- Supabase automatic backups: Enabled by default on paid tiers
- Free tier: No automatic backups!
- Export strategy for student data?

**Recommendations:**
1. **Upgrade to Pro tier** ($25/mo) after initial success for automatic backups
2. **Weekly manual exports** during free tier period
3. **Git-track seed data** for reproducibility

**Action Required:**
- [ ] Document backup procedures
- [ ] Create export scripts
- [ ] Test restore process

---

## Long-Term Questions (Post-Launch)

### 16. Scaling Strategy
**Status:** 📋 FUTURE PLANNING

**Questions:**
- At what user count do we upgrade Supabase tier?
  - Free tier: 500 MB database, 1 GB file storage, 2 GB bandwidth
  - Pro tier: 8 GB database, 100 GB file storage, 250 GB bandwidth

- CDN for media assets?
- Caching strategy for leaderboards and feeds?
- Database indexing optimization?

**Trigger Points:**
- 100 active users: Monitor closely
- 500 active users: Consider upgrade
- 1000+ active users: Definitely upgrade

---

### 17. Monetization & Sustainability
**Status:** 📋 FUTURE PLANNING

**Questions:**
- How will ongoing costs be covered?
  - Corporate sponsorships?
  - Grants?
  - Donations?
  - Freemium features?

**Estimated Monthly Costs:**
```
Domain: ~$1.25/mo ($15/year)
Supabase Free: $0
Supabase Pro: $25/mo
GitHub Pages: $0
Email service: $0-15/mo
CDN: $0-10/mo (if needed)

Total: $0-50/mo depending on scale
```

**Action Required:**
- [ ] Draft sponsorship deck
- [ ] Research grant opportunities
- [ ] Set up donation mechanism (if appropriate)

---

### 18. SAP Integration Timeline
**Status:** 📋 FUTURE PLANNING

**Questions:**
- When to start SAP integration work?
  - **Recommendation:** After successful LA USD pilot (Month 2-3)
  
- Which SAP products to integrate first?
  1. SAP Analytics Cloud (planning/visualization)
  2. SAP Extended Warehouse Management (inventory)
  3. SAP Transportation Management (routing)

- Partnership with SAP?
  - Developer support?
  - Sandbox environments?
  - Sponsorship opportunities?

**Prerequisites:**
- Proven platform with active community
- Clear use cases and ROI
- Technical architecture documentation
- Security audit/compliance

---

### 19. Legal & Compliance
**Status:** ⚠️ NEEDS REVIEW

**Questions:**
- Terms of Service: Required?
  - **Yes**, especially with minors
- Privacy Policy: Required?
  - **Yes**, COPPA compliance critical
- Content moderation: Who is responsible?
- Liability waivers for events?
- Code licensing: Open source?
  - **Recommendation:** MIT License for maximum accessibility

**Action Required:**
- [ ] Draft Terms of Service
- [ ] Draft Privacy Policy
- [ ] Create Code of Conduct
- [ ] Review with legal counsel (if available)
- [ ] Choose open source license

**Timeline:** Basic policies by Day 2, full legal review post-launch

---

### 20. Accessibility Audit
**Status:** 📋 FUTURE PLANNING

**Questions:**
- WCAG 2.1 AA compliance priority?
  - **Recommendation:** Yes, should be baseline
- Screen reader testing?
- Keyboard navigation testing?
- Color contrast validation?

**Tools:**
- Lighthouse (built into Chrome DevTools)
- axe DevTools (browser extension)
- WAVE (web accessibility evaluation tool)

**Action Required:**
- [ ] Run initial accessibility audit
- [ ] Fix critical issues before launch
- [ ] Create accessibility statement
- [ ] Ongoing testing schedule

**Timeline:** Basic compliance by launch, continuous improvement

---

## Decision Priority Matrix

### 🔴 URGENT (Must decide this week)
1. Domain DNS configuration
2. Supabase setup
3. Student CTA and messaging
4. Loot Locker challenge definitions
5. Repository initialization
6. Framework/build tool selection

### 🟡 IMPORTANT (Decide before Day 4)
7. Authentication strategy
8. Core content creation
9. Basic branding (logo, colors)
10. Gamification point values
11. CSS approach
12. Environment variables

### 🟢 FUTURE (Post-launch refinement)
13. Advanced gamification
14. SAP integration timeline
15. Scaling strategy
16. Legal/compliance review
17. Accessibility audit
18. Monetization strategy

---

## Questions for You (Please Answer)

### Immediate (This Week)
1. **Domain DNS**: Do you have access to domain registrar? Need help with DNS setup?
2. **Supabase**: Should I create the Supabase project with you, or will you set it up?
3. **Student Rewards**: What are the ACTUAL prizes/rewards you can offer? Be specific!
4. **Loot Locker**: Will physical prototype be at Day 4 event, or use simulation?
5. **Branding**: Do you have a logo, or should we create something simple for launch?

### Design Preferences
6. **Framework**: Confirm Vite + React, or prefer something else?
7. **CSS**: Tailwind for speed, or prefer plain CSS for simplicity?
8. **Theme**: Light mode only, dark mode only, or toggle?

### Content
9. **About Page**: Who should be listed as team/leadership?
10. **Partners**: Any confirmed partners/sponsors to feature?
11. **Events**: Is the Day 4 event the first official event to list?

### Student Interaction
12. **Teams**: How will students form teams? Random, self-select, assigned?
13. **Submissions**: What format for challenge submissions? GitHub PRs, form uploads, live demos?
14. **Communication**: Discord? Slack? Built-in chat? Email only?

---

## Next Steps

### Today (Day 0)
- [ ] Answer critical questions above
- [ ] Initialize Git repository
- [ ] Set up basic project structure
- [ ] Create initial landing page

### Tomorrow (Day 1)
- [ ] Set up Supabase project
- [ ] Implement authentication
- [ ] Build core pages (Home, About, Loot Locker)
- [ ] Deploy initial version to GitHub Pages

### Day 2 (Employee Kickoff)
- [ ] Teacher resources page
- [ ] Event information
- [ ] Polish and test
- [ ] Live demo ready

### Day 4 (Student Event)
- [ ] Student guide complete
- [ ] Challenge descriptions published
- [ ] Signup flow tested
- [ ] Leaderboard functional

---

**Document Version:** 1.0  
**Date:** December 7, 2025  
**Status:** AWAITING ANSWERS
