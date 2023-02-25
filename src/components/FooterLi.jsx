import React from 'react'

const FooterLi = ({list}) => {
  return (
        <div>
            <h6 className='font-medium'>{list.head}</h6>
            <ul>
                <li className='py-2 text-sm'>{list.li1}</li>
                <li className='py-2 text-sm'>{list.li2}</li>
                <li className='py-2 text-sm'>{list.li3}</li>
                <li className='py-2 text-sm'>{list.li4}</li>
                <li className='py-2 text-sm'>{list.li5}</li>
            </ul>
        </div>
  )
}

export default FooterLi
