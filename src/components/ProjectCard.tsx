import Image from "next/image";
import { motion, useAnimationControls, useInView } from "framer-motion";

import { BiLinkExternal } from "react-icons/bi";
import { VscGithubAlt } from "react-icons/vsc";

import type { IProjects } from "@/types/contentful";
import { useEffect, useRef } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import tagToComponent from "@/utils/tagToComponent";

function ProjectCard({ project }: { project: IProjects }) {
  const { width } = useWindowSize()
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


  return (
    <motion.li className="mb-10 ml-4" initial={{ opacity: 0.75 }} whileInView={{ opacity: 1 }} viewport={{ amount: "all" }} ref={containerRef}>
      <div className='absolute w-3 h-3 bg-card rounded-full mt-1.5 -left-1.5 border border-rose-500'></div>
      <div className="relative">
        <div className="relative w-full h-60 rounded-md overflow-hidden">
          <Image src={'https:' + project.fields.image.fields.file.url} fill={true} alt="" className="object-cover opacity-75"/>
        </div>
        {width && width >= 600 && (
          <motion.div className="absolute top-0 right-0 space-y-3 pt-2 translate-x-[150%] overflow-hidden" variants={container} initial="hidden" animate={control}>
            {project.fields.tags.map((tag, i) => {
              return (
                <motion.div key={i} variants={item} className="cursor-pointer">
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
          {project.fields.repositoryLink && project.fields.repositoryLink.length > 0 && (
            <a href={project.fields.repositoryLink} target="_blank" rel="noreferrer" className="inline-block hover:opacity-75 p-1" aria-label='Source code' role="button" tabIndex={0}>
            <VscGithubAlt className="text-rose-500"/>
          </a>
          )}
          <a href={project.fields.liveViewLink} target="_blank" rel="noreferrer" className="inline-block hover:opacity-75 p-1" aria-label='Live preview' role="button" tabIndex={0}>
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