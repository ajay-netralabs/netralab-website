import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { blogs } from "./data"
import parse from 'html-react-parser';
import { useDispatch } from "react-redux";
import { resetPrevLocation } from "../../store/locationSlice";

export const Blog = () => {

    const dispatch = useDispatch()

    const { id } = useParams()

    const [blog, setBlog] = useState<any>({})

    useEffect(() => {
        const blogData = blogs.find((blog:any) => blog.id === id)
        setBlog(blogData)
    }, [id])

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    useEffect(() => {
        return () => {
            // localStorage.setItem("prev", "/")
            dispatch(resetPrevLocation())
        }
    }, [])

    return (
        <div>
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

    </div>
    )
}