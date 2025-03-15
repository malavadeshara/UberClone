import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setdestination] = useState('');
  const [panelOpen, setpanelOpen] = useState(false);
  const PanelRef = useRef(null);
  const PanelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(PanelRef.current, {
        height: '70%',
        padding: 24,
        opacity: 1,
      })
      gsap.to(PanelCloseRef.current, {
        opacity: 1,
      })
    } else {
      gsap.to(PanelRef.current, {
        height: '0%',
        padding: 0,
      })
      gsap.to(PanelCloseRef.current, {
        opacity: 0,
      })
    }
  }, [panelOpen])

  return (
    <div className='h-full w-full relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png'></img>

      <div className='h-screen w-screen '>
        {/* image for temp use */}
        <img className='h-full w-full object-cover' src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif' alt='car animation gif' />
      </div>

      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] bg-white p-6 relative'>
          <h5 ref={PanelCloseRef} className='absolute right-6 top-6 text-2xl opacity-0' onClick={() => setpanelOpen(false)}>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => { submitHandler(e) }}>
            <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full'></div>
            <input
              className='bg-[#eee] px-10 py-2 text-lg rounded-lg w-full mt-5'
              type='text'
              placeholder='Add a pick-up location'
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onClick={() => setpanelOpen(true)}
            />
            <input
              className='bg-[#eee] px-10 py-2 text-lg rounded-lg w-full mt-3'
              type='text'
              placeholder='Add a drop-off location'
              value={destination}
              onChange={(e) => setdestination(e.target.value)}
              onClick={() => setpanelOpen(true)}
            />
          </form>
        </div>

        <div ref={PanelRef} className='bg-white h-0'>
          <LocationSearchPanel />
        </div>
      </div>

      <div className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8'>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div className='flex active:border-2 active:border-black bg-gray-100 mb-2 rounded-sm w-full p-3 items-center gap-4'>
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

        <div className='flex active:border-2 active:border-black bg-gray-100 mb-2 rounded-sm w-full p-3 items-center gap-4'>
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

        <div className='flex active:border-2 active:border-black bg-gray-100 mb-2 rounded-sm w-full p-3 items-center gap-4'>
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
    </div>
  )
}

export default Home; 