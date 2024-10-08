import { Routes, Route } from 'react-router-dom'
import { Home, PrivacyPolicy, TermsAndCondition } from './pages'
import './App.css'
import { NavbarLayout } from './NavbarLayout'
import { Creators, Innovators, Integrators } from './pages/whoWeServe'
import { Blog, BlogsPage } from './pages/Blog'
import { CareersPage } from './pages/Careers'
import { ContactUsPage } from './pages/ContactUs'
import { Langchain } from './pages/Langchain'

import ReactGA from 'react-ga4';


function App() {

  // only send analytics on production environment
  const { PROD , VITE_GA_ID } = import.meta.env
  if(PROD && VITE_GA_ID) {
    ReactGA.initialize(VITE_GA_ID);
  }


  return (
    <Routes>
      <Route element={<NavbarLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/ai-agents-for-integrators/" element={<Integrators />} />
        <Route path="/ai-agents-for-innovators/" element={<Innovators />} />
        <Route path="/ai-agents-for-creators/" element={<Creators />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/language-chain/" element={<Langchain />} />
        <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions/" element={<TermsAndCondition />} />

        {/* blogs */}
        <Route path="/blog/" element={<BlogsPage />} />
        <Route path="/:pathUrl" element={<Blog />} />

        {/* contact pages */}
        <Route path="/contact-us-main/" element={<ContactUsPage type="main"/>} />
        <Route path="/contact-us-creators-ai-agents/" element={<ContactUsPage type="creators" />} />
        <Route path="/contact-us-innovators-ai-agents/" element={<ContactUsPage type="innovators" />} />
        <Route path="/contact-us-integrators-ai-agents/" element={<ContactUsPage type="integrators" />} />
      </Route>
    </Routes>
  )
}

export default App
