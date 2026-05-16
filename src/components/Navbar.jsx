import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-3 border-1 bg-cyan-950'>
        <div>
            <Link to="/" className='text-3xl text-white'>ShopHub</Link>
        </div>
        <div className='space-x-6 text-white'>
            <Link to="/">Home</Link>
            <Link to="/checkout">Cart</Link>
        </div>
        <div className='space-x-4'>
            <Link to="/auth"><button className='btn btn-secondary'>Login</button></Link>
            <Link to="/auth"><button className='btn btn-primary'>Signup</button></Link>
        </div>
    </nav>
  )
}

export default Navbar