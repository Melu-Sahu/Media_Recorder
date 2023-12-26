import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-start'>
      <Link className='m-2 p-3 bg-blue-300 text-red-500' to='/login'> Login </Link>
      <Link className='m-2 p-3 bg-blue-300 text-red-500' to='/signup'> Signup </Link>
    </div>
  )
}

export default Navbar
