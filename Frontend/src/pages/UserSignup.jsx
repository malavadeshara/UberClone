import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [userData, setUserData] = useState({});

  const {user, setUser} = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" />
        <form onSubmit={(e) => {
          submitHandler(e);
        }}>

          <h3 className='text-lg font-medium mb-2'>What's your name?</h3>
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
          <button className='bg-[#111] text-white mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Create account</button>
        </form>
        <p className='text-center'>Already have an account? <Link to="/login" className='text-blue-600'>Login here</Link></p>
      </div>

      <div>
        {/* <p className='text-[10px] leading-tight text-gray-400'>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p> */}
        <p className='text-[10px]'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default UserSignup;