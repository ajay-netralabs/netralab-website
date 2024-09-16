import { useEffect } from "react"
import careerImg from "../../../public/static_img/carrer_img.png"
import { useDispatch, useSelector } from "react-redux"
import { resetPrevLocation } from "../../store/locationSlice"

export const ContactUsPage = () => {

    const dispatch = useDispatch()

    const { prev } = useSelector((state:any) => state.location)

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

    const getIframe = (prevNav: string) => {
        if(prevNav === "/integrators"){
            return <iframe
            src="https://api.leadconnectorhq.com/widget/form/s7iYzGLOdPnZLM3hScna"
            style={{width: "100%", height: "100%", border: "none", borderRadius: "3px"}}
            id="inline-s7iYzGLOdPnZLM3hScna"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Contact - Integrator Page"
            data-height="748"
            data-layout-iframe-id="inline-s7iYzGLOdPnZLM3hScna"
            data-form-id="s7iYzGLOdPnZLM3hScna"
            title="Contact - Integrator Page"
                >
          </iframe>
        } else if(prevNav === "/innovators") {
            return <iframe
            src="https://api.leadconnectorhq.com/widget/form/d3rhkdryyOx3g1c8EI9r"
            style={{width: "100%", height: "100%", border: "none", borderRadius:"3px"}}
            id="inline-d3rhkdryyOx3g1c8EI9r"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Contact - Innovator Page"
            data-height="748"
            data-layout-iframe-id="inline-d3rhkdryyOx3g1c8EI9r"
            data-form-id="d3rhkdryyOx3g1c8EI9r"
            title="Contact - Innovator Page"
                >
          </iframe>
        } else if(prevNav === "/creators"){
            return <iframe
            src="https://api.leadconnectorhq.com/widget/form/uQRkUGdi8YKpr6RvdtUH"
            style={{width: "100%", height: "100%", border:"none", borderRadius: "3px"}}
            id="inline-uQRkUGdi8YKpr6RvdtUH"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Contact - Creator Page"
            data-height="829"
            data-layout-iframe-id="inline-uQRkUGdi8YKpr6RvdtUH"
            data-form-id="uQRkUGdi8YKpr6RvdtUH"
            title="Contact - Creator Page"
                >
          </iframe>
        }else {
            return <iframe
            src="https://api.leadconnectorhq.com/widget/form/uQRkUGdi8YKpr6RvdtUH"
            style={{width: "100%" , height: "100%", border: "none", borderRadius: "3px"}}
            id="inline-uQRkUGdi8YKpr6RvdtUH"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Contact - Creator Page"
            data-height="829"
            data-layout-iframe-id="inline-uQRkUGdi8YKpr6RvdtUH"
            data-form-id="uQRkUGdi8YKpr6RvdtUH"
            title="Contact - Creator Page"
                >
          </iframe>
        }

    }

    // function updateIframeBackground(iframeId:string) {
    //     var x:any = document.getElementById(iframeId);
    //     if(!x) return
    //     var y = (x.contentWindow || x.contentDocument);
    //     if (y.document) y = y.document;
    //     y.body.style.backgroundColor = "red";
    // }

    return (
        <div className="mb-10">
            {/* header */}
            <div className="w-full relative">
                <img className="w-full object-cover" src={careerImg} alt="careers" />
                <p className="heading-text absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[15px]  md:text-[45px] lg:text-[55px] font-bold text-center">
                    Let's Talk Expert AI Agents.
                </p>
            </div>

            <div className="md:mt-16 lg:mt-16 flex flex-col md:flex-row lg:flex-row gap-[90px] p-10">
                <div className="w-full md:w-[50%] lg:w-[50%]">
                    <div className="text-[#B1B1B1]">
                        <p className="text-[16px] leading-[22px]">Do you want to learn about AI Agents? Ground Truth™ is ready to guide you through the complexities of Generative AI and help you harness its potential to transform your business.</p>
                        <p className="text-[16px] leading-[22px] mt-4">We understand that your challenges are unique, and off-the-shelf solutions won’t cut it. That’s why we’re here to listen, learn, and craft a tailored approach that leverages your domain expertise to create Expert AI Agents that deliver unparalleled results.</p>
                        <p className="text-[16px] leading-[22px] mt-4">Don’t let the rapid pace of AI innovation leave you behind. Partner with Netra Labs, and let’s build the future of your business together.</p>
                        <p className="text-[16px] leading-[22px] mt-4">Complete the form, and a Netra Labs representative will contact you shortly to discuss your specific goals and how Ground Truth™ can accelerate your AI journey.</p>
                        <p className="text-[16px] leading-[22px] mt-4">We look forward to speaking with you and exploring the possibilities.</p>
                          
                    </div>
                    <h1 className="heading-text text-[24px] mt-[40px] font-bold">About Netra Labs</h1>
                    <div className="mt-[20px] text-[16px] leading-[22px] text-[#B1B1B1]">
                        <p className="text-[16px] leading-[22px] mt-4">Netra Labs is more than just an AI company; we are a catalyst for technological innovation and business transformation. Our founders have spent years developing AI and automation solutions for some of the world’s most prominent corporations.</p>
                        <p className="text-[16px] leading-[22px] mt-4">This experience has led us to a groundbreaking realization: the transformative power of AI should be accessible to all, not just a privileged few.</p>
                        <p className="text-[16px] leading-[22px] mt-4">We are committed to making AI simple and affordable. Our plug-and-play solutions offer immediate value and are tailored to meet diverse business needs.</p>
                        <p className="text-[16px] leading-[22px] mt-4">We’re not just selling products; we’re selling empowerment. We believe that every business, regardless of size or industry, should have the tools to harness the full potential of AI. And this is just the beginning. We are continually innovating to redefine the boundaries of what AI can achieve.</p>  
                    </div>
                </div>

                {/* based on the previous link, render iframes */}
                <div className="contact-form-container w-full md:w-[50%] lg:w-[50%] p-0 md:p-[40px] lg:p-[40px] h-[900px]">
                    {getIframe(prev || "")}
                
                {/* <iframe
                    src="https://api.leadconnectorhq.com/widget/form/uQRkUGdi8YKpr6RvdtUH"
                    // className="contact-iframe"
                    style={{width: "100%", height: "100%", border: "none", borderRadius:"3px" }}
                    id="inline-uQRkUGdi8YKpr6RvdtUH contact-iframe"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Contact - Creator Page"
                    data-height="829"
                    data-layout-iframe-id="inline-uQRkUGdi8YKpr6RvdtUH"
                    data-form-id="uQRkUGdi8YKpr6RvdtUH"
                    title="Contact - Creator Page"
                    // onLoad={() => updateIframeBackground("contact-iframe")}
                        >
                </iframe> */}
                    {/* <h1 className="font-bold text-[20px] leading-[28px] pb-[28px] border-b border-b-[#252525]">Details</h1>
                    <div className="flex flex-col md:flex-row lg:flex-row my-[20px] gap-[20px]">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Full Name</span>
                            </div>
                            <input type="text" value={userData.name || ""} onChange={(e) => handleDataUpdate("name", e.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-none" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input type="text" value={userData.email || ""} onChange={(e) => handleDataUpdate("email", e.target.value)}  placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-none" />
                        </label>
                    </div>

                    <div className="flex flex-col md:flex-row lg:flex-row mb-[20px] gap-[20px]">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Mobile Number</span>
                            </div>
                            <input type="text" value={userData.mobile || ""} onChange={(e) => handleDataUpdate("mobile", e.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-none" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Organization</span>
                            </div>
                            <input type="text" value={userData.organization || ""} onChange={(e) => handleDataUpdate("organization", e.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-none" />
                        </label>
                    </div>

                    <div className="mb-[20px] flex flex-col gap-[20px]">
                        <p>Please select the category that best aligns with your interests (Pick one)</p>
                        <div className="flex gap-[20px] items-center">
                            <input type="checkbox" checked={userData.integrator || false} onChange={(e) => handleDataUpdate("integrator", e.target.checked)} className="checkbox checkbox-md rounded-none" />
                            <p>Integrator</p>
                        </div>
                        <div className="flex gap-[20px] items-center">
                            <input type="checkbox" checked={userData.innovator || false} onChange={(e) => handleDataUpdate("innovator", e.target.checked)}  className="checkbox checkbox-md rounded-none" />
                            <p>Innovator</p>
                        </div>
                        <div className="flex gap-[20px] items-center">
                            <input type="checkbox" checked={userData.creator || false} onChange={(e) => handleDataUpdate("creator", e.target.checked)} className="checkbox checkbox-md rounded-none" />
                            <p>Creator</p>
                        </div>

                        <div className="mt-[20px] flex flex-col gap-[20px]">
                            <div className="flex flex-col gap-[6px]">
                                <h1 className="text-accent font-bold text-[14px]">Integrator</h1>
                                <p>Interested in utilizing Ground Truth® to deliver Expert AI Agents™ to their clients.</p>
                            </div>

                            <div className="flex flex-col gap-[6px]">
                                <h1 className="text-accent font-bold text-[14px]">Innovator</h1>
                                <p>Interested in Netra Labs building an Expert AI Agent™ for your business.</p>
                            </div>

                            <div className="flex flex-col gap-[6px]">
                                <h1 className="text-accent font-bold text-[14px]">Creator</h1>
                                <p>Interested in joining our Expert AI Agent™ incubator program.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-[20px]">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Comments</span>
                            </div>
                            <textarea value={userData.comments || ""} onChange={(e) => handleDataUpdate("comments", e.target.value)} style={{resize: "none"}} className="textarea textarea-bordered h-24 textarea-lg rounded-sm" placeholder="Enter comments here..."></textarea>
                        </label>
                    </div>

                    <div className="mb-[32px] flex gap-4 items-center">
                        <input type="checkbox" checked={agree || false} className="checkbox checkbox-md rounded-none" onChange={(e) => setAgree(e.target.checked)} />
                        <p>
                            I agree to <span className="text-accent">terms & conditions</span> provided by the company. By providing my phone number, I agree to receive text messages from the business.
                        </p>
                    </div>

                    <button className="btn hover:cursor-not-allowed w-full rounded-md bg-[#B1B1B1] text-black hover:border hover:border-[#B1B1B1] hover:text-[#B1B1B1]">Submit Request</button> */}
                </div>
            </div>

        </div>

    )
}