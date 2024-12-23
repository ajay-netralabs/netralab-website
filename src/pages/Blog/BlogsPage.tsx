import { blogs } from "./data"
import blogImg from "../../../public/static_img/Blog-img.jpeg"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { resetPrevLocation } from "../../store/locationSlice"

import ReactGA from 'react-ga4';
import { Helmet } from "react-helmet-async"

export const BlogsPage = () => {

    // only send analytics on production environment
    const { PROD } = import.meta.env
    if(PROD) {
        ReactGA.send({
            hitType: "pageview",
            page: "/blog/",
            title: "Blogs",
        })
    }

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleBlogNavigation = (pathUrl:string) => {
        const path = `/${pathUrl}`
        navigate(path)
    }

    useEffect(() => {
        window.scrollTo(0,0)
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
                <title>Netra Labs | Blogs</title>
                <meta name="description" content="Blogs" />
                <script>
                    {
                        `!function () {var reb2b = window.reb2b = window.reb2b || [];if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"];reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true;script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/1N5W0H0GEWO5.js.gz";var first = document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script, first);};reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("1N5W0H0GEWO5");}()`
                    }
                </script>
            </Helmet>
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