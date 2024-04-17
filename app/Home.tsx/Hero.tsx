import React from 'react'
import Bwoi from '@/public/bwoiyo.jpg'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className='py-12'>
      <div className='max-w-screen-2xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8'>
        <div className='flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl'>
          <h1 className='text-sm text-indigo-600 font-medium'>
            Over 20 successful deals
          </h1>
          <h2 className='text-3xl text-gray-800 font-extrabold md:text-5xl'>
            Hi👋🏽, <br />
            My Name is
            <br />
            Toheeb Olawale RAJI
            <br />I build Front-End for the Web
          </h2>
          <p>
            As a frontend developer deeply rooted in the React.js and Next.js
            ecosystems, I wield the power of cutting-edge technologies to craft
            seamless digital experiences. With a blend of creativity and
            technical prowess, I transform complex concepts into elegant
            solutions. My dedication to innovation drives me to explore new
            possibilities and push the boundaries of web development. Let&apos;s
            collaborate to turn your ideas into captivating user experiences!
          </p>
          <div className='items-center gap-x-3 space-y-3 sm:flex sm:space-y-0'>
            <a
              href='javascript:void(0)'
              className='block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none'
            >
              Let&apos;s get started
            </a>
            <a
              href='javascript:void(0)'
              className='flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex'
            >
              Get access
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
          </div>
        </div>
        <div className='flex-none mt-14 md:mt-0 md:max-w-xl'>
          <img
            src={Bwoi.src}
            className='lg:rounded-tl-[108px] h-[24rem] w-[30rem] lg:w-[36rem] rounded-xl'
            alt=''
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
