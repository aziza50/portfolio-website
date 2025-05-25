import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Footer = ({isDarkMode}) => {
  return (
    <div>
        <div>
            <Image src = {isDarkMode ? assets.logo_dark : assets.logo} alt = ' ' className = 'w-36 mx-auto mb-2'/>
        </div>
        <div className = 'flex items-center justify-center gap-3'>
            <Image src = {isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt = ' ' className='w-6'/>
        <h4 className = 'text-gray-700 dark:text-white/80'>
            aziza.ergasheva50@gmail.com
        </h4>
        </div>
        
        <div className="text-center sm:flex items-center justify-between border-t border-gray-400 dark:border-white/30 px-6 sm:px-[10%] mt-12 py-6">
        <p>
                © 2025 Aziza Ergasheva. All rights reserved.
            </p>
            <ul className='flex items-center gap-12 justify-center mt-4 sm:mt-0'>
                <li><a target = '_blank' href = "https://github.com/aziza50">GitHub</a></li>
                <li><a target = '_blank' href = "https://www.linkedin.com/in/aziza-ergasheva/">LinkedIn</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
