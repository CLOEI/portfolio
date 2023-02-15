import Image from "next/image";
import { motion, useAnimationControls, useInView } from "framer-motion";

import { BiLinkExternal } from "react-icons/bi";
import { VscGithubAlt } from "react-icons/vsc";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import { RiCss3Fill } from "react-icons/ri";
import { ImHtmlFive2 } from "react-icons/im";
import { IoLogoPwa, IoLogoSass } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";


import type { IProjects } from "@/types/contentful";
import { useEffect, useRef } from "react";

function ProjectCard({ project }: { project: IProjects }) {
  const control = useAnimationControls()
  const containerRef = useRef(null)
  const inView = useInView(containerRef, {
    amount: "all"
  })

  useEffect(() => {
    if (inView) {
      control.start("show")
    }else {
      control.start("hidden")
    }
  }, [inView, control])

  const tagToComponent = (tag: string) => {
    const tags = {
      "Next.js": <TbBrandNextjs size={25}/>,
      "Tailwind CSS": <SiTailwindcss size={25}/>,
      "PWA" : <IoLogoPwa size={25}/>,
      "HTML" : <ImHtmlFive2 size={25}/>,
      "JavaScript" : <SiJavascript size={25}/>,
      "CSS" : <RiCss3Fill size={25}/>,
      "SCSS" : <IoLogoSass size={25}/>,
    }

    return tags[tag as keyof typeof tags]
  }

  return (
    <motion.li className="mb-10 ml-4" initial={{ opacity: 0.75 }} whileInView={{ opacity: 1 }} viewport={{ amount: "all" }} ref={containerRef}>
      <div className='absolute w-3 h-3 bg-card rounded-full mt-1.5 -left-1.5 border border-rose-500'></div>
      <div className="relative">
        <div className="relative w-full h-60 rounded-md overflow-hidden">
          <Image src={'https:' + project.fields.image.fields.file.url} fill={true} alt="" className="object-cover opacity-75"/>
        </div>
        {window.innerWidth >= 600 && (
          <motion.div className="absolute top-0 right-0 space-y-3 pt-2 translate-x-[150%] overflow-hidden" variants={container} initial="hidden" animate={control}>
            {project.fields.tags.map((tag, i) => {
              return (
                <motion.div key={i} variants={item}>
                  {tagToComponent(tag)}
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </div>
      <div className='z-10 bg-card w-[90%] rounded-md mx-auto p-4 relative -mt-10'>
        <h2 className='font-bold text-3xl mb-2'>{project.fields.title}</h2>
        <p className="text-paragraph">{project.fields.description}</p>
        <div className='w-max ml-auto space-x-2'>
          <a href={project.fields.repositoryLink} target="_blank" rel="noreferrer" className="inline-block hover:opacity-75" aria-label='Source code' role="button" tabIndex={0}>
            <VscGithubAlt className="text-rose-500"/>
          </a>
          <a href={project.fields.liveViewLink} target="_blank" rel="noreferrer" className="inline-block hover:opacity-75" aria-label='Live preview' role="button" tabIndex={0}>
            <BiLinkExternal className="text-rose-500"/>
          </a>
        </div>
      </div>
    </motion.li>
  )
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0, translateX: "-150%" },
  show: { opacity: 1, translateX: 0, transition: {
    type: "tween" 
  }}
}

export default ProjectCard