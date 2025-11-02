import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Portfolio from './pages/Portfolio.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'


function App() {
 

  return (
    <div className="w-full min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="w-full flex-1">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
