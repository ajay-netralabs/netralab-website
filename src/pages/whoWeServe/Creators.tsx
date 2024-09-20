import parse from 'html-react-parser';

import Creator from "../../../public/vids/creator.mp4"
import MarketOpportunity from "../../../public/vids/marketopp.mp4"

import Creator1Vid from "../../../public/vids/Creator-1.mp4"

import CreatorImg from "../../../public/Creator-img.png"
import CreatorImg2 from "../../../public/creator-img-2-updated.png"

import Creator1Icon from "../../../public/vids/creator-icon-1.mp4"
import Creator2Icon from "../../../public/vids/creator-icon-2.mp4"
import Creator3Icon from "../../../public/vids/creator-icon-3.mp4"

import Proof from "../../../public/vids/proof.mp4"
import Process from "../../../public/vids/process.mp4"


import CreatorProcess1 from "../../../public/creatore-process-1.svg"
import CreatorProcess2 from "../../../public/creator-process-2.svg"
import CreatorProcess3 from "../../../public/creator-process-3.svg"
import CreatorProcess4 from "../../../public/creator-process-4.svg"
import CreatorProcess5 from "../../../public/creator-process-5.svg"
import { useEffect, useState } from "react"
import { CreatorData } from "./data"
import { FaqAccordion } from "../../components"
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { addPrevLocation } from '../../store/locationSlice';

import Integrator1Bg from "../../../public/static_img/integrator-1-bg.jfif"



export const Creators = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [processNo, setProcessNo] = useState<string>("1")

    const [processData, setProcessData] = useState<string>("")

    useEffect(() => {
        const data = CreatorData[processNo]
        setProcessData(data)
    }, [processNo])


    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    // useEffect(() => {
    //     return () => {
    //         // localStorage.setItem("prev", "/creators")
    //         dispatch(addPrevLocation("/creators"))
    //     }
    // }, [])

    const handleNavigate = () => {
        dispatch(addPrevLocation("/creators"))
        navigate("/contact-us")
    }

    return (
        <div className="mt-1 md:mt-12 lg:mt-12">
            {/* first container */}
           <div className="p-3 md:p-10 lg:p-10 flex flex-col items-center md:flex-row lg:flex-row">
                <div className="w-full md:w-[60%] lg:w-[60%]">
                        <video
                            className="mix-blend-exclusion w-[100px] md:w-[115px] lg:w-[130px]"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={Creator} type="video/mp4"/>
                        </video>
                        <div className='relative'>
                            <div>
                                <img className="brightness-[0.4] mix-blend-color-dodge" src={Integrator1Bg} alt="" />
                            </div>
                            <div className='absolute top-0'>
                                <h1 className="text-xl md:text-[2.5vw] lg:text-[2.5vw] leading-relaxed font-bold mt-[26px] heading-text break-words">Transform Your Unique Idea into a Unicorn with AI Agents.</h1>
                                <p className="text-base md:text-[1.5vw] lg:text-[1.5vw] lg:leading-relaxed mt-[20px] text-[#CECECE]">
                                    Join our AI Agent Incubator and leverage our 
                                    <span className="font-bold text-accent capitalize"> Ground Truth<sup>®</sup> framework </span>
                                    to turn your ideas, concepts, IP, or patents into a thriving AI-powered business. 
                                </p>
                                <div className="mt-[40px]">
                                    <button className="btn btn-accent rounded-sm px-4 py-2 !text-white" onClick={() => handleNavigate()}>Apply Now</button>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="mt-[50%] md:mt-0 lg:mt-0 w-full md:w-[40%] lg:w-[40%] flex justify-center items-center">
                    <div className=" w-[70%] md:w-[50%] lg:w-[50%] flex justify-center items-center">
                        <video
                            className="mix-blend-exclusion"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={Creator1Vid} type="video/mp4"/>
                        </video>
                    </div>
                </div>
           </div> 


           {/* second container */}
           <div className="integrator-second-container p-3 md:p-10 lg:p-10 flex flex-col items-center md:flex-row lg:flex-row gap-[80px]">
                <div className="w-full md:w-[50%] lg:w-[50%]">
                        <video
                            className="mix-blend-exclusion w-[150px] md:w-[32%] lg:w-[32%]"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={MarketOpportunity} type="video/mp4"/>
                        </video>
                        <div className='leading-relaxed'> 
                            <h1 className="text-xl md:text-[2.5vw] lg:text-[2.5vw] leading-relaxed font-bold mt-[26px] heading-text break-words">Creators Like You Will Shape the Future of AI Agents</h1>
                            <div className="text-base md:text-[1.5vw] lg:text-[1.5vw] lg:leading-relaxed mt-[20px] text-[#CECECE]">
                                Ground Truth<sup>®</sup> empowers you to seize the massive opportunity in the Gen AI market and build the next generation of transformative solutions.
                            </div>
                    
                            <div className="mt-4 flex flex-col text-[#CECECE] text-base md:text-[1.1vw] lg:text-[1.1vw]">
                                <div className="flex items-center gap-3 glass-card-1">
                                    <div className="badge badge-secondary badge-xs"></div>
                                    <div className='text-[#CECECE] text-base md:text-[1.15vw] lg:text-[1.15vw]'>AI Agents will be at the forefront of a new paradigm, revolutionizing industries and redefining how work gets done.</div>
                                </div>

                                <div className="flex items-center gap-3 glass-card-2">
                                    <div className="badge badge-secondary badge-xs"></div>
                                    <div className='text-[#CECECE] text-base md:text-[1.15vw] lg:text-[1.15vw]'>Industries worldwide are turning to innovative AI solutions to overcome challenges and stay competitive.</div>
                                </div>

                                <div className="flex items-center gap-3 glass-card-3">
                                    <div className="badge badge-secondary badge-xs"></div>
                                    <div className='text-[#CECECE] text-base md:text-[1.15vw] lg:text-[1.15vw]'>Ground Truth<sup>®</sup> offers a perfect setting for creators to develop pioneering AI agents and launch thriving businesses.</div>
                                </div>
                            </div>
                        </div>
                
                </div>

                <div className="hidden md:flex lg:flex w-full md:w-[50%] lg:w-[50%] justify-center items-center">
                    <img src={CreatorImg} alt="" />
                </div>

                {/* for mobile render the feedback */}
                <div className="mt-[20px] md:mt-0 lg:mt-0 flex flex-col gap-[20px] md:hidden lg:hidden text-center border border-[#CECECE] p-[10px] rounded-lg">
                    <div className="">
                        <h1 className="font-bold text-[20px]">$2.6+ TRILLION</h1>
                        <p className="text-[16px] mt-[20px]">"Gen-AI-enabled agents hold the promise of accelerating the automation of a very long tail of workflows that would otherwise require inordinate amounts of resources to implement. And the potential extends even beyond these use cases: 60 to 70 percent of the work hours in today’s global economy...We have estimated that gen AI enterprise use cases could yield $2.6 trillion to $4.4 trillion annually in value across more than 60 use cases."</p>
                    </div>
                    <div className="border-t border-[#CECECE]">
                        <p>- McKinsey (May 2024)</p>
                    </div>
                </div>


           </div>

            {/* 3rd container */}
            <div className="p-3 md:p-10 lg:p-10">
                <div className="text-center">
                    <h1 className="text-xl md:text-[2.5vw] lg:text-[2.5vw] leading-relaxed font-bold mt-[26px] heading-text break-words">Why Join Our Agentic Incubator</h1>
                </div>
                {/* cards */}
                <div className="flex flex-col md:flex-row lg:flex-row flex-wrap items-center gap-[28px] justify-between mt-2 md:mt-4 lg:mt-4 leading-relaxed">
                    {/* card 1 */}
                    <div className=" glass-vertical-card-1 w-[100%] md:w-[30%] lg:w-[30%] h-[450px] p-[50px] flex flex-col justify-between items-center">
                        <div className='h-[20%] md:h-[40%] lg:h-[40%] flex items-end'>
                            <video
                                className="mix-blend-exclusion w-[80px]"
                                muted // @ts-ignore
                                autoPlay={"autoplay"}
                                preload="auto"
                                loop>
                                <source src={Creator1Icon} type="video/mp4"/>
                            </video>
                        </div>
                        <div className='h-[80%] md:h-[60%] lg:h-[60%] text-center text-[#CECECE]'>
                            <h2 className="font-bold text-xl md:text-[1.5vw] lg:text-[1.5vw] mt-[21px] heading-text leading-relaxed">Seiza a Unique Opportunity</h2>
                            <p className="text-lg md:text-[1.25vw] lg:text-[1.25vw] px-6 leading-relaxed mt-2">
                                The Generative AI market is exploding, presenting a once-in-a-generation opportunity akin to the internet boom. 
                            </p>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className="glass-vertical-card-2 w-[100%] md:w-[30%] lg:w-[30%] h-[450px] p-[50px] flex flex-col justify-between items-center">
                        <div className="h-[20%] md:h-[40%] lg:h-[40%] flex items-end">
                            <video
                                className="mix-blend-exclusion w-[80px]"
                                muted // @ts-ignore
                                autoPlay={"autoplay"}
                                preload="auto"
                                loop>
                                <source src={Creator2Icon} type="video/mp4"/>
                            </video>
                        </div>
                        <div className='h-[80%] md:h-[60%] lg:h-[60%] text-center text-[#CECECE]'>
                            <h2 className="font-bold text-xl md:text-[1.5vw] lg:text-[1.5vw] mt-[21px] heading-text leading-relaxed">Build on a Powerful Foundation</h2>
                            <p className="text-lg md:text-[1.25vw] lg:text-[1.25vw] px-6 leading-relaxed mt-2">         
                                Leverage our proprietary language chain framework, unmatched in the industry, to develop your unique Expert AI Agent™ and capture this massive market.
                            </p>
                        </div>
                    </div>

                    {/* card 3 */}
                    <div className=" glass-vertical-card-3 w-[100%] md:w-[30%] lg:w-[30%] h-[450px] p-[50px] flex flex-col justify-between items-center">
                        <div className="h-[20%] md:h-[40%] lg:h-[40%] flex items-end">
                            <video
                                className="mix-blend-exclusion w-[80px]"
                                muted // @ts-ignore
                                autoPlay={"autoplay"}
                                preload="auto"
                                loop>
                                <source src={Creator3Icon} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="h-[80%] md:h-[60%] lg:h-[60%] text-center text-[#CECECE]">
                            <h2 className="font-bold text-xl md:text-[1.5vw] lg:text-[1.5vw] mt-[21px] heading-text leading-relaxed">Have a Partner for Success</h2>
                            <p className="text-lg md:text-[1.25vw] lg:text-[1.25vw] px-6 leading-relaxed mt-2">
                                We're invested in your success. Our team of seasoned experts will work side-by-side with you to bring your Expert AI Agent™ to market – at no cost if you're approved for our incubation program.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* 4th container */}
            <div className="p-3 md:p-10 lg:p-10 ">
                <div className="w-full md:w-[70%] lg:w-[70%]">
                        <video
                            className="mix-blend-exclusion w-[100px] md:w-[115px] lg:w-[130px]"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={Proof} type="video/mp4"/>
                        </video>
                    <h1 className="text-xl md:text-[2.5vw] lg:text-[2.5vw] leading-relaxed font-bold mt-[26px] heading-text break-words">Unlocking the $78 Billion COBOL Time Bomb.</h1>
                    <p className="text-base md:text-[1.5vw] lg:text-[1.5vw] lg:leading-relaxed mt-[20px] text-[#CECECE]"> Joseph.ai, the world's first COBOL Batch Transformation Program Expert AI Agent, shatters the limitations of traditional modernization approaches, achieving unprecedented performance and cost savings.</p>
                </div>
                <div className="flex items-center gap-[80px] justify-between flex-col md:flex-row lg:flex-row">
                    <div className="flex flex-col w-full md:w-[50%] lg:w-[50%] text-base md:text-[1.1vw] lg:text-[1.1vw]">
                        <div className="flex items-center gap-3 glass-card-1">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div className='text-[#CECECE] text-base md:text-[1.15vw] lg:text-[1.15vw]'>Current COBOL modernization strategies rely on costly and time-consuming manual rewrites or inefficient lift-and-shift migrations, failing to fully leverage the power of modern cloud environments.</div>
                        </div>
                        <div className="flex items-center gap-3 glass-card-2">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div className='text-[#CECECE] text-base md:text-[1.15vw] lg:text-[1.15vw]'>
                                Joseph.ai's patented generative AI engine deciphers intricate COBOL business logic and transforms it into high-performance, cloud-native SQL, achieving unparalleled optimization. 
                            </div>
                        </div>
                        <div className="flex items-center gap-3 glass-card-3">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div className='text-[#CECECE] text-base md:text-[1.15vw] lg:text-[1.15vw]'>Joseph.ai achieves a staggering 60x performance increase over legacy mainframes, while slashing operating costs by 85%, delivering a compelling ROI with payback in less than a year.</div>
                        </div>
                    </div>
                    <div className="hidden md:flex lg:flex w-full md:w-[50%] lg:w-[50%] justify-center items-center">
                        <div className='w-full'>
                            <img src={CreatorImg2} alt="" />
                        </div>
                    </div>

                    {/* for mobile render the feedback */}
                    <div className="mt-12 md:mt-0 lg:mt-0 flex flex-col gap-[20px] md:hidden lg:hidden text-center border border-[#CECECE] p-[10px] rounded-lg">
                        <div className="">
                            <h1 className="font-bold text-[20px]">$78 Billion Market Opportunity</h1>
                            <p className="text-[16px] mt-[20px]">"I developed a patent to optimize COBOL code for batch processing, significantly improving cost and speed. Transforming the code was costly and time-consuming, but partnering with Netra Labs' incubation program led to the creation of the first COBOL Batch Transformation Program Expert AI Agent, targeting a $78 billion market!"</p>
                        </div>
                        <div className="border-t border-[#CECECE]">
                            <p>- Joseph J. (35+ Years in Batch Processing, patented the HyperBatch™ method used by Joseph.ai)
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* process  */}
            <div className="hidden md:block lg:block">
                <div className="flex flex-col items-center justify-center text-center">
                        <video
                            className="mix-blend-exclusion w-[100px] md:w-[115px] lg:w-[130px]"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={Process} type="video/mp4"/>
                        </video>
                    <h1 className="text-xl md:text-[2.5vw] lg:text-[2.5vw] leading-relaxed font-bold mt-[26px] heading-text break-words">From Concept to Launch: A Clear Path to Success.</h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-[40px] mt-[20%] md:mt-[15%] lg:mt-[8%] relative">
                    <div className="absolute h-[350px] w-[350px]">
                        <img src={CreatorProcess1} alt="" onClick={() => setProcessNo("1")} className={`hover:cursor-pointer absolute top-[-40%] right-[50%] translate-x-[50%] ${processNo === "1" ? "opacity-[1] !top-[-17%] z-10" : "opacity-[0.4]"}`}/>  
                        <img src={CreatorProcess2} alt="" onClick={() => setProcessNo("2")} className={`hover:cursor-pointer absolute top-[10%] right-[-40%] ${processNo === "2" ? "opacity-[1] !right-[-15%] z-10" : "opacity-[0.4]"}`}/>
                        <img src={CreatorProcess3} alt="" onClick={() => setProcessNo("3")} className={`hover:cursor-pointer absolute top-[60%] right-[-40%] ${processNo === "3" ? "opacity-[1] !right-[-15%] z-10" : "opacity-[0.4]"}`}/>
                        <img src={CreatorProcess4} alt="" onClick={() => setProcessNo("4")} className={`hover:cursor-pointer absolute top-[60%] left-[-40%] ${processNo === "4" ? "opacity-[1] !left-[-15%] z-10" : "opacity-[0.4]"}`}/>
                        <img src={CreatorProcess5} alt="" onClick={() => setProcessNo("5")} className={`hover:cursor-pointer absolute top-[10%] left-[-40%] ${processNo === "5" ? "opacity-[1] !left-[-15%] z-10" : "opacity-[0.4]"}`}/>
                    </div>
                    <div className="border-[20px] border-[#323449] rounded-full h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[400px] lg:w-[400px] flex items-center justify-center creator-circle">
                        <div className="m-10 text-center text-base md:text-[1.1vw] lg:text-[1.1vw]">
                            {parse(processData)}
                        </div>
                    </div>

                </div>
                <div className="flex justify-center  mt-[15%] md:mt-[10%] lg:mt-[5%]">
                    <button className="btn btn-accent rounded-sm px-4 py-2 !text-white" onClick={() => handleNavigate()}>Request Demo</button>
                </div>
            </div>

            {/* process for mobile view */}
            <div className='flex flex-col gap-6 items-center justify-center mt-4 md:hidden lg:hidden'>
                {/* icons */}
                <div className='flex flex-wrap gap-2 justify-center'>
                        <img src={CreatorProcess1} alt="" onClick={() => setProcessNo("1")} className={`hover:cursor-pointer ${processNo === "1" ? "opacity-[1]" : "opacity-[0.4]"}`}/>  
                        <img src={CreatorProcess2} alt="" onClick={() => setProcessNo("2")} className={`hover:cursor-pointer ${processNo === "2" ? "opacity-[1]" : "opacity-[0.4]"}`}/>
                        <img src={CreatorProcess3} alt="" onClick={() => setProcessNo("3")} className={`hover:cursor-pointer ${processNo === "3" ? "opacity-[1]" : "opacity-[0.4]"}`}/>
                        <img src={CreatorProcess4} alt="" onClick={() => setProcessNo("4")} className={`hover:cursor-pointer ${processNo === "4" ? "opacity-[1]" : "opacity-[0.4]"}`}/>
                        <img src={CreatorProcess5} alt="" onClick={() => setProcessNo("5")} className={`hover:cursor-pointer ${processNo === "5" ? "opacity-[1]" : "opacity-[0.4]"}`}/>
                </div>
                <div className="border-[20px] border-[#323449] rounded-full h-[350px] w-[350px] flex items-center justify-center creator-circle">
                        <div className="m-10 text-center text-base md:text-[1.1vw] lg:text-[1.1vw]">
                            {parse(processData)}
                        </div>
                </div>
                <div className="flex justify-center">
                    <button className="btn btn-accent rounded-sm px-4 py-2 !text-white" onClick={() => handleNavigate()}>Request Demo</button>
                </div>
            </div>


            <div className="p-3 md:p-10 lg:p-10 flex justify-between items-center flex-col md:flex-row lg:flex-row gap-[5vw] mt-[40px]">
                <div className="w-full md:w-[50%] lg:w-[50%]">
                    <div>
                        <h1 className="text-[40px] leading-[66px] font-bold mt-[26px] heading-text">FAQs</h1>
                        <p className="text-base lg:text-[18px] lg:leading-[28px] mt-[20px] text-[#CECECE]">This is a new space, and we're approaching things very differently, so if none of these answers on the right address your concerns. Please reach out, we would be more than happy to clear up anything.</p>
                    </div>
                    <div className="mt-[40px]">
                        <p className="text-[#a5a5a5]">
                            {/* Still you have questions? Please write your email address and we will contact you soon. Thank you! */}
                        </p>
                        <div className="mt-[20px] flex items-center">
                            {/* <input type="text" className="input input-bordered w-full max-w-xs bg-white text-black rounded-sm" /> */}
                            {/* <div className="btn btn-accent rounded-sm">Contact Me</div> */}
                            <div className="btn btn-accent btn-wide rounded-sm text-white" onClick={() => navigate("/contact-us")}>Let's Talk</div>
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