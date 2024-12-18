
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet-async';

export const IntegratorForm = () => {

    // only send analytics on production environment
    const { PROD } = import.meta.env
    if(PROD) {
        ReactGA.send({
            hitType: "pageview",
            page: "/contact-us-integrators-ai-agents/",
            title: "Contact us integrators",
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
                </Helmet>
                <iframe
                src="https://api.leadconnectorhq.com/widget/form/s7iYzGLOdPnZLM3hScna"
                style={{width: "100%", height: "100%", border: "none", borderRadius: "3px"}}
                id="inline-s7iYzGLOdPnZLM3hScna"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact - Integrator Page"
                data-height="748"
                data-layout-iframe-id="inline-s7iYzGLOdPnZLM3hScna"
                data-form-id="s7iYzGLOdPnZLM3hScna"
                title="Contact - Integrator Page"
                    >
            </iframe>
        </div>
    )
}