import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/footer'
import Nav from './components/nav'
import Contact from './pages/contact'
import Home from './pages/home'
import Algocraft from './pages/algocraft'
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/algocraft" element={<Algocraft />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
