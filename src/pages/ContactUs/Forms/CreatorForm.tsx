
import ReactGA from 'react-ga4';

export const CreatorForm = () => {
    // only send analytics on production environment
    const { PROD } = import.meta.env
    if(PROD) {
        ReactGA.send({
            hitType: "pageview",
            page: "/contact-us-creators-ai-agents/",
            title: "Contact us creators",
        })
    }

    return (
        <div className=" max-w-[650px]">
                <iframe
                src="https://api.leadconnectorhq.com/widget/form/uQRkUGdi8YKpr6RvdtUH"
                style={{width: "100%", height: "100%", border:"none", borderRadius: "3px"}}
                id="inline-uQRkUGdi8YKpr6RvdtUH"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact - Creator Page"
                data-height="829"
                data-layout-iframe-id="inline-uQRkUGdi8YKpr6RvdtUH"
                data-form-id="uQRkUGdi8YKpr6RvdtUH"
                title="Contact - Creator Page"
                    >
            </iframe>
        </div>
    )
}