import { useEffect } from "react"
import careerImg from "../../../public/static_img/carrer_img.jpeg"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { resetPrevLocation } from "../../store/locationSlice"
import { Helmet } from "react-helmet-async"

export const CareersPage = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleBlogNavigation = (id:string) => {
        navigate(`/blogs/${id}`)
    }

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    useEffect(() => {
        return () => {
            // localStorage.setItem("prev", "/")
            dispatch(resetPrevLocation())
        }
    }, [])

    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://fe.sitedataprocessing.com/cscripts/cnySuUiE57-5a988b7d.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);

    return (
        <div>
            <Helmet>
                <title>Netra Labs | Careers</title>
                <meta name="description" content="Blogs" />
                <script>
                    {
                        `!function () {var reb2b = window.reb2b = window.reb2b || [];if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"];reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true;script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/1N5W0H0GEWO5.js.gz";var first = document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script, first);};reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("1N5W0H0GEWO5");}()`
                    }
                </script>
            </Helmet>

            <div className="w-full relative h-[400px]">
                <img className="w-full object-cover h-full brightness-50" src={careerImg} alt="careers" />
                <p className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-xl md:text-[3vw] lg:text-[3vw] leading-[1.1] font-bold heading-text text-center">Do you want to Shape the Future of <span className="text-accent"> AI Agents?​</span></p>
            </div>
            {/* header */}
            {/* <div className="w-full relative">
                <img className="w-full object-cover" src={careerImg} alt="careers" />
                <p className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[15px] md:text-[45px] lg:text-[55px] font-bold text-accent text-center">
                    Do you want to Shape the Future of <span className="text-accent"> AI Agents?​</span>
                </p>
            </div> */}

            <div className="mt-16 h-[250px]">
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