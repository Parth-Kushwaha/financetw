import React from 'react'

const Navbar = () => {
  return (
    <div className="text-white flex justify-between items-center max-w-[1240px] mx-auto px-4">
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Bhai ka Finance</h1>
      <ul className='flex'>
        <li className='p-3'>HOME</li>
        <li className='p-3'>COMPANY</li>
        <li className='p-3'>RESOURCES</li>
        <li className='p-3'>ABOUT</li>
        <li className='p-3'>CONTACT</li>
      </ul>
    </div>
  )
}

export default Navbar
