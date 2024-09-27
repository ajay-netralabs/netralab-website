import { blogs } from "./data"
import blogImg from "../../../public/static_img/Blog-img.jpeg"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { resetPrevLocation } from "../../store/locationSlice"

import ReactGA from 'react-ga4';

export const BlogsPage = () => {

    // only send analytics on production environment
    const { PROD } = import.meta.env
    if(PROD) {
        ReactGA.send({
            hitType: "pageview",
            page: "/blog/",
            title: "Blogs page",
        })
    }

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleBlogNavigation = (pathUrl:string) => {
        navigate(`/${pathUrl}`)
    }

    useEffect(() => {
        window.scrollTo(0,0)
        return () => {
            // localStorage.setItem("prev", "/")
            dispatch(resetPrevLocation())
        }
    }, [])

    return (
        <div>
            {/* header */}
            <div className="w-full relative h-[400px]">
                <img className="w-full object-cover h-full brightness-50" src={blogImg} alt="blogs" />
                <p className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-xl md:text-[3vw] lg:text-[3vw] leading-[1.1] font-bold heading-text text-center">OUR THOUGHTS ON THE WILD, CRAZY LANDSCAPE OF AI AGENTS.</p>
            </div>

            {/* popular topics */}
            <div className="m-10">
                <div>
                    <p className="font-bold text-xl md:text-[2vw] lg:text-[2vw] leading-relaxed heading-text break-words">Popular topics</p>
                </div>

                {/* tabs */}
                {/* <div></div> */}

                <div className="blogs mt-10 flex flex-wrap gap-[40px]">
                    {blogs.map((data:any) => {
                        return (
                            <div className="card bg-base-100 rounded-none w-full md:w-[33%] lg:w-[33%]">
                                <figure>
                                    <img
                                    src={data.imgUrl}
                                    alt="blog image" />
                                </figure>
                                <div className="card-body !px-0">
                                    <h2 onClick={() => handleBlogNavigation(data["pathUrl"])} className="card-title text-xl md:text-[1.2vw] lg:text-[1.2vw] leading-relaxed heading-text-hover hover:cursor-pointer">{data.title}</h2>
                                    <p className="text-[#CECECE] text-xl md:text-[1.1vw] lg:text-[1.1vw] leading-relaxed">{`${data.read.slice(0,200)}...`}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>

    )
}