
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

export const Marquee = () => {
    return (
        <div className="flex items-center relative">
            {/* meta */}
            <div className="flex gap-4 items-center border-r border-r-[#B1B1B1] w-[300px] absolute">
                <img src={Meta} alt="meta" />
                <p className="uppercase text-[#B1B1B1] text-[22px] leading-[33px]">META</p>
            </div>

             {/* lengchain */}
             <div className="flex gap-4 items-center border-r border-r-[#B1B1B1] w-[300px] absolute">
                <img src={Langchain} alt="meta" />
                <p className="uppercase text-[#B1B1B1] text-[22px] leading-[33px]">LangChain</p>
            </div>

             {/* Kubernetes */}
             <div className="flex gap-4 items-center border-r border-r-[#B1B1B1] w-[300px] absolute">
                <img src={Kubernate} alt="meta" />
                <p className="uppercase text-[#B1B1B1] text-[22px] leading-[33px]">KUBERNETES</p>
            </div>

            {/* hugging face */}
            <div className="flex gap-4 items-center border-r border-r-[#B1B1B1] w-[300px] absolute">
                <img src={Huggingface} alt="meta" />
                <p className="uppercase text-[#B1B1B1] text-[22px] leading-[33px]">HUGGINGFACE</p>
            </div>

             {/* Google */}
             <div className="flex gap-4 items-center border-r border-r-[#B1B1B1] w-[300px] absolute">
                <img src={Google} alt="meta" />
                <p className="uppercase text-[#B1B1B1] text-[22px] leading-[33px]">GOOGLE</p>
            </div>

            {/* Deepmind */}
            <div className="flex gap-4 items-center border-r border-r-[#B1B1B1] w-[300px] absolute">
                <img src={Deepmind} alt="meta" />
                <p className="uppercase text-[#B1B1B1] text-[22px] leading-[33px]">DEEPMIND</p>
            </div>

             {/* Azure */}
             <div className="flex gap-4 items-center border-r border-r-[#B1B1B1] w-[300px] absolute">
                <img src={Azure} alt="meta" />
                <p className="uppercase text-[#B1B1B1] text-[22px] leading-[33px]">AZURE</p>
            </div>

            {/* Aws */}
            <div className="flex gap-4 items-center border-r border-r-[#B1B1B1] w-[300px] absolute">
                <img src={Aws} alt="meta" />
                <p className="uppercase text-[#B1B1B1] text-[22px] leading-[33px]">AWS</p>
            </div>

             {/* Anthropix */}
             <div className="flex gap-4 items-center border-r border-r-[#B1B1B1] w-[300px] absolute">
                <img src={Anthropic} alt="meta" />
                <p className="uppercase text-[#B1B1B1] text-[22px] leading-[33px]">ANTHROPIC</p>
            </div>

            {/* Openai */}
            <div className="flex gap-4 items-center border-r border-r-[#B1B1B1] w-[300px] absolute">
                <img src={Openai} alt="meta" />
                <p className="uppercase text-[#B1B1B1] text-[22px] leading-[33px]">OPENAI</p>
            </div>

            {/* mistral */}
            <div className="flex gap-4 items-center border-r border-r-[#B1B1B1] w-[300px] absolute">
                <img src={Mistral} alt="meta" />
                <p className="uppercase text-[#B1B1B1] text-[22px] leading-[33px]">MISTRAL LABS</p>
            </div>

        </div>
    )
}