import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-3' onClick={() => { props.setVehiclePanelOpen(false) }}><i className="text-3 xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div onClick={() => { props.setconfirmedRidePanel(true) }} className='flex active:border-2 active:border-black border-2 border-gray-100 bg-gray-100 mb-2 rounded-sm w-full p-3 items-center gap-4'>
          <div className='h-full w-16'>
            <img className='h-[90%] w-[90%] mx-auto' src='https://file.aiquickdraw.com/imgcompressed/img/compressed_aa5c6ec8df14f72b56496ae8712c2378.webp' />
          </div>
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, Compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹193.20</h2>
        </div>

        <div onClick={() => { props.setconfirmedRidePanel(true) }} className='flex active:border-2 active:border-black border-2 border-gray-100 bg-gray-100 mb-2 rounded-sm w-full p-3 items-center gap-4'>
          <div className='h-full w-16'>
            <img className='h-full w-full object-cover' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png' />
          </div>
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable motercycles rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹65.17</h2>
        </div>

        <div onClick={() => { props.setconfirmedRidePanel(true) }} className='flex active:border-2 active:border-black border-2 border-gray-100 bg-gray-100 mb-2 rounded-sm w-full p-3 items-center gap-4'>
          <div className='h-full w-16'>
            <img className='h-full w-full object-cover' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png' />
          </div>
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, Compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹118.21</h2>
        </div>
    </div>
  )
}

export default VehiclePanel