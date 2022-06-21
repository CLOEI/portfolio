import type { NextPage } from 'next'
import { GiHamburgerMenu } from 'react-icons/gi'
import Head from 'next/head'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className='px-4 pt-2'>
      <Head>
        <title>Cendy</title>
      </Head>
      <div className='sticky top-2 flex justify-between items-center w-full h-10'>
        <p className='font-bold text-2xl'>C</p>
        <button>
            <GiHamburgerMenu size={25}/>
        </button>
      </div>
      <Hero/>
      <div className='mx-auto max-w-xs bg-[#1d1d1d] p-4 rounded-md'>
        <q>You only live once, but if you do it right, once is enough.</q>
        <p className='text-right'>― Mae West</p>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Home
