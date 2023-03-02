import Head from 'next/head'
import { AiOutlineMail, AiOutlineGithub } from "react-icons/ai"
import { RxStack } from "react-icons/rx"
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

import client from "../../cms"

import ProjectCard from '@/components/ProjectCard'
import type { IProjects } from '@/types/contentful'

export default function Home({ projects } : { projects: IProjects[] }) {
  const [ftl, setFTL] = useState(true)
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsVisible(true)
      } else{
        setIsVisible(false)
      }
    })

    setFTL(false)
  }, [])

  const goToProjects = () => projectsRef.current?.scrollIntoView()

  return (
    <>
      <Head>
        <title>Cendy</title>
        <meta name="description" content="Full stack developer specialize in web development using JavaScript, CSS, HTML, and probably more. love to tinker with computers and stuff!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className='max-w-sm mx-auto p-2'>
      <AnimatePresence>
        {isVisible && (
            <motion.div className='fixed inset-0 p-4 flex max-w-sm mx-auto justify-between h-max items-center z-20 bg-card  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <p className='font-bold text-2xl'>Cendy</p>
              <motion.div layout="position" layoutId='button' className='space-x-2 flex'>
                <motion.a onClick={goToProjects} className="icon-button hover:after:content-['Projects'] group" aria-label='Project list' role="button" tabIndex={0}>
                  <RxStack size={24} className="group-hover:text-rose-500"/>
                </motion.a>
                <motion.a href="https://github.com/CLOEI" target="_blank" rel="noreferrer" className="icon-button hover:after:content-['GitHub'] group" aria-label='GitHub' role="button" tabIndex={0}>
                  <AiOutlineGithub size={24} className="group-hover:text-rose-500"/> 
                </motion.a>
                <motion.a href="mailto:contact@cendy.co" className="icon-button hover:after:content-['Email'] group" aria-label='Email' role="button" tabIndex={0}>
                  <AiOutlineMail size={24} className="group-hover:text-rose-500"/>
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div>
          <div className='h-screen flex items-center justify-center flex-col space-y-6'>
            <div className='text-center relative'>
              <motion.h1 className='text-5xl font-bold'>Hi, I&apos;m Cendy.</motion.h1>
              <p className='text-paragraph'>Probably a full-stack developer.</p>
              {!isVisible && (
                <div className='absolute bottom-0 right-[50%] translate-y-[150%] translate-x-[50%]'>
                  <motion.div layout='position' layoutId='button' className='flex space-x-2 items-center' variants={ftl ? container : undefined} initial="hidden" animate="show">
                    <motion.a onClick={goToProjects} className="icon-button hover:after:content-['Projects'] group" aria-label='Project list' role="button" tabIndex={0} variants={item}>
                      <RxStack size={24} className="group-hover:text-rose-500"/>
                    </motion.a>
                    <motion.a href="https://github.com/CLOEI" target="_blank" rel="noreferrer" className="icon-button hover:after:content-['GitHub'] group" aria-label='GitHub' role="button" tabIndex={0} variants={item}>
                      <AiOutlineGithub size={24} className="group-hover:text-rose-500"/> 
                    </motion.a>
                    <motion.a href="mailto:contact@cendy.co" className="icon-button hover:after:content-['Email'] group" aria-label='Email' role="button" tabIndex={0} variants={item}>
                      <AiOutlineMail size={24} className="group-hover:text-rose-500"/>
                    </motion.a>
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div ref={projectsRef}>
          <motion.ol className='relative border-l border-card' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            {projects.map((project, i) => {
              return (
                <ProjectCard project={project} key={i}/>
              )
            })}
          </motion.ol>
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const projects = await client.getEntries({
    content_type: "projects"
  })

  return {
		props: {
			projects: projects.items,
		},
		revalidate: 10,
	};
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
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}