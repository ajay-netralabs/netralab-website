
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

    return (
        <div className="max-w-[650px]">
                <Helmet>
                    <title>Netra Labs | Contact us</title>
                    <meta name="description" content="Contact us" />
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