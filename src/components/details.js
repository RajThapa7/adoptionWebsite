import React, { useContext } from 'react'
import Footer from './footer'
import Navbar from './navbar'
import video from '../images/video.mp4'
import {data} from './adoptionList'
import { useNavigate } from 'react-router-dom';

export default function Details() {
    const id = localStorage.getItem('Id')
const navigate = useNavigate();

  return (

    <>
    <Navbar></Navbar>
    {
        data.filter((item)=>item.id == id).map((item, id)=>{
            return  <div className='px-8 py-12' key={id}>
        <div className='object-contain w-auto '>

        <img src={item.img} alt="" className='rounded-t-lg mx-auto lg:max-w-2xl '/>
        </div>
        <div className='bg-slate-100 pb-6 rounded-b-lg px-2 lg:px-20 pt-4 lg:pt-6 '>
    <div className='flex flex-row w-full justify-items-end px-4 py-2'>
        <p className='w-1/3 font-semibold '>{item.name}</p>
        <div className='flex flex-row justify-center w-1/3'> <p className="font-semibold">{item.age}</p>
</div>
<div className='flex flex-row justify-end w-1/3'> <p className="font-semibold">{item.sex}</p>
</div>    
    </div>
    <div className='px-3 py-3 pb-5 text-gray-700 text-justify'>
      <p>{item.description}</p>
    </div>
    <div className='flex flex-row space-x-5 px-3 text-white font-semibold'>
      <button className='py-2 px-4 rounded-full bg-red-300 hover:brightness-75 transition-all duration-300 ease-in-out' onClick={()=>navigate('/adoption-form')}>Adopt me</button>

    </div>
    </div>
    <div className='mt-12'>
        <div className='text-center mb-8'>

<p className='mx-auto font-bold text-white text-xl bg-sky-400 px-3 py-3 w-5/6 md:w-1/2 lg:w-1/3 rounded-br-full rounded-tl-full'>Watch a video about me !!!</p>
        </div>
    <video  height="240" controls className='mx-auto  w-auto md:w-3/4 lg:w-1/2'>
  <source src={video} type="video/mp4"/>
  Your browser does not support the video tag.
</video>
    </div>
    </div>
        })
    }
    <Footer></Footer>
    </>
  )
}
