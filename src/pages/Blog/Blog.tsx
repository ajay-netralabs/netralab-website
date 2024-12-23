import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { blogs } from "./data"
import parse from 'html-react-parser';
import { useDispatch } from "react-redux";
import { resetPrevLocation } from "../../store/locationSlice";

import ReactGA from 'react-ga4';
import { Helmet } from "react-helmet-async";

export const Blog = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { pathUrl } = useParams()

    // console.log("pathUrl", pathUrl)

    const [blog, setBlog] = useState<any>({})

    useEffect(() => {
        const blogData = blogs.find((blog:any) => blog.pathUrl === pathUrl)
        if(blogData){
            setBlog(blogData)
    
            // only send analytics on production environment
            const { PROD } = import.meta.env
            if(PROD && blogData?.pathUrl) {
                ReactGA.send({
                    hitType: "pageview",
                    page: blogData.pathUrl,
                    title: "Blog",
                })
            }
        }else {
            navigate("/blog")
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

    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://fe.sitedataprocessing.com/cscripts/cnySuUiE57-5a988b7d.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);

    // console.log("blog", blog)

    return (
        <div>
            <Helmet>
                <title>Netra Labs | Blog</title>
                <meta name="description" content="Blogs" />
                <script>
                    {
                        `!function () {var reb2b = window.reb2b = window.reb2b || [];if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"];reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true;script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/1N5W0H0GEWO5.js.gz";var first = document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script, first);};reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("1N5W0H0GEWO5");}()`
                    }
                </script>
            </Helmet>
            { blog ? (
                <>
                    {/* header */}
                    <div className="w-full relative h-[400px]">
                        <img className="w-full h-full object-cover brightness-50" src={blog.imgUrl} alt="blogs" />
                        <p className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-xl md:text-[3vw] lg:text-[3vw] leading-[1.1] font-bold text-center heading-text">{blog.title}</p>
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