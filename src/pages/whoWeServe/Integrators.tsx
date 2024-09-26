import jsFramework from "../../../public/static_img/JavaScript-frameworks.svg"
import designThinking from "../../../public/static_img/Design-thinking.svg"
import settings from "../../../public/static_img/Settings.svg"
import teamwork from "../../../public/static_img/Team-work.svg"
import working from "../../../public/static_img/Working.svg"

import Integrator1Vid from "../../../public/vids/Integrators-1.mp4"
import Integrator2Vid from "../../../public/vids/Integrators-2.mp4"
import Integrator3Vid from "../../../public/vids/Integrators-3.mp4"
import { FaqAccordion } from "../../components"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addPrevLocation } from "../../store/locationSlice"

import Integration1Bg from "../../../public/static_img/integrator-1-bg.jfif"
import ReactGA from 'react-ga4';


import Rectangle from "../../../public/icons/Rectangle.png"
import card1Icon from "../../../public/icons/integrators/card1.svg"
import card2Icon from "../../../public/icons/integrators/card2.svg"
import card3Icon from "../../../public/icons/integrators/card3.svg"

// import Lottie from "lottie-react";

// import firstAnimation from "../../../public/animations/integrators/1.json"

export const Integrators = () => {

    if(import.meta.env.PROD) {
        ReactGA.send({
            hitType: "pageview",
            page: "/ai-agents-for-integrators/",
            title: "Integrators page",
        })
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    // useEffect(() => {
    //     return () => {
    //         // localStorage.setItem("prev", "/ai-agents-for-integrators/")
    //         dispatch(addPrevLocation("/ai-agents-for-integrators/"))
    //     }
    // }, [])

    const handleNavigate = () => {
        dispatch(addPrevLocation("/ai-agents-for-integrators/"))
        navigate("/contact-us-integrators-ai-agents/")
    }

    return (
        <div className="mt-1 md:mt-12 lg:mt-12">
            {/* first container */}
           <div className="p-3 md:p-10 lg:p-10 flex gap-[20px] flex-col items-start mt-[10px] md:flex-row lg:flex-row">
                <div className="w-full md:w-[50%] lg:w-[50%]">
                    {/* <video
                        className="mix-blend-exclusion w-[100px] md:w-[115px] lg:w-[130px]"
                        muted // @ts-ignore
                        autoPlay={"autoplay"}
                        preload="auto"
                        loop>
                        <source src={Integrator} type="video/mp4"/>
                    </video> */}
                    <div className='tags-btn'>Integrator</div>
                    <div className="relative">
                        <div className='hidden md:block lg:block'>
                            <img className="brightness-[0.4] mix-blend-color-dodge" src={Integration1Bg} alt="" />
                        </div>

                        <div className='static md:absolute lg:absolute top-0'>
                            <h1 className="text-xl md:text-[2.8vw] lg:text-[2.8vw] leading-[1.3] font-bold mt-[26px] heading-text">Agentic Workflows for System Integrators</h1>
                            <p className="text-lg md:text-[1.5vw] lg:text-[1.5vw] lg:leading-relaxed mt-[20px] text-[#CECECE]"><span className="font-bold text-accent">Ground Truth<sup>®</sup></span> is the world’s first language chain framework built to empower SIs to build and deploy custom AI agents that redefine the way processes are automated for your customers.</p>
                            {/* <div className="btn btn-accent rounded-sm mt-[35px] hover:cursor-pointer text-white" onClick={() => handleNavigate()}>Request Demo</div> */}
                            <div className="border border-accent learn-more-btn glass-btn mt-[5%] py-[10px] px-[20px] w-fit hover:cursor-pointer text-base md:text-[1.1vw] lg:text-[1.1vw]" onClick={() => navigate("/language-chain/")}>Enterprise Language Chain? <span className="ml-4 text-accent">Learn More</span></div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 md:mt-0 lg:mt-0 w-full md:w-[50%] lg:w-[50%] flex justify-center items-center">
                    <div className="integrator-vid2-container  w-[70%] md:w-[50%] lg:w-[50%] flex justify-center items-center">
                        <video
                            className="mix-blend-exclusion"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={Integrator1Vid} type="video/mp4"/>
                        </video>
                        {/* <Lottie animationData={firstAnimation}/> */}
                    </div>
                </div>
           </div> 


           {/* second container */}
           <div className="integrator-second-container mt-1 p-3 md:p-10 lg:p-10 flex gap-[20px] justify-between flex-col-reverse items-center md:flex-row lg:flex-row">
                <div className="w-full md:w-[50%] lg:w-[50%] flex justify-center items-center">
                    <div className="w-[70%] flex justify-center items-center">
                        <video
                            className="mix-blend-exclusion green-border"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={Integrator2Vid} type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <div className="w-full mt-[20px] md:mt-0 lg:mt-0 md:w-[50%] lg:w-[50%]">
                        {/* <video
                            className="mix-blend-exclusion w-[100px] md:w-[115px] lg:w-[130px]"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={Problem} type="video/mp4"/>
                        </video> */}
                        <div className='tags-btn'>Problem</div>
                        <h1 className="text-xl md:text-[2.8vw] lg:text-[2.8vw] leading-[1.3] font-bold mt-[26px] heading-text">System Integrators have had little success deploying AI Agents into production.</h1>
                        <p className="text-lg md:text-[1.5vw] lg:text-[1.5vw] lg:leading-relaxed mt-[20px] text-[#CECECE]"><span className="font-bold text-accent uppercase">96% of executives agree</span> that leveraging AI Agent ecosystems will be a significant opportunity for their organizations in the next three years.</p>
                
                        <div className="mt-[40px] flex flex-col text-xl">
                        <div className="flex items-center gap-3 glass-card-1 p-2.5 md:p-5 lg:p-5">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div lang='en' className="glass-text text-[#CECECE] text-base md:text-[1.15vw] lg:text-[1.15vw]"><span className="font-bold text-accent uppercase">General-purpose frameworks like LangChain </span> limit the ability of SIs to refine AI Agents for their customer requirements.</div>
                        </div>

                        <div className="flex items-center gap-3 glass-card-2 p-2.5 md:p-5 lg:p-5">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div lang='en' className="glass-text text-[#CECECE] text-base md:text-[1.15vw] lg:text-[1.15vw]">These siloed agents make integration into complex enterprise workflows a <span className="font-bold text-accent uppercase">time-consuming and unreliable process.</span></div>
                        </div>

                        <div className="flex items-center gap-3 glass-card-3 p-2.5 md:p-5 lg:p-5">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div lang='en' className="glass-text text-[#CECECE] text-base md:text-[1.15vw] lg:text-[1.15vw]">Ultimately, trying to build a custom AI Agent <span className="font-bold text-accent uppercase">drains resources and slows down time-to-market.</span></div>
                        </div>
                    </div>
                
                </div>
           </div>


            {/* third container */}
            <div className="mt-1 p-3 md:p-10 lg:p-10">
                <div className="">
                    {/* <video
                            className="mix-blend-exclusion w-[100px] md:w-[115px] lg:w-[130px]"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={Solution} type="video/mp4"/>
                        </video> */}
                    <div className='tags-btn'>Solution</div>
                    <h1 className="text-xl md:text-[2.8vw] lg:text-[2.8vw] leading-[1.3] font-bold mt-[26px] heading-text">The AI Agent platform built for System Integrators.</h1>
                </div>
                <div className="mt-2 flex items-center justify-between flex-col md:flex-row lg:flex-row leading-relaxed">
                    <div className=" w-full md:w-[50%] lg:w-[50%] flex flex-col text-[#CECECE] text-xl md:text-[1.2vw] lg:text-[1.2vw]">
                        <div className="flex items-center gap-3 glass-card-1 p-2.5 md:p-5 lg:p-5">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div lang='en' className="glass-text text-[#CECECE] text-base md:text-[1.15vw] lg:text-[1.15vw]"><span className="font-bold text-accent uppercase">Orchestrate powerful AI Agents</span> with our unique proprietary framework, built for the complexity of enterprise needs.</div>
                        </div>
                        <div className="flex items-center gap-3 glass-card-2 p-2.5 md:p-5 lg:p-5">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div lang='en' className="glass-text text-[#CECECE] text-base md:text-[1.15vw] lg:text-[1.15vw]">
                                <span className="font-bold text-accent uppercase">"Lift and Shift" agent setups </span> into your customers' environments, run entirely within their secure networks.
                             </div>
                        </div>
                        <div className="flex items-center gap-3 glass-card-3 p-2.5 md:p-5 lg:p-5">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div lang='en' className="glass-text text-[#CECECE] text-base md:text-[1.15vw] lg:text-[1.15vw]">Scale AI Agents across customers with ease,<span className="font-bold text-accent uppercase"> leveraging built-in governance and complete control over agent orchestration.</span></div>
                        </div>
                    </div>
                    <div className="mt-[20px] md:mt-0 lg:mt-0  w-full md:w-[50%] lg:w-[50%] flex justify-center items-center">
                        <div className="w-[70%] md:w-[50%] lg:w-[50%] flex justify-center items-center">
                            <video
                                className="mix-blend-exclusion"
                                muted // @ts-ignore
                                autoPlay={"autoplay"}
                                preload="auto"
                                loop>
                                <source src={Integrator3Vid} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4th container */}
            <div className="mt-1 p-3 md:p-10 lg:p-10">
                <div className="text-center">
                    <h1 className="text-xl md:text-[2.8vw] lg:text-[2.8vw] font-bold leading-[1.3] heading-text">The Benefits of Our Approach</h1>
                </div>
                {/* cards */}
                <div className="flex flex-col md:flex-row lg:flex-row flex-wrap items-center gap-[28px] justify-between mt-2 md:mt-12 lg:mt-12">
                    {/* card 1 */}
                    <div className="glass-vertical-card-1 w-full md:w-[30%] lg:w-[30%] min-h-[350px] h-auto md:h-[350px] lg:h-[350px] xl:h-[350px] 2xl:h-[350px] flex justify-center items-center">
                        <div className="h-[30%] flex justify-center items-end">
                            {/* <video
                                className="mix-blend-exclusion"
                                muted // @ts-ignore
                                autoPlay={"autoplay"}
                                preload="auto"
                                loop>
                                <source src={integrator1Icon} type="video/mp4"/>
                            </video> */}
                            <div className="disc relative">
                                <img src={Rectangle} alt="" />
                                <img className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" src={card1Icon} alt="" />
                            </div>
                        </div>
                        <div className="h-[70%] flex flex-col justify-start items-center text-[#CECECE]">
                            <h2 className="font-bold text-xl md:text-[1.5vw] lg:text-[1.5vw] mt-[21px] heading-text leading-relaxed">No Limits</h2>
                            <p className="text-lg md:text-[1.25vw] lg:text-[1.25vw] px-6 leading-relaxed mt-2">
                                Build AI solutions of any scope with a proprietary <span className="text-accent font-bold uppercase">framework that's free from the constraints of LangChain</span> or other generic solutions.
                            </p>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className="glass-vertical-card-2 w-[100%] md:w-[30%] lg:w-[30%] min-h-[350px] h-auto md:h-[350px] lg:h-[350px] xl:h-[350px] 2xl:h-[350px] flex justify-center items-center">
                        <div className="h-[30%] flex justify-center items-end">
                            {/* <video
                                className="mix-blend-exclusion"
                                muted // @ts-ignore
                                autoPlay={"autoplay"}
                                preload="auto"
                                loop>
                                <source src={integrator2Icon} type="video/mp4"/>
                            </video> */}
                            <div className="disc relative">
                                <img src={Rectangle} alt="" />
                                <img className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" src={card2Icon} alt="" />
                            </div>
                        </div>
                        <div className="h-[70%] flex flex-col justify-start items-center text-[#CECECE]">
                            <h2 className="font-bold text-xl md:text-[1.5vw] lg:text-[1.5vw] mt-[21px] heading-text leading-relaxed">Deploy Anywhere</h2>
                            <p className="text-lg md:text-[1.25vw] lg:text-[1.25vw] px-6 leading-relaxed mt-2">         
                                Deploy AI Agents securely in any environment, even without internet access, ensuring <span className="text-accent font-bold uppercase">complete control over client data.</span>
                            </p>
                        </div>
                    </div>

                    {/* card 3 */}
                    <div className=" glass-vertical-card-3 w-[100%] md:w-[30%] lg:w-[30%] min-h-[350px] h-auto md:h-[350px] lg:h-[350px] xl:h-[350px] 2xl:h-[350px] flex justify-center items-center">
                        <div className="h-[30%] flex justify-center items-end">
                            {/* <video
                                className="mix-blend-exclusion"
                                muted // @ts-ignore
                                autoPlay={"autoplay"}
                                preload="auto"
                                loop>
                                <source src={integrator3Icon} type="video/mp4"/>
                            </video> */}
                            <div className="disc relative">
                                <img src={Rectangle} alt="" />
                                <img className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" src={card3Icon} alt="" />
                            </div>
                        </div>
                        <div className="h-[70%] flex flex-col justify-start items-center text-[#CECECE]">
                            <h2 className="font-bold text-xl md:text-[1.5vw] lg:text-[1.5vw] mt-[21px] heading-text leading-relaxed">Scale & Control</h2>
                            <p className="text-lg md:text-[1.25vw] lg:text-[1.25vw] px-6 leading-relaxed mt-2">
                                <span className="text-accent font-bold uppercase">Orchestrate agents across your entire client base,</span> track consumption with precision, and enjoy the flexibility of our licensing model.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* 5th container */}
            <div className="integrator-second-container mt-10 md:mt-12 lg:mt-12 p-3 md:p-10 lg:p-10 flex flex-col justify-center items-center third-container">
                {/* <video
                    className="mix-blend-exclusion w-[140px] md:w-[160px] lg:w-[180px]"
                    muted // @ts-ignore
                    autoPlay={"autoplay"}
                    preload="auto"
                    loop>
                    <source src={Howitworks} type="video/mp4"/>
                </video> */}
                <div className='tags-btn'>How it works</div>
                <h1 className="text-xl md:text-[2.8vw] lg:text-[2.8vw] font-bold leading-[1.3] heading-text text-center mt-10 md:mt-0 lg:mt-0">Smooth Integration, just like our AI Agents.</h1>
                
                {/* cards */}
                <div className="flex flex-wrap justify-evenly mt-2 mx-auto text-[1.1vw] leading-relaxed">
                    {/* card 1 */}
                    <div className="flex items-center w-full md:w-[30%] lg:w-[30%] p-5 pr-0 min-w-[266px]">
                        {/* icon */}
                        <div className="flex flex-col justify-center items-center">
                            <img src={jsFramework} alt="illustration" className="w-[300px]" />

                            <div className="text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed">
                                Reach out to our team to discuss
                                <span className="font-bold text-accent uppercase"> how the Ground Truth<sup>®</sup> framework </span> 
                                can empower System Integrator to build Expert AI Agents™.
                            </div>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className="flex items-center w-full md:w-[30%] lg:w-[30%] p-5 pr-0 min-w-[266px]">
                        {/* icon */}
                        <div className="flex flex-col justify-center items-center">
                            <img src={designThinking} alt="illustration" className="w-[300px]" />

                            <div className="text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed">
                                We’ll schedule a consultation to explore your specific needs and 
                                <span className="font-bold text-accent uppercase"> determine if Ground Truth<sup>®</sup> is the right solution </span> 
                                for your AI agent projects.
                               
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full md:w-[30%] lg:w-[30%] p-5 pr-0 min-w-[266px]">
                        {/* icon */}
                        <div className="flex flex-col justify-center items-center">
                            <img src={settings} alt="illustration" className="w-[300px]"/>

                            <div className="text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed">
                            Once we’re aligned, our experts will help you define the 
                            <span className=" font-bold text-accent uppercase"> ideal environment and configuration for our AI Agents </span> 
                            to operate within your systems.
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full md:w-[30%] lg:w-[30%] p-5 pr-0 min-w-[266px]">
                        {/* icon */}
                        <div className="flex flex-col justify-center items-center">
                            <img src={teamwork} alt="illustration" className="w-[300px]"/>

                            <div className="text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed">
                                We’ll work closely with your team to
                                <span className="font-bold text-accent uppercase"> quickly onboard Ground Truth<sup>®</sup>, ensuring a smooth transition and minimal disruption to your operations. </span> 
                            </div>
                        </div>
                    </div>


                    <div className="flex items-center w-full md:w-[30%] lg:w-[30%] p-5 pr-0 min-w-[266px]">
                        {/* icon */}
                        <div className="flex flex-col justify-center items-center">
                            <img src={working} alt="illustration" className="w-[300px]"/>

                            <div className="text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed">
                                <span className="font-bold text-accent uppercase"> Begin creating powerful AI Agents immediately. </span> 
                                We offer additional fine-tuning and customization to optimize each agent for its specific use case.
                            </div>
                        </div>
                    </div>

                    

                </div>
                <div className="btn btn-accent rounded-sm mt-[35px] hover:cursor-pointer text-white" onClick={() => handleNavigate()}>Request Demo</div>
            </div>

             {/* sixth container */}
             <div className="p-3 md:p-10 lg:p-10 flex justify-between items-center flex-col md:flex-row lg:flex-row gap-[5vw]">
                <div className="w-full md:w-[50%] lg:w-[50%]">
                    <div>
                        <h1 className="text-[40px] leading-[1.3] font-bold mt-[26px] heading-text">FAQs</h1>
                        <p className="text-lg lg:text-[18px] leading-relaxed mt-[20px] text-[#CECECE]">This is a new space, and we're approaching things very differently. If none of these answers on the right address your concerns, please reach out. We would be more than happy to clear up anything.</p>
                    </div>
                    <div className="mt-[40px]">
                        <p className="text-[#a5a5a5]">
                            {/* Still you have questions? Please write your email address and we will contact you soon. Thank you! */}
                        </p>
                        <div className="mt-[20px] flex items-center">
                            {/* <input type="text" className="input input-bordered w-full max-w-xs bg-white text-black rounded-sm" /> */}
                            {/* <div className="btn btn-accent rounded-sm">Contact Me</div> */}
                            <div className="btn btn-accent btn-wide rounded-sm text-white" onClick={() => navigate("/contact-us-main/")}>Let's Talk</div>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-[20px] md:mt-0 lg:mt-0 md:w-[50%] lg:w-[50%]">
                    <FaqAccordion />
                </div>
            </div>
        </div>
    )
}