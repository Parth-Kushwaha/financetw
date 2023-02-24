import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px mx-auto my-4' src={Laptop} alt="/" />
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] text-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p>It’s never easy to determine where to start data analytics projects. Do you constantly confront several questions 
            at the start of a project, such as what are the project’s goals? How can I become more familiar with the
             information? What are the issues you’re attempting to address? What are the possibilities for a solution? 
             What abilities are required? How will you assess your model, and most importantly, where will you start?</p>
             <button className='bg-[#00df9a] w-[150px] rounded-xl font-medium my-6 mx-auto py-3 text-black  hover:scale-105'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
