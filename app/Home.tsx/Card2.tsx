import React from 'react'
import Link from 'next/link'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full'>
        <Link href='https://portfolioo-vert.vercel.app/'>
          <div className='overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm'>
            <img
              src='./bwoi/MyPortfolio.png'
              className='object-contain w-full'
              alt=''
            />
            <div className='p-5 border border-t-0'>
              <p className='mb-3 text-xs font-semibold tracking-wide uppercase'>
                <a
                  href='/'
                  className='transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700'
                  aria-label='Category'
                  title='traveling'
                >
                  My Portfolio
                </a>
              </p>
              <p className='mb-2 text-gray-700'>
                My Portfolio is a showcase of various web applications,
                including RouteRover, Babylist, Happie, Boss Maintenance, and
                Getlinked. Utilizing technologies like NEXT.js, React, NextUi,
                and Tailwind CSS, it provides a comprehensive display of
                projects and skills.
              </p>
            </div>
          </div>
        </Link>
        <Link href='https://dm-supplies.vercel.app/'>
          {' '}
          <div className='overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm'>
            <img
              src='./bwoi/BossMaintenace.png'
              className='object-contain w-full'
              alt=''
            />
            <div className='p-5 border border-t-0'>
              <p className='mb-3 text-xs font-semibold tracking-wide uppercase'>
                <a
                  href='/'
                  className='transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700'
                  aria-label='Category'
                  title='traveling'
                >
                  Boss Maintenance
                </a>
              </p>
              <p className='mb-2 text-gray-700'>
                Boss Maintenance is a web app streamlining bulk supply ordering
                and shipping for building and maintenance materials, providing a
                convenient solution for businesses and individuals.
              </p>
            </div>
          </div>
        </Link>
        <Link href='https://get-linked-seven.vercel.app/'>
          <div className='overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm'>
            <img
              src='./bwoi/GetLinked.png'
              className='object-contain w-full'
              alt=''
            />
            <div className='p-5 border border-t-0'>
              <p className='mb-3 text-xs font-semibold tracking-wide uppercase'>
                <a
                  href='/'
                  className='transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700'
                  aria-label='Category'
                  title='traveling'
                >
                  Getlinked
                </a>
              </p>
              <p className='mb-2 text-gray-700'>
                Getlinked is a web app created as an entry for the Getlinked
                Tech Hackathon, showcasing skills and creativity in a project
                challenge environment.
              </p>
            </div>
          </div>
        </Link>
        <Link href='https://traveler-beta.vercel.app/'>
          <div className='overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm'>
            <img
              src='./bwoi/Trektopia.png'
              className='object-contain w-full'
              alt=''
            />
            <div className='p-5 border border-t-0'>
              <p className='mb-3 text-xs font-semibold tracking-wide uppercase'>
                <a
                  href='/'
                  className='transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700'
                  aria-label='Category'
                  title='traveling'
                >
                  TrekTopia
                </a>
              </p>
              {/* 
              <a
                href='/'
                aria-label='Category'
                title='Film It!'
                className='inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700'
              >
                Film It!
              </a> */}
              <p className='mb-2 text-gray-700'>
                TrekTopia is your gateway to exploring the stunning landscapes
                of our world.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Card
