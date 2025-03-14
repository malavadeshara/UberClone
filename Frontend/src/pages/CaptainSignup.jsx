import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignup = () => {

  const Navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const {captain, setCaptain} = useContext(CaptainDataContext);


  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        type: vehicleType
      }
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

    if(response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      Navigate('/Captain-home');
    }

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" />
        <form onSubmit={(e) => {
          submitHandler(e);
        }}>

          <h3 className='text-lg font-medium mb-2'>What's our captain's name?</h3>
          <div className='flex gap-4 mb-7'>
          <input required
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base'
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input required
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base'
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          </div>


          <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
          <input required
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-base'
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input required
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-base'
            type="password"
            placeholder='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <div className='flex gap-4 mb-7'>
            <div className='w-1/2'>
              <h3 className='text-lg font-medium mb-2'>Vehicle Color</h3>
              <input required
                className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base placeholder:text-base'
                type="text"
                placeholder="Vehicle Color"
                value={vehicleColor}
                onChange={(e) => {
                  setVehicleColor(e.target.value);
                }}
              />
            </div>
            <div className='w-1/2'>
              <h3 className='text-lg font-medium mb-2'>Vehicle Plate</h3>
              <input required
                className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base placeholder:text-base'
                type="text"
                placeholder="Vehicle Plate"
                value={vehiclePlate}
                onChange={(e) => {
                  setVehiclePlate(e.target.value);
                }}
              />
            </div>
          </div>

          <div className='flex gap-4 mb-7'>
            <div className='w-1/2'>
              <h3 className='text-lg font-medium mb-2'>Vehicle Capacity</h3>
              <input required
                className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base placeholder:text-base'
                type="number"
                placeholder="Vehicle Capacity"
                value={vehicleCapacity}
                min="1"
                max="10"
                onChange={(e) => {
                  setVehicleCapacity(e.target.value);
                }}
              />
            </div>
            <div className='w-1/2'>
              <h3 className='text-lg font-medium mb-2'>Vehicle Type</h3>
              <select required
                className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base placeholder:text-base'
                value={vehicleType}
                onChange={(e) => {
                  setVehicleType(e.target.value);
                }}
              >
                <option value="" disabled>Select Vehicle Type</option>
                <option value="auto">Auto</option>
                <option value="Van">Van</option>
                <option value="Motorcycle">Motorcycle</option>
              </select>
            </div>
          </div>

          <button className='bg-[#111] text-white mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Create Captain Account</button>
        </form>
        <p className='text-center'>Already have an account? <Link to="/Captain-login" className='text-blue-600'>Login here</Link></p>
      </div>

      <div className='mt-7'>
        <p className='text-[10px] mb-7'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default CaptainSignup