import React from 'react'
import {
FaDribbbleSquare,
FaGithubSquare,
FaFacebookSquare,
FaInstagramSquare,
FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Bhai ka Finance</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam labore, blanditiis illo obcaecati omnis ratione velit repellendus iste et. At placeat amet doloribus? Nemo, omnis! Ex velit esse rerum error!</p>
            <div>
                <FaFacebookSquare/>
                <FaInstagramSquare/>
                <FaGithubSquare/>
                <FaTwitterSquare/>
            </div>
        </div>
    </div>
  )
}

export default Footer
