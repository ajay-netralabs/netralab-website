import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { blogs } from "./data"
import parse from 'html-react-parser';
import { useDispatch } from "react-redux";
import { resetPrevLocation } from "../../store/locationSlice";

import ReactGA from 'react-ga4';

export const Blog = () => {

    const dispatch = useDispatch()

    const { pathUrl } = useParams()

    // console.log("pathUrl", pathUrl)

    const [blog, setBlog] = useState<any>({})

    useEffect(() => {
        const blogData = blogs.find((blog:any) => blog.pathUrl === pathUrl)
        setBlog(blogData)

        if(import.meta.env.PROD && blogData?.pathUrl) {
            ReactGA.send({
                hitType: "pageview",
                page: blogData.pathUrl,
                title: "Blog page",
            })
        }

    }, [pathUrl])

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    useEffect(() => {
        return () => {
            // localStorage.setItem("prev", "/")
            dispatch(resetPrevLocation())
        }
    }, [])

    // console.log("blog", blog)

    return (
        <div>
            { blog ? (
                <>
                    {/* header */}
                    <div className="w-full relative h-[400px]">
                        <img className="w-full h-full object-cover brightness-50" src={blog.imgUrl} alt="blogs" />
                        <p className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-xl md:text-[2.5vw] lg:text-[2.5vw] leading-relaxed font-bold text-center heading-text">{blog.title}</p>
                    </div>

                    <div className="my-10 mx-5 md:mx-10 lg:mx-10">
                        <div className="blog-story text-[#CECECE]">
                            {blog.read && (
                                parse(blog.read)
                            )}
                        </div>
                    </div>
                </>
            ): null}

    </div>
    )
}