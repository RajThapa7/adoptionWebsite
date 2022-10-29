import React from 'react'
import AdoptionPoints from './adoptionPoints'
import Slider from './slider'
import {data} from './adoptionData'
import Navbar from './navbar'
import Footer from './footer'
export default function WhyAdopt() {
  return (
    <>
    <Navbar></Navbar>
    <div className='py-10 px-8'>
    <h2 className='text-center text-4xl font-bold'>Why <span className='text-yellow-400'>Adopt?</span></h2>
    <Slider></Slider>
    {data.map((item, index)=>{
      return <AdoptionPoints data={item} key={index}></AdoptionPoints>

    })}
    </div>
    <Footer></Footer>
    </>

  )
}
