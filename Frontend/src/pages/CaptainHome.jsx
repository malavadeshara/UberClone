import React from 'react'
import { Link } from 'react-router-dom'

const CaptainHome = () => {
  return (
    <div className='h-screen'>
      <div className='fixed p-3 top-0 flex items-center justify-between w-screen'>
      <img className='w-16' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png'></img>
        <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-circle-line"></i>
        </Link>
      </div>
      <div className='h-3/5'>
        <img
          className='h-full w-full object-cover'
          src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'
          alt='car animation gif'
        />
      </div>
      <div className='h-2/5 p-6 flex flex-col justify-evenly'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start gap-3'>
            <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFfvz6rVtHLAg7FOQYMs72LRmI2Fc5UnO8w&s" alt="" />
            <h4 className='text-lg font-medium'>Harsh Patel</h4>
          </div>
          <div>
            <h4 className='text-xl font-semibold'>₹295.20</h4>
            <p className='text-sm text-gray-600 font-medium'>Earned</p>
          </div>
        </div>
        
        <div className='flex p-4 bg-gray-100 rounded-full items-center justify-evenly'>
          <div className='text-center'>
            <i className="text-3xl mb-2 font-light ri-timer-2-line"></i>
            <h5 className='text-lg font-medium'>10:02</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
            <i className="text-3xl mb-2 font-light ri-speed-up-line"></i>
            <h5 className='text-lg font-medium'>10:02</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
            <i className="text-3xl mb-2 font-light ri-booklet-line"></i>
            <h5 className='text-lg font-medium'>10:02</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaptainHome