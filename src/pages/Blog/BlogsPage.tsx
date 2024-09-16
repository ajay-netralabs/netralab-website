import { blogs } from "./data"
import blogImg from "../../../public/static_img/Blog-img.png"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { resetPrevLocation } from "../../store/locationSlice"

export const BlogsPage = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleBlogNavigation = (id:string) => {
        navigate(`/blogs/${id}`)
    }

    useEffect(() => {
        return () => {
            // localStorage.setItem("prev", "/")
            dispatch(resetPrevLocation())
        }
    }, [])

    return (
        <div>
            {/* header */}
            <div className="w-full relative">
                <img className="w-full object-cover" src={blogImg} alt="blogs" />
                <p className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[15px] md:text-[45px] lg:text-[55px] font-bold text-accent text-center">The AI Agent Landscape.</p>
            </div>

            {/* popular topics */}
            <div className="m-10">
                <div>
                    <p className="font-bold text-[36px]">Popular topics</p>
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
                                    <h2 onClick={() => handleBlogNavigation(data.id)} className="card-title heading-text-hover hover:cursor-pointer">{data.title}</h2>
                                    <p className="text-[#B1B1B1]">{`${data.read.slice(0,200)}...`}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>

    )
}