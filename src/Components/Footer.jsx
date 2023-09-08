import React from 'react'
import{AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
function Footer() {
  return (
    <div className='flex flex-row justify-between bg-tapia_blue px-2 py-3 text-white font-light'>
        <div>
            <p className='italic'>@Tapia Conference 2023</p>
        </div>
        <div className='flex gap-3 text-[1.5rem]'>
            <a href="https://github.com/khoaguye"><AiFillGithub/> </a>
            <a href="https://www.linkedin.com/in/khoa-nguyen2910/"><AiFillLinkedin/></a>
        </div>
    </div>
  )
}

export default Footer
