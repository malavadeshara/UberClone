import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
      <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
      <i className="text-lg font-medium ri-home-4-line"></i>
      </Link>
      <div className='h-1/2'>
        <img
          className='h-full w-full object-cover'
          src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'
          alt='car animation gif'
        />
      </div>
      <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between px-5'>
          <img className='h-14' src='https://file.aiquickdraw.com/imgcompressed/img/compressed_aa5c6ec8df14f72b56496ae8712c2378.webp' />
          <div className='text-right'>
            <h2 className='text-lg font-medium'>Sarthak</h2>
            <h4 className='text-xl font-semibold text-gray-800 -mt-1 -mb-1'>mh-02-ab-420</h4>
            <p className='text-sm text-gray-500'>Maruti Suzuki Swift</p>
          </div>
        </div>

        <div className='flex justify-between flex-col gap-2 items-center'>

          <div className='w-full mt-5'>
            {/* <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className='text-lg font-medium'>562/11 - A</h3>
                <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
              </div>
            </div> */}

            <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
              <i className="text-lg ri-map-pin-fill"></i>
              <div>
                <h3 className='text-lg font-medium'>562/11 - A</h3>
                <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
              </div>
            </div>

            <div className='flex items-center gap-5 p-3 border-gray-300'>
              <i className="text-lg ri-currency-fill"></i>
              <div>
                <h3 className='text-lg font-medium'>₹193.20</h3>
                <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
              </div>
            </div>

          </div>
        </div>

        <button className='w-full mt-5 bg-green-500 text-white font-semibold p-2 rounded-lg'>Make a payment</button>
      </div>
    </div>
  )
}

export default Riding