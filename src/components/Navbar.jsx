import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav]=useState(false)

  const handleNav=()=>{
    setNav(!nav);
  }
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Bhai ka Finance</h1>
      <ul className='hidden md:flex'>
        <li className='p-3'>HOME</li>
        <li className='p-3'>COMPANY</li>
        <li className='p-3'>RESOURCES</li>
        <li className='p-3'>ABOUT</li>
        <li className='p-3'>CONTACT</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-900 ease-in-out duration-500': 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold m-4 mt-8 text-[#00df9a]'>Bhai ka Finance</h1>
        <ul className='p-4'>
          <li className='p-3 border-b border-gray-500'>HOME</li>
          <li className='p-3 border-b border-gray-500'>COMPANY</li>
          <li className='p-3 border-b border-gray-500'>RESOURCES</li>
          <li className='p-3 border-b border-gray-500'>ABOUT</li>
          <li className='p-3'>CONTACT</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
