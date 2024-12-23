import { useEffect, useState } from "react"
// import HeroSection from "../../../public/hero.jpg"
// import { cardsData, IntegrationData } from "./data"


import { useDispatch } from "react-redux";
import { resetPrevLocation } from "../../store/locationSlice";

import { useNavigate } from "react-router-dom";

import Lottie from "lottie-react";

import EfficiencyAnimation from "../../../public/lottie/Efficiency .json"
import CustomizationAnimation from "../../../public/lottie/Customization.json"
import SecurityAnimation from "../../../public/lottie/Security.json"

import SlowAnimation from "../../../public/lottie/Slow.json"

import IntegrateAnimations from "../../../public/lottie/Integrate.json"
import ControlAnimation from "../../../public/lottie/Control.json"
import ScalabilityAnimation from "../../../public/lottie/Chart.json"

import SimplificationAnimation from "../../../public/lottie/Connection.json"
import LimitedAnimation from "../../../public/lottie/Limited.json"
import PerformanceAnimation from "../../../public/lottie/Performance.json"

import flowAnimation from "../../../public/lottie/Flow.json"
import trainAnimation from "../../../public/lottie/train.json"
import cubeAnimation from "../../../public/lottie/cubes.json"
import optimizationAnimation from "../../../public/lottie/Optimization.json"

import ReactGA from 'react-ga4';
import { Helmet } from "react-helmet-async";

export const Langchain = () => {

    // only send analytics on production environment
    const { PROD } = import.meta.env
    if(PROD) {
        ReactGA.send({
            hitType: "pageview",
            page: "/language-chain/",
            title: "Enterprise language chain page",
        })
    }

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [activeTab, setActiveTab] = useState<string>("d0")

    
    useEffect(() => {
        window.scrollTo(0,0)
        return () => {
            // localStorage.setItem("prev", "/")
            dispatch(resetPrevLocation())
        }
    }, [])


    // when user is scrolling, update the active tab based on the scroll position
    // const changeNav = () => {
    //     if(loading) return
    //     const sections:any = document.querySelectorAll(".section");
    //     let current = "d0";
    //     if(sections.length) {
    //         sections.forEach((section:any) => {
    //             const sectionTop = section.offsetTop;
    //             const scrollTop = window.scrollY;

    //             if(scrollTop <= sectionTop + 200 && scrollTop > sectionTop) {
    //                 current = section.getAttribute("id")
    //             }
    //         });

    //         if(activeTab !== current) {
    //             setActiveTab(current)
    //         }
    //     }

    // }

    const changeNav = () => {
        const tabElement = document.getElementById("section-tabs")

        if(tabElement) {
            const sectionTop = tabElement?.offsetTop
            const navbarElement:any = document.getElementsByClassName("navbar")[0]

            if(navbarElement.offsetTop) {

                if(navbarElement.offsetTop < sectionTop) {
                    tabElement.classList.remove("!z-[15]")
                }else {
                    tabElement.classList.add("!z-[15]")
                }

            }

            // if(sectionTop < scrollTop){
            //    if(navbarElement) {
            //     navbarElement.classList.add("ajay")
            //    }
            // }else {
            //    navbarElement && navbarElement.classList.remove("ajay")
            // }
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', changeNav);
        return () => {
          window.removeEventListener('scroll', changeNav);
        }
      }, [])

    
    const [shouldDisplayModal, setShouldDisplayModal] = useState<boolean>(true)

    const showModalOnScroll = () => {
        const targetContainer = document.getElementById("d3")

        if(targetContainer && shouldDisplayModal){
            const top = targetContainer.offsetTop
            const scrollPosition = window.scrollY
            if(scrollPosition + 250 >= top) {
                setShouldDisplayModal(false)
                // open()
                // setOpen(true)
                const modal = document.getElementById('survey-modal')
                if(modal) {
                    modal.classList.add("modal-center")
                    //@ts-ignore
                    modal.showModal()
                }

            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', showModalOnScroll);
        return () => {
          window.removeEventListener('scroll', showModalOnScroll);
        }
    })

    useEffect(() => {
       const timer = window.setTimeout(() => {
            if(shouldDisplayModal){
                setShouldDisplayModal(false)
                // open()
                // setOpen(true)
                const modal = document.getElementById('survey-modal')
                //@ts-ignore
                if(modal) modal.showModal()
            }
        }, 20000)

        return () => window.clearTimeout(timer)
    })


    const handleNavigate = () => {
        navigate("/contact-us-main/")
    }

    const [limitation, setLimitation] = useState<number>(1)

    const [engineData, setEngineData] = useState<number>(1)




    const scrollTOId = (id:string) => {
        const element = document.getElementById(id)

        if(element){
            element.scrollIntoView({ block: 'center',  behavior: 'smooth' })
        }
    }

    useEffect(() => {
        scrollTOId(activeTab)
    }, [activeTab])


    const getLimitationData = (step:number) => {
        if(step === 1){
            return `While great for prototyping, these frameworks often lack the flexibility needed for highly specialized enterprise use cases.`
        }else if(step == 2) {
            return ` The abstraction layers that make these tools easy to use can introduce performance overhead, becoming problematic at enterprise scale.`
        }
        else if(step === 3) {
            return `Generic frameworks typically aren't built with enterprise-grade security in mind, leaving potential vulnerabilities when handling sensitive data.`
        }
        else if(step === 4) {
            return `Enterprises often struggle to integrate these tools with their existing tech stacks and workflows, leading to siloed AI initiatives.`
        }
        else if(step === 5) {
            return `Data scientists find themselves constrained by the framework's design choices, unable to fine-tune models or workflows to the degree required for optimal performance.`
        }
        else {
            return `As projects grow from prototypes to production systems, these frameworks often struggle to scale efficiently, leading to increased costs and decreased performance. While tools like LangChain have their place in the AI ecosystem, particularly for smaller projects or rapid prototyping, they simply weren't designed to meet the complex, multifaceted demands of enterprise-scale AI deployment. Enterprises need a solution that offers the ease of use these frameworks provide, but with the power, flexibility, and security required for production-grade AI systems.`
        }
    }


    const getEngineData = (step:number) => {
        if(step === 1){
            return <div>
                    <div className="flex gap-2 items-center my-2">
                        <div className="badge badge-secondary badge-xs"></div>
                        <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw]"><span className="font-bold uppercase text-accent">Custom Language Chain Framework:</span> Offers lower-level abstraction for building customized workflows—your AI agents' tracks.</p>
                    </div>
                    <div className="flex gap-2 items-center my-2">
                        <div className="badge badge-secondary badge-xs"></div>
                        <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw]"><span className="font-bold uppercase text-accent">Conditional Logic and Control Flow:</span> Implement complex routing and decision-making within your workflows, ensuring AI agents follow optimized paths.</p>
                    </div>
            </div>
        }else if(step === 2) {
            return <>
                <div className="flex gap-2 items-center my-2">
                    <div className="badge badge-secondary badge-xs"></div>
                    <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw]"><span className="font-bold uppercase text-accent">Advanced Model Fine-Tuning:</span> Utilize techniques like PEFT with LoRA or Adapters to fine-tune models efficiently, enhancing performance without excessive resource consumption.</p>
                </div>
                <div className="flex gap-2 items-center my-2">
                    <div className="badge badge-secondary badge-xs"></div>
                    <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw]"><span className="font-bold uppercase text-accent">Hyperparameter Optimization:</span> Adjust learning rates, batch sizes, and more to maximize model efficiency.</p>
                </div>
            </>
        }
        else if(step === 3) {
            return <>
                <div className="flex gap-2 items-center my-2">
                    <div className="badge badge-secondary badge-xs"></div>
                    <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw]"><span className="font-bold uppercase text-accent">All-in-One Development Environment:</span> Design, fine-tune, and deploy AI agents within a single, cohesive platform.</p>
                </div>
                <div className="flex gap-2 items-center my-2">
                    <div className="badge badge-secondary badge-xs"></div>
                    <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw]"><span className="font-bold uppercase text-accent">Visual Workflow Builder:</span> Manage and orchestrate AI agents through an intuitive drag-and-drop interface, similar to how a control station oversees train operations.</p>
                </div>
            </>
        }
        else if(step === 4) {
            return <>
                <div className="flex gap-2 items-center my-2">
                    <div className="badge badge-secondary badge-xs"></div>
                    <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw]"><span className="font-bold uppercase text-accent">Data Encryption and Access Control:</span> Protect sensitive information with robust encryption and authentication mechanisms throughout the AI lifecycle.</p>
                </div>
                <div className="flex gap-2 items-center my-2">
                    <div className="badge badge-secondary badge-xs"></div>
                    <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw]"><span className="font-bold uppercase text-accent">Compliance Management:</span> Ensure all AI agents operate within regulatory requirements, maintaining data integrity and privacy.</p>
                </div>
            </>
        }
        else {
            return <>
                <div className="flex gap-2 items-center my-2">
                    <div className="badge badge-secondary badge-xs"></div>
                    <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw]"><span className="font-bold uppercase text-accent">Compute Efficiency:</span> Reduce compute costs by up to 75% with intelligent resource management and optimization features.</p>
                </div>
                <div className="flex gap-2 items-center my-2">
                    <div className="badge badge-secondary badge-xs"></div>
                    <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw]"><span className="font-bold uppercase text-accent">Scalable Deployment:</span> Easily scale your AI agents to handle increased workloads without compromising performance or incurring excessive costs.</p>
                </div>
            </>
        }
       
    }


    // const getSteps = (step:number) => {
    //     if(step === 1) {
    //         return "The first step in monitoring and optimization is to establish a set of performance metrics to track the effectiveness of language models. These metrics may include accuracy, precision, recall, and F1 score. By regularly monitoring these metrics, organizations can identify any deviations or decline in performance and take necessary actions to address them."
    //     } else if(step === 2) {
    //         return "Collecting feedback from users and stakeholders is essential for understanding the strengths and weaknesses of language models. This feedback can be gathered through user surveys, customer support interactions, or automated feedback mechanisms. Analyzing the feedback helps identify areas where the models can be optimized to better meet user expectations and requirements."
    //     } else if(step === 3) {
    //         return "Language models need to adapt to evolving data patterns to maintain their relevance and accuracy. Analyzing data patterns helps identify emerging trends, changes in user behavior, or shifts in language usage. By understanding these patterns, organizations can optimize their models to better align with the current needs and preferences of their users."
    //     } else if(step === 4) {
    //         return "Based on the insights gained from performance metrics tracking, feedback analysis, and data pattern analysis, organizations can refine and fine-tune their language models. This process involves adjusting the model parameters, retraining with updated data, and incorporating new techniques or algorithms to improve performance. Continuous refinement ensures that the models stay up-to-date and deliver accurate results."
    //     }else {
    //         return "Monitoring and optimization is an iterative process that requires ongoing efforts. As language models are deployed and used in real-world scenarios, new challenges and opportunities may arise. Organizations need to continuously monitor the performance, collect feedback, analyze data patterns, and refine the models to achieve optimal results. By embracing an iterative approach, enterprises can ensure that their language models evolve and adapt to changing requirements."
    //     }
    // }

    const getAnimation = (step: number) => {
        if(step === 1){
            return <Lottie animationData={CustomizationAnimation} loop style={{ height: 200}}/>
        }else if(step == 2) {
            return <Lottie animationData={SlowAnimation} loop style={{ height: 200}}/>
        }
        else if(step == 3) {
            return <Lottie animationData={SecurityAnimation} loop style={{ height: 200}}/>
        }
        else if(step == 4) {
            return <Lottie animationData={IntegrateAnimations} loop style={{ height: 200}}/>
        }
        else if(step == 5) {
            return <Lottie animationData={ControlAnimation} loop style={{ height: 200}}/>
        }else{
            return <Lottie animationData={ScalabilityAnimation} loop style={{ height: 200}}/>
        }
    }


    const getEngineAnimation = (step: number) => {
        if(step === 1){
            return <Lottie animationData={flowAnimation} loop style={{ height: 200}}/>
        }else if(step == 2) {
            return <Lottie animationData={trainAnimation} loop style={{ height: 200}}/>
        }
        else if(step == 3) {
            return <Lottie animationData={cubeAnimation} loop style={{ height: 200}}/>
        }
        else if(step == 4) {
            return <Lottie animationData={SecurityAnimation} loop style={{ height: 200}}/>
        }
       else{
            return <Lottie animationData={optimizationAnimation} loop style={{ height: 200}}/>
        }
    }

    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://fe.sitedataprocessing.com/cscripts/cnySuUiE57-5a988b7d.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);

    return (
    <div>

            <Helmet>
                <title>Netra Labs | Enterprise Language Chain</title>
                <meta name="description" content="Enterprise Language Chain" />
                <script>
                    {
                        `!function () {var reb2b = window.reb2b = window.reb2b || [];if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"];reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true;script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/1N5W0H0GEWO5.js.gz";var first = document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script, first);};reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("1N5W0H0GEWO5");}()`
                    }
                </script>
            </Helmet>

        {/* header */}
        <div className="w-full h-[400px] md:h-[70vh] lg:h-[70vh] flex flex-col justify-center items-center designer">
            {/* <img className="w-full h-full object-cover" src={Designer} alt="language chain" /> */}
            <div className="m-3 md:m-12 lg:m-12">
                <p className="text-base md:text-[1.2vw] lg:text-[1.2vw] leading-[1.4] text-[#CECECE]">For Data Scientists Focused on Deploying Expert AI Agents™</p>
                <h1 className="text-xl md:text-[2.8vw] lg:text-[2.8vw] leading-[1.2] font-bold heading-text break-words mt-4">
                 Enterprise Language Chains: The Key to Production-Grade AI Agents
                </h1>
                <p className="text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-[1.4] text-[#CECECE] mt-4">Discover how Enterprise Language Chains empower data scientists to build efficient, secure, and scalable AI agents tailored for enterprise 
                demands.</p>

                <button className="btn btn-accent rounded-sm px-6 py-4 mt-4 !text-white" onClick={() => handleNavigate()}>Request Demo</button>
                
            </div>
        </div>

        {/* tabs */}
        <div id="section-tabs"  className="sticky top-0 py-8 bg-base-100 z-10 hidden md:flex lg:flex text-base md:text-[1.2vw] lg:text-[1.2vw] lg:leading-[1.4] justify-around">
            {/* <div className=""> */}
                <p className={`${activeTab === "d1" ? "text-accent border-b border-b-accent" : ""} hover:cursor-pointer`} onClick={() => setActiveTab("d1")}>Enterprise Struggles</p>
                <p className={`${activeTab === "d2" ? "text-accent border-b border-b-accent" : ""} hover:cursor-pointer`} onClick={() => setActiveTab("d2")}>Beyond LangChain</p>
                <p className={`${activeTab === "d3" ? "text-accent border-b border-b-accent" : ""} hover:cursor-pointer`} onClick={() => setActiveTab("d3")}>Enterprise Language Chain</p>
                <p className={`${activeTab === "d4" ? "text-accent border-b border-b-accent" : ""} hover:cursor-pointer`} onClick={() => setActiveTab("d4")}>The Solution</p>
                <p className={`${activeTab === "d5" ? "text-accent border-b border-b-accent" : ""} hover:cursor-pointer`} onClick={() => setActiveTab("d5")}>Start the AI Journey</p>
            {/* </div> */}
        </div>

        <div id="d1" className="!pt-6  p-3 md:p-10 lg:p-10 designer-1 section">
            <div className="m-3 md:m-12 lg:m-12 !mt-0">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="text-xl md:text-[2.8vw] lg:text-[2.8vw] leading-[1.2] font-bold heading-text break-words">Enterprises Are Struggling to Deploy Production-Grade AI Agents</h1>
                        <div className="w-[80vw] text-center">
                            <p className="text-lg md:text-[1.5vw] lg:text-[1.5vw] lg:leading-[1.4] text-[#CECECE] mt-2 ">Despite the rapid evolution of generative AI, enterprises face significant hurdles when implementing AI agents in real-world scenarios. Large language models (LLMs) like GPT-4 are powerful but inherently generalist, 
                            lacking the specialization required for complex, domain-specific tasks.</p>
                        </div>
                    </div>
                    <div className="text-center flex justify-center items-center mt-2">
                        <p className="w-[75vw] text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-[1.4] text-[#CECECE] mt-2">To simplify AI development, abstraction layers like LangChain have emerged, allowing for quicker solution development. However, this comes at a cost:</p>
                    </div>
                </div>
                <div className="">
                    {/* <p className="text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-[1.4] text-[#CECECE] mt-4">To simplify AI development, abstraction layers like LangChain have emerged, allowing for quicker solution development. However, this comes at a cost:</p>    */}

                {/* cards */}
                <div className="m-3 md:m-12 lg:m-12">
                        <div className="flex flex-wrap justify-around text-center gap-4">
                            <div className="w-full md:w-[30%] lg:w-[30%] h-[350px]  xl:h-[400px] 2xl:h-[450px] flex flex-col bg-white rounded-xl text-black items-center justify-center  p-4">
                                <div className="h-[40%]">
                                    <Lottie animationData={SimplificationAnimation} loop style={{ height: "100%"}}/>
                                </div>
                                <div className="h-[60%]">
                                    <h1 className="font-bold text-xl md:text-[1.5vw] lg:text-[1.5vw] mt-[21px] heading-text leading-[1.4]">Oversimplification</h1>
                                    <p className="text-lg md:text-[1.25vw] lg:text-[1.25vw] px-6 leading-[1.4] mt-2">Like trains running on time, every process and model operates consistently and reliably.</p>
                                </div>
                            </div>
                            <div className="w-full md:w-[30%] lg:w-[30%] h-[350px]  xl:h-[400px] 2xl:h-[450px] flex flex-col bg-white rounded-xl text-black items-center justify-center  p-4">
                                <div className="h-[40%]">
                                    <Lottie animationData={LimitedAnimation} loop style={{ height: "100%"}}/>
                                </div>
                                <div className="h-[60%]">
                                    <h1 className="font-bold text-xl md:text-[1.5vw] lg:text-[1.5vw] mt-[21px] heading-text leading-[1.4]">Limited Customization</h1>
                                    <p className="text-lg md:text-[1.25vw] lg:text-[1.25vw] px-6 leading-[1.4] mt-2">Enterprises require tailored AI agents that adapt to specific workflows and requirements, which generic tools fail to provide.</p>
                                </div>
                            </div>
                            <div className="w-full md:w-[30%] lg:w-[30%] h-[350px]  xl:h-[400px] 2xl:h-[450px] flex flex-col bg-white rounded-xl text-black items-center justify-center  p-4">
                                <div className="h-[40%]">
                                    <Lottie animationData={PerformanceAnimation} loop style={{ height: "100%"}}/>
                                </div>
                                <div className="h-[60%]">
                                    <h1 className="font-bold text-xl md:text-[1.5vw] lg:text-[1.5vw] mt-[21px] heading-text leading-[1.4]">Performance Issues</h1>
                                    <p className="text-lg md:text-[1.25vw] lg:text-[1.25vw] px-6 leading-[1.4] mt-2">Reliance on generalized functions results in inefficiencies and limited control over AI behavior.</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="flex justify-center mt-4"> */}
                            
                            {/* <button className="btn btn-accent rounded-sm px-6 py-4 mt-2 !text-white" onClick={() => handleNavigate()}>Request Demo</button> */}
                        {/* </div> */}
                    </div>

                    <div className="text-center flex justify-center items-center">
                        <p className="w-[80vw] text-base md:text-[1.5vw] lg:text-[1.5vw] leading-[1.4] text-[#CECECE]">The result is a landscape where AI solutions often fall short of enterprise-grade requirements, making it challenging to move projects from proof-of-concept to production. Over-reliance on generalized frameworks has left 
                        organizations with limited control, hindering innovation and competitive advantage.</p>
                    </div>
                    {/* <div className="flex flex-col justify-between items-center md:flex-row lg:flex-row">
                        <div className="mt-[40px] w-full md:w-[45%] lg:w-[45%]">
                            <div className="glass-card-1">
                                <div className="badge badge-secondary badge-xs"></div>
                                <div className="text-base md:text-[1.15vw] lg:text-[1.15vw] text-[#CECECE]">Oversimplification: Generic frameworks often oversimplify AI complexities, leading to suboptimal and generic solutions.</div>
                            </div>
                            <div className="glass-card-2">
                                <div className="badge badge-secondary badge-xs"></div>
                                <div className="text-base md:text-[1.15vw] lg:text-[1.15vw] text-[#CECECE]">Limited Customization: Enterprises require tailored AI agents that adapt to specific workflows and requirements, which generic tools fail to provide.
                                </div>
                            </div>
                            <div className="glass-card-3">
                                <div className="badge badge-secondary badge-xs"></div>
                                <div className="text-base md:text-[1.15vw] lg:text-[1.15vw] text-[#CECECE]">Performance Issues: Reliance on generalized functions results in inefficiencies and limited control over AI behavior.</div>
                            </div>
                        </div>
                        
                        <div className="w-full md:w-[45%] lg:w-[45%]">
                            <p className="text-base md:text-[1.15vw] lg:text-[1.15vw] text-[#CECECE] text-center">The result is a landscape where AI solutions often fall short of enterprise-grade requirements, making it challenging to move projects from proof-of-concept to production. Over-reliance on generalized frameworks has left 
                                organizations with limited control, hindering innovation and competitive advantage.</p>
                        </div>
                    </div> */}

                </div>
                <div className="flex justify-center mt-4">
                    <button className="btn btn-accent rounded-sm px-6 py-4 mt-2 !text-white" onClick={() => handleNavigate()}>Request Demo</button>
                </div>

            </div>
        </div>

        <div id="d2" className="p-3 md:p-10 lg:p-10 designer-2 section">
            <div className="m-3 md:m-12 lg:m-12 !mt-0">
                <div className="flex flex-col justify-center items-center text-center">
                    <h1 className="text-xl md:text-[2.8vw] lg:text-[2.8vw] leading-[1.2] font-bold heading-text break-words">The Limitations of Generic AI Frameworks</h1>
                    {/* <p className="text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-[1.4] text-[#CECECE] mt-2 italic">Why tools like LangChain fall short in enterprise environments</p> */}
                </div>
                <div className="">
                    <div className="text-center flex justify-center items-center">
                        <p className="w-[80vw] text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-[1.4] mt-2 text-[#CECECE]">In response to the challenges of AI deployment, frameworks like LangChain emerged as a beacon of hope. These tools promised to simplify the process of building language model applications, offering pre-built components and abstractions to speed up development. However, as enterprises began adopting these frameworks, limitations quickly became apparent:</p>
                    </div>
                    <div className="white-background rounded-xl mt-3 md:mt-12 lg:mt-12">
                        {/* <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw] lg:leading-[1.4] mt-4 text-black">In response to the challenges of AI deployment, frameworks like LangChain emerged as a beacon of hope. These tools promised to simplify the process of building language model applications, offering pre-built components and abstractions to speed up development. However, as enterprises began adopting these frameworks, limitations quickly became apparent:</p> */}
                        <div className="flex flex-col-reverse justify-around items-center md:flex-row lg:flex-row">
                            {/* headings */}
                            <div className="text-black w-full  md:w-[50%] lg:w-[50%]">
                                <div className={`hover:bg-[#CECECE] hover:cursor-pointer md:rounded-tl-xl md:rounded-br-xl lg:rounded-tl-xl lg:rounded-br-xl ${limitation === 1 ? "bg-[#CECECE]" : ""}`} onClick={() => setLimitation(1)}>
                                    <div className="p-4 flex gap-4 items-center justify-start">
                                        <div className="w-[20%] lg:w-[10%] min-w-[50px] md:min-w-[80px]">
                                            <Lottie animationData={CustomizationAnimation} loop className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"/>
                                        </div>
                                        <div className="w-[70%]">
                                            <p className={`text-lg md:text-[1.2vw] lg:text-[1.2vw] font-semibold hover:cursor-pointer ${limitation === 1 ? "text-accent" : ""}`}>Lack of Customization</p>
                                            <div className="hidden md:block lg:block text-base md:text-[1vw] lg:text-[1vw]">
                                                {/* {getLimitationData(1)} */}
                                                {`${getLimitationData(1).slice(0, 101)}...`}
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className={`hover:bg-[#CECECE] hover:cursor-pointer md:rounded-tr-xl md:rounded-br-xl lg:rounded-tr-xl lg:rounded-br-xl ${limitation === 2 ? "bg-[#CECECE]" : ""}`} onClick={() => setLimitation(2)}>
                                    <div className="p-4 flex gap-4 items-center justify-start">
                                        <div className="w-[20%] lg:w-[10%] min-w-[50px] md:min-w-[80px]">
                                            <Lottie animationData={SlowAnimation} loop className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"/>
                                        </div>
                                        <div className="w-[70%]">
                                            <p className={`text-lg md:text-[1.2vw] lg:text-[1.2vw] font-semibold  ${limitation === 2 ? "text-accent" : ""}`}>Performance Bottlenecks</p>
                                            <div className="hidden md:block lg:block text-base md:text-[1vw] lg:text-[1vw]">
                                            {/* {getLimitationData(2)} */}
                                            {`${getLimitationData(2).slice(0, 102)}...`}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`hover:bg-[#CECECE] hover:cursor-pointer md:rounded-tr-xl md:rounded-br-xl lg:rounded-tr-xl lg:rounded-br-xl ${limitation === 3 ? "bg-[#CECECE]" : ""}`} onClick={() => setLimitation(3)}>
                                    <div className="p-4 flex gap-4 items-center justify-start">
                                        <div className="w-[20%] lg:w-[10%] min-w-[50px] md:min-w-[80px]">
                                            <Lottie animationData={SecurityAnimation} loop className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"/>
                                        </div>
                                        <div className="w-[70%]">
                                            <p className={`text-lg md:text-[1.2vw] lg:text-[1.2vw] font-semibold hover:cursor-pointer ${limitation === 3 ? "text-accent" : ""}`}>Security Concerns</p>
                                            <div className="hidden md:block lg:block text-base md:text-[1vw] lg:text-[1vw]">
                                            {/* {getLimitationData(3)} */}
                                            {`${getLimitationData(3).slice(0, 99)}...`}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`hover:bg-[#CECECE] hover:cursor-pointer md:rounded-tr-xl md:rounded-br-xl lg:rounded-tr-xl lg:rounded-br-xl ${limitation === 4 ? "bg-[#CECECE]" : ""}`} onClick={() => setLimitation(4)}>
                                    <div className="p-4 flex gap-4 items-center justify-start">
                                        <div className="w-[20%] lg:w-[10%] min-w-[50px] md:min-w-[80px]">
                                            <Lottie animationData={IntegrateAnimations} loop className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"/>
                                        </div>
                                        <div className="w-[70%]">
                                            <p className={`text-lg md:text-[1.2vw] lg:text-[1.2vw] font-semibold hover:cursor-pointer ${limitation === 4 ? "text-accent" : ""}`}>Integration Hurdles</p>
                                            <div className="hidden md:block lg:block text-base md:text-[1vw] lg:text-[1vw]">
                                            {/* {getLimitationData(4)} */}
                                            {`${getLimitationData(4).slice(0, 97)}...`}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`hover:bg-[#CECECE] hover:cursor-pointer md:rounded-tr-xl md:rounded-br-xl lg:rounded-tr-xl lg:rounded-br-xl ${limitation === 5 ? "bg-[#CECECE]" : ""}`}  onClick={() => setLimitation(5)}>
                                    <div className="p-4 flex gap-4 items-center justify-start">
                                        <div className="w-[20%] lg:w-[10%] min-w-[50px] md:min-w-[80px]">
                                            <Lottie animationData={ControlAnimation} loop className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"/>
                                        </div>
                                        <div className="w-[70%]">
                                            <p className={`text-lg md:text-[1.2vw] lg:text-[1.2vw] font-semibold hover:cursor-pointer ${limitation === 5 ? "text-accent" : ""}`}>Limited Control</p>
                                            <div className="hidden md:block lg:block text-base md:text-[1vw] lg:text-[1vw]">
                                                {/* {getLimitationData(5)} */}
                                                {`${getLimitationData(5).slice(0, 98)}...`}
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div className={`hover:bg-[#CECECE] hover:cursor-pointer rounded-tr-xl rounded-bl-xl rounded-br-xl md:rounded-br-none lg:rounded-br-none ${limitation === 6 ? "bg-[#CECECE]" : ""}`} onClick={() => setLimitation(6)}>
                                    <div className="p-4 flex gap-4 items-center justify-start">
                                        <div className="w-[20%] lg:w-[10%] min-w-[50px] md:min-w-[80px]">
                                            <Lottie animationData={ScalabilityAnimation} loop className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"/>
                                        </div>
                                        <div className="w-[70%]">
                                            <p className={`text-lg md:text-[1.2vw] lg:text-[1.2vw] font-semibold hover:cursor-pointer ${limitation === 6 ? "text-accent" : ""}`}>Scalability Issues</p>
                                            <div className="hidden md:block lg:block text-base md:text-[1vw] lg:text-[1vw]">
                                                {/* {getLimitationData(6)} */}
                                                {`${getLimitationData(6).slice(0, 117)}...`}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>   

                            <div className="text-black p-10 text-center w-full  md:w-[50%] lg:w-[50%] text-wrap text-lg md:text-[1.3vw] lg:text-[1.3vw] leading-[1.4] px-5 mx-5">
                                {getAnimation(limitation)}
                                {getLimitationData(limitation)}
                            </div>
                            
                        </div>

                    </div>
                    <div className="flex justify-center mt-4">
                        <button className="btn btn-accent rounded-sm px-6 py-4 mt-2 !text-white" onClick={() => handleNavigate()}>Request Demo</button>
                    </div>
                </div>
            </div>
        </div>


        <div id="d3" className="p-3 md:p-10 lg:p-10 designer-3 section">
            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-xl md:text-[2.8vw] lg:text-[2.8vw] leading-[1.2] font-bold heading-text break-words">Introducing Enterprise Language Chains</h1>
                {/* <p className="text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-[1.4] text-[#CECECE] mt-2 italic">Your high-speed rail network for AI deployment</p> */}
                <div className="text-center flex justify-center items-center">
                    <p className="w-[80vw] text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-[1.4] mt-2 text-[#CECECE]">Imagine the vast and intricate network of a country's railway system. Trains, representing language models, carry vital cargo—data and insights—across the expanse of enterprise systems.  This well-oiled railway network is engineered to handle massive loads, operate with precision, and ensure that everything reaches its destination without delays or errors. An Enterprise Language Chain is akin to this robust railway network. It's designed to facilitate the seamless operation of AI agents within large organizations, ensuring:</p>
                </div>
            </div>
            
            {/* cards */}
            <div className="m-3 md:m-12 lg:m-12">
                <div className="flex flex-wrap justify-around text-center gap-4">
                    <div className="w-full md:w-[30%] lg:w-[30%] h-[350px]  xl:h-[400px] 2xl:h-[450px] flex flex-col bg-white rounded-xl text-black items-center justify-center  p-4">
                        <div className="h-[40%]">
                            <Lottie animationData={EfficiencyAnimation} loop style={{ height: "100%"}}/>
                        </div>
                        <div className="h-[60%]">
                            <h1 className="font-bold text-xl md:text-[1.5vw] lg:text-[1.5vw] mt-[21px] heading-text leading-[1.4]">Efficiency</h1>
                            <p className="text-lg md:text-[1.25vw] lg:text-[1.25vw] px-6 leading-[1.4] mt-2">Like trains running on time, every process and model operates consistently and reliably.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[30%] lg:w-[30%] h-[350px]  xl:h-[400px] 2xl:h-[450px] flex flex-col bg-white rounded-xl text-black items-center justify-center  p-4">
                        <div className="h-[40%]">
                            <Lottie animationData={CustomizationAnimation} loop style={{ height: "100%"}}/>
                        </div>
                        <div className="h-[60%]">
                            <h1 className="font-bold text-xl md:text-[1.5vw] lg:text-[1.5vw] mt-[21px] heading-text leading-[1.4]">Customization</h1>
                            <p className="text-lg md:text-[1.25vw] lg:text-[1.25vw] px-6 leading-[1.4] mt-2">Custom tracks for each AI task, ensuring optimal performance for specific business needs.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[30%] lg:w-[30%] h-[350px]  xl:h-[400px] 2xl:h-[450px] flex flex-col bg-white rounded-xl text-black items-center justify-center  p-4">
                        <div className="h-[40%]">
                            <Lottie animationData={SecurityAnimation} loop style={{ height: 150}}/>
                        </div>
                        <div className="h-[60%]">
                            <h1 className="font-bold text-xl md:text-[1.5vw] lg:text-[1.5vw] mt-[21px] heading-text leading-[1.4]">Security</h1>
                            <p className="text-lg md:text-[1.25vw] lg:text-[1.25vw] px-6 leading-[1.4] mt-2">Safety signals at every junction, protecting your sensitive data and ensuring compliance.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-2">
                    <button className="btn btn-accent rounded-sm px-6 py-4 mt-2 !text-white" onClick={() => handleNavigate()}>Request Demo</button>
                </div>
            </div>


        </div>


        <div id="d4" className="p-3 md:p-10 lg:p-10 designer-4 section">
            <div className="m-3 md:m-12 lg:m-12 !mt-0">
                <div className="flex flex-col justify-center items-center text-center">
                    <h1 className="text-xl md:text-[2.8vw] lg:text-[2.8vw] leading-[1.2] font-bold heading-text break-words">Ground Truth<sup>®</sup>: The Engine Behind Your Enterprise Language Chain</h1>
                    <div className="text-center flex justify-center items-center">
                        <p className="w-[80vw] text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-[1.4] text-[#CECECE] mt-2">At Netra Labs, we've developed Ground Truth<sup>®</sup>, a platform designed from the ground up to provide the robust infrastructure of an Enterprise Language Chain. It's the technology that designs, builds, and maintains your AI railway network, enabling your AI agents to operate with precision and reliability.</p>
                    </div>
                    <div className="text-center flex justify-center items-center">
                        <p className="w-[75vw] text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-[1.4] mt-4 text-[#CECECE]">How Ground Truth® Powers Your AI Railway Network:</p>
                    </div>
                </div>
            </div>
            {/* <p className="text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-[1.4] mt-4 text-[#CECECE]">How Ground Truth® Powers Your AI Railway Network:</p> */}
            <div className="m-3 md:m-12 lg:m-12">
                <div className="white-background rounded-xl mt-[40px] text-black">
                    {/* headings */}
                    <div className="flex flex-col-reverse justify-around items-center md:flex-row lg:flex-row">
                            {/* headings */}
                            <div className="text-black w-full md:w-[50%] lg:w-[50%]">
                                <div className={`hover:bg-[#CECECE] hover:cursor-pointer md:rounded-tl-xl md:rounded-br-xl lg:rounded-tl-xl lg:rounded-br-xl ${engineData === 1 ? "bg-[#CECECE]" : ""}`} onClick={() => setEngineData(1)}>
                                    <div className="p-2 flex gap-4 items-center justify-start">
                                        <div className="w-[20%] lg:w-[10%] min-w-[50px] md:min-w-[80px]">
                                            <Lottie animationData={flowAnimation} loop className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"/>

                                        </div>
                                        <div className="w-[70%]">
                                            <p className={`text-lg md:text-[1.2vw] lg:text-[1.2vw] font-semibold hover:cursor-pointer ${engineData === 1 ? "text-accent" : ""}`}>Engineered Tracks (Custom Workflows)</p>
                                        </div>

                                    </div>
                                </div>

                                <div className={`hover:bg-[#CECECE] hover:cursor-pointer md:rounded-tr-xl md:rounded-br-xl lg:rounded-tr-xl lg:rounded-br-xl ${engineData === 2 ? "bg-[#CECECE]" : ""}`} onClick={() => setEngineData(2)}>
                                    <div className="p-2 flex gap-4 items-center">
                                        <div className="w-[20%] lg:w-[10%] min-w-[50px] md:min-w-[80px]">
                                            <Lottie animationData={trainAnimation} loop className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"/>
                                        </div>
                                        <div className="w-[70%]">
                                            <p className={`text-lg md:text-[1.2vw] lg:text-[1.2vw] font-semibold  ${engineData === 2 ? "text-accent" : ""}`}>High-Performance Trains (Optimized AI Agents)</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={`hover:bg-[#CECECE] hover:cursor-pointer md:rounded-tr-xl md:rounded-br-xl lg:rounded-tr-xl lg:rounded-br-xl ${engineData === 3 ? "bg-[#CECECE]" : ""}`} onClick={() => setEngineData(3)}>
                                    <div className="p-2 flex gap-4 items-center">
                                        <div className="w-[20%] lg:w-[10%] min-w-[50px] md:min-w-[80px]">
                                            <Lottie animationData={cubeAnimation} loop className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"/>
                                        </div>
                                        <div className="w-[70%]">
                                            <p className={`text-lg md:text-[1.2vw] lg:text-[1.2vw] font-semibold hover:cursor-pointer ${engineData === 3 ? "text-accent" : ""}`}>Central Control Station (Unified Platform)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`hover:bg-[#CECECE] hover:cursor-pointer md:rounded-tr-xl md:rounded-br-xl lg:rounded-tr-xl lg:rounded-br-xl ${engineData === 4 ? "bg-[#CECECE]" : ""}`} onClick={() => setEngineData(4)}>
                                    <div className="p-2 flex gap-4 items-center">
                                        <div className="w-[20%] lg:w-[10%] min-w-[50px] md:min-w-[80px]">
                                            <Lottie animationData={SecurityAnimation} loop className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"/>
                                        </div>
                                        <div className="w-[70%]">
                                            <p className={`text-lg md:text-[1.2vw] lg:text-[1.2vw] font-semibold hover:cursor-pointer ${engineData === 4 ? "text-accent" : ""}`}>Safety Protocols (Security Measures)</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={`hover:bg-[#CECECE] hover:cursor-pointer rounded-tr-xl rounded-bl-xl rounded-br-xl md:rounded-br-none lg:rounded-br-none  md:rounded-tr-xl md:rounded-bl-xl lg:rounded-tr-xl lg:rounded-bl-xl ${engineData === 5 ? "bg-[#CECECE]" : ""}`}  onClick={() => setEngineData(5)}>
                                    <div className="p-2 flex gap-4 items-center">
                                        <div className="w-[20%] lg:w-[10%] min-w-[50px] md:min-w-[80px]">
                                            <Lottie animationData={optimizationAnimation} loop className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"/>
                                        </div>
                                        <div className="w-[70%]">
                                            <p className={`text-lg md:text-[1.2vw] lg:text-[1.2vw] font-semibold hover:cursor-pointer ${engineData === 5 ? "text-accent" : ""}`}>Efficient Fuel Use (Resource Optimization)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>   

                            <div className="text-black w-full md:w-[50%] lg:w-[50%] text-wrap text-base md:text-[1.1vw] lg:text-[1.1vw] px-5 mx-5">
                                {getEngineAnimation(engineData)}
                                {getEngineData(engineData)}
                            </div>
                            
                        </div>

                    {/* <div className="flex flex-col gap-4 mx-6">
                        <div className="mt-4">
                            <h1 className="font-bold text-xl md:text-[1.2vw] lg:text-[1.2vw] heading-text leading-[1.4]">Engineered Tracks (Custom Workflows)</h1>
                            <div className="flex gap-2 items-center ml-4 my-2">
                                <div className="badge badge-secondary badge-xs"></div>
                                <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw] leading-[1.4]">Custom Language Chain Framework: Offers lower-level abstraction for building customized workflows—your AI agents' tracks.</p>
                            </div>
                            <div className="flex gap-2 items-center ml-4 my-2">
                                <div className="badge badge-secondary badge-xs"></div>
                                <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw] leading-[1.4]">Conditional Logic and Control Flow: Implement complex routing and decision-making within your workflows, ensuring AI agents follow optimized paths.</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-xl md:text-[1.2vw] lg:text-[1.2vw] heading-text leading-[1.4]">High-Performance Trains (Optimized AI Agents)</h1>
                            <div className="flex gap-2 items-center ml-4 my-2">
                                <div className="badge badge-secondary badge-xs"></div>
                                <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw] leading-[1.4]">Advanced Model Fine-Tuning: Utilize techniques like PEFT with LoRA or Adapters to fine-tune models efficiently, enhancing performance without excessive resource consumption.</p>
                            </div>
                            <div className="flex gap-2 items-center ml-4 my-2">
                                <div className="badge badge-secondary badge-xs"></div>
                                <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw] leading-[1.4]">Hyperparameter Optimization: Adjust learning rates, batch sizes, and more to maximize model efficiency.</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-xl md:text-[1.2vw] lg:text-[1.2vw] heading-text leading-[1.4]">Central Control Station (Unified Platform)</h1>
                            <div className="flex gap-2 items-center ml-4 my-2">
                                <div className="badge badge-secondary badge-xs"></div>
                                <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw] leading-[1.4]">All-in-One Development Environment: Design, fine-tune, and deploy AI agents within a single, cohesive platform.</p>
                            </div>
                            <div className="flex gap-2 items-center ml-4 my-2">
                                <div className="badge badge-secondary badge-xs"></div>
                                <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw] leading-[1.4]">Visual Workflow Builder: Manage and orchestrate AI agents through an intuitive drag-and-drop interface, similar to how a control station oversees train operations.</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-xl md:text-[1.2vw] lg:text-[1.2vw] heading-text leading-[1.4]">Safety Protocols (Security Measures)</h1>
                            <div className="flex gap-2 items-center ml-4 my-2">
                                <div className="badge badge-secondary badge-xs"></div>
                                <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw] leading-[1.4]">Data Encryption and Access Control: Protect sensitive information with robust encryption and authentication mechanisms throughout the AI lifecycle.</p>
                            </div>
                            <div className="flex gap-2 items-center ml-4 my-2">
                                <div className="badge badge-secondary badge-xs"></div>
                                <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw] leading-[1.4]">Compliance Management: Ensure all AI agents operate within regulatory requirements, maintaining data integrity and privacy.</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-xl md:text-[1.2vw] lg:text-[1.2vw] heading-text leading-[1.4]">Efficient Fuel Use (Resource Optimization)</h1>
                            <div className="flex gap-2 items-center ml-4 my-2">
                                <div className="badge badge-secondary badge-xs"></div>
                                <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw] leading-[1.4]">Compute Efficiency: Reduce compute costs by up to 75% with intelligent resource management and optimization features.</p>
                            </div>
                            <div className="flex gap-2 items-center ml-4 my-2">
                                <div className="badge badge-secondary badge-xs"></div>
                                <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw] leading-[1.4]">Scalable Deployment: Easily scale your AI agents to handle increased workloads without compromising performance or incurring excessive costs.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="m-3 md:m-12 lg:m-12">
                    <div className="flex justify-center mt-2">
                        <button className="btn btn-accent rounded-sm px-6 py-4 mt-2 !text-white" onClick={() => handleNavigate()}>Request Demo</button>
                    </div>
                </div>
        </div>


        <div id="d5" className="p-3 md:p-10 lg:p-10 designer-5 section">
            <div className="m-3 md:m-12 lg:m-12 !mt-0">
                <div className="flex flex-col justify-center items-center text-center">
                    <h1 className="text-xl md:text-[2.8vw] lg:text-[2.8vw] leading-[1.2] font-bold heading-text break-words">Be part of our exclusive Pilot Program</h1>
                    <div className="text-center flex justify-center items-center">
                        <p className="w-[80vw] text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-[1.4] text-[#CECECE] mt-2">Ready to build an Expert AI Agent? Join our Pilot Program and be among the first to leverage the power of true Enterprise Language Chains. See for yourself how Ground Truth<sup>®</sup> can transform your AI initiatives from experimental projects to production-grade, enterprise-scale solutions.</p>
                    </div>
                    
                    <div className="m-3 md:m-12 lg:m-12">
                        <div className="flex justify-center mt-2">
                            <button className="btn btn-accent rounded-sm px-6 py-4 mt-2 !text-white" onClick={() => handleNavigate()}>Request Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    )
}