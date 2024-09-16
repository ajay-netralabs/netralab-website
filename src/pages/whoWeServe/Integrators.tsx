import jsFramework from "../../../public/static_img/JavaScript-frameworks.svg"
import designThinking from "../../../public/static_img/Design-thinking.svg"
import settings from "../../../public/static_img/Settings.svg"
import teamwork from "../../../public/static_img/Team-work.svg"
import working from "../../../public/static_img/Working.svg"

import Integrator from "../../../public/vids/Integrator.mp4"
import Problem from "../../../public/vids/problem.mp4"
import Solution from "../../../public/vids/solution.mp4"
import Howitworks from "../../../public/vids/howitworks.mp4"

import integrator1Icon from "../../../public/vids/integrator-icon-1.mp4"
import integrator2Icon from "../../../public/vids/integrator-icon-2.mp4"
import integrator3Icon from "../../../public/vids/home-icon-3.mp4"

import Integrator1Vid from "../../../public/vids/Integrators-1.mp4"
import Integrator2Vid from "../../../public/vids/Integrators-2.mp4"
import Integrator3Vid from "../../../public/vids/Integrators-3.mp4"
import { FaqAccordion } from "../../components"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addPrevLocation } from "../../store/locationSlice"


export const Integrators = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    // useEffect(() => {
    //     return () => {
    //         // localStorage.setItem("prev", "/integrators")
    //         dispatch(addPrevLocation("/integrators"))
    //     }
    // }, [])

    const handleNavigate = () => {
        dispatch(addPrevLocation("/integrators"))
        navigate("/contact-us")
    }

    return (
        <div className="mt-1 md:mt-12 lg:mt-12">
            {/* first container */}
           <div className="p-3 md:p-10 lg:p-10 flex gap-[20px] flex-col items-start mt-[10px] md:flex-row lg:flex-row">
                <div className="w-full md:w-[60%] lg:w-[60%]">
                    <video
                        className="mix-blend-exclusion w-[100px] md:w-[115px] lg:w-[130px]"
                        muted // @ts-ignore
                        autoPlay={"autoplay"}
                        preload="auto"
                        loop>
                        <source src={Integrator} type="video/mp4"/>
                    </video>
                        <h1 className="text-xl lg:text-[40px] lg:leading-[66px] font-bold mt-[26px] heading-text">Agentic Workflows for System Integrators</h1>
                        <p className="text-base lg:text-[18px] lg:leading-[28px] mt-[20px] text-[#CECECE]"><span className="text-[18px] font-bold leading-[28px]">Ground Truth®</span> is the world’s first language chain framework built to empower SIs to build and deploy custom AI agents that redefine the way processes are automated for your customers.</p>
                </div>
                <div className="mt-[20px] md:mt-0 lg:mt-0 w-full md:w-[40%] lg:w-[40%] flex justify-center items-center">
                    <div className="integrator-vid2-container  w-[70%] md:w-[50%] lg:w-[50%] flex justify-center items-center">
                        <video
                            className="mix-blend-exclusion"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={Integrator1Vid} type="video/mp4"/>
                        </video>
                    </div>
                </div>
           </div> 


           {/* second container */}
           <div className="integrator-second-container mt-1 md:mt-12 lg:mt-12 p-3 md:p-10 lg:p-10 flex gap-[20px] flex-col-reverse items-center md:flex-row lg:flex-row">
                <div className="w-full md:w-[40%] lg:w-[40%] flex justify-center items-center">
                    <div className="w-[70%] md:w-[50%] lg:w-[50%] flex justify-center items-center">
                        <video
                            className="mix-blend-exclusion"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={Integrator2Vid} type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <div className="w-full mt-[20px] md:mt-0 lg:mt-0 md:w-[60%] lg:w-[60%]">
                        <video
                            className="mix-blend-exclusion w-[100px] md:w-[115px] lg:w-[130px]"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={Problem} type="video/mp4"/>
                        </video>
                        <h1 className="text-xl lg:text-[40px] lg:leading-[66px] font-bold mt-[26px] heading-text">System Integrators have had limited success in deploying AI Agents in production.</h1>
                        <p className="text-base lg:text-[18px] lg:leading-[28px] mt-[20px] text-[#CECECE]"><span className=" text-[18px] font-bold leading-[28px]">96% of executives agree</span> that leveraging AI Agent ecosystems will be a significant opportunity for their organizations in the next three years</p>
                
                        <div className="mt-[40px] flex flex-col gap-[18px]">
                        <div className="flex items-center gap-3">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div className="text-[#B1B1B1]"><span className="text-[18px] font-bold leading-[28px]">General-purpose frameworks</span> like Lang-chain limit the ability of SIs to refine AI Agents for their customer requirements.</div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div className="text-[#B1B1B1]">These siloed agents make integration into complex enterprise workflows a <span className="text-[18px] font-bold leading-[28px]">time-consuming and unreliable process.</span></div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div className="text-[#B1B1B1]">Ultimately, trying to build a custom AI Agent <span className=" text-[18px] font-bold leading-[28px]">drains resources and slows down time-to-market.</span>.</div>
                        </div>
                    </div>
                
                </div>
           </div>


            {/* third container */}
            <div className="mt-1 md:mt-12 lg:mt-12 p-3 md:p-10 lg:p-10">
                <div className="">
                    <video
                            className="mix-blend-exclusion w-[100px] md:w-[115px] lg:w-[130px]"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={Solution} type="video/mp4"/>
                        </video>
                    <h1 className="text-xl lg:text-[40px] lg:leading-[66px] font-bold mt-[26px] heading-text">The AI Agent platform built for System Integrators.</h1>
                </div>
                <div className="mt-12 flex items-center justify-between flex-col md:flex-row lg:flex-row">
                    <div className="flex flex-col gap-[20px] text-[#B1B1B1]">
                        <div className="flex items-center gap-3 glass-card-1">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div><span className=" text-[18px] font-bold leading-[28px]">Orchestrate powerful AI Agents</span> with our unique proprietary framework, built for the complexity of enterprise needs.</div>
                        </div>
                        <div className="flex items-center gap-3 glass-card-2">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div>
                                <span className=" text-[18px] font-bold leading-[28px]">"Lift and Shift"</span> 
                                agent setups into your customers' environments, run entirely within their  
                                <span className=" text-[18px] font-bold leading-[28px]">secure networks.</span>
                             </div>
                        </div>
                        <div className="flex items-center gap-3 glass-card-3">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div>Scale AI Agents across customers with <span className=" text-[18px] font-bold leading-[28px]">ease, leveraging built-in governance and complete control over agent orchestration.</span></div>
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
            <div className="mt-1 md:mt-12 lg:mt-12 p-3 md:p-10 lg:p-10">
                <div className="text-center">
                    <h1 className="leading-[66px] font-bold text-xl lg:text-[40px] lg:leading-[66px] heading-text">Benefits</h1>
                </div>
                {/* cards */}
                <div className="flex flex-wrap items-center gap-[28px] justify-between mt-2 md:mt-12 lg:mt-12">
                    {/* card 1 */}
                    <div className="glass-vertical-card-1 w-full md:w-[30%] lg:w-[30%] min-h-[400px] p-[50px]">
                        <video
                            className="mix-blend-exclusion w-[80px]"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={integrator1Icon} type="video/mp4"/>
                        </video>
                        <h2 className="font-bold text-[20px] mt-[21px] heading-text">No Limits</h2>
                        <p className="mt-[20px">
                            Build AI solutions of any scope with a proprietary framework that's free from the constraints of Lang-chain or other generic solutions.
                        </p>
                    </div>

                    {/* card 2 */}
                    <div className="glass-vertical-card-2 w-[100%] md:w-[30%] lg:w-[30%] min-h-[400px] p-[50px]">
                        <video
                            className="mix-blend-exclusion w-[80px]"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={integrator2Icon} type="video/mp4"/>
                        </video>
                        <h2 className="font-bold text-[20px] mt-[20px] heading-text">Deploy Anywhere</h2>
                        <p className="mt-[20px">         
                            Deploy AI Agents securely in any environment, even without internet access, ensuring complete control over client data.
                        </p>
                    </div>

                    {/* card 3 */}
                    <div className=" glass-vertical-card-3 w-[100%] md:w-[30%] lg:w-[30%] min-h-[400px] p-[50px]">
                        <video
                            className="mix-blend-exclusion w-[80px]"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={integrator3Icon} type="video/mp4"/>
                        </video>
                        <h2 className="font-bold text-[20px] mt-[20px] heading-text">Scale & Control</h2>
                        <p className="mt-[20px">
                            Orchestrate agents across your entire client base, track consumption with precision, and enjoy the flexibility of our licensing model.
                        </p>
                    </div>

                </div>
            </div>

            {/* 5th container */}
            <div className="integrator-second-container mt-1 md:mt-12 lg:mt-12 p-3 md:p-10 lg:p-10 flex flex-col justify-center items-center third-container">
                <video
                    className="mix-blend-exclusion w-[140px] md:w-[160px] lg:w-[180px]"
                    muted // @ts-ignore
                    autoPlay={"autoplay"}
                    preload="auto"
                    loop>
                    <source src={Howitworks} type="video/mp4"/>
                </video>
                <h1 className="leading-[66px] font-bold mt-[26px] text-center text-xl lg:text-[40px] lg:leading-[66px] heading-text">Smooth Integration, just like our AI Agents.</h1>
                <div className="btn btn-accent rounded-sm mt-[35px] hover:cursor-pointer" onClick={() => handleNavigate()}>Request Demo</div>
                {/* cards */}
                <div className="flex flex-wrap justify-evenly mt-2 md:mt-[90px]  lg:mt-[90px]">
                    {/* card 1 */}
                    <div className="flex items-center w-full md:w-[30%] lg:w-[30%] p-5 pr-0 min-w-[266px]">
                        {/* icon */}
                        <div className="flex flex-col">
                            <img src={jsFramework} alt="illustration" />

                            <div>
                                Reach out to our team to discuss
                                <span className=" text-[18px] font-bold leading-[28px]"> how the Ground Truth® framework </span> 
                                can empower System Integrator to build Expert AI Agents™.
                            </div>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className="flex items-center w-full md:w-[30%] lg:w-[30%] p-5 pr-0 min-w-[266px]">
                        {/* icon */}
                        <div className="flex flex-col">
                            <img src={designThinking} alt="illustration"  />

                            <div>
                                We’ll schedule a consultation to explore your specific needs and determine if 
                                <span className=" text-[18px] font-bold leading-[28px]"> Ground Truth® is the right solution </span> 
                                for your AI agent projects.
                               
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full md:w-[30%] lg:w-[30%] p-5 pr-0 min-w-[266px]">
                        {/* icon */}
                        <div className="flex flex-col">
                            <img src={settings} alt="illustration" />

                            <div>
                            Once we’re aligned, our experts will help you define the 
                            <span className=" text-[18px] font-bold leading-[28px]"> ideal environment and configuration for our AI Agents </span> 
                            to operate within your systems.
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full md:w-[30%] lg:w-[30%] p-5 pr-0 min-w-[266px]">
                        {/* icon */}
                        <div className="flex flex-col">
                            <img src={teamwork} alt="illustration" />

                            <div>
                                We’ll work closely with your team to
                                <span className=" text-[18px] font-bold leading-[28px]"> quickly onboard Ground Truth®, ensuring a smooth transition and minimal disruption to your operations. </span> 
                            </div>
                        </div>
                    </div>


                    <div className="flex items-center w-full md:w-[30%] lg:w-[30%] p-5 pr-0 min-w-[266px]">
                        {/* icon */}
                        <div className="flex flex-col">
                            <img src={working} alt="illustration" />

                            <div>
                                <span className=" text-[18px] font-bold leading-[28px]"> Begin creating powerful AI Agents immediately. </span> 
                                We offer additional fine-tuning and customization to optimize each agent for its specific use case.
                            </div>
                        </div>
                    </div>

                </div>
            </div>

             {/* sixth container */}
             <div className="p-3 md:p-10 lg:p-10 flex justify-between items-center flex-col md:flex-row lg:flex-row gap-[20px]">
                <div className="w-full md:w-[50%] lg:w-[50%]">
                    <div>
                        <h1 className="text-[40px] leading-[66px] font-bold mt-[26px] heading-text">FAQs</h1>
                        <p className="text-base lg:text-[18px] lg:leading-[28px] mt-[20px] text-[#CECECE]">These are the frequently asked questions by our users , if you have similar doubts you can read these answers. We hope it will help you to better understanding.</p>
                    </div>
                    <div className="mt-[40px]">
                        <p className="text-[#a5a5a5]">
                            Still you have questions? Please write your email address and we will contact you soon. Thank you!
                        </p>
                        <div className="mt-[20px] flex items-center">
                            <input type="text" className="input input-bordered w-full max-w-xs bg-white text-black rounded-sm" />
                            <div className="btn btn-accent rounded-sm">Contact Me</div>
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