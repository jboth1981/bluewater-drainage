import { Routes, Route } from 'react-router'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import WhyDrainage from './pages/WhyDrainage'
import Projects from './pages/Projects'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="why-drainage" element={<WhyDrainage />} />
        <Route path="projects" element={<Projects />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
