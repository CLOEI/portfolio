import {SiTailwindcss, SiJavascript, SiTypescript, SiRust, SiCsharp, SiLaravel, SiPhp, SiReact} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { ImHtmlFive2 } from "react-icons/im";
import { IoLogoPwa, IoLogoSass } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoGoLang } from "react-icons/bi";

const tagToComponent = (tag: string) => {
  const tags = {
    "Next.js": <TbBrandNextjs size={25} className="hover:text-[#000000] hover:bg-white hover:rounded-full"/>,
    "Tailwind CSS": <SiTailwindcss size={25} className="hover:text-[#06B6D4]"/>,
    "PWA" : <IoLogoPwa size={25} className="hover:text-[#5A0FC8]"/>,
    "HTML" : <ImHtmlFive2 size={25} className="hover:text-[#E34F26]"/>,
    "JavaScript" : <SiJavascript size={25} className="hover:text-[#F7DF1E]"/>,
    "CSS" : <DiCss3 size={25} className="hover:text-[#1572B6]"/>,
    "SCSS" : <IoLogoSass size={25} className="hover:text-[#CC6699]"/>,
    "GO": <BiLogoGoLang size={25} className="hover:text-[#00ADD8]"/>,
    "TypeScript": <SiTypescript size={25} className="hover:text-[#007ACC]"/>,
    "Rust": <SiRust size={25} className="hover:text-[#DEA584]"/>,
    "CSharp": <SiCsharp size={25} className="hover:text-[#ff00ff]"/>,
    "Laravel": <SiLaravel size={25} className="hover:text-[#FF2D20]"/>,
    "PHP": <SiPhp size={25} className="hover:text-[#777BB3]"/>,
    "React": <SiReact size={25} className="hover:text-[#61DAFB]"/>,
  }

  return tags[tag as keyof typeof tags]
}

export default tagToComponent;