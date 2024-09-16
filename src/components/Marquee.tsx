
import Meta from "../../public/marq/meta.svg"
import Langchain from "../../public/marq/langchain.svg"
import Kubernate from "../../public/marq/kubernets.svg"
import Huggingface from "../../public/marq/huggingface.svg"
import Google from "../../public/marq/Google.svg"
import Deepmind from "../../public/marq/Deepmind.svg"
import Azure from "../../public/marq/Azure.svg"
import Aws from "../../public/marq/Aws.svg"
import Anthropic from "../../public/marq/Anthropic.svg"
import Openai from "../../public/marq/OpenAi.svg"
import Mistral from "../../public/marq/Mistral.svg"

export const MarqueeLogo = () => {
    return (
        <div className="marquee-bg flex items-center py-6 mt-4">
            {/* meta */}
            <div className="flex items-center justify-center marquee-border w-[300px]">
                <img src={Meta} alt="meta" className="mx-4"/>
                <p className="uppercase text-[#B1B1B1] text-[22px] leading-[33px]">META</p>
            </div>

             {/* lengchain */}
             <div className="flex items-center justify-center marquee-border w-[300px]">
                <img src={Langchain} alt="meta" className="mx-4"/>
                <p className="uppercase text-[#B1B1B1] text-[22px] leading-[33px] ">LangChain</p>
            </div>

             {/* Kubernetes */}
             <div className="flex items-center justify-center marquee-border w-[300px]">
                <img src={Kubernate} alt="meta" className="mx-4" />
                <p className="uppercase text-[#B1B1B1] text-[22px] leading-[33px]">KUBERNETES</p>
            </div>

            {/* hugging face */}
            <div className="flex items-center justify-center marquee-border w-[300px]">
                <img src={Huggingface} alt="meta" className="mx-4" />
                <p className="uppercase text-[#B1B1B1] text-[22px] leading-[33px]">HUGGINGFACE</p>
            </div>

             {/* Google */}
             <div className="flex items-center justify-center marquee-border w-[300px]">
                <img src={Google} alt="meta" className="mr-4"/>
                <p className="uppercase text-[#B1B1B1] text-[22px] leading-[33px]">GOOGLE</p>
            </div>

            {/* Deepmind */}
            <div className="flex items-center justify-center marquee-border w-[300px]">
                <img src={Deepmind} alt="meta" className="mr-4"/>
                <p className="uppercase text-[#B1B1B1] text-[22px] leading-[33px]">DEEPMIND</p>
            </div>

             {/* Azure */}
             <div className="flex items-center justify-center marquee-border w-[300px]">
                <img src={Azure} alt="meta" className="mr-4"/>
                <p className="uppercase text-[#B1B1B1] text-[22px] leading-[33px]">AZURE</p>
            </div>

            {/* Aws */}
            <div className="flex items-center justify-center marquee-border w-[300px]">
                <img src={Aws} alt="meta" className="mr-4"/>
                <p className="uppercase text-[#B1B1B1] text-[22px] leading-[33px]">AWS</p>
            </div>

             {/* Anthropix */}
             <div className="flex items-center justify-center marquee-border w-[300px]">
                <img src={Anthropic} alt="meta" className="mr-4"/>
                <p className="uppercase text-[#B1B1B1] text-[22px] leading-[33px]">ANTHROPIC</p>
            </div>
            {/* Openai */}
            <div className="flex items-center justify-center marquee-border w-[300px]">
                <img src={Openai} alt="meta" className="mr-4"/>
                <p className="uppercase text-[#B1B1B1] text-[22px] leading-[33px]">OPENAI</p>
            </div>

            {/* mistral */}
            <div className="flex items-center justify-center marquee-border w-[300px]">
                <img src={Mistral} alt="meta" className="mr-4"/>
                <p className="uppercase text-[#B1B1B1] text-[22px] leading-[33px]">MISTRAL LABS</p>
            </div>

        </div>
    )
}