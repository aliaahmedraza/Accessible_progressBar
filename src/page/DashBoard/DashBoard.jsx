import React from 'react'
import ProgressBar from '../../component/ProgressBar/ProgressBar'
import LogoutButton from '../../component/LogoutButton/LogoutButton';
import Profile from '../../component/UserProfile/UserProfile';

const DashBoard = () => {
    const bars=[0,1,3,5,10,30,45,60,70,85,100];
  return (
    <div>
      <div className='flex flex-row-reverse m-5 items-center gap-5'>
         <div> <Profile/></div> 
      </div>
     {bars.map((value)=>{
        return (
          <div key={value}>
            <ProgressBar progress={value}/>
          </div>
        )
      })}
    </div>
  )
}

export default DashBoard
