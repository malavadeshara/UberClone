import React from 'react'

const CaptainDetails = () => {
  return (
    <div className='flex flex-col gap-4'>
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
  )
}

export default CaptainDetails