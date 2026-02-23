import { useEffect } from "react"

import ReactGA from 'react-ga4';
import { Helmet } from "react-helmet-async";

export const PrivacyPolicy = () => {

    // only send analytics on production environment
    const { PROD } = import.meta.env
    if(PROD) {
        ReactGA.send({
            hitType: "pageview",
            page: "/privacy-policy/",
            title: "Privacy policy page",
        })
    }

    const scrollTOId = (id:string) => {
        const element = document.getElementById(id)

        if(element){
            element.scrollIntoView({ block: 'center',  behavior: 'smooth' })
        }
    }

    useEffect(() => {
        window.scrollTo(0,0)
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
        <div className="extra-page p-3 md:p-[5rem] lg:p-[5rem] text-base md:text-[1.25vw] lg:text-[1.25vw] leading-relaxed text-[#CECECE] break-words">
                <Helmet>
                    <title>Netra Labs | Privacy Policy</title>
                    <meta name="description" content="Privacy Policy" />
                    <script>
                    {
                        `!function () {var reb2b = window.reb2b = window.reb2b || [];if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"];reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true;script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/1N5W0H0GEWO5.js.gz";var first = document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script, first);};reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("1N5W0H0GEWO5");}()`
                    }
                </script>
                </Helmet>
             
             {/* heading */}
             <div>
                <h1>PRIVACY NOTICE</h1>
                <p>Last updated 05/14/2024</p>
            </div>
            <div className="text">
                This privacy notice for __________ ("we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:
                <br />Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services.
            </div>

            <div>
                <h1>SUMMARY OF KEY POINTS</h1>
                <div className="text">
                    This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
                    <br />What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.
                    <br />Do we process any sensitive personal information? We do not process sensitive personal information.
                    <br />Do we receive any information from third parties? We may receive information from public databases, marketing partners, social media platforms, and other outside sources. Learn more about information collected from other sources.
                    <br />How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.
                    <br />In what situations and with which parties do we share personal information? We may share information in specific situations and with specific third parties. Learn more about when and with whom we share your personal information.
                    <br />What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.
                    <br />How do you exercise your rights? The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                    <br />Want to learn more about what we do with any information we collect? Review the privacy notice in full.
                </div>
            </div>

             {/* table of Content */}
            <div>
                <h1>TABLE OF CONTENTS</h1>
                <div className="flex flex-col table-nl !w-full md:w-[50%] lg:w-[50%] text-base md:text-[1.25vw] lg:text-[1.25vw]">
                    <div className="flex">
                        <p>1</p>
                        <p className="hover:cursor-pointer" onClick={() => scrollTOId("s1")}>WHAT INFORMATION DO WE COLLECT?</p>
                    </div>
                    <div className="flex">
                        <p>2</p>
                        <p className="hover:cursor-pointer" onClick={() => scrollTOId("s2")}>HOW DO WE PROCESS YOUR INFORMATION?</p>
                    </div>
                    <div className="flex">
                        <p>3</p>
                        <p className="hover:cursor-pointer" onClick={() => scrollTOId("s3")}>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</p>
                    </div>
                    <div className="flex">
                        <p>4</p>
                        <p className="hover:cursor-pointer" onClick={() => scrollTOId("s4")}>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</p>
                    </div>
                    <div className="flex">
                        <p>5</p>
                        <p className="hover:cursor-pointer" onClick={() => scrollTOId("s5")}>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</p>
                    </div>
                    <div className="flex">
                        <p>6</p>
                        <p className="hover:cursor-pointer" onClick={() => scrollTOId("s6")}>IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</p>
                    </div>
                    <div className="flex">
                        <p>7</p>
                        <p className="hover:cursor-pointer" onClick={() => scrollTOId("s7")}>HOW LONG DO WE KEEP YOUR INFORMATION?</p>
                    </div>
                    <div className="flex">
                        <p>8</p>
                        <p className="hover:cursor-pointer" onClick={() => scrollTOId("s8")}>DO WE COLLECT INFORMATION FROM MINORS?</p>
                    </div>
                    <div className="flex">
                        <p>9</p>
                        <p className="hover:cursor-pointer" onClick={() => scrollTOId("s9")}>WHAT ARE YOUR PRIVACY RIGHTS?</p>
                    </div>
                    <div className="flex">
                        <p>10</p>
                        <p className="hover:cursor-pointer" onClick={() => scrollTOId("s10")}>CONTROLS FOR DO-NOT-TRACK FEATURES</p>
                    </div>
                    <div className="flex">
                        <p>11</p>
                        <p className="hover:cursor-pointer" onClick={() => scrollTOId("s11")}>DO WE MAKE UPDATES TO THIS NOTICE?</p>
                    </div >
                    <div className="flex">
                        <p>12</p>
                        <p className="hover:cursor-pointer" onClick={() => scrollTOId("s12")}>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</p>
                    </div>
                    <div className="flex">
                        <p>13</p>
                        <p className="hover:cursor-pointer" onClick={() => scrollTOId("s13")}>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</p>
                    </div>
                </div>
            </div>

            {/* contents */}
            <div id="s1">
                <h1>1. WHAT INFORMATION DO WE COLLECT?</h1>
                <p>Personal information you disclose to us
                <br />In Short: We collect personal information that you provide to us.

                <br />We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.

                <br />Sensitive Information. We do not process sensitive information.

                <br />All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.

                <br />Information automatically collected

                <br />In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.

                <br />We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.

                <br />Like many businesses, we also collect information through cookies and similar technologies.</p>
            </div>
            <div id="s2">
                <h1>2. HOW DO WE PROCESS YOUR INFORMATION?</h1>
                <p>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
                <br />We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
            </div>
            <div id="s3">
                <h1>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h1>
                <p>In Short: We may share information in specific situations described in this section and/or with the following third parties.
                <br />We may need to share your personal information in the following situations:
                Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                Affiliates. We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.
                Business Partners. We may share your information with our business partners to offer you certain products, services, or promotions.</p>
            </div>
            <div id="s4">
                <h1>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h1>
                <p>In Short: We may use cookies and other tracking technologies to collect and store your information.
                <br />We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>
            </div>
            <div id="s5">
                <h1>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h1>
                <p>In Short: If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.
                <br />Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.
                <br />We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.</p>
            </div>
            <div id="s6">
                <h1>6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h1>
                <p>In Short: We may transfer, store, and process your information in countries other than your own.
                    <br />Our servers are located in. If you are accessing our Services from outside, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information (see "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?" above), in and other countries.
                    <br />If you are a resident in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. However, we will take all necessary measures to protect your personal information in accordance with this privacy notice and applicable law.</p>
            </div>
            <div id="s7">
                <h1>7. HOW LONG DO WE KEEP YOUR INFORMATION?</h1>
                <p>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
                <br />We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). 
                <br />When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                </p>
            </div>
            <div id="s8">
                <h1>8. DO WE COLLECT INFORMATION FROM MINORS?</h1>
                <p>In Short: We do not knowingly collect data from or market to children under 18 years of age.
                <br />We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at __________.</p>
            </div>
            <div id="s9">
                <h1>9. WHAT ARE YOUR PRIVACY RIGHTS?</h1>
                <p>In Short:  You may review, change, or terminate your account at any time.
                <br />Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
                <br />However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                <br />Account Information
                <br />If you would at any time like to review or change the information in your account or terminate your account, you can:
                <br />Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>
            </div>
            <div id="s10">
                <h1>10. CONTROLS FOR DO-NOT-TRACK FEATURES</h1>
                <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>
            </div>
            <div id="s11">
                <h1>11. DO WE MAKE UPDATES TO THIS NOTICE?</h1>
                <p>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.
                <br />We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>
            </div>
            <div id="s12">
                <h1>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h1>
                <p>If you have questions or comments about this notice, you may contact us by post at:
                <br />Netra Labs LLC
                <br />4850 Tamiami TRL N STE 301
                <br />Naples, FL 34103
                </p>
            </div>
            <div id="s13">
                <h1>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h1>
                <p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.</p>
            </div>
        </div>
    )
}