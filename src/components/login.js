import React, {useRef, useState, useEffect} from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import Logo from '../images/logo.png'
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import vector from '../images/vector-img1.png'
import blueLogo from '../images/bluelogo.png'
import slogan from '../images/slogan.png'
export default function Login() {
  const heightRef = useRef(null);
  const [height, setHeight ] = useState(0);
  useEffect(() => {
    setHeight(`${heightRef.current.clientHeight}px`);
  }, []);
  return (
    <>
    <div className='h-screen w-screen bg-blue-400 flex justify-center items-center bg-gradient-to-br from-blue-300 via-blue-400  to-blue-500'>
        {/* for two separate blocks on larger screens */}
        <div className='lg:flex lg:flex-row lg:mx-24 lg:justify-center lg:items-center  lg:rounded-xl lg:shadow-md lg:shadow-slate-500'>
            {/* First block */}
    <div className={`hidden lg:flex flex-col w-1/2 bg-gradient-to-br from-blue-500 via-blue-400  to-blue-300 bg-opacity-50 backdrop-blur-xl px-10 py-2 pb-10 lg:rounded-tl-xl lg:rounded-bl-lg`} style={{height: `${height}`, maxHeight:`${height}`}}>
    <img src={Logo} alt="dharabatti logo" className='w-24 self-start' />   
     <img src={vector} alt="" className='w-80 mt-20' />
     <img src={slogan} alt="" className='w-96 mt-16' />
    </div>
    {/* second block */}
        <div ref = {heightRef} className=' mx-auto my-auto bg-white opacity-100 rounded-lg backdrop-blur-sm shadow-md shadow-slate-500 pb-10 pt-5 lg:w-1/2 lg:py-12 lg:rounded-none lg:shadow-none lg:rounded-tr-xl lg:rounded-br-lg'>
            <div className='text-center flex flex-col space-y-2'>
            <img src={blueLogo} alt="dharabatti logo" className='w-28 self-center lg:hidden' />
            <p className='font-bold text-2xl'>Get's Started.</p>
            <span className='text-slate-400'>New to myfurryfriend? <Link to="/register" className='text-yellow-600'>Register here</Link></span>
            </div>
            <form className='flex flex-col justify-center p-12 pt-10 space-y-3 '>
        <label htmlFor="email" className='inline-flex items-center  text-slate-700' ><HiOutlineMail/>&nbsp;Email address</label>
        <input type="Email" className='mb-6  border-2 rounded-md border-slate-400 p-2  valid:border-yellow-400  focus:outline-blue-400 [&:not(:placeholder-shown)]:focus:invalid:outline-red-500 [&:not(:placeholder-shown)]:focus:invalid:text-red-500 [&:not(:placeholder-shown)]:invalid:border-red-500 [&:not(:placeholder-shown)]:invalid:text-red-500' pattern="^[^ ]+@[^ ]+\.[a-z]{2,6}$" placeholder='Email address' required/>
        <label htmlFor="password" className='inline-flex items-center text-slate-700'><RiLockPasswordLine/>&nbsp;Password</label>
        <input type="password" className='border-2 rounded-md border-slate-400 p-2 valid:border-yellow-400  focus:outline-blue-400' placeholder='Password' required  />
        <div></div>
        <div></div>

        <button className='bg-yellow-500 w-auto h-auto rounded-md text-white font-semibold p-2 mt-10 border-0 shadow-sm shadow-yellow-800'>LOG IN</button>
        <Link to="/" className='text-center text-blue-400 underline underline-offset-2  hover:text-blue-600'>Go back home</Link>
    </form>
        </div>
        </div>
        
    </div>
    </>

  )
}
