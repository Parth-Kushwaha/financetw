import React from 'react'
import {
FaGithubSquare,
FaFacebookSquare,
FaInstagramSquare,
FaTwitterSquare
} from 'react-icons/fa'
import FooterLi from './FooterLi'

const Footer = () => {
    const FaColumns=[
        {
            head:'Solutions',
            li1:'Analytics',
            li2:'Marketing',
            li3:'Commerce',
            li4:'Insights'
        },
        {
            head:'Support',
            li1:'Pricing',
            li2:'Documentation',
            li3:'Guides',
            li4:'API Status'
        },
        {
            head:'Company',
            li1:'About',
            li2:'Blog',
            li3:'Jobs',
            li4:'Press',
            li5:'Careers'
        },
        {
            head:'Legal',
            li1:'Claims',
            li2:'Policy',
            li3:'Terms',
            li4:''
        }
    ]
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Bhai ka Finance</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam labore, blanditiis illo obcaecati omnis ratione velit repellendus iste et. At placeat amet doloribus? Nemo, omnis! Ex velit esse rerum error!</p>
            <div className='flex justify-between md:w-[75%] my-3'>
                <FaFacebookSquare size={40}/>
                <FaInstagramSquare size={40}/>
                <FaGithubSquare size={40}/>
                <FaTwitterSquare size={40}/>
            </div>  
        </div>
        <div className=' lg:col-span-2 flex justify-between mt-[1.5rem]'>
            {FaColumns.map((list,index)=>(<FooterLi list={list} key={index}/>))} 
        </div>
    </div>
  )
}

export default Footer
