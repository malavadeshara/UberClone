import React from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useState, useRef } from 'react';
import ConfirmRidePopup from '../components/ConfirmRidePopup';

const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  const RidePopupPanelRef = useRef(null);
  const ConfirmRidePopupPanelRef = useRef(null);

  useGSAP(function () {
    if (ridePopupPanel) {
      gsap.to(RidePopupPanelRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(RidePopupPanelRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [ridePopupPanel]);

  useGSAP(function () {
    if (confirmRidePopupPanel) {
      gsap.to(ConfirmRidePopupPanelRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(ConfirmRidePopupPanelRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [confirmRidePopupPanel]);

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
        <CaptainDetails />
      </div>

      <div ref={RidePopupPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <RidePopup setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>

      <div ref={ConfirmRidePopupPanelRef} className='fixed w-full z-10 translate-y-full bottom-0 h-screen bg-white px-3 py-10 pt-12'>
        <ConfirmRidePopup setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}/>
      </div>
    </div>
  )
}

export default CaptainHome