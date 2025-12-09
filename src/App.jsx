import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Signup from './pages/Signup'
import LootLocker from './pages/LootLocker'
import ProjectGamer from './pages/ProjectGamer'
import Community from './pages/Community'
import Projects from './pages/Projects'
import Leaderboard from './pages/Leaderboard'
import Learning from './pages/Learning'
import Events from './pages/Events'
import StudentGuide from './pages/StudentGuide'
import TeacherResources from './pages/TeacherResources'
import NotFound from './pages/NotFound'

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/loot-locker" element={<LootLocker />} />
            <Route path="/project-gamer" element={<ProjectGamer />} />
            <Route path="/community" element={<Community />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/events" element={<Events />} />
            <Route path="/student-guide" element={<StudentGuide />} />
            <Route path="/teacher-resources" element={<TeacherResources />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App
