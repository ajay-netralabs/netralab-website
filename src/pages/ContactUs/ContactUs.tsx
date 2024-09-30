import { useEffect } from "react"
import careerImg from "../../../public/static_img/carrer_img.jpeg"
import { useDispatch } from "react-redux"
import { resetPrevLocation } from "../../store/locationSlice"
import { CreatorForm, InnovatorForm, IntegratorForm, MainForms } from "./Forms"

export const ContactUsPage = ({ type }: {type:string}) => {

    // console.log("type", type)

    const dispatch = useDispatch()

    // const { prev } = useSelector((state:any) => state.location)

    // const [prev, setPrev] = useState<string|null>("")
 
 
    useEffect(() => {
        window.scrollTo(0,0)

        return () => {
            // localStorage.setItem("prev", "/")
            dispatch(resetPrevLocation())
        }
    }, [])

    // useEffect(() => {
    //     setPrev(localStorage.getItem("prev"))
    // }, [localStorage.getItem("prev")])


    // const [userData , setUserData] = useState({
    //     name: "",
    //     email: "",
    //     mobile: "",
    //     organization: "",
    //     integrator: false,
    //     innovator: false,
    //     creator: false,
    //     comments: ""
    // })

    // const location = useLocation()

    // const [agree, setAgree] = useState(false)

    // const handleDataUpdate = (name:string, value: any) => {

    //     if(name === "mobile" && isNaN(value)){
    //         return
    //     }

    //     setUserData((prev) => ({...prev, [name]: value}))
    // }


    // useEffect(() => {
    //     const iframe:any = document.getElementsByTagName('iframe')[0];
    //     if(iframe) {
    //         iframe.style.background = 'red';
    //         console.log("iframe.contentWindow.document", iframe.contentWindow.document)
    //         iframe.contentWindow.document.body.style.backgroundColor = 'red';
    //     }
    //     // updateIframeBackground('contact-iframe')
    // })

    // const getIframe = (prevNav: string) => {
    //     if(prevNav === "/ai-agents-for-integrators/"){
    //         return <div className="h-[820px] md:h-[800px] lg:[800px] max-w-[650px]">
    //             <iframe
    //             src="https://api.leadconnectorhq.com/widget/form/s7iYzGLOdPnZLM3hScna"
    //             style={{width: "100%", height: "100%", border: "none", borderRadius: "3px"}}
    //             id="inline-s7iYzGLOdPnZLM3hScna"
    //             data-layout="{'id':'INLINE'}"
    //             data-trigger-type="alwaysShow"
    //             data-trigger-value=""
    //             data-activation-type="alwaysActivated"
    //             data-activation-value=""
    //             data-deactivation-type="neverDeactivate"
    //             data-deactivation-value=""
    //             data-form-name="Contact - Integrator Page"
    //             data-height="748"
    //             data-layout-iframe-id="inline-s7iYzGLOdPnZLM3hScna"
    //             data-form-id="s7iYzGLOdPnZLM3hScna"
    //             title="Contact - Integrator Page"
    //                 >
    //         </iframe>
    //         </div>
            
    //     } else if(prevNav === "/ai-agents-for-innovators/") {
    //         return <div className="h-[820px] md:h-[800px] lg:h-[800px] max-w-[650px]">
    //             <iframe
    //             src="https://api.leadconnectorhq.com/widget/form/d3rhkdryyOx3g1c8EI9r"
    //             style={{width: "100%", height: "100%", border: "none", borderRadius:"3px"}}
    //             id="inline-d3rhkdryyOx3g1c8EI9r"
    //             data-layout="{'id':'INLINE'}"
    //             data-trigger-type="alwaysShow"
    //             data-trigger-value=""
    //             data-activation-type="alwaysActivated"
    //             data-activation-value=""
    //             data-deactivation-type="neverDeactivate"
    //             data-deactivation-value=""
    //             data-form-name="Contact - Innovator Page"
    //             data-height="748"
    //             data-layout-iframe-id="inline-d3rhkdryyOx3g1c8EI9r"
    //             data-form-id="d3rhkdryyOx3g1c8EI9r"
    //             title="Contact - Innovator Page"
    //                 >
    //         </iframe>
    //         </div>
    //     } else if(prevNav === "/ai-agents-for-creators/"){
    //         return <div className="h-[900px] md:h-[850px] lg:h-[850px] max-w-[650px]">
    //             <iframe
    //             src="https://api.leadconnectorhq.com/widget/form/uQRkUGdi8YKpr6RvdtUH"
    //             style={{width: "100%", height: "100%", border:"none", borderRadius: "3px"}}
    //             id="inline-uQRkUGdi8YKpr6RvdtUH"
    //             data-layout="{'id':'INLINE'}"
    //             data-trigger-type="alwaysShow"
    //             data-trigger-value=""
    //             data-activation-type="alwaysActivated"
    //             data-activation-value=""
    //             data-deactivation-type="neverDeactivate"
    //             data-deactivation-value=""
    //             data-form-name="Contact - Creator Page"
    //             data-height="829"
    //             data-layout-iframe-id="inline-uQRkUGdi8YKpr6RvdtUH"
    //             data-form-id="uQRkUGdi8YKpr6RvdtUH"
    //             title="Contact - Creator Page"
    //                 >
    //         </iframe>
    //         </div>
    //     }else {
    //     //     return <iframe
    //     //     src="https://api.leadconnectorhq.com/widget/form/uQRkUGdi8YKpr6RvdtUH"
    //     //     style={{width: "100%" , height: "100%", border: "none", borderRadius: "3px"}}
    //     //     id="inline-uQRkUGdi8YKpr6RvdtUH"
    //     //     data-layout="{'id':'INLINE'}"
    //     //     data-trigger-type="alwaysShow"
    //     //     data-trigger-value=""
    //     //     data-activation-type="alwaysActivated"
    //     //     data-activation-value=""
    //     //     data-deactivation-type="neverDeactivate"
    //     //     data-deactivation-value=""
    //     //     data-form-name="Contact - Creator Page"
    //     //     data-height="829"
    //     //     data-layout-iframe-id="inline-uQRkUGdi8YKpr6RvdtUH"
    //     //     data-form-id="uQRkUGdi8YKpr6RvdtUH"
    //     //     title="Contact - Creator Page"
    //     //         >
    //     //   </iframe>

    //     return <div className="h-[950px] md:h-[900px] lg:h-[900px] max-w-[650px]">
    //             <iframe
    //                 src="https://api.leadconnectorhq.com/widget/form/3awB04FlOIOzGoJvhRzn"
    //                 style={{width:"100%", height: "100%", border: "none", borderRadius:"3px"}}
    //                 id="inline-3awB04FlOIOzGoJvhRzn"
    //                 data-layout="{'id':'INLINE'}"
    //                 data-trigger-type="alwaysShow"
    //                 data-trigger-value=""
    //                 data-activation-type="alwaysActivated"
    //                 data-activation-value=""
    //                 data-deactivation-type="neverDeactivate"
    //                 data-deactivation-value=""
    //                 data-form-name="Contact - Main Page"
    //                 data-height="895"
    //                 data-layout-iframe-id="inline-3awB04FlOIOzGoJvhRzn"
    //                 data-form-id="3awB04FlOIOzGoJvhRzn"
    //                 title="Contact - Main Page"
    //                     >
    //                 </iframe>
    //     </div>
    //     }

    // }

    // function updateIframeBackground(iframeId:string) {
    //     var x:any = document.getElementById(iframeId);
    //     if(!x) return
    //     var y = (x.contentWindow || x.contentDocument);
    //     if (y.document) y = y.document;
    //     y.body.style.backgroundColor = "red";
    // }

    const getHeadline = (type: string) => {
        if(type === "integrators") {
            return "LET'S DISCUSS HOW AI AGENTS CAN NOW DELIVER EXPONENTIAL VALUE TO THE ENTERPRISE."
        }else if(type === "creators") {
            return "LET'S DISCUSS HOW AN EXPERT AI AGENTS CAN TURN YOUR IP INTO A UNICORN!"
        } else {
            return "LETS DISCUSS THE FUTURE OF ENTERPRISE AI AGENTS."
        }
    }

    const getContent = (type: string) => {
        if(type === "integrators"){
            return <>
            <p className="text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed">Do you want to learn how Expert AI Agents are the solution to solving your customers most challenging problems?</p>
            <p className="mt-4 text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed">Ground Truth™ is ready to guide you through the complexities of Generative AI and help you harness its potential to transform business.</p>
            <p className="mt-4 text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed">We understand that your customers' challenges are unique, and off-the-shelf solutions won’t cut it. That’s why we’re here to listen, learn, and craft a tailored approach that leverages your domain expertise to create Expert AI Agents that will deliver unparalleled results for your customers.</p>
            <p className="mt-4 text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed">Don’t let the rapid pace of AI innovation leave you behind. Partner with Netra Labs, and let’s build the future of your business together.</p>
            <p className="mt-4 text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed">Complete the form, and a Netra Labs representative will contact you shortly to discuss your specific goals and how Ground Truth™ can accelerate your AI journey.</p>
            <p className="mt-4 text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed">We look forward to speaking with you and exploring the possibilities.</p>
         </>
        }else if( type === "creators") {
            return <>
            <p className="text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed">Do you want to learn how the Expert class of AI Agents can transform a concept into a thriving business?</p>
            <p className="mt-4 text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed">Ground Truth™ is the only platform that builds agents from the ground up, leveraging the expertise and domain experience of its founders, at scale.</p>
            <p className="mt-4 text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed">We understand that your expertise and IP are unique, and off-the-shelf solutions won't cut it. That’s why we’re here to listen, learn, and craft a tailored approach that leverages your domain knowledge and IP to create Expert AI Agents that deliver unparalleled results.</p>
            <p className="mt-4 text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed">Don’t let the rapid pace of AI innovation leave you behind. Partner with Netra Labs, and let’s build the future of your business together.</p>
            <p className="mt-4 text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed">Complete the form, and a Netra Labs representative will contact you shortly to discuss your specific goals and how Ground Truth™ can accelerate your AI journey.</p>
            <p className="mt-4 text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed">We look forward to speaking with you and exploring the possibilities.</p>
         </>
        }else {
            return <>
            <p className="text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed">Do you want to learn about AI Agents? Ground Truth<sup>®</sup> is ready to guide you through the complexities of Generative AI and help you harness its potential to transform your business.</p>
            <p className="mt-4 text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed">We understand that your challenges are unique, and off-the-shelf solutions won’t cut it. That’s why we’re here to listen, learn, and craft a tailored approach that leverages your domain expertise to create Expert AI Agents that deliver unparalleled results.</p>
            <p className="mt-4 text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed">Don’t let the rapid pace of AI innovation leave you behind. Partner with Netra Labs, and let’s build the future of your business together.</p>
            <p className="mt-4 text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed">Complete the form, and a Netra Labs representative will contact you shortly to discuss your specific goals and how Ground Truth™ can accelerate your AI journey.</p>
            <p className="mt-4 text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed">We look forward to speaking with you and exploring the possibilities.</p>
         </>
        }
    }

    return (
        <div className="mb-2">
            {/* header */}
            <div className="w-full relative h-[400px]">
                <img className="w-full h-full object-cover brightness-50" src={careerImg} alt="careers" />
                <p className="heading-text absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-xl md:text-[3vw] lg:text-[3vw] leading-[1.1] font-bold text-center heading-text">
                    {getHeadline(type)}
                </p>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-row gap-[90px] p-10 contact-desc">
                <div className="w-full md:w-[50%] lg:w-[50%] mt-[20px] text-[#CECECE]">
                    <div className="text-[#CECECE]">
                       {getContent(type)}
                    </div>

                    <div className="text-center mx-6">
                        <h1 className="heading-text text-xl md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed mt-[40px] heading-text break-words font-bold">About Netra Labs</h1>
                        

                        <div className="text-[#CECECE]">
                            <p className="text-base !md:text-[1vw] !lg:text-[1vw] leading-relaxed">At Netra Labs, we are dedicated to empowering technical professionals with the freedom to build and deploy advanced AI agents. With our proprietary framework, Ground Truth<sup>®</sup>, we offer unparalleled control and customization, enabling you to develop AI solutions that are as unique as your vision.</p>
                            <p className="mt-4 text-base !md:text-[1vw] !lg:text-[1vw] leading-relaxed">Join us in shaping the future of AI agent development.</p>
                            {/* <p className="text-[16px] leading-[22px] mt-4">We are committed to making AI simple and affordable. Our plug-and-play solutions offer immediate value and are tailored to meet diverse business needs.</p>
                            <p className="text-[16px] leading-[22px] mt-4">We’re not just selling products; we’re selling empowerment. We believe that every business, regardless of size or industry, should have the tools to harness the full potential of AI. And this is just the beginning. We are continually innovating to redefine the boundaries of what AI can achieve.</p>   */}
                        </div>
                    </div>
                </div>

                {/* based on the previous link, render iframes */}
                <div className="contact-form-container w-full md:w-[50%] lg:w-[50%] p-0 md:p-[40px] lg:p-[40px]">
                    {/* {getIframe(prev || "")} */}
                    { type === "main" ? (
                        <MainForms />
                    ) : null}

                    { type === "creators" ? (
                        <CreatorForm />
                    ) : null}

                    { type === "innovators" ? (
                        <InnovatorForm />
                    ) : null}

                    { type === "integrators" ? (
                        <IntegratorForm />
                    ) : null}
                </div>
            </div>

        </div>

    )
}