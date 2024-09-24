
import ReactGA from 'react-ga4';

export const MainForms = () => {

    if(import.meta.env.PROD) {
        ReactGA.send({
            hitType: "pageview",
            page: "/contact-us-main/",
            title: "Contact us main",
        })
    }

    return (
        <div className="h-[950px] md:h-[900px] lg:h-[900px] max-w-[650px]">
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