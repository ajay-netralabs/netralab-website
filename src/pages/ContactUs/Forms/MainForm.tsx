
import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet-async';

export const MainForms = () => {

    // only send analytics on production environment
    const { PROD } = import.meta.env
    if(PROD) {
        ReactGA.send({
            hitType: "pageview",
            page: "/contact-us-main/",
            title: "Contact us main",
        })
    }

    return (
        <div className=" max-w-[650px]">
                <Helmet>
                    <title>Netra Labs | Contact us</title>
                    <meta name="description" content="Contact us" />
                </Helmet>
                <iframe
                    src="https://api.leadconnectorhq.com/widget/form/3awB04FlOIOzGoJvhRzn"
                    style={{width:"100%", height: "100%", border: "none", borderRadius:"3px"}}
                    id="inline-3awB04FlOIOzGoJvhRzn"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Contact - Main Page"
                    data-height="895"
                    data-layout-iframe-id="inline-3awB04FlOIOzGoJvhRzn"
                    data-form-id="3awB04FlOIOzGoJvhRzn"
                    title="Contact - Main Page"
                        >
                    </iframe>
        </div>
    )
}