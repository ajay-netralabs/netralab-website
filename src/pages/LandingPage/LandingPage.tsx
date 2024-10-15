
import "./landing-page.css"
// import GT_LOGO from "../../../public/GT_logo.png"
import GT_LOGO from "../../../public/netralabs.png"
import { Link, useNavigate } from "react-router-dom"
import { useRef } from "react"
import ReactGA from 'react-ga4';
import { Helmet } from "react-helmet-async";
import Slider from "react-slick";
import parse from 'html-react-parser';
import CreatorImg2 from "../../../public/creator-img-2-updated.png"
import video1 from "../../../public/landing-page/videos/1.mp4"


export const LandingPage = () => {


    // only send analytics on production environment
    const { PROD } = import.meta.env
    if(PROD) {
        ReactGA.send({
            hitType: "pageview",
            page: "/language-chain/",
            title: "Enterprise language chain page",
        })
    }

    const sliderRef = useRef()

    // const [activeTab, setActiveTab] = useState<string>("1")

    const navigate = useNavigate()

    // const [shouldDisplayModal, setShouldDisplayModal] = useState<boolean>(true)
    // const [open, setOpen] = useState<boolean>(false)


    // useEffect(() => {
    //     const modal = document.getElementById('my_modal_2')
    //     //@ts-ignore
    //     if(modal) modal.showModal()
    // })


    // const showModalOnScroll = () => {
    //     const featuresContainer = document.getElementById("features")

    //     if(featuresContainer && shouldDisplayModal){
    //         const top = featuresContainer.offsetTop
    //         const scrollPosition = window.scrollY
    //         if(scrollPosition + 250 >= top) {
    //             setShouldDisplayModal(false)
    //             // open()
    //             // setOpen(true)
    //             const modal = document.getElementById('my_modal_2')
    //             //@ts-ignore
    //             if(modal) modal.showModal()

    //         }
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', showModalOnScroll);
    //     return () => {
    //       window.removeEventListener('scroll', showModalOnScroll);
    //     }
    // })

    // useEffect(() => {
    //    const timer = window.setTimeout(() => {
    //         if(shouldDisplayModal){
    //             setShouldDisplayModal(false)
    //             // open()
    //             // setOpen(true)
    //             const modal = document.getElementById('my_modal_2')
    //             //@ts-ignore
    //             if(modal) modal.showModal()
    //         }
    //     }, 20000)

    //     return () => window.clearTimeout(timer)
    // })


    const getCarouselData = (activeTab:string) => {
        if(activeTab === "1") {
            return `<p>Experience a unique agentic framework built from the ground up, independent of generalized platforms like LangChain or Ollama. This provides lower-level abstraction for unparalleled control over AI agent development, allowing you to implement custom architectures and algorithms specific to your domain.</p>`
        }else if(activeTab === "2") {
            return `<p>Manage the entire AI development lifecycle within one platform—from synthetic data generation and preprocessing, model selection, adapter configuration, hyperparameter tuning, agentic workflow creation, to validation and human feedback. This integration streamlines your workflow and increases productivity by eliminating the need to use multiple disparate tools.</p>`
        }
        else if(activeTab === "3") {
            return `<p>Ground Truth<sup>®</sup> handles the complexities of deployment for you. <span className="font-bold text-accent uppercase"> Deploy your AI agents effortlessly across any cloud provider or private infrastructure without worrying about configuring environments, managing dependencies, or integrating disparate systems.</span> This allows you to focus on critical problem-solving and hypothesis testing, knowing that your models can be easily and reliably deployed.</p>`
        }
        else if(activeTab === "4") {
            return `<p>Utilize our patent-pending LoRA Adapter technology to fine-tune models efficiently, even with limited computational resources. By updating only a subset of model parameters, you achieve faster training times and significantly reduce computational load. This results in <span className="font-bold text-accent uppercase">4x faster inference</span> and <span className="font-bold text-accent uppercase">75% reduction in compute costs</span>, enabling you to deploy high-performance AI agents without the typical resource constraints associated with large models.</p>`
        }
        else {
            return `<p>Quickly validate outputs and adjust your models on the fly using Ground Truth's validation mode. Seamlessly integrate human feedback into the training process, allowing you to refine and improve your AI agents continuously. <span className="font-bold text-accent uppercase">This iterative approach enhances model accuracy and effectiveness</span>, and all of this is managed within a single platform—eliminating the need for manual interventions or separate systems for validation and feedback.</p>`
        }
    }

    const calculateSlide = (goto:string) => {
       
        let distance = Number(goto) - 1
        
        if(sliderRef.current){
            // @ts-ignore
            sliderRef.current?.slickGoTo(distance)
            // setActiveTab(goto)
        }
    }

    type slideOption = "next" | "prev"
    const handleSlide = (goto: slideOption) => {
        if(sliderRef.current) {
            console.log("slide", sliderRef.current)

            if(goto === "prev") {
                // @ts-ignore
                sliderRef.current?.slickPrev()
            }else {
                // @ts-ignore
                sliderRef.current?.slickNext()
            }
        }

    }

    const handleNavigationToSurvey = () => {
        navigate("/data-scientist-survey")
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
          customPaging: (i:number) => (
            <div
              className="w-[50px] md:w-[100px] lg:w-[100px]" 
              onMouseOver={() => calculateSlide(`${i + 1}`)}
            >
              {i === 0 ? (
                <div className="slide-icon icon-1 border border-white flex justify-center items-center px-4 py-2" onMouseOver={() => calculateSlide("1")}>
                    <svg onMouseOver={() => calculateSlide("1")} className="w-16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="#ffffff" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="34.52" cy="11.43" r="5.82"></circle><circle cx="53.63" cy="31.6" r="5.82"></circle><circle cx="34.52" cy="50.57" r="5.82"></circle><circle cx="15.16" cy="42.03" r="5.82"></circle><circle cx="15.16" cy="19.27" r="5.82"></circle><circle cx="34.51" cy="29.27" r="4.7"></circle><line x1="20.17" y1="16.3" x2="28.9" y2="12.93"></line><line x1="38.6" y1="15.59" x2="49.48" y2="27.52"></line><line x1="50.07" y1="36.2" x2="38.67" y2="46.49"></line><line x1="18.36" y1="24.13" x2="30.91" y2="46.01"></line><line x1="20.31" y1="44.74" x2="28.7" y2="48.63"></line><line x1="17.34" y1="36.63" x2="31.37" y2="16.32"></line><line x1="20.52" y1="21.55" x2="30.34" y2="27.1"></line><line x1="39.22" y1="29.8" x2="47.81" y2="30.45"></line><line x1="34.51" y1="33.98" x2="34.52" y2="44.74"></line></g></svg>
                </div>
              ) : null}

              {i === 1 ? (
                <div className="slide-icon icon-2 border border-white flex justify-center items-center px-4 py-2" onMouseOver={() => calculateSlide("2")}>
                    <svg onMouseOver={() => calculateSlide("2")} className="w-16" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7.5,15.5h-5a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V20H12a1,1,0,0,0,0-2H8.5V16.5A1,1,0,0,0,7.5,15.5Zm-1,5h-3v-3h3ZM4,8.858V13a1,1,0,0,0,2,0V8.858a4,4,0,1,0-2,0ZM5,3A2,2,0,1,1,3,5,2,2,0,0,1,5,3ZM20,15.142V12a1,1,0,0,0-2,0v3.142a4,4,0,1,0,2,0ZM19,21a2,2,0,1,1,2-2A2,2,0,0,1,19,21ZM16.5,8.5h5a1,1,0,0,0,1-1v-5a1,1,0,0,0-1-1h-5a1,1,0,0,0-1,1V4H12a1,1,0,0,0,0,2h3.5V7.5A1,1,0,0,0,16.5,8.5Zm1-5h3v3h-3Z"></path></g></svg>
                </div>
              ): null}

              {i === 2 ? (
                <div className="slide-icon icon-3 border border-white flex justify-center items-center px-4 py-2" onMouseOver={() => calculateSlide("3")}>
                    <svg onMouseOver={() => calculateSlide("3")} className="w-16" viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><path className="cls-1" d="M4.5,35.48,14.78,24,4.5,12.51h7.09L21.88,24,11.59,35.48Zm35.51,0H25.13a3.2,3.2,0,0,1,0-6.38H40a3.2,3.2,0,1,1,.57,6.38A5.42,5.42,0,0,1,40,35.48Z"></path></g></svg>
                </div>
              ): null}

              {i === 3 ? (
                <div className="slide-icon icon-4 border border-white flex justify-center items-center px-4 py-2" onMouseOver={() => calculateSlide("4")}>
                    <svg onMouseOver={() => calculateSlide("4")} className="w-16" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.9585 9.75C16.5443 9.75 16.2085 9.41421 16.2085 9L16.2085 2C16.2085 1.58579 16.5443 1.25 16.9585 1.25C17.3727 1.25 17.7085 1.58579 17.7085 2L17.7085 9C17.7085 9.41421 17.3727 9.75 16.9585 9.75Z" fill="inherit"></path> <path fillRule="evenodd" clipRule="evenodd" d="M7 5.75C9.07107 5.75 10.75 7.42893 10.75 9.5C10.75 11.5711 9.07107 13.25 7 13.25C4.92893 13.25 3.25 11.5711 3.25 9.5C3.25 7.42893 4.92893 5.75 7 5.75ZM9.25 9.5C9.25 8.25736 8.24264 7.25 7 7.25C5.75736 7.25 4.75 8.25736 4.75 9.5C4.75 10.7426 5.75736 11.75 7 11.75C8.24264 11.75 9.25 10.7426 9.25 9.5Z" fill="inherit"></path> <path fillRule="evenodd" clipRule="evenodd" d="M17 18.25C19.0711 18.25 20.75 16.5711 20.75 14.5C20.75 12.4289 19.0711 10.75 17 10.75C14.9289 10.75 13.25 12.4289 13.25 14.5C13.25 16.5711 14.9289 18.25 17 18.25ZM19.25 14.5C19.25 15.7426 18.2426 16.75 17 16.75C15.7574 16.75 14.75 15.7426 14.75 14.5C14.75 13.2574 15.7574 12.25 17 12.25C18.2426 12.25 19.25 13.2574 19.25 14.5Z" fill="inherit"></path> <path d="M6.20852 15C6.20852 14.5858 6.54431 14.25 6.95852 14.25C7.37273 14.25 7.70852 14.5858 7.70852 15V22C7.70852 22.4142 7.37273 22.75 6.95852 22.75C6.54431 22.75 6.20852 22.4142 6.20852 22V15Z" fill="inherit"></path> <path d="M16.9585 22.75C16.5443 22.75 16.2085 22.4142 16.2085 22V20C16.2085 19.5858 16.5443 19.25 16.9585 19.25C17.3727 19.25 17.7085 19.5858 17.7085 20V22C17.7085 22.4142 17.3727 22.75 16.9585 22.75Z" fill="inherit"></path> <path d="M6.20852 2C6.20852 1.58579 6.54431 1.25 6.95852 1.25C7.37273 1.25 7.70852 1.58579 7.70852 2V4C7.70852 4.41421 7.37273 4.75 6.95852 4.75C6.54431 4.75 6.20852 4.41421 6.20852 4V2Z" fill="inherit"></path> </g></svg>
                </div>
              ): null}

              {i === 4 ? (
                <div className="slide-icon icon-5 border border-white flex justify-center items-center px-4 py-2" onMouseOver={() => calculateSlide("5")}>
                    <svg onMouseOver={() => calculateSlide("5")} className="w-16" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 8c0 2.206-1.794 4-4 4-1.197 0-2.31-0.532-3.074-1.452l-0.002 0.001-0.014-0.018c-0.011-0.014-0.026-0.023-0.038-0.038l0.004-0.003-3.634-4.482c-0.569-0.64-1.386-1.008-2.242-1.008-1.654 0-3 1.346-3 3 0 1.654 1.346 3 3 3 0.915 0 1.769-0.41 2.342-1.125l0.009 0.007 0.817-1.012 0.778 0.628-0.823 1.019-0.010-0.008c-0.763 0.947-1.897 1.491-3.113 1.491-2.206 0-4-1.794-4-4 0-2.206 1.794-4 4-4 1.12 0 2.186 0.477 2.943 1.301l0.008-0.006 0.042 0.052 3.698 4.56c0.573 0.693 1.409 1.093 2.309 1.093 1.654 0 3-1.346 3-3 0-1.654-1.346-3-3-3-0.846 0-1.65 0.362-2.22 0.989l-0.948 1.175-0.778-0.628 0.948-1.175-0.004-0.003c0.76-0.863 1.855-1.358 3.002-1.358 2.206 0 4 1.794 4 4z" fill="inherit"></path> </g></svg>
                </div>
              ): null}
            </div>
          )
      };

    return (
        <div className="landing-page">
             <Helmet>
                <title>Netralabs</title>
                <meta name="description" content="AI Agent development" />
            </Helmet>

            {/* Navbar, intro and benefit */}
            <div className="relative">
                <div id="hero-section">
                    <div className="navbar nav-bar w-[unset] z-[11]">
                        <div className="navbar-start">
                            <img alt="GT Logo" src={GT_LOGO} className="h-16 w-16 hover:cursor-pointer" onClick={() => navigate("/")}/>
                            <div className="ml-4">
                                <Link to="/" className="text-xl md:text-[1.25vw] lg:text-[1.25vw]  font-bold hover:cursor-pointer">Netra Labs</Link>
                                {/* <p className="text-xl md:text-[1.25vw] lg:text-[1.25vw]  font-bold hover:cursor-pointer" onClick={() => handleNavigation("/")}>Netra Labs</p> */}
                                <p className="hidden md:flex lg:flex text-[1.1vw]">Building the Autonomous Enterprise</p>
                            </div>
                        </div>
                    </div>

                    {/* section 1 */}
                    <div className="m-3 md:m-12 lg:m-12 flex flex-col-reverse md:flex-row lg:flex-row">
                        {/* <div className="w-full md:w-[50%] lg:w-[50%]">
                            <div>
                                video here
                            </div>
                            <p className="text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed text-[#CECECE]">Watch Our Short Video to Learn More</p>
                        </div> */}

                        <div className="flex flex-col justify-center items-center text-center m-0 md:m-[50px] lg:m-[50px]">
                        <h1 className="text-xl md:text-[3vw] lg:text-[3vw] leading-[1.1] font-bold heading-text">Ground Truth<sup>®</sup>: Gain Complete Control Over Your AI Agent Development</h1>
                        <p className="text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed mt-[20px] text-[#CECECE] break-words">Create Hyper-Focused Expert AI Agents™ Without Limitations</p>
                        <p className="text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed mt-[20px] text-[#CECECE] break-words mx-[40px]">As data scientists, we grapple with the constraints of generic AI frameworks that handcuff our ability to develop accurate solutions.</p>
                        <p className="text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed mt-[20px] text-[#CECECE] break-words mx-[40px]"><span className="font-bold text-accent">Ground Truth<sup>®</sup></span> is the first enterprise language chain framework built specifically for data science teams. Ground Truth gives data scientists the power to create finely tuned enterprise AI Agents that solve enterprise problems, whilst being in your complete control.</p>
                        </div>
                    </div>
                </div>
                {/* nav bar */}

                {/* section 2 */}
                <div className="static md:absolute lg:absolute top-[75%]">
                    <div className="m-3 md:m-12 lg:m-16 flex flex-col justify-center items-center">
                        
                        <div className="w-full flex flex-wrap justify-center">
                            <div className="hidden w-full  md:w-[16.6%] lg:w-[16.6%] bg-accent text-black md:flex lg:flex flex-col justify-center items-center text-center p-4">
                                <p className="text-xl md:text-[1.2vw] lg:text-[1.2vw] heading-text leading-[1.2]">Watch Our Short Video to <span className="font-bold">Learn More</span></p>
                                <div className="w-8 mt-4">
                                    <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#0FAE96"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow-down-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" > <g id="Icon-Set" transform="translate(-412.000000, -1087.000000)" fill="#000000"> <path d="M428,1117 C420.268,1117 414,1110.73 414,1103 C414,1095.27 420.268,1089 428,1089 C435.732,1089 442,1095.27 442,1103 C442,1110.73 435.732,1117 428,1117 L428,1117 Z M428,1087 C419.163,1087 412,1094.16 412,1103 C412,1111.84 419.163,1119 428,1119 C436.837,1119 444,1111.84 444,1103 C444,1094.16 436.837,1087 428,1087 L428,1087 Z M433.121,1102.46 L429,1106.59 L429,1096 C429,1095.45 428.553,1095 428,1095 C427.448,1095 427,1095.45 427,1096 L427,1106.59 L422.879,1102.46 C422.488,1102.07 421.855,1102.07 421.465,1102.46 C421.074,1102.86 421.074,1103.49 421.465,1103.88 L427.121,1109.54 C427.361,1109.78 427.689,1109.85 428,1109.79 C428.311,1109.85 428.639,1109.78 428.879,1109.54 L434.535,1103.88 C434.926,1103.49 434.926,1102.86 434.535,1102.46 C434.146,1102.07 433.512,1102.07 433.121,1102.46 L433.121,1102.46 Z" id="arrow-down-circle"> </path> </g> </g> </g></svg>
                                </div>
                            </div>
                            <div className="w-full h-auto md:min-h-[15em]  md:w-[16.6%] lg:w-[16.6%] flex flex-col justify-start items-center bg-white text-black p-4 border border-accent">
                                <div className="h-[25%] flex justify-center items-start">
                                    <h1 className="font-bold text-xl  md:text-[1.2vw] lg:text-[1.2vw] heading-text leading-[1.2]  text-accent text-center ">Full AI Agent Control</h1>
                                </div>
                                <p className="text-lg md:text-[1.1vw] lg:text-[1.1vw] leading-[1.2] m-2 text-center">Take charge of every stage—from data generation to deployment—with Ground Truth® for customized, domain-specific AI solutions.</p>
                            </div>
                            <div className="w-full  md:w-[16.6%] lg:w-[16.6%] flex flex-col justify-start items-center bg-white text-black p-4 border border-accent">
                                <div className="h-[25%] flex justify-center items-start">
                                    <h1 className="font-bold text-xl  md:text-[1.2vw] lg:text-[1.2vw] heading-text leading-[1.2]  text-accent text-center">Maximum Accuracy</h1>
                                </div>
                                
                                <p className="text-lg md:text-[1.1vw] lg:text-[1.1vw] leading-[1.2] m-2 text-center">Optimize models and fine-tune hyperparameters for unmatched accuracy in critical applications with Ground Truth®.</p>
                            </div>
                            <div className="w-full  md:w-[16.6%] lg:w-[16.6%] flex flex-col justify-start items-center bg-white text-black p-4 border border-accent">
                                <div className="h-[25%] flex justify-center items-start">
                                    <h1 className="font-bold text-xl  md:text-[1.2vw] lg:text-[1.2vw] heading-text leading-[1.2]  text-accent text-center">End-to-End Integration</h1>
                                </div>
                                <p className="text-lg md:text-[1.1vw] lg:text-[1.1vw] leading-[1.2] m-2 text-center">Access a unified platform for data generation, model selection, tuning, and validation—no need for multiple tools.</p>
                            </div>
                            <div className="w-full  md:w-[16.6%] lg:w-[16.6%] flex flex-col justify-start items-center bg-white text-black p-4 border border-accent">
                            <div className="h-[25%] flex justify-center items-start">
                                <h1 className="font-bold text-xl md:text-[1.2vw] lg:text-[1.2vw] heading-text leading-[1.2] text-accent text-center">Accelerated Hypothesis Testing</h1>
                            </div>
                                <p className="text-lg md:text-[1.1vw] lg:text-[1.1vw] leading-[1.2] m-2 text-center">Automate deployment across any cloud or infrastructure, streamlining hypothesis testing without operational hurdles.</p>
                            </div>
                            <div className="w-full  md:w-[16.6%] lg:w-[16.6%] flex flex-col justify-start items-center bg-white text-black p-4 border border-accent">
                                <div className="h-[25%] flex justify-center items-start"> 
                                    <h1 className="font-bold text-xl md:text-[1.2vw] lg:text-[1.2vw] heading-text leading-[1.2] text-accent text-center">Fast Validation & Feedback</h1>
                                </div>
                                <p className="text-lg md:text-[1.1vw] lg:text-[1.1vw] leading-[1.2] m-2 text-center">Validate and refine AI agents with integrated feedback loops for continuous improvement—all within Ground Truth®.</p>
                            </div>
                            <div className="w-full  md:w-[16.6%] lg:w-[16.6%] bg-accent text-black flex md:hidden lg:hidden flex-col justify-center items-center text-center p-4">
                                <p className="text-xl md:text-[1.2vw] lg:text-[1.2vw] heading-text leading-[1.2]">Watch Our Short Video to <span className="font-bold">Learn More</span></p>
                                <div className="w-8 mt-4">
                                    <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#0FAE96"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow-down-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" > <g id="Icon-Set" transform="translate(-412.000000, -1087.000000)" fill="#000000"> <path d="M428,1117 C420.268,1117 414,1110.73 414,1103 C414,1095.27 420.268,1089 428,1089 C435.732,1089 442,1095.27 442,1103 C442,1110.73 435.732,1117 428,1117 L428,1117 Z M428,1087 C419.163,1087 412,1094.16 412,1103 C412,1111.84 419.163,1119 428,1119 C436.837,1119 444,1111.84 444,1103 C444,1094.16 436.837,1087 428,1087 L428,1087 Z M433.121,1102.46 L429,1106.59 L429,1096 C429,1095.45 428.553,1095 428,1095 C427.448,1095 427,1095.45 427,1096 L427,1106.59 L422.879,1102.46 C422.488,1102.07 421.855,1102.07 421.465,1102.46 C421.074,1102.86 421.074,1103.49 421.465,1103.88 L427.121,1109.54 C427.361,1109.78 427.689,1109.85 428,1109.79 C428.311,1109.85 428.639,1109.78 428.879,1109.54 L434.535,1103.88 C434.926,1103.49 434.926,1102.86 434.535,1102.46 C434.146,1102.07 433.512,1102.07 433.121,1102.46 L433.121,1102.46 Z" id="arrow-down-circle"> </path> </g> </g> </g></svg>
                                </div>
                            </div>

                            {/* <div className="w-full  md:w-[20%] lg:w-[20%] flex flex-col justify-start items-center bg-white text-black px-4 py-8 border border-accent ">
                                <h1 className="font-bold text-xl md:text-[1.25vw] lg:text-[1.25vw] heading-text leading-[1.2] h-[20%] text-accent">Complete Control Over the AI Agent Lifecycle</h1>
                                <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw] leading-[1.4] m-2 h-[80%]">Gain full control over every stage of AI agent development—from synthetic data generation and preprocessing to model selection, training, deployment, and monitoring. Ground Truth® allows you to customize and optimize your AI agents precisely to your specific needs, enabling you to tackle complex, domain-specific tasks effectively.</p>
                            </div>
                            <div className="w-full  md:w-[20%] lg:w-[20%] flex flex-col justify-start items-center bg-white text-black px-4 py-8 border border-accent">
                                <h1 className="font-bold text-xl  md:text-[1.25vw] lg:text-[1.25vw] heading-text leading-[1.2] h-[20%] text-accent">Achieve Maximum Output Accuracy</h1>
                                <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw] leading-[1.4] m-2 h-[80%]">Enhance your AI agents' performance by fine-tuning hyperparameters and configuring custom models within the platform. Ground Truth® enables you to achieve unparalleled accuracy through precise control and optimization, ensuring your AI agents deliver the highest quality results in critical applications.</p>
                            </div>
                            <div className="w-full  md:w-[20%] lg:w-[20%] flex flex-col justify-start items-center bg-white text-black px-4 py-8 border border-accent">
                                <h1 className="font-bold text-xl  md:text-[1.25vw] lg:text-[1.25vw] heading-text leading-[1.2] h-[20%] text-accent">Integrated End-to-End Platform</h1>
                                <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw] leading-[1.4] m-2 h-[80%]">Utilize a unified environment that encompasses synthetic data generation, data preprocessing, model selection, adapter configuration, hyperparameter tuning, agentic workflow creation, validation, and human feedback—all within Ground Truth®. This seamless integration eliminates the need to manage multiple tools and systems, streamlining your workflow and increasing productivity.</p>
                            </div>
                            <div className="w-full  md:w-[20%] lg:w-[20%] flex flex-col justify-start items-center bg-white text-black px-4 py-8 border border-accent">
                                <h1 className="font-bold text-xl md:text-[1.25vw] lg:text-[1.25vw] heading-text leading-[1.2] h-[20%] text-accent">Accelerate Hypothesis Testing by Eliminating Deployment Complexities</h1>
                                <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw] leading-[1.4] m-2 h-[75%]">Ground Truth® abstracts away the complexities of deployment, automating the process across any cloud provider or private infrastructure. You no longer need to configure environments, manage dependencies, or integrate disparate systems. This allows you to focus solely on creating and testing your AI models, accelerating hypothesis testing and innovation without the operational overhead typically associated with deployment.</p>
                            </div>
                            <div className="w-full  md:w-[20%] lg:w-[20%] flex flex-col justify-start items-center bg-white text-black px-4 py-8 border border-accent">
                                <h1 className="font-bold text-xl md:text-[1.25vw] lg:text-[1.25vw] heading-text leading-[1.2] h-[20%] text-accent">Rapid Model Validation and Continuous Improvement Through Integrated Feedback</h1>
                                <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw] leading-[1.4] m-2 h-[75%]">Quickly validate model outputs and adjust on the fly using Ground Truth's integrated validation mode. Seamlessly incorporate human-in-the-loop feedback directly within the platform, enabling you to refine and improve your AI agents iteratively. This integrated approach eliminates the need for manual processes or multiple systems for validation and feedback, significantly speeding up the model improvement cycle and enhancing overall performance.</p>
                            </div> */}
                            


                        </div>
                    </div>
                </div>
            </div>
            
            {/* video */}
            <div className="bg-white pt-4 md:pt-[10%] lg:pt-[10%] pb-4 flex flex-col justify-center items-center p-3 md:p-10 lg:p-10 ">
                {/* videos */}
                <div className="flex flex-col gap-y-2 md:flex-row lg:flex-row justify-between">
                    {/* <img src={f1} alt="" /> */}
                    <div className="w-full md:w-[49%] lg:w-[49%]">
                        <video
                            className=""
                            controls
                            preload="auto"
                            >
                            <source src={video1} type="video/mp4"/>
                        </video>    
                    </div>

                    <div className="w-full md:w-[49%] lg:w-[49%]">
                        <video
                            className=""
                            controls
                            preload="auto"
                            >
                            <source src={video1} type="video/mp4"/>
                        </video>    
                    </div>
                    {/* video 1 */}
                    {/* video 2 */}
                </div>
                <div className="mt-10 flex flex-col items-center justify-center">   
                    <Link className="btn btn-accent rounded-sm hover:cursor-pointer text-base md:text-[1.1vw] lg:text[1.1vw] text-white px-6" to={"/data-scientist-survey"}>Sign Up For Early Access</Link>
                </div>
            </div>


            {/* section 3 */}
            <div className="integrator-second" id="features">
                
                <div className="flex flex-col justify-center items-center slider-container relative">
                    {/* beforeChange={(old:number, slide:number) => setActiveTab(`${slide + 1}`)} */}
                    {/* @ts-ignore */}
                    <Slider {...settings} className="w-[90%] md:w-full lg:w-full h-[600px] flex justify-center " ref={sliderRef}>
                        <div id="slide1" className="w-full text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed px-5 md:px-20 lg:px-20 py-10 h-[600px] !flex flex-col justify-center">
                            <h1 className="font-bold text-2xl md:text-[2.2vw] lg:text-[2.2vw] leading-[1.4] mb-4">Features #1</h1>
                            <h1 className="font-bold text-xl md:text-[3vw] lg:text-[3vw] leading-[1.4] mb-4">Proprietary Agentic Framework</h1>
                            <div className="mb-4">
                                {parse(getCarouselData("1"))}
                            </div>
                            <div className="flex justify-center mt-8">
                                <Link className="btn btn-accent rounded-sm hover:cursor-pointer text-base md:text-[1.1vw] lg:text[1.1vw] text-white px-6" to={"/data-scientist-survey"}>Sign Up For Early Access</Link>
                            </div>
                        </div>
                        <div id="slide2" className="w-full text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed px-5 md:px-20 lg:px-20 py-10 h-[600px] !flex flex-col justify-center">
                            <h1 className="font-bold text-2xl md:text-[2.2vw] lg:text-[2.2vw] leading-[1.4] mb-4">Features #2</h1>
                            <h1 className="font-bold text-xl md:text-[3vw] lg:text-[3vw] leading-[1.4] mb-4">Unified End-to-End Platform Workflow</h1>
                            <div className="mb-4">
                                {parse(getCarouselData("2"))}
                            </div>
                            <div className="flex justify-center mt-8">
                                <Link className="btn btn-accent rounded-sm hover:cursor-pointer text-base md:text-[1.1vw] lg:text[1.1vw] text-white px-6" to={"/data-scientist-survey"}>Sign Up For Early Access</Link>
                            </div>
                        </div>
                        <div id="slide3" className="w-full text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed px-5 md:px-20 lg:px-20 py-10 h-[600px] !flex flex-col justify-center">
                            <h1 className="font-bold text-2xl md:text-[2.2vw] lg:text-[2.2vw] leading-[1.4] mb-4">Features #3</h1>
                            <h1 className="font-bold text-xl md:text-[3vw] lg:text-[3vw] leading-[1.4] mb-4">Focus on Hypothesis Testing Without Deployment Hassles</h1>
                            <div className="mb-4">
                                {parse(getCarouselData("3"))}
                            </div>
                            <div className="flex justify-center mt-8">
                                <Link className="btn btn-accent rounded-sm hover:cursor-pointer text-base md:text-[1.1vw] lg:text[1.1vw] text-white px-6" to={"/data-scientist-survey"}>Sign Up For Early Access</Link>
                            </div>
                        </div>
                        <div id="slide4" className="w-full text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed px-5 md:px-20 lg:px-20 py-10 h-[600px] !flex flex-col justify-center">
                            <h1 className="font-bold text-2xl md:text-[2.2vw] lg:text-[2.2vw] leading-[1.4] mb-4">Features #4</h1>
                            <h1 className="font-bold text-xl md:text-[3vw] lg:text-[3vw] leading-[1.4] mb-4">Efficient Model Fine-Tuning with LoRA Adapter Technology</h1>
                            <div className="mb-4">
                                {parse(getCarouselData("4"))}
                            </div>
                            <div className="flex justify-center mt-8">
                                <Link className="btn btn-accent rounded-sm hover:cursor-pointer text-base md:text-[1.1vw] lg:text[1.1vw] text-white px-6" to={"/data-scientist-survey"}>Sign Up For Early Access</Link>
                            </div>
                        </div>
                        <div id="slide5" className="w-full text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed px-5 md:px-20 lg:px-20 py-10 h-[600px] !flex flex-col justify-center">
                            <h1 className="font-bold text-2xl md:text-[2.2vw] lg:text-[2.2vw] leading-[1.4] mb-4">Features #5</h1>
                            <h1 className="font-bold text-xl md:text-[3vw] lg:text-[3vw] leading-[1.4] mb-4">Dynamic Validation and Human-in-the-Loop Feedback</h1>
                            <div className="mb-4">
                                {parse(getCarouselData("5"))}
                            </div>
                            <div className="flex justify-center mt-8">
                                <Link className="btn btn-accent rounded-sm hover:cursor-pointer text-base md:text-[1.1vw] lg:text[1.1vw] text-white px-6" to={"/data-scientist-survey"}>Sign Up For Early Access</Link>
                            </div>
                        </div>
                    
                    </Slider>

                    <div className="prev absolute left-1 top-[40%] translate-y-[-50%] w-8 hover:cursor-pointer" onClick={() => handleSlide("prev")}>
                        <svg fill="#ffffff"  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 330 330"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_6_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394 c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998 c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0 c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"></path> </g></svg>
                    </div>

                    <div className="next absolute right-1 top-[40%] translate-y-[-50%] w-8 hover:cursor-pointer" onClick={() => handleSlide("next")}>
                        <svg fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 330 330" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_2_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M225.606,175.605 l-80,80.002C142.678,258.535,138.839,260,135,260s-7.678-1.464-10.606-4.394c-5.858-5.857-5.858-15.355,0-21.213l69.393-69.396 l-69.393-69.392c-5.858-5.857-5.858-15.355,0-21.213c5.857-5.858,15.355-5.858,21.213,0l80,79.998 c2.814,2.813,4.394,6.628,4.394,10.606C230,168.976,228.42,172.792,225.606,175.605z"></path> </g></svg>
                    </div>
                </div>









                {/* <div className="m-3 md:m-12 lg:m-12 flex flex-col justify-center items-center"> */}
                    {/* <h1 className="text-xl md:text-[3vw] lg:text-[3vw] font-bold leading-[1.1] heading-text my-4">
                        Features
                    </h1>
                    <div id="section-tabs"  className="py-8 hidden md:flex lg:flex flex-wrap text-base md:text-[1.2vw] lg:text-[1.2vw] lg:leading-[1.4] justify-center gap-y-[20px]">
                        <p className={` w-[33%] text-center ${activeTab === "1" ? "text-accent border-b border-b-accent" : ""} hover:cursor-pointer`} onClick={() => calculateSlide("1")}>Proprietary Agentic Framework</p>
                        <p className={`w-[33%] text-center ${activeTab === "2" ? "text-accent border-b border-b-accent" : ""} hover:cursor-pointer`} onClick={() => calculateSlide("2")}>Unified End-to-End Platform Workflow</p>
                        <p className={`w-[33%] text-center ${activeTab === "3" ? "text-accent border-b border-b-accent" : ""} hover:cursor-pointer`} onClick={() => calculateSlide("3")}>Focus on Hypothesis Testing Without Deployment Hassles</p>
                        <p className={`w-[33%] text-center ${activeTab === "4" ? "text-accent border-b border-b-accent" : ""} hover:cursor-pointer`} onClick={() => calculateSlide("4")}>Efficient Model Fine-Tuning with LoRA Adapter Technology</p>
                        <p className={`w-[33%] text-center ${activeTab === "5" ? "text-accent border-b border-b-accent" : ""} hover:cursor-pointer`} onClick={() => calculateSlide("5")}>Dynamic Validation and Human-in-the-Loop Feedback</p>
                    </div> */}

                
                    {/* <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <div className="w-full text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed px-20 py-10">
                                {getCarouselData("1")}
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide5" className="btn btn-lg btn-circle !bg-transparent !border-none"  onClick={() => setActiveTab("5")}>❮</a>
                            <a href="#slide2" className="btn btn-lg btn-circle !bg-transparent !border-none"  onClick={() => setActiveTab("2")}>❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <div className="w-full text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed px-20 py-10">
                                {getCarouselData("2")}
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-lg btn-circle !bg-transparent !border-none"  onClick={() => setActiveTab("1")}>❮</a>
                            <a href="#slide3" className="btn btn-lg btn-circle !bg-transparent !border-none"  onClick={() => setActiveTab("3")}>❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <div className="w-full text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed px-20 py-10">
                                {getCarouselData("3")}
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-lg btn-circle !bg-transparent !border-none"  onClick={() => setActiveTab("2")}>❮</a>
                            <a href="#slide4" className="btn btn-lg btn-circle !bg-transparent !border-none"  onClick={() => setActiveTab("4")}>❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <div className="w-full text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed px-20 py-10">
                                {getCarouselData("4")}
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-lg btn-circle !bg-transparent !border-none"  onClick={() => setActiveTab("3")}>❮</a>
                            <a href="#slide5" className="btn btn-lg btn-circle !bg-transparent !border-none"  onClick={() => setActiveTab("5")}>❯</a>
                            </div>
                        </div>
                        <div id="slide5" className="carousel-item relative w-full">
                            <div className="w-full text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed px-20 py-10">
                                {getCarouselData("5")}
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-lg btn-circle !bg-transparent !border-none"  onClick={() => setActiveTab("4")}>❮</a>
                            <a href="#slide1" className="btn btn-lg btn-circle !bg-transparent !border-none"  onClick={() => setActiveTab("1")}>❯</a>
                            </div>
                        </div>
                    </div> */}

                {/* @ts-ignore */}
                {/* <Slider {...settings} className="w-[90%] md:w-full lg:w-full" ref={sliderRef} beforeChange={(old:number, slide:number) => setActiveTab(`${slide + 1}`)}>
                    <div id="slide1" className="w-full text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed px-5 md:px-20 lg:px-20 py-10">
                        <h1 className="block md:hidden lg:hidden font-bold text-xl leading-[1.2] mb-4">Proprietary Agentic Framework</h1>
                        {getCarouselData("1")}
                    </div>
                    <div id="slide2" className="w-full text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed px-5 md:px-20 lg:px-20 py-10">
                        <h1 className="block md:hidden lg:hidden font-bold text-xl leading-[1.2] mb-4">Unified End-to-End Platform Workflow</h1>
                        {getCarouselData("2")}
                    </div>
                    <div id="slide3" className="w-full text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed px-5 md:px-20 lg:px-20 py-10">
                        <h1 className="block md:hidden lg:hidden font-bold text-xl leading-[1.2] mb-4">Focus on Hypothesis Testing Without Deployment Hassles</h1>
                        {getCarouselData("3")}
                    </div>
                    <div id="slide4" className="w-full text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed px-5 md:px-20 lg:px-20 py-10">
                        <h1 className="block md:hidden lg:hidden font-bold text-xl leading-[1.2] mb-4">Efficient Model Fine-Tuning with LoRA Adapter Technology</h1>
                        {getCarouselData("4")}
                    </div>
                    <div id="slide5" className="w-full text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed px-5 md:px-20 lg:px-20 py-10">
                        <h1 className="block md:hidden lg:hidden font-bold text-xl leading-[1.2] mb-4">Dynamic Validation and Human-in-the-Loop Feedback</h1>
                        {getCarouselData("5")}
                    </div>
                    
                    </Slider> */}
                {/* </div> */}
            </div>

            {/* section 4 */}
            <div className="mt-[20%] md:mt-[10%] lg:mt-[10%]">
                {/* <div className="integrator-second-container">
                    <div className="m-3 md:m-12 lg:m-12 flex flex-col justify-center items-center">
                        <h1 className="text-xl md:text-[3vw] lg:text-[3vw] font-bold leading-[1.1] heading-text my-4">
                            Social Proof
                        </h1>

                        <p className="text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed mt-[20px] text-[#CECECE] break-words">A leading CPG manufacturer reduced a complex automation task from 2 hours to just 2 minutes using an Expert AI Agent developed with Ground Truth.</p>
                    
                        <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-[40px] mt-4">
                            <div className="w-full md:w-[30%] lg:w-[30%] social-card">
                                <p className="text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed mt-[20px] text-[#CECECE] break-words">
                                        Achieved 60x performance increase and 85% cost reduction in COBOL modernization.
                                </p>
                                <p className="flex justify-end w-full font-bold text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed mt-[20px] text-[#CECECE]">
                                    - Joseph
                                </p>
                            </div>

                           
                            <div className="w-full md:w-[30%] lg:w-[30%] social-card">
                                <p className="text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed mt-[20px] text-[#CECECE] break-words">
                                    Delivers rapid, accurate DER system recommendations, accelerating clean energy adoption.
                                </p>
                                <p className="flex justify-end w-full font-bold text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed mt-[20px] text-[#CECECE]">
                                - Bradley
                                </p>
                            </div>

                        
                        </div>
                        <div className="flex flex-col justify-center items-center text-center mt-4 text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed text-[#CECECE] break-words">
                                    <p className="">Team Expertise</p>
                                    <p>60+ years of combined experience in enterprise automation and AI.</p>
                                    <p>Leadership team includes successful entrepreneurs and industry experts with multiple patents.</p>
                        </div>

                       

                        <div className="mt-10 flex flex-col items-center justify-center">   
                            <Link className="btn btn-accent rounded-sm hover:cursor-pointer text-base md:text-[1.1vw] lg:text[1.1vw] text-white px-6" to={"/data-scientist-survey"}>Sign Up For Early Access</Link>
                            <p className="text-center text-[#CECECE] text-base md:text-[1.2vw] lg:text-[1.2vw] mt-2">*Limited time offer: Get insights into Expert AI Agents and access to advanced workshops upon sign-up.</p>
                        </div>

                    
                    </div>
                </div> */}

                <div className="p-3 md:p-10 lg:p-10 ">
                    <div className="w-full md:w-[70%] lg:w-[70%]">
                            {/* <video
                                className="mix-blend-exclusion w-[100px] md:w-[115px] lg:w-[130px]"
                                muted // @ts-ignore
                                autoPlay={"autoplay"}
                                preload="auto"
                                loop>
                                <source src={Proof} type="video/mp4"/>
                            </video> */}
                            <div className='tags-btn'>Use Case</div>
                        <h1 className="text-xl md:text-[3vw] lg:text-[3vw] leading-[1.1] font-bold mt-[26px] heading-text break-words">Unlocking the $78 Billion COBOL Time Bomb.</h1>
                        <p className="text-base md:text-[1.5vw] lg:text-[1.5vw] lg:leading-relaxed mt-[20px] text-[#CECECE]"> Joseph.ai, the world's first COBOL Batch Transformation Program Expert AI Agent, shatters the limitations of traditional modernization approaches, achieving unprecedented performance and cost savings.</p>
                    </div>
                    <div className="flex items-center gap-[80px] gap-y-0 justify-between flex-col md:flex-row lg:flex-row">
                        <div className="flex flex-col w-full md:w-[50%] lg:w-[50%] text-base md:text-[1.1vw] lg:text-[1.1vw]">
                            <div className="flex items-center gap-3 glass-card-1 p-2.5 md:p-5 lg:p-5">
                                <div className="badge badge-secondary badge-xs"></div>
                                <div lang='en' className='glass-text text-[#CECECE] text-base md:text-[1.15vw] lg:text-[1.15vw]'> <span className='font-bold text-accent uppercase'>Current COBOL modernization strategies rely on costly and time-consuming manual rewrites</span> or inefficient lift-and-shift migrations, failing to fully leverage the power of modern cloud environments.</div>
                            </div>
                            <div className="flex items-center gap-3 glass-card-2 p-2.5 md:p-5 lg:p-5">
                                <div className="badge badge-secondary badge-xs"></div>
                                <div lang='en' className='glass-text text-[#CECECE] text-base md:text-[1.15vw] lg:text-[1.15vw]'>
                                    Joseph.ai's patented generative AI engine <span className='font-bold text-accent uppercase'>deciphers intricate COBOL business logic</span> and transforms it into high-performance, high-performant and maintable SQL, achieving unparalleled optimization. 
                                </div>
                            </div>
                            <div className="flex items-center gap-3 glass-card-3 p-2.5 md:p-5 lg:p-5">
                                <div className="badge badge-secondary badge-xs"></div>
                                <div lang='en' className='glass-text text-[#CECECE] text-base md:text-[1.15vw] lg:text-[1.15vw]'>Joseph.ai <span className='font-bold text-accent uppercase'>achieves a staggering 60x performance increase over legacy mainframes,</span> while slashing operating costs by 85%, delivering a compelling ROI with payback in less than a year.</div>
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
                    <div className="mt-10 flex flex-col items-center justify-center">   
                            {/* <Link className="btn btn-accent rounded-sm hover:cursor-pointer text-base md:text-[1.1vw] lg:text[1.1vw] text-white px-6" to={"/data-scientist-survey"}>Sign Up For Early Access</Link>
                            <p className="text-center text-[#CECECE] text-base md:text-[1.2vw] lg:text-[1.2vw] mt-2">*Limited time offer: Get insights into Expert AI Agents and access to advanced workshops upon sign-up.</p> */}
                        <div className="bg-gray-800/50 flex flex-col justify-center items-center p-[10px] md:p-[60px] lg:p-[60px]">
                            <div className="bg-gray-600 w-full flex justify-center items-center rounded-sm text-center">
                                <h3 className="text-xl md:text-[2.5vw] lg:text-[2.5vw] leading-[1.1] font-bold p-[30px]">Your Unique Perspective Matters to Us.</h3>
                            </div>
                            <div className="mt-6 w-full p-[30px] bg-gray-600 flex flex-col items-center text-lg md:text-[1.1vw] lg:text-[1.1vw] rounded-md">
                                <p className="text-center">Take our 8-Question Test <span className="font-bold">and For Your Time, Get...</span></p>
                                <ul className="list-disc">
                                    <li>Access to our GenAI Certification Program designed for every role, domain and functions.</li>
                                    <li>Beta access to Ground Truth<sup>®</sup> - bring your hypothesis to life and achieve the outcomes you envision.</li>
                                </ul>
                            </div>

                            <div className="w-full mt-10 btn btn-accent rounded-sm hover:cursor-pointer text-base md:text-[1.1vw] lg:text[1.1vw] text-white" onClick={() => handleNavigationToSurvey}>
                                <p className="">Begin the Test - Your Insights Matter</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button> */}
            {/* <dialog id="my_modal_2" className="modal">
                <div className="bg-gray-800 modal-box w-fit max-w-full !rounded-sm flex flex-col justify-center items-center">
                    <div className="bg-gray-600 w-full flex justify-center items-center rounded-sm">
                        <h3 className="text-xl md:text-[2.5vw] lg:text-[2.5vw] leading-[1.1] font-bold p-4">Your Unique Perspective Matters to Us.</h3>
                    </div>
                    <div className="mt-2 w-full p-4 bg-gray-600 flex flex-col items-center text-lg md:text-[1.1vw] lg:text-[1.1vw] rounded-sm">
                        <p>Take our 8-Question Test <span className="font-bold">and For Your Time, Get...</span></p>
                        <ul className="list-disc">
                            <li>Access to our GenAI Certification Program designed for every role, domain and functions.</li>
                            <li>Beta access to Ground Truth<sup>®</sup> - bring your hypothesis to life and achieve the outcomes you envision.</li>
                        </ul>
                    </div>

                    <div className="w-full mt-2 rounded-sm btn btn-accent text-white" onClick={() => navigate("/data-scientist-survey")}>
                        <p>Begin the Test - Your Insights Matter</p>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog> */}

        </div>
    )
}