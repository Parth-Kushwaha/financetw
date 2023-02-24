import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-white'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 mx-2'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
            <p>Subscribe to our Newsletter and stay up to date</p>
        </div>
        <div className='my-4 mx-2'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='p-3 flex rounded-xl w-full text-black' type="email" placeholder='Enter Email' />
                <button className='bg-[#00df9a] w-[100px] rounded-xl font-medium my-6 mx-auto ml-2 py-3 text-black  hover:scale-105'>Notify Me</button>
        </div>
        <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy</span></p>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
