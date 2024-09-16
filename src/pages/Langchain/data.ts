import Card1 from "../../../public/static_img/card1.png"
import Card2 from "../../../public/static_img/card2.png"
import Card3 from "../../../public/static_img/card3.png"
import Card4 from "../../../public/static_img/card4.png"
import Card5 from "../../../public/static_img/card5.png"


export const cardsData: {[key: string]: { img: any, text: string};} = {
    "1" : {
        img: Card1,
        text: "The first step in model training is to collect and prepare the data. This involves gathering relevant data from various sources, such as customer interactions, support tickets, or industry-specific documents. The data is then cleaned, organized, and preprocessed to remove noise and ensure consistency."
    },
    "2" : {
        img: Card2,
        text: "Once the data is prepared, it is used to train the initial language model. This involves feeding the data into the model and allowing it to learn patterns, relationships, and language structures. The training process may take a significant amount of time and computational resources, depending on the size and complexity of the model."
    },
    "3" : {
        img: Card3,
        text: "After the initial training, the model is fine-tuned for specific tasks or domains. This involves exposing the model to additional task-specific data and adjusting its parameters to improve performance. Fine-tuning helps the model adapt to the organization's unique requirements and improve its accuracy and effectiveness."
    },
    "4" : {
        img: Card4,
        text: "Once the model is trained and fine-tuned, it is evaluated and validated to ensure its performance meets the desired standards. This involves testing the model on a separate dataset and measuring metrics such as accuracy, precision, recall, and F1 score. The evaluation results help identify any areas for improvement or potential biases in the model."
    },
    "5" : {
        img: Card5,
        text: "Model training and fine-tuning is an iterative process. As new data becomes available or the organization's needs evolve, the model can be retrained and fine-tuned to improve its performance. This iterative approach allows the organization to continuously optimize the language models and ensure they stay up-to-date and effective."
    }
}


export const IntegrationData: {[key: string]: string;} = {
    "1" : `<h1 className="font-bold heading-text">CRM Integration</h1>
            <p className="text-[#CECECE] mt-2"> <span className=""> Integrate language models </span> into your CRM system for enhanced customer support and personalized interactions. </p>
    `,
    "2" : `<h1 className="font-bold heading-text">ERP Integration</h1>
            <p className="text-[#CECECE] mt-2"> <span className=""> Deploy language models </span> within your ERP system to automate document processing and improve efficiency.</p>
    `,
    "3" : `<h1 className="font-bold heading-text">Communication Platform Integration</h1>
            <p className="text-[#CECECE] mt-2"> <span className=""> Seamlessly integrate language models </span> into your communication platforms for automated responses and efficient communication. </p>
    `,
    "4" : `<h1 className="font-bold heading-text">Chatbot Deployment</h1>
            <p className="text-[#CECECE] mt-2"> <span className=""> Deploy language models </span> as chat-bots to provide instant and accurate responses to customer queries. </p>
    `,
    "5" : `<h1 className="font-bold heading-text">Virtual Assistant Deployment</h1>
            <p className="text-[#CECECE] mt-2"> <span className=""> Leverage language models </span> as virtual assistants to assist employees with tasks and provide real-time information.</p>
    `,
    "6" : `<h1 className="font-bold heading-text">Automated Reporting Tool Integration</h1>
            <p className="text-[#CECECE] mt-2"> <span className=""> Integrate language models </span> into automated reporting tools to generate insightful and actionable reports.</p>
    `,
}