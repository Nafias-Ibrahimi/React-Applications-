import React, { useState } from 'react'

export default function LoginForm() {

    const [email , setEmail]=useState('');
    const [passwrd ,setPasswrd]=useState('');
    const handleSubimt=(e)=>{
        e.preventDefault();
        console.log('Email:' ,email);
        console.log('password:' ,passwrd);
    }


  return (
  <div className='flex items-center justity-center min-h-screen bg-gray-100'>
        <form onSubmit={handleSubimt}
        className='bg-white p-8 rounded-lg shadow-md w-96'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>

            {/* email input */}
            <div className='mb-4'>
                <label className='block text-gray-700 mb-2'>Email:</label>
                <input type="email" value={email}onChange={(e) =>setEmail(e.target.value)} placeholder='Enter your email' />

            </div>

            {/* passowrd input */}
            <div className='mb-6'>
                <label htmlFor="" className='block text-gray-700 mb-2'>Password:</label>
                <input type="password" value={passwrd} placeholder='enter your password'/>
            </div>

            {/* Submit Button */}
            <button type='submit' className='className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200'>Login</button>


        {/* Extra Links */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
        </form>

  {/* <input type='email'  onChange={e =>setEmail(e.target.value)} placeholder='enter your email'/>
  
  <input type='password'  onChange={e =>setPasswrd(e.target.value)} placeholder='enter your password'/> */}
  
  {/* <button onClick={email}>Click me</button>
  <button onClick={passwrd}>add</button> */}
  
  </div>
  )
}
