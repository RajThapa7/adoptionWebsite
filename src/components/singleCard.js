import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../images/slider4.jpg'
import { IdContext } from "../App";

export default function SingleCard({img, name, age, sex, description, Id}) {
  const { id } = useContext(IdContext);
  const { setId } = useContext(IdContext);
  const navigate = useNavigate();
  return (
<>
<div className='shadow-md shadow-gray-400 rounded-lg bg-slate-100'>
  <div className='object-contain w-auto  '>
    <img src={img} alt="" className='rounded-t-lg mx-auto'/>
  </div>
    <div className='bg-slate-100 pb-6 rounded-b-lg px-2 pt-3 '>
    <div className='flex flex-row w-full justify-items-end px-4 py-2'>
        <p className='w-1/3 font-semibold '>{name}</p>
        <div className='flex flex-row justify-center w-1/3'> <p className="font-semibold">{age}</p>
</div>
<div className='flex flex-row justify-end w-1/3'> <p className="font-semibold">{sex}</p>
</div>    
    </div>
    <div className='px-3 py-3 pb-5 text-gray-700'>
      <p>{description}</p>
    </div>
    <div className='flex flex-row space-x-5 px-3 text-white font-semibold'>
      <button className='py-2 px-4 rounded-full bg-sky-300 hover:brightness-75 transition-all duration-300 ease-in-out' onClick={(e)=>{
        localStorage.setItem('Id',Id)
        navigate('/details')}}>More Details</button>
      <button className='py-2 px-4 rounded-full bg-red-300 hover:brightness-75 transition-all duration-300 ease-in-out' onClick={(e)=>{
        localStorage.setItem('Id',Id)
        navigate('/adoption-form')}}>Adopt</button>

    </div>
    </div>
</div>
</>
  )
}
