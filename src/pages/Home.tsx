
import { FaqAccordion, MarqueeLogo } from "../components"

import Home1Vid from "../../public/home-1-vid-n.mp4"

import Home2Vid from "../../public/vids/home-2.mp4"
import Versatile from "../../public/vids/versatile.mp4"
import Whyus from "../../public/vids/whyus.mp4"
import Stable from "../../public/vids/stable.mp4"
import Scalable from "../../public/vids/scalable.mp4"

import Home3Vid from "../../public/vids/home-3.mp4"
import Home4Vid from "../../public/vids/home-4.mp4"

import Home1Icon from "../../public/vids/home-icon-1.mp4"
import Home2Icon from "../../public/vids/home-icon-2.mp4"
import Home3Icon from "../../public/vids/home-icon-3.mp4"

import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { homeData } from "./homedata"

import parse from 'html-react-parser';
import { useDispatch } from "react-redux"
import { resetPrevLocation } from "../store/locationSlice"
import Marquee from "react-fast-marquee"

import Integretor1Bg from "../../public/static_img/integrator-1-bg.jfif"

// import { ParticlesComponent } from "../components"


export const Home = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    // const [activeIcon, setActiveIcon] = useState<string>("1")

    const getIconDetails = (id:string) => {
        return homeData[id]
    }

    const [activeIcon, setActiveIcon] = useState<string>("1")

    useEffect(() => {
        return () => {
            // localStorage.setItem("prev", "/")
            dispatch(resetPrevLocation())
        }
    }, [])

    return (
        <div className="">
            {/* first container */}
            <div className="m-3 md:m-12 lg:m-12 flex flex-col md:flex-row lg:flex-row">
                {/* texts */}
                <div className="w-full md:w-[50%] lg:w-[50%]">
                    <div className="relative">
                        <div>
                            <img className="brightness-[0.4] mix-blend-color-dodge" src={Integretor1Bg} alt="" />
                        </div>

                        <div className="absolute top-0">
                            <h1 className="text-xl md:text-[2.5vw] lg:text-[2.5vw] leading-relaxed font-bold heading-text">
                                Turn Human Expertise into <br /> Expert AI Agents</h1>
                            <p className="text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed mt-[20px] text-[#CECECE] break-words">Netra Lab's <strong>Ground Truth®</strong> is the <strong>world's first Enterprise Language Chain</strong> framework for building and deploying Expert <strong>AI Agents™</strong> into production, at scale.</p>
                            <div className="glass-btn mt-[50px] py-[10px] px-[20px] w-fit hover:cursor-pointer text-base md:text-[1.1vw] lg:text-[1.1vw]" onClick={() => navigate("/enterprise-language-chain")}>Enterprise Language Chain? <span className="ml-4 text-accent">Learn More</span></div>
                        </div>
                    </div>
                </div>

                {/* graphics */}
                <div className="mt-[50%] md:mt-0 lg:mt-0 w-full md:w-[50%] lg:w-[50%]">
                    <div className="w-full md:w-[80%] lg:w-[80%] flex justify-center items-center mx-auto">
                        <video
                            className="mix-blend-exclusion"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={Home1Vid} type="video/mp4"/>
                        </video>

                    </div>
                </div>
            </div>

            <Marquee pauseOnHover>
                <MarqueeLogo />
            </Marquee>

            {/* marquee video */}
            {/* <div>
                <video
                    className="w-full"
                    muted // @ts-ignore
                    autoPlay={"autoplay"}
                    preload="auto"
                    loop>
                    <source src={MarqVid} type="video/mp4"/>
                </video>
            </div> */}

            {/* second container */}
            <div className="p-3 md:p-10 lg:p-10 second-container flex flex-col">
                <video
                    className="mix-blend-exclusion w-[110px] md:w-[135px] lg:w-[150px]"
                    muted // @ts-ignore
                    autoPlay={"autoplay"}
                    preload="auto"
                    loop>
                    <source src={Versatile} type="video/mp4"/>
                </video>

                <div className="flex flex-col md:flex-row lg:flex-row">
                    <div className="w-full md:w-[50%] lg:w-[50%]">
                        <h1 className="text-xl md:text-[2.5vw] lg:text-[2.5vw] leading-relaxed font-bold heading-text">To simplify the complexity of Generative AI.</h1>
                        <p className="text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed text-[#CECECE] break-words mt-[20px]">Ground Truth® simplifies AI Agent development with an intuitive drag-and-drop interface, enabling rapid creation of complex agentic workflows.</p>
                        {/* lists */}
                        <div className="mt-[40px] flex flex-col text-[#CECECE]">
                            <div className="flex items-center gap-3 glass-card-1">
                                <div className="badge badge-secondary badge-xs"></div>
                                <div className="text-base md:text-[1.15vw] lg:text-[1.15vw]"><span className="text-accent">Integrate with any model,</span> with no limitations.</div>
                            </div>

                            <div className="flex items-center gap-3 glass-card-2">
                                <div className="badge badge-secondary badge-xs"></div>
                                <div className="text-base md:text-[1.15vw] lg:text-[1.15vw]">Easily craft prompts that guide your agent to <span className="text-accent"> act on your data exactly as you need.</span></div>
                            </div>

                            <div className="flex items-center gap-3 glass-card-3">
                                <div className="badge badge-secondary badge-xs"></div>
                                <div className="text-base md:text-[1.15vw] lg:text-[1.15vw]">Connect and synchronize with your <span className="text-accent">existing tools and systems for a unified workflow</span>.</div>
                            </div>
                        </div>
                    </div>

                    {/* graphics */}
                    <div className="mt-8 md:mt-[26px] lg:mt-[26px] w-full md:w-[50%] lg:w-[50%]">
                        <div className="w-full md:w-[80%] lg:w-[80%] flex justify-center items-center mx-auto">
                            <video
                                className="mix-blend-lighten"
                                muted // @ts-ignore
                                autoPlay={"autoplay"}
                                preload="auto"
                                loop>
                                <source src={Home2Vid} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            {/* third container */}
                <div className="p-3 md:p-10 lg:p-10 flex flex-col justify-center items-center third-container home-3-container">
                    {/* <ParticlesComponent /> */}
                    <video
                            className="mix-blend-exclusion w-[100px] md:w-[115px] lg:w-[130px]"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={Whyus} type="video/mp4"/>
                        </video>
                    <h1 className="text-xl md:text-[2.5vw] lg:text-[2.5vw] leading-[1.2] text-center mt-[26px] font-bold heading-text">The only platform to provide complete control over the entire agentic workflow lifecycle, using our proprietary framework.</h1>
                    {/* cards */}
                    <div className="hidden md:flex lg:flex w-full mt-[90px]">

                        {/* left */}
                        <div className="w-[25%] flex flex-col mr-1">
                            <div className="flex justify-end solve-card-to-left border-r-0">
                                <div className={`border-l border-l-[#1F1F1F] md:p-[43px] md:ml-[43px] lg:p-[43px] lg:ml-[43px] ${activeIcon === "1" ? "border !border-white rounded-lg" : ""}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" className="hover:cursor-pointer" onClick={() => setActiveIcon("1") }>
                                        <path d="M13.9994 45.7683C12.963 45.7683 12.0757 45.3993 11.3376 44.6611C10.5995 43.923 10.2305 43.0358 10.2305 41.9994C10.2305 40.963 10.5995 40.0757 11.3376 39.3376C12.0757 38.5995 12.963 38.2305 13.9994 38.2305C15.0358 38.2305 15.923 38.5995 16.6611 39.3376C17.3992 40.0757 17.7683 40.963 17.7683 41.9994C17.7683 43.0358 17.3992 43.923 16.6611 44.6611C15.923 45.3993 15.0358 45.7683 13.9994 45.7683ZM27.9994 45.7683C26.963 45.7683 26.0757 45.3993 25.3376 44.6611C24.5995 43.923 24.2305 43.0358 24.2305 41.9994C24.2305 40.963 24.5995 40.0757 25.3376 39.3376C26.0757 38.5995 26.963 38.2305 27.9994 38.2305C29.0358 38.2305 29.923 38.5995 30.6611 39.3376C31.3992 40.0757 31.7683 40.963 31.7683 41.9994C31.7683 43.0358 31.3992 43.923 30.6611 44.6611C29.923 45.3993 29.0358 45.7683 27.9994 45.7683ZM41.9994 45.7683C40.963 45.7683 40.0757 45.3993 39.3376 44.6611C38.5995 43.923 38.2305 43.0358 38.2305 41.9994C38.2305 40.963 38.5995 40.0757 39.3376 39.3376C40.0757 38.5995 40.963 38.2305 41.9994 38.2305C43.0358 38.2305 43.923 38.5995 44.6611 39.3376C45.3992 40.0757 45.7683 40.963 45.7683 41.9994C45.7683 43.0358 45.3992 43.923 44.6611 44.6611C43.923 45.3993 43.0358 45.7683 41.9994 45.7683ZM13.9994 31.7683C12.963 31.7683 12.0757 31.3992 11.3376 30.6611C10.5995 29.923 10.2305 29.0358 10.2305 27.9994C10.2305 26.963 10.5995 26.0757 11.3376 25.3376C12.0757 24.5995 12.963 24.2305 13.9994 24.2305C15.0358 24.2305 15.923 24.5995 16.6611 25.3376C17.3992 26.0757 17.7683 26.963 17.7683 27.9994C17.7683 29.0358 17.3992 29.923 16.6611 30.6611C15.923 31.3992 15.0358 31.7683 13.9994 31.7683ZM27.9994 31.7683C26.963 31.7683 26.0757 31.3992 25.3376 30.6611C24.5995 29.923 24.2305 29.0358 24.2305 27.9994C24.2305 26.963 24.5995 26.0757 25.3376 25.3376C26.0757 24.5995 26.963 24.2305 27.9994 24.2305C29.0358 24.2305 29.923 24.5995 30.6611 25.3376C31.3992 26.0757 31.7683 26.963 31.7683 27.9994C31.7683 29.0358 31.3992 29.923 30.6611 30.6611C29.923 31.3992 29.0358 31.7683 27.9994 31.7683ZM41.9994 31.7683C40.963 31.7683 40.0757 31.3992 39.3376 30.6611C38.5995 29.923 38.2305 29.0358 38.2305 27.9994C38.2305 26.963 38.5995 26.0757 39.3376 25.3376C40.0757 24.5995 40.963 24.2305 41.9994 24.2305C43.0358 24.2305 43.923 24.5995 44.6611 25.3376C45.3992 26.0757 45.7683 26.963 45.7683 27.9994C45.7683 29.0358 45.3992 29.923 44.6611 30.6611C43.923 31.3992 43.0358 31.7683 41.9994 31.7683ZM13.9994 17.7683C12.963 17.7683 12.0757 17.3992 11.3376 16.6611C10.5995 15.923 10.2305 15.0358 10.2305 13.9994C10.2305 12.963 10.5995 12.0757 11.3376 11.3376C12.0757 10.5995 12.963 10.2305 13.9994 10.2305C15.0358 10.2305 15.923 10.5995 16.6611 11.3376C17.3992 12.0757 17.7683 12.963 17.7683 13.9994C17.7683 15.0358 17.3992 15.923 16.6611 16.6611C15.923 17.3992 15.0358 17.7683 13.9994 17.7683ZM27.9994 17.7683C26.963 17.7683 26.0757 17.3992 25.3376 16.6611C24.5995 15.923 24.2305 15.0358 24.2305 13.9994C24.2305 12.963 24.5995 12.0757 25.3376 11.3376C26.0757 10.5995 26.963 10.2305 27.9994 10.2305C29.0358 10.2305 29.923 10.5995 30.6611 11.3376C31.3992 12.0757 31.7683 12.963 31.7683 13.9994C31.7683 15.0358 31.3992 15.923 30.6611 16.6611C29.923 17.3992 29.0358 17.7683 27.9994 17.7683ZM41.9994 17.7683C40.963 17.7683 40.0757 17.3992 39.3376 16.6611C38.5995 15.923 38.2305 15.0358 38.2305 13.9994C38.2305 12.963 38.5995 12.0757 39.3376 11.3376C40.0757 10.5995 40.963 10.2305 41.9994 10.2305C43.0358 10.2305 43.923 10.5995 44.6611 11.3376C45.3992 12.0757 45.7683 12.963 45.7683 13.9994C45.7683 15.0358 45.3992 15.923 44.6611 16.6611C43.923 17.3992 43.0358 17.7683 41.9994 17.7683Z" fill="white" fillOpacity={activeIcon === "1" ? "1" : "0.4"}/>
                                        <g filter="url(#filter0_f_524_70212)">
                                            <circle cx="14.0005" cy="14.0005" r="4.11765" fill="#0FAE96"/>
                                        </g>
                                        <defs>
                                            <filter id="filter0_f_524_70212" x="4.88281" y="4.88281" width="18.2344" height="18.2344" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_524_70212"/>
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex justify-end solve-card-to-left border-r-0">
                                <div className={`border-l border-l-[#1F1F1F] md:p-[43px] md:ml-[43px] lg:p-[43px] lg:ml-[43px] ${activeIcon === "2" ? "border !border-white rounded-lg" : ""}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" className="hover:cursor-pointer" onClick={() => setActiveIcon("2") }>
                                        <path d="M20.6492 39.2578L27.9992 34.8245L35.3492 39.3162L33.4242 30.9161L39.8992 25.3161L31.3825 24.5578L27.9992 16.6245L24.6158 24.4995L16.0992 25.2578L22.5742 30.9161L20.6492 39.2578ZM27.9992 38.9393L18.9219 44.4133C18.5836 44.6109 18.2447 44.6939 17.9052 44.6624C17.5657 44.6309 17.2584 44.5166 16.9835 44.3194C16.7082 44.1218 16.4956 43.8638 16.3459 43.5453C16.1966 43.2268 16.1727 42.8745 16.2742 42.4883L18.6839 32.1814L10.6701 25.2444C10.3706 24.9842 10.1799 24.6828 10.0978 24.3402C10.0154 23.9976 10.037 23.6647 10.1626 23.3416C10.2882 23.0188 10.4692 22.7549 10.7057 22.55C10.9421 22.345 11.2653 22.2111 11.6752 22.1481L22.251 21.2241L26.3571 11.4911C26.5064 11.1291 26.7329 10.8613 27.0367 10.6879C27.3404 10.5145 27.6612 10.4277 27.9992 10.4277C28.3371 10.4277 28.6579 10.5145 28.9617 10.6879C29.2654 10.8613 29.4919 11.1291 29.6413 11.4911L33.7473 21.2241L44.3232 22.1481C44.7331 22.2111 45.0562 22.345 45.2927 22.55C45.5291 22.7549 45.7101 23.0188 45.8358 23.3416C45.9614 23.6647 45.9829 23.9976 45.9005 24.3402C45.8184 24.6828 45.6277 24.9842 45.3283 25.2444L37.3144 32.1814L39.7242 42.4883C39.8257 42.8745 39.8018 43.2268 39.6524 43.5453C39.5027 43.8638 39.2902 44.1218 39.0148 44.3194C38.7399 44.5166 38.4327 44.6309 38.0932 44.6624C37.7537 44.6939 37.4147 44.6109 37.0764 44.4133L27.9992 38.9393Z" fill="white" fillOpacity={activeIcon === "2" ? "1" : "0.4"}/>
                                        <g filter="url(#filter0_f_524_70215)">
                                            <ellipse cx="12.3532" cy="23.8825" rx="1.92157" ry="1.92157" fill="#0FAE96"/>
                                        </g>
                                        <defs>
                                            <filter id="filter0_f_524_70215" x="5.43164" y="16.9609" width="13.8438" height="13.8438" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_524_70215"/>
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className={`border-l border-l-[#1F1F1F] md:p-[43px] md:ml-[43px] lg:p-[43px] lg:ml-[43px] ${activeIcon === "3" ? "border !border-white rounded-lg" : ""}`}> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" className="hover:cursor-pointer" onClick={() => setActiveIcon("3") }>
                                        <path d="M27.9995 32.6662L23.3329 27.9995L27.9995 23.3329L32.6662 27.9995L27.9995 32.6662ZM23.0412 19.3615L18.1505 14.4709L25.0111 7.60969C25.433 7.18813 25.9057 6.87566 26.4292 6.67227C26.9526 6.46888 27.4761 6.36719 27.9995 6.36719C28.523 6.36719 29.0464 6.46888 29.5699 6.67227C30.0933 6.87566 30.566 7.18813 30.9879 7.60969L37.8485 14.4709L32.9579 19.3615L27.9995 14.4032L23.0412 19.3615ZM14.4709 37.8485L7.60969 30.9879C7.18813 30.566 6.87566 30.0933 6.67227 29.5699C6.46888 29.0464 6.36719 28.523 6.36719 27.9995C6.36719 27.4761 6.46888 26.9526 6.67227 26.4292C6.87566 25.9057 7.18813 25.4331 7.60969 25.0111L14.4709 18.1505L19.3615 23.0412L14.4032 27.9995L19.3615 32.9579L14.4709 37.8485ZM41.5282 37.8485L36.6375 32.9579L41.5959 27.9995L36.6375 23.0412L41.5282 18.1505L48.3894 25.0111C48.8109 25.4331 49.1234 25.9057 49.3268 26.4292C49.5302 26.9526 49.6319 27.4761 49.6319 27.9995C49.6319 28.523 49.5302 29.0464 49.3268 29.5699C49.1234 30.0933 48.8109 30.566 48.3894 30.9879L41.5282 37.8485ZM25.0111 48.3894L18.1505 41.5282L23.0412 36.6375L27.9995 41.5959L32.9579 36.6375L37.8485 41.5282L30.9879 48.3894C30.566 48.8109 30.0933 49.1234 29.5699 49.3268C29.0464 49.5302 28.523 49.6319 27.9995 49.6319C27.4761 49.6319 26.9526 49.5302 26.4292 49.3268C25.9057 49.1234 25.433 48.8109 25.0111 48.3894Z" fill="white" fillOpacity={activeIcon === "3" ? "1" : "0.4"}/>
                                        <g filter="url(#filter0_f_524_70218)">
                                            <circle cx="10.9795" cy="26.9013" r="2.7451" fill="#0FAE96"/>
                                        </g>
                                        <defs>
                                            <filter id="filter0_f_524_70218" x="3.23438" y="19.1562" width="15.4902" height="15.4902" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_524_70218"/>
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* middle */}
                        <div className="home-dynamic-content-container flex items-center justify-center text-center p-10 w-[70vw] text-[24px]">
                            {parse(getIconDetails(activeIcon))}
                        </div>

                        {/* right */}
                        <div className="w-[25%] ml-1">
                            <div className="solve-card-to-right border-l-0 flex justify-start">
                                <div className={`border-r border-r-[#1F1F1F] md:p-[43px] md:mr-[43px] lg:p-[43px] lg:mr-[43px] ${activeIcon === "4" ? "border !border-white rounded-lg" : ""}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" className="hover:cursor-pointer" onClick={() => setActiveIcon("4") }>
                                        <path d="M12.344 40.9674L15.4537 44.0772C15.7769 44.3999 15.9385 44.8022 15.9385 45.2841C15.9385 45.7655 15.7769 46.1678 15.4537 46.491C15.1309 46.8142 14.7249 46.9757 14.2357 46.9757C13.7465 46.9757 13.3403 46.8142 13.0171 46.491L7.19779 40.6932C6.77584 40.2717 6.56487 39.7798 6.56487 39.2174C6.56487 38.6551 6.77584 38.1629 7.19779 37.741L13.0171 31.9211C13.3403 31.5979 13.7465 31.4363 14.2357 31.4363C14.7249 31.4363 15.1309 31.5979 15.4537 31.9211C15.7769 32.2443 15.9385 32.6502 15.9385 33.1391C15.9385 33.6283 15.7769 34.0345 15.4537 34.3577L12.344 37.4674L43.6561 37.4674L40.5464 34.3577C40.2232 34.0345 40.0616 33.6322 40.0616 33.1507C40.0616 32.6689 40.2232 32.2666 40.5464 31.9438C40.8691 31.6207 41.2751 31.4591 41.7644 31.4591C42.2536 31.4591 42.6598 31.6207 42.983 31.9438L48.8023 37.741C49.2242 38.1629 49.4352 38.6551 49.4352 39.2174C49.4352 39.7798 49.2242 40.2717 48.8023 40.6932L42.983 46.5132C42.6598 46.8363 42.2573 46.9942 41.7755 46.9868C41.294 46.9794 40.8917 46.8142 40.5685 46.491C40.2454 46.1678 40.0838 45.7616 40.0838 45.2724C40.0838 44.7836 40.2454 44.3776 40.5685 44.0544L43.6561 40.9674L12.344 40.9674ZM5.56445 25.0827L5.56445 24.2123C5.56445 23.4136 5.78729 22.6889 6.23295 22.0382C6.67862 21.3876 7.28879 20.8902 8.06345 20.5461C9.02984 20.1183 10.0328 19.7953 11.0723 19.5772C12.1118 19.3586 13.1925 19.2493 14.3145 19.2493C15.436 19.2493 16.5165 19.3586 17.556 19.5772C18.5955 19.7953 19.5985 20.1183 20.5649 20.5461C21.3395 20.8902 21.9497 21.3876 22.3954 22.0382C22.841 22.6889 23.0639 23.4136 23.0639 24.2123L23.0639 25.0827L5.56445 25.0827ZM32.9362 25.0827L32.9362 24.2123C32.9362 23.4136 33.159 22.6889 33.6047 22.0382C34.0504 21.3876 34.6605 20.8902 35.4352 20.5461C36.4016 20.1183 37.4045 19.7953 38.444 19.5772C39.4835 19.3586 40.5641 19.2493 41.6856 19.2493C42.8076 19.2493 43.8883 19.3586 44.9278 19.5772C45.9673 19.7953 46.9702 20.1183 47.9366 20.5461C48.7113 20.8902 49.3215 21.3876 49.7671 22.0383C50.2128 22.6889 50.4356 23.4136 50.4356 24.2123L50.4356 25.0827L32.9362 25.0827ZM14.3145 16.1979C13.1805 16.1979 12.2164 15.8009 11.4223 15.0068C10.6282 14.2126 10.2311 13.2486 10.2311 12.1146C10.2311 10.981 10.6282 10.0171 11.4223 9.223C12.2164 8.4285 13.1805 8.03125 14.3145 8.03125C15.4481 8.03125 16.4119 8.4285 17.206 9.223C18.0001 10.0171 18.3972 10.981 18.3972 12.1146C18.3972 13.2486 18.0001 14.2126 17.206 15.0068C16.4119 15.8009 15.4481 16.1979 14.3145 16.1979ZM41.6856 16.1979C40.552 16.1979 39.5881 15.8009 38.794 15.0068C37.9999 14.2126 37.6029 13.2486 37.6029 12.1146C37.6029 10.981 37.9999 10.0171 38.794 9.223C39.5881 8.4285 40.552 8.03125 41.6856 8.03125C42.8196 8.03125 43.7837 8.4285 44.5778 9.223C45.3719 10.0171 45.769 10.981 45.769 12.1146C45.769 13.2486 45.3719 14.2126 44.5778 15.0068C43.7837 15.8009 42.8196 16.1979 41.6856 16.1979Z" fill="white" fillOpacity={activeIcon === "4" ? "1" : "0.4"}/>
                                        <g filter="url(#filter0_f_524_70224)">
                                            <circle cx="28.001" cy="38.9795" r="2.7451" fill="#0FAE96"/>
                                        </g>
                                        <g filter="url(#filter1_f_524_70224)">
                                            <circle cx="28.001" cy="38.9795" r="2.7451" fill="#0FAE96"/>
                                        </g>
                                        <defs>
                                            <filter id="filter0_f_524_70224" x="20.2559" y="31.2344" width="15.4902" height="15.4902" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_524_70224"/>
                                            </filter>
                                            <filter id="filter1_f_524_70224" x="20.2559" y="31.2344" width="15.4902" height="15.4902" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_524_70224"/>
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            <div className="solve-card-to-right border-l-0 flex justify-start">
                                <div className={`border-r border-r-[#1F1F1F] md:p-[43px] md:mr-[43px] lg:p-[43px] lg:mr-[43px] ${activeIcon === "5" ? "border !border-white rounded-lg" : ""}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" className="hover:cursor-pointer" onClick={() => setActiveIcon("5") }>
                                        <path d="M9.06386 48.013C8.07998 48.013 7.24328 47.6683 6.55378 46.9788C5.86428 46.2889 5.51953 45.452 5.51953 44.4681L5.51953 10.724C5.51953 9.74013 5.86428 8.90344 6.55378 8.21394C7.24328 7.52444 8.07998 7.17969 9.06386 7.17969L24.1413 7.17969C25.1252 7.17969 25.9619 7.52444 26.6514 8.21394C27.3409 8.90344 27.6856 9.74013 27.6856 10.724L27.6856 16.513L46.9362 16.513C47.9201 16.513 48.7568 16.8578 49.4463 17.5473C50.1358 18.2368 50.4805 19.0735 50.4805 20.0574L50.4805 33.7884C50.4805 34.2843 50.3127 34.7 49.9771 35.0356C49.6419 35.3708 49.2262 35.5384 48.7299 35.5384C48.2341 35.5384 47.8186 35.3708 47.4834 35.0356C47.1485 34.7 46.9811 34.2843 46.9811 33.7884L46.9811 20.013L27.6856 20.013L27.6856 25.8464L32.8014 25.8464L32.8014 29.3464L27.6856 29.3464L27.6856 35.1797L32.8014 35.1797L32.8014 38.6797L27.6856 38.6797L27.6856 44.513L36.1667 44.513C36.6625 44.513 37.0783 44.6808 37.4139 45.0164C37.7491 45.3517 37.9167 45.7674 37.9167 46.2636C37.9167 46.7598 37.7491 47.1754 37.4139 47.5102C37.0783 47.8454 36.6625 48.013 36.1667 48.013L9.06386 48.013ZM9.01895 44.513L14.8529 44.513L14.8529 38.6797L9.01895 38.6797L9.01895 44.513ZM9.01895 35.1797L14.8529 35.1797L14.8529 29.3464L9.01895 29.3464L9.01895 35.1797ZM9.01895 25.8464L14.8529 25.8464L14.8529 20.013L9.01895 20.013L9.01895 25.8464ZM9.01895 16.513L14.8529 16.513L14.8529 10.6797L9.01895 10.6797L9.01895 16.513ZM18.3523 44.513L24.1862 44.513L24.1862 38.6797L18.3523 38.6797L18.3523 44.513ZM18.3523 35.1797L24.1862 35.1797L24.1862 29.3464L18.3523 29.3464L18.3523 35.1797ZM18.3523 25.8464L24.1862 25.8464L24.1862 20.013L18.3523 20.013L18.3523 25.8464ZM18.3523 16.513L24.1862 16.513L24.1862 10.6797L18.3523 10.6797L18.3523 16.513ZM48.7299 52.6797C48.2341 52.6797 47.8186 52.5119 47.4834 52.1763C47.1485 51.841 46.9811 51.4255 46.9811 50.9297L46.9811 48.013L44.0639 48.013C43.568 48.013 43.1525 47.8452 42.8173 47.5096C42.4821 47.174 42.3144 46.7581 42.3144 46.2619C42.3144 45.766 42.4821 45.3505 42.8173 45.0153C43.1525 44.6804 43.568 44.513 44.0639 44.513L46.9811 44.513L46.9811 41.5964C46.9811 41.1005 47.1487 40.6848 47.4839 40.3492C47.8196 40.014 48.2355 39.8464 48.7317 39.8464C49.2275 39.8464 49.6431 40.014 49.9783 40.3492C50.3131 40.6848 50.4805 41.1005 50.4805 41.5964L50.4805 44.513L53.3972 44.513C53.893 44.513 54.3088 44.6808 54.6444 45.0164C54.9796 45.3517 55.1472 45.7674 55.1472 46.2636C55.1472 46.7598 54.9796 47.1754 54.6444 47.5102C54.3088 47.8454 53.893 48.013 53.3972 48.013L50.4805 48.013L50.4805 50.9297C50.4805 51.4255 50.3127 51.841 49.9771 52.1763C49.6419 52.5119 49.2262 52.6797 48.7299 52.6797ZM37.9167 29.3464L37.9167 25.8464L41.4167 25.8464L41.4167 29.3464L37.9167 29.3464ZM37.9167 38.6797L37.9167 35.1797L41.4167 35.1797L41.4167 38.6797L37.9167 38.6797Z" fill="white" fillOpacity={activeIcon === "5" ? "1" : "0.4"}/>
                                        <g filter="url(#filter0_f_524_70227)">
                                            <ellipse cx="7.96063" cy="9.60711" rx="1.92157" ry="1.92157" fill="#0FAE96"/>
                                        </g>
                                        <g filter="url(#filter1_f_524_70227)">
                                            <ellipse cx="7.96063" cy="9.60711" rx="1.92157" ry="1.92157" fill="#0FAE96"/>
                                        </g>
                                        <defs>
                                            <filter id="filter0_f_524_70227" x="1.03906" y="2.68555" width="13.8438" height="13.8438" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_524_70227"/>
                                            </filter>
                                            <filter id="filter1_f_524_70227" x="1.03906" y="2.68555" width="13.8438" height="13.8438" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_524_70227"/>
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        {/* <div className="w-full md:w-[33%] lg:w-[33%] px-6 py-8 solve-card-to-left flex flex-col justify-center items-center text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" className="hover:cursor-pointer">
                                <path d="M13.9994 45.7683C12.963 45.7683 12.0757 45.3993 11.3376 44.6611C10.5995 43.923 10.2305 43.0358 10.2305 41.9994C10.2305 40.963 10.5995 40.0757 11.3376 39.3376C12.0757 38.5995 12.963 38.2305 13.9994 38.2305C15.0358 38.2305 15.923 38.5995 16.6611 39.3376C17.3992 40.0757 17.7683 40.963 17.7683 41.9994C17.7683 43.0358 17.3992 43.923 16.6611 44.6611C15.923 45.3993 15.0358 45.7683 13.9994 45.7683ZM27.9994 45.7683C26.963 45.7683 26.0757 45.3993 25.3376 44.6611C24.5995 43.923 24.2305 43.0358 24.2305 41.9994C24.2305 40.963 24.5995 40.0757 25.3376 39.3376C26.0757 38.5995 26.963 38.2305 27.9994 38.2305C29.0358 38.2305 29.923 38.5995 30.6611 39.3376C31.3992 40.0757 31.7683 40.963 31.7683 41.9994C31.7683 43.0358 31.3992 43.923 30.6611 44.6611C29.923 45.3993 29.0358 45.7683 27.9994 45.7683ZM41.9994 45.7683C40.963 45.7683 40.0757 45.3993 39.3376 44.6611C38.5995 43.923 38.2305 43.0358 38.2305 41.9994C38.2305 40.963 38.5995 40.0757 39.3376 39.3376C40.0757 38.5995 40.963 38.2305 41.9994 38.2305C43.0358 38.2305 43.923 38.5995 44.6611 39.3376C45.3992 40.0757 45.7683 40.963 45.7683 41.9994C45.7683 43.0358 45.3992 43.923 44.6611 44.6611C43.923 45.3993 43.0358 45.7683 41.9994 45.7683ZM13.9994 31.7683C12.963 31.7683 12.0757 31.3992 11.3376 30.6611C10.5995 29.923 10.2305 29.0358 10.2305 27.9994C10.2305 26.963 10.5995 26.0757 11.3376 25.3376C12.0757 24.5995 12.963 24.2305 13.9994 24.2305C15.0358 24.2305 15.923 24.5995 16.6611 25.3376C17.3992 26.0757 17.7683 26.963 17.7683 27.9994C17.7683 29.0358 17.3992 29.923 16.6611 30.6611C15.923 31.3992 15.0358 31.7683 13.9994 31.7683ZM27.9994 31.7683C26.963 31.7683 26.0757 31.3992 25.3376 30.6611C24.5995 29.923 24.2305 29.0358 24.2305 27.9994C24.2305 26.963 24.5995 26.0757 25.3376 25.3376C26.0757 24.5995 26.963 24.2305 27.9994 24.2305C29.0358 24.2305 29.923 24.5995 30.6611 25.3376C31.3992 26.0757 31.7683 26.963 31.7683 27.9994C31.7683 29.0358 31.3992 29.923 30.6611 30.6611C29.923 31.3992 29.0358 31.7683 27.9994 31.7683ZM41.9994 31.7683C40.963 31.7683 40.0757 31.3992 39.3376 30.6611C38.5995 29.923 38.2305 29.0358 38.2305 27.9994C38.2305 26.963 38.5995 26.0757 39.3376 25.3376C40.0757 24.5995 40.963 24.2305 41.9994 24.2305C43.0358 24.2305 43.923 24.5995 44.6611 25.3376C45.3992 26.0757 45.7683 26.963 45.7683 27.9994C45.7683 29.0358 45.3992 29.923 44.6611 30.6611C43.923 31.3992 43.0358 31.7683 41.9994 31.7683ZM13.9994 17.7683C12.963 17.7683 12.0757 17.3992 11.3376 16.6611C10.5995 15.923 10.2305 15.0358 10.2305 13.9994C10.2305 12.963 10.5995 12.0757 11.3376 11.3376C12.0757 10.5995 12.963 10.2305 13.9994 10.2305C15.0358 10.2305 15.923 10.5995 16.6611 11.3376C17.3992 12.0757 17.7683 12.963 17.7683 13.9994C17.7683 15.0358 17.3992 15.923 16.6611 16.6611C15.923 17.3992 15.0358 17.7683 13.9994 17.7683ZM27.9994 17.7683C26.963 17.7683 26.0757 17.3992 25.3376 16.6611C24.5995 15.923 24.2305 15.0358 24.2305 13.9994C24.2305 12.963 24.5995 12.0757 25.3376 11.3376C26.0757 10.5995 26.963 10.2305 27.9994 10.2305C29.0358 10.2305 29.923 10.5995 30.6611 11.3376C31.3992 12.0757 31.7683 12.963 31.7683 13.9994C31.7683 15.0358 31.3992 15.923 30.6611 16.6611C29.923 17.3992 29.0358 17.7683 27.9994 17.7683ZM41.9994 17.7683C40.963 17.7683 40.0757 17.3992 39.3376 16.6611C38.5995 15.923 38.2305 15.0358 38.2305 13.9994C38.2305 12.963 38.5995 12.0757 39.3376 11.3376C40.0757 10.5995 40.963 10.2305 41.9994 10.2305C43.0358 10.2305 43.923 10.5995 44.6611 11.3376C45.3992 12.0757 45.7683 12.963 45.7683 13.9994C45.7683 15.0358 45.3992 15.923 44.6611 16.6611C43.923 17.3992 43.0358 17.7683 41.9994 17.7683Z" fill="white" fillOpacity="1"/>
                                <g filter="url(#filter0_f_524_70212)">
                                    <circle cx="14.0005" cy="14.0005" r="4.11765" fill="#0FAE96"/>
                                </g>
                                <defs>
                                    <filter id="filter0_f_524_70212" x="4.88281" y="4.88281" width="18.2344" height="18.2344" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_524_70212"/>
                                    </filter>
                                </defs>
                            </svg>
                            <div className="mt-4">
                                {parse(getIconDetails("1"))}
                            </div>
                        </div>

                        <div className="w-full md:w-[33%] lg:w-[33%] px-6 py-8 border-b border-b-[#cecece4d] flex flex-col justify-center items-center text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" className="hover:cursor-pointer">
                                <path d="M20.6492 39.2578L27.9992 34.8245L35.3492 39.3162L33.4242 30.9161L39.8992 25.3161L31.3825 24.5578L27.9992 16.6245L24.6158 24.4995L16.0992 25.2578L22.5742 30.9161L20.6492 39.2578ZM27.9992 38.9393L18.9219 44.4133C18.5836 44.6109 18.2447 44.6939 17.9052 44.6624C17.5657 44.6309 17.2584 44.5166 16.9835 44.3194C16.7082 44.1218 16.4956 43.8638 16.3459 43.5453C16.1966 43.2268 16.1727 42.8745 16.2742 42.4883L18.6839 32.1814L10.6701 25.2444C10.3706 24.9842 10.1799 24.6828 10.0978 24.3402C10.0154 23.9976 10.037 23.6647 10.1626 23.3416C10.2882 23.0188 10.4692 22.7549 10.7057 22.55C10.9421 22.345 11.2653 22.2111 11.6752 22.1481L22.251 21.2241L26.3571 11.4911C26.5064 11.1291 26.7329 10.8613 27.0367 10.6879C27.3404 10.5145 27.6612 10.4277 27.9992 10.4277C28.3371 10.4277 28.6579 10.5145 28.9617 10.6879C29.2654 10.8613 29.4919 11.1291 29.6413 11.4911L33.7473 21.2241L44.3232 22.1481C44.7331 22.2111 45.0562 22.345 45.2927 22.55C45.5291 22.7549 45.7101 23.0188 45.8358 23.3416C45.9614 23.6647 45.9829 23.9976 45.9005 24.3402C45.8184 24.6828 45.6277 24.9842 45.3283 25.2444L37.3144 32.1814L39.7242 42.4883C39.8257 42.8745 39.8018 43.2268 39.6524 43.5453C39.5027 43.8638 39.2902 44.1218 39.0148 44.3194C38.7399 44.5166 38.4327 44.6309 38.0932 44.6624C37.7537 44.6939 37.4147 44.6109 37.0764 44.4133L27.9992 38.9393Z" fill="white" fillOpacity="1"/>
                                <g filter="url(#filter0_f_524_70215)">
                                    <ellipse cx="12.3532" cy="23.8825" rx="1.92157" ry="1.92157" fill="#0FAE96"/>
                                </g>
                                <defs>
                                    <filter id="filter0_f_524_70215" x="5.43164" y="16.9609" width="13.8438" height="13.8438" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_524_70215"/>
                                    </filter>
                                </defs>
                            </svg>
                            <div className="mt-4">
                                {parse(getIconDetails("2"))}
                            </div>
                        </div>

                        <div className="w-full md:w-[33%] lg:w-[33%] px-6 py-8 solve-card-to-right flex flex-col justify-center items-center text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" className="hover:cursor-pointer">
                                <path d="M27.9995 32.6662L23.3329 27.9995L27.9995 23.3329L32.6662 27.9995L27.9995 32.6662ZM23.0412 19.3615L18.1505 14.4709L25.0111 7.60969C25.433 7.18813 25.9057 6.87566 26.4292 6.67227C26.9526 6.46888 27.4761 6.36719 27.9995 6.36719C28.523 6.36719 29.0464 6.46888 29.5699 6.67227C30.0933 6.87566 30.566 7.18813 30.9879 7.60969L37.8485 14.4709L32.9579 19.3615L27.9995 14.4032L23.0412 19.3615ZM14.4709 37.8485L7.60969 30.9879C7.18813 30.566 6.87566 30.0933 6.67227 29.5699C6.46888 29.0464 6.36719 28.523 6.36719 27.9995C6.36719 27.4761 6.46888 26.9526 6.67227 26.4292C6.87566 25.9057 7.18813 25.4331 7.60969 25.0111L14.4709 18.1505L19.3615 23.0412L14.4032 27.9995L19.3615 32.9579L14.4709 37.8485ZM41.5282 37.8485L36.6375 32.9579L41.5959 27.9995L36.6375 23.0412L41.5282 18.1505L48.3894 25.0111C48.8109 25.4331 49.1234 25.9057 49.3268 26.4292C49.5302 26.9526 49.6319 27.4761 49.6319 27.9995C49.6319 28.523 49.5302 29.0464 49.3268 29.5699C49.1234 30.0933 48.8109 30.566 48.3894 30.9879L41.5282 37.8485ZM25.0111 48.3894L18.1505 41.5282L23.0412 36.6375L27.9995 41.5959L32.9579 36.6375L37.8485 41.5282L30.9879 48.3894C30.566 48.8109 30.0933 49.1234 29.5699 49.3268C29.0464 49.5302 28.523 49.6319 27.9995 49.6319C27.4761 49.6319 26.9526 49.5302 26.4292 49.3268C25.9057 49.1234 25.433 48.8109 25.0111 48.3894Z" fill="white" fillOpacity="1"/>
                                <g filter="url(#filter0_f_524_70218)">
                                    <circle cx="10.9795" cy="26.9013" r="2.7451" fill="#0FAE96"/>
                                </g>
                                <defs>
                                    <filter id="filter0_f_524_70218" x="3.23438" y="19.1562" width="15.4902" height="15.4902" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_524_70218"/>
                                    </filter>
                                </defs>
                            </svg>
                            <div className="mt-4">
                                {parse(getIconDetails("3"))}
                            </div>
                        </div>

                        <div className="w-full md:w-[33%] lg:w-[33%] px-6 py-8 border-r border-r-[#cecece4d] flex flex-col justify-center items-center text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" className="hover:cursor-pointer">
                                <path d="M12.344 40.9674L15.4537 44.0772C15.7769 44.3999 15.9385 44.8022 15.9385 45.2841C15.9385 45.7655 15.7769 46.1678 15.4537 46.491C15.1309 46.8142 14.7249 46.9757 14.2357 46.9757C13.7465 46.9757 13.3403 46.8142 13.0171 46.491L7.19779 40.6932C6.77584 40.2717 6.56487 39.7798 6.56487 39.2174C6.56487 38.6551 6.77584 38.1629 7.19779 37.741L13.0171 31.9211C13.3403 31.5979 13.7465 31.4363 14.2357 31.4363C14.7249 31.4363 15.1309 31.5979 15.4537 31.9211C15.7769 32.2443 15.9385 32.6502 15.9385 33.1391C15.9385 33.6283 15.7769 34.0345 15.4537 34.3577L12.344 37.4674L43.6561 37.4674L40.5464 34.3577C40.2232 34.0345 40.0616 33.6322 40.0616 33.1507C40.0616 32.6689 40.2232 32.2666 40.5464 31.9438C40.8691 31.6207 41.2751 31.4591 41.7644 31.4591C42.2536 31.4591 42.6598 31.6207 42.983 31.9438L48.8023 37.741C49.2242 38.1629 49.4352 38.6551 49.4352 39.2174C49.4352 39.7798 49.2242 40.2717 48.8023 40.6932L42.983 46.5132C42.6598 46.8363 42.2573 46.9942 41.7755 46.9868C41.294 46.9794 40.8917 46.8142 40.5685 46.491C40.2454 46.1678 40.0838 45.7616 40.0838 45.2724C40.0838 44.7836 40.2454 44.3776 40.5685 44.0544L43.6561 40.9674L12.344 40.9674ZM5.56445 25.0827L5.56445 24.2123C5.56445 23.4136 5.78729 22.6889 6.23295 22.0382C6.67862 21.3876 7.28879 20.8902 8.06345 20.5461C9.02984 20.1183 10.0328 19.7953 11.0723 19.5772C12.1118 19.3586 13.1925 19.2493 14.3145 19.2493C15.436 19.2493 16.5165 19.3586 17.556 19.5772C18.5955 19.7953 19.5985 20.1183 20.5649 20.5461C21.3395 20.8902 21.9497 21.3876 22.3954 22.0382C22.841 22.6889 23.0639 23.4136 23.0639 24.2123L23.0639 25.0827L5.56445 25.0827ZM32.9362 25.0827L32.9362 24.2123C32.9362 23.4136 33.159 22.6889 33.6047 22.0382C34.0504 21.3876 34.6605 20.8902 35.4352 20.5461C36.4016 20.1183 37.4045 19.7953 38.444 19.5772C39.4835 19.3586 40.5641 19.2493 41.6856 19.2493C42.8076 19.2493 43.8883 19.3586 44.9278 19.5772C45.9673 19.7953 46.9702 20.1183 47.9366 20.5461C48.7113 20.8902 49.3215 21.3876 49.7671 22.0383C50.2128 22.6889 50.4356 23.4136 50.4356 24.2123L50.4356 25.0827L32.9362 25.0827ZM14.3145 16.1979C13.1805 16.1979 12.2164 15.8009 11.4223 15.0068C10.6282 14.2126 10.2311 13.2486 10.2311 12.1146C10.2311 10.981 10.6282 10.0171 11.4223 9.223C12.2164 8.4285 13.1805 8.03125 14.3145 8.03125C15.4481 8.03125 16.4119 8.4285 17.206 9.223C18.0001 10.0171 18.3972 10.981 18.3972 12.1146C18.3972 13.2486 18.0001 14.2126 17.206 15.0068C16.4119 15.8009 15.4481 16.1979 14.3145 16.1979ZM41.6856 16.1979C40.552 16.1979 39.5881 15.8009 38.794 15.0068C37.9999 14.2126 37.6029 13.2486 37.6029 12.1146C37.6029 10.981 37.9999 10.0171 38.794 9.223C39.5881 8.4285 40.552 8.03125 41.6856 8.03125C42.8196 8.03125 43.7837 8.4285 44.5778 9.223C45.3719 10.0171 45.769 10.981 45.769 12.1146C45.769 13.2486 45.3719 14.2126 44.5778 15.0068C43.7837 15.8009 42.8196 16.1979 41.6856 16.1979Z" fill="white" fillOpacity="1"/>
                                <g filter="url(#filter0_f_524_70224)">
                                    <circle cx="28.001" cy="38.9795" r="2.7451" fill="#0FAE96"/>
                                </g>
                                <g filter="url(#filter1_f_524_70224)">
                                    <circle cx="28.001" cy="38.9795" r="2.7451" fill="#0FAE96"/>
                                </g>
                                <defs>
                                    <filter id="filter0_f_524_70224" x="20.2559" y="31.2344" width="15.4902" height="15.4902" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_524_70224"/>
                                    </filter>
                                    <filter id="filter1_f_524_70224" x="20.2559" y="31.2344" width="15.4902" height="15.4902" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_524_70224"/>
                                    </filter>
                                </defs>
                            </svg>

                            <div className="mt-4">
                                {parse(getIconDetails("4"))}
                            </div>
                        </div>

                        <div className="w-full md:w-[33%] lg:w-[33%] px-6 py-8 border-r border-r-[#cecece4d] flex flex-col justify-center items-center text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" className="hover:cursor-pointer">
                                <path d="M9.06386 48.013C8.07998 48.013 7.24328 47.6683 6.55378 46.9788C5.86428 46.2889 5.51953 45.452 5.51953 44.4681L5.51953 10.724C5.51953 9.74013 5.86428 8.90344 6.55378 8.21394C7.24328 7.52444 8.07998 7.17969 9.06386 7.17969L24.1413 7.17969C25.1252 7.17969 25.9619 7.52444 26.6514 8.21394C27.3409 8.90344 27.6856 9.74013 27.6856 10.724L27.6856 16.513L46.9362 16.513C47.9201 16.513 48.7568 16.8578 49.4463 17.5473C50.1358 18.2368 50.4805 19.0735 50.4805 20.0574L50.4805 33.7884C50.4805 34.2843 50.3127 34.7 49.9771 35.0356C49.6419 35.3708 49.2262 35.5384 48.7299 35.5384C48.2341 35.5384 47.8186 35.3708 47.4834 35.0356C47.1485 34.7 46.9811 34.2843 46.9811 33.7884L46.9811 20.013L27.6856 20.013L27.6856 25.8464L32.8014 25.8464L32.8014 29.3464L27.6856 29.3464L27.6856 35.1797L32.8014 35.1797L32.8014 38.6797L27.6856 38.6797L27.6856 44.513L36.1667 44.513C36.6625 44.513 37.0783 44.6808 37.4139 45.0164C37.7491 45.3517 37.9167 45.7674 37.9167 46.2636C37.9167 46.7598 37.7491 47.1754 37.4139 47.5102C37.0783 47.8454 36.6625 48.013 36.1667 48.013L9.06386 48.013ZM9.01895 44.513L14.8529 44.513L14.8529 38.6797L9.01895 38.6797L9.01895 44.513ZM9.01895 35.1797L14.8529 35.1797L14.8529 29.3464L9.01895 29.3464L9.01895 35.1797ZM9.01895 25.8464L14.8529 25.8464L14.8529 20.013L9.01895 20.013L9.01895 25.8464ZM9.01895 16.513L14.8529 16.513L14.8529 10.6797L9.01895 10.6797L9.01895 16.513ZM18.3523 44.513L24.1862 44.513L24.1862 38.6797L18.3523 38.6797L18.3523 44.513ZM18.3523 35.1797L24.1862 35.1797L24.1862 29.3464L18.3523 29.3464L18.3523 35.1797ZM18.3523 25.8464L24.1862 25.8464L24.1862 20.013L18.3523 20.013L18.3523 25.8464ZM18.3523 16.513L24.1862 16.513L24.1862 10.6797L18.3523 10.6797L18.3523 16.513ZM48.7299 52.6797C48.2341 52.6797 47.8186 52.5119 47.4834 52.1763C47.1485 51.841 46.9811 51.4255 46.9811 50.9297L46.9811 48.013L44.0639 48.013C43.568 48.013 43.1525 47.8452 42.8173 47.5096C42.4821 47.174 42.3144 46.7581 42.3144 46.2619C42.3144 45.766 42.4821 45.3505 42.8173 45.0153C43.1525 44.6804 43.568 44.513 44.0639 44.513L46.9811 44.513L46.9811 41.5964C46.9811 41.1005 47.1487 40.6848 47.4839 40.3492C47.8196 40.014 48.2355 39.8464 48.7317 39.8464C49.2275 39.8464 49.6431 40.014 49.9783 40.3492C50.3131 40.6848 50.4805 41.1005 50.4805 41.5964L50.4805 44.513L53.3972 44.513C53.893 44.513 54.3088 44.6808 54.6444 45.0164C54.9796 45.3517 55.1472 45.7674 55.1472 46.2636C55.1472 46.7598 54.9796 47.1754 54.6444 47.5102C54.3088 47.8454 53.893 48.013 53.3972 48.013L50.4805 48.013L50.4805 50.9297C50.4805 51.4255 50.3127 51.841 49.9771 52.1763C49.6419 52.5119 49.2262 52.6797 48.7299 52.6797ZM37.9167 29.3464L37.9167 25.8464L41.4167 25.8464L41.4167 29.3464L37.9167 29.3464ZM37.9167 38.6797L37.9167 35.1797L41.4167 35.1797L41.4167 38.6797L37.9167 38.6797Z" fill="white" fillOpacity="1"/>
                                <g filter="url(#filter0_f_524_70227)">
                                    <ellipse cx="7.96063" cy="9.60711" rx="1.92157" ry="1.92157" fill="#0FAE96"/>
                                </g>
                                <g filter="url(#filter1_f_524_70227)">
                                    <ellipse cx="7.96063" cy="9.60711" rx="1.92157" ry="1.92157" fill="#0FAE96"/>
                                </g>
                                <defs>
                                    <filter id="filter0_f_524_70227" x="1.03906" y="2.68555" width="13.8438" height="13.8438" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_524_70227"/>
                                    </filter>
                                    <filter id="filter1_f_524_70227" x="1.03906" y="2.68555" width="13.8438" height="13.8438" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_524_70227"/>
                                    </filter>
                                </defs>
                            </svg>
                            <div className="mt-4">
                                {parse(getIconDetails("5"))}
                            </div>
                        </div> */}


                    </div>

                    <div className="flex md:hidden lg:hidden flex-wrap w-full mt-[40px]">
                        <div className="w-full md:w-[33%] lg:w-[33%] px-6 py-8 border-r border-r-[#cecece4d] border-b border-b-[#cecece4d]">
                            {/* icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" className="hover:cursor-pointer">
                                <path d="M13.9994 45.7683C12.963 45.7683 12.0757 45.3993 11.3376 44.6611C10.5995 43.923 10.2305 43.0358 10.2305 41.9994C10.2305 40.963 10.5995 40.0757 11.3376 39.3376C12.0757 38.5995 12.963 38.2305 13.9994 38.2305C15.0358 38.2305 15.923 38.5995 16.6611 39.3376C17.3992 40.0757 17.7683 40.963 17.7683 41.9994C17.7683 43.0358 17.3992 43.923 16.6611 44.6611C15.923 45.3993 15.0358 45.7683 13.9994 45.7683ZM27.9994 45.7683C26.963 45.7683 26.0757 45.3993 25.3376 44.6611C24.5995 43.923 24.2305 43.0358 24.2305 41.9994C24.2305 40.963 24.5995 40.0757 25.3376 39.3376C26.0757 38.5995 26.963 38.2305 27.9994 38.2305C29.0358 38.2305 29.923 38.5995 30.6611 39.3376C31.3992 40.0757 31.7683 40.963 31.7683 41.9994C31.7683 43.0358 31.3992 43.923 30.6611 44.6611C29.923 45.3993 29.0358 45.7683 27.9994 45.7683ZM41.9994 45.7683C40.963 45.7683 40.0757 45.3993 39.3376 44.6611C38.5995 43.923 38.2305 43.0358 38.2305 41.9994C38.2305 40.963 38.5995 40.0757 39.3376 39.3376C40.0757 38.5995 40.963 38.2305 41.9994 38.2305C43.0358 38.2305 43.923 38.5995 44.6611 39.3376C45.3992 40.0757 45.7683 40.963 45.7683 41.9994C45.7683 43.0358 45.3992 43.923 44.6611 44.6611C43.923 45.3993 43.0358 45.7683 41.9994 45.7683ZM13.9994 31.7683C12.963 31.7683 12.0757 31.3992 11.3376 30.6611C10.5995 29.923 10.2305 29.0358 10.2305 27.9994C10.2305 26.963 10.5995 26.0757 11.3376 25.3376C12.0757 24.5995 12.963 24.2305 13.9994 24.2305C15.0358 24.2305 15.923 24.5995 16.6611 25.3376C17.3992 26.0757 17.7683 26.963 17.7683 27.9994C17.7683 29.0358 17.3992 29.923 16.6611 30.6611C15.923 31.3992 15.0358 31.7683 13.9994 31.7683ZM27.9994 31.7683C26.963 31.7683 26.0757 31.3992 25.3376 30.6611C24.5995 29.923 24.2305 29.0358 24.2305 27.9994C24.2305 26.963 24.5995 26.0757 25.3376 25.3376C26.0757 24.5995 26.963 24.2305 27.9994 24.2305C29.0358 24.2305 29.923 24.5995 30.6611 25.3376C31.3992 26.0757 31.7683 26.963 31.7683 27.9994C31.7683 29.0358 31.3992 29.923 30.6611 30.6611C29.923 31.3992 29.0358 31.7683 27.9994 31.7683ZM41.9994 31.7683C40.963 31.7683 40.0757 31.3992 39.3376 30.6611C38.5995 29.923 38.2305 29.0358 38.2305 27.9994C38.2305 26.963 38.5995 26.0757 39.3376 25.3376C40.0757 24.5995 40.963 24.2305 41.9994 24.2305C43.0358 24.2305 43.923 24.5995 44.6611 25.3376C45.3992 26.0757 45.7683 26.963 45.7683 27.9994C45.7683 29.0358 45.3992 29.923 44.6611 30.6611C43.923 31.3992 43.0358 31.7683 41.9994 31.7683ZM13.9994 17.7683C12.963 17.7683 12.0757 17.3992 11.3376 16.6611C10.5995 15.923 10.2305 15.0358 10.2305 13.9994C10.2305 12.963 10.5995 12.0757 11.3376 11.3376C12.0757 10.5995 12.963 10.2305 13.9994 10.2305C15.0358 10.2305 15.923 10.5995 16.6611 11.3376C17.3992 12.0757 17.7683 12.963 17.7683 13.9994C17.7683 15.0358 17.3992 15.923 16.6611 16.6611C15.923 17.3992 15.0358 17.7683 13.9994 17.7683ZM27.9994 17.7683C26.963 17.7683 26.0757 17.3992 25.3376 16.6611C24.5995 15.923 24.2305 15.0358 24.2305 13.9994C24.2305 12.963 24.5995 12.0757 25.3376 11.3376C26.0757 10.5995 26.963 10.2305 27.9994 10.2305C29.0358 10.2305 29.923 10.5995 30.6611 11.3376C31.3992 12.0757 31.7683 12.963 31.7683 13.9994C31.7683 15.0358 31.3992 15.923 30.6611 16.6611C29.923 17.3992 29.0358 17.7683 27.9994 17.7683ZM41.9994 17.7683C40.963 17.7683 40.0757 17.3992 39.3376 16.6611C38.5995 15.923 38.2305 15.0358 38.2305 13.9994C38.2305 12.963 38.5995 12.0757 39.3376 11.3376C40.0757 10.5995 40.963 10.2305 41.9994 10.2305C43.0358 10.2305 43.923 10.5995 44.6611 11.3376C45.3992 12.0757 45.7683 12.963 45.7683 13.9994C45.7683 15.0358 45.3992 15.923 44.6611 16.6611C43.923 17.3992 43.0358 17.7683 41.9994 17.7683Z" fill="white" fillOpacity="1"/>
                                <g filter="url(#filter0_f_524_70212)">
                                    <circle cx="14.0005" cy="14.0005" r="4.11765" fill="#0FAE96"/>
                                </g>
                                <defs>
                                    <filter id="filter0_f_524_70212" x="4.88281" y="4.88281" width="18.2344" height="18.2344" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_524_70212"/>
                                    </filter>
                                </defs>
                            </svg>
                            <div className="mt-4">
                                {parse(getIconDetails("1"))}
                            </div>
                        </div>

                        <div className="w-full md:w-[33%] lg:w-[33%] px-6 py-8 border-l border-l-[#cecece4d] border-b border-b-[#cecece4d]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" className="hover:cursor-pointer">
                                <path d="M20.6492 39.2578L27.9992 34.8245L35.3492 39.3162L33.4242 30.9161L39.8992 25.3161L31.3825 24.5578L27.9992 16.6245L24.6158 24.4995L16.0992 25.2578L22.5742 30.9161L20.6492 39.2578ZM27.9992 38.9393L18.9219 44.4133C18.5836 44.6109 18.2447 44.6939 17.9052 44.6624C17.5657 44.6309 17.2584 44.5166 16.9835 44.3194C16.7082 44.1218 16.4956 43.8638 16.3459 43.5453C16.1966 43.2268 16.1727 42.8745 16.2742 42.4883L18.6839 32.1814L10.6701 25.2444C10.3706 24.9842 10.1799 24.6828 10.0978 24.3402C10.0154 23.9976 10.037 23.6647 10.1626 23.3416C10.2882 23.0188 10.4692 22.7549 10.7057 22.55C10.9421 22.345 11.2653 22.2111 11.6752 22.1481L22.251 21.2241L26.3571 11.4911C26.5064 11.1291 26.7329 10.8613 27.0367 10.6879C27.3404 10.5145 27.6612 10.4277 27.9992 10.4277C28.3371 10.4277 28.6579 10.5145 28.9617 10.6879C29.2654 10.8613 29.4919 11.1291 29.6413 11.4911L33.7473 21.2241L44.3232 22.1481C44.7331 22.2111 45.0562 22.345 45.2927 22.55C45.5291 22.7549 45.7101 23.0188 45.8358 23.3416C45.9614 23.6647 45.9829 23.9976 45.9005 24.3402C45.8184 24.6828 45.6277 24.9842 45.3283 25.2444L37.3144 32.1814L39.7242 42.4883C39.8257 42.8745 39.8018 43.2268 39.6524 43.5453C39.5027 43.8638 39.2902 44.1218 39.0148 44.3194C38.7399 44.5166 38.4327 44.6309 38.0932 44.6624C37.7537 44.6939 37.4147 44.6109 37.0764 44.4133L27.9992 38.9393Z" fill="white" fillOpacity="1"/>
                                <g filter="url(#filter0_f_524_70215)">
                                    <ellipse cx="12.3532" cy="23.8825" rx="1.92157" ry="1.92157" fill="#0FAE96"/>
                                </g>
                                <defs>
                                    <filter id="filter0_f_524_70215" x="5.43164" y="16.9609" width="13.8438" height="13.8438" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_524_70215"/>
                                    </filter>
                                </defs>
                            </svg>
                            <div className="mt-4">
                                {parse(getIconDetails("2"))}
                            </div>
                        </div>

                        <div className="w-full md:w-[33%] lg:w-[33%] px-6 py-8 border-r border-r-[#cecece4d] border-b border-b-[#cecece4d] ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" className="hover:cursor-pointer">
                                <path d="M27.9995 32.6662L23.3329 27.9995L27.9995 23.3329L32.6662 27.9995L27.9995 32.6662ZM23.0412 19.3615L18.1505 14.4709L25.0111 7.60969C25.433 7.18813 25.9057 6.87566 26.4292 6.67227C26.9526 6.46888 27.4761 6.36719 27.9995 6.36719C28.523 6.36719 29.0464 6.46888 29.5699 6.67227C30.0933 6.87566 30.566 7.18813 30.9879 7.60969L37.8485 14.4709L32.9579 19.3615L27.9995 14.4032L23.0412 19.3615ZM14.4709 37.8485L7.60969 30.9879C7.18813 30.566 6.87566 30.0933 6.67227 29.5699C6.46888 29.0464 6.36719 28.523 6.36719 27.9995C6.36719 27.4761 6.46888 26.9526 6.67227 26.4292C6.87566 25.9057 7.18813 25.4331 7.60969 25.0111L14.4709 18.1505L19.3615 23.0412L14.4032 27.9995L19.3615 32.9579L14.4709 37.8485ZM41.5282 37.8485L36.6375 32.9579L41.5959 27.9995L36.6375 23.0412L41.5282 18.1505L48.3894 25.0111C48.8109 25.4331 49.1234 25.9057 49.3268 26.4292C49.5302 26.9526 49.6319 27.4761 49.6319 27.9995C49.6319 28.523 49.5302 29.0464 49.3268 29.5699C49.1234 30.0933 48.8109 30.566 48.3894 30.9879L41.5282 37.8485ZM25.0111 48.3894L18.1505 41.5282L23.0412 36.6375L27.9995 41.5959L32.9579 36.6375L37.8485 41.5282L30.9879 48.3894C30.566 48.8109 30.0933 49.1234 29.5699 49.3268C29.0464 49.5302 28.523 49.6319 27.9995 49.6319C27.4761 49.6319 26.9526 49.5302 26.4292 49.3268C25.9057 49.1234 25.433 48.8109 25.0111 48.3894Z" fill="white" fillOpacity="1"/>
                                <g filter="url(#filter0_f_524_70218)">
                                    <circle cx="10.9795" cy="26.9013" r="2.7451" fill="#0FAE96"/>
                                </g>
                                <defs>
                                    <filter id="filter0_f_524_70218" x="3.23438" y="19.1562" width="15.4902" height="15.4902" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_524_70218"/>
                                    </filter>
                                </defs>
                            </svg>
                            <div className="mt-4">
                                {parse(getIconDetails("3"))}
                            </div>
                        </div>

                        <div className="w-full md:w-[33%] lg:w-[33%] px-6 py-8 border-l border-l-[#cecece4d] border-b border-b-[#cecece4d]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" className="hover:cursor-pointer">
                                <path d="M12.344 40.9674L15.4537 44.0772C15.7769 44.3999 15.9385 44.8022 15.9385 45.2841C15.9385 45.7655 15.7769 46.1678 15.4537 46.491C15.1309 46.8142 14.7249 46.9757 14.2357 46.9757C13.7465 46.9757 13.3403 46.8142 13.0171 46.491L7.19779 40.6932C6.77584 40.2717 6.56487 39.7798 6.56487 39.2174C6.56487 38.6551 6.77584 38.1629 7.19779 37.741L13.0171 31.9211C13.3403 31.5979 13.7465 31.4363 14.2357 31.4363C14.7249 31.4363 15.1309 31.5979 15.4537 31.9211C15.7769 32.2443 15.9385 32.6502 15.9385 33.1391C15.9385 33.6283 15.7769 34.0345 15.4537 34.3577L12.344 37.4674L43.6561 37.4674L40.5464 34.3577C40.2232 34.0345 40.0616 33.6322 40.0616 33.1507C40.0616 32.6689 40.2232 32.2666 40.5464 31.9438C40.8691 31.6207 41.2751 31.4591 41.7644 31.4591C42.2536 31.4591 42.6598 31.6207 42.983 31.9438L48.8023 37.741C49.2242 38.1629 49.4352 38.6551 49.4352 39.2174C49.4352 39.7798 49.2242 40.2717 48.8023 40.6932L42.983 46.5132C42.6598 46.8363 42.2573 46.9942 41.7755 46.9868C41.294 46.9794 40.8917 46.8142 40.5685 46.491C40.2454 46.1678 40.0838 45.7616 40.0838 45.2724C40.0838 44.7836 40.2454 44.3776 40.5685 44.0544L43.6561 40.9674L12.344 40.9674ZM5.56445 25.0827L5.56445 24.2123C5.56445 23.4136 5.78729 22.6889 6.23295 22.0382C6.67862 21.3876 7.28879 20.8902 8.06345 20.5461C9.02984 20.1183 10.0328 19.7953 11.0723 19.5772C12.1118 19.3586 13.1925 19.2493 14.3145 19.2493C15.436 19.2493 16.5165 19.3586 17.556 19.5772C18.5955 19.7953 19.5985 20.1183 20.5649 20.5461C21.3395 20.8902 21.9497 21.3876 22.3954 22.0382C22.841 22.6889 23.0639 23.4136 23.0639 24.2123L23.0639 25.0827L5.56445 25.0827ZM32.9362 25.0827L32.9362 24.2123C32.9362 23.4136 33.159 22.6889 33.6047 22.0382C34.0504 21.3876 34.6605 20.8902 35.4352 20.5461C36.4016 20.1183 37.4045 19.7953 38.444 19.5772C39.4835 19.3586 40.5641 19.2493 41.6856 19.2493C42.8076 19.2493 43.8883 19.3586 44.9278 19.5772C45.9673 19.7953 46.9702 20.1183 47.9366 20.5461C48.7113 20.8902 49.3215 21.3876 49.7671 22.0383C50.2128 22.6889 50.4356 23.4136 50.4356 24.2123L50.4356 25.0827L32.9362 25.0827ZM14.3145 16.1979C13.1805 16.1979 12.2164 15.8009 11.4223 15.0068C10.6282 14.2126 10.2311 13.2486 10.2311 12.1146C10.2311 10.981 10.6282 10.0171 11.4223 9.223C12.2164 8.4285 13.1805 8.03125 14.3145 8.03125C15.4481 8.03125 16.4119 8.4285 17.206 9.223C18.0001 10.0171 18.3972 10.981 18.3972 12.1146C18.3972 13.2486 18.0001 14.2126 17.206 15.0068C16.4119 15.8009 15.4481 16.1979 14.3145 16.1979ZM41.6856 16.1979C40.552 16.1979 39.5881 15.8009 38.794 15.0068C37.9999 14.2126 37.6029 13.2486 37.6029 12.1146C37.6029 10.981 37.9999 10.0171 38.794 9.223C39.5881 8.4285 40.552 8.03125 41.6856 8.03125C42.8196 8.03125 43.7837 8.4285 44.5778 9.223C45.3719 10.0171 45.769 10.981 45.769 12.1146C45.769 13.2486 45.3719 14.2126 44.5778 15.0068C43.7837 15.8009 42.8196 16.1979 41.6856 16.1979Z" fill="white" fillOpacity="1"/>
                                <g filter="url(#filter0_f_524_70224)">
                                    <circle cx="28.001" cy="38.9795" r="2.7451" fill="#0FAE96"/>
                                </g>
                                <g filter="url(#filter1_f_524_70224)">
                                    <circle cx="28.001" cy="38.9795" r="2.7451" fill="#0FAE96"/>
                                </g>
                                <defs>
                                    <filter id="filter0_f_524_70224" x="20.2559" y="31.2344" width="15.4902" height="15.4902" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_524_70224"/>
                                    </filter>
                                    <filter id="filter1_f_524_70224" x="20.2559" y="31.2344" width="15.4902" height="15.4902" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_524_70224"/>
                                    </filter>
                                </defs>
                            </svg>

                            <div className="mt-4">
                                {parse(getIconDetails("4"))}
                            </div>
                        </div>

                        <div className="w-full md:w-[33%] lg:w-[33%] px-6 py-8 border-r border-r-[#cecece4d]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" className="hover:cursor-pointer">
                                <path d="M9.06386 48.013C8.07998 48.013 7.24328 47.6683 6.55378 46.9788C5.86428 46.2889 5.51953 45.452 5.51953 44.4681L5.51953 10.724C5.51953 9.74013 5.86428 8.90344 6.55378 8.21394C7.24328 7.52444 8.07998 7.17969 9.06386 7.17969L24.1413 7.17969C25.1252 7.17969 25.9619 7.52444 26.6514 8.21394C27.3409 8.90344 27.6856 9.74013 27.6856 10.724L27.6856 16.513L46.9362 16.513C47.9201 16.513 48.7568 16.8578 49.4463 17.5473C50.1358 18.2368 50.4805 19.0735 50.4805 20.0574L50.4805 33.7884C50.4805 34.2843 50.3127 34.7 49.9771 35.0356C49.6419 35.3708 49.2262 35.5384 48.7299 35.5384C48.2341 35.5384 47.8186 35.3708 47.4834 35.0356C47.1485 34.7 46.9811 34.2843 46.9811 33.7884L46.9811 20.013L27.6856 20.013L27.6856 25.8464L32.8014 25.8464L32.8014 29.3464L27.6856 29.3464L27.6856 35.1797L32.8014 35.1797L32.8014 38.6797L27.6856 38.6797L27.6856 44.513L36.1667 44.513C36.6625 44.513 37.0783 44.6808 37.4139 45.0164C37.7491 45.3517 37.9167 45.7674 37.9167 46.2636C37.9167 46.7598 37.7491 47.1754 37.4139 47.5102C37.0783 47.8454 36.6625 48.013 36.1667 48.013L9.06386 48.013ZM9.01895 44.513L14.8529 44.513L14.8529 38.6797L9.01895 38.6797L9.01895 44.513ZM9.01895 35.1797L14.8529 35.1797L14.8529 29.3464L9.01895 29.3464L9.01895 35.1797ZM9.01895 25.8464L14.8529 25.8464L14.8529 20.013L9.01895 20.013L9.01895 25.8464ZM9.01895 16.513L14.8529 16.513L14.8529 10.6797L9.01895 10.6797L9.01895 16.513ZM18.3523 44.513L24.1862 44.513L24.1862 38.6797L18.3523 38.6797L18.3523 44.513ZM18.3523 35.1797L24.1862 35.1797L24.1862 29.3464L18.3523 29.3464L18.3523 35.1797ZM18.3523 25.8464L24.1862 25.8464L24.1862 20.013L18.3523 20.013L18.3523 25.8464ZM18.3523 16.513L24.1862 16.513L24.1862 10.6797L18.3523 10.6797L18.3523 16.513ZM48.7299 52.6797C48.2341 52.6797 47.8186 52.5119 47.4834 52.1763C47.1485 51.841 46.9811 51.4255 46.9811 50.9297L46.9811 48.013L44.0639 48.013C43.568 48.013 43.1525 47.8452 42.8173 47.5096C42.4821 47.174 42.3144 46.7581 42.3144 46.2619C42.3144 45.766 42.4821 45.3505 42.8173 45.0153C43.1525 44.6804 43.568 44.513 44.0639 44.513L46.9811 44.513L46.9811 41.5964C46.9811 41.1005 47.1487 40.6848 47.4839 40.3492C47.8196 40.014 48.2355 39.8464 48.7317 39.8464C49.2275 39.8464 49.6431 40.014 49.9783 40.3492C50.3131 40.6848 50.4805 41.1005 50.4805 41.5964L50.4805 44.513L53.3972 44.513C53.893 44.513 54.3088 44.6808 54.6444 45.0164C54.9796 45.3517 55.1472 45.7674 55.1472 46.2636C55.1472 46.7598 54.9796 47.1754 54.6444 47.5102C54.3088 47.8454 53.893 48.013 53.3972 48.013L50.4805 48.013L50.4805 50.9297C50.4805 51.4255 50.3127 51.841 49.9771 52.1763C49.6419 52.5119 49.2262 52.6797 48.7299 52.6797ZM37.9167 29.3464L37.9167 25.8464L41.4167 25.8464L41.4167 29.3464L37.9167 29.3464ZM37.9167 38.6797L37.9167 35.1797L41.4167 35.1797L41.4167 38.6797L37.9167 38.6797Z" fill="white" fillOpacity="1"/>
                                <g filter="url(#filter0_f_524_70227)">
                                    <ellipse cx="7.96063" cy="9.60711" rx="1.92157" ry="1.92157" fill="#0FAE96"/>
                                </g>
                                <g filter="url(#filter1_f_524_70227)">
                                    <ellipse cx="7.96063" cy="9.60711" rx="1.92157" ry="1.92157" fill="#0FAE96"/>
                                </g>
                                <defs>
                                    <filter id="filter0_f_524_70227" x="1.03906" y="2.68555" width="13.8438" height="13.8438" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_524_70227"/>
                                    </filter>
                                    <filter id="filter1_f_524_70227" x="1.03906" y="2.68555" width="13.8438" height="13.8438" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_524_70227"/>
                                    </filter>
                                </defs>
                            </svg>
                            <div className="mt-4">
                                {parse(getIconDetails("5"))}
                            </div>
                        </div>
                    </div>

                    <div className="btn btn-accent rounded-sm mt-[35px] hover:cursor-pointer text-base md:text-[1.1vw] lg:text[1.1vw]" onClick={() => navigate("/contact-us")}><span className="px-6">Request Demo</span></div>
                </div>

            {/* fourth container */}
            <div className="p-3 md:p-10 lg:p-10 ">
                <div className="w-full md:w-[70%] lg:w-[70%] flex flex-col justify-end">
                    <video
                        className="mix-blend-exclusion w-[100px] md:w-[115px] lg:w-[130px]"
                        muted // @ts-ignore
                        autoPlay={"autoplay"}
                        preload="auto"
                        loop>
                        <source src={Stable} type="video/mp4"/>
                    </video>
                    <h1 className="text-xl md:text-[2.5vw] lg:text-[2.5vw] mt-[26px] font-bold heading-text leading-relaxed">Ensure Enterprise grade reliability and governance.</h1>
                    <p className="text-lg md:text-[1.5vw] lg:text-[1.5vw] mt-[20px] text-[#CECECE] leading-relaxed">Enterprises demand security and accountability, the <span className="uppercase text-[18px] font-bold leading-relaxed">Ground Truth® Framework</span> delivers with enterprise-grade control mechanisms:</p>
                </div>
                <div className="flex items-center gap-[40px] flex-col md:flex-row lg:flex-row mt-[20px]">
                    <div className="w-full md:w-[50%] lg:w-[50%] flex justify-center items-center">
                        <div className=" w-[90%] md:w-[90%] lg:w-[100%] flex justify-center items-center">
                            <video
                                className="mix-blend-exclusion"
                                muted // @ts-ignore
                                autoPlay={"autoplay"}
                                preload="auto"
                                loop>
                                <source src={Home3Vid} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                    <div className="flex flex-col text-[#CECECE] w-full md:w-[50%] lg:w-[50%] mt-[20px] md:mt-0 lg:mt-0">
                        <div className="flex items-center gap-3 glass-card-1">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div className="text-base md:text-[1.15vw] lg:text-[1.15vw]"><span className="font-bold"></span> Fine-tune agent responses and decision-marking processes</div>
                        </div>
                        <div className="flex items-center gap-3 glass-card-2">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div className="text-base md:text-[1.15vw] lg:text-[1.15vw]">Our unique Validation mode enables <span className="font-bold leading-relaxed text-accent">the debugging and optimization</span> of your agentic workflows.</div>
                        </div>
                        <div className="flex items-center gap-3 glass-card-3">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div className="text-base md:text-[1.15vw] lg:text-[1.15vw]"><span className="font-bold leading-relaxed text-accent">Guarantee security by deploying</span> agents in your environment, using your data.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* fifth container */}
            <div className="p-3 md:p-10 lg:p-10">
                <div className="w-full md:w-[70%] lg:w-[70%]">
                    <video
                        className="mix-blend-exclusion w-[100px] md:w-[115px] lg:w-[130px]"
                        muted // @ts-ignore
                        autoPlay={"autoplay"}
                        preload="auto"
                        loop>
                        <source src={Scalable} type="video/mp4"/>
                    </video>
                    <h1 className="text-xl md:text-[2.5vw] lg:text-[2.5vw] leading-relaxed font-bold mt-[26px] heading-text">And endless scaling possibilities for your AI Agents.</h1>
                    <p className="text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed mt-[20px] text-[#CECECE]">The Ground Truth® framework excels in the orchestration of complex agentic workflows, providing actual clarity around usage.</p>
                </div>
                <div className="flex justify-between mt-[20px] md:mt-0 lg:mt-0 items-center flex-col md:flex-row lg:flex-row">
                    <div className="flex flex-col text-[#CECECE]  w-full md:w-[50%] lg:w-[50%] mt-[20px] md:mt-12 lg:mt-12">
                        <div className="flex items-center gap-3 glass-card-1">
                                <div className="badge badge-secondary badge-xs"></div>
                                <div className="text-base md:text-[1.15vw] lg:text-[1.15vw]"><span className="font-bold leading-relaxed text-accent">Track your token consumption and monitor usage</span> simultaneously across all agentic workflows.</div>
                        </div>
                        <div className="flex items-center gap-3 glass-card-2">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div className="text-base md:text-[1.15vw] lg:text-[1.15vw]">
                                Extract insights from diverse sources through <span className="font-bold leading-relaxed text-accent"> concurrent information retrieval.</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 glass-card-3">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div className="text-base md:text-[1.15vw] lg:text-[1.15vw]">
                                Agents that <span className="font-bold leading-relaxed text-accent">operate asynchronously,</span> ensuring tasks are executed without waiting for sequential order.
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[50%] lg:w-[50%] flex justify-center items-center">
                        <div className=" w-[90%] md:w-[70%] lg:w-[70%] flex justify-center items-center">
                            <video
                                className="mix-blend-lighten"
                                muted // @ts-ignore
                                autoPlay={"autoplay"}
                                preload="auto"
                                loop>
                                <source src={Home4Vid} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            {/* sixth container */}
            <div className="p-3 md:p-10 lg:p-10">
                <div className="text-center flex flex-col items-center justify-center">
                    <div className="w-full md:w-[70%] lg:w-[70%]">
                        <h1 className="text-xl md:text-[2.5vw] lg:text-[2.5vw] leading-relaxed font-bold mt-[26px] heading-text">Built for Enterprise</h1>
                        <p className="text-lg md:text-[1.5vw] lg:text-[1.5vw] leading-relaxed mt-[20px] text-[#CECECE]">Whether you're a system integrator, an innovator, or a creator, our language chain framework provides the tools and capabilities you need to build and deploy Expert AI Agents™.</p>
                    </div>
                </div>
                {/* cards */}
                <div className="flex flex-col md:flex-row lg:flex-row flex-wrap items-center gap-[28px] justify-between mt-[60px] text-[#CECECE]">
                    {/* card 1 */}
                    <div className="glass-vertical-card-1 w-full md:w-[30%] lg:w-[30%] min-h-[450px] flex justify-center items-center">
                        <video
                            className="mix-blend-exclusion w-[100px]"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={Home1Icon} type="video/mp4"/>
                        </video>
                        <h2 className="font-bold text-xl md:text-[1.5vw] lg:text-[1.5vw] mt-[21px] heading-text leading-relaxed">Integrators</h2>
                        <p className=" text-lg md:text-[1.25vw] lg:text-[1.25vw] px-6 leading-relaxed mt-2">
                            <span className="font-bold text-accent"> Deliver the next era of AI-powered automation with Ground Truth®, </span>
                              the enterprise language chain framework that empowers you to build and deploy Expert AI Agents™ for your clients.
                        </p>

                        <div className={`flex mt-[38px] hover:cursor-pointer`} onClick={() => navigate("/integrators")}>
                            Learn More
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M13.924 8.64648L17.3086 12.6465M17.3086 12.6465L13.924 16.6465M17.3086 12.6465L6.80859 12.6465" stroke="#0FAE96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>    
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className="glass-vertical-card-2 w-full md:w-[30%] lg:w-[30%] min-h-[450px] flex justify-center items-center">
                        <div className="flex items-center h-[100px]">
                            <video
                                className="mix-blend-exclusion w-[85px]"
                                muted // @ts-ignore
                                autoPlay={"autoplay"}
                                preload="auto"
                                loop>
                                <source src={Home2Icon} type="video/mp4"/>
                            </video>
                        </div>
                        <h2 className="font-bold text-xl md:text-[1.5vw] lg:text-[1.5vw] mt-[21px] heading-text leading-relaxed">Innovators</h2>
                        <p className="text-lg md:text-[1.25vw] lg:text-[1.25vw] px-6 leading-relaxed mt-2">
                         
                            <span className="font-bold text-accent">Amplify your competitive advantage with Ground Truth®, </span>
                             the AI partner that empowers you to leverage your domain knowledge and build Expert AI Agents™ that transform your business.
                        </p>

                        <div className={`flex mt-[38px] hover:cursor-pointer`}  onClick={() => navigate("/innovators")}>
                            Learn More
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M13.924 8.64648L17.3086 12.6465M17.3086 12.6465L13.924 16.6465M17.3086 12.6465L6.80859 12.6465" stroke="#0FAE96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>    
                        </div>
                    </div>

                    {/* card 3 */}
                    <div className=" glass-vertical-card-3 w-full md:w-[30%] lg:w-[30%] min-h-[450px] flex justify-center items-center">
                        <div className="flex items-center h-[100px]">
                            <video
                                className="mix-blend-exclusion w-[85px]"
                                muted // @ts-ignore
                                autoPlay={"autoplay"}
                                preload="auto"
                                loop>
                                <source src={Home3Icon} type="video/mp4"/>
                            </video>
                        </div>
                        <h2 className="font-bold text-xl md:text-[1.5vw] lg:text-[1.5vw] mt-[21px] heading-text leading-relaxed">Creators</h2>
                        <p className="text-lg md:text-[1.25vw] lg:text-[1.25vw] px-6 leading-relaxed mt-2">
                            <span className="font-bold text-accent">
                                Ground Truth® empowers developers and analysts 
                            </span>
                                to incubate their ideas, transforming them into powerful Expert AI Agents™ and launching successful businesses.
                        </p>

                        <div className="flex mt-[38px] hover:cursor-pointer"  onClick={() => navigate("/creators")}>
                            Learn More
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M13.924 8.64648L17.3086 12.6465M17.3086 12.6465L13.924 16.6465M17.3086 12.6465L6.80859 12.6465" stroke="#0FAE96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>    
                        </div>
                    </div>

                </div>
            </div>

            {/* seventh container */}
            <div className="p-3 md:p-10 lg:p-10 flex justify-between items-center flex-col md:flex-row lg:flex-row gap-[5vw]">
                <div className="w-full md:w-[50%] lg:w-[50%]">
                    <div>
                        <h1 className="text-xl md:text-[2.5vw] lg:text-[2.5vw] leading-relaxed font-bold mt-[26px] heading-text">FAQs</h1>
                        <div className=" flex justify-center items-center mx-auto">
                            <p className="text-lg md:text-[1.2vw] lg:text-[1.2vw] leading-relaxed mt-[20px] text-[#CECECE]">This is a new space, and we're approaching things very differently, so if none of these answers on the right address your concerns. Please reach out, we would be more than happy to clear up anything.</p>
                        </div>
                    </div>
                    <div className="mt-[40px] ">
                        {/* <p className="text-[#a5a5a5]">
                            Still you have questions? Please write your email address and we will contact you soon. Thank you!
                        </p> */}
                        <div className="mt-[20px] flex items-center">
                            <input type="text" className=" input input-bordered w-full max-w-xs bg-white text-black rounded-sm" />
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