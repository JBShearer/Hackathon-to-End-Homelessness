import { Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Community from './pages/Community'
import Events from './pages/Events'
import Projects from './pages/Projects'
import Learning from './pages/Learning'
import Leaderboard from './pages/Leaderboard'
import StudentGuide from './pages/StudentGuide'
import TeacherResources from './pages/TeacherResources'
import LootLocker from './pages/LootLocker'
import ProjectGamer from './pages/ProjectGamer'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/student-guide" element={<StudentGuide />} />
          <Route path="/facilitator-guide" element={<TeacherResources />} />
          <Route path="/teacher-resources" element={<TeacherResources />} />
          <Route path="/project-gamer" element={<ProjectGamer />} />
          <Route path="/loot-locker" element={<LootLocker />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App