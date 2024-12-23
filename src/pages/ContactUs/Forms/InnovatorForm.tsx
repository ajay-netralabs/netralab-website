
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet-async';

export const InnovatorForm = () => {

    // only send analytics on production environment
    const { PROD } = import.meta.env
    if(PROD) {
        ReactGA.send({
            hitType: "pageview",
            page: "/contact-us-innovators-ai-agents/",
            title: "Contact us innovators",
        })
    }

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
        <div className="max-w-[650px]">
                <Helmet>
                    <title>Netra Labs | Contact us</title>
                    <meta name="description" content="Contact us" />
                    <script>
                    {
                        `!function () {var reb2b = window.reb2b = window.reb2b || [];if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"];reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true;script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/1N5W0H0GEWO5.js.gz";var first = document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script, first);};reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("1N5W0H0GEWO5");}()`
                    }
                </script>
                </Helmet>
                <iframe
                src="https://api.leadconnectorhq.com/widget/form/d3rhkdryyOx3g1c8EI9r"
                style={{width: "100%", height: "100%", border: "none", borderRadius:"3px"}}
                id="inline-d3rhkdryyOx3g1c8EI9r"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact - Innovator Page"
                data-height="748"
                data-layout-iframe-id="inline-d3rhkdryyOx3g1c8EI9r"
                data-form-id="d3rhkdryyOx3g1c8EI9r"
                title="Contact - Innovator Page"
                    >
            </iframe>
        </div>
    )
}