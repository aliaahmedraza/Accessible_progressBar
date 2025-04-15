import React from 'react'
import LoginButton from '../LoginButton/LoginButton'

const NavBar = () => {
  return (
  <div className='grid grid-cols-1'> 
    <div className='flex justify-center mt-10 text-4xl text-[#1bacdd]'><strong>Accessible ProgressBar</strong></div>
        <div className='m-5 flex flex-row-reverse'>
      <LoginButton/>
    </div>
  </div>

  )
}

export default NavBar;
