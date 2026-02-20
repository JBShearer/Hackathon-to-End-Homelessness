import { Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Placeholder from './pages/Placeholder'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Placeholder />} />
          <Route path="*" element={<Placeholder />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
