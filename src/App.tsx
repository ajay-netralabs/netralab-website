import { Routes, Route } from 'react-router-dom'
import { Home, LandingPage, PrivacyPolicy, TermsAndCondition } from './pages'
import './App.css'
import { NavbarLayout } from './NavbarLayout'
import { Creators, Innovators, Integrators } from './pages/whoWeServe'
import { Blog, BlogsPage } from './pages/Blog'
import { CareersPage } from './pages/Careers'
import { ContactUsPage } from './pages/ContactUs'
import { Langchain } from './pages/Langchain'

import ReactGA from 'react-ga4';
import { openSurveyLink } from './services/Utils'
// import { useEffect } from 'react'


function App() {

  // const navigate = useNavigate()

  // only send analytics on production environment
  const { PROD , VITE_GA_ID } = import.meta.env
  if(PROD && VITE_GA_ID) {
    ReactGA.initialize(VITE_GA_ID);
  }


  // useEffect(() => {
  //   const modal = document.getElementById('survey-modal')
  //   if(modal) {
  //     modal.classList.add("modal-center")
  //     //@ts-ignore
  //     modal.showModal()
  //   } 
  // })

  const removeClass = () => {
    const modal = document.getElementById('survey-modal')
    if(modal) {
      modal.classList.remove("modal-center")
    } 
  }

  // const closeModal = () => {
  //   const modal = document.getElementById('survey-modal')
  //   if(modal) {
  //     //@ts-ignore
  //     modal.close()
  //   } 
  // }

  // const showSurveyModal = (e:any) => {
  //   e.preventDefault()
  //   e.returnValue = ''
  //   return ''
  //   const modal = document.getElementById('survey-modal')
  //   //@ts-ignore
  //   if(modal) modal.showModal()
  // }

  // useEffect(() => {
  //   // const modal = document.getElementById('survey-modal')
  //   // if(modal) {
  //     //@ts-ignore
  //     // window.confirm = modal.showModal
  //   // }
  //   window.addEventListener('beforeunload', showSurveyModal)
  //   return () => removeEventListener('beforeunload', showSurveyModal)
  // }, [])

  // const toggleVisibleModal = () => {
  //   setIsOpen((open:boolean) => !open)
  // };


  return (
    <>
    <Routes>
      <Route path="/ground-truth-gain-complete-control-over-your-ai-agent-development/" element={<LandingPage />} />
      {/* <Route path="/data-scientist-survey" element={<SurveyTest />} /> */}
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

        <dialog id="survey-modal" className="modal bg-transparent border-0">
          <div className="modal-center modal-box w-fit max-w-full bg-[#303033FF] flex flex-col justify-center items-center p-[10px] md:p-[60px] lg:p-[60px]">
              <div className="bg-[#DFDFDF17] w-full flex justify-center items-center rounded-sm">
                  <h3 className="text-xl md:text-[2.5vw] lg:text-[2.5vw] leading-[1.1] font-bold p-4 text-center">Your Unique Perspective Matters to Us.</h3>
              </div>
              <div className="mt-6 w-full p-[30px] 2xl:px-[60px] bg-[#DFDFDF17] flex flex-col items-center text-lg md:text-[1.1vw] lg:text-[1.1vw] rounded-md">
                  <p className='text-center text-base md:text-[1.25vw] lg:text-[1.25vw] font-bold'>Take our 8-Question Test and For Your Time, Get...</p>
                  <ul className="list-disc mt-4">
                      <li>Access to our GenAI Certification Program designed for every role, domain and functions.</li>
                      <li>Beta access to Ground Truth<sup>®</sup> - bring your hypothesis to life and achieve the outcomes you envision.</li>
                  </ul>
              </div>

              <div className="w-full mt-10 btn btn-accent rounded-md hover:cursor-pointer text-base md:text-[1.1vw] lg:text[1.1vw] text-white" onClick={openSurveyLink}>
                  <p>Begin the Test - Your Insights Matter</p>
              </div>
          </div>
          <form method="dialog" className="modal-backdrop bg-transparent">
              <button className='border-0' onClick={removeClass}>close</button>
          </form>
      </dialog>
    </>
  )
}

export default App
