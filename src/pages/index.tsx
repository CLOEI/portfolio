import Head from 'next/head'
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai"
import { RxStack } from "react-icons/rx"
import { VscGithubAlt } from "react-icons/vsc"
import { BiLinkExternal } from "react-icons/bi"

import client from "../../cms"

import Image from "next/image"

export default function Home({ projects }) {
  console.log(projects)
  return (
    <>
      <Head>
        <title>Cendy</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className='max-w-sm mx-auto p-2'>
        <div>
          <div className='h-screen flex items-center justify-center flex-col space-y-6'>
            <div className='text-center'>
              <h1 className='text-5xl font-bold'>Hi, I&apos;m Cendy.</h1>
              <p className='text-paragraph'>Probably a full-stack developer.</p>
            </div>
            <div className='space-x-2'>
              <a href="#projects" className="icon-button hover:after:content-['Projects'] group" aria-label='Project list' role="button" tabIndex={0}>
                <RxStack size={24} className="group-hover:text-rose-500"/>
              </a>
              <a href="JavaScript:void(0)" className="icon-button hover:after:content-['Instagram'] group" aria-label='Instagram' role="button" tabIndex={0}>
                <AiOutlineInstagram size={24} className="group-hover:text-rose-500"/> 
              </a>
              <a href="JavaScript:void(0)" className="icon-button hover:after:content-['Email'] group" aria-label='Email' role="button" tabIndex={0}>
                <AiOutlineMail size={24} className="group-hover:text-rose-500"/>
              </a>
            </div>
          </div>
        </div>
        <div id="projects">
          <ol className='relative border-l border-card'>
            {projects.map((project, i) => {
              return (
                <li key={i} className="mb-10 ml-4">
                  <div className='absolute w-3 h-3 bg-card rounded-full mt-1.5 -left-1.5 border border-rose-500'></div>
                  <div className="relative w-full h-60 overflow-hidden rounded-md">
                    <Image src={'https:' + project.fields.image.fields.file.url} fill={true} alt="" objectFit='cover'/>
                  </div>
                  <div className='z-10 bg-card w-[90%] rounded-md mx-auto p-4 relative -mt-10'>
                    <h2 className='font-bold text-3xl'>{project.fields.title}</h2>
                    <div className='w-max ml-auto space-x-2'>
                      <a href="JavaScript:void(0)" className="inline-block hover:opacity-75" aria-label='Source code' role="button" tabIndex={0}>
                        <VscGithubAlt className="text-rose-500"/>
                      </a>
                      <a href="JavaScript:void(0)" className="inline-block hover:opacity-75" aria-label='Live preview' role="button" tabIndex={0}>
                        <BiLinkExternal className="text-rose-500"/>
                      </a>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
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