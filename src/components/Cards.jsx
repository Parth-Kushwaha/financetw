import React from 'react'

import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

import Singlecard from './Singlecard'

const Cards = () => {
    const cards=[
        {
            img:Single,
            user:'Single User',
            price: '$69',
            storage:'500GB',
            user2: '1 Granted User',
            send:'Send upto 2GB'
        },
        {
            img:Double,
            user:'Partnership',
            price:'$99',
            storage:'1TB',
            user2:'3 Granted Users',
            send:"Send upto 10GB"
        },
        {
            img:Triple,
            user:'Group Account',
            price: '$159',
            storage:'5TB',
            user2:'10 Users Allowed',
            send:'Send upto 20GB'
        }
        
    ]
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            {cards.map((card,index) => (<Singlecard card={card} key={index}/>))}
        </div>
    </div>
  )
}

export default Cards
