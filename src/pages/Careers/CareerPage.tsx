import { useEffect } from "react"
import careerImg from "../../../public/static_img/carrer_img.png"
import { useNavigate } from "react-router-dom"

export const CareersPage = () => {

    const navigate = useNavigate()

    const handleBlogNavigation = (id:string) => {
        navigate(`/blogs/${id}`)
    }

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div>
            {/* header */}
            <div className="w-full relative">
                <img className="w-full object-cover" src={careerImg} alt="careers" />
                <p className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[15px] md:text-[45px] lg:text-[55px] font-bold text-accent text-center">
                    Do you want to Shape the Future of <span className="text-accent"> AI Agents?​</span>
                </p>
            </div>

            {/* popular topics */}
            <div className="mt-16">
                <div className="text-center">
                    {[].length ? (
                        <p className="lg:text-4xl md:divider md:divider-accent lg:divider lg:divider-accent text-wrap">We have {[].length} open openings now!</p>
                    ) : (
                        <p className="lg:text-4xl md:divider md:divider-accent lg:divider lg:divider-accent text-wrap">We don't have open openings now!</p>
                    )}
                </div>

                {/* tabs */}
                {/* <div></div> */}

                <div className="blogs mt-10 flex flex-wrap justify-evenly">
                    {[].map((data:any) => {
                        return (
                            <div className="card bg-base-100 rounded-none w-[33%]">
                                <figure>
                                    <img
                                    src={data.imgUrl}
                                    alt="blog image" />
                                </figure>
                                <div className="card-body !px-0">
                                    <h2 onClick={() => handleBlogNavigation(data.id)} className="card-title hover:text-accent hover:cursor-pointer">{data.title}</h2>
                                    <p>{`${data.read.slice(0,200)}...`}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>

    )
}