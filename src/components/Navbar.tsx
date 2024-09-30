import { useLocation, useNavigate } from "react-router-dom"
// import GT_LOGO from "../../public/GT_logo.png"
import GT_LOGO from "../../public/netralabs.png"
import { useEffect, useState } from "react"

export const Navbar = () => {

    const menu = {
        home : "/",
        whoWeServe : "/ai-agents-for-integrators/, /ai-agents-for-innovators/, /ai-agents-for-creators/",
        careers: "/careers",
        blogs: "/blog/",
        contactUs: "/contact-us-main/ , /contact-us-creators-ai-agents/, /contact-us-integrators-ai-agents/, /contact-us-innovators-ai-agents/",
        enterpriseLangChain :"/language-chain/"

    }

    const location = useLocation()

    const [activeMenu, setActiveMenu] = useState<string>(location.pathname.split("/")[1] || "/")

    const navigate = useNavigate()

    useEffect(() => {
        setActiveMenu(location.pathname.split("/")[1] || "/")
    }, [location.pathname])

    const handleNavigation = (path?:string) => {
        navigate(path || "/")
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        setActiveMenu(path || "/")
    }



    return (
        // z-index has to be lesser than the langChain page navbar z-index
        <div className="navbar nav-bar bg-base-100 w-[unset] sticky top-0 z-[9]">
            <div className="navbar-start">
                <img alt="GT Logo" src={GT_LOGO} className="h-16 w-16 hover:cursor-pointer" onClick={() => handleNavigation("/")}/>
                <div className="ml-4">
                    <p className="text-xl md:text-[1.25vw] lg:text-[1.25vw]  font-bold hover:cursor-pointer" onClick={() => handleNavigation("/")}>Netra Labs</p>
                    <p className="hidden md:flex lg:flex text-[1.1vw]">Building the Autonomous Enterprise</p>
                </div>
            </div>
            <div className="navbar-end">
                {/* links */}
                <div className="flex-none hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base">
                        <li className={`mr-10 text-[1.1vw]  md:mr-4 ${menu.home.includes(activeMenu) ? "border-b border-b-accent" : ""}`}><a onClick={() => handleNavigation()}>Home</a></li>
                        <li className={`mr-10 text-[1.1vw] md:mr-4 relative ${activeMenu !== "/" && menu.whoWeServe.includes(activeMenu) ? "border-b border-b-accent" : ""}`}>
                            <div tabIndex={0} role="button" className="dropdown flex gap-1 items-center">
                                <div className="flex gap-2 items-center text-[1.1vw]">
                                    Who We Serve 
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="keyboard_arrow_down_24dp_5F6368_FILL0_wght300_GRAD0_opsz24 1">
                                            <path id="Vector" d="M11.9998 14.6775C11.8793 14.6775 11.7671 14.6583 11.6633 14.6198C11.5594 14.5813 11.4607 14.5153 11.367 14.4218L6.87276 9.9275C6.73442 9.789 6.66359 9.61492 6.66026 9.40525C6.65709 9.19575 6.72792 9.0185 6.87276 8.8735C7.01776 8.72867 7.19342 8.65625 7.39976 8.65625C7.60609 8.65625 7.78176 8.72867 7.92676 8.8735L11.9998 12.9468L16.0728 8.8735C16.2113 8.73517 16.3853 8.66433 16.595 8.661C16.8045 8.65783 16.9818 8.72867 17.1268 8.8735C17.2716 9.0185 17.344 9.19417 17.344 9.4005C17.344 9.60683 17.2716 9.7825 17.1268 9.9275L12.6325 14.4218C12.5388 14.5153 12.4401 14.5813 12.3363 14.6198C12.2324 14.6583 12.1203 14.6775 11.9998 14.6775Z" fill="#B1B1B1"/>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                                <ul tabIndex={0} className="drop-menu text-[1.1vw] dropdown-content menu bg-base-100 z-[9999] top-[110%] right-0 translate-x-[-0%] w-full border border-accent"> 
                                    <li><a onClick={() => handleNavigation("/ai-agents-for-integrators/")}>Integrators</a></li>
                                    <li><a onClick={() => handleNavigation("/ai-agents-for-innovators/")}>Innovators</a></li>
                                    <li><a onClick={() => handleNavigation("/ai-agents-for-creators/")}>Creators</a></li>
                                </ul>
                            </div>
                        </li>
                        {/* <li className={`mr-10 md:mr-4 ${activeMenu !== "/" && menu.careers.includes(activeMenu) ? "border-b border-b-accent" : ""}`}><a onClick={() => handleNavigation("/careers")}>Careers</a></li> */}
                        <li className={`mr-10 text-[1.1vw] md:mr-4 ${activeMenu !== "/" && menu.blogs.includes(activeMenu) ? "border-b border-b-accent" : ""}`}><a onClick={() => handleNavigation("/blog/")}>Blog</a></li>
                        <li className={`mr-10 text-[1.1vw] md:mr-4 ${activeMenu !== "/" && menu.enterpriseLangChain.includes(activeMenu) ? "border-b border-b-accent" : ""}`}><a onClick={() => handleNavigation("/language-chain/")}>Enterprise Language Chain</a></li>
                        <li className={`mr-10 text-[1.1vw] md:mr-4 ${activeMenu !== "/" && menu.contactUs.includes(activeMenu) ? "border-b border-b-accent" : ""}`}><a onClick={() => handleNavigation("/contact-us-main/")}>Contact Us</a></li>
                    </ul>
                </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow right-[50%]">
                            <li><a onClick={() => handleNavigation("/")}>Home</a></li>
                            <li>
                            <a>Who We Serve</a>
                            <ul className="p-2">
                                <li><a onClick={() => handleNavigation("/ai-agents-for-integrators/")}>Integrators</a></li>
                                <li><a onClick={() => handleNavigation("/ai-agents-for-innovators/")}>Innovators</a></li>
                                <li><a onClick={() => handleNavigation("/ai-agents-for-creators/")}>Creators</a></li>
                            </ul>
                            </li>
                            {/* <li><a onClick={() => handleNavigation("/careers")}>Careers</a></li> */}
                            <li><a onClick={() => handleNavigation("/blog/")}>Blog</a></li>
                            <li><a onClick={() => handleNavigation("/language-chain/")}>Enterprise Language Chain</a></li>
                            <li><a onClick={() => handleNavigation("/contact-us-main/")}>Contact Us</a></li>
                        </ul>
                    </div>
                {/* <button className="hidden lg:flex btn btn-accent rounded-sm" onClick={() => handleNavigation("/contact-us")}>Let's Talk</button> */}
            </div>
        </div>
    )
}