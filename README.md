# Hackathon to End Homelessness

[![Deploy to GitHub Pages](https://github.com/yourusername/hackathon-to-end-homelessness/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourusername/hackathon-to-end-homelessness/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

🏠 **Building technology solutions to end scarcity and provide dignity for all humans.**

Visit us at: [hackathontoendhomelessness.org](https://hackathontoendhomelessness.org)

## 🌟 About

A gamified community platform where students and developers collaborate to build real-world solutions for ending homelessness. Join our year-round hackathon to earn points, unlock achievements, and create meaningful impact through technology.

### Core Initiatives

- **🏪 Loot Locker Prototype**: AI-powered donation system with robotic intake and cloud logistics
- **🎯 Project Gamer**: Strategy games for emergency response training and city planning
- **🏙️ Smart City Planning**: Digital twins and interoperable planning systems
- **🔧 Solution Hacks**: Custom tools for shelters, NGOs, and service providers

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git
- A Supabase account (for backend features)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/hackathon-to-end-homelessness.git
cd hackathon-to-end-homelessness

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Add your Supabase credentials to .env
# Get these from https://app.supabase.com

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📋 Project Structure

```
hackathon-to-end-homelessness/
├── .github/workflows/     # GitHub Actions CI/CD
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   │   └── common/      # Shared components (Header, Footer)
│   ├── pages/           # Route pages
│   ├── services/        # API and Supabase integration
│   ├── hooks/           # Custom React hooks
│   ├── context/         # React context providers
│   ├── utils/           # Helper functions
│   ├── App.jsx          # Root component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── docs/                # Documentation
│   ├── PROJECT_CHARTER.md
│   ├── ARCHITECTURE.md
│   └── DEVELOPMENT_QUESTIONS.md
└── package.json
```

## 🎮 For Students

### Getting Started

1. **Sign Up**: Create your account (coming soon)
2. **Choose a Challenge**: Pick from Loot Locker, Project Gamer, or other initiatives
3. **Join a Team**: Collaborate with other students
4. **Build & Learn**: Develop skills while making real impact
5. **Earn Rewards**: Top contributors get exclusive perks!

### What You Can Build

- **Beginner**: Documentation, UI design, graphics
- **Intermediate**: Web features, API integration, data processing
- **Advanced**: AI/ML models, system architecture, cloud integration

### Points System

- Sign up: 100 points
- Complete profile: 50 points
- Create post: 10 points
- GitHub commit: 15 points
- Complete challenge: 200-500 points
- Top 10 = Exclusive rewards! 🏆

## 👨‍🏫 For Teachers

We provide:
- STEM curriculum alignment
- Student progress tracking
- Safety and moderation
- Portfolio-ready projects
- Certificate of completion

See [Teacher Resources](https://hackathontoendhomelessness.org/teacher-resources) for more.

## 🏗️ Tech Stack

### Frontend
- **Framework**: React 18 + Vite
- **Routing**: React Router v6
- **Styling**: CSS with custom properties
- **Hosting**: GitHub Pages

### Backend (Supabase)
- **Database**: PostgreSQL
- **Authentication**: Social OAuth (Google, GitHub)
- **Realtime**: WebSocket subscriptions
- **Storage**: Media and file uploads
- **Functions**: Edge functions for serverless logic

### DevOps
- **CI/CD**: GitHub Actions
- **Deployment**: Automated via Git push
- **Domain**: Custom domain with HTTPS

## 🤝 Contributing

We welcome contributions from everyone! Here's how:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

### Development Workflow

```bash
# Create a new branch
git checkout -b feature/my-feature

# Make your changes and test
npm run dev

# Lint your code
npm run lint

# Build to verify
npm run build

# Commit and push
git add .
git commit -m "Description of changes"
git push origin feature/my-feature
```

## 📅 Upcoming Events

- **Dec 9, 2025**: LA USD Employee Kickoff
- **Dec 11, 2025**: Student Event (800+ students)
- **Jan 2026**: Mobile Trailer Tour

## 📚 Documentation

- [Project Charter](./PROJECT_CHARTER.md) - Vision, mission, and goals
- [Architecture](./ARCHITECTURE.md) - Technical design and structure  
- [Development Questions](./DEVELOPMENT_QUESTIONS.md) - Decision log and FAQ

## 🔐 Environment Variables

Create a `.env` file with:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_SITE_URL=https://hackathontoendhomelessness.org
```

**Note**: The Supabase anon key is safe to expose in the client.

## 🚀 Deployment

### Automatic Deployment (GitHub Pages)

1. Push to `main` branch
2. GitHub Actions builds and deploys automatically
3. Site updates in 2-5 minutes

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

### Domain Configuration

1. Add DNS A records pointing to GitHub Pages IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
2. Add CNAME record for `www` subdomain
3. Wait 24-48 hours for DNS propagation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Los Angeles Unified School District
- All contributing students and volunteers
- NGO partners and sponsors
- Open source community

## 📞 Contact

- **Website**: [hackathontoendhomelessness.org](https://hackathontoendhomelessness.org)
- **GitHub**: [github.com/yourusername/hackathon-to-end-homelessness](https://github.com/yourusername/hackathon-to-end-homelessness)
- **Community Boards**: [hackathontoendhomelessness.org/community](https://hackathontoendhomelessness.org/community)

## 🎯 Roadmap

### Phase 1: Launch (December 2025)
- [x] Project structure and landing page
- [x] Core pages (Home, About, Loot Locker, etc.)
- [x] GitHub Pages deployment
- [ ] Supabase authentication
- [ ] LA USD student kickoff

### Phase 2: Community (Q1 2026)
- [ ] Discussion boards
- [ ] User profiles
- [ ] Gamification system
- [ ] Mobile trailer tour

### Phase 3: Scale (Q2 2026)
- [ ] Project Gamer launch
- [ ] Additional school partnerships
- [ ] NGO integrations
- [ ] SAP system connections

---

**Made with ❤️ by students, for humanity**
