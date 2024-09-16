
import parse from 'html-react-parser';

import Innovator from "../../../public/vids/Innovator.mp4"
import Opportunity from "../../../public/vids/opportunity.mp4"
import Proof from "../../../public/vids/proof.mp4"
import Process from "../../../public/vids/process.mp4"

import Innovator1Icon from "../../../public/vids/innovator-icon-1.mp4"
import Innovator2Icon from "../../../public/vids/innovator-icon-2.mp4"
import Innovator3Icon from "../../../public/vids/innovator-icon-3.mp4"


import Innovartor1vid from "../../../public/vids/Innovator-1.mp4"

import Man from "../../../public/man.svg"
import InnovatorProof from "../../../public/Innovator-john.svg"
import { useEffect, useState } from "react"
import { InnovatorData } from "./data"
import { FaqAccordion } from "../../components"
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { addPrevLocation } from '../../store/locationSlice';



export const Innovators = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [innovatorsData, setInnovatorsData] = useState<string[]>(Object.values(InnovatorData))

    const [selectedIcon, setSelectedIcon] = useState<number>(0)

    useEffect(() => {
        const data = Object.values(InnovatorData)

        const newData = [data[selectedIcon]]

        data.forEach((value:string, index:number) => {
            if(index !== selectedIcon){
                newData.push(value)
            }
        })

        setInnovatorsData(newData)

    }, [selectedIcon])

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    // useEffect(() => {
    //     return () => {
    //         // localStorage.setItem("prev", "/innovators")
    //         dispatch(addPrevLocation("/innovators"))
    //     }
    // }, [])

    const handleNavigate = () => {
        dispatch(addPrevLocation("/innovators"))
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
                            <source src={Innovator} type="video/mp4"/>
                        </video>
                        <h1 className="text-xl lg:text-[40px] lg:leading-[66px] font-bold mt-[26px] heading-text">Transform your Domain Expertise into Cutting-Edge AI Agents</h1>
                        <p className="text-base lg:text-[18px] lg:leading-[28px] mt-[20px] text-[#CECECE]">Leverage the <span className=" text-[18px] font-bold leading-[28px]">Ground Truth®</span> framework to build the next generation of AI Agents, powered by your expertise, for your domain, and scale your business like never before.</p>
                        <div className="mt-[40px]">
                            <button className="btn btn-accent rounded-sm px-4 py-2 !text-white hover:cursor-pointer" onClick={() => handleNavigate()}>Request Demo</button>
                        </div>
                </div>
                <div className="mt-[20px] md:mt-0 lg:mt-0  w-full md:w-[40%] lg:w-[40%] flex justify-center items-center">
                    <div className="w-[70%] md:w-[50%] lg:w-[50%] flex justify-center items-center">
                        <video
                            className="mix-blend-exclusion"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={Innovartor1vid} type="video/mp4"/>
                        </video>
                    </div>
                </div>
           </div> 


           {/* second container */}
           <div className="integrator-second-container mt-1 md:mt-12 lg:mt-12 p-3 md:p-10 lg:p-10 flex flex-col items-center justify-between md:flex-row lg:flex-row">
                <div className="w-full md:w-[60%] lg:w-[60%]">
                        <video
                            className="mix-blend-exclusion w-[100px] md:w-[115px] lg:w-[130px]"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={Opportunity} type="video/mp4"/>
                        </video>
                        <h1 className="text-xl lg:text-[40px] lg:leading-[66px] font-bold mt-[26px] heading-text">Redefine Business with the Power of AI Agents</h1>
                        <div className="text-base lg:text-[18px] lg:leading-[28px] mt-[20px] text-[#CECECE]">
                            <p>AI is about to completely change how you use computers </p>
                            <p>- Bill Gates, 2023</p>
                        </div>
                
                        <div className="mt-[40px] flex flex-col gap-[18px] text-[#B1B1B1]">
                            <div className="flex items-center gap-3">
                                <div className="badge badge-secondary badge-xs"></div>
                                <div>The global AI market is projected to surpass $2.6 trillion by 2030, with AI Agents driving significant growth.</div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="badge badge-secondary badge-xs"></div>
                                <div>These agents, much like the internet, disrupt business operations by introducing a new paradigm for product and service delivery, with unmatched value.</div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="badge badge-secondary badge-xs"></div>
                                <div>Ground Truth® allows you to harness this shift, turning your IP into a dynamic Expert AI Agent™.</div>
                            </div>
                        </div>
                
                </div>

                <div className="w-full md:w-[40%] lg:w-[40%] flex justify-center items-center mt-[20px] md:mt-0 lg:mt-0">
                    <img src={Man} alt="" />
                </div>
           </div>

            {/* 3rd container */}
            <div className="mt-1 md:mt-12 lg:mt-12 p-3 md:p-10 lg:p-10">
                <div className="text-center">
                    <h1 className="text-xl lg:text-[40px] lg:leading-[66px] font-bold mt-[26px] heading-text">Benefits</h1>
                </div>
                {/* cards */}
                <div className="flex flex-wrap items-center gap-[28px] justify-between mt-2 md:mt-12 lg:mt-12">
                    {/* card 1 */}
                    <div className=" glass-vertical-card-1 w-[100%] md:w-[30%] lg:w-[30%] min-h-[300px] p-[50px]">
                        <video
                            className="mix-blend-exclusion w-[80px]"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={Innovator1Icon} type="video/mp4"/>
                        </video>
                        <h2 className="font-bold text-[20px] heading-text">Expand Your Reach with a New Offering</h2>
                        <p>
                            Develop a cutting-edge AI Agent product line that leverages your existing expertise to unlock exponential impact and reach new markets.
                        </p>
                    </div>

                    {/* card 2 */}
                    <div className="glass-vertical-card-2 w-[100%] md:w-[30%] lg:w-[30%] min-h-[300px] p-[50px]">
                        <video
                            className="mix-blend-exclusion w-[80px]"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={Innovator2Icon} type="video/mp4"/>
                        </video>
                        <h2 className="font-bold text-[20px] heading-text">Protect & Monetize Your IP</h2>
                        <p>         
                            Build your Expert AI Agent™ on top of our proprietary language chain framework, creating a secure moat around your intellectual property while maximizing its value.
                        </p>
                    </div>

                    {/* card 3 */}
                    <div className=" glass-vertical-card-3 w-[100%] md:w-[30%] lg:w-[30%] min-h-[300px] p-[50px]">
                        <video
                            className="mix-blend-exclusion w-[80px]"
                            muted // @ts-ignore
                            autoPlay={"autoplay"}
                            preload="auto"
                            loop>
                            <source src={Innovator3Icon} type="video/mp4"/>
                        </video>
                        <h2 className="font-bold text-[20px] heading-text">Partner for Success</h2>
                        <p>
                            We're committed to safeguarding and amplifying your IP. Our team of experts will partner with you every step of the way to ensure your Expert AI Agent™ thrives in the market.
                        </p>
                    </div>

                </div>
            </div>

            {/* 4th container */}
            <div className="mt-1 md:mt-12 lg:mt-12 p-3 md:p-10 lg:p-10 ">
                <div className="">
                    <video
                        className="mix-blend-exclusion w-[100px] md:w-[115px] lg:w-[130px]"
                        muted // @ts-ignore
                        autoPlay={"autoplay"}
                        preload="auto"
                        loop>
                        <source src={Proof} type="video/mp4"/>
                    </video>
                    <h1 className="text-xl lg:text-[40px] lg:leading-[66px] font-bold mt-[26px] heading-text">8X Energy</h1>
                    <p className="text-base lg:text-[18px] lg:leading-[28px] mt-[20px] text-[#CECECE]">With the <span className="text-[18px] font-bold leading-[28px]">Ground Truth® framework,</span> we were able to deliver an Expert AI Agent™ that:</p>
                </div>
                <div className="mt-12 flex items-center gap-[80px] flex-col-reverse md:flex-row lg:flex-row">
                    <div className="flex flex-col gap-[20px] ">
                        <div className="flex items-center gap-3 glass-card-1">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div>Bradley.ai™ significantly reduces operational costs by quickly generating essential information for DER designs, specifications, and financial analyses.</div>
                        </div>
                        <div className="flex items-center gap-3 glass-card-2">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div>
                                Optimizes energy usage by providing precise recommendations, ensuring a more resilient and reliable energy supply.
                             </div>
                        </div>
                        <div className="flex items-center gap-3 glass-card-3">
                            <div className="badge badge-secondary badge-xs"></div>
                            <div>Improves efficiency by minimizing carbon emissions through optimized DER configurations, enhancing both environmental and operational performance.</div>
                        </div>
                    </div>
                    <div className={`hidden md:flex lg:flex w-full md:w-[40%] lg:w-[40%] justify-center items-center relative text-center`}>
                        <img src={InnovatorProof} alt="" className="w-full"/>
                        <div className="absolute p-[5%] md:top-[10%] md:p-[10%] lg:top-[10%] lg:p-[10%]">
                            <h1 className="font-bold text-[20px]">$25 Billion Market Opportunity</h1>
                            <p className="text-[16px]">"With the Ground Truth® framework, we were able to create a systemic automation of information sources, and apply both objective and subjective analysis that cloned the domain expertise of our firm, to provide results at a speed that fundamentally changes how we do business."</p>
                        </div>
                    </div>

                    {/* for mobile render the feedback */}
                    <div className="flex flex-col gap-[20px] md:hidden lg:hidden text-center border border-[#CECECE] p-[10px] rounded-lg">
                        <div className="">
                            <h1 className="font-bold text-[20px]">$25 Billion Market Opportunity</h1>
                            <p className="text-[16px] mt-[20px]">"With the Ground Truth® framework, we were able to create a systemic automation of information sources, and apply both objective and subjective analysis that cloned the domain expertise of our firm, to provide results at a speed that fundamentally changes how we do business."</p>
                        </div>
                        <div className="border-t border-[#CECECE]">
                            <p>John Dukes</p>
                            <p>29+ Years DER Analysis Expertise</p>
                            <p>CSO @ 8X Energy</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5th container */}
            <div className="mt-1 md:mt-12 lg:mt-12 p-3 md:p-10 lg:p-10 ">
                <div className="flex flex-col items-center justify-center text-center">
                    <video
                        className="mix-blend-exclusion w-[100px] md:w-[115px] lg:w-[130px]"
                        muted // @ts-ignore
                        autoPlay={"autoplay"}
                        preload="auto"
                        loop>
                        <source src={Process} type="video/mp4"/>
                    </video>
                    <h1 className="text-xl lg:text-[40px] lg:leading-[66px] font-bold mt-[26px] heading-text">Turning Your IP into Expert AI Agents™ is a clear process.</h1>
                    <div className="mt-[40px]">
                            <button className="btn btn-accent rounded-sm px-4 py-2 !text-white hover:cursor-pointer" onClick={() => handleNavigate()}>Request Demo</button>
                    </div>
                </div>
            </div>
            {/* 5th 2nd */}
            <div className="integrator-second-container  pt-[20px]">
                {/* icons */}
                <div className="flex flex-wrap justify-center gap-[40px] mx-[1px] md:mx-0 lg:mx-0">
                    <div className={`p-[20px] hover:cursor-pointer ${selectedIcon === 0 ? "border border-white rounded-lg" : ""}`} onClick={() => setSelectedIcon(0)}>
                        <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="action_key_24dp_5F6368_FILL0_wght300_GRAD0_opsz24 1">
                        <path id="Vector" d="M38.7304 46.6667C36.3796 46.6667 34.3671 45.8306 32.6929 44.1584C31.0192 42.4861 30.1823 40.4758 30.1823 38.1273C30.1823 35.7792 31.0184 33.7698 32.6906 32.0991C34.3628 30.4285 36.373 29.5931 38.7211 29.5931C41.0696 29.5931 43.0792 30.4279 44.7499 32.0974C46.4205 33.7669 47.2559 35.7739 47.2559 38.1185C47.2559 38.997 47.1316 39.8277 46.8831 40.6105C46.635 41.3934 46.2821 42.1198 45.8244 42.7899L51.4331 48.3852C51.6069 48.531 51.7372 48.7134 51.8239 48.9324C51.9107 49.1509 51.954 49.3708 51.954 49.5921C51.954 49.8134 51.9107 50.0288 51.8239 50.2385C51.7372 50.4477 51.6069 50.6421 51.4331 50.8218C51.2896 50.9688 51.1101 51.0862 50.8947 51.1741C50.6789 51.2624 50.456 51.3065 50.2262 51.3065C49.9878 51.3065 49.7644 51.2624 49.5559 51.1741C49.3471 51.0862 49.1532 50.9688 48.9744 50.8218L43.3656 45.2714C42.6956 45.7287 41.9693 46.0756 41.1869 46.312C40.4048 46.5485 39.586 46.6667 38.7304 46.6667ZM13.7813 46.6889C11.4371 46.6889 9.43 45.8535 7.76011 44.1829C6.09061 42.5122 5.25586 40.4908 5.25586 38.1185C5.25586 35.7739 6.09061 33.7669 7.76011 32.0974C9.43 30.4279 11.4371 29.5931 13.7813 29.5931C16.1535 29.5931 18.1751 30.4279 19.8462 32.0974C21.5169 33.7669 22.3522 35.7739 22.3522 38.1185C22.3522 40.4908 21.5169 42.5122 19.8462 44.1829C18.1751 45.8535 16.1535 46.6889 13.7813 46.6889ZM13.7813 43.1889C15.1996 43.1889 16.3993 42.6983 17.3804 41.7171C18.3616 40.736 18.8522 39.5364 18.8522 38.1185C18.8522 36.7364 18.3616 35.5532 17.3804 34.569C16.3993 33.5851 15.1996 33.0931 13.7813 33.0931C12.3996 33.0931 11.2166 33.5851 10.2323 34.569C9.248 35.5532 8.75586 36.7364 8.75586 38.1185C8.75586 39.5364 9.248 40.736 10.2323 41.7171C11.2166 42.6983 12.3996 43.1889 13.7813 43.1889ZM38.7304 43.1889C40.1122 43.1889 41.2952 42.6983 42.2794 41.7171C43.2637 40.736 43.7559 39.5364 43.7559 38.1185C43.7559 36.7364 43.2637 35.5532 42.2794 34.569C41.2952 33.5851 40.1122 33.0931 38.7304 33.0931C37.3122 33.0931 36.1124 33.5851 35.1313 34.569C34.1501 35.5532 33.6595 36.7364 33.6595 38.1185C33.6595 39.5364 34.1501 40.736 35.1313 41.7171C36.1124 42.6983 37.3122 43.1889 38.7304 43.1889ZM13.7813 21.7852C11.4371 21.7852 9.43 20.9499 7.76011 19.2792C6.09061 17.6085 5.25586 15.5871 5.25586 13.2149C5.25586 10.8703 6.09061 8.8632 7.76011 7.1937C9.43 5.5242 11.4371 4.68945 13.7813 4.68945C16.1535 4.68945 18.1751 5.5242 19.8462 7.1937C21.5169 8.8632 22.3522 10.8703 22.3522 13.2149C22.3522 15.5871 21.5169 17.6085 19.8462 19.2792C18.1751 20.9499 16.1535 21.7852 13.7813 21.7852ZM38.7304 21.7852C36.3582 21.7852 34.3366 20.9499 32.6655 19.2792C30.9949 17.6085 30.1595 15.5871 30.1595 13.2149C30.1595 10.8703 30.9949 8.8632 32.6655 7.1937C34.3366 5.5242 36.3582 4.68945 38.7304 4.68945C41.0747 4.68945 43.0817 5.5242 44.7516 7.1937C46.4211 8.8632 47.2559 10.8703 47.2559 13.2149C47.2559 15.5871 46.4211 17.6085 44.7516 19.2792C43.0817 20.9499 41.0747 21.7852 38.7304 21.7852ZM13.7813 18.2852C15.1996 18.2852 16.3993 17.7946 17.3804 16.8135C18.3616 15.8323 18.8522 14.6328 18.8522 13.2149C18.8522 11.8328 18.3616 10.6496 17.3804 9.66529C16.3993 8.68101 15.1996 8.18887 13.7813 8.18887C12.3996 8.18887 11.2166 8.68101 10.2323 9.66529C9.248 10.6496 8.75586 11.8328 8.75586 13.2149C8.75586 14.6328 9.248 15.8323 10.2323 16.8135C11.2166 17.7946 12.3996 18.2852 13.7813 18.2852ZM38.7304 18.2852C40.1122 18.2852 41.2952 17.7946 42.2794 16.8135C43.2637 15.8323 43.7559 14.6328 43.7559 13.2149C43.7559 11.8328 43.2637 10.6496 42.2794 9.66529C41.2952 8.68101 40.1122 8.18887 38.7304 8.18887C37.3122 8.18887 36.1124 8.68101 35.1313 9.66529C34.1501 10.6496 33.6595 11.8328 33.6595 13.2149C33.6595 14.6328 34.1501 15.8323 35.1313 16.8135C36.1124 17.7946 37.3122 18.2852 38.7304 18.2852Z" fill="white"/>
                        </g>
                        </svg>
                    </div>
                    <div  className={`p-[20px] hover:cursor-pointer ${selectedIcon === 1 ? "border border-white rounded-lg" : ""}`} onClick={() => setSelectedIcon(1)}>
                        <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="brightness_alert_24dp_5F6368_FILL0_wght300_GRAD0_opsz24 1">
                        <path id="Vector" d="M28.59 39.208C29.124 39.208 29.5716 39.0274 29.9328 38.6661C30.2941 38.3048 30.4748 37.8572 30.4748 37.3233C30.4748 36.7893 30.2941 36.3417 29.9328 35.9804C29.5716 35.6195 29.124 35.4391 28.59 35.4391C28.0561 35.4391 27.6085 35.6195 27.2472 35.9804C26.8859 36.3417 26.7053 36.7893 26.7053 37.3233C26.7053 37.8572 26.8859 38.3048 27.2472 38.6661C27.6085 39.0274 28.0561 39.208 28.59 39.208ZM28.5906 30.6826C29.0868 30.6826 29.5023 30.5148 29.8372 30.1792C30.1724 29.844 30.34 29.4284 30.34 28.9326L30.34 18.4326C30.34 17.9368 30.1722 17.521 29.8366 17.1854C29.501 16.8502 29.0853 16.6826 28.5894 16.6826C28.0932 16.6826 27.6777 16.8502 27.3428 17.1854C27.0076 17.521 26.84 17.9368 26.84 18.4326L26.84 28.9326C26.84 29.4284 27.0078 29.844 27.3434 30.1792C27.679 30.5148 28.0948 30.6826 28.5906 30.6826ZM21.2587 45.6696L15.3081 45.6696C14.148 45.6696 13.155 45.2566 12.329 44.4306C11.503 43.6046 11.09 42.6116 11.09 41.4515L11.09 35.5009L6.75526 31.1218C6.35742 30.7003 6.05681 30.2352 5.85342 29.7265C5.65003 29.2175 5.54834 28.6998 5.54834 28.1737C5.54834 27.6475 5.65003 27.1285 5.85342 26.6168C6.05681 26.1054 6.35742 25.6389 6.75526 25.2173L11.09 20.8383L11.09 14.8877C11.09 13.7276 11.503 12.7346 12.329 11.9086C13.155 11.0826 14.148 10.6696 15.3081 10.6696L21.2587 10.6696L25.6378 6.33485C26.0593 5.93701 26.5244 5.6364 27.0331 5.43301C27.5421 5.22962 28.0598 5.12793 28.5859 5.12793C29.1121 5.12793 29.6311 5.22962 30.1428 5.43301C30.6542 5.6364 31.1207 5.93701 31.5423 6.33485L35.9213 10.6696L41.8719 10.6696C43.032 10.6696 44.025 11.0826 44.851 11.9086C45.677 12.7346 46.09 13.7276 46.09 14.8877L46.09 20.8383L50.4248 25.2173C50.8226 25.6389 51.1232 26.104 51.3266 26.6127C51.53 27.1217 51.6317 27.6393 51.6317 28.1655C51.6317 28.6917 51.53 29.2107 51.3266 29.7224C51.1232 30.2338 50.8226 30.7003 50.4248 31.1218L46.09 35.5009L46.09 41.4515C46.09 42.6116 45.677 43.6046 44.851 44.4306C44.025 45.2566 43.032 45.6696 41.8719 45.6696L35.9213 45.6696L31.5423 50.0043C31.1207 50.4022 30.6556 50.7028 30.1469 50.9062C29.6379 51.1096 29.1203 51.2113 28.5941 51.2113C28.0679 51.2113 27.549 51.1096 27.0372 50.9062C26.5258 50.7028 26.0593 50.4022 25.6378 50.0043L21.2587 45.6696ZM22.7549 42.1696L28.0738 47.4867C28.2083 47.6212 28.3804 47.6885 28.59 47.6885C28.7996 47.6885 28.9717 47.6212 29.1063 47.4867L34.4251 42.1696L41.8719 42.1696C42.0815 42.1696 42.2536 42.1023 42.3882 41.9678C42.5227 41.8332 42.59 41.6611 42.59 41.4515L42.59 34.0047L47.9071 28.6858C48.0416 28.5513 48.1089 28.3792 48.1089 28.1696C48.1089 27.96 48.0416 27.7879 47.9071 27.6533L42.59 22.3345L42.59 14.8877C42.59 14.6781 42.5227 14.506 42.3882 14.3714C42.2536 14.2369 42.0815 14.1696 41.8719 14.1696L34.4251 14.1696L29.1063 8.85251C28.9717 8.71796 28.7996 8.65068 28.59 8.65068C28.3804 8.65068 28.2083 8.71796 28.0738 8.85251L22.7549 14.1696L15.3081 14.1696C15.0985 14.1696 14.9264 14.2369 14.7918 14.3714C14.6573 14.506 14.59 14.6781 14.59 14.8877L14.59 22.3345L9.27292 27.6533C9.13837 27.7879 9.07109 27.96 9.07109 28.1696C9.07109 28.3792 9.13837 28.5513 9.27292 28.6858L14.59 34.0047L14.59 41.4515C14.59 41.6611 14.6573 41.8332 14.7918 41.9678C14.9264 42.1023 15.0985 42.1696 15.3081 42.1696L22.7549 42.1696Z" fill="white"/>
                        </g>
                        </svg>
                    </div>
                    <div  className={`p-[20px] hover:cursor-pointer ${selectedIcon === 2 ? "border border-white rounded-lg" : ""}`} onClick={() => setSelectedIcon(2)}>
                        <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="tune_24dp_5F6368_FILL0_wght300_GRAD0_opsz24 (1) 2">
                        <path id="Vector" d="M28.5894 48.7562C28.0932 48.7562 27.6777 48.5884 27.3428 48.2528C27.0076 47.9175 26.84 47.502 26.84 47.0062L26.84 37.6728C26.84 37.177 27.0078 36.7615 27.3434 36.4263C27.679 36.0907 28.0948 35.9228 28.5906 35.9228C29.0868 35.9228 29.5023 36.0907 29.8372 36.4263C30.1724 36.7615 30.34 37.177 30.34 37.6728L30.34 40.5895L47.2567 40.5895C47.7525 40.5895 48.168 40.7573 48.5033 41.0929C48.8389 41.4285 49.0067 41.8443 49.0067 42.3401C49.0067 42.8363 48.8389 43.2519 48.5033 43.5867C48.168 43.9219 47.7525 44.0895 47.2567 44.0895L30.34 44.0895L30.34 47.0062C30.34 47.502 30.1722 47.9175 29.8366 48.2528C29.501 48.5884 29.0853 48.7562 28.5894 48.7562ZM9.92334 44.0895C9.42751 44.0895 9.01198 43.9217 8.67676 43.5861C8.34115 43.2505 8.17334 42.8348 8.17334 42.3389C8.17334 41.8427 8.34115 41.4272 8.67676 41.0924C9.01198 40.7571 9.42751 40.5895 9.92334 40.5895L19.2567 40.5895C19.7525 40.5895 20.168 40.7573 20.5033 41.0929C20.8389 41.4285 21.0067 41.8443 21.0067 42.3401C21.0067 42.8363 20.8389 43.2519 20.5033 43.5867C20.168 43.9219 19.7525 44.0895 19.2567 44.0895L9.92334 44.0895ZM19.2561 34.7562C18.7599 34.7562 18.3443 34.5884 18.0095 34.2528C17.6743 33.9175 17.5067 33.502 17.5067 33.0062L17.5067 30.0895L9.92334 30.0895C9.42751 30.0895 9.01198 29.9217 8.67676 29.5861C8.34115 29.2505 8.17334 28.8348 8.17334 28.3389C8.17334 27.8427 8.34115 27.4272 8.67676 27.0924C9.01198 26.7571 9.42751 26.5895 9.92334 26.5895L17.5067 26.5895L17.5067 23.6729C17.5067 23.177 17.6745 22.7615 18.0101 22.4263C18.3457 22.0907 18.7614 21.9229 19.2573 21.9229C19.7535 21.9229 20.169 22.0907 20.5038 22.4263C20.8391 22.7615 21.0067 23.177 21.0067 23.6729L21.0067 33.0062C21.0067 33.502 20.8389 33.9175 20.5033 34.2528C20.1676 34.5884 19.7519 34.7562 19.2561 34.7562ZM28.59 30.0895C28.0942 30.0895 27.6786 29.9217 27.3434 29.5861C27.0078 29.2505 26.84 28.8348 26.84 28.3389C26.84 27.8427 27.0078 27.4272 27.3434 27.0924C27.6786 26.7571 28.0942 26.5895 28.59 26.5895L47.2567 26.5895C47.7525 26.5895 48.168 26.7573 48.5033 27.0929C48.8389 27.4285 49.0067 27.8443 49.0067 28.3401C49.0067 28.8363 48.8389 29.2519 48.5033 29.5867C48.168 29.9219 47.7525 30.0895 47.2567 30.0895L28.59 30.0895ZM37.9228 20.7562C37.4265 20.7562 37.011 20.5884 36.6762 20.2528C36.3409 19.9175 36.1733 19.502 36.1733 19.0062L36.1733 9.67285C36.1733 9.17702 36.3411 8.76149 36.6768 8.42627C37.0124 8.09066 37.4281 7.92285 37.9239 7.92285C38.4201 7.92285 38.8357 8.09066 39.1705 8.42627C39.5057 8.76149 39.6733 9.17702 39.6733 9.67285L39.6733 12.5895L47.2567 12.5895C47.7525 12.5895 48.168 12.7573 48.5033 13.0929C48.8389 13.4285 49.0067 13.8443 49.0067 14.3401C49.0067 14.8363 48.8389 15.2519 48.5033 15.5867C48.168 15.9219 47.7525 16.0895 47.2567 16.0895L39.6733 16.0895L39.6733 19.0062C39.6733 19.502 39.5055 19.9175 39.1699 20.2528C38.8343 20.5884 38.4186 20.7562 37.9228 20.7562ZM9.92334 16.0895C9.42751 16.0895 9.01198 15.9217 8.67676 15.5861C8.34115 15.2505 8.17334 14.8348 8.17334 14.3389C8.17334 13.8427 8.34115 13.4272 8.67676 13.0924C9.01198 12.7571 9.42751 12.5895 9.92334 12.5895L28.59 12.5895C29.0858 12.5895 29.5014 12.7573 29.8366 13.0929C30.1722 13.4285 30.34 13.8443 30.34 14.3401C30.34 14.8363 30.1722 15.2519 29.8366 15.5867C29.5014 15.9219 29.0858 16.0895 28.59 16.0895L9.92334 16.0895Z" fill="white"/>
                        </g>
                        </svg>
                    </div>
                    <div  className={`p-[20px] hover:cursor-pointer ${selectedIcon === 3 ? "border border-white rounded-lg" : ""}`} onClick={() => setSelectedIcon(3)}>
                        <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="emoji_objects_24dp_5F6368_FILL0_wght300_GRAD0_opsz24 (1) 1">
                        <path id="Vector" d="M28.4097 48.8649C27.4732 48.8649 26.6453 48.6182 25.9258 48.1247C25.2064 47.6308 24.7032 46.9831 24.4162 46.1816L23.743 46.1816C22.7887 46.1816 21.9668 45.8368 21.2773 45.1473C20.5878 44.4578 20.243 43.6359 20.243 42.6816L20.243 35.0265C17.8887 33.5997 16.0362 31.6867 14.6856 29.2877C13.335 26.8882 12.6597 24.32 12.6597 21.583C12.6597 17.1917 14.1868 13.4688 17.2412 10.4145C20.2955 7.36017 24.0183 5.83301 28.4097 5.83301C32.801 5.83301 36.5238 7.36017 39.5782 10.4145C42.6325 13.4688 44.1597 17.1917 44.1597 21.583C44.1597 24.3678 43.4844 26.9479 42.1338 29.3233C40.7831 31.6986 38.9307 33.5997 36.5763 35.0265L36.5763 42.6816C36.5763 43.6359 36.2316 44.4578 35.5421 45.1473C34.8526 45.8368 34.0307 46.1816 33.0763 46.1816L32.4032 46.1816C32.1162 46.9831 31.6129 47.6308 30.8935 48.1247C30.1741 48.6182 29.3461 48.8649 28.4097 48.8649ZM23.743 42.6816L33.0763 42.6816L33.0763 40.4918L23.743 40.4918L23.743 42.6816ZM23.743 38.4279L33.0763 38.4279L33.0763 36.1663L23.743 36.1663L23.743 38.4279ZM23.2763 32.6663L27.0184 32.6663L27.0184 25.8728L22.9981 21.8519C22.7228 21.577 22.5814 21.2548 22.574 20.8853C22.5666 20.5159 22.708 20.1861 22.9981 19.896C23.2882 19.6059 23.6143 19.4608 23.9763 19.4608C24.3384 19.4608 24.6645 19.6059 24.9546 19.896L28.4097 23.3511L31.8647 19.896C32.1401 19.6207 32.4625 19.4793 32.8319 19.4719C33.2014 19.4645 33.5311 19.6059 33.8213 19.896C34.1114 20.1861 34.2564 20.5122 34.2564 20.8743C34.2564 21.2359 34.1114 21.5618 33.8213 21.8519L29.8009 25.8728L29.8009 32.6663L33.543 32.6663C35.643 31.6552 37.3541 30.1677 38.6763 28.2038C39.9986 26.24 40.6597 24.033 40.6597 21.583C40.6597 18.1608 39.4736 15.2636 37.1013 12.8913C34.7291 10.5191 31.8319 9.33301 28.4097 9.33301C24.9874 9.33301 22.0902 10.5191 19.718 12.8913C17.3458 15.2636 16.1597 18.1608 16.1597 21.583C16.1597 24.033 16.8208 26.24 18.143 28.2038C19.4652 30.1677 21.1763 31.6552 23.2763 32.6663Z" fill="white"/>
                        </g>
                        </svg>
                    </div>
                    <div  className={`p-[20px] hover:cursor-pointer ${selectedIcon === 4 ? "border border-white rounded-lg" : ""}`} onClick={() => setSelectedIcon(4)}>
                        <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="support_24dp_5F6368_FILL0_wght300_GRAD0_opsz24 1">
                            <path id="Vector" d="M28.4139 50.3363C25.3479 50.3363 22.4661 49.7545 19.7683 48.5909C17.0706 47.4274 14.7241 45.8483 12.7287 43.8537C10.7333 41.8591 9.15341 39.5135 7.98908 36.8169C6.82514 34.1204 6.24316 31.2393 6.24316 28.1737C6.24316 25.1077 6.82494 22.2258 7.9885 19.5281C9.15205 16.8304 10.7311 14.4838 12.7257 12.4884C14.7204 10.493 17.0659 8.91318 19.7625 7.74885C22.4591 6.5849 25.3401 6.00293 28.4057 6.00293C31.4717 6.00293 34.3536 6.58471 37.0513 7.74826C39.7491 8.91182 42.0956 10.4909 44.091 12.4855C46.0864 14.4801 47.6662 16.8257 48.8306 19.5223C49.9945 22.2188 50.5765 25.0999 50.5765 28.1655C50.5765 31.2315 49.9947 34.1134 48.8312 36.8111C47.6676 39.5088 46.0885 41.8554 44.0939 43.8508C42.0993 45.8461 39.7537 47.426 37.0572 48.5903C34.3606 49.7543 31.4795 50.3363 28.4139 50.3363ZM21.6432 45.5529L25.0714 37.745C23.615 37.2309 22.3579 36.4339 21.3002 35.3539C20.2424 34.2736 19.4354 33.0066 18.8793 31.5529L10.9816 34.8196C11.8912 37.3085 13.2793 39.4863 15.146 41.3529C17.0127 43.2196 19.1784 44.6196 21.6432 45.5529ZM18.8793 24.7863C19.4059 23.3326 20.2023 22.0755 21.2687 21.015C22.335 19.9545 23.5876 19.1625 25.0265 18.6391L21.7598 10.7413C19.2562 11.6898 17.071 13.0974 15.2043 14.9641C13.3377 16.8308 11.9301 19.0159 10.9816 21.5196L18.8793 24.7863ZM28.4046 34.8108C30.2479 34.8108 31.8165 34.1657 33.1103 32.8753C34.4042 31.585 35.0511 30.0182 35.0511 28.1748C35.0511 26.3315 34.4059 24.7629 33.1156 23.4691C31.8252 22.1753 30.2584 21.5283 28.4151 21.5283C26.5717 21.5283 25.0032 22.1735 23.7093 23.4638C22.4155 24.7542 21.7686 26.321 21.7686 28.1643C21.7686 30.0077 22.4137 31.5763 23.7041 32.8701C24.9944 34.1639 26.5612 34.8108 28.4046 34.8108ZM35.1765 45.5529C37.6265 44.6196 39.7751 43.2293 41.6223 41.3821C43.4696 39.5349 44.8598 37.3863 45.7932 34.9363L37.9852 31.508C37.4917 32.9469 36.7095 34.1958 35.6385 35.2548C34.5675 36.3137 33.3246 37.1288 31.9098 37.7001L35.1765 45.5529ZM37.9403 24.6696L45.7932 21.4029C44.8598 18.9529 43.4696 16.8043 41.6223 14.9571C39.7751 13.1099 37.6265 11.7196 35.1765 10.7863L31.9098 18.7108C33.2947 19.2491 34.5031 20.0329 35.5352 21.0623C36.5674 22.0913 37.3691 23.2937 37.9403 24.6696Z" fill="white"/>
                            </g>
                        </svg>
                    </div>
                </div>


                <div className="">
                    <div className="innovator-data md:py-[50px] md:px-[100px] lg:py-[50px] lg:px-[100px]">
                        {innovatorsData.map((data:string) => parse(data))}
                    </div>
                </div>
            </div>

            {/* seventh container */}
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