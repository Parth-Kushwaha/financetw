import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Singlecard = ({card}) => {
  return (
      <div className='bg-gray-200  w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto' src={card.img} alt="/" />
            <h2 className='text-center text-2xl py-8 font-bold'>{card.user}</h2>
            <p className='text-center text-4xl font-bold'>{card.price}</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b-2 mx-8 mt-4'>{card.storage}</p>
                <p className='py-2 border-b mx-8'>{card.user2}</p>
                <p className='py-2 border-b mx-8'>{card.send}</p>
            </div>
            <button className='bg-[#00df9a] w-[150px] rounded-xl font-medium my-6 mx-auto py-3 text-black  hover:scale-105'>Start Trial</button>
        </div>
  )
}

export default Singlecard
