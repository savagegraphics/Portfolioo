'use client'
// import React from "react";
import Navbar from './Navbar'
import About from './About'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=''>
      <div className='text-left ml-6'>
        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold italic text-gray-800 dark:text-white'>
          Toheeb Olawale RAJI
        </h2>
        <p className='text-xs md:text-md lg:text-sm text-gray-600 italic dark:text-gray-400'>
          Front-End Dev
        </p>
      </div>

      <Navbar />
      {/* <About/> */}
    </div>
  )
}

export default page
