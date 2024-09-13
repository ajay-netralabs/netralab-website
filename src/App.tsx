import { Routes, Route } from 'react-router-dom'
import { Home } from './pages'
import './App.css'
import { NavbarLayout } from './NavbarLayout'
import { Creators, Innovators, Integrators } from './pages/whoWeServe'
import { Blog, BlogsPage } from './pages/Blog'
import { CareersPage } from './pages/Careers'
import { ContactUsPage } from './pages/ContactUs'
import { Langchain } from './pages/Langchain'

function App() {

  return (
    <Routes>
      <Route element={<NavbarLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/integrators" element={<Integrators />} />
        <Route path="/innovators" element={<Innovators />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/enterprise-language-chain" element={<Langchain />} />
      </Route>
    </Routes>
  )
}

export default App
