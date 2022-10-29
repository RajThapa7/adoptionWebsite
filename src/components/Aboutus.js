import React from 'react'
import { IoPaw } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa";
import { MdNightShelter } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import img from '../images/catdog1.png'
export default function AboutUs() {
  return (
    <div className='px-8 pb-16 pt-8 -z-20'>
    <p className='text-3xl text-center font-semibold mb-4 text-yellow-500'>Adopting a pet <span className='text-blue-500'>made easier</span></p>
    <p className='text-xl text-center font-medium text-gray-700 mt-4 md:px-12'>My furry friend helps you find your new best friend in few simple steps </p>
    <div className='flex flex-row w-full'>

        <div className="hidden lg:flex w-1/3 mr-32">
            <img src={img} alt="" className='object-contain' />

        </div>
        

    <div className='space-y-8 flex flex-col mt-12 self-center mx-auto lg:w-2/3  '>

    <div className='inline-flex space-x-5'>
        <IoPaw className='bg-yellow-500  rounded-full text-white text-4xl p-1 self-center'/>
        <div className='flex flex-col'>
            <p className='font-bold text-cyan-700 text-lg'>Step 1:</p>
            <p className='font-medium text-gray-700 text-md'>Select a furry friend from the adoption list</p>
        </div>
    </div>
    <div className='inline-flex space-x-5'>
        <MdNightShelter className='bg-yellow-500  rounded-full text-white text-4xl p-1 self-center'/>
        <div className='flex flex-col'>
            <p className='font-bold text-cyan-700 text-lg'>Step 2:</p>
            <p className='font-medium text-gray-700 text-md'>Visit the shelter and meet your furry friend</p>
        </div>
    </div>
    <div className='inline-flex space-x-5'>
        <FaWpforms className='bg-yellow-500  rounded-full text-white text-4xl p-1 self-center'/>
        <div className='flex flex-col'>
            <p className='font-bold text-cyan-700 text-lg'>Step 3:</p>
            <p className='font-medium text-gray-700 text-md'>Fill out the adoption form</p>
        </div>
    </div>
    
    <div className='inline-flex space-x-5'>
        <IoHome className='bg-yellow-500  rounded-full text-white text-4xl p-1 self-center'/>
        <div className='flex flex-col'>
            <p className='font-bold text-cyan-700 text-lg'>Step 4:</p>
            <p className='font-medium text-gray-700 text-md'>Take your new furry friend to home</p>
        </div>
    </div>
    </div>
    </div>

    </div>
    
  )
}
