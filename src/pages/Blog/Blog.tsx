import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { blogs } from "./data"
import parse from 'html-react-parser';

export const Blog = () => {

    const { id } = useParams()

    const [blog, setBlog] = useState<any>({})

    useEffect(() => {
        const blogData = blogs.find((blog:any) => blog.id === id)
        setBlog(blogData)
    }, [id])

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div>
        {/* header */}
        <div className="w-full relative h-[400px]">
            <img className="w-full h-full object-cover brightness-50" src={blog.imgUrl} alt="blogs" />
            <p className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[15px] md:text-[45px] lg:text-[55px] font-bold text-accent text-center">{blog.title}</p>
        </div>

        {/* popular topics */}
        <div className="my-10 mx-5 md:mx-10 lg:mx-10">
            {/* tabs */}
            {/* <div></div> */}

            <div className="blog-story text-[#B1B1B1]">
                {blog.read && (
                    parse(blog.read)
                )}
            </div>
        </div>

    </div>
    )
}