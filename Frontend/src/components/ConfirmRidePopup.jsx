import React from 'react'
import { Link } from 'react-router-dom';

const ConfirmRidePopup = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-3' onClick={() => { props.setRidePopupPanel(false) }}><i className="text-3 xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm this ride to sart</h3>
            <div className='flex justify-between items-center p-3 bg-yellow-400 rounded-lg mt-4'>
                <div className='flex items-center gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFfvz6rVtHLAg7FOQYMs72LRmI2Fc5UnO8w&s' />
                    <h2 className='text-lg font-medium'>Harsh Patel</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>
            <div className='flex justify-between flex-col gap-2 items-center'>
                {/* <img className='h-20' src='https://file.aiquickdraw.com/imgcompressed/img/compressed_aa5c6ec8df14f72b56496ae8712c2378.webp' /> */}
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
                <Link to="/captain-riding" className='w-full flex justify-center items-center mt-5 bg-green-500 text-white font-semibold p-2 rounded-lg'>Accept</Link>

                <button onClick={() => { props.setConfirmRidePopupPanel(false); props.setRidePopupPanel(false) }} className='w-full mt-5 text-white bg-red-500 font-semibold p-2 rounded-lg'>Cancel</button>
            </div>
        </div>
    )
}

export default ConfirmRidePopup