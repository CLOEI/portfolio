import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import { VscGithubAlt } from "react-icons/vsc";
import { motion } from "framer-motion";

import type { IProjects } from "@/types/contentful";

function ProjectCard({ project }: { project: IProjects }) {
  return (
    <motion.li className="mb-10 ml-4" initial={{ opacity: 0.75 }} whileInView={{ opacity: 1 }} viewport={{ amount: "all" }}>
      <div className='absolute w-3 h-3 bg-card rounded-full mt-1.5 -left-1.5 border border-rose-500'></div>
      <div className="relative w-full h-60 overflow-hidden rounded-md">
        <Image src={'https:' + project.fields.image.fields.file.url} fill={true} alt="" className="object-cover opacity-75"/>
      </div>
      <div className='z-10 bg-card w-[90%] rounded-md mx-auto p-4 relative -mt-10'>
        <h2 className='font-bold text-3xl'>{project.fields.title}</h2>
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

export default ProjectCard