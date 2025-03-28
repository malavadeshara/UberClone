import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-3' onClick={() => { props.setWaitingForDriver(false) }}><i className="text-3 xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
      
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
          <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11 - A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
            </div>
          </div>

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
    </div>
  )
}

export default WaitingForDriver;