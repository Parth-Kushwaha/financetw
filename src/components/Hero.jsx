import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white '>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex text-center flex-col justify-center '>
        <p className='text-[#00df9a]'>Grow with Data Analytics</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold'>Grow with Data</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-4xl sm:text-5xl text-xl font-bold mt-1'>Fast, Flexible Financing for</p>
            <Typed className='md:text-4xl sm:text-5xl text-xl font-bold mt-1 md:pl-4 pl-3 text-[#00df9a]'
                strings={['BTB','B2C','SASS']} 
                typeSpeed={120} 
               backSpeed={140} loop/>
        </div>
        <p className='md:text-2xl sm:text-xl font-bold text-gray-400'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00df9a] w-[150px] rounded-xl font-medium my-6 mx-auto py-3 text-black hover:scale-105'>Get Started</button>
      </div>
      
    </div>
  )
}

export default Hero
