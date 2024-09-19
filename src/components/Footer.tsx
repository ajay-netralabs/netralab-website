import { useNavigate } from "react-router-dom"
// import GTLOGO from "../../public/GT_logo.png"
import GTLOGO from "../../public/netralabs.png"
import X from "../../public/X.svg"
import LinkedIn from "../../public/LinkedIn.svg"

export const Footer = () => {

    const navigate = useNavigate()

    const handleNavigation = (path?:string) => {
        navigate(path || "/")
    }

    const handleNavigateSocialMedia = (type:string) => {
        let url = ""

        if(type === "twitter"){
            url = "https://twitter.com/ExpertAIAgents"

        }else {
            url = "https://www.linkedin.com/company/netraai"
        }

        if(window) {
            // @ts-ignore
            window?.open(url, '_blank').focus();
        }

    }

    return (
        <>
        {/* logo */}
        <div className="flex items-center p-10 pb-0 gap-4">
                <img src={GTLOGO} alt="logo" height={"70px"} width={"70px"} />
                <div className="border-b border-[#0FAE9642] w-full">
                    <p className="font-bold text-[28px] mb-2">Netra Labs</p>
                </div>
        </div>
        {/* 1st */}
        <footer className="flex flex-wrap justify-evenly bg-base-100 text-base-content p-10">
            {/* <nav className="flex flex-col gap-2 w-full md:w-[unset] lg:w-[unset]"> */}
                {/* <h6 className="footer-title text-white">About</h6>
                <a className="link link-hover">Company Overview</a> */}
                {/* <a className="link link-hover" onClick={() => handleNavigation("/careers")}>Careers</a> */}
            {/* </nav> */}
            {/* <nav className="flex flex-col gap-2 w-full mt-10 md:mt-0 lg:mt-0 md:w-[unset] lg:w-[unset]">
                <h6 className="footer-title text-white">Resources</h6>
                <a className="link link-hover" onClick={() => handleNavigation("/blogs")}>Blog</a>
                <a className="link link-hover">Help Center</a>
                <a className="link link-hover">Webinars & Events</a>
            </nav> */}
            <nav className="flex flex-col gap-2 mt-10 md:mt-0 lg:mt-0 w-full md:w-[unset] lg:w-[unset]">
                <h6 className="footer-title text-white">Resources</h6>
                <a className="link link-hover" onClick={() => handleNavigation("/blogs")}>Blog</a>
                <a className="link link-hover" onClick={() => handleNavigation("/integrators")}>Integrators</a>
                <a className="link link-hover" onClick={() => handleNavigation("/innovators")}>Innovators</a>
                <a className="link link-hover" onClick={() => handleNavigation("/creators")}>Creators</a>
            </nav>
            <nav className="flex flex-col gap-2 mt-10 md:mt-0 lg:mt-0 w-full md:w-[unset] lg:w-[unset]">
                <h6 className="footer-title text-white">Support & Contact</h6>
                <a className="link link-hover" onClick={() => handleNavigation("/contact-us")}>Contact Us</a>
                <a className="link link-hover">Technical Support</a>
                <a className="link link-hover" onClick={() => handleNavigation("/contact-us")}>Feedback</a>
            </nav>
        </footer>

        <div className="p-10 pb-0">
            <div className="border-b border-[#0FAE9642] w-full"></div>
        </div>

        {/* 2nd */}
        <footer className="footer bg-base-100 text-base-content px-10 py-4">
            <aside className="grid-flow-col items-center">
                <p className="text-[#CECECE]">©2023 Netra Labs · All rights reserved.</p>
            </aside>
            <nav className="md:place-self-center md:justify-self-end">
                <div className="grid grid-flow-col gap-4 text-[#CECECE]">
                    <p>Terms of use</p>
                    <p>Privacy policy</p>
                    <img className="hover:cursor-pointer" src={X} alt="x" onClick={() => handleNavigateSocialMedia("twitter")}/>
                    <img className="hover:cursor-pointer" src={LinkedIn} alt="linkedin" onClick={() => handleNavigateSocialMedia("linkedin")} />
                </div>
            </nav>
        </footer>
        </>
    )
}